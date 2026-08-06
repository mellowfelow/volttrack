'use client'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { SITE, FORMS } from '@/config/site'
import { getCart, subscribe, totals, clearCart } from '@/lib/cart'

const THANK_YOU = '/thank-you-order/'
const ORDER_KEY = 'vt-last-order'

// Human-shareable reference, e.g. VT-20260807-K3F9. No backend/database, so
// this is a client-generated reference for the customer + the order email —
// not a guaranteed-unique database ID.
function genOrderNumber() {
  const d = new Date()
  const ymd = `${d.getFullYear()}${String(d.getMonth() + 1).padStart(2, '0')}${String(d.getDate()).padStart(2, '0')}`
  const rand = Math.random().toString(36).slice(2, 6).toUpperCase()
  return `VT-${ymd}-${rand}`
}

export default function CheckoutClient() {
  const formRef = useRef(null)
  const [items, setItems] = useState([])
  const [method, setMethod] = useState(SITE.paymentMethods[0].id)
  const [plan, setPlan] = useState(SITE.paymentPlans[0].id)
  const [error, setError] = useState('')
  const [orderNumber] = useState(genOrderNumber)

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

  const keyPending = !FORMS.web3formsKey || FORMS.web3formsKey.startsWith('YOUR-')

  function onSubmit(e) {
    e.preventDefault()
    setError('')
    if (!items.length) { setError('Your cart is empty.'); return }
    const form = formRef.current
    const done = () => {
      // Snapshot the order for the thank-you page before the cart is cleared —
      // there's no backend/database, so this is the only place that data exists.
      try {
        sessionStorage.setItem(ORDER_KEY, JSON.stringify({
          orderNumber,
          date: new Date().toISOString(),
          items: items.map((i) => ({ key: i.key || i.slug, name: i.name, qty: i.qty, price: i.price })),
          subtotal: t.subtotal,
          discount: t.discount,
          total: t.total,
          paymentMethod: selected.label || method,
          paymentPlan: selectedPlan.label || plan,
          installment: payIn4 ? installment : null,
        }))
      } catch { /* sessionStorage unavailable (private mode etc.) — thank-you page falls back */ }
      clearCart()
      window.location.href = THANK_YOU
    }
    const fail = () => setError('Something went wrong submitting your order. Please use the chat button or the contact page to reach us.')

    if (FORMS.provider === 'web3forms') {
      if (keyPending) { done(); return }
      fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form),
      })
        .then((r) => r.json().then((d) => ({ status: r.status, data: d })))
        .then((res) => {
          if (res.status === 200 && res.data.success) done()
          else throw new Error((res.data && res.data.message) || 'Submission failed')
        })
        .catch(fail)
      return
    }

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
      .catch(fail)
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
          {/* hidden fields: web3forms (direct) or /api/submit (Resend), per FORMS.provider */}
          {FORMS.provider === 'web3forms' ? <input type="hidden" name="access_key" value={FORMS.web3formsKey} /> : null}
          <input type="hidden" name="subject" value={`VoltTrack — New Order ${orderNumber}`} />
          <input type="hidden" name="order_number" value={orderNumber} />
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
              <p className="form-note" style={{ marginTop: -4 }}>Order reference: <strong>{orderNumber}</strong></p>
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
