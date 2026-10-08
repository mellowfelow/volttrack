// Payment-method parts + standing terms — one source, rendered to email HTML,
// WhatsApp text and JSX. Everything reads from SITE.reply.
import { SITE } from '@/config/site'
import { escapeHtml } from '@/lib/emailTemplate'

export function money(n) {
  const { symbol, code } = SITE.reply.currency
  return `${symbol}${Number(n || 0).toLocaleString('en-US')} ${code}`
}

export function findMethod(methodId) {
  return SITE.reply.paymentMethods.find((m) => m.id === methodId) || SITE.reply.paymentMethods[0]
}

function fill(tpl, amount, ref) {
  return String(tpl || '')
    .replace(/\{amount\}/g, money(amount))
    .replace(/\{ref\}/g, ref || '')
}

// { opening, closing, method } with {amount}/{ref} tokens resolved.
export function paymentMethodParts(methodId, amount, ref) {
  const method = findMethod(methodId)
  return {
    method,
    opening: fill(method.opening, amount, ref),
    closing: fill(method.closing, amount, ref),
  }
}

// Standing terms appended to every payment email + WhatsApp message.
export function paymentTermsLines(ref, methodId) {
  const r = SITE.reply
  const method = findMethod(methodId)
  const lines = [
    `Complete payment within ${r.deadlineHours}h to confirm this order.`,
    `Use your order number — ${ref} — as the payment reference.`,
  ]
  if (method && method.instantRailNote) lines.push(method.instantRailNote)
  if (r.dispatchLine) lines.push(r.dispatchLine)
  const wa = r.channels.whatsapp
  lines.push(
    `Once paid, send a screenshot of the completed payment to ${r.channels.email}${wa ? ` or WhatsApp ${wa}` : ''} for confirmation.`,
  )
  return lines
}

export function paymentTermsHtml(ref, methodId) {
  const items = paymentTermsLines(ref, methodId)
    .map((l) => `<li style="margin:0 0 8px;font:400 13px/1.6 -apple-system,Segoe UI,Arial,sans-serif;color:#4B4F56">${escapeHtml(l)}</li>`)
    .join('')
  return `<div style="margin:18px 0 6px;padding-top:16px;border-top:1px solid #EAE3DC"><div style="margin:0 0 8px;font:700 11px/1.4 -apple-system,Segoe UI,Arial,sans-serif;letter-spacing:.08em;text-transform:uppercase;color:#6F665F">Before you pay</div><ul style="margin:0;padding-left:18px">${items}</ul></div>`
}

// ── Payment-detail parsing ──────────────────────────────────────────────────
// The admin pastes ONE blob of real payment info (bank wire, wallet, Zelle,
// link). Mail/WhatsApp copy often collapses it to a single line, so we split it
// into individually-labelled {label, value} fields. Used by the email, the
// WhatsApp message and the composer preview so all three always match.
//
// Known label vocabulary, longest first so "Beneficiary name & address" wins
// over "Beneficiary". Anything not matched falls back to "Label: value" lines.
const KNOWN_LABELS = [
  ['beneficiary\\s*name\\s*(?:&|and)\\s*address', 'Beneficiary name & address'],
  ['beneficiary\\s*name', 'Beneficiary name'],
  ['beneficiary\\s*address', 'Beneficiary address'],
  ['beneficiary', 'Beneficiary'],
  ['account\\s*holder(?:\\s*name)?', 'Account holder'],
  ['account\\s*name', 'Account name'],
  ['account\\s*(?:number|no\\.?|#)', 'Account number'],
  ['account\\s*type', 'Account type'],
  ['international\\s*routing\\s*(?:number|no\\.?)', 'International routing number'],
  ['(?:aba\\s*)?routing\\s*(?:number|no\\.?)', 'Routing number'],
  ['aba', 'ABA'],
  ['swift\\s*(?:\\/\\s*bic\\s*)?code', 'SWIFT code'],
  ['swift\\s*\\/\\s*bic', 'SWIFT / BIC'],
  ['swift', 'SWIFT'],
  ['bic', 'BIC'],
  ['iban', 'IBAN'],
  ['sort\\s*code', 'Sort code'],
  ['bank\\s*name', 'Bank name'],
  ['bank\\s*branch\\s*ad\\w*', 'Bank branch address'],
  ['branch\\s*ad\\w*', 'Branch address'],
  ['bank\\s*ad\\w*', 'Bank address'],
  ['wallet\\s*address', 'Wallet address'],
  ['network', 'Network'],
  ['memo', 'Memo'],
  ['zelle\\s*(?:email|phone|number)', 'Zelle'],
  ['payment\\s*link', 'Payment link'],
  ['reference', 'Reference'],
]
const LABEL_RES = KNOWN_LABELS.map(([p, label]) => [new RegExp(`^(?:${p})$`, 'i'), label])
const FIND_LABEL = new RegExp(
  `(?:^|[\\s,;])((?:${KNOWN_LABELS.map(([p]) => p).join('|')}))(?![A-Za-z])\\s*[:\\-–]?\\s*`,
  'gi',
)

function canonicalLabel(raw) {
  const t = raw.trim()
  for (const [re, label] of LABEL_RES) if (re.test(t)) return label
  return t.charAt(0).toUpperCase() + t.slice(1)
}

function clean(v) {
  return String(v || '').replace(/\s+/g, ' ').replace(/^[\s,;:–-]+|[\s,;]+$/g, '').trim()
}

export function parsePaymentDetail(raw) {
  let text = String(raw || '').replace(/\r/g, '').trim()
  if (!text) return []
  // URL-encoded paste artefacts ("Beneficiary+name") — skip when it looks like a link.
  if (!/https?:\/\//i.test(text)) text = text.replace(/([A-Za-z])\+(?=[A-Za-z])/g, '$1 ')

  // 1) Known labels anywhere in the text (handles a single collapsed line).
  const hits = []
  FIND_LABEL.lastIndex = 0
  let m
  while ((m = FIND_LABEL.exec(text))) {
    const start = m.index + m[0].indexOf(m[1])
    hits.push({ start, end: m.index + m[0].length, label: canonicalLabel(m[1]) })
  }
  if (hits.length >= 2) {
    const fields = []
    hits.forEach((h, i) => {
      const value = clean(text.slice(h.end, i + 1 < hits.length ? hits[i + 1].start : undefined))
      if (value) fields.push({ label: h.label, value })
    })
    if (fields.length >= 2) return fields
  }

  // 2) Line-by-line "Label: value"; unlabelled lines continue the previous value.
  const fields = []
  let n = 0
  for (const line of text.split('\n').map((l) => l.trim()).filter(Boolean)) {
    const c = /^([^:]{2,40}):\s*(.+)$/.exec(line)
    if (c && !/^https?$/i.test(c[1])) {
      fields.push({ label: canonicalLabel(c[1]), value: clean(c[2]) })
    } else if (fields.length && fields.length > 0 && fields[fields.length - 1].cont) {
      fields[fields.length - 1].value += ` ${clean(line)}`
    } else {
      n += 1
      fields.push({ label: fields.length === 0 && !text.includes('\n') ? 'Payment details' : `Detail ${n}`, value: clean(line), cont: true })
    }
  }
  return fields.map(({ label, value }) => ({ label, value }))
}

// Plain-text rendering of the parsed fields: "Label: value" per line.
export function paymentDetailText(raw) {
  const fields = parsePaymentDetail(raw)
  if (fields.length === 0) return ''
  if (fields.length === 1 && fields[0].label === 'Payment details') return fields[0].value
  return fields.map((f) => `${f.label}: ${f.value}`).join('\n')
}

// opening + admin's pasted variable detail (parsed to one field per line) + closing.
export function instructionsParts(opening, detail, closing) {
  return [opening, paymentDetailText(detail), closing].filter(Boolean).join('\n\n')
}
