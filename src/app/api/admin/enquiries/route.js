import { NextResponse } from 'next/server'
import { checkAdminPasscode } from '@/lib/adminAuth'
import { listEnquiries } from '@/lib/enquiryStore'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function GET(request) {
  const denied = checkAdminPasscode(request)
  if (denied) return denied
  const enquiries = await listEnquiries()
  return NextResponse.json({ ok: true, enquiries })
}
