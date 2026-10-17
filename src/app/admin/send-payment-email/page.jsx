'use client'
import { Suspense, useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { SITE } from '@/config/site'
import { useAdminContextPasscode } from '@/components/admin/AdminPasscodeContext'
import WhatsAppSendPanel from '@/components/admin/WhatsAppSendPanel'
import { OrderStatusBadge } from '@/components/admin/StatusBadge'
import { ArrowLeftIcon, CheckIcon } from '@/components/admin/icons'
import { money, paymentMethodParts, paymentTermsLines, parsePaymentDetail } from '@/lib/order'
import { waPaymentDetailsLink, waPaymentDetailsMessage } from '@/lib/whatsapp'

const METHODS = SITE.reply.paymentMethods

function matchMethod(value) {
  const v = String(value || '').trim().toLowerCase()
  if (!v) return null
  return METHODS.find((m) => m.id === v || m.label.toLowerCase() === v) || null
}

function fieldsToText(fields) {
  return (fields || []).map((f) => `${f.label}: ${f.value}`).join('\n')
}

function Composer() {
  const passcode = useAdminContextPasscode()
  const searchParams = useSearchParams()
  const orderId = searchParams.get('id') || ''

  const [order, setOrder] = useState(null)
  const [loading, setLoading] = useState(true)
  const [methodId, setMethodId] = useState(METHODS[0]?.id || '')
  const [detail, setDetail] = useState('')
  const [sending, setSending] = useState(false)
  const [result, setResult] = useState(null)

  useEffect(() => {
    if (!passcode || !orderId) { setLoading(false); return }
    let cancelled = false
    fetch(`/api/admin/orders/${encodeURIComponent(orderId)}`, { headers: { 'X-Admin-Passcode': passcode } })
      .then((r) => r.json())
      .then((d) => {
        if (cancelled) return
        const o = d.order || null
        setOrder(o)
        if (o) {
          const saved = o.paymentDetails
          const m = matchMethod(saved?.methodId) || matchMethod(o.paymentMethod)
          if (m) setMethodId(m.id)
          if (saved?.fields?.length) setDetail(fieldsToText(saved.fields))
        }
      })
      .catch(() => {})
      .finally(() => { if (!cancelled) setLoading(false) })
    return () => { cancelled = true }
  }, [passcode, orderId])

  const fields = useMemo(() => parsePaymentDetail(detail), [detail])
  const hasUnlabelled = fields.some((f) => /^(Detail \d+|Payment details)$/.test(f.label)) && fields.length > 0

  if (loading) return <p style={{ padding: 24, color: '#888' }}>Loading order…</p>
  if (!order) {
    return (
      <div className="empty-state">
        <p>{orderId ? `Order ${orderId} not found.` : 'Open this page from an order.'}</p>
        <Link href="/admin/orders/" className="btn-sm" style={{ marginTop: 12, display: 'inline-block' }}>Back to orders</Link>
      </div>
    )
  }

  const { opening, closing } = paymentMethodParts(methodId, order.amountDue, order.orderNumber)
  const customerPageHref = `/order/payment-details/?id=${encodeURIComponent(order.orderNumber)}`
  const waArgs = { orderNumber: order.orderNumber, amountDue: order.amountDue, methodId, fields }
  const waLink = order.customerPhone && fields.length ? waPaymentDetailsLink(order.customerPhone, waArgs) : ''

  async function handleSend(e) {
    e.preventDefault()
    if (fields.length === 0) {
      setResult({ type: 'error', text: 'Paste the payment details first — the preview is empty.' })
      return
    }
    if (!order.customerEmail) {
      setResult({ type: 'error', text: 'This order has no customer email — use the WhatsApp reply below.' })
      return
    }
    if (!window.confirm(`Send these payment details to ${order.customerEmail}?`)) return
    setSending(true)
    setResult(null)
    try {
      const res = await fetch('/api/admin/send-payment-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'X-Admin-Passcode': passcode },
        body: JSON.stringify({ orderId: order.orderNumber, methodId, detail }),
      })
      const data = await res.json().catch(() => ({}))
      if (data.ok && data.sent) {
        setResult({ type: 'sent' })
        setOrder((o) => ({ ...o, status: o.status === 'payment-confirmed' ? o.status : 'payment-sent' }))
      } else if (data.ok) {
        const why = data.reason === 'not-configured'
          ? 'email (SMTP) is not configured on the server'
          : 'the mail server rejected the send'
        setResult({ type: 'warn', text: `Details saved, but the email was NOT sent — ${why}. Share the WhatsApp message below instead.` })
      } else {
        setResult({ type: 'error', text: data.error || (res.status === 401 ? 'Session expired — sign out and back in.' : 'Failed to send.') })
      }
    } catch {
      setResult({ type: 'error', text: 'Network error — check your connection and try again.' })
    }
    setSending(false)
  }

  return (
    <div style={{ maxWidth: 680 }}>
      <Link href={`/admin/orders/${encodeURIComponent(order.orderNumber)}/`} className="back-link"><ArrowLeftIcon /> Back to order</Link>

      <div className="detail-header">
        <h1>Send payment details</h1>
        <p className="detail-meta">
          <strong>{order.orderNumber}</strong> · {order.customerName}
          {order.customerEmail ? ` · ${order.customerEmail}` : ''} · <strong>{money(order.amountDue)}</strong>{' '}
          <OrderStatusBadge status={order.status} />
        </p>
      </div>

      {result?.type === 'sent' ? (
        <div className="success-box">
          <CheckIcon />
          <p>Payment details sent to {order.customerEmail}.</p>
          <p className="sub">Each field is also a tap-to-copy button on the customer’s page.</p>
          <p style={{ marginTop: 12 }}>
            <a href={customerPageHref} target="_blank" rel="noopener noreferrer" className="btn-sm">Open customer copy page ↗</a>
          </p>
        </div>
      ) : null}

      <form onSubmit={handleSend}>
        <div className="form-group">
          <label className="form-label" htmlFor="method">Payment method</label>
          <select id="method" value={methodId} onChange={(e) => setMethodId(e.target.value)} className="form-select">
            {METHODS.map((m) => <option key={m.id} value={m.id}>{m.label}</option>)}
          </select>
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="detail">Payment details</label>
          <textarea
            id="detail"
            value={detail}
            onChange={(e) => { setDetail(e.target.value); setResult(null) }}
            rows={7}
            autoCapitalize="off"
            autoComplete="off"
            spellCheck={false}
            placeholder={`Paste the details exactly as you have them — one block, any format. For example:\nAccount number: 12345678\nRouting number: 021000021\nSWIFT code: CHASUS33\nReference: ${order.orderNumber}`}
            className="form-textarea mono"
          />
          <p className="hint">
            Paste it any way you like — even as one long line. It’s split into labelled fields automatically (see the preview below). Wallet address, Zelle email, Cash App tag or a payment link also work.
          </p>
        </div>

        <div className="email-preview" aria-live="polite">
          <div className="email-preview-label">Preview — what the customer sees</div>
          {opening ? <p>{opening}</p> : null}
          {fields.length === 0 ? (
            <p className="preview-empty">Paste the payment details above to see the preview.</p>
          ) : (
            <dl className="pay-preview" style={{ margin: '4px 0 12px' }}>
              {fields.map((f, i) => (
                <div key={`${f.label}-${i}`} className="pay-preview-row">
                  <dt>{f.label}</dt>
                  <dd>{f.value}</dd>
                </div>
              ))}
            </dl>
          )}
          {closing ? <p>{closing}</p> : null}
          <ul className="preview-terms">
            {paymentTermsLines(order.orderNumber, methodId).map((l, i) => <li key={i}>{l}</li>)}
          </ul>
        </div>

        {fields.length > 0 ? (
          <p className="hint" style={{ margin: '-8px 0 16px' }}>
            {fields.length} field{fields.length === 1 ? '' : 's'} detected.
            {hasUnlabelled ? ' Some lines have no label — put “Label: value” on each line if you want them named.' : ''}
          </p>
        ) : null}

        {result?.type === 'warn' ? <div className="alert alert-warning">{result.text}</div> : null}
        {result?.type === 'error' ? <div className="alert alert-error">{result.text}</div> : null}

        <button type="submit" disabled={sending || fields.length === 0} className="btn-primary btn-block">
          {sending ? 'Sending…' : order.status === 'payment-sent' || result?.type === 'sent' ? 'Resend payment email' : 'Send payment email'}
        </button>
      </form>

      <div style={{ marginTop: 28 }}>
        <WhatsAppSendPanel
          phone={order.customerPhone}
          link={waLink}
          messageLines={waPaymentDetailsMessage(waArgs)}
        />
      </div>

      <div className="item-list" style={{ marginTop: 28 }}>
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

export default function SendPaymentEmailPage() {
  return (
    <Suspense fallback={<p style={{ padding: 24, color: '#888' }}>Loading…</p>}>
      <Composer />
    </Suspense>
  )
}
