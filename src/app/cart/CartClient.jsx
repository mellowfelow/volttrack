'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { SITE } from '@/config/site'
import { getCart, setQty, removeItem, subscribe, totals } from '@/lib/cart'

export default function CartClient() {
  const [items, setItems] = useState([])
  useEffect(() => {
    setItems(getCart())
    return subscribe(setItems)
  }, [])

  const t = totals(items, false)

  return (
    <section className="section" style={{ paddingTop: 8 }}>
      <div className="container">
        <h1>Your Cart</h1>
        {items.length === 0 ? (
          <>
            <p className="lead">Your cart is empty.</p>
            <Link href="/shop/" className="btn">Shop electric dirt bikes</Link>
          </>
        ) : (
          <div className="grid cols-2" style={{ alignItems: 'start' }}>
            <div className="table-wrap">
              <table>
                <thead>
                  <tr><th>Bike</th><th>Price</th><th>Qty</th><th>Subtotal</th><th></th></tr>
                </thead>
                <tbody>
                  {items.map((i) => (
                    <tr key={i.slug}>
                      <td><Link href={`/product/${i.slug}/`}>{i.name}</Link></td>
                      <td>{SITE.currencySymbol}{i.price.toLocaleString('en-US')}</td>
                      <td>
                        <input
                          type="number" min={1} value={i.qty}
                          style={{ width: 70, padding: 8 }}
                          onChange={(e) => setQty(i.slug, parseInt(e.target.value || '1', 10))}
                          aria-label={`Quantity for ${i.name}`}
                        />
                      </td>
                      <td>{SITE.currencySymbol}{(i.price * i.qty).toLocaleString('en-US')}</td>
                      <td><button type="button" className="btn btn-ghost" onClick={() => removeItem(i.slug)} aria-label={`Remove ${i.name}`}>Remove</button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="order-summary">
              <h2 style={{ fontSize: '1.2rem' }}>Summary</h2>
              <div className="order-row"><span>Subtotal</span><span>{SITE.currencySymbol}{t.subtotal.toLocaleString('en-US')}</span></div>
              <div className="order-row muted"><span>Shipping</span><span>{SITE.freeShippingText}</span></div>
              <div className="order-row"><span>Crypto discount</span><span>−{Math.round(SITE.cryptoDiscount * 100)}% at checkout</span></div>
              <div className="order-row total"><span>Total</span><span>{SITE.currencySymbol}{t.subtotal.toLocaleString('en-US')}</span></div>
              <p className="form-note">Pay with BTC or USDT to save {Math.round(SITE.cryptoDiscount * 100)}% — applied automatically at checkout.</p>
              <Link href="/checkout/" className="btn" style={{ width: '100%', textAlign: 'center' }}>Proceed to checkout</Link>
              <p style={{ marginTop: 12 }}><Link href="/shop/">← Continue shopping</Link></p>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
