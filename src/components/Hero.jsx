import Link from 'next/link'
import { HERO } from '@/config/site'

// Single, static hero (no carousel): full-bleed background photo + contrast scrim,
// one <h1>, condensed entity statement, two CTAs. CLS-safe (fixed min-height).
export default function Hero() {
  const s = HERO[0]
  // Expose AVIF + WebP URLs as custom props; globals.css builds an image-set()
  // background with a WebP fallback (AVIF → WebP → hard fallback).
  const style = s.image
    ? {
        '--hero-webp': `url(/images/${s.image})`,
        '--hero-avif': `url(/images/${s.image.replace(/\.webp$/, '.avif')})`,
      }
    : undefined
  return (
    <section className={`hero${s.image ? ' hero--image' : ''}`} style={style}>
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
