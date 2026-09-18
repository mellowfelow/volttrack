// WhatsApp deep-links. Every feature is gated on SITE.reply.channels.whatsapp —
// when empty, helpers return '' so nothing renders a dead wa.me link.
import { SITE } from '@/config/site'
import { money, paymentMethodParts, paymentTermsLines, instructionsParts } from '@/lib/order'

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

export function waMessageText(body) {
  return text(body)
}

export function waLink(body) {
  const to = toWhatsAppNumber(SITE.reply.channels.whatsapp)
  if (!to) return ''
  return `https://wa.me/${to}?text=${encodeURIComponent(text(body))}`
}

export function waLinkTo(phone, body) {
  const to = toWhatsAppNumber(phone)
  if (!to) return ''
  return `https://wa.me/${to}?text=${encodeURIComponent(text(body))}`
}

// Admin → customer: payment details, mirroring the payment-details email.
export function waPaymentDetailsMessage({ orderNumber, amountDue, methodId, detail }) {
  const { opening, closing } = paymentMethodParts(methodId, amountDue, orderNumber)
  const terms = paymentTermsLines(orderNumber, methodId).map((l) => `✅ ${l}`)
  return [
    `Payment details for order ${orderNumber}`,
    `Amount due: ${money(amountDue)}`,
    '',
    instructionsParts(opening, detail, closing),
    '',
    ...terms,
  ]
}

export function waPaymentDetailsLink(phone, opts) {
  return waLinkTo(phone, waPaymentDetailsMessage(opts))
}
