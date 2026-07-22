'use client'
import { useState } from 'react'
import { addToCart } from '@/lib/cart'

export default function AddToCart({ product, qty = 1, className = 'btn', label = 'Add to cart' }) {
  const [added, setAdded] = useState(false)
  return (
    <button
      type="button"
      className={className}
      onClick={(e) => {
        e.preventDefault()
        e.stopPropagation()
        addToCart(product, qty)
        setAdded(true)
        setTimeout(() => setAdded(false), 1500)
      }}
      aria-label={`Add ${product.name} to cart`}
    >
      {added ? 'Added ✓' : label}
    </button>
  )
}
