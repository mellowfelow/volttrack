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

// Line-item identity. Two variants of the same bike are two separate lines,
// so `key` — not `slug` — is what setQty/removeItem operate on.
export const lineKey = (slug, variantId) => (variantId ? `${slug}::${variantId}` : slug)

// `variant` is an entry from product.variants ({ id, label, price }) or null.
export function addToCart(product, qty = 1, variant = null) {
  const items = getCart()
  const key = lineKey(product.slug, variant && variant.id)
  const existing = items.find((i) => (i.key || i.slug) === key)
  if (existing) {
    existing.qty += qty
  } else {
    items.push({
      key,
      slug: product.slug,
      // Order confirmation shows the variant: "Stark Varg EX — Alpha (80HP)"
      name: variant ? `${product.name} — ${variant.label}` : product.name,
      variant: variant ? variant.label : '',
      price: variant ? variant.price : product.price,
      qty,
    })
  }
  write(items)
  return items
}

export function setQty(key, qty) {
  const items = getCart()
    .map((i) => ((i.key || i.slug) === key ? { ...i, qty: Math.max(1, qty) } : i))
  write(items)
  return items
}

export function removeItem(key) {
  write(getCart().filter((i) => (i.key || i.slug) !== key))
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
