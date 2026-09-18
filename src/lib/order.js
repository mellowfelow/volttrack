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
    .map((l) => `<li style="margin:0 0 6px;font:400 13px/1.6 -apple-system,Segoe UI,Arial,sans-serif;color:#4B4F56">${escapeHtml(l)}</li>`)
    .join('')
  return `<ul style="margin:6px 0 0;padding-left:18px">${items}</ul>`
}

// opening + admin's pasted variable detail + closing, blank-line joined.
export function instructionsParts(opening, detail, closing) {
  return [opening, detail, closing].filter(Boolean).join('\n\n')
}
