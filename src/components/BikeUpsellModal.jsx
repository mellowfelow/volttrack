'use client'
import { useEffect, useState, useMemo, useCallback } from 'react'
import Link from 'next/link'
import { SITE, PARTS } from '@/config/site'
import { addToCart } from '@/lib/cart'
import SmartImage from '@/components/SmartImage'

const money = (n) => `${SITE.currencySymbol}${n.toLocaleString('en-US')}`
const bundled = (n) => Math.round(n * (1 - SITE.bundleAccessoryDiscount))

// Pick up to 4 accessories to suggest for the just-added bike: parts that fit it,
// then parts of the same brand, then universal protective/riding gear.
function suggestFor(bike) {
  if (!bike) return []
  const seen = new Set()
  const take = (list) => {
    for (const p of list) {
      if (seen.size >= 4) break
      if (!seen.has(p.slug)) seen.add(p.slug)
    }
  }
  const fits = PARTS.filter((p) => Array.isArray(p.compat) && p.compat.includes(bike.slug))
  const sameBrand = PARTS.filter((p) => bike.brand && p.brandSlug === bike.brand)
  const gear = PARTS.filter((p) => p.category === 'helmets-protection' || p.category === 'riding-gear')
  take(fits); take(sameBrand); take(gear)
  return [...seen].map((slug) => PARTS.find((p) => p.slug === slug)).filter(Boolean).slice(0, 4)
}

// Opens when a bike is added to the cart ('bike-added' event). Cross-sells
// accessories at the auto-applied +5% bundle discount, with a shop-more link and
// an explicit way to add nothing.
export default function BikeUpsellModal() {
  const [open, setOpen] = useState(false)
  const [bike, setBike] = useState(null)
  const [added, setAdded] = useState({})

  const close = useCallback(() => setOpen(false), [])

  useEffect(() => {
    const onBike = (e) => {
      setBike(e.detail || null)
      setAdded({})
      setOpen(true)
    }
    window.addEventListener('bike-added', onBike)
    return () => window.removeEventListener('bike-added', onBike)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => { if (e.key === 'Escape') close() }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = '' }
  }, [open, close])

  const suggestions = useMemo(() => suggestFor(bike), [bike])
  const pct = Math.round(SITE.bundleAccessoryDiscount * 100)

  const addAccessory = (p) => {
    addToCart(p, 1, null, { part: true, silent: true })
    setAdded((a) => ({ ...a, [p.slug]: true }))
  }

  const viewCart = () => { close(); window.dispatchEvent(new Event('cart-open')) }

  if (!open) return null

  return (
    <div className="upsell-backdrop" onClick={close}>
      <div
        className="upsell-modal"
        role="dialog"
        aria-modal="true"
        aria-label="Add accessories to your bike"
        onClick={(e) => e.stopPropagation()}
      >
        <button type="button" className="upsell-close" aria-label="Close" onClick={close}>✕</button>
        <div className="upsell-head">
          <span className="badge">Added to cart ✓</span>
          <h2 style={{ margin: '8px 0 4px' }}>Add gear &amp; save {pct}%</h2>
          <p className="muted" style={{ margin: 0 }}>
            {bike?.name ? <><strong>{bike.name}</strong> is in your cart. </> : null}
            Add any accessory now and an extra <strong>{pct}% off</strong> is applied automatically at
            checkout — on top of your crypto discount.
          </p>
        </div>

        {suggestions.length ? (
          <div className="upsell-grid">
            {suggestions.map((p) => {
              const img = p.images && p.images[0] ? `/images/${p.images[0]}` : '/images/placeholder-bike.svg'
              const isAdded = !!added[p.slug]
              return (
                <div className="upsell-card" key={p.slug}>
                  <Link href={`/parts/${p.slug}/`} className="upsell-thumb" onClick={close} aria-label={p.name}>
                    <SmartImage src={img} alt={p.name} width={200} height={150} loading="lazy" sizes="200px" />
                  </Link>
                  <div className="upsell-card-body">
                    <Link href={`/parts/${p.slug}/`} className="upsell-name" onClick={close}>{p.name}</Link>
                    <div className="upsell-price">
                      <span className="muted" style={{ textDecoration: 'line-through', fontSize: '.82rem' }}>
                        {p.priceMax ? 'from ' : ''}{money(p.price)}
                      </span>
                      <strong>{p.priceMax ? 'from ' : ''}{money(bundled(p.price))}</strong>
                    </div>
                    <button
                      type="button"
                      className={`btn btn-block${isAdded ? ' btn-ghost' : ''}`}
                      onClick={() => addAccessory(p)}
                      disabled={isAdded}
                    >
                      {isAdded ? 'Added ✓' : `Add (−${pct}%)`}
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        ) : null}

        <div className="upsell-foot">
          <Link href="/parts-accessories/" className="btn btn-ghost" onClick={close}>Shop more categories</Link>
          <button type="button" className="btn" onClick={viewCart}>View cart</button>
          <button type="button" className="upsell-skip" onClick={close}>No thanks, continue shopping</button>
        </div>
      </div>
    </div>
  )
}
