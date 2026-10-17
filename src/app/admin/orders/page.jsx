'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useAdminContextPasscode } from '@/components/admin/AdminPasscodeContext'
import { OrderStatusBadge } from '@/components/admin/StatusBadge'
import { money } from '@/lib/order'

export default function OrdersPage() {
  const passcode = useAdminContextPasscode()
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(true)
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    if (!passcode) return
    fetch('/api/admin/orders', { headers: { 'X-Admin-Passcode': passcode } })
      .then((r) => r.json())
      .then((d) => setOrders(d.orders || []))
      .catch(() => setFailed(true))
      .finally(() => setLoading(false))
  }, [passcode])

  async function handleDelete(ref) {
    if (!confirm(`Delete order ${ref}?`)) return
    await fetch(`/api/admin/orders/${encodeURIComponent(ref)}`, { method: 'DELETE', headers: { 'X-Admin-Passcode': passcode } })
    setOrders((prev) => prev.filter((o) => o.orderNumber !== ref))
  }

  if (loading) return <p style={{ padding: 24, color: '#888' }}>Loading orders…</p>

  return (
    <div>
      <h1 className="admin-page-title">Orders</h1>
      {failed ? <div className="alert alert-error">Couldn’t load orders — refresh and try again.</div> : null}
      {orders.length === 0 ? (
        <div className="empty-state">
          <p>No orders yet.</p>
        </div>
      ) : (
        <div>
          {orders.map((o) => {
            const date = o.createdAt ? new Date(o.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : '—'
            const href = `/admin/orders/${encodeURIComponent(o.orderNumber)}/`
            return (
              <div key={o.orderNumber} className="item-card">
                <div className="item-card-header">
                  <Link href={href} className="mono" style={{ fontSize: 13, fontWeight: 700, color: '#1d4ed8', textDecoration: 'none' }}>
                    {o.orderNumber}
                  </Link>
                  <OrderStatusBadge status={o.status} />
                  {o.channel ? <span className="status-badge" style={{ background: '#f3f4f6', color: '#555' }}>{o.channel}</span> : null}
                </div>
                <div className="item-card-name">{o.customerName}</div>
                <div className="item-card-meta">
                  {o.customerEmail || o.customerPhone || 'No contact'} · {o.paymentMethod || '—'} · {date}
                </div>
                <div className="item-card-footer">
                  <span className="item-card-amount">{money(o.amountDue)}</span>
                  <div className="action-row">
                    <Link href={href} className="btn-sm">View</Link>
                    <button onClick={() => handleDelete(o.orderNumber)} className="btn-danger">Delete</button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
