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
- Forms: Resend (provider), sending from `orders@volttrackhub.com` (Resend-verified domain sender).
  Set `RESEND_API_KEY` in Vercel env to activate delivery.
- Chat hub: Tawk.to widget (live) + email + phone link channels.

## Deploy target rationale
Vercel chosen per operator instruction. Real API routes available later; higher agent ceiling.

## Shop structure (C: category + brand hubs)
Categories: adult, youth/kids, motocross, trail & enduro, pit bikes.
Brands: Sur-Ron, Stark Future, Talaria, KTM, Segway, Zero, Altis, E-Ride Pro, STACYC, Razor.
Parts & Gear referenced in footer/nav (informational; not a separate product collection yet).

## Products
17 seeded from the original site with real names and prices (see `src/config/site.js` PRODUCTS).
No real product photos in source → shared SVG placeholder used. Replace via `assets/product-photos/`.

## Keywords
Primary: **electric dirt bikes USA**. See `docs/keyword-map.md`.

## AI visibility plan
Rich Store/Organization schema on home + about; FAQPage on home + /faq; entity statement in hero
and About; llms.txt with brand facts + citation guidance; robots AI-allows. Off-site (backlinks,
directories, real social profiles) still TODO — cannot be fixed on-page.

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

## Known issues / open items (2026-08-06 audit)
- No analytics existed until this date — `@vercel/analytics` now installed in `layout.jsx`.
- Backlink profile is 100% low-quality nofollow spam (see `docs/BACKLINK-PLAN.md`) — none of the
  real Tier 1 items (GBP, Bing Places, dealer-locator links, social `sameAs`) are done yet.
- 152 `/parts/[slug]/` pages: the ~33 with no bike-specific `compat[]` (generic accessories) are
  now `noindex,follow` — kept linkable/purchasable but out of the index — to stop diluting crawl
  trust on a young domain. The ~119 with real bike fitment stay indexed.
- Domain is new (this Next.js rebuild shipped 2026-07-22); GSC showed 0/269 pages indexed as of
  2026-08-06 despite a successfully-read sitemap — expected for a domain this age, not a bug.
