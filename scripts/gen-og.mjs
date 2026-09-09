// Generates the branded social-share image and the publisher logo from SITE
// config. Run via `npm run og`. Outputs:
//   public/og/default.png    1200x630  — og:image / twitter:image fallback
//   public/images/logo.png    512x512  — Organization / Article publisher logo
import { mkdirSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import sharp from 'sharp'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const { SITE } = await import(pathToFileURL(resolve(root, 'src/config/site.js')).href)

const BRAND = SITE.color // #2563eb
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

const ogSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${BRAND}"/>
      <stop offset="1" stop-color="#1e3a8a"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#g)"/>
  <rect x="0" y="0" width="1200" height="10" fill="#60a5fa"/>
  <text x="80" y="300" font-family="Segoe UI, Helvetica, Arial, sans-serif" font-size="92" font-weight="800" fill="#ffffff">
    <tspan>⚡</tspan><tspan dx="14">${esc(SITE.name)}</tspan>
  </text>
  <text x="82" y="372" font-family="Segoe UI, Helvetica, Arial, sans-serif" font-size="40" font-weight="600" fill="#dbeafe">${esc(SITE.tagline)}</text>
  <text x="82" y="540" font-family="Segoe UI, Helvetica, Arial, sans-serif" font-size="30" font-weight="500" fill="#bfdbfe">Sur-Ron · Stark · Talaria · STACYC · KTM — authorized US dealer</text>
</svg>`

const logoSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
  <rect width="512" height="512" rx="72" fill="${BRAND}"/>
  <text x="256" y="330" text-anchor="middle" font-family="Segoe UI, Helvetica, Arial, sans-serif" font-size="300" font-weight="800" fill="#ffffff">V</text>
</svg>`

mkdirSync(resolve(root, 'public/og'), { recursive: true })
await sharp(Buffer.from(ogSvg)).png().toFile(resolve(root, 'public/og/default.png'))
console.log('  wrote public/og/default.png (1200x630)')
await sharp(Buffer.from(logoSvg)).png().toFile(resolve(root, 'public/images/logo.png'))
console.log('  wrote public/images/logo.png (512x512)')
