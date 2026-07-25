'use client'
import { useRef, useState } from 'react'

// Forms POST to our own Vercel route handler (/api/submit), which emails via
// Resend. Same-origin fetch with FormData — no Content-Type header (the browser
// sets the multipart boundary), Accept: application/json, preventDefault.
export default function WebForm({ subject, thankYou, children }) {
  const formRef = useRef(null)
  const [error, setError] = useState('')

  function onSubmit(e) {
    e.preventDefault()
    setError('')
    const form = formRef.current

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
