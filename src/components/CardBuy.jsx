'use client'
import { useState } from 'react'
import QtyStepper from '@/components/QtyStepper'
import { addToCart } from '@/lib/cart'

// QtyStepper + Add-to-cart for a product card. Qty resets to 1 after adding.
export default function CardBuy({ product }) {
  const [qty, setQty] = useState(1)
  const [added, setAdded] = useState(false)
  return (
    <div className="card-buy">
      <QtyStepper qty={qty} setQty={setQty} size="sm" />
      <button
        type="button"
        className="btn"
        aria-label={`Add ${product.name} to cart`}
        onClick={() => {
          addToCart(product, qty)
          setQty(1)
          setAdded(true)
          setTimeout(() => setAdded(false), 1500)
        }}
      >
        {added ? 'Added ✓' : 'Add to cart'}
      </button>
    </div>
  )
}
