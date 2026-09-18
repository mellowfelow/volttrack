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

  if (loading) return <p>Loading…</p>

  return (
    <div>
      <h1 style={{ fontSize: '1.4rem', marginBottom: 16 }}>Orders</h1>
      {orders.length === 0 ? <p style={{ color: '#888' }}>No orders yet.</p> : (
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
          <thead>
            <tr style={{ borderBottom: '2px solid #e5e5e5', textAlign: 'left' }}>
              <th style={{ padding: '8px 12px' }}>Order #</th>
              <th style={{ padding: '8px 12px' }}>Customer</th>
              <th style={{ padding: '8px 12px' }}>Email</th>
              <th style={{ padding: '8px 12px' }}>Amount</th>
              <th style={{ padding: '8px 12px' }}>Method</th>
              <th style={{ padding: '8px 12px' }}>Status</th>
              <th style={{ padding: '8px 12px' }}>Date</th>
              <th style={{ padding: '8px 12px' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((o) => (
              <tr key={o.orderNumber} style={{ borderBottom: '1px solid #f0f0f0' }}>
                <td style={{ padding: '8px 12px', fontWeight: 600 }}>{o.orderNumber}</td>
                <td style={{ padding: '8px 12px' }}>{o.customerName}</td>
                <td style={{ padding: '8px 12px' }}>{o.customerEmail}</td>
                <td style={{ padding: '8px 12px' }}>${Number(o.amountDue).toLocaleString('en-US')}</td>
                <td style={{ padding: '8px 12px' }}>{o.paymentMethod || '—'}</td>
                <td style={{ padding: '8px 12px' }}>
                  <span style={{ padding: '2px 8px', borderRadius: 4, fontSize: 12, fontWeight: 600, background: o.status === 'pending' ? '#fef3c7' : '#d1fae5', color: o.status === 'pending' ? '#92400e' : '#065f46' }}>{o.status}</span>
                </td>
                <td style={{ padding: '8px 12px', color: '#888' }}>{o.createdAt ? new Date(o.createdAt).toLocaleDateString() : '—'}</td>
                <td style={{ padding: '8px 12px' }}>
                  <a href={`/admin/send-payment-email/?id=${encodeURIComponent(o.orderNumber)}`} style={{ fontSize: 13, marginRight: 8 }}>Send payment email</a>
                  <button onClick={() => handleDelete(o.orderNumber)} style={{ fontSize: 13, color: '#b91c1c', background: 'none', border: 'none', cursor: 'pointer' }}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}
