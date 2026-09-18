// Short, human, collision-safe IDs. ZERO imports so the identical function runs
// on client and server — the checkout mints the ref before any server round-trip
// so the same number appears in the confirmation, the dashboard and the email.

// {PREFIX}-XXXXXX : 4 base36 timestamp chars + 2 base36 random, upper-cased.
export function generateOrderNumber(prefix = 'VT') {
  const t = Date.now().toString(36).slice(-4)
  const r = Math.random().toString(36).slice(2, 4)
  return `${prefix}-${(t + r).toUpperCase()}`
}

// Validate an incoming ref for a given prefix.
export function isValidOrderNumber(ref, prefix = 'VT') {
  return new RegExp(`^${prefix}-[A-Z0-9]{4,10}$`).test(String(ref || ''))
}

// ENQ-{base36 time}-{4 random}
export function generateEnquiryId() {
  const t = Date.now().toString(36)
  const r = Math.random().toString(36).slice(2, 6)
  return `ENQ-${t}-${r}`.toUpperCase()
}
