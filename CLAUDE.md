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
public/auth.md, public/.well-known/*, public/js/webmcp.js, vercel.json) — edit the config and
run `node scripts/gen-agent-files.mjs`.

The domain lives ONLY in `SITE.domain`. To connect/change a domain: edit that one line, rebuild, push.

Removing or merging a page? Add a 301 to `REDIRECTS` in `src/config/site.js` (generated into
`vercel.json` by the same script) — never leave a dead URL that used to be indexed.

## Rules
- `npm run build && npm run crosscheck` must pass before every push.
- One `<h1>` per page. Meta descriptions ≤158 chars. Titles ≤60.
- Product images: WebP, white 4:3 frame, via `npm run images`. Missing photos → shared SVG placeholder.
- Emails entity-encoded where output as data; never plaintext in JSON-LD.
- Never commit node_modules/, .next/, out/. `_source/` is content-only and gitignored — never deploy it.

## Live placeholders (what breaks while unset)
- Forms provider is **`web3forms`** (real access key set in `FORMS.web3formsKey`) — submits
  directly from the browser to api.web3forms.com, no backend or domain verification needed.
  `/api/submit` (Resend) is dead code while this is the provider — kept only in case the client
  later wants first-party sending once a domain is Resend-verified (switch `FORMS.provider` back
  and set `RESEND_API_KEY` in Vercel).
- GSC + Yandex verification and the Tawk chat widget are all live (real values set) — nothing
  pending there.
- `SITE.sameAs` is still `[]` — add real social profile URLs when the client supplies them.

## Brand facts (only these are true — never invent more)
- US-based authorized dealer, founded 2025, ships Lower 48.
- Authorized brands: Sur-Ron, Stark Future, Talaria, STACYC, KTM (and carries Razor, Segway, Zero, Altis, E-Ride Pro).
- Financing: Pay-in-4. Payment: bank transfer, crypto (BTC/USDT), financing.
- No invented statistics, awards, press, named clients, or partnerships. Ever.
