import { DISCONTINUED } from './src/config/site.js'

const isStatic = process.env.TARGET === 'static'

/** @type {import('next').NextConfig} */
export default {
  output: isStatic ? 'export' : undefined,
  trailingSlash: true,
  // Vercel: optimise + serve AVIF/WebP at responsive widths (SmartImage → next/image).
  // Static export: the optimiser can't run, so serve the pre-optimised files as-is.
  images: isStatic ? { unoptimized: true } : { formats: ['image/avif', 'image/webp'] },
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
