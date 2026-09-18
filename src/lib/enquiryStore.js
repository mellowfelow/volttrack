// Enquiry storage — identical pattern to orderStore. Value at enquiry:{id};
// sorted set enquiry:index scored by createdAt.
import { set, get, del, zadd, zrem, zrangeAllDesc, isRedisConfigured } from '@/lib/redis'
import { generateEnquiryId } from '@/lib/orderNumber'

export { generateEnquiryId, isRedisConfigured }

const KEY = (id) => `enquiry:${id}`
const INDEX = 'enquiry:index'

// StoredEnquiry: { id, type:'contact'|'wholesale'|'bulk', name, email?, phone?,
//   message, meta:Record<string,string>, status:'new'|'replied', createdAt }
export async function saveEnquiry(enquiry) {
  if (!isRedisConfigured()) return false
  const record = {
    id: enquiry.id || generateEnquiryId(),
    status: 'new',
    createdAt: new Date().toISOString(),
    meta: {},
    ...enquiry,
  }
  await set(KEY(record.id), record)
  await zadd(INDEX, Date.parse(record.createdAt) || Date.now(), record.id)
  return record.id
}

export async function listEnquiries() {
  if (!isRedisConfigured()) return []
  const ids = await zrangeAllDesc(INDEX)
  const rows = await Promise.all(ids.map((i) => get(KEY(i))))
  return rows.filter(Boolean)
}

export async function getEnquiry(id) {
  if (!isRedisConfigured()) return null
  return get(KEY(id))
}

export async function markEnquiryReplied(id) {
  const e = await getEnquiry(id)
  if (!e) return false
  e.status = 'replied'
  await set(KEY(id), e)
  return true
}

export async function deleteEnquiry(id) {
  if (!isRedisConfigured()) return false
  await del(KEY(id))
  await zrem(INDEX, id)
  return true
}
