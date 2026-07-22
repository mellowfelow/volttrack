// Image pipeline. Normalises client photos in assets/product-photos/ to a white
// 4:3 WebP canvas. When no photos are present, every product falls back to the
// shared SVG placeholder (public/images/placeholder-bike.svg) and this is a no-op.
//
// NOTE: real normalisation requires `sharp`. It is intentionally not a hard
// dependency so the site builds without native modules. Install sharp and set
// USE_SHARP=1 to enable actual processing once real product photos arrive.
import { readdirSync, existsSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const srcDir = resolve(root, 'assets/product-photos')

const photos = existsSync(srcDir)
  ? readdirSync(srcDir).filter((f) => /\.(jpe?g|png|webp)$/i.test(f))
  : []

if (!photos.length) {
  console.log('images: no photos in assets/product-photos/ — using placeholder-bike.svg for all products.')
  console.log('        Add 2000px+ white-background photos named <slug>.jpg and re-run to replace placeholders.')
  process.exit(0)
}

console.log(`images: found ${photos.length} photo(s).`)
console.log('        Set USE_SHARP=1 and `npm i sharp` to normalise them to white 4:3 WebP.')
