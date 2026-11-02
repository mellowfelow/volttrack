# VoltTrack — PROJECT.md

**Never published.** Full project record. Rebuilt from the original hand-built site in `_source/`.

## Identity
- Domain: volttrackhub.com (canonical host: www.volttrackhub.com — see SITE.domain)
- Name: VoltTrack · Tagline: America's Electric Dirt Bike Experts
- Primary color: #2563eb (cobalt blue)
- Deploy target: **Vercel** (GitHub → auto-deploy)
- Backend: **No** (pure static Next.js store)

## Brand entity statement
VoltTrack is a US-based electric dirt bike retailer and authorized dealer established in 2025,
offering genuine expert advice and manufacturer-warrantied electric dirt bikes for adult, youth
and kids riders. VoltTrack ships across the Lower 48 US states and specializes in Sur-Ron, Stark
Future, Talaria, STACYC, KTM and Razor. What makes VoltTrack different: the team rides electric
dirt bikes themselves and gives advice based on experience, not commission.

## Contact & business
- Email: info@volttrackhub.com · Phone: +1 562 732 4044
- Support: Mon–Sat 9am–6pm ET · Currency: USD · Region: US (Lower 48)

## Forms & chat
- Forms: `smtp` provider — `/api/contact` saves to the Upstash Redis reply-portal store (admin
  dashboard at `/admin/`) and emails via nodemailer. Web3Forms code path + `web3formsKey` are an
  inert fallback; `/api/submit` (Resend route) is unused.
- Chat hub: Tawk.to widget (live) + email + phone link channels.

## Deploy target rationale
Vercel chosen per operator instruction. Real API routes available later; higher agent ceiling.

## Shop structure (C: category + brand hubs)
Categories: adult, youth/kids, motocross, trail & enduro, pit bikes.
Brands: Sur-Ron, Stark Future, Talaria, KTM, Segway, Zero, Altis, E-Ride Pro, STACYC, Razor.
Parts & Gear referenced in footer/nav (informational; not a separate product collection yet).

## Products
49 in `src/config/site.js` PRODUCTS (41 priced + 8 enquiry-only). Real product photos processed
through `npm run images` → AVIF+WebP at 1600px + an 800px `-sm` variant each. Category/hero art
lives directly in `public/images/` (no source photo) and gets `-sm` variants via the images.mjs
post-pass.

## Blog
22 posts in `src/config/site.js` POSTS. Publishing plan + backlog: `docs/VOLTTRACK-BLOG-CONTENT-TRACKER.md`
(76-post bank). Homepage shows the 6 newest; `/blog/` shows all, newest first. New posts go in
POSTS as `{slug, title, metaTitle, date, primaryKw, metaDesc, excerpt, intro[], sections[{h2,paras[]}],
faqs[], cta}` — paragraphs take inline `[text](/internal-link)` markup.

## Keywords
Primary: **electric dirt bikes USA**. See `docs/keyword-map.md`.

## AI visibility plan
Rich Store/Organization schema on home + about (now incl. `telephone`/`contactPoint`); FAQPage on
home + /faq; entity statement in hero and About; llms.txt with brand facts + citation guidance;
robots AI-allows. Off-site (backlinks, directories, real social profiles) still TODO — cannot be
fixed on-page. `SITE.sameAs` still `[]` — add social URLs when the client supplies them.

## Brand authority facts (truthful only)
- Founded 2025, US-based. Authorized dealer: Sur-Ron, Stark Future, STACYC, Talaria, KTM.
- Ships Lower 48. Financing Pay-in-4. Payment: bank transfer, crypto (BTC/USDT), financing.
- No awards / named individuals / partnerships supplied → none published.

## Compliance (Section H)
- Banned: "guaranteed street legal", "legal everywhere", "no registration needed", any implication
  an off-road bike is street legal without certification.
- Required framing: off-road / OHV use only unless certified; California Section 436.1 OHV note;
  prices are estimates (import tariffs); always wear a helmet.
- Authority: CA Vehicle Code §436.1 + federal/state OHV law.

## GSC
- Verification: live (`SITE.gscVerification` set). Yandex verification also set.

## Redirects
- Path-level 301s (removed/merged pages) live in `REDIRECTS` in `src/config/site.js` and are
  generated into `vercel.json` by `scripts/gen-agent-files.mjs` — never hand-edit `vercel.json`.
- 2026-08-06: `/blog/are-electric-dirt-bikes-street-legal-usa/` → merged into
  `/guides/are-electric-dirt-bikes-street-legal/` (keyword cannibalization fix — both pages
  targeted "are electric dirt bikes street legal" with near-identical titles/meta). The guide is
  now the single comprehensive page (full sections + FAQPage schema); the blog post was removed.

## Full SEO / technical audit — 2026-09-09 (5 batches shipped)
Live re-audit against GSC + Bing + Semrush. GSC at audit time: 67 indexed / 203 not (200 =
"Discovered, never crawled"), avg position 28, **0 external links**. Bing: 103 indexed, 1 click,
0 backlinks, 0 technical errors. Diagnosis: the site is technically clean; the only blocker is
off-site authority.

Fixed + deployed (commits `10b1fcf` · `e3ba718` · `689b806` · `53b346e` · `266d7e1` + this batch):
- **Sitemap 271 → 117 URLs** — all 152 `/parts/[slug]/` pages removed from `sitemap.js` (still
  crawlable via links) so crawl demand concentrates on the revenue pages. Resubmitted to GSC + Bing.
- **Sitewide internal links to every hub** — Shop + Brands desktop mega-dropdowns (`Nav.jsx`) +
  footer Brands column. Brand hubs that Google had never crawled are now in every page's HTML.
- **Responsive images** — `images.mjs` emits an 800px `-sm` variant per image; `SmartImage` is a
  hand-built `<picture>` srcset (NOT `next/image` — Vercel's optimiser is a paid add-on, returns 402).
  `next.config.mjs` stays `images:{unoptimized:true}`.
- **Branded OG image** — `scripts/gen-og.mjs` generates `public/og/default.png` (1200×630) +
  `public/images/logo.png` (512px) from SITE config; runs in `prebuild`. `buildMetadata` uses the
  PNG as the og:image/twitter:image fallback (was an SVG — didn't render on social/AI).
- **Street-legal de-dupe** — `/shop/street-legal-electric-bikes/` (GSC-flagged duplicate) reframed
  transactional; the guide stays informational; the checker is tool-first; all three cross-link.
- **Schema** — `Offer` gains `shippingDetails` / `hasMerchantReturnPolicy` / `priceValidUntil`;
  Organization gains `telephone` + `contactPoint`; guide/blog `Article` gains `publisher.logo` +
  `image`; guides read optional `g.date`/`g.updated` (none set yet — needs real dates).
- **Meta** — `buildMetadata` now word-boundary-clamps descriptions (was mid-word `.slice(0,158)`);
  5 categories + about page rewritten in-band.
- **Headers / config** — HSTS added; Google-Fonts hosts removed from CSP; `.gitattributes` ends the
  CRLF churn on `site.js`; `llms.txt` category prices no longer show `$0`; Tawk tab-title rewrite
  guarded; homepage blog grid capped at 6; blog index H1/title keyword-led + sorted newest-first;
  `numberOfItems`/`offerCount` both 41.
- **+10 blog posts** — Tier-1 tracker #11–20.

Still open (all off-page or client decisions):
- **Backlinks — the only real blocker.** 0 external links. `docs/BACKLINK-PLAN.md` Tier 1
  (GBP, Bing Places, 5 dealer-locator emails, 6 social profiles) is unstarted. `SITE.sameAs` `[]`.
- Guide `datePublished` dates need backfilling from real authoring records (don't invent).
- `robots.txt` `Content-Signal: ai-train=yes` — confirm client wants AI-training use or flip to `no`.
- Two chat buttons (ChatHub + Tawk) — product decision; Tawk dashboard tab-title toggle.
- `<image:image>` sitemap entries need Next 15 (14.2 silently ignores the field).

## Known issues / open items (earlier)
- No analytics existed until 2026-08-06 — `@vercel/analytics` now in `layout.jsx`.
- 152 `/parts/[slug]/` pages: the ~33 with no `compat[]` are `noindex,follow`; all 152 are now
  out of the sitemap (2026-09-09) but still crawlable via links.
- Domain is new (rebuild shipped 2026-07-22); slow initial indexation is expected for the age.

## Full SEO / technical audit — 2026-11-02 (GSC + Bing + Semrush + live crawl)
Facts at audit time (volttrackhub.com only — an earlier GSC view and the Bing home page showed a
different property, volttrail.org, and were discarded):
- GSC Jul 24–Oct 31: 320 clicks / 29.6K impressions, CTR 1.1%, avg pos 17.3; US = 248 clicks.
  Almost all clicks carry the product-snippet appearance. Top pages: a parts page (77), Razor MX500
  (59), Razor MX125 (30 clicks / 5.4K impressions), the 12/13/14-year-old guides. Demand is kids/teen
  bikes + Razor + batteries/parts, not the "electric dirt bikes USA" primary keyword.
- Indexing: 80 indexed / 66 not (55 "Discovered – currently not indexed": brand hubs, /faq/, compare,
  the street-legal checker, several posts). Sitemap 127 URLs read OK by Google (Nov 1) and Bing (Oct 30).
  No manual actions. Core Web Vitals: not enough field data.
- Backlinks: GSC 88 external links / 74 domains (was 0 on 2026-09-09); Semrush 336 referring domains,
  83% authority 0–10, network graph "Dangerous", anchors read as link-vendor spam ("link velocity",
  "tiered", "link insertions", "syair sydney"); Bing 13 domains incl. seoorbit.us. Provenance
  UNKNOWN — confirm nobody was paid to build them. Do not disavow until that is answered.
- Bing (volttrackhub.com, 3 months): 16 clicks / 1.5K impressions.

Fixed in code (not yet pushed when written):
- Sitemap `<lastmod>`: was the build timestamp on 105 URLs; now real post dates, `g.updated||g.date`
  for guides, `SITE.catalogUpdated` for the rest.
- Product titles: `titleFor()` adds a qualifier ("— Price & Specs", youth bikes "— Ages 7–10, Price &
  Specs", enquiry-only "— Specs & Availability"), kept ≤60 with the " | VoltTrack" suffix.
- `/blog/` and the street-legal checker titles trimmed to ≤60; privacy/terms descriptions lengthened.
- `vercel.json` (generated): `/images/*` and `/og/*` now `Cache-Control: max-age=604800, swr=86400`
  (was max-age=0); CSP no longer repeats `'self'` in connect-src.
- robots.txt: dropped retired `Claude-Web`; added `Claude-User`, `Claude-SearchBot`, `OAI-SearchBot`,
  `Perplexity-User`, `MistralAI-User`, `Meta-WebIndexer`.
- Product JSON-LD: `sku` (catalogue slug) + `itemCondition: NewCondition`.
- `/parts/[slug]/`: 19 variant parts (Front/Rear, Adult/Youth, battery sizes) shared one `<title>`;
  `titleFor()` now falls back to the full variant name when a stored title is shared. No duplicate
  titles remain on indexable pages.
- CLAUDE.md / README / PROJECT.md corrected: forms run on SMTP + Upstash, not Web3Forms.

Still open: spam backlink decision; 55 uncrawled revenue pages (request indexing in GSC, earn real
links); Lighthouse/PSI + Rich Results runs; enquiry-only products carry no Offer (no price to
publish) so they are not product-snippet eligible; `Content-Signal: ai-train=yes` client sign-off;
Vercel env vars (SMTP/Upstash/ADMIN_PASSCODE) unverified.
