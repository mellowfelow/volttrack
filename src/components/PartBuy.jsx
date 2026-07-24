'use client'
import { useState } from 'react'
import Link from 'next/link'
import QtyStepper from '@/components/QtyStepper'
import { addToCart } from '@/lib/cart'
import { SITE, PRICE_DISCLAIMER, partPriceLabel } from '@/config/site'

// Buy block for an individual accessory. Ranged-price parts add to cart at the
// low end; the confirm-before-order flow settles the exact figure by email.
export default function PartBuy({ part }) {
  const [qty, setQty] = useState(1)
  const [added, setAdded] = useState(false)
  return (
    <div className="pdp-buy">
      <p className="price" style={{ fontSize: '2rem', margin: '0 0 4px' }}>
        {partPriceLabel(part)}
      </p>
      <p className="form-note" style={{ marginTop: 0 }}>
        <strong>SKU:</strong> {part.sku}. {PRICE_DISCLAIMER}
      </p>
      <div className="pdp-buy-row">
        <QtyStepper qty={qty} setQty={setQty} />
        <button
          type="button"
          className="btn btn-lg"
          aria-label={`Add ${part.name} to cart`}
          onClick={() => { addToCart(part, qty); setQty(1); setAdded(true) }}
        >
          Add to cart
        </button>
      </div>
      {added ? (
        <p className="pdp-added" role="status">Added to cart. <Link href="/cart/">View cart →</Link></p>
      ) : null}
    </div>
  )
}
