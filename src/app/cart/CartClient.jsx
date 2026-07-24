'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { SITE } from '@/config/site'
import { getCart, setQty, removeItem, subscribe, totals } from '@/lib/cart'
import QtyStepper from '@/components/QtyStepper'
import SmartImage from '@/components/SmartImage'

const money = (n) => `${SITE.currencySymbol}${n.toLocaleString('en-US')}`

export default function CartClient() {
  const [items, setItems] = useState([])
  useEffect(() => {
    setItems(getCart())
    return subscribe(setItems)
  }, [])

  const t = totals(items, false)
  const cryptoSaving = Math.round(t.subtotal * SITE.cryptoDiscount)
  const belowMin = SITE.minOrder > 0 && t.subtotal < SITE.minOrder

  return (
    <section className="section" style={{ paddingTop: 8 }}>
      <div className="container">
        <h1>Your Cart</h1>
        {items.length === 0 ? (
          <div className="surface" style={{ textAlign: 'center', padding: 40 }}>
            <p className="lead">Your cart is empty.</p>
            <Link href="/shop/" className="btn">Shop electric dirt bikes</Link>
          </div>
        ) : (
          <div className="cart-layout">
            <div className="cart-items">
              {items.map((i) => {
                const img = '/images/placeholder-bike.svg'
                const key = i.key || i.slug
                return (
                  <div className="cart-row" key={key}>
                    <Link href={`/product/${i.slug}/`} className="cart-thumb" aria-label={i.name}>
                      <SmartImage src={img} alt={`${i.name} electric dirt bike`} width={160} height={120} loading="lazy" />
                    </Link>
                    <div className="cart-info">
                      <Link href={`/product/${i.slug}/`} className="cart-name">{i.name}</Link>
                      <span className="muted">{money(i.price)} each</span>
                    </div>
                    <QtyStepper qty={i.qty} setQty={(q) => setQty(key, q)} size="sm" />
                    <span className="cart-line">{money(i.price * i.qty)}</span>
                    <button type="button" className="cart-remove" aria-label={`Remove ${i.name}`} onClick={() => removeItem(key)}>Remove</button>
                  </div>
                )
              })}
            </div>

            <aside className="order-summary" aria-label="Order summary">
              <h2 style={{ fontSize: '1.2rem' }}>Summary</h2>
              <div className="order-row"><span>Subtotal</span><span>{money(t.subtotal)}</span></div>
              <div className="order-row discount"><span>Crypto discount (at checkout)</span><span>−{money(cryptoSaving)}</span></div>
              <div className="order-row muted"><span>Shipping</span><span>{SITE.freeShippingText}</span></div>
              <div className="order-row total"><span>Total</span><span>{money(t.subtotal)}</span></div>
              <p className="form-note">Pay with BTC or USDT at checkout to save {Math.round(SITE.cryptoDiscount * 100)}% ({money(cryptoSaving)}).</p>
              {belowMin ? (
                <div className="min-order-block" role="alert">
                  Minimum order is {money(SITE.minOrder)}. Add {money(SITE.minOrder - t.subtotal)} more to check out.
                </div>
              ) : null}
              <Link
                href={belowMin ? '#' : '/checkout/'}
                className={`btn btn-block${belowMin ? ' is-disabled' : ''}`}
                aria-disabled={belowMin}
                tabIndex={belowMin ? -1 : undefined}
              >
                Proceed to checkout
              </Link>
              <p style={{ marginTop: 12, textAlign: 'center' }}><Link href="/shop/">← Continue shopping</Link></p>
            </aside>
          </div>
        )}
      </div>
    </section>
  )
}
