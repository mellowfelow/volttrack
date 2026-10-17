// Public, no-auth endpoint behind the "View & copy payment details" email link.
// The order number is the access token (same as the confirm-payment endpoint).
// Returns ONLY what the customer's own email already contained — never their
// phone, address or items.
import { NextResponse } from 'next/server'
import { SITE } from '@/config/site'
import { getOrder } from '@/lib/orderStore'
import { isValidOrderNumber } from '@/lib/orderNumber'
import { paymentTermsLines } from '@/lib/order'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const NO_STORE = { 'Cache-Control': 'no-store', 'X-Robots-Tag': 'noindex, nofollow' }

export async function GET(request) {
  const id = String(new URL(request.url).searchParams.get('id') || '').trim().toUpperCase()
  if (!isValidOrderNumber(id, SITE.reply.orderPrefix)) {
    return NextResponse.json({ ok: false, error: 'That order link isn’t valid. Please use the link from your payment-details email.' }, { status: 400, headers: NO_STORE })
  }

  const order = await getOrder(id)
  if (!order || !order.paymentDetails || !order.paymentDetails.fields?.length) {
    return NextResponse.json(
      { ok: false, error: 'Payment details for this order haven’t been sent yet. We’ll email them as soon as your order is confirmed.' },
      { status: 404, headers: NO_STORE },
    )
  }

  const pd = order.paymentDetails
  return NextResponse.json(
    {
      ok: true,
      orderNumber: order.orderNumber,
      amountDue: order.amountDue,
      status: order.status || 'pending',
      paymentDetails: { fields: pd.fields, opening: pd.opening || '', closing: pd.closing || '' },
      terms: paymentTermsLines(order.orderNumber, pd.methodId),
    },
    { headers: NO_STORE },
  )
}
