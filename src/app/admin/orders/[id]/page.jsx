'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useParams, useRouter } from 'next/navigation'
import { useAdminContextPasscode } from '@/components/admin/AdminPasscodeContext'
import { OrderStatusBadge } from '@/components/admin/StatusBadge'
import { ArrowLeftIcon } from '@/components/admin/icons'
import { money, findMethod } from '@/lib/order'

const labelStyle = { fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em', color: '#888', marginBottom: 8 }

export default function OrderDetailPage() {
  const passcode = useAdminContextPasscode()
  const { id } = useParams()
  const router = useRouter()
  const [order, setOrder] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!passcode || !id) { setLoading(false); return }
    fetch(`/api/admin/orders/${encodeURIComponent(id)}`, { headers: { 'X-Admin-Passcode': passcode } })
      .then((r) => r.json())
      .then((d) => setOrder(d.order || null))
      .catch(() => {})
      .finally(() => setLoading(false))
  }, [passcode, id])

  async function handleDelete() {
    if (!confirm(`Delete order ${id}? This cannot be undone.`)) return
    await fetch(`/api/admin/orders/${encodeURIComponent(id)}`, { method: 'DELETE', headers: { 'X-Admin-Passcode': passcode } })
    router.push('/admin/orders/')
  }

  if (loading) return <p style={{ padding: 24, color: '#888' }}>Loading order…</p>
  if (!order) return (
    <div className="empty-state">
      <p>Order not found.</p>
      <Link href="/admin/orders/" className="btn-sm" style={{ marginTop: 12, display: 'inline-block' }}>Back to orders</Link>
    </div>
  )

  const created = order.createdAt ? new Date(order.createdAt) : null
  const sentDetails = order.paymentDetails
  const sendHref = `/admin/send-payment-email/?id=${encodeURIComponent(order.orderNumber)}`
  const customerPageHref = `/order/payment-details/?id=${encodeURIComponent(order.orderNumber)}`

  return (
    <div style={{ maxWidth: 720 }}>
      <Link href="/admin/orders/" className="back-link"><ArrowLeftIcon /> All orders</Link>

      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12, marginBottom: 24, flexWrap: 'wrap' }}>
        <div>
          <h1 className="admin-page-title" style={{ marginBottom: 4 }}>Order {order.orderNumber}</h1>
          <p className="detail-meta">
            {created ? created.toLocaleDateString('en-US', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' }) : '—'}
            {' · '}
            <OrderStatusBadge status={order.status} />
            {order.channel ? <>{' '}<span className="status-badge" style={{ background: '#f3f4f6', color: '#555' }}>{order.channel}</span></> : null}
          </p>
        </div>
        <button onClick={handleDelete} className="btn-danger" style={{ fontSize: 14 }}>Delete order</button>
      </div>

      {order.status === 'payment-confirmed' ? (
        <div className="alert alert-success">The customer says they’ve paid and uploaded a confirmation — check it landed (it was emailed to you) before dispatching.</div>
      ) : null}

      <div className="detail-grid">
        <div className="detail-card">
          <div style={labelStyle}>Customer</div>
          <div style={{ fontWeight: 600, marginBottom: 4 }}>{order.customerName}</div>
          <div style={{ marginBottom: 4 }}>{order.customerEmail}</div>
          {order.customerPhone ? <div style={{ marginBottom: 4 }}>{order.customerPhone}</div> : null}
          {order.address ? <div style={{ color: '#666', marginTop: 8 }}>{order.address}</div> : null}
        </div>
        <div className="detail-card">
          <div style={labelStyle}>Payment</div>
          <div style={{ fontWeight: 600, marginBottom: 4 }}>{order.paymentMethod || '—'}</div>
          <div style={{ marginBottom: 4 }}>{order.paymentPlan || 'Pay in full'}</div>
          <div style={{ fontSize: 24, fontWeight: 800, marginTop: 8 }}>{money(order.amountDue)}</div>
          {order.subtotal != null && Number(order.subtotal) !== Number(order.amountDue) ? <div style={{ fontSize: 13, color: '#888' }}>Subtotal: {money(order.subtotal)}</div> : null}
        </div>
      </div>

      <h2 className="section-title">Items</h2>
      <table className="admin-table" style={{ marginBottom: 24 }}>
        <thead>
          <tr>
            <th>Item</th>
            <th style={{ textAlign: 'right' }}>Qty</th>
            <th style={{ textAlign: 'right' }}>Price</th>
          </tr>
        </thead>
        <tbody>
          {(order.items || []).map((item, i) => (
            <tr key={i}>
              <td>{item.name}</td>
              <td style={{ textAlign: 'right' }}>{item.quantity}</td>
              <td style={{ textAlign: 'right' }}>{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {order.notes ? (
        <>
          <h2 className="section-title">Notes</h2>
          <div className="detail-card">{order.notes}</div>
        </>
      ) : null}

      {sentDetails?.fields?.length ? (
        <div className="paid-details">
          <h2 className="section-title">Payment details sent ({findMethod(sentDetails.methodId)?.label || 'method'})</h2>
          <dl className="pay-preview">
            {sentDetails.fields.map((f, i) => (
              <div key={`${f.label}-${i}`} className="pay-preview-row">
                <dt>{f.label}</dt>
                <dd>{f.value}</dd>
              </div>
            ))}
          </dl>
          <p className="hint">
            Customer’s tap-to-copy page: <a href={customerPageHref} target="_blank" rel="noopener noreferrer">{customerPageHref}</a>
          </p>
        </div>
      ) : null}

      <div className="action-row" style={{ marginTop: 24, gap: 12, flexWrap: 'wrap' }}>
        <Link href={sendHref} className="btn-primary">
          {order.status === 'pending' ? 'Send payment details' : 'Resend payment details'}
        </Link>
        <Link href="/admin/orders/" className="btn-sm">Back to orders</Link>
      </div>
    </div>
  )
}
