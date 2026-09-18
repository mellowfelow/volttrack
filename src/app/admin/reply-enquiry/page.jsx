'use client'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { useAdminPasscode } from '@/lib/useAdminPasscode'

export default function ReplyEnquiryPage() {
  const { passcode } = useAdminPasscode()
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
      .then((d) => { setEnquiry(d.enquiry || null); setLoading(false) })
      .catch(() => setLoading(false))
  }, [passcode, enquiryId])

  async function handleSend(e) {
    e.preventDefault()
    setSending(true)
    setResult(null)
    try {
      const res = await fetch('/api/admin/reply-enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'X-Admin-Passcode': passcode },
        body: JSON.stringify({ enquiryId, subject, message }),
      })
      const data = await res.json()
      if (data.ok && data.sent) setResult({ type: 'success', text: 'Reply sent.' })
      else if (data.ok) setResult({ type: 'warn', text: `Saved but email not sent: ${data.reason || 'SMTP not configured'}` })
      else setResult({ type: 'error', text: data.error || 'Failed' })
    } catch {
      setResult({ type: 'error', text: 'Network error — try again' })
    }
    setSending(false)
  }

  if (loading) return <p>Loading…</p>
  if (!enquiry) return <p>Enquiry not found. <a href="/admin/enquiries/">Back to enquiries</a></p>

  return (
    <div style={{ maxWidth: 640 }}>
      <h1 style={{ fontSize: '1.4rem', marginBottom: 4 }}>Reply to enquiry</h1>
      <p style={{ color: '#888', marginBottom: 16 }}>{enquiry.name} ({enquiry.email}) — {enquiry.type}</p>

      <div style={{ padding: 16, background: '#f9f9f9', borderRadius: 8, marginBottom: 24, fontSize: 14, whiteSpace: 'pre-wrap' }}>
        {enquiry.message}
      </div>

      <form onSubmit={handleSend}>
        <div style={{ marginBottom: 16 }}>
          <label style={{ display: 'block', fontWeight: 600, marginBottom: 6 }}>Subject (optional)</label>
          <input
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Re: Your enquiry"
            style={{ width: '100%', padding: '8px 12px', fontSize: 14, borderRadius: 8, border: '1px solid #ccc' }}
          />
        </div>

        <div style={{ marginBottom: 16 }}>
          <label style={{ display: 'block', fontWeight: 600, marginBottom: 6 }}>Reply message</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            rows={8}
            placeholder="Type your reply…"
            style={{ width: '100%', padding: '10px 12px', fontSize: 14, borderRadius: 8, border: '1px solid #ccc' }}
          />
        </div>

        {result ? (
          <p style={{ padding: '8px 12px', borderRadius: 8, marginBottom: 12, fontSize: 14, fontWeight: 600, background: result.type === 'success' ? '#d1fae5' : result.type === 'warn' ? '#fef3c7' : '#fee2e2', color: result.type === 'success' ? '#065f46' : result.type === 'warn' ? '#92400e' : '#991b1b' }}>
            {result.text}
          </p>
        ) : null}

        <button type="submit" disabled={sending} style={{ padding: '10px 24px', fontSize: 15, fontWeight: 700, borderRadius: 8, border: 'none', background: '#1d4ed8', color: '#fff', cursor: sending ? 'not-allowed' : 'pointer', opacity: sending ? 0.6 : 1 }}>
          {sending ? 'Sending…' : 'Send reply'}
        </button>
      </form>
    </div>
  )
}
