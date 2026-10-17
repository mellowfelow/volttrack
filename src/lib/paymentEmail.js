// Customer-facing "payment details" email — one builder used by the send route,
// so the HTML, plain-text part and subject always agree with the composer
// preview and the WhatsApp message (all read parsePaymentDetail + the same terms).
import { SITE } from '@/config/site'
import {
  buildEmailHtml,
  paymentDetailsCardHtml,
  emailParagraphHtml,
  blockButtonHtml,
} from '@/lib/emailTemplate'
import {
  money,
  paymentMethodParts,
  paymentTermsHtml,
  paymentTermsLines,
  parsePaymentDetail,
  paymentDetailsUrl,
  confirmPaymentUrl,
} from '@/lib/order'
import { isWhatsAppConfigured, waPaymentConfirmationLink } from '@/lib/whatsapp'

export function paymentDetailsEmail({ order, methodId, detail }) {
  const ref = order.orderNumber
  const method = methodId || order.paymentMethod
  const fields = parsePaymentDetail(detail)
  const { opening, closing } = paymentMethodParts(method, order.amountDue, ref)
  const viewUrl = paymentDetailsUrl(ref)
  const confirmUrl = confirmPaymentUrl(ref)
  const waConfirm = isWhatsAppConfigured() ? waPaymentConfirmationLink(ref) : ''
  const replyTo = `mailto:${SITE.reply.channels.email}?subject=${encodeURIComponent(`Re: Payment for ${ref}`)}`

  const html = buildEmailHtml({
    title: 'Payment details',
    refBadge: ref,
    preheader: `Payment details for ${ref} — ${money(order.amountDue)} due`,
    intro: `Hi ${order.customerName || 'there'} — here are the payment details for your order.`,
    rows: [{ label: 'Amount due', value: money(order.amountDue), highlight: true }],
    afterRows: [
      `<div style="padding-top:14px">${emailParagraphHtml(opening)}</div>`,
      paymentDetailsCardHtml(fields),
      emailParagraphHtml(closing),
      blockButtonHtml({ label: 'View & copy payment details →', url: viewUrl }, 'primary'),
      paymentTermsHtml(ref, method),
      '<div style="height:14px;line-height:14px;font-size:0">&nbsp;</div>',
      blockButtonHtml({ label: "I've paid — upload confirmation", url: confirmUrl }, 'outline'),
      waConfirm ? blockButtonHtml({ label: 'Confirm via WhatsApp', url: waConfirm }, 'outline') : '',
      blockButtonHtml({ label: 'Reply to us', url: replyTo }, 'ghost'),
    ].join(''),
  })

  const text =
    `PAYMENT DETAILS — ${ref}\n\n` +
    `Amount due: ${money(order.amountDue)}\n\n` +
    (opening ? `${opening}\n\n` : '') +
    fields.map((f) => `${f.label}: ${f.value}`).join('\n') +
    (closing ? `\n\n${closing}` : '') +
    `\n\nView with tap-to-copy buttons: ${viewUrl}\n\n` +
    paymentTermsLines(ref, method).map((l) => `- ${l}`).join('\n') +
    `\n\nPaid already? Upload a screenshot: ${confirmUrl}\n` +
    (waConfirm ? `Or confirm on WhatsApp: ${waConfirm}\n` : '') +
    `Questions? Reply to this email or write to ${SITE.reply.channels.email}.\n\n— ${SITE.name}\n`

  return {
    subject: `Payment details — ${ref} — ${money(order.amountDue)} — ${SITE.name}`,
    html,
    text,
    fields,
    opening,
    closing,
  }
}
