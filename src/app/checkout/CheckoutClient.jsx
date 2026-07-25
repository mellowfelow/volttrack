'use client'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { SITE } from '@/config/site'
import { getCart, subscribe, totals, clearCart } from '@/lib/cart'

const THANK_YOU = '/thank-you-order/'

export default function CheckoutClient() {
  const formRef = useRef(null)
  const [items, setItems] = useState([])
  const [method, setMethod] = useState(SITE.paymentMethods[0].id)
  const [plan, setPlan] = useState(SITE.paymentPlans[0].id)
  const [error, setError] = useState('')

  useEffect(() => {
    setItems(getCart())
    return subscribe(setItems)
  }, [])

  const selected = SITE.paymentMethods.find((m) => m.id === method) || {}
  const isCrypto = !!selected.crypto
  const t = totals(items, isCrypto)
  const payIn4 = plan === 'pay-in-4'
  const installment = Math.round(t.total / 4)
  const selectedPlan = SITE.paymentPlans.find((p) => p.id === plan) || {}

  // Line format includes the variant name, e.g.
  // "Stark Varg EX — Alpha (80HP) × 1 — $13,900"
  const orderText = items
    .map((i) => `${i.name} × ${i.qty} — ${SITE.currencySymbol}${(i.price * i.qty).toLocaleString('en-US')}`)
    .join('\n')

  function onSubmit(e) {
    e.preventDefault()
    setError('')
    if (!items.length) { setError('Your cart is empty.'); return }
    const form = formRef.current

    const done = () => { clearCart(); window.location.href = THANK_YOU }

    fetch('/api/submit', {
      method: 'POST',
      headers: { Accept: 'application/json' },
      body: new FormData(form),
    })
      .then((r) => r.json().then((d) => ({ status: r.status, data: d })))
      .then((res) => {
        if (res.status === 200 && res.data.ok) done()
        else throw new Error((res.data && res.data.error) || 'Submission failed')
      })
      .catch(() => setError('Something went wrong submitting your order. Please use the chat button or the contact page to reach us.'))
  }

  if (items.length === 0) {
    return (
      <section className="section" style={{ paddingTop: 8 }}>
        <div className="container">
          <h1>Checkout</h1>
          <p className="lead">Your cart is empty.</p>
          <Link href="/shop/" className="btn">Shop electric dirt bikes</Link>
        </div>
      </section>
    )
  }

  return (
    <section className="section" style={{ paddingTop: 8 }}>
      <div className="container">
        <h1>Checkout</h1>
        <form ref={formRef} onSubmit={onSubmit}>
          {/* hidden fields emailed via /api/submit (Resend) */}
          <input type="hidden" name="subject" value="VoltTrack — New Order" />
          <input type="hidden" name="from_name" value="VoltTrack Checkout" />
          <input type="hidden" name="replyto" value="" />
          <input type="hidden" name="order" value={orderText} />
          <input type="hidden" name="payment_method" value={selected.label || method} />
          <input type="hidden" name="payment_plan" value={selectedPlan.label || plan} />
          <input type="hidden" name="subtotal_usd" value={t.subtotal} />
          <input type="hidden" name="crypto_discount_usd" value={t.discount} />
          <input type="hidden" name="total_usd" value={t.total} />
          <input type="checkbox" name="botcheck" className="hp" tabIndex={-1} autoComplete="off" />

          <div className="grid cols-2" style={{ alignItems: 'start' }}>
            <div>
              <h2 style={{ fontSize: '1.2rem' }}>Your details</h2>
              <div className="field">
                <label htmlFor="name">Full name</label>
                <input id="name" name="name" required autoComplete="name" />
              </div>
              <div className="field">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" required autoComplete="email"
                  onChange={(e) => { const rt = formRef.current.querySelector('input[name="replyto"]'); if (rt) rt.value = e.target.value }} />
              </div>
              <div className="field">
                <label htmlFor="phone">Phone</label>
                <input id="phone" name="phone" type="tel" autoComplete="tel" />
              </div>
              <div className="field">
                <label htmlFor="address">Shipping address (Lower 48)</label>
                <textarea id="address" name="address" rows={3} required></textarea>
              </div>
              <div className="field">
                <label htmlFor="notes">Order notes (optional)</label>
                <textarea id="notes" name="notes" rows={2}></textarea>
              </div>

              <h2 style={{ fontSize: '1.2rem', marginTop: 18 }}>Payment method</h2>
              <div className="pay-options">
                {SITE.paymentMethods.map((m) => (
                  <label key={m.id} className={`pay-option${method === m.id ? ' selected' : ''}`}>
                    <input
                      type="radio" name="payment_choice" value={m.id}
                      checked={method === m.id} onChange={() => setMethod(m.id)}
                    />
                    <span>{m.label}{m.crypto ? ` — save ${Math.round(SITE.cryptoDiscount * 100)}%` : ''}</span>
                  </label>
                ))}
              </div>

              <h2 style={{ fontSize: '1.2rem', marginTop: 18 }}>Finance — Pay in 4</h2>
              <p className="form-note" style={{ marginTop: 0 }}>
                Choose Pay in 4 with <strong>any</strong> payment method above — 4 interest-free
                instalments, pay the first now to confirm your order.
              </p>
              <div className="pay-options">
                {SITE.paymentPlans.map((pl) => (
                  <label key={pl.id} className={`pay-option${plan === pl.id ? ' selected' : ''}`}>
                    <input
                      type="radio" name="payment_plan_choice" value={pl.id}
                      checked={plan === pl.id} onChange={() => setPlan(pl.id)}
                    />
                    <span>{pl.label}{pl.id === 'pay-in-4' ? ` — 4 × ${SITE.currencySymbol}${installment.toLocaleString('en-US')}` : ''}</span>
                  </label>
                ))}
              </div>
              {payIn4 ? (
                <p className="form-note" style={{ marginTop: 8 }}>{SITE.payIn4Detail}</p>
              ) : null}
            </div>

            <div className="order-summary">
              <h2 style={{ fontSize: '1.2rem' }}>Order summary</h2>
              {items.map((i) => (
                <div className="order-row" key={i.key || i.slug}>
                  <span>{i.name} × {i.qty}</span>
                  <span>{SITE.currencySymbol}{(i.price * i.qty).toLocaleString('en-US')}</span>
                </div>
              ))}
              <div className="order-row"><span>Subtotal</span><span>{SITE.currencySymbol}{t.subtotal.toLocaleString('en-US')}</span></div>
              <div className="order-row muted"><span>Shipping</span><span>{SITE.freeShippingText}</span></div>
              {isCrypto ? (
                <div className="order-row discount">
                  <span>Crypto discount ({Math.round(t.rate * 100)}%)</span>
                  <span>−{SITE.currencySymbol}{t.discount.toLocaleString('en-US')}</span>
                </div>
              ) : (
                <div className="order-row muted"><span>Crypto discount</span><span>pay with BTC/USDT to save {Math.round(SITE.cryptoDiscount * 100)}%</span></div>
              )}
              <div className="order-row total"><span>Total</span><span>{SITE.currencySymbol}{t.total.toLocaleString('en-US')}</span></div>
              {payIn4 ? (
                <>
                  <div className="order-row" style={{ color: 'var(--brand)', fontWeight: 700 }}>
                    <span>Pay in 4 (interest-free)</span><span>4 × {SITE.currencySymbol}{installment.toLocaleString('en-US')}</span>
                  </div>
                  <div className="order-row"><span>First instalment (due now to confirm)</span><span>{SITE.currencySymbol}{installment.toLocaleString('en-US')}</span></div>
                  <div className="order-row muted"><span>Then 3 × {SITE.currencySymbol}{installment.toLocaleString('en-US')}</span><span>over time</span></div>
                </>
              ) : null}

              {error ? <p style={{ color: '#b91c1c', fontWeight: 600 }}>{error}</p> : null}
              <button type="submit" className="btn" style={{ width: '100%' }}>Place order</button>
              <p className="form-note">
                {SITE.financing}. We confirm stock, final pricing and payment details by email —
                no card is charged online. Prices are estimates and may change due to import tariffs.
              </p>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}
