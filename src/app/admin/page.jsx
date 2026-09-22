'use client'
import { useEffect, useState } from 'react'
import { useAdminPasscode } from '@/lib/useAdminPasscode'

function useFetch(url, passcode) {
  const [data, setData] = useState(null)
  useEffect(() => {
    if (!passcode) return
    fetch(url, { headers: { 'X-Admin-Passcode': passcode } })
      .then((r) => r.json())
      .then(setData)
      .catch(() => {})
  }, [url, passcode])
  return data
}

export default function AdminDashboard() {
  const { passcode } = useAdminPasscode()
  const ordersData = useFetch('/api/admin/orders', passcode)
  const enquiriesData = useFetch('/api/admin/enquiries', passcode)

  const orders = ordersData?.orders || []
  const enquiries = enquiriesData?.enquiries || []
  const pendingOrders = orders.filter((o) => o.status === 'pending').length
  const newEnquiries = enquiries.filter((e) => e.status === 'new').length

  return (
    <div>
      <h1 className="admin-page-title">Dashboard</h1>

      <div className="stat-grid">
        <a href="/admin/orders/" className="stat-card">
          <div className="number">{orders.length}</div>
          <div className="label">Total orders</div>
          {pendingOrders > 0 ? <span className="badge badge-pending">{pendingOrders} pending</span> : null}
        </a>
        <a href="/admin/enquiries/" className="stat-card">
          <div className="number">{enquiries.length}</div>
          <div className="label">Total enquiries</div>
          {newEnquiries > 0 ? <span className="badge badge-new">{newEnquiries} new</span> : null}
        </a>
      </div>

      <h2 className="section-title">Recent orders</h2>
      {orders.length === 0 ? (
        <div className="empty-state">
          <p>No orders yet — they will appear here once customers check out.</p>
        </div>
      ) : (
        <div>
          {orders.slice(0, 5).map((o) => {
            const date = o.createdAt ? new Date(o.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }) : '—'
            return (
              <div key={o.orderNumber} className="item-card">
                <div className="item-card-header">
                  <a href={`/admin/orders/${encodeURIComponent(o.orderNumber)}`} className="mono" style={{ fontSize: 13, fontWeight: 700, color: '#1d4ed8', textDecoration: 'none' }}>
                    {o.orderNumber}
                  </a>
                  <span className={`status-badge status-${o.status}`}>{o.status === 'payment-sent' ? 'Sent' : 'Pending'}</span>
                </div>
                <div className="item-card-name">{o.customerName}</div>
                <div className="item-card-footer">
                  <span className="item-card-amount">${Number(o.amountDue).toLocaleString('en-US')}</span>
                  <span style={{ fontSize: 12, color: '#aaa' }}>{date}</span>
                </div>
              </div>
            )
          })}
          {orders.length > 5 && (
            <a href="/admin/orders/" style={{ display: 'block', textAlign: 'center', fontSize: 13, color: '#1d4ed8', marginTop: 8 }}>
              View all {orders.length} orders →
            </a>
          )}
        </div>
      )}

      <h2 className="section-title" style={{ marginTop: 32 }}>Recent enquiries</h2>
      {enquiries.length === 0 ? (
        <div className="empty-state">
          <p>No enquiries yet — contact and wholesale form submissions appear here.</p>
        </div>
      ) : (
        <div>
          {enquiries.slice(0, 5).map((e) => {
            const date = e.createdAt ? new Date(e.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }) : '—'
            return (
              <div key={e.id} className="item-card">
                <div className="item-card-header">
                  <span className="status-badge" style={{ background: '#f3f4f6', color: '#555', textTransform: 'capitalize' }}>{e.type}</span>
                  <span className={`status-badge status-${e.status}`}>{e.status}</span>
                </div>
                <div className="item-card-name">{e.name}</div>
                {e.message && <p className="item-card-preview">{e.message}</p>}
                <div className="item-card-footer">
                  <a href={`/admin/enquiries/${encodeURIComponent(e.id)}`} className="btn-sm" style={{ fontSize: 12 }}>View</a>
                  <span style={{ fontSize: 12, color: '#aaa' }}>{date}</span>
                </div>
              </div>
            )
          })}
          {enquiries.length > 5 && (
            <a href="/admin/enquiries/" style={{ display: 'block', textAlign: 'center', fontSize: 13, color: '#1d4ed8', marginTop: 8 }}>
              View all {enquiries.length} enquiries →
            </a>
          )}
        </div>
      )}
    </div>
  )
}
