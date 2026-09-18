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
        <table className="admin-table">
          <thead>
            <tr>
              <th>Order</th>
              <th>Customer</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {orders.slice(0, 10).map((o) => (
              <tr key={o.orderNumber}>
                <td><a href={`/admin/send-payment-email/?id=${encodeURIComponent(o.orderNumber)}`} className="mono">{o.orderNumber}</a></td>
                <td>{o.customerName}</td>
                <td>${Number(o.amountDue).toLocaleString('en-US')}</td>
                <td><span className={`status-badge status-${o.status}`}>{o.status}</span></td>
                <td style={{ color: '#888' }}>{o.createdAt ? new Date(o.createdAt).toLocaleDateString() : '—'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <h2 className="section-title">Recent enquiries</h2>
      {enquiries.length === 0 ? (
        <div className="empty-state">
          <p>No enquiries yet — contact and wholesale form submissions appear here.</p>
        </div>
      ) : (
        <table className="admin-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Type</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {enquiries.slice(0, 10).map((e) => (
              <tr key={e.id}>
                <td><a href={`/admin/reply-enquiry/?id=${encodeURIComponent(e.id)}`} className="mono">{e.id}</a></td>
                <td>{e.name}</td>
                <td>{e.type}</td>
                <td><span className={`status-badge status-${e.status}`}>{e.status}</span></td>
                <td style={{ color: '#888' }}>{e.createdAt ? new Date(e.createdAt).toLocaleDateString() : '—'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}
