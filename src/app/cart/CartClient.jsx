'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { SITE } from '@/config/site'

const KEY = 'mm-cart'

export default function CartClient() {
  const [items, setItems] = useState([])

  useEffect(() => {
    try {
      setItems(JSON.parse(localStorage.getItem(KEY) || '[]'))
    } catch {
      setItems([])
    }
  }, [])

  const save = (next) => {
    setItems(next)
    localStorage.setItem(KEY, JSON.stringify(next))
  }
  const setQty = (slug, qty) => {
    const next = items
      .map((i) => (i.slug === slug ? { ...i, qty: Math.max(1, qty) } : i))
    save(next)
  }
  const remove = (slug) => save(items.filter((i) => i.slug !== slug))
  const total = items.reduce((s, i) => s + i.price * i.qty, 0)

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
          <>
            <div className="table-wrap">
              <table>
                <thead>
                  <tr><th>Bike</th><th>Price</th><th>Qty</th><th>Subtotal</th><th></th></tr>
                </thead>
                <tbody>
                  {items.map((i) => (
                    <tr key={i.slug}>
                      <td>{i.name}</td>
                      <td>{SITE.currencySymbol}{i.price.toLocaleString('en-US')}</td>
                      <td>
                        <input
                          type="number" min={1} value={i.qty}
                          style={{ width: 70, padding: 8 }}
                          onChange={(e) => setQty(i.slug, parseInt(e.target.value || '1', 10))}
                        />
                      </td>
                      <td>{SITE.currencySymbol}{(i.price * i.qty).toLocaleString('en-US')}</td>
                      <td><button type="button" className="btn btn-ghost" onClick={() => remove(i.slug)} aria-label={`Remove ${i.name}`}>Remove</button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="price" style={{ fontSize: '1.5rem', marginTop: 16 }}>
              Total: {SITE.currencySymbol}{total.toLocaleString('en-US')}
            </p>
            <p className="form-note">
              {SITE.financing}. Complete your order with a human — we&rsquo;ll confirm stock,
              shipping and the best payment method for you.
            </p>
            <Link href="/contact/" className="btn">Enquire &amp; complete order</Link>
          </>
        )}
      </div>
    </section>
  )
}
