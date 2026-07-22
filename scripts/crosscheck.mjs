// Pre-ship crosscheck. Exits non-zero on failure.
// Validates the generated agent-ready files, config integrity, forms method,
// and compliance/placeholder rules. Run after gen-agent-files.mjs.
import { readFileSync, existsSync } from 'node:fs'
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
  if (!p.price || p.price <= 0) fail(`product ${p.slug} has no price`)
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

// ---------------------------------------------------------------------------
// 41. Visual design quality (v9-style bar; implemented against v8 standards)
// ---------------------------------------------------------------------------
const css = read(resolve(root, 'src/styles/globals.css'))
const home = read(resolve(root, 'src/app/page.jsx'))
const srcFile = (p) => read(resolve(root, p))

// 41a. Single design-token set present (one radius, one shadow, one spacing scale, surface tint)
for (const tok of ['--radius:', '--shadow:', '--space:', '--bg-soft:']) {
  if (!css.includes(tok)) fail(`41 design tokens: missing ${tok} in globals.css`)
}
pass('41 design tokens present (radius/shadow/space/surface)')

// 41b. Cards use the shared shadow token (cohesive depth, not ad-hoc shadows)
if (!/\.card\{[^}]*box-shadow:var\(--shadow\)/.test(css)) fail('41 depth: .card does not use var(--shadow)')
else pass('41 depth: cards use shared shadow token')

// 41c. Single hero, NOT a carousel/autoplay (per pages.md + "no carousels/autoplay")
if (existsSync(resolve(root, 'src/components/HeroSlider.jsx'))) fail('41 hero: HeroSlider (carousel) still present')
if (!existsSync(resolve(root, 'src/components/Hero.jsx'))) fail('41 hero: single Hero.jsx missing')
for (const c of ['src/components/Hero.jsx', 'src/components/AnnounceBar.jsx']) {
  if (existsSync(resolve(root, c)) && /setInterval\s*\(/.test(srcFile(c))) fail(`41 motion: autoplay timer (setInterval) found in ${c}`)
}
pass('41 hero: single hero, no carousel/autoplay')

// 41d. Homepage rhythm: >=6 sections with alternating tinted surfaces
const sectionCount = (home.match(/<section/g) || []).length
const softCount = (home.match(/section-soft/g) || []).length
if (sectionCount < 6) fail(`41 rhythm: only ${sectionCount} homepage sections (need >=6)`)
if (softCount < 3) fail(`41 rhythm: only ${softCount} tinted sections (need alternating white/tint)`)
if (sectionCount >= 6 && softCount >= 3) pass(`41 rhythm: ${sectionCount} sections, ${softCount} tinted (alternating)`)

// 41e. Motion gated behind prefers-reduced-motion
if (!/@media \(prefers-reduced-motion:reduce\)/.test(css)) fail('41 motion: no prefers-reduced-motion guard in CSS')
else pass('41 motion: reduced-motion respected')

// 41f. Reveal must not hide content without JS: only a `.js-anim`-gated rule may set opacity:0
if (/(?<!\.js-anim )\.reveal\{[^}]*opacity:\s*0/.test(css)) fail('41 no-JS: ungated .reveal hides content without JS (use .js-anim gate)')
else pass('41 no-JS: reveal content visible without JS')

// ---------------------------------------------------------------------------
// Accessibility static checks (per pages.md → Accessibility)
// ---------------------------------------------------------------------------
const qty = existsSync(resolve(root, 'src/components/QtyStepper.jsx')) ? srcFile('src/components/QtyStepper.jsx') : ''
if (!qty) fail('a11y: QtyStepper.jsx missing')
else {
  if (!/type="button"/.test(qty)) fail('a11y: QtyStepper buttons missing type="button"')
  if ((qty.match(/aria-label=/g) || []).length < 2) fail('a11y: QtyStepper − / + buttons need aria-label')
  else pass('a11y: QtyStepper buttons labelled + type=button')
}
// icon-only buttons carry aria-label
const iconBtns = [
  ['src/components/Nav.jsx', 'hamburger'],
  ['src/components/CartCount.jsx', 'cart'],
  ['src/components/ChatHub.jsx', 'chat toggle'],
]
for (const [f, what] of iconBtns) {
  if (existsSync(resolve(root, f)) && !/aria-label/.test(srcFile(f))) fail(`a11y: ${what} icon control missing aria-label (${f})`)
}
pass('a11y: icon-only controls have aria-label')
// checkout inputs are labelled
const checkout = existsSync(resolve(root, 'src/app/checkout/CheckoutClient.jsx')) ? srcFile('src/app/checkout/CheckoutClient.jsx') : ''
if (checkout && (checkout.match(/htmlFor=/g) || []).length < 4) fail('a11y: checkout inputs missing <label htmlFor>')
else pass('a11y: form inputs labelled')
// FAQ is a native details/summary accordion
const faqc = existsSync(resolve(root, 'src/components/FaqAccordion.jsx')) ? srcFile('src/components/FaqAccordion.jsx') : ''
if (!/<details/.test(faqc) || !/<summary/.test(faqc)) fail('a11y: FAQ not a native <details>/<summary> accordion')
else pass('a11y: FAQ uses native details/summary')

console.log(`\ncrosscheck: ${passes} passed, ${fails} failed`)
if (fails > 0) { console.error('CROSSCHECK FAILED'); process.exit(1) }
console.log('CROSSCHECK PASSED')
