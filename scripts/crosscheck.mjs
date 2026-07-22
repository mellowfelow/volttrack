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

console.log(`\ncrosscheck: ${passes} passed, ${fails} failed`)
if (fails > 0) { console.error('CROSSCHECK FAILED'); process.exit(1) }
console.log('CROSSCHECK PASSED')
