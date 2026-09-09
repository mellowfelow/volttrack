// Image pipeline (v9.1): normalise client photos and emit BOTH AVIF and WebP.
// Each photo in assets/product-photos/ is contain-fit onto a white 4:3 1600×1200
// canvas (product ~96% of frame), then written as <slug>.webp (q86) + <slug>.avif
// (q58) to public/images/. Missing photos → shared SVG placeholder (no-op).
import sharp from 'sharp'
import { readdirSync, existsSync, mkdirSync, statSync, writeFileSync } from 'node:fs'
import { resolve, dirname, basename, extname } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const srcDir = resolve(root, 'assets/product-photos')
const outDir = resolve(root, 'public/images')

const photos = existsSync(srcDir)
  ? readdirSync(srcDir).filter((f) => /\.(jpe?g|png|webp|avif|tiff?)$/i.test(f))
  : []

if (!photos.length) {
  console.log('images: no photos in assets/product-photos/ — using placeholder-bike.svg for all products.')
  console.log('        Add 2000px+ photos named <slug>.jpg and re-run to emit <slug>.webp + <slug>.avif.')
  process.exit(0)
}

mkdirSync(outDir, { recursive: true })
const W = 1600, H = 1200
const sleep = (ms) => new Promise((r) => setTimeout(r, ms))
// Windows sometimes throws EINVAL/UNKNOWN when an antivirus scanner briefly
// locks a freshly written file — retry the write a few times before giving up.
const writeRetry = async (out, buf) => {
  for (let i = 0; ; i++) {
    try { writeFileSync(out, buf); return }
    catch (e) { if (i >= 8) throw e; await sleep(150) }
  }
}
const FILL = 0.90 // product occupies ~90% of the frame (WooCommerce-style consistent framing)

for (const file of photos) {
  const slug = basename(file, extname(file)).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
  const src = resolve(srcDir, file)

  // 1) autorotate, capture original dims
  const meta = await sharp(src).rotate().metadata()
  let buf = await sharp(src).rotate().toBuffer()

  // 2) trim the uniform background border so a product padded with whitespace
  //    fills the frame instead of floating tiny in the centre. Guard against a
  //    bad trim (e.g. product touching a corner) collapsing the image.
  let tw = meta.width, th = meta.height
  try {
    const t = await sharp(buf).trim({ threshold: 12 }).toBuffer({ resolveWithObject: true })
    if (t.info.width >= meta.width * 0.12 && t.info.height >= meta.height * 0.12) {
      buf = t.data; tw = t.info.width; th = t.info.height
    }
  } catch { /* no uniform border to trim — keep original */ }

  // 3) scale the product to fill ~90% of the frame (enlarging small sources),
  //    and sharpen only when upscaling to recover crispness lost to enlargement.
  const scale = Math.min((W * FILL) / tw, (H * FILL) / th)
  let inner = sharp(buf).resize(Math.round(W * FILL), Math.round(H * FILL), {
    fit: 'inside', kernel: 'lanczos3',
  })
  if (scale > 1.1) inner = inner.sharpen({ sigma: 1 })
  const innerBuf = await inner.toBuffer()

  // 4) composite centred on a white 4:3 canvas (blends with the white card frame),
  //    then flatten to an opaque RGB PNG buffer we can re-encode/downscale freely.
  const fullPng = await sharp({ create: { width: W, height: H, channels: 4, background: { r: 255, g: 255, b: 255, alpha: 1 } } })
    .composite([{ input: innerBuf, gravity: 'centre' }])
    .flatten({ background: { r: 255, g: 255, b: 255 } })
    .png()
    .toBuffer()
  const smPng = await sharp(fullPng).resize(800, 600, { kernel: 'lanczos3' }).png().toBuffer()

  // Adaptive quality: keep quality as high as possible but under the 150KB
  // crosscheck budget (target 145KB with margin). Step down only if needed.
  const CAP = 145 * 1024
  // Encode to a buffer, stepping quality down until under the cap, then write
  // ONCE. (Repeated .toFile() to the same path fails on Windows: EINVAL.)
  const encode = async (srcBuf, out, fmt, qStart, qFloor) => {
    let out2, qUsed
    for (let q = qStart; ; q -= 6) {
      out2 = await sharp(srcBuf)[fmt]({ quality: q }).toBuffer()
      qUsed = q
      if (out2.length <= CAP || q <= qFloor) break
    }
    await writeRetry(out, out2)
    return qUsed
  }
  const kb = (p) => Math.round(statSync(p).size / 1024) + 'KB'

  // Two widths so phones don't pull the 1600px file: <slug>.{webp,avif} at 1600w
  // and <slug>-sm.{webp,avif} at 800w. SmartImage emits a width-based srcset.
  const parts = []
  for (const [suffix, srcBuf] of [['', fullPng], ['-sm', smPng]]) {
    const webp = resolve(outDir, `${slug}${suffix}.webp`)
    const avif = resolve(outDir, `${slug}${suffix}.avif`)
    const qw = await encode(srcBuf, webp, 'webp', suffix ? 82 : 88, 40)
    const qa = await encode(srcBuf, avif, 'avif', suffix ? 55 : 62, 40)
    parts.push(`${suffix || 'full'} webp ${kb(webp)}(q${qw}) avif ${kb(avif)}(q${qa})`)
  }
  const up = scale > 1 ? ` up${scale.toFixed(1)}x` : ''
  console.log(`images: ${slug}  ${parts.join('  |  ')}${up}`)
}
console.log(`images: processed ${photos.length} photo(s) → AVIF + WebP.`)

// Post-pass: some images (category/hero art) are dropped straight into
// public/images/ with no source photo. Make sure every <slug>.webp has an
// 800px <slug>-sm.{webp,avif} sibling so SmartImage's srcset never 404s.
{
  const CAP = 145 * 1024
  const encodeFrom = async (srcBuf, out, fmt, qStart, qFloor) => {
    let out2, q = qStart
    for (; ; q -= 6) {
      out2 = await sharp(srcBuf)[fmt]({ quality: q }).toBuffer()
      if (out2.length <= CAP || q <= qFloor) break
    }
    await writeRetry(out, out2)
  }
  const loose = readdirSync(outDir).filter((f) => /\.webp$/i.test(f) && !/-sm\.webp$/i.test(f))
  let added = 0
  for (const f of loose) {
    const slug = basename(f, '.webp')
    if (existsSync(resolve(outDir, `${slug}-sm.webp`))) continue
    const smPng = await sharp(resolve(outDir, f)).resize(800, 600, { fit: 'inside', kernel: 'lanczos3' }).png().toBuffer()
    await encodeFrom(smPng, resolve(outDir, `${slug}-sm.webp`), 'webp', 82, 40)
    await encodeFrom(smPng, resolve(outDir, `${slug}-sm.avif`), 'avif', 55, 40)
    added++
    console.log(`images: ${slug}  +sm variant (no source photo)`)
  }
  if (added) console.log(`images: added ${added} missing -sm variant(s).`)
}
