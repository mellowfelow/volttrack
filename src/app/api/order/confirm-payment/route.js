// Public, no-auth upload endpoint behind "I've paid — upload confirmation".
// Emails the shop the customer's payment screenshot (as an attachment) and flips
// the order to 'payment-confirmed'. It never returns order data to the caller.
import { NextResponse } from 'next/server'
import { SITE } from '@/config/site'
import { getOrder, markPaymentConfirmed } from '@/lib/orderStore'
import { isValidOrderNumber } from '@/lib/orderNumber'
import { sendMail } from '@/lib/mailer'
import { buildEmailHtml } from '@/lib/emailTemplate'
import { money } from '@/lib/order'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'
export const maxDuration = 20

const MAX_BYTES = 4 * 1024 * 1024 // stays under Vercel's serverless request-body limit
const EXT = { 'image/jpeg': 'jpg', 'image/png': 'png', 'image/webp': 'webp', 'image/heic': 'heic', 'image/heif': 'heif' }
const fail = (error, status) => NextResponse.json({ ok: false, error }, { status, headers: { 'Cache-Control': 'no-store' } })

export async function POST(request) {
  let form
  try {
    form = await request.formData()
  } catch {
    return fail('We couldn’t read that upload — please try again.', 400)
  }

  const orderNumber = String(form.get('orderNumber') || '').trim().toUpperCase()
  const note = String(form.get('note') || '').trim().slice(0, 1000)
  const file = form.get('file')

  if (!isValidOrderNumber(orderNumber, SITE.reply.orderPrefix)) return fail('That order link isn’t valid. Please use the link from your email.', 400)
  if (!file || typeof file === 'string' || typeof file.arrayBuffer !== 'function') return fail('Choose a screenshot of your completed payment first.', 400)
  const type = String(file.type || '').toLowerCase()
  if (!EXT[type]) return fail('The file must be a JPG, PNG, WebP or HEIC image.', 400)
  if (file.size > MAX_BYTES) return fail('That image is too large (4 MB max). Try a smaller screenshot.', 400)

  const order = await getOrder(orderNumber)
  if (!order) return fail('We couldn’t find that order.', 404)

  const buffer = Buffer.from(await file.arrayBuffer())
  const dash = `https://${SITE.domain}/admin/orders/${encodeURIComponent(order.orderNumber)}/`

  const html = buildEmailHtml({
    title: 'Payment confirmation received',
    refBadge: order.orderNumber,
    intro: `${order.customerName || 'A customer'} says they’ve paid and attached a screenshot. Verify it landed before dispatching.`,
    rows: [
      { label: 'Customer', value: order.customerName || '—' },
      { label: 'Email', value: order.customerEmail || '—' },
      { label: 'Amount due', value: money(order.amountDue), highlight: true },
      ...(note ? [{ label: 'Customer note', heading: true }, { label: 'Note', value: note, block: true }] : []),
    ],
    cta: { label: 'Open order in dashboard →', url: dash },
  })

  const result = await sendMail({
    to: SITE.reply.channels.email,
    subject: `Payment screenshot — ${order.orderNumber} — ${money(order.amountDue)} — ${SITE.name}`,
    html,
    text: `${order.customerName} says they've paid for ${order.orderNumber} (${money(order.amountDue)}).${note ? `\nNote: ${note}` : ''}\nScreenshot attached.\nDashboard: ${dash}`,
    replyTo: order.customerEmail || undefined,
    attachments: [{ filename: `payment-${order.orderNumber}.${EXT[type]}`, content: buffer, contentType: type }],
  })

  if (!result.sent) {
    return fail(`We couldn’t send your confirmation right now. Please email it to ${SITE.reply.channels.email} instead.`, 503)
  }

  await markPaymentConfirmed(order.orderNumber)
  return NextResponse.json({ ok: true }, { headers: { 'Cache-Control': 'no-store' } })
}
