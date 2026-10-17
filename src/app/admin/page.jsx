'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useAdminContextPasscode } from '@/components/admin/AdminPasscodeContext'
import { OrderStatusBadge, EnquiryStatusBadge } from '@/components/admin/StatusBadge'
import { money } from '@/lib/order'

export default function AdminDashboard() {
  const passcode = useAdminContextPasscode()
  const [orders, setOrders] = useState([])
  const [enquiries, setEnquiries] = useState([])
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    if (!passcode) return
    const headers = { 'X-Admin-Passcode': passcode }
    fetch('/api/admin/orders', { headers }).then((r) => r.json()).then((d) => setOrders(d.orders || [])).catch(() => setFailed(true))
    fetch('/api/admin/enquiries', { headers }).then((r) => r.json()).then((d) => setEnquiries(d.enquiries || [])).catch(() => setFailed(true))
  }, [passcode])

  const pendingOrders = orders.filter((o) => (o.status || 'pending') === 'pending').length
  const paidOrders = orders.filter((o) => o.status === 'payment-confirmed').length
  const newEnquiries = enquiries.filter((e) => (e.status || 'new') === 'new').length

  async function deleteOrder(ref) {
    if (!confirm(`Delete order ${ref}?`)) return
    await fetch(`/api/admin/orders/${encodeURIComponent(ref)}`, { method: 'DELETE', headers: { 'X-Admin-Passcode': passcode } })
    setOrders((prev) => prev.filter((o) => o.orderNumber !== ref))
  }

  async function deleteEnquiry(id) {
    if (!confirm(`Delete enquiry ${id}?`)) return
    await fetch(`/api/admin/enquiries/${encodeURIComponent(id)}`, { method: 'DELETE', headers: { 'X-Admin-Passcode': passcode } })
    setEnquiries((prev) => prev.filter((e) => e.id !== id))
  }

  return (
    <div>
      <h1 className="admin-page-title">Dashboard</h1>
      {failed ? <div className="alert alert-error">Couldn’t load everything — refresh and try again.</div> : null}

      <div className="stat-grid">
        <Link href="/admin/orders/" className="stat-card">
          <div className="number">{orders.length}</div>
          <div className="label">Total orders</div>
          {pendingOrders > 0 ? <span className="badge badge-pending">{pendingOrders} need payment details</span> : null}
          {paidOrders > 0 ? <span className="badge badge-new" style={{ marginLeft: 6 }}>{paidOrders} paid — verify</span> : null}
        </Link>
        <Link href="/admin/enquiries/" className="stat-card">
          <div className="number">{enquiries.length}</div>
          <div className="label">Total enquiries</div>
          {newEnquiries > 0 ? <span className="badge badge-new">{newEnquiries} new</span> : null}
        </Link>
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
            const href = `/admin/orders/${encodeURIComponent(o.orderNumber)}/`
            return (
              <div key={o.orderNumber} className="item-card">
                <div className="item-card-header">
                  <Link href={href} className="mono" style={{ fontSize: 13, fontWeight: 700, color: '#1d4ed8', textDecoration: 'none' }}>
                    {o.orderNumber}
                  </Link>
                  <OrderStatusBadge status={o.status} />
                </div>
                <div className="item-card-name">{o.customerName}</div>
                <div className="item-card-footer">
                  <span className="item-card-amount">{money(o.amountDue)}</span>
                  <div className="action-row">
                    <span style={{ fontSize: 12, color: '#aaa' }}>{date}</span>
                    <Link href={href} className="btn-sm">View</Link>
                    <button onClick={() => deleteOrder(o.orderNumber)} className="btn-danger">Delete</button>
                  </div>
                </div>
              </div>
            )
          })}
          {orders.length > 5 && (
            <Link href="/admin/orders/" style={{ display: 'block', textAlign: 'center', fontSize: 13, color: '#1d4ed8', marginTop: 8 }}>
              View all {orders.length} orders →
            </Link>
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
            const href = `/admin/enquiries/${encodeURIComponent(e.id)}/`
            return (
              <div key={e.id} className="item-card">
                <div className="item-card-header">
                  <span className="status-badge" style={{ background: '#f3f4f6', color: '#555', textTransform: 'capitalize' }}>{e.type}</span>
                  <EnquiryStatusBadge status={e.status} />
                </div>
                <div className="item-card-name">{e.name}</div>
                {e.message && <p className="item-card-preview">{e.message}</p>}
                <div className="item-card-footer">
                  <Link href={href} className="btn-sm" style={{ fontSize: 12 }}>View</Link>
                  <div className="action-row">
                    <span style={{ fontSize: 12, color: '#aaa' }}>{date}</span>
                    <button onClick={() => deleteEnquiry(e.id)} className="btn-danger">Delete</button>
                  </div>
                </div>
              </div>
            )
          })}
          {enquiries.length > 5 && (
            <Link href="/admin/enquiries/" style={{ display: 'block', textAlign: 'center', fontSize: 13, color: '#1d4ed8', marginTop: 8 }}>
              View all {enquiries.length} enquiries →
            </Link>
          )}
        </div>
      )}
    </div>
  )
}
