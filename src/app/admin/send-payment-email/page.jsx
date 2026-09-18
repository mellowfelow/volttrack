'use client'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { useAdminPasscode } from '@/lib/useAdminPasscode'
import { SITE } from '@/config/site'

export default function SendPaymentEmailPage() {
  const { passcode } = useAdminPasscode()
  const searchParams = useSearchParams()
  const orderId = searchParams.get('id') || ''

  const [order, setOrder] = useState(null)
  const [loading, setLoading] = useState(true)
  const [methodId, setMethodId] = useState(SITE.reply.paymentMethods[0]?.id || '')
  const [detail, setDetail] = useState('')
  const [sending, setSending] = useState(false)
  const [result, setResult] = useState(null)

  useEffect(() => {
    if (!passcode || !orderId) { setLoading(false); return }
    fetch(`/api/admin/orders/${encodeURIComponent(orderId)}`, { headers: { 'X-Admin-Passcode': passcode } })
      .then((r) => r.json())
      .then((d) => { setOrder(d.order || null); setLoading(false) })
      .catch(() => setLoading(false))
  }, [passcode, orderId])

  async function handleSend(e) {
    e.preventDefault()
    setSending(true)
    setResult(null)
    try {
      const res = await fetch('/api/admin/send-payment-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'X-Admin-Passcode': passcode },
        body: JSON.stringify({ orderId, methodId, detail }),
      })
      const data = await res.json()
      if (data.ok && data.sent) setResult({ type: 'success', text: 'Payment email sent successfully.' })
      else if (data.ok) setResult({ type: 'warn', text: `Saved but email not sent: ${data.reason || 'SMTP not configured'}` })
      else setResult({ type: 'error', text: data.error || 'Failed to send' })
    } catch {
      setResult({ type: 'error', text: 'Network error — try again' })
    }
    setSending(false)
  }

  if (loading) return <p style={{ padding: 24, color: '#888' }}>Loading order…</p>
  if (!order) return (
    <div className="empty-state">
      <p>Order not found.</p>
      <a href="/admin/orders/" className="btn-sm" style={{ marginTop: 12, display: 'inline-block' }}>Back to orders</a>
    </div>
  )

  return (
    <div style={{ maxWidth: 640 }}>
      <div className="detail-header">
        <h1>Send payment details</h1>
        <p className="detail-meta">
          Order <strong>{order.orderNumber}</strong> — {order.customerName} ({order.customerEmail}) — ${Number(order.amountDue).toLocaleString('en-US')}
        </p>
      </div>

      <form onSubmit={handleSend}>
        <div className="form-group">
          <label className="form-label">Payment method</label>
          <select value={methodId} onChange={(e) => setMethodId(e.target.value)} className="form-select">
            {SITE.reply.paymentMethods.map((m) => (
              <option key={m.id} value={m.id}>{m.label}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label className="form-label">Payment details</label>
          <textarea
            value={detail}
            onChange={(e) => setDetail(e.target.value)}
            required
            rows={6}
            placeholder="Paste the wallet address, bank account details, or payment link here…"
            className="form-textarea mono"
          />
        </div>

        {result ? <div className={`alert alert-${result.type === 'warn' ? 'warning' : result.type}`}>{result.text}</div> : null}

        <button type="submit" disabled={sending} className="btn-primary">
          {sending ? 'Sending…' : 'Send payment email'}
        </button>
      </form>

      <div className="item-list">
        <h2 className="section-title">Order items</h2>
        {(order.items || []).map((item, i) => (
          <div key={i} className="item-row">
            <span>{item.quantity} × {item.name}</span>
            <span>{item.price}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
