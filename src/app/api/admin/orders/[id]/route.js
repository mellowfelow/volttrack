import { NextResponse } from 'next/server'
import { checkAdminPasscode } from '@/lib/adminAuth'
import { getOrder, deleteOrder, markOrderSent } from '@/lib/orderStore'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function GET(request, { params }) {
  const denied = checkAdminPasscode(request)
  if (denied) return denied
  const { id } = await params
  const order = await getOrder(id)
  if (!order) return NextResponse.json({ ok: false, error: 'not-found' }, { status: 404 })
  return NextResponse.json({ ok: true, order })
}

export async function PATCH(request, { params }) {
  const denied = checkAdminPasscode(request)
  if (denied) return denied
  const { id } = await params
  const ok = await markOrderSent(id)
  if (!ok) return NextResponse.json({ ok: false, error: 'not-found' }, { status: 404 })
  return NextResponse.json({ ok: true })
}

export async function DELETE(request, { params }) {
  const denied = checkAdminPasscode(request)
  if (denied) return denied
  const { id } = await params
  await deleteOrder(id)
  return NextResponse.json({ ok: true })
}
