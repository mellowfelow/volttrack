// WhatsApp deep-links. Every feature is gated on SITE.reply.channels.whatsapp —
// when empty, helpers return '' so nothing renders a dead wa.me link.
//
// Two message directions, two openers:
//   Admin → customer   opens with WA_HEADER (*VoltTrack* in bold) — the shop identifying itself.
//   Customer → shop    opens with "Hi VoltTrack," — so the shop knows which site it came from.
import { SITE } from '@/config/site'
import {
  money,
  paymentMethodParts,
  paymentTermsLines,
  parsePaymentDetail,
  paymentDetailsUrl,
} from '@/lib/order'

export const WA_HEADER = `*${SITE.name}*`

export function isWhatsAppConfigured() {
  return !!(SITE.reply.channels.whatsapp && SITE.reply.channels.whatsapp.trim())
}

// Normalise to bare digits with country code (leading 0 → configured code).
export function toWhatsAppNumber(phone) {
  let d = String(phone || '').replace(/[^\d]/g, '')
  const cc = SITE.reply.channels.whatsappCountryCode || ''
  if (d.startsWith('0')) d = cc + d.slice(1)
  return d
}

function text(body) {
  const lines = Array.isArray(body) ? body : [body]
  return [WA_HEADER, '', ...lines].join('\n')
}

function customerText(body) {
  const lines = Array.isArray(body) ? body : [body]
  return [`Hi ${SITE.name},`, '', ...lines].join('\n')
}

export function waMessageText(body) {
  return text(body)
}

// Customer → shop link (greeting opener).
export function waLink(body) {
  const to = toWhatsAppNumber(SITE.reply.channels.whatsapp)
  if (!to) return ''
  return `https://wa.me/${to}?text=${encodeURIComponent(customerText(body))}`
}

// Admin → customer link (bold shop-name header).
export function waLinkTo(phone, body) {
  const to = toWhatsAppNumber(phone)
  if (!to) return ''
  return `https://wa.me/${to}?text=${encodeURIComponent(text(body))}`
}

// Admin → customer: payment details, mirroring the payment-details email.
// Accepts either pre-parsed `fields` or the raw pasted `detail` blob.
export function waPaymentDetailsMessage({ orderNumber, amountDue, methodId, detail, fields }) {
  const { opening, closing } = paymentMethodParts(methodId, amountDue, orderNumber)
  const rows = fields && fields.length ? fields : parsePaymentDetail(detail)
  const terms = paymentTermsLines(orderNumber, methodId).map((l) => `✅ ${l}`)
  return [
    `Payment details for order ${orderNumber}`,
    `Amount due: ${money(amountDue)}`,
    '',
    ...(opening ? [opening, ''] : []),
    ...rows.map((f) => `${f.label}: ${f.value}`),
    ...(closing ? ['', closing] : []),
    '',
    `Tap-to-copy version: ${paymentDetailsUrl(orderNumber)}`,
    '',
    ...terms,
  ]
}

export function waPaymentDetailsLink(phone, opts) {
  return waLinkTo(phone, waPaymentDetailsMessage(opts))
}

// Customer → shop: "I've paid" nudge shown in the payment email.
export function waPaymentConfirmationLink(orderNumber) {
  return waLink([`I've completed payment for order ${orderNumber}.`, 'Screenshot attached.'])
}
