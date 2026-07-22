'use client'
// Client-side cart backed by localStorage ('mm-cart').
// Emits a 'cart-change' event so the nav count and cart page stay in sync.
import { SITE } from '@/config/site'

const KEY = 'mm-cart'
const isBrowser = () => typeof window !== 'undefined'

export function getCart() {
  if (!isBrowser()) return []
  try {
    return JSON.parse(localStorage.getItem(KEY) || '[]')
  } catch {
    return []
  }
}

function write(items) {
  localStorage.setItem(KEY, JSON.stringify(items))
  window.dispatchEvent(new Event('cart-change'))
}

export function addToCart(product, qty = 1) {
  const items = getCart()
  const existing = items.find((i) => i.slug === product.slug)
  if (existing) {
    existing.qty += qty
  } else {
    items.push({ slug: product.slug, name: product.name, price: product.price, qty })
  }
  write(items)
  return items
}

export function setQty(slug, qty) {
  const items = getCart()
    .map((i) => (i.slug === slug ? { ...i, qty: Math.max(1, qty) } : i))
  write(items)
  return items
}

export function removeItem(slug) {
  write(getCart().filter((i) => i.slug !== slug))
}

export function clearCart() {
  write([])
}

export function cartCount(items = getCart()) {
  return items.reduce((n, i) => n + i.qty, 0)
}

// Totals, including the auto-applied crypto discount when isCrypto is true.
export function totals(items = getCart(), isCrypto = false) {
  const subtotal = items.reduce((s, i) => s + i.price * i.qty, 0)
  const rate = isCrypto ? SITE.cryptoDiscount : 0
  const discount = Math.round(subtotal * rate)
  return { subtotal, discount, rate, total: subtotal - discount }
}

// Subscribe to cart changes (same-tab event + cross-tab storage event).
export function subscribe(cb) {
  if (!isBrowser()) return () => {}
  const onChange = () => cb(getCart())
  window.addEventListener('cart-change', onChange)
  window.addEventListener('storage', onChange)
  return () => {
    window.removeEventListener('cart-change', onChange)
    window.removeEventListener('storage', onChange)
  }
}
