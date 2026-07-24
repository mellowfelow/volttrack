'use client'
import { useState } from 'react'
import Link from 'next/link'
import QtyStepper from '@/components/QtyStepper'
import { addToCart } from '@/lib/cart'
import { useVariant } from '@/components/VariantContext'
import { SITE, PRICE_DISCLAIMER } from '@/config/site'

const money = (n) => `${SITE.currencySymbol}${n.toLocaleString('en-US')}`

// PDP buy block. For variant products this owns the price display too, since
// selecting a variant updates price, spec rows and the Add to cart label.
export default function ProductBuy({ product }) {
  const { variants, variantId, setVariantId, variant } = useVariant()
  const [qty, setQty] = useState(1)
  const [added, setAdded] = useState(false)

  const price = variant ? variant.price : product.price
  const label = variant ? `${product.name} — ${variant.label}` : product.name

  // Enquiry-only: no price, no cart. Never show a figure we cannot honour.
  if (product.enquire) {
    return (
      <div className="pdp-buy">
        <p className="price" style={{ fontSize: '1.5rem', margin: '0 0 4px' }}>Contact for pricing</p>
        <p className="form-note" style={{ marginTop: 0 }}>
          {product.pending
            ? 'This model is not yet orderable. Register your interest and we will contact you with firm pricing and delivery as soon as we can commit to one.'
            : 'We have not confirmed US pricing for this model yet. Contact us for a current quote and lead time.'}
        </p>
        <Link href="/contact/" className="btn btn-lg">
          {product.pending ? 'Notify me when available' : 'Enquire about this bike'}
        </Link>
      </div>
    )
  }

  return (
    <div className="pdp-buy">
      <p className="price" style={{ fontSize: '2rem', margin: '0 0 4px' }} aria-live="polite">
        {money(price)}
      </p>
      <p className="form-note" style={{ marginTop: 0 }}>{PRICE_DISCLAIMER}</p>

      {variants.length ? (
        <fieldset className="variant-picker">
          <legend>Choose your version</legend>
          <div className="pay-options">
            {variants.map((v) => (
              <label key={v.id} className={`pay-option${variantId === v.id ? ' selected' : ''}`}>
                <input
                  type="radio"
                  name="variant"
                  value={v.id}
                  checked={variantId === v.id}
                  onChange={() => { setVariantId(v.id); setAdded(false) }}
                />
                <span>
                  {v.label}
                  {v.badge ? <span className="badge" style={{ marginLeft: 8 }}>{v.badge}</span> : null}
                  <strong style={{ marginLeft: 8 }}>{money(v.price)}</strong>
                </span>
              </label>
            ))}
          </div>
        </fieldset>
      ) : null}

      <div className="pdp-buy-row">
        <QtyStepper qty={qty} setQty={setQty} />
        <button
          type="button"
          className="btn btn-lg"
          aria-label={`Add ${label} to cart`}
          onClick={() => { addToCart(product, qty, variant); setQty(1); setAdded(true) }}
        >
          {variant ? `Add ${variant.label} to cart` : 'Add to cart'}
        </button>
      </div>
      {added ? (
        <p className="pdp-added" role="status">Added to cart. <Link href="/cart/">View cart →</Link></p>
      ) : null}
    </div>
  )
}
