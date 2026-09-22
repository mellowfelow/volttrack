'use client'
import { useEffect, useState } from 'react'
import { useAdminPasscode } from '@/lib/useAdminPasscode'

export default function OrdersPage() {
  const { passcode } = useAdminPasscode()
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!passcode) return
    fetch('/api/admin/orders', { headers: { 'X-Admin-Passcode': passcode } })
      .then((r) => r.json())
      .then((d) => { setOrders(d.orders || []); setLoading(false) })
      .catch(() => setLoading(false))
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
      {orders.length === 0 ? (
        <div className="empty-state">
          <p>No orders yet.</p>
        </div>
      ) : (
        <div>
          {orders.map((o) => {
            const date = o.createdAt ? new Date(o.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : '—'
            return (
              <div key={o.orderNumber} className="item-card">
                <div className="item-card-header">
                  <a href={`/admin/orders/${encodeURIComponent(o.orderNumber)}`} className="mono" style={{ fontSize: 13, fontWeight: 700, color: '#1d4ed8', textDecoration: 'none' }}>
                    {o.orderNumber}
                  </a>
                  <span className={`status-badge status-${o.status}`}>{o.status === 'payment-sent' ? 'Sent' : 'Pending'}</span>
                  {o.channel && (
                    <span className="status-badge" style={{ background: '#f3f4f6', color: '#555' }}>{o.channel}</span>
                  )}
                </div>
                <div className="item-card-name">{o.customerName}</div>
                <div className="item-card-meta">
                  {o.customerEmail || o.customerPhone || 'No contact'} · {o.paymentMethod || '—'} · {date}
                </div>
                <div className="item-card-footer">
                  <span className="item-card-amount">${Number(o.amountDue).toLocaleString('en-US')}</span>
                  <div className="action-row">
                    <a href={`/admin/orders/${encodeURIComponent(o.orderNumber)}`} className="btn-sm">View</a>
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
