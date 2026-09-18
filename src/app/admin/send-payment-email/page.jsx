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
      if (data.ok && data.sent) setResult({ type: 'success', text: 'Payment email sent.' })
      else if (data.ok) setResult({ type: 'warn', text: `Saved but email not sent: ${data.reason || 'SMTP not configured'}` })
      else setResult({ type: 'error', text: data.error || 'Failed to send' })
    } catch {
      setResult({ type: 'error', text: 'Network error — try again' })
    }
    setSending(false)
  }

  if (loading) return <p>Loading…</p>
  if (!order) return <p>Order not found. <a href="/admin/orders/">Back to orders</a></p>

  return (
    <div style={{ maxWidth: 640 }}>
      <h1 style={{ fontSize: '1.4rem', marginBottom: 4 }}>Send payment details</h1>
      <p style={{ color: '#888', marginBottom: 24 }}>Order <strong>{order.orderNumber}</strong> — {order.customerName} ({order.customerEmail}) — ${Number(order.amountDue).toLocaleString('en-US')}</p>

      <form onSubmit={handleSend}>
        <div style={{ marginBottom: 16 }}>
          <label style={{ display: 'block', fontWeight: 600, marginBottom: 6 }}>Payment method</label>
          <select value={methodId} onChange={(e) => setMethodId(e.target.value)} style={{ width: '100%', padding: '8px 12px', fontSize: 14, borderRadius: 8, border: '1px solid #ccc' }}>
            {SITE.reply.paymentMethods.map((m) => (
              <option key={m.id} value={m.id}>{m.label}</option>
            ))}
          </select>
        </div>

        <div style={{ marginBottom: 16 }}>
          <label style={{ display: 'block', fontWeight: 600, marginBottom: 6 }}>Payment details (wallet address, bank details, etc.)</label>
          <textarea
            value={detail}
            onChange={(e) => setDetail(e.target.value)}
            required
            rows={6}
            placeholder="Paste the wallet address, bank account details, or payment link here…"
            style={{ width: '100%', padding: '10px 12px', fontSize: 14, borderRadius: 8, border: '1px solid #ccc', fontFamily: 'monospace' }}
          />
        </div>

        {result ? (
          <p style={{ padding: '8px 12px', borderRadius: 8, marginBottom: 12, fontSize: 14, fontWeight: 600, background: result.type === 'success' ? '#d1fae5' : result.type === 'warn' ? '#fef3c7' : '#fee2e2', color: result.type === 'success' ? '#065f46' : result.type === 'warn' ? '#92400e' : '#991b1b' }}>
            {result.text}
          </p>
        ) : null}

        <button type="submit" disabled={sending} style={{ padding: '10px 24px', fontSize: 15, fontWeight: 700, borderRadius: 8, border: 'none', background: '#1d4ed8', color: '#fff', cursor: sending ? 'not-allowed' : 'pointer', opacity: sending ? 0.6 : 1 }}>
          {sending ? 'Sending…' : 'Send payment email'}
        </button>
      </form>

      <div style={{ marginTop: 32 }}>
        <h2 style={{ fontSize: '1.1rem', marginBottom: 8 }}>Order items</h2>
        {(order.items || []).map((item, i) => (
          <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', borderBottom: '1px solid #f0f0f0', fontSize: 14 }}>
            <span>{item.quantity} × {item.name}</span>
            <span>{item.price}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
