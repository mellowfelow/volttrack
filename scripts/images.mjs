// Image pipeline (v9.1): normalise client photos and emit BOTH AVIF and WebP.
// Each photo in assets/product-photos/ is contain-fit onto a white 4:3 1600×1200
// canvas (product ~96% of frame), then written as <slug>.webp (q86) + <slug>.avif
// (q58) to public/images/. Missing photos → shared SVG placeholder (no-op).
import sharp from 'sharp'
import { readdirSync, existsSync, mkdirSync, statSync } from 'node:fs'
import { resolve, dirname, basename, extname } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const srcDir = resolve(root, 'assets/product-photos')
const outDir = resolve(root, 'public/images')

const photos = existsSync(srcDir)
  ? readdirSync(srcDir).filter((f) => /\.(jpe?g|png|webp|tiff?)$/i.test(f))
  : []

if (!photos.length) {
  console.log('images: no photos in assets/product-photos/ — using placeholder-bike.svg for all products.')
  console.log('        Add 2000px+ photos named <slug>.jpg and re-run to emit <slug>.webp + <slug>.avif.')
  process.exit(0)
}

mkdirSync(outDir, { recursive: true })
const W = 1600, H = 1200

for (const file of photos) {
  const slug = basename(file, extname(file)).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
  const src = resolve(srcDir, file)
  const base = sharp(src).rotate().resize(Math.round(W * 0.96), Math.round(H * 0.96), { fit: 'inside', withoutEnlargement: true })

  // compose product onto white canvas
  const buf = await base.toBuffer()
  const canvas = sharp({ create: { width: W, height: H, channels: 4, background: { r: 255, g: 255, b: 255, alpha: 1 } } })
    .composite([{ input: buf, gravity: 'centre' }])

  const webp = resolve(outDir, `${slug}.webp`)
  const avif = resolve(outDir, `${slug}.avif`)
  await canvas.clone().webp({ quality: 86 }).toFile(webp)
  await canvas.clone().avif({ quality: 58 }).toFile(avif)
  const kb = (p) => Math.round(statSync(p).size / 1024) + 'KB'
  console.log(`images: ${slug}  webp ${kb(webp)}  avif ${kb(avif)}`)
}
console.log(`images: processed ${photos.length} photo(s) → AVIF + WebP.`)
