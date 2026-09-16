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
// `opts.part` marks accessories (vs bikes) — used for the bundle discount and to
// decide whether adding opens the cart drawer (accessory) or the bike upsell
// popup (bike).
export function addToCart(product, qty = 1, variant = null, opts = {}) {
  const isPart = !!opts.part
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
      image: (product.images && product.images[0]) || '',
      part: isPart,
      qty,
    })
  }
  write(items)
  if (isBrowser() && !opts.silent) {
    if (isPart) {
      // Accessory: open the slide-out cart drawer as before.
      window.dispatchEvent(new Event('cart-open'))
    } else {
      // Bike: open the accessory upsell popup (which offers the +5% bundle).
      window.dispatchEvent(
        new CustomEvent('bike-added', {
          detail: { slug: product.slug, brand: product.brand || '', name: product.name },
        })
      )
    }
  }
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

// A cart line is an accessory when it was added with { part:true }. Legacy lines
// (added before this flag existed) have no `part` key and are treated as bikes,
// so they simply don't earn the accessory bundle discount.
const isAccessory = (i) => i.part === true

// Totals. Two stacked, auto-applied discounts:
//  1) Bundle discount — when a bike is in the cart, every accessory line gets
//     SITE.bundleAccessoryDiscount off (applied always, not payment-dependent).
//  2) Crypto discount — SITE.cryptoDiscount off the post-bundle amount, only when
//     isCrypto (i.e. paying with BTC/USDT at checkout).
export function totals(items = getCart(), isCrypto = false) {
  const subtotal = items.reduce((s, i) => s + i.price * i.qty, 0)
  const hasBike = items.some((i) => !isAccessory(i))
  const accessorySubtotal = items
    .filter(isAccessory)
    .reduce((s, i) => s + i.price * i.qty, 0)
  const bundleRate = hasBike ? SITE.bundleAccessoryDiscount : 0
  const bundleDiscount = Math.round(accessorySubtotal * bundleRate)
  const afterBundle = subtotal - bundleDiscount
  const rate = isCrypto ? SITE.cryptoDiscount : 0
  const discount = Math.round(afterBundle * rate)
  return {
    subtotal,
    hasBike,
    bundleRate,
    bundleDiscount,
    afterBundle,
    rate,
    discount,
    total: afterBundle - discount,
  }
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
