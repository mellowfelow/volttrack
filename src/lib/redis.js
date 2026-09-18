// Dependency-free Upstash Redis over REST. Uses the POST + JSON-array-body
// command shape (["SET", key, value]) which is robust for long JSON values.
// Accepts four credential-var pairs so whatever Vercel's Storage tab named them
// just works. Every function degrades gracefully — when unconfigured, reads
// return null/[] and writes are no-ops, so nothing crashes.

const CREDENTIAL_CANDIDATES = [
  ['UPSTASH_REDIS_REST_URL', 'UPSTASH_REDIS_REST_TOKEN'],
  ['KV_REST_API_URL', 'KV_REST_API_TOKEN'],
  ['STORAGE_REST_API_URL', 'STORAGE_REST_API_TOKEN'],
  ['STORAGE_KV_REST_API_URL', 'STORAGE_KV_REST_API_TOKEN'],
]

function credentials() {
  for (const [urlVar, tokenVar] of CREDENTIAL_CANDIDATES) {
    const url = process.env[urlVar]
    const token = process.env[tokenVar]
    if (url && token) return { url: normaliseUrl(url), token }
  }
  return null
}

function normaliseUrl(url) {
  let u = url.trim()
  if (!/^https?:\/\//.test(u)) u = `https://${u}`
  if (u.includes('console.upstash.com')) {
    throw new Error(
      'Redis URL points at console.upstash.com (the dashboard), not the database REST endpoint. Use the REST URL from the database page.',
    )
  }
  return u.replace(/\/$/, '')
}

export function isRedisConfigured() {
  try {
    return !!credentials()
  } catch {
    return false
  }
}

async function command(args) {
  const creds = credentials()
  if (!creds) return null
  const res = await fetch(creds.url, {
    method: 'POST',
    headers: { Authorization: `Bearer ${creds.token}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(args),
    cache: 'no-store',
  })
  if (!res.ok) throw new Error(`Redis command failed: ${res.status}`)
  const json = await res.json()
  return json.result
}

export async function set(key, value) {
  return command(['SET', key, JSON.stringify(value)])
}

export async function get(key) {
  const raw = await command(['GET', key])
  if (raw == null) return null
  try {
    return JSON.parse(raw)
  } catch {
    return null
  }
}

export async function del(key) {
  return command(['DEL', key])
}

export async function zadd(key, score, member) {
  return command(['ZADD', key, String(score), member])
}

export async function zrem(key, member) {
  return command(['ZREM', key, member])
}

// Newest-first list of members.
export async function zrangeAllDesc(key) {
  const result = await command(['ZRANGE', key, '0', '-1', 'REV'])
  return Array.isArray(result) ? result : []
}
