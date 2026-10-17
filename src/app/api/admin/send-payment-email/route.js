import { NextResponse } from 'next/server'
import { checkAdminPasscode } from '@/lib/adminAuth'
import { getOrder, markOrderSent, savePaymentDetails } from '@/lib/orderStore'
import { sendMail } from '@/lib/mailer'
import { paymentDetailsEmail } from '@/lib/paymentEmail'
import { SITE } from '@/config/site'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function POST(request) {
  const denied = checkAdminPasscode(request)
  if (denied) return denied

  let body
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid request body' }, { status: 400 })
  }
  const { orderId, methodId, detail } = body || {}
  if (!orderId || !detail || !String(detail).trim()) {
    return NextResponse.json({ ok: false, error: 'Paste the payment details before sending.' }, { status: 400 })
  }

  const order = await getOrder(orderId)
  if (!order) return NextResponse.json({ ok: false, error: 'Order not found.' }, { status: 404 })
  if (!order.customerEmail) {
    return NextResponse.json({ ok: false, error: 'This order has no customer email on file.' }, { status: 400 })
  }

  const mail = paymentDetailsEmail({ order, methodId, detail })
  if (mail.fields.length === 0) {
    return NextResponse.json({ ok: false, error: 'Paste at least one payment detail before sending.' }, { status: 400 })
  }

  // Save first so the customer's tap-to-copy page works even if SMTP is down.
  await savePaymentDetails(order.orderNumber, {
    methodId: methodId || order.paymentMethod || '',
    fields: mail.fields,
    opening: mail.opening,
    closing: mail.closing,
  })

  const result = await sendMail({
    to: order.customerEmail,
    subject: mail.subject,
    html: mail.html,
    text: mail.text,
    replyTo: SITE.reply.channels.email,
  })

  if (result.sent) await markOrderSent(order.orderNumber)

  return NextResponse.json({ ok: true, sent: result.sent, reason: result.reason || null, fields: mail.fields.length })
}
