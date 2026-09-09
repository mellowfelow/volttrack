# VoltTrack — project instructions

VoltTrack is a US electric dirt bike store. Stack: React + Next.js (App Router). Deploy target: **Vercel** (GitHub → auto-deploy). Built with WebForge.

## Non-negotiable: legality language
- Never oversell street legality. Most bikes are **off-road / private-land / OHV use only** unless a specific street-legal path is stated on the listing.
- Always keep the California Vehicle Code **Section 436.1** OHV note where legality is discussed.
- State that **prices are estimates** and may change due to import tariff conditions.
- Never claim a bike is "street legal everywhere", "guaranteed street legal", or "no registration needed".
- If a request would require breaking any of the above, stop and say so rather than complying.

## Architecture
`src/config/site.js` is the single source of truth. Adding one entry to PRODUCTS / CATEGORIES /
BRANDS / POSTS / GUIDES generates the page, route, meta, JSON-LD, sitemap entry and nav links.
Never hand-write pages. Never hand-edit generated files (public/robots.txt, public/llms.txt,
public/auth.md, public/.well-known/*, public/js/webmcp.js, public/og/default.png,
public/images/logo.png, vercel.json) — edit the config and let `prebuild` regenerate them
(`scripts/gen-og.mjs` then `scripts/gen-agent-files.mjs`).

Sitemap: `/parts/[slug]/` pages are deliberately excluded from `src/app/sitemap.js` (still
crawlable via links) to concentrate crawl budget on the ~117 revenue pages — see PROJECT.md.
Images: `npm run images` emits `<slug>.{webp,avif}` (1600px) + `<slug>-sm.{webp,avif}` (800px);
`SmartImage` builds a `<picture>` srcset from both. `next/image` is NOT used (Vercel's optimiser
is a paid add-on — `/_next/image` returns 402), so `next.config.mjs` keeps `images:{unoptimized:true}`.

The domain lives ONLY in `SITE.domain`. To connect/change a domain: edit that one line, rebuild, push.

Removing or merging a page? Add a 301 to `REDIRECTS` in `src/config/site.js` (generated into
`vercel.json` by the same script) — never leave a dead URL that used to be indexed.

## Rules
- `npm run build && npm run crosscheck` must pass before every push.
- One `<h1>` per page. Meta descriptions ≤158 chars (`buildMetadata` word-boundary-clamps). Titles ≤60.
- Product images: WebP/AVIF, white 4:3 frame, via `npm run images` (also emits the 800px `-sm` variant).
- Emails entity-encoded where output as data; never plaintext in JSON-LD. Phone may be a `tel:` link.
- Never commit node_modules/, .next/, out/. `_source/` is content-only and gitignored — never deploy it.
- Line endings: LF, enforced by `.gitattributes`. Don't let an editor flip `site.js` to CRLF.

## Blog
POSTS entries: `{slug, title, metaTitle (≤48, gets "| VoltTrack"), date (ISO), primaryKw, metaDesc
(~150), excerpt, intro[], sections[{h2, paras[]}], faqs[{q,a}], cta{text,href}}`. Paragraphs take
inline `[text](/internal-link)` markup — link 2-3 products/categories + 1 related post per article,
and verify every href resolves. Backlog + rules: `docs/VOLTTRACK-BLOG-CONTENT-TRACKER.md` +
`blog-post-seo-ruleset.md`. Homepage shows 6 newest; `/blog/` shows all newest-first.

## Live placeholders (what breaks while unset)
- Forms provider is **`web3forms`** (real access key set in `FORMS.web3formsKey`) — submits
  directly from the browser to api.web3forms.com, no backend or domain verification needed.
  `/api/submit` (Resend) is dead code while this is the provider — kept only in case the client
  later wants first-party sending once a domain is Resend-verified (switch `FORMS.provider` back
  and set `RESEND_API_KEY` in Vercel).
- GSC + Yandex verification and the Tawk chat widget are all live (real values set) — nothing
  pending there.
- `SITE.sameAs` is still `[]` — **this is the #1 open item.** The site has 0 external backlinks
  (GSC + Bing confirm). Add real social/GBP URLs the moment the client supplies them and wire into
  the Organization schema. No on-page work moves indexation/rank until this is done.
- `robots.txt` sets `Content-Signal: ai-train=yes` — confirm the client actually consents to
  AI-training use (search/citation is separate, via `ai-input=yes`). Change in `gen-agent-files.mjs`.
- Guides have no `datePublished` — the `Article` schema supports `g.date`/`g.updated`; add real
  dates when known, never invent them.

## Brand facts (only these are true — never invent more)
- US-based authorized dealer, founded 2025, ships Lower 48.
- Authorized brands: Sur-Ron, Stark Future, Talaria, STACYC, KTM (and carries Razor, Segway, Zero, Altis, E-Ride Pro).
- Financing: Pay-in-4. Payment: bank transfer, crypto (BTC/USDT), financing.
- No invented statistics, awards, press, named clients, or partnerships. Ever.
