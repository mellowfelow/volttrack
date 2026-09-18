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
      <h1 style={{ fontSize: '1.6rem', marginBottom: 24 }}>Dashboard</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16, marginBottom: 32 }}>
        <a href="/admin/orders/" style={{ padding: 20, borderRadius: 12, border: '1px solid #e5e5e5', textDecoration: 'none', color: 'inherit' }}>
          <div style={{ fontSize: 32, fontWeight: 700 }}>{orders.length}</div>
          <div style={{ fontSize: 14, color: '#666' }}>Total orders</div>
          {pendingOrders > 0 ? <div style={{ marginTop: 4, fontSize: 13, color: '#d97706', fontWeight: 600 }}>{pendingOrders} pending</div> : null}
        </a>
        <a href="/admin/enquiries/" style={{ padding: 20, borderRadius: 12, border: '1px solid #e5e5e5', textDecoration: 'none', color: 'inherit' }}>
          <div style={{ fontSize: 32, fontWeight: 700 }}>{enquiries.length}</div>
          <div style={{ fontSize: 14, color: '#666' }}>Total enquiries</div>
          {newEnquiries > 0 ? <div style={{ marginTop: 4, fontSize: 13, color: '#1d4ed8', fontWeight: 600 }}>{newEnquiries} new</div> : null}
        </a>
      </div>

      <h2 style={{ fontSize: '1.2rem', marginBottom: 12 }}>Recent orders</h2>
      {orders.length === 0 ? <p style={{ color: '#888' }}>No orders yet.</p> : (
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14, marginBottom: 32 }}>
          <thead>
            <tr style={{ borderBottom: '2px solid #e5e5e5', textAlign: 'left' }}>
              <th style={{ padding: '8px 12px' }}>Order #</th>
              <th style={{ padding: '8px 12px' }}>Customer</th>
              <th style={{ padding: '8px 12px' }}>Amount</th>
              <th style={{ padding: '8px 12px' }}>Status</th>
              <th style={{ padding: '8px 12px' }}>Date</th>
            </tr>
          </thead>
          <tbody>
            {orders.slice(0, 10).map((o) => (
              <tr key={o.orderNumber} style={{ borderBottom: '1px solid #f0f0f0' }}>
                <td style={{ padding: '8px 12px' }}><a href={`/admin/send-payment-email/?id=${encodeURIComponent(o.orderNumber)}`}>{o.orderNumber}</a></td>
                <td style={{ padding: '8px 12px' }}>{o.customerName}</td>
                <td style={{ padding: '8px 12px' }}>${Number(o.amountDue).toLocaleString('en-US')}</td>
                <td style={{ padding: '8px 12px' }}><span style={{ padding: '2px 8px', borderRadius: 4, fontSize: 12, fontWeight: 600, background: o.status === 'pending' ? '#fef3c7' : '#d1fae5', color: o.status === 'pending' ? '#92400e' : '#065f46' }}>{o.status}</span></td>
                <td style={{ padding: '8px 12px', color: '#888' }}>{o.createdAt ? new Date(o.createdAt).toLocaleDateString() : '—'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <h2 style={{ fontSize: '1.2rem', marginBottom: 12 }}>Recent enquiries</h2>
      {enquiries.length === 0 ? <p style={{ color: '#888' }}>No enquiries yet.</p> : (
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
          <thead>
            <tr style={{ borderBottom: '2px solid #e5e5e5', textAlign: 'left' }}>
              <th style={{ padding: '8px 12px' }}>ID</th>
              <th style={{ padding: '8px 12px' }}>Name</th>
              <th style={{ padding: '8px 12px' }}>Type</th>
              <th style={{ padding: '8px 12px' }}>Status</th>
              <th style={{ padding: '8px 12px' }}>Date</th>
            </tr>
          </thead>
          <tbody>
            {enquiries.slice(0, 10).map((e) => (
              <tr key={e.id} style={{ borderBottom: '1px solid #f0f0f0' }}>
                <td style={{ padding: '8px 12px' }}><a href={`/admin/reply-enquiry/?id=${encodeURIComponent(e.id)}`}>{e.id}</a></td>
                <td style={{ padding: '8px 12px' }}>{e.name}</td>
                <td style={{ padding: '8px 12px' }}>{e.type}</td>
                <td style={{ padding: '8px 12px' }}><span style={{ padding: '2px 8px', borderRadius: 4, fontSize: 12, fontWeight: 600, background: e.status === 'new' ? '#dbeafe' : '#d1fae5', color: e.status === 'new' ? '#1e40af' : '#065f46' }}>{e.status}</span></td>
                <td style={{ padding: '8px 12px', color: '#888' }}>{e.createdAt ? new Date(e.createdAt).toLocaleDateString() : '—'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}
