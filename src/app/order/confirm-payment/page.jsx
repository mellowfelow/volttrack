'use client'
import { Suspense, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { SITE } from '@/config/site'
import { UploadIcon, CheckIcon } from '@/components/admin/icons'

const MAX_BYTES = 4 * 1024 * 1024
const OK_TYPES = ['image/jpeg', 'image/png', 'image/webp', 'image/heic', 'image/heif']

function ConfirmPaymentForm() {
  const params = useSearchParams()
  const orderNumber = (params.get('id') || '').trim()

  const [file, setFile] = useState(null)
  const [note, setNote] = useState('')
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')
  const email = SITE.reply.channels.email

  function pick(e) {
    const f = e.target.files?.[0] || null
    setError('')
    if (f && f.type && !OK_TYPES.includes(f.type.toLowerCase())) { setFile(null); setError('Please choose a JPG, PNG, WebP or HEIC screenshot.'); return }
    if (f && f.size > MAX_BYTES) { setFile(null); setError('That image is over 4 MB — try a smaller screenshot.'); return }
    setFile(f)
  }

  async function submit(e) {
    e.preventDefault()
    if (!orderNumber) { setError('This link is missing your order number — please use the link from your email.'); return }
    if (!file) { setError('Choose a screenshot of your completed payment first.'); return }
    setSending(true)
    setError('')
    try {
      const form = new FormData()
      form.set('orderNumber', orderNumber)
      form.set('note', note)
      form.set('file', file)
      const res = await fetch('/api/order/confirm-payment/', { method: 'POST', body: form })
      const data = await res.json().catch(() => ({}))
      if (data.ok) setSent(true)
      else setError(data.error || 'Upload failed — please try again.')
    } catch {
      setError('Upload failed — check your connection and try again.')
    }
    setSending(false)
  }

  return (
    <div className="pay-shell">
      <div className="pay-card">
        <span className="pay-brand">{SITE.name}</span>
        <h1>Confirm your payment</h1>

        {sent ? (
          <div className="pay-success">
            <CheckIcon />
            <p>Thanks — we’ve received your confirmation.</p>
            <p className="sub">We’ll verify the payment and follow up by email shortly.</p>
          </div>
        ) : (
          <form onSubmit={submit} noValidate>
            {orderNumber ? <p className="pay-order" style={{ marginBottom: 18 }}>Order <strong>{orderNumber}</strong></p> : null}

            <div className="pay-field" style={{ position: 'relative' }}>
              <label htmlFor="screenshot">Payment screenshot</label>
              <input id="screenshot" className="pay-file-input" type="file" accept="image/jpeg,image/png,image/webp,image/heic,image/heif" onChange={pick} />
              <label htmlFor="screenshot" className="pay-drop" style={{ marginBottom: 0 }}>
                <UploadIcon />
                <span className="filename">{file ? file.name : 'Tap to choose a screenshot'}</span>
                <span className="hint">JPG, PNG, WebP or HEIC — up to 4 MB</span>
              </label>
            </div>

            <div className="pay-field">
              <label htmlFor="note">Note (optional)</label>
              <textarea id="note" value={note} onChange={(e) => setNote(e.target.value)} rows={3} maxLength={1000} placeholder="Anything we should know…" />
            </div>

            {error ? <p className="pay-error" role="alert">{error}</p> : null}

            <button type="submit" disabled={sending} className="pay-btn">
              {sending ? 'Uploading…' : 'Send payment confirmation'}
            </button>

            <p className="pay-note">Trouble uploading? Email the screenshot to <a href={`mailto:${email}`}>{email}</a>.</p>
          </form>
        )}
      </div>
    </div>
  )
}

export default function ConfirmPaymentPage() {
  return (
    <Suspense fallback={<div className="pay-shell" />}>
      <ConfirmPaymentForm />
    </Suspense>
  )
}
