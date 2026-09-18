import { NextResponse } from 'next/server'
import { checkAdminPasscode } from '@/lib/adminAuth'
import { getOrder, markOrderSent } from '@/lib/orderStore'
import { sendMail } from '@/lib/mailer'
import { buildEmailHtml } from '@/lib/emailTemplate'
import { SITE } from '@/config/site'
import { money, paymentMethodParts, paymentTermsHtml } from '@/lib/order'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function POST(request) {
  const denied = checkAdminPasscode(request)
  if (denied) return denied

  const body = await request.json()
  const { orderId, methodId, detail } = body
  if (!orderId || !detail) {
    return NextResponse.json({ ok: false, error: 'orderId and detail are required' }, { status: 400 })
  }

  const order = await getOrder(orderId)
  if (!order) return NextResponse.json({ ok: false, error: 'not-found' }, { status: 404 })

  const { opening, closing } = paymentMethodParts(methodId || order.paymentMethod, order.amountDue, order.orderNumber)
  const termsHtml = paymentTermsHtml(order.orderNumber, methodId || order.paymentMethod)

  const html = buildEmailHtml({
    title: 'Payment details',
    refBadge: order.orderNumber,
    intro: `Hi ${order.customerName || 'there'} — here are the payment details for your order.`,
    rows: [
      { label: 'Amount due', value: money(order.amountDue), highlight: true },
    ],
    afterRows: [
      `<div style="padding:12px 0;font:400 14px/1.6 -apple-system,Segoe UI,Arial,sans-serif;color:#1A1414;white-space:pre-wrap">${opening ? opening + '\n\n' : ''}${detail}${closing ? '\n\n' + closing : ''}</div>`,
      termsHtml,
    ].join(''),
    secondaryCta: { label: 'Contact Us', url: `https://${SITE.domain}/contact/` },
    footer: SITE.reply.dispatchLine,
  })

  const result = await sendMail({
    to: order.customerEmail,
    subject: `Payment details — ${order.orderNumber} — ${money(order.amountDue)} — ${SITE.name}`,
    html,
    text: `Payment details for ${order.orderNumber} (${money(order.amountDue)}):\n\n${opening}\n\n${detail}\n\n${closing}`,
  })

  if (result.sent) {
    await markOrderSent(order.orderNumber)
  }

  return NextResponse.json({ ok: true, sent: result.sent, reason: result.reason || null })
}
