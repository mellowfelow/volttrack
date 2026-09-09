'use client'
import { useState } from 'react'
import { SITE } from '@/config/site'

// Email stays click-to-reveal (spam-harvest protection — it only enters the DOM
// on click). The phone number is rendered directly as a crawlable tel: link: it
// is a local-SEO / agent signal, is already in the Organization JSON-LD, and is
// not a meaningful spam target.

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
  return (
    <a className={className} href={`tel:${SITE.phone}`}>
      <span aria-hidden="true">📞</span> {SITE.phoneDisplay}
    </a>
  )
}
