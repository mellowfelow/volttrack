// AVIF → WebP <picture> wrapper (v9.1 performance: AVIF+WebP for every raster).
// SVGs and non-webp sources pass through as a plain <img>. width/height always
// set so image CLS contribution is 0.
export default function SmartImage({ src, alt, width, height, loading = 'lazy', className, sizes }) {
  const isWebp = typeof src === 'string' && src.endsWith('.webp')
  const common = { alt, width, height, loading, className, decoding: 'async' }
  if (!isWebp) {
    return <img src={src} {...common} />
  }
  const avif = src.replace(/\.webp$/, '.avif')
  return (
    <picture>
      <source srcSet={avif} type="image/avif" sizes={sizes} />
      <source srcSet={src} type="image/webp" sizes={sizes} />
      <img src={src} {...common} />
    </picture>
  )
}
