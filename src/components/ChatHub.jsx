'use client'
import { useState, useEffect } from 'react'
import { CHAT, SITE } from '@/config/site'

const LINK_META = {
  whatsapp: { label: 'WhatsApp', icon: '💬', href: (v) => `https://wa.me/${v}` },
  telegram: { label: 'Telegram', icon: '✈️', href: (v) => `https://t.me/${v}` },
  email: { label: 'Email us', icon: '✉️', href: (v) => `mailto:${v}` },
  phone: { label: 'Call us', icon: '📞', href: (v) => `tel:${v}` },
}

export default function ChatHub() {
  const [open, setOpen] = useState(false)
  // Email addresses must never appear as plaintext in the static HTML (scrape
  // protection + CLAUDE.md rule). The mailto: href is assembled only after mount,
  // so the server-rendered markup carries a harmless placeholder instead.
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  const hrefFor = (c) => (c.type === 'email' && !mounted ? '#' : LINK_META[c.type].href(c.value))
  const links = CHAT.channels.filter((c) => LINK_META[c.type])
  const widget = CHAT.channels.find((c) => ['tawk', 'crisp', 'jivochat'].includes(c.type))

  // Load the widget script deferred, after first interaction or 3s idle.
  useEffect(() => {
    if (!widget || widget.type !== 'tawk') return
    if (widget.value.includes('PROPERTY_ID')) return // pending — do not inject placeholder
    let loaded = false
    const load = () => {
      if (loaded) return
      loaded = true
      const s = document.createElement('script')
      s.async = true
      s.src = `https://embed.tawk.to/${widget.value}`
      s.charset = 'UTF-8'
      s.setAttribute('crossorigin', '*')
      document.body.appendChild(s)
    }
    const t = setTimeout(load, 3000)
    window.addEventListener('scroll', load, { once: true, passive: true })
    window.addEventListener('click', load, { once: true })
    return () => clearTimeout(t)
  }, [widget])

  if (!links.length) return null

  // Single link channel, no expander needed
  if (links.length === 1) {
    const c = links[0]
    const m = LINK_META[c.type]
    return (
      <div className="chat-hub">
        <a className="chat-toggle" href={hrefFor(c)} aria-label={m.label} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {m.icon}
        </a>
      </div>
    )
  }

  return (
    <div className="chat-hub">
      <div className={`chat-panel${open ? ' open' : ''}`}>
        {links.map((c) => {
          const m = LINK_META[c.type]
          return (
            <a key={c.type} href={hrefFor(c)} aria-label={m.label}>
              <span aria-hidden="true">{m.icon}</span> {m.label}
            </a>
          )
        })}
        <span className="form-note" style={{ display: 'block', padding: '6px 10px' }}>
          Support {SITE.supportHours}
        </span>
      </div>
      <button
        className="chat-toggle"
        aria-label="Open chat options"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        {open ? '✕' : '💬'}
      </button>
    </div>
  )
}
