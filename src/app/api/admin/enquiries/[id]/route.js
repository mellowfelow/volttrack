import { NextResponse } from 'next/server'
import { checkAdminPasscode } from '@/lib/adminAuth'
import { getEnquiry, deleteEnquiry, markEnquiryReplied } from '@/lib/enquiryStore'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function GET(request, { params }) {
  const denied = checkAdminPasscode(request)
  if (denied) return denied
  const { id } = await params
  const enquiry = await getEnquiry(id)
  if (!enquiry) return NextResponse.json({ ok: false, error: 'not-found' }, { status: 404 })
  return NextResponse.json({ ok: true, enquiry })
}

export async function PATCH(request, { params }) {
  const denied = checkAdminPasscode(request)
  if (denied) return denied
  const { id } = await params
  const ok = await markEnquiryReplied(id)
  if (!ok) return NextResponse.json({ ok: false, error: 'not-found' }, { status: 404 })
  return NextResponse.json({ ok: true })
}

export async function DELETE(request, { params }) {
  const denied = checkAdminPasscode(request)
  if (denied) return denied
  const { id } = await params
  await deleteEnquiry(id)
  return NextResponse.json({ ok: true })
}
