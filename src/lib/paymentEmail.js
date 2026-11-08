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

// Optional overrides let other callers (e.g. the crypto checkout, whose wallet
// fields are static config rather than an admin-pasted blob) reuse this exact
// layout: `fields`/`opening`/`closing` replace the parsed + registry values,
// `dueNow` the headline amount, `itemRows` adds the order lines above it, and
// `title`/`intro`/`subject`/`preheader` reword the email.
export function paymentDetailsEmail({
  order, methodId, detail, fields: givenFields, opening: givenOpening, closing: givenClosing,
  dueNow, itemRows, title, intro, subject, preheader,
}) {
  const ref = order.orderNumber
  const method = methodId || order.paymentMethod
  const fields = givenFields || parsePaymentDetail(detail)
  const parts = paymentMethodParts(method, order.amountDue, ref)
  const opening = givenOpening != null ? givenOpening : parts.opening
  const closing = givenClosing != null ? givenClosing : parts.closing
  const headline = dueNow != null ? dueNow : order.amountDue
  const viewUrl = paymentDetailsUrl(ref)
  const confirmUrl = confirmPaymentUrl(ref)
  const waConfirm = isWhatsAppConfigured() ? waPaymentConfirmationLink(ref) : ''
  const replyTo = `mailto:${SITE.reply.channels.email}?subject=${encodeURIComponent(`Re: Payment for ${ref}`)}`

  const html = buildEmailHtml({
    title: title || 'Payment details',
    refBadge: ref,
    preheader: preheader || `Payment details for ${ref} — ${money(headline)} due`,
    intro: intro || `Hi ${order.customerName || 'there'} — here are the payment details for your order.`,
    rows: [
      ...(itemRows && itemRows.length ? [{ label: 'Items', heading: true }, ...itemRows] : []),
      { label: itemRows && itemRows.length ? 'Due now' : 'Amount due', value: money(headline), highlight: true },
    ],
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
    `${title ? title.toUpperCase() : 'PAYMENT DETAILS'} — ${ref}\n\n` +
    (intro ? `${intro}\n\n` : '') +
    `${itemRows && itemRows.length ? 'Due now' : 'Amount due'}: ${money(headline)}\n\n` +
    (opening ? `${opening}\n\n` : '') +
    fields.map((f) => `${f.label}: ${f.value}`).join('\n') +
    (closing ? `\n\n${closing}` : '') +
    `\n\nView with tap-to-copy buttons: ${viewUrl}\n\n` +
    paymentTermsLines(ref, method).map((l) => `- ${l}`).join('\n') +
    `\n\nPaid already? Upload a screenshot: ${confirmUrl}\n` +
    (waConfirm ? `Or confirm on WhatsApp: ${waConfirm}\n` : '') +
    `Questions? Reply to this email or write to ${SITE.reply.channels.email}.\n\n— ${SITE.name}\n`

  return {
    subject: subject || `Payment details — ${ref} — ${money(headline)} — ${SITE.name}`,
    html,
    text,
    fields,
    opening,
    closing,
  }
}
