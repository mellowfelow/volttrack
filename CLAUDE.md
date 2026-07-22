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

## Rules
- `npm run build && npm run crosscheck` must pass before every push.
- One `<h1>` per page. Meta descriptions ≤158 chars. Titles ≤60.
- Product images: WebP, white 4:3 frame, via `npm run images`. Missing photos → shared SVG placeholder.
- Emails entity-encoded where output as data; never plaintext in JSON-LD.
- Never commit node_modules/, .next/, out/. `_source/` is content-only and gitignored — never deploy it.

## Live placeholders (what breaks while unset)
- `FORMS.web3formsKey` = `YOUR-WEB3FORMS-KEY` → contact form redirects to thank-you but emails nowhere. Chat/email is the live channel until set.
- `CHAT` tawk value = `PROPERTY_ID/WIDGET_ID` → Tawk widget not injected until a real ID is set (email link channel still works).
- `SITE.gscVerification` empty → no GSC meta until a code is added.

## Brand facts (only these are true — never invent more)
- US-based authorized dealer, founded 2025, ships Lower 48.
- Authorized brands: Sur-Ron, Stark Future, Talaria, STACYC, KTM (and carries Razor, Segway, Zero, Altis, E-Ride Pro).
- Financing: Pay-in-4. Payment: bank transfer, crypto (BTC/USDT), financing.
- No invented statistics, awards, press, named clients, or partnerships. Ever.
