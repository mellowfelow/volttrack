'use client'
import { useRef, useState } from 'react'
import { copyText } from '@/lib/clipboard'
import { waMessageText } from '@/lib/whatsapp'
import { ChatIcon, CopyIcon, CheckIcon } from '@/components/admin/icons'

// Admin → customer WhatsApp reply: opens WhatsApp with the message pre-filled,
// plus a copy fallback for when the wa.me link can't open an app.
export default function WhatsAppSendPanel({ phone, link, messageLines }) {
  const [copied, setCopied] = useState(false)
  const timer = useRef(null)

  async function copyMessage() {
    const ok = await copyText(waMessageText(messageLines))
    setCopied(ok)
    clearTimeout(timer.current)
    timer.current = setTimeout(() => setCopied(false), 2000)
  }

  const copyButton = (
    <button type="button" onClick={copyMessage} className="btn-sm btn-icon">
      {copied ? <CheckIcon /> : <CopyIcon />} {copied ? 'Copied' : 'Copy message'}
    </button>
  )

  return (
    <div className="wa-panel">
      <div className="wa-panel-title"><ChatIcon /> WhatsApp reply{phone ? ` — ${phone}` : ''}</div>
      {link ? (
        <>
          <p className="wa-panel-sub">Opens WhatsApp with the message pre-filled — just press Send.</p>
          <div className="wa-panel-actions">
            <a href={link} target="_blank" rel="noopener noreferrer" className="btn-primary">Open in WhatsApp</a>
            {copyButton}
          </div>
        </>
      ) : (
        <>
          <p className="wa-panel-sub">No customer phone number on this order, so a WhatsApp link can&apos;t be built. You can still copy the message.</p>
          <div className="wa-panel-actions">{copyButton}</div>
        </>
      )}
    </div>
  )
}
