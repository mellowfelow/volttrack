// Responsive <picture>: AVIF → WebP, each with a width-based srcset built from
// the two sizes scripts/images.mjs emits — <slug>-sm.* (800w) and <slug>.* (1600w).
// Vercel Image Optimization isn't on this plan (/_next/image → 402), so we serve
// the pre-built files directly. width/height are always set (CLS = 0).
// `sizes` tells the browser the rendered width per breakpoint — always pass a
// realistic value for anything narrower than full-bleed.
export default function SmartImage({
  src,
  alt,
  width,
  height,
  loading = 'lazy',
  className,
  sizes = '100vw',
}) {
  const m = typeof src === 'string' && src.match(/^(.*)\.(webp|avif|jpe?g|png)$/i)
  const common = {
    alt,
    width,
    height,
    loading,
    className,
    decoding: 'async',
    ...(loading === 'eager' ? { fetchPriority: 'high' } : {}),
  }
  if (!m) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={src} {...common} />
  }
  const [, base] = m
  const set = (ext) => `${base}-sm.${ext} 800w, ${base}.${ext} 1600w`
  return (
    <picture>
      <source type="image/avif" srcSet={set('avif')} sizes={sizes} />
      <source type="image/webp" srcSet={set('webp')} sizes={sizes} />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`${base}.webp`} {...common} />
    </picture>
  )
}
