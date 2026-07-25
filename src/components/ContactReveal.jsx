'use client'
import { useState } from 'react'
import { SITE } from '@/config/site'

// Click-to-reveal contact. Shows "Email us" / "Call us"; on click the real
// address / number appears as a mailto:/tel: link. Keeps the address out of the
// server-rendered HTML (scrape protection) — it only enters the DOM on click.

export function RevealEmail({ className = '' }) {
  const [shown, setShown] = useState(false)
  if (shown) {
    return (
      <a className={className} href={`mailto:${SITE.email}`}>
        <span aria-hidden="true">✉️</span> {SITE.email}
      </a>
    )
  }
  return (
    <button type="button" className={className} onClick={() => setShown(true)} aria-label="Show email address">
      <span aria-hidden="true">✉️</span> Email us
    </button>
  )
}

export function RevealPhone({ className = '' }) {
  const [shown, setShown] = useState(false)
  if (shown) {
    return (
      <a className={className} href={`tel:${SITE.phone}`}>
        <span aria-hidden="true">📞</span> {SITE.phoneDisplay}
      </a>
    )
  }
  return (
    <button type="button" className={className} onClick={() => setShown(true)} aria-label="Show phone number">
      <span aria-hidden="true">📞</span> Call us
    </button>
  )
}
