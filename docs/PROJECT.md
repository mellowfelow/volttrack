# VoltTrack — PROJECT.md

**Never published.** Full project record. Rebuilt from the original hand-built site in `_source/`.

## Identity
- Domain: volttrack.com
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
- Email: hello@volttrack.com
- Support: Mon–Sat 9am–6pm ET · Currency: USD · Region: US (Lower 48)
- No phone/WhatsApp on file.

## Forms & chat
- Forms: Web3Forms (provider), key **pending** (`YOUR-WEB3FORMS-KEY`). Works pre-domain.
- Chat hub: Tawk.to widget (ID **pending** `PROPERTY_ID/WIDGET_ID`) + email link channel.

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
- Verification code: pending (add to `SITE.gscVerification`).

## Migration notes
- Old `_redirects` (UK→US path 301s, brand slug fixes) — re-add as `redirects` in `vercel.json`
  generator if those old URLs still receive traffic. Not carried over yet (new domain build).
