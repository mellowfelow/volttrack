// Order storage over Upstash Redis. Value at order:{ref}; a sorted set
// order:index scored by createdAt drives the newest-first dashboard list.
// All functions are best-effort — when Redis is unconfigured they no-op so the
// checkout still emails and redirects.
import { set, get, del, zadd, zrem, zrangeAllDesc, isRedisConfigured } from '@/lib/redis'
import { generateOrderNumber, isValidOrderNumber } from '@/lib/orderNumber'

export { generateOrderNumber, isValidOrderNumber, isRedisConfigured }

const KEY = (ref) => `order:${ref}`
const INDEX = 'order:index'

// StoredOrder: { orderNumber, customerName, customerEmail?, customerPhone?,
//   address?, items[{name,quantity,price}], subtotal, amountDue, paymentMethod,
//   notes?, status:'pending'|'payment-sent'|'payment-confirmed',
//   channel:'whatsapp'|'email', paymentDetails?, createdAt }
export async function saveOrder(order) {
  if (!isRedisConfigured()) return false
  const record = { status: 'pending', createdAt: new Date().toISOString(), ...order }
  await set(KEY(record.orderNumber), record)
  await zadd(INDEX, Date.parse(record.createdAt) || Date.now(), record.orderNumber)
  return true
}

export async function listOrders() {
  if (!isRedisConfigured()) return []
  const refs = await zrangeAllDesc(INDEX)
  const orders = await Promise.all(refs.map((r) => get(KEY(r))))
  return orders.filter(Boolean)
}

export async function getOrder(ref) {
  if (!isRedisConfigured()) return null
  return get(KEY(ref))
}

// paymentDetails: { methodId, fields:[{label,value}], opening, closing, sentAt } —
// stored so the customer's /order/payment-details/?id= page can render the same
// tap-to-copy fields whenever they return to it. Saved even if the email send
// failed (the admin can still share the link / WhatsApp message).
export async function savePaymentDetails(ref, paymentDetails) {
  const order = await getOrder(ref)
  if (!order) return false
  order.paymentDetails = { ...paymentDetails, savedAt: new Date().toISOString() }
  await set(KEY(ref), order)
  return true
}

export async function markOrderSent(ref) {
  const order = await getOrder(ref)
  if (!order) return false
  if (order.status !== 'payment-confirmed') order.status = 'payment-sent'
  await set(KEY(ref), order)
  return true
}

export async function markPaymentConfirmed(ref) {
  const order = await getOrder(ref)
  if (!order) return false
  order.status = 'payment-confirmed'
  order.paymentConfirmedAt = new Date().toISOString()
  await set(KEY(ref), order)
  return true
}

export async function deleteOrder(ref) {
  if (!isRedisConfigured()) return false
  await del(KEY(ref))
  await zrem(INDEX, ref)
  return true
}
