'use client'
import { useRef, useState } from 'react'
import { FORMS } from '@/config/site'

// provider: 'web3forms' — fetch straight to api.web3forms.com. FormData body
// (no Content-Type header — the browser sets the multipart boundary), Accept:
// application/json only, no `action`, no `redirect` field: this exact shape is
// what keeps the request a CORS-simple request (no preflight).
// provider: 'resend' — same shape, but same-origin to our own /api/submit
// route handler, which emails via the Resend API.
export default function WebForm({ subject, thankYou, children }) {
  const formRef = useRef(null)
  const [error, setError] = useState('')
  const keyPending = !FORMS.web3formsKey || FORMS.web3formsKey.startsWith('YOUR-')

  function onSubmit(e) {
    e.preventDefault()
    setError('')
    const form = formRef.current

    if (FORMS.provider === 'web3forms') {
      if (keyPending) { window.location.href = thankYou; return }
      fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form),
      })
        .then((r) => r.json().then((d) => ({ status: r.status, data: d })))
        .then((res) => {
          if (res.status === 200 && res.data.success) window.location.href = thankYou
          else throw new Error((res.data && res.data.message) || 'Submission failed')
        })
        .catch(() => {
          setError(
            'Sorry — something went wrong sending your message. Please email us or use the chat button and try again in a moment.',
          )
        })
      return
    }

    fetch('/api/submit', {
      method: 'POST',
      headers: { Accept: 'application/json' },
      body: new FormData(form),
    })
      .then((r) => r.json().then((d) => ({ status: r.status, data: d })))
      .then((res) => {
        if (res.status === 200 && res.data.ok) {
          window.location.href = thankYou
        } else {
          throw new Error((res.data && res.data.error) || 'Submission failed')
        }
      })
      .catch(() => {
        setError(
          'Sorry — something went wrong sending your message. Please email us or use the chat button and try again in a moment.',
        )
      })
  }

  function syncReplyto(e) {
    const rt = formRef.current.querySelector('input[name="replyto"]')
    if (rt) rt.value = e.target.value
  }

  return (
    <form ref={formRef} onSubmit={onSubmit}>
      {FORMS.provider === 'web3forms' ? <input type="hidden" name="access_key" value={FORMS.web3formsKey} /> : null}
      <input type="hidden" name="subject" value={subject} />
      <input type="hidden" name="from_name" value="VoltTrack Website" />
      <input type="hidden" name="replyto" value="" />
      <input type="checkbox" name="botcheck" className="hp" tabIndex={-1} autoComplete="off" />
      <div onChange={(e) => e.target.type === 'email' && syncReplyto(e)}>{children}</div>
      {error ? <p style={{ color: '#b91c1c', fontWeight: 600 }}>{error}</p> : null}
      <button type="submit" className="btn">Send</button>
    </form>
  )
}
