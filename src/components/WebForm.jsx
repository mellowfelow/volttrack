'use client'
import { useRef, useState } from 'react'
import { FORMS } from '@/config/site'

// A provider-pluggable form. Web3Forms uses the exact CORS method:
// fetch + body:new FormData(form) + header Accept only. No Content-Type, no action.
export default function WebForm({ subject, thankYou, children }) {
  const formRef = useRef(null)
  const [error, setError] = useState('')
  const keyPending = !FORMS.web3formsKey || FORMS.web3formsKey.startsWith('YOUR-')

  function onSubmit(e) {
    e.preventDefault()
    setError('')
    const form = formRef.current

    // Key-pending fallback: never dead-end an order pre-launch.
    if (FORMS.provider === 'web3forms' && keyPending) {
      window.location.href = thankYou
      return
    }

    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { Accept: 'application/json' },
      body: new FormData(form),
    })
      .then((r) => r.json().then((d) => ({ status: r.status, data: d })))
      .then((res) => {
        if (res.status === 200 && res.data.success) {
          window.location.href = thankYou
        } else {
          throw new Error((res.data && res.data.message) || 'Submission failed')
        }
      })
      .catch(() => {
        setError(
          'Sorry — something went wrong sending your message. Please use the chat button or try again in a moment.',
        )
      })
  }

  function syncReplyto(e) {
    const rt = formRef.current.querySelector('input[name="replyto"]')
    if (rt) rt.value = e.target.value
  }

  return (
    <form ref={formRef} onSubmit={onSubmit}>
      <input type="hidden" name="access_key" value={FORMS.web3formsKey} />
      <input type="hidden" name="subject" value={subject} />
      <input type="hidden" name="from_name" value="VoltTrack Website" />
      <input type="hidden" name="replyto" value="" />
      <input type="checkbox" name="botcheck" className="hp" tabIndex={-1} autoComplete="off" />
      <div onChange={(e) => e.target.type === 'email' && syncReplyto(e)}>{children}</div>
      {error ? <p style={{ color: '#b91c1c', fontWeight: 600 }}>{error}</p> : null}
      <button type="submit" className="btn">Send</button>
      {keyPending ? (
        <p className="form-note" style={{ marginTop: 10 }}>
          Note: form delivery activates once the Web3Forms key is set.
        </p>
      ) : null}
    </form>
  )
}
