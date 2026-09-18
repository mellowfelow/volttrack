// Checkout handler. Saves the order to the reply-portal store (best-effort) and
// sends an admin notification + a customer confirmation. Always returns {ok:true}
// so the checkout never dead-ends, even before Redis/SMTP env vars are set.
import { NextResponse } from 'next/server'
import { SITE, FORMS } from '@/config/site'
import { saveOrder, generateOrderNumber } from '@/lib/orderStore'
import { sendMail } from '@/lib/mailer'
import { buildEmailHtml } from '@/lib/emailTemplate'
import { money } from '@/lib/order'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

async function readData(req) {
  try {
    const fd = await req.formData()
    const data = {}
    for (const [k, v] of fd.entries()) if (typeof v === 'string') data[k] = v
    return data
  } catch {
    try { return await req.json() } catch { return {} }
  }
}

// Parse the "name × qty — $line" checkout text into structured items.
function parseItems(text) {
  return String(text || '')
    .split('\n')
    .map((l) => l.trim())
    .filter(Boolean)
    .map((l) => {
      const m = l.match(/^(.*?)\s*[×x]\s*(\d+)\s*[—-]\s*(.+)$/)
      if (!m) return { name: l, quantity: 1, price: '' }
      return { name: m[1].trim(), quantity: Number(m[2]) || 1, price: m[3].trim() }
    })
}

export async function POST(req) {
  const data = await readData(req)
  if (data.botcheck) return NextResponse.json({ ok: true, delivered: false })

  const orderNumber = data.order_number || generateOrderNumber(SITE.reply.orderPrefix)
  const items = parseItems(data.order)
  const amountDue = Number(data.total_usd) || 0
  const subtotal = Number(data.subtotal_usd) || amountDue
  const adminEmail = SITE.reply.channels.email || FORMS.orderEmail

  const order = {
    orderNumber,
    customerName: data.name || '',
    customerEmail: data.email || '',
    customerPhone: data.phone || '',
    address: data.address || '',
    items,
    subtotal,
    amountDue,
    paymentMethod: data.payment_method || '',
    paymentPlan: data.payment_plan || '',
    notes: data.notes || '',
    channel: 'email',
  }
  try { await saveOrder(order); console.log('[order] saved:', orderNumber) } catch (e) { console.error('[order] save failed:', e && e.message) }

  const itemRows = items.map((i) => ({ label: `${i.quantity} × ${i.name}`, value: i.price || '' }))
  const dash = `https://${SITE.domain}/admin/orders/${encodeURIComponent(orderNumber)}`

  // Admin notification
  const adminHtml = buildEmailHtml({
    title: 'New order',
    refBadge: orderNumber,
    intro: `${order.customerName || 'A customer'} placed an order via the website.`,
    rows: [
      { label: 'Customer', heading: true },
      { label: 'Name', value: order.customerName },
      { label: 'Email', value: order.customerEmail },
      { label: 'Phone', value: order.customerPhone || '—' },
      { label: 'Items', heading: true },
      ...itemRows,
      { label: 'Summary', heading: true },
      { label: 'Subtotal', value: money(subtotal) },
      { label: 'Payment method', value: order.paymentMethod || '—' },
      { label: 'Amount due', value: money(amountDue), highlight: true },
    ],
    cta: { label: 'Reply in Dashboard →', url: dash },
  })
  try {
    const adminResult = await sendMail({
      to: adminEmail,
      subject: `New order ${orderNumber} — ${money(amountDue)} — ${SITE.name}`,
      html: adminHtml,
      text: `New order ${orderNumber} — ${money(amountDue)}. Customer: ${order.customerName} ${order.customerEmail}. Reply in dashboard: ${dash}`,
      replyTo: order.customerEmail || undefined,
    })
    console.log('[order] admin mail:', JSON.stringify(adminResult))
  } catch (e) { console.error('[order] admin mail failed:', e && e.message) }

  // Customer confirmation (no payment details — those come after admin confirms)
  if (order.customerEmail) {
    const custHtml = buildEmailHtml({
      title: "We've received your order",
      refBadge: orderNumber,
      intro: `Thanks, ${order.customerName || 'there'} — this confirms we've received your order. Keep this email as your reference. You'll receive a second email shortly with payment details; once that's confirmed we'll finalise your order for dispatch.`,
      rows: [
        { label: 'Items', heading: true },
        ...itemRows,
        { label: 'Summary', heading: true },
        { label: 'Subtotal', value: money(subtotal) },
        { label: 'Amount due', value: money(amountDue), highlight: true },
      ],
      secondaryCta: { label: 'Contact Us', url: `https://${SITE.domain}/contact/` },
      footer: SITE.reply.dispatchLine,
    })
    try {
      const custResult = await sendMail({
        to: order.customerEmail,
        subject: `Order received — ${orderNumber} — ${money(amountDue)} — ${SITE.name}`,
        html: custHtml,
        text: `Thanks ${order.customerName}. We've received order ${orderNumber} (${money(amountDue)}). You'll receive a payment-details email shortly.`,
      })
      console.log('[order] customer mail:', JSON.stringify(custResult))
    } catch (e) { console.error('[order] customer mail failed:', e && e.message) }
  }

  return NextResponse.json({ ok: true, orderNumber })
}
