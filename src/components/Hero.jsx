import Link from 'next/link'
import { HERO } from '@/config/site'

// Single, static hero (no carousel): full-bleed background photo + contrast scrim,
// one <h1>, condensed entity statement, two CTAs. CLS-safe (fixed min-height).
export default function Hero() {
  const s = HERO[0]
  const bg = s.image
    ? `linear-gradient(105deg, rgba(9,14,26,.82) 0%, rgba(9,14,26,.62) 45%, rgba(9,14,26,.30) 100%), url(/images/${s.image})`
    : undefined
  return (
    <section className={`hero${s.image ? ' hero--image' : ''}`} style={s.image ? { backgroundImage: bg } : undefined}>
      <div className="container hero-inner">
        <span className="eyebrow">{s.eyebrow}</span>
        <h1>{s.heading}</h1>
        <p className="lead">{s.sub}</p>
        <div className="hero-cta">
          <Link href={s.ctaHref} className="btn btn-lg">{s.ctaText}</Link>
          {s.cta2Text ? <Link href={s.cta2Href} className="btn btn-ghost btn-lg btn-ghost--onDark">{s.cta2Text}</Link> : null}
        </div>
      </div>
    </section>
  )
}
