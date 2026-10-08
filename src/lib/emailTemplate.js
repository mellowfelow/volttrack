// Branded transactional email builder — LIGHT shell (white card, dark brand
// header band, brand as accent only). Never a dark body: Zoho/Gmail dark mode
// force-invert dark emails. Table-based inline CSS for Outlook/Gmail/Zoho.
// All brand/accent values come from SITE.reply — no hardcoded hex.
import { SITE } from '@/config/site'

// Fixed light neutrals (never brand-driven)
const PAGE = '#F4F0EA'
const CARD = '#FFFFFF'
const FOOTER = '#F7F4F0'
const BORDER = '#EAE3DC'
const TEXT = '#1A1414'
const MUTED = '#6F665F'

const SERIF = "Georgia,'Times New Roman',serif"
const SANS = "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif"
const MONO = "SFMono-Regular,Consolas,'Liberation Mono',Menlo,monospace"

export function escapeHtml(s) {
  return String(s == null ? '' : s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function row(r, accent, first) {
  if (r.heading) {
    return `<tr><td colspan="2" style="padding:${first ? '0' : '22px'} 0 6px;border-bottom:2px solid ${accent};font:700 11px/1.4 ${SANS};letter-spacing:.06em;text-transform:uppercase;color:${accent}">${escapeHtml(r.label)}</td></tr>`
  }
  if (r.highlight) {
    return `<tr><td style="padding:14px 0 0;border-top:2px solid ${accent};font:700 12.5px/1.4 ${SANS};letter-spacing:.04em;text-transform:uppercase;color:${TEXT};vertical-align:middle">${escapeHtml(r.label)}</td><td style="padding:14px 0 0;border-top:2px solid ${accent};font:700 24px/1.2 ${MONO};color:${accent};text-align:right;vertical-align:middle">${r.html || escapeHtml(r.value)}</td></tr>`
  }
  if (r.block) {
    return `<tr><td colspan="2" style="padding:6px 0 10px;font:400 13.5px/1.6 ${SANS};color:${TEXT};white-space:pre-wrap">${r.html || escapeHtml(r.value)}</td></tr>`
  }
  const valFont = r.mono ? MONO : SANS
  return `<tr><td style="padding:9px 0;border-bottom:1px solid ${BORDER};font:400 12.5px/1.5 ${SANS};color:${MUTED};width:42%;vertical-align:top">${escapeHtml(r.label)}</td><td style="padding:9px 0;border-bottom:1px solid ${BORDER};font:700 13.5px/1.5 ${valFont};color:${TEXT};text-align:right">${r.html || escapeHtml(r.value)}</td></tr>`
}

// Payment-details card: one stacked row per {label, value} field (label above
// value) so long bank/wallet values wrap cleanly at any width — no cramped
// two-column table on phones.
export function paymentDetailsCardHtml(fields, accent = SITE.reply.brand.primary) {
  if (!fields || !fields.length) return ''
  const rows = fields
    .map((f, i) => `<tr><td style="padding:12px 18px;${i < fields.length - 1 ? `border-bottom:1px solid ${BORDER};` : ''}">
<div style="font:700 10.5px/1.4 ${SANS};letter-spacing:.08em;text-transform:uppercase;color:${MUTED};margin:0 0 3px">${escapeHtml(f.label)}</div>
<div style="font:600 15px/1.45 ${MONO};color:${TEXT};word-break:break-word;overflow-wrap:anywhere">${escapeHtml(f.value)}</div>
</td></tr>`)
    .join('')
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:14px 0;background:${FOOTER};border:1px solid ${BORDER};border-left:4px solid ${accent};border-radius:10px;border-collapse:separate">${rows}</table>`
}

// Body paragraph used for the opening / closing lines around the card.
export function emailParagraphHtml(text) {
  if (!text) return ''
  return `<p style="margin:0 0 12px;font:400 14px/1.65 ${SANS};color:${TEXT}">${escapeHtml(text)}</p>`
}

function button(cta, accent, outlined) {
  if (!cta) return ''
  const style = outlined
    ? `background:${CARD};color:${accent};border:2px solid ${accent}`
    : `background:${accent};color:#fff;border:2px solid ${accent}`
  return `<a href="${escapeHtml(cta.url)}" style="display:inline-block;${style};font:700 14px/1 ${SANS};text-decoration:none;padding:14px 30px;border-radius:10px;margin:4px 8px 4px 0">${escapeHtml(cta.label)}</a>`
}

export function buildEmailHtml(opts) {
  const accent = opts.primaryColor || SITE.reply.brand.primary
  const headerDark = SITE.reply.brand.headerDark
  const biz = SITE.reply.bizNumber
  const rowsHtml = (opts.rows || [])
    .map((r, i) => row(r, accent, i === 0))
    .join('')
  const refPill = opts.refBadge
    ? `<div style="margin:0 0 14px"><span style="display:inline-block;border:1.5px solid ${accent};color:${accent};font:700 12px/1 ${MONO};padding:6px 12px;border-radius:999px;letter-spacing:.04em">${escapeHtml(opts.refBadge)}</span></div>`
    : ''
  const bizLine = biz
    ? `<div style="font:700 11px/1.5 ${SANS};color:${accent};margin-top:2px">${escapeHtml(biz.label)} ${escapeHtml(biz.value)}</div>`
    : ''
  return `<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="color-scheme" content="light"><meta name="supported-color-schemes" content="light"><style>:root{color-scheme:light only;supported-color-schemes:light}</style></head>
<body style="margin:0;padding:0;background:${PAGE}">
${opts.preheader ? `<div style="display:none;max-height:0;overflow:hidden;opacity:0">${escapeHtml(opts.preheader)}</div>` : ''}
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${PAGE}"><tr><td align="center" style="padding:24px 12px">
<table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:${CARD};border-radius:16px;overflow:hidden;border:1px solid ${BORDER}">
<tr><td style="background:${headerDark};padding:26px 32px;border-bottom:3px solid ${accent}">
<div style="font:700 22px/1.2 ${SERIF};letter-spacing:.06em;text-transform:uppercase;color:#fff">${escapeHtml(SITE.name)}</div>
${bizLine}
<div style="font:600 10.5px/1.5 ${SANS};letter-spacing:.08em;text-transform:uppercase;color:#b9b3ab;margin-top:3px">${escapeHtml(SITE.reply.headerTagline)}</div>
</td></tr>
<tr><td style="padding:32px 32px 8px">
<h1 style="margin:0 0 12px;font:700 20px/1.3 ${SANS};color:${TEXT}">${escapeHtml(opts.title)}</h1>
${refPill}
${opts.intro ? `<p style="margin:0 0 8px;font:400 14px/1.6 ${SANS};color:${TEXT}">${escapeHtml(opts.intro)}</p>` : ''}
</td></tr>
${rowsHtml ? `<tr><td style="padding:8px 32px 4px"><table role="presentation" width="100%" cellpadding="0" cellspacing="0">${rowsHtml}</table></td></tr>` : ''}
${opts.afterRows ? `<tr><td style="padding:8px 32px 4px">${opts.afterRows}</td></tr>` : ''}
${opts.cta || opts.secondaryCta ? `<tr><td style="padding:12px 32px 8px">${button(opts.cta, accent, false)}${button(opts.secondaryCta, accent, true)}</td></tr>` : ''}
<tr><td style="background:${FOOTER};padding:20px 32px;border-top:1px solid ${BORDER};font:400 12px/1.6 ${SANS};color:${MUTED}">
${opts.footer ? escapeHtml(opts.footer) + '<br>' : ''}${escapeHtml(SITE.name)} · ${escapeHtml(SITE.reply.channels.email)}
</td></tr>
</table></td></tr></table></body></html>`
}
