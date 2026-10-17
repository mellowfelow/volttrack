'use client'
import { Suspense, useEffect, useState } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useAdminContextPasscode } from '@/components/admin/AdminPasscodeContext'
import { ArrowLeftIcon, CheckIcon } from '@/components/admin/icons'

function ReplyForm() {
  const passcode = useAdminContextPasscode()
  const searchParams = useSearchParams()
  const enquiryId = searchParams.get('id') || ''

  const [enquiry, setEnquiry] = useState(null)
  const [loading, setLoading] = useState(true)
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [sending, setSending] = useState(false)
  const [result, setResult] = useState(null)

  useEffect(() => {
    if (!passcode || !enquiryId) { setLoading(false); return }
    fetch(`/api/admin/enquiries/${encodeURIComponent(enquiryId)}`, { headers: { 'X-Admin-Passcode': passcode } })
      .then((r) => r.json())
      .then((d) => setEnquiry(d.enquiry || null))
      .catch(() => {})
      .finally(() => setLoading(false))
  }, [passcode, enquiryId])

  async function handleSend(e) {
    e.preventDefault()
    if (!enquiry.email) {
      setResult({ type: 'error', text: 'This enquiry has no email address to reply to.' })
      return
    }
    if (!window.confirm(`Send this reply to ${enquiry.email}?`)) return
    setSending(true)
    setResult(null)
    try {
      const res = await fetch('/api/admin/reply-enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'X-Admin-Passcode': passcode },
        body: JSON.stringify({ enquiryId, subject, message }),
      })
      const data = await res.json().catch(() => ({}))
      if (data.ok && data.sent) {
        setResult({ type: 'sent' })
        setEnquiry((en) => ({ ...en, status: 'replied' }))
      } else if (data.ok) {
        setResult({ type: 'warn', text: `Reply NOT sent — ${data.reason === 'not-configured' ? 'email (SMTP) is not configured on the server' : 'the mail server rejected the send'}.` })
      } else {
        setResult({ type: 'error', text: data.error || 'Failed to send.' })
      }
    } catch {
      setResult({ type: 'error', text: 'Network error — check your connection and try again.' })
    }
    setSending(false)
  }

  if (loading) return <p style={{ padding: 24, color: '#888' }}>Loading enquiry…</p>
  if (!enquiry) return (
    <div className="empty-state">
      <p>{enquiryId ? 'Enquiry not found.' : 'Open this page from an enquiry.'}</p>
      <Link href="/admin/enquiries/" className="btn-sm" style={{ marginTop: 12, display: 'inline-block' }}>Back to enquiries</Link>
    </div>
  )

  return (
    <div style={{ maxWidth: 680 }}>
      <Link href={`/admin/enquiries/${encodeURIComponent(enquiry.id)}/`} className="back-link"><ArrowLeftIcon /> Back to enquiry</Link>

      <div className="detail-header">
        <h1>Reply to enquiry</h1>
        <p className="detail-meta">{enquiry.name}{enquiry.email ? ` (${enquiry.email})` : ''} — {enquiry.type}</p>
      </div>

      <div className="detail-card">{enquiry.message}</div>

      {result?.type === 'sent' ? (
        <div className="success-box">
          <CheckIcon />
          <p>Reply sent to {enquiry.email}.</p>
        </div>
      ) : null}

      <form onSubmit={handleSend}>
        <div className="form-group">
          <label className="form-label" htmlFor="subject">Subject (optional)</label>
          <input id="subject" value={subject} onChange={(e) => setSubject(e.target.value)} placeholder="Re: Your enquiry" className="form-input" />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="message">Reply message</label>
          <textarea id="message" value={message} onChange={(e) => { setMessage(e.target.value); setResult(null) }} required rows={8} placeholder="Type your reply…" className="form-textarea" />
        </div>

        {result?.type === 'warn' ? <div className="alert alert-warning">{result.text}</div> : null}
        {result?.type === 'error' ? <div className="alert alert-error">{result.text}</div> : null}

        <button type="submit" disabled={sending || !message.trim()} className="btn-primary">
          {sending ? 'Sending…' : enquiry.status === 'replied' || result?.type === 'sent' ? 'Send another reply' : 'Send reply'}
        </button>
      </form>
    </div>
  )
}

export default function ReplyEnquiryPage() {
  return (
    <Suspense fallback={<p style={{ padding: 24, color: '#888' }}>Loading…</p>}>
      <ReplyForm />
    </Suspense>
  )
}
