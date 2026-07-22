'use client'
import { useEffect, useRef, useState } from 'react'

// Fades/slides children in when they scroll into view. Respects reduced-motion.
// Failsafe: content is guaranteed visible even if the observer never fires
// (unsupported API, JS quirk) — it can never get stuck hidden.
export default function Reveal({ children, className = '', delay = 0 }) {
  const ref = useRef(null)
  const [seen, setSeen] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el || typeof IntersectionObserver === 'undefined') { setSeen(true); return }

    // Already in (or near) the viewport on mount → reveal immediately.
    const r = el.getBoundingClientRect()
    if (r.top < window.innerHeight * 0.9) { setSeen(true); return }

    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { setSeen(true); io.disconnect() } }),
      { threshold: 0.1, rootMargin: '0px 0px -8% 0px' },
    )
    io.observe(el)
    // Absolute failsafe: never let content stay hidden.
    const t = setTimeout(() => setSeen(true), 2500)
    return () => { io.disconnect(); clearTimeout(t) }
  }, [])
  return (
    <div ref={ref} className={`reveal${seen ? ' in' : ''} ${className}`} style={delay ? { transitionDelay: `${delay}ms` } : undefined}>
      {children}
    </div>
  )
}
