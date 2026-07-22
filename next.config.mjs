const isStatic = process.env.TARGET === 'static'

/** @type {import('next').NextConfig} */
export default {
  output: isStatic ? 'export' : undefined,
  trailingSlash: true,
  images: { unoptimized: true },
}
