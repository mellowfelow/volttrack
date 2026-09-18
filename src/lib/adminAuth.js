// Passcode gate for /api/admin/* routes. Compares the X-Admin-Passcode header to
// ADMIN_PASSCODE (server-only, never sent to the browser). Returns a Response to
// send back on failure, or null when the caller may proceed.
import { NextResponse } from 'next/server'

export function checkAdminPasscode(request) {
  const expected = process.env.ADMIN_PASSCODE
  if (!expected) {
    return NextResponse.json(
      { ok: false, error: 'admin-not-configured' },
      { status: 503 },
    )
  }
  const given = request.headers.get('x-admin-passcode') || ''
  if (given !== expected) {
    return NextResponse.json({ ok: false, error: 'unauthorized' }, { status: 401 })
  }
  return null
}
