import { DISCONTINUED } from './src/config/site.js'

const isStatic = process.env.TARGET === 'static'

/** @type {import('next').NextConfig} */
export default {
  output: isStatic ? 'export' : undefined,
  trailingSlash: true,
  // Vercel Image Optimization is a paid add-on this project doesn't have
  // (/_next/image returns 402 OPTIMIZED_IMAGE_REQUEST_PAYMENT_REQUIRED), so we
  // never route through next/image's optimiser. SmartImage serves the
  // pre-built AVIF/WebP files from scripts/images.mjs directly via <picture>,
  // with a width-based srcset from the -sm / -md size variants.
  images: { unoptimized: true },
  // 301s for discontinued models → their successor. Driven by DISCONTINUED in
  // src/config/site.js; never hand-maintain this list. Not applied on the static
  // export target, which serves the landing page at the same URL instead.
  async redirects() {
    // Both forms are emitted because trailingSlash normalisation and redirect
    // matching can run in either order depending on how the request arrives.
    return DISCONTINUED.flatMap((d) => [
      { source: `/product/${d.slug}`, destination: `/product/${d.successor}/`, permanent: true },
      { source: `/product/${d.slug}/`, destination: `/product/${d.successor}/`, permanent: true },
    ])
  },
}
