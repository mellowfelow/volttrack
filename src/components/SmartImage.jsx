import Image from 'next/image'

// Responsive image wrapper.
//  - Vercel: next/image serves AVIF + WebP at device-appropriate widths from a
//    responsive srcset (the `sizes` prop tells it the rendered width per
//    breakpoint — always pass a realistic one for anything below full-bleed).
//  - Static export (next.config sets images.unoptimized): next/image emits a
//    plain <img> with the original file; the AVIF sibling from scripts/images.mjs
//    is still on disk for a future <picture> pass if Cloudflare becomes the target.
//  - Non-raster sources (the shared SVG placeholder) bypass next/image.
// width/height are always set so the layout box is reserved (CLS = 0).
export default function SmartImage({
  src,
  alt,
  width,
  height,
  loading = 'lazy',
  className,
  sizes = '100vw',
}) {
  const isRaster = typeof src === 'string' && /\.(webp|avif|jpe?g|png)$/i.test(src)
  if (!isRaster) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={src} alt={alt} width={width} height={height} loading={loading} className={className} decoding="async" />
  }
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      sizes={sizes}
      className={className}
      priority={loading === 'eager'}
      loading={loading === 'eager' ? undefined : 'lazy'}
    />
  )
}
