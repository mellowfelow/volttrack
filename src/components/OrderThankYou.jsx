'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { SITE } from '@/config/site'

const ORDER_KEY = 'vt-last-order'

// Reads the order snapshot CheckoutClient stashed in sessionStorage right
// before clearing the cart (there's no backend/database to look the order up
// by ID, so this is the only place the details exist). Falls back to a plain
// confirmation message if it's missing (direct visit, cleared storage, etc).
export default function OrderThankYou() {
  const [order, setOrder] = useState(null)
  const [checked, setChecked] = useState(false)

  useEffect(() => {
    try {
      const raw = sessionStorage.getItem(ORDER_KEY)
      if (raw) setOrder(JSON.parse(raw))
    } catch { /* sessionStorage unavailable — fall back below */ }
    setChecked(true)
  }, [])

  if (!checked) return null

  if (!order) {
    return (
      <section className="section" style={{ paddingTop: 40 }}>
        <div className="container prose" style={{ textAlign: 'center' }}>
          <h1>Order enquiry received</h1>
          <p className="lead">
            Thanks for your order enquiry. We&rsquo;ll confirm stock, shipping and the best
            payment method for you and follow up shortly.
          </p>
          <p><Link href="/shop/" className="btn">Keep browsing bikes</Link></p>
        </div>
      </section>
    )
  }

  return (
    <section className="section" style={{ paddingTop: 40 }}>
      <div className="container prose" style={{ textAlign: 'center' }}>
        <h1>Order received</h1>
        <p className="lead">
          Thanks — we&rsquo;ve got your order. We&rsquo;ll confirm stock, shipping and payment
          details by email shortly.
        </p>
        <p className="form-note">Order reference: <strong>{order.orderNumber}</strong></p>
      </div>
      <div className="container" style={{ maxWidth: 480, margin: '24px auto 0' }}>
        <div className="order-summary">
          {order.items.map((i) => (
            <div className="order-row" key={i.key}>
              <span>{i.name} × {i.qty}</span>
              <span>{SITE.currencySymbol}{(i.price * i.qty).toLocaleString('en-US')}</span>
            </div>
          ))}
          <div className="order-row">
            <span>Subtotal</span><span>{SITE.currencySymbol}{order.subtotal.toLocaleString('en-US')}</span>
          </div>
          {order.discount > 0 ? (
            <div className="order-row discount">
              <span>Crypto discount</span><span>−{SITE.currencySymbol}{order.discount.toLocaleString('en-US')}</span>
            </div>
          ) : null}
          <div className="order-row total">
            <span>Total</span><span>{SITE.currencySymbol}{order.total.toLocaleString('en-US')}</span>
          </div>
          <div className="order-row muted"><span>Payment method</span><span>{order.paymentMethod}</span></div>
          <div className="order-row muted"><span>Payment plan</span><span>{order.paymentPlan}</span></div>
          {order.installment ? (
            <div className="order-row muted">
              <span>First instalment (due now)</span><span>{SITE.currencySymbol}{order.installment.toLocaleString('en-US')}</span>
            </div>
          ) : null}
        </div>
      </div>
      <div className="container" style={{ textAlign: 'center', marginTop: 24 }}>
        <Link href="/shop/" className="btn">Keep browsing bikes</Link>
      </div>
    </section>
  )
}
