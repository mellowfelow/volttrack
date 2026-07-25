'use client'
import { useEffect, useState, useCallback } from 'react'
import Link from 'next/link'
import { SITE } from '@/config/site'
import { getCart, setQty, removeItem, subscribe, totals, cartCount } from '@/lib/cart'
import QtyStepper from '@/components/QtyStepper'
import SmartImage from '@/components/SmartImage'

const money = (n) => `${SITE.currencySymbol}${n.toLocaleString('en-US')}`

// Slide-out cart drawer. Opens automatically when a product is added (the
// 'cart-open' event dispatched by addToCart), so the shopper sees the cart
// without scrolling to the top. Also openable from anywhere via the same event.
export default function CartDrawer() {
  const [open, setOpen] = useState(false)
  const [items, setItems] = useState([])

  useEffect(() => {
    setItems(getCart())
    const unsub = subscribe(setItems)
    const onOpen = () => { setItems(getCart()); setOpen(true) }
    window.addEventListener('cart-open', onOpen)
    return () => { unsub(); window.removeEventListener('cart-open', onOpen) }
  }, [])

  const close = useCallback(() => setOpen(false), [])

  // Close on Escape while open; lock body scroll behind the drawer.
  useEffect(() => {
    if (!open) return
    const onKey = (e) => { if (e.key === 'Escape') close() }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = '' }
  }, [open, close])

  const t = totals(items, false)
  const cryptoSaving = Math.round(t.subtotal * SITE.cryptoDiscount)
  const count = cartCount(items)

  return (
    <>
      <div
        className={`drawer-backdrop${open ? ' open' : ''}`}
        onClick={close}
        aria-hidden={!open}
      />
      <aside
        className={`cart-drawer${open ? ' open' : ''}`}
        aria-label="Shopping cart"
        aria-hidden={!open}
        role="dialog"
        aria-modal="true"
      >
        <div className="cart-drawer-head">
          <strong>Your cart{count > 0 ? ` (${count})` : ''}</strong>
          <button type="button" className="cart-drawer-close" aria-label="Close cart" onClick={close}>✕</button>
        </div>

        {items.length === 0 ? (
          <div className="cart-drawer-empty">
            <p className="muted">Your cart is empty.</p>
            <Link href="/shop/" className="btn btn-block" onClick={close}>Shop electric dirt bikes</Link>
          </div>
        ) : (
          <>
            <div className="cart-drawer-items">
              {items.map((i) => {
                const key = i.key || i.slug
                const img = i.image ? `/images/${i.image}` : '/images/placeholder-bike.svg'
                return (
                  <div className="drawer-row" key={key}>
                    <Link href={`/product/${i.slug}/`} className="drawer-thumb" onClick={close} aria-label={i.name}>
                      <SmartImage src={img} alt={i.name} width={120} height={90} loading="lazy" />
                    </Link>
                    <div className="drawer-info">
                      <Link href={`/product/${i.slug}/`} className="drawer-name" onClick={close}>{i.name}</Link>
                      <span className="muted">{money(i.price)} each</span>
                      <QtyStepper qty={i.qty} setQty={(q) => setQty(key, q)} size="sm" />
                    </div>
                    <div className="drawer-line">
                      <span>{money(i.price * i.qty)}</span>
                      <button type="button" className="cart-remove" aria-label={`Remove ${i.name}`} onClick={() => removeItem(key)}>Remove</button>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="cart-drawer-foot">
              <div className="order-row total"><span>Subtotal</span><span>{money(t.subtotal)}</span></div>
              <p className="form-note" style={{ margin: '2px 0 10px' }}>
                Pay with crypto to save {Math.round(SITE.cryptoDiscount * 100)}% ({money(cryptoSaving)}) — applied at checkout. {SITE.freeShippingText}.
              </p>
              <Link href="/checkout/" className="btn btn-block" onClick={close}>Checkout</Link>
              <Link href="/cart/" className="btn btn-ghost btn-block" style={{ marginTop: 8 }} onClick={close}>View full cart</Link>
            </div>
          </>
        )}
      </aside>
    </>
  )
}
