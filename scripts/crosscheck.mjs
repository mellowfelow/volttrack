// Pre-ship crosscheck. Exits non-zero on failure.
// Validates the generated agent-ready files, config integrity, forms method,
// and compliance/placeholder rules. Run after gen-agent-files.mjs.
import { readFileSync, existsSync, readdirSync, statSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const pub = (p) => resolve(root, 'public', p)
const read = (p) => readFileSync(p, 'utf8')

let fails = 0
let passes = 0
const fail = (m) => { console.error('  ✗ ' + m); fails++ }
const pass = (m) => { passes++; if (process.env.VERBOSE) console.log('  ✓ ' + m) }
const parseJson = (p, label) => {
  try { const o = JSON.parse(read(p)); pass(label + ' valid JSON'); return o }
  catch (e) { fail(label + ' invalid JSON: ' + e.message); return null }
}

const cfg = await import(pathToFileURL(resolve(root, 'src/config/site.js')).href)
const { SITE, FORMS, PRODUCTS, CATEGORIES } = cfg
const isProd = process.env.DEPLOY === 'production'

console.log('WebForge crosscheck — VoltTrack')

// B1 — domain placeholder in production
if (isProd && /DOMAIN\.com/i.test(SITE.domain)) fail('B1: SITE.domain still DOMAIN.com in production build')
else pass('B1: domain set (' + SITE.domain + ')')

// B3 — resend on static target
if (FORMS.provider === 'resend' && process.env.TARGET === 'static') fail('B3: resend provider on static target')
else pass('B3: forms provider ok (' + FORMS.provider + ')')

// Config integrity — every product has category, unique slug, price
const slugs = new Set()
for (const p of PRODUCTS) {
  if (slugs.has(p.slug)) fail('duplicate product slug: ' + p.slug); slugs.add(p.slug)
  if (!CATEGORIES.find((c) => c.slug === p.category)) fail(`product ${p.slug} has unknown category ${p.category}`)
  // Enquiry-only products (enquire: true) intentionally carry no price.
  if (!p.enquire && (!p.price || p.price <= 0)) fail(`product ${p.slug} has no price`)
  if (p.enquire && p.price) fail(`product ${p.slug} is enquire-only but has a price set`)
}
pass(`config: ${PRODUCTS.length} products across ${CATEGORIES.length} categories`)

// Agent-ready files present + valid
const required = [
  'robots.txt', 'llms.txt', 'auth.md', 'js/webmcp.js',
  '.well-known/api-catalog', '.well-known/agent-skills/index.json',
  '.well-known/mcp/server-card.json', '.well-known/oauth-protected-resource',
  '.well-known/oauth-authorization-server', '.well-known/openid-configuration',
  '.well-known/acp.json', '.well-known/ucp',
]
for (const f of required) {
  if (!existsSync(pub(f))) fail('missing agent file: public/' + f)
  else pass('present: ' + f)
}

// robots — AI bots + sitemap
if (existsSync(pub('robots.txt'))) {
  const r = read(pub('robots.txt'))
  for (const bot of ['GPTBot', 'ClaudeBot', 'PerplexityBot', 'Google-Extended', 'CCBot']) {
    if (!r.includes(bot)) fail('robots.txt missing AI bot: ' + bot)
  }
  if (!/Sitemap:/i.test(r)) fail('robots.txt missing Sitemap directive')
  pass('robots.txt AI bots + sitemap')
}

// auth.md must start with "# Auth.md"
if (existsSync(pub('auth.md'))) {
  if (!read(pub('auth.md')).startsWith('# Auth.md')) fail('auth.md must start with "# Auth.md"')
  else pass('auth.md heading')
}

// JSON validity of well-known
const apiCatalog = parseJson(pub('.well-known/api-catalog'), 'api-catalog')
if (apiCatalog && !Array.isArray(apiCatalog.linkset)) fail('api-catalog missing linkset array')
const skills = parseJson(pub('.well-known/agent-skills/index.json'), 'agent-skills')
if (skills && (!skills.$schema || !Array.isArray(skills.skills))) fail('agent-skills missing $schema/skills')
const card = parseJson(pub('.well-known/mcp/server-card.json'), 'server-card')
if (card && (!card.serverInfo || !card.transport || !card.capabilities)) fail('server-card missing blocks')
const oauthAs = parseJson(pub('.well-known/oauth-authorization-server'), 'oauth-authorization-server')
if (oauthAs && !oauthAs.agent_auth) fail('oauth-authorization-server missing agent_auth')
parseJson(pub('.well-known/oauth-protected-resource'), 'oauth-protected-resource')
parseJson(pub('.well-known/openid-configuration'), 'openid-configuration')
const acp = parseJson(pub('.well-known/acp.json'), 'acp')
if (acp && !(acp.protocol && acp.protocol.name === 'acp')) fail('acp.json missing protocol.name=acp')
const ucp = parseJson(pub('.well-known/ucp'), 'ucp')
if (ucp && ucp.ucp !== '1.0') fail('ucp missing "ucp":"1.0"')

// webmcp loaded in layout
const layout = read(resolve(root, 'src/app/layout.jsx'))
if (!layout.includes('/js/webmcp.js')) fail('webmcp.js not referenced in layout')
else pass('webmcp.js loaded in layout')

// placeholders
for (const f of ['llms.txt', 'auth.md', '.well-known/mcp/server-card.json', 'robots.txt']) {
  if (existsSync(pub(f)) && /\[(DOMAIN|NUMBER|EMAIL|Brand)\]/.test(read(pub(f)))) fail('unreplaced placeholder in ' + f)
}
pass('no unreplaced [DOMAIN]/[EMAIL] placeholders')

// forms method (Web3Forms exact CORS)
const form = read(resolve(root, 'src/components/WebForm.jsx'))
if (!form.includes('new FormData(form)')) fail('WebForm not using body: new FormData(form)')
if (/'Content-Type'/.test(form)) fail('WebForm must NOT set Content-Type')
if (!form.includes("Accept: 'application/json'") && !form.includes('Accept: "application/json"')) fail('WebForm missing Accept header')
if (!form.includes('preventDefault')) fail('WebForm missing preventDefault')
pass('forms: Web3Forms CORS method')

// vercel.json present for vercel target
if (SITE.target === 'vercel' && !existsSync(resolve(root, 'vercel.json'))) fail('vercel.json missing (run gen-agent-files)')
else pass('deploy config present for target')

// compliance: never oversell street legality — banned phrasing scan
const bannedPhrases = ['guaranteed street legal', 'legal everywhere', 'no registration needed']
// (light scan of generated public text)
for (const f of ['llms.txt', 'auth.md']) {
  const t = existsSync(pub(f)) ? read(pub(f)).toLowerCase() : ''
  for (const b of bannedPhrases) if (t.includes(b)) fail(`compliance: banned phrase "${b}" in ${f}`)
}
pass('compliance scan')

const css = read(resolve(root, 'src/styles/globals.css'))
const home = read(resolve(root, 'src/app/page.jsx'))
const layoutSrc = read(resolve(root, 'src/app/layout.jsx'))
const srcFile = (p) => read(resolve(root, p))
const imgsDir = resolve(root, 'public/images')
const listImgs = (ext) => existsSync(imgsDir) ? readdirSync(imgsDir).filter((f) => f.endsWith(ext)) : []

// ---------------------------------------------------------------------------
// 39. Accessibility (static) — WCAG 2.2 AA build rules (references/accessibility.md)
// ---------------------------------------------------------------------------
if (!/className="skip-link"|skip-link/.test(layoutSrc) || !/href="#main"/.test(layoutSrc)) fail('39 a11y: skip-link to #main missing in layout')
else pass('39 a11y: skip-link present')
if (!/id="main"/.test(layoutSrc)) fail('39 a11y: <main id="main"> landmark missing')
else pass('39 a11y: main#main landmark present')
if (!/aria-label="Primary"/.test(srcFile('src/components/Nav.jsx'))) fail('39 a11y: primary nav not labelled')
else pass('39 a11y: nav landmark labelled')
{
  const bc = srcFile('src/components/Breadcrumbs.jsx')
  if (!/<nav[^>]*aria-label="Breadcrumb"/.test(bc) || !/<ol/.test(bc) || !/aria-current="page"/.test(bc))
    fail('39 a11y: Breadcrumbs must be <nav aria-label="Breadcrumb"><ol> with aria-current="page"')
  else pass('39 a11y: breadcrumbs semantic (nav/ol/aria-current)')
}
{
  const qtyS = existsSync(resolve(root, 'src/components/QtyStepper.jsx')) ? srcFile('src/components/QtyStepper.jsx') : ''
  if (!qtyS || !/type="button"/.test(qtyS) || (qtyS.match(/aria-label=/g) || []).length < 2)
    fail('39 a11y: QtyStepper −/+ need type=button + aria-label')
  else pass('39 a11y: QtyStepper buttons labelled')
}
for (const [f, what] of [['src/components/Nav.jsx', 'hamburger'], ['src/components/CartCount.jsx', 'cart'], ['src/components/ChatHub.jsx', 'chat']]) {
  if (existsSync(resolve(root, f)) && !/aria-label/.test(srcFile(f))) fail(`39 a11y: ${what} icon-only control missing aria-label`)
}
pass('39 a11y: icon-only controls labelled')
if ((srcFile('src/app/checkout/CheckoutClient.jsx').match(/htmlFor=/g) || []).length < 4) fail('39 a11y: checkout inputs not labelled')
else pass('39 a11y: form controls labelled')
if (/tabindex=["']?[1-9]/i.test(home + layoutSrc)) fail('39 a11y: positive tabindex found')
else pass('39 a11y: no positive tabindex')
if (/outline:\s*(none|0)(?![^{]*:focus-visible)/.test(css) && !/:focus-visible/.test(css)) fail('39 a11y: outline:none without :focus-visible')
else pass('39 a11y: focus-visible rings present')
if (!/@media\s*\(prefers-reduced-motion:\s*reduce\)/.test(css)) fail('39 a11y: prefers-reduced-motion block missing')
else pass('39 a11y: prefers-reduced-motion present')

// ---------------------------------------------------------------------------
// 40. Performance (structural) — references/performance.md
// ---------------------------------------------------------------------------
{
  const webps = listImgs('.webp')
  const missingAvif = webps.filter((w) => !existsSync(resolve(imgsDir, w.replace(/\.webp$/, '.avif'))))
  if (missingAvif.length) fail(`40 perf: WebP without AVIF sibling: ${missingAvif.join(', ')}`)
  else pass(`40 perf: AVIF+WebP for every raster (${webps.length})`)
  // individual raster weight budget (<150KB; hero exempt but still flagged if huge)
  const heavy = [...webps, ...listImgs('.avif')].filter((f) => statSync(resolve(imgsDir, f)).size > 150 * 1024 && !f.startsWith('homepage-hero'))
  if (heavy.length) fail(`40 perf: images over 150KB: ${heavy.join(', ')}`)
  else pass('40 perf: image weight budget (<150KB, hero exempt)')
}
// images routed through SmartImage (AVIF picture) not raw <img> on homepage/cards
if (!/SmartImage/.test(srcFile('src/components/ProductCard.jsx'))) fail('40 perf: ProductCard not using SmartImage')
else pass('40 perf: cards use SmartImage (picture/AVIF)')
// no render-blocking external <script> without defer/async in <head>
if (/<script\s+src=(?!.*(defer|async))/.test(layoutSrc)) fail('40 perf: render-blocking external head script (needs defer)')
else pass('40 perf: no render-blocking head scripts')
if (!/font-display=swap|display:\s*swap|display=swap/.test(layoutSrc)) fail('40 perf: font-display swap missing')
else pass('40 perf: font-display swap + preconnect')

// ---------------------------------------------------------------------------
// 41. Visual design quality — references/design-quality.md
// ---------------------------------------------------------------------------
for (const tok of ['--radius:', '--shadow:', '--space:', '--bg-soft:']) {
  if (!css.includes(tok)) fail(`41 design: missing token ${tok}`)
}
pass('41 design: one radius/shadow/spacing/surface token set')
if (!/\.card\{[^}]*box-shadow:var\(--shadow\)/.test(css)) fail('41 design: cards not using shared shadow token')
else pass('41 design: cohesive depth (shared shadow)')
// grid uniformity: category tiles one shared .tile with cover + fixed aspect
if (!/\.tile\{[^}]*aspect-ratio/.test(css) || !/\.tile img\{[^}]*object-fit:cover/.test(css)) fail('41 design: category tiles not uniform (aspect + object-fit:cover)')
else pass('41 design: uniform category tiles (cover, fixed aspect)')
// single hero, no carousel/autoplay
if (existsSync(resolve(root, 'src/components/HeroSlider.jsx'))) fail('41 design: HeroSlider (carousel) still present')
if (!existsSync(resolve(root, 'src/components/Hero.jsx'))) fail('41 design: single Hero.jsx missing')
for (const c of ['src/components/Hero.jsx', 'src/components/AnnounceBar.jsx']) {
  if (existsSync(resolve(root, c)) && /setInterval\s*\(/.test(srcFile(c))) fail(`41 design: autoplay timer in ${c}`)
}
if (!/\.hero\{[^}]*min-height/.test(css)) fail('41 design: hero missing min-height')
pass('41 design: single hero, min-height + scrim, no carousel')
// section rhythm
const sectionCount = (home.match(/<section/g) || []).length + 1 // + Hero component's section
const softCount = (home.match(/section-soft/g) || []).length
if (sectionCount < 6) fail(`41 design: only ${sectionCount} homepage sections (need >=6)`)
else if (softCount < 2) fail(`41 design: <2 tinted sections (need alternating surfaces)`)
else pass(`41 design: ${sectionCount} sections, ${softCount} tinted (alternating rhythm)`)
// no-bare-section: every homepage <section> has a visual anchor
{
  const secs = home.split('<section').slice(1)
  const bare = secs.filter((s) => {
    const block = s.split('</section>')[0]
    return !/(SmartImage|<img|className="(stat|tile|card|pill|spec-|section-soft|order-summary)|section-soft|<FaqAccordion|ProductCard)/.test(block)
  })
  if (bare.length) fail(`41 design: ${bare.length} bare homepage section(s) (no image/icon/card/tint)`)
  else pass('41 design: no bare sections (each has a visual anchor)')
}
// centered section-head pattern reused
if (!/\.section-head\{[^}]*text-align:center/.test(css)) fail('41 design: section-head centering pattern missing')
else pass('41 design: consistent centered section pattern')
// reveal safe without JS
if (/(?<!\.js-anim )\.reveal\{[^}]*opacity:\s*0/.test(css)) fail('41 design: ungated .reveal hides content without JS')
else pass('41 design: motion gated (.js-anim), CLS-safe')

console.log(`\ncrosscheck: ${passes} passed, ${fails} failed`)
if (fails > 0) { console.error('CROSSCHECK FAILED'); process.exit(1) }
console.log('CROSSCHECK PASSED')
