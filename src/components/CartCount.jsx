'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { getCart, cartCount, subscribe } from '@/lib/cart'

export default function CartCount() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    setCount(cartCount(getCart()))
    return subscribe((items) => setCount(cartCount(items)))
  }, [])
  return (
    <Link href="/cart/" className="nav-cart" aria-label={`Cart, ${count} item${count === 1 ? '' : 's'}`}>
      🛒 Cart{count > 0 ? ` (${count})` : ''}
    </Link>
  )
}
