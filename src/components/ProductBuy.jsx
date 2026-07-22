'use client'
import { useState } from 'react'
import Link from 'next/link'
import QtyStepper from '@/components/QtyStepper'
import { addToCart } from '@/lib/cart'

// PDP buy block: QtyStepper + Add to cart (+ View cart once something is added).
export default function ProductBuy({ product }) {
  const [qty, setQty] = useState(1)
  const [added, setAdded] = useState(false)
  return (
    <div className="pdp-buy">
      <div className="pdp-buy-row">
        <QtyStepper qty={qty} setQty={setQty} />
        <button
          type="button"
          className="btn btn-lg"
          aria-label={`Add ${product.name} to cart`}
          onClick={() => { addToCart(product, qty); setQty(1); setAdded(true) }}
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
