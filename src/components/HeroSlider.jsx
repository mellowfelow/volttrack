'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { HERO } from '@/config/site'

export default function HeroSlider() {
  const [i, setI] = useState(0)
  const [paused, setPaused] = useState(false)
  const n = HERO.length

  useEffect(() => {
    if (paused || n <= 1) return
    const t = setInterval(() => setI((x) => (x + 1) % n), 6000)
    return () => clearInterval(t)
  }, [paused, n])

  return (
    <section
      className="hero-slider"
      aria-roledescription="carousel"
      aria-label="Featured"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {HERO.map((s, idx) => {
        const active = idx === i
        const bg = s.image
          ? `linear-gradient(90deg, rgba(15,23,42,.72), rgba(15,23,42,.35)), url(/images/${s.image})`
          : undefined
        return (
          <div
            key={idx}
            className={`hero-slide${active ? ' active' : ''}${s.image ? ' has-image' : ''}`}
            style={s.image ? { backgroundImage: bg } : undefined}
            aria-hidden={!active}
            {...(!active ? { inert: '' } : {})}
          >
            <div className="container">
              <span className="eyebrow">{s.eyebrow}</span>
              {idx === 0 ? <h1>{s.heading}</h1> : <p className="hero-heading">{s.heading}</p>}
              <p className="lead">{s.sub}</p>
              <div className="hero-cta">
                <Link href={s.ctaHref} className="btn">{s.ctaText}</Link>
                {s.cta2Text ? <Link href={s.cta2Href} className="btn btn-ghost">{s.cta2Text}</Link> : null}
              </div>
            </div>
          </div>
        )
      })}

      <div className="hero-dots" role="tablist" aria-label="Choose slide">
        {HERO.map((_, idx) => (
          <button
            key={idx}
            className={`hero-dot${idx === i ? ' active' : ''}`}
            aria-label={`Go to slide ${idx + 1}`}
            aria-selected={idx === i}
            role="tab"
            onClick={() => setI(idx)}
          />
        ))}
      </div>
    </section>
  )
}
