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
        <table className="admin-table">
          <thead>
            <tr>
              <th>Order</th>
              <th>Customer</th>
              <th>Email</th>
              <th>Amount</th>
              <th>Method</th>
              <th>Status</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((o) => (
              <tr key={o.orderNumber}>
                <td><a href={`/admin/orders/${encodeURIComponent(o.orderNumber)}`} className="mono">{o.orderNumber}</a></td>
                <td>{o.customerName}</td>
                <td>{o.customerEmail}</td>
                <td>${Number(o.amountDue).toLocaleString('en-US')}</td>
                <td>{o.paymentMethod || '—'}</td>
                <td><span className={`status-badge status-${o.status}`}>{o.status}</span></td>
                <td style={{ color: '#888' }}>{o.createdAt ? new Date(o.createdAt).toLocaleDateString() : '—'}</td>
                <td>
                  <div className="action-row">
                    <a href={`/admin/orders/${encodeURIComponent(o.orderNumber)}`} className="btn-sm">View</a>
                    <button onClick={() => handleDelete(o.orderNumber)} className="btn-danger">Delete</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}
