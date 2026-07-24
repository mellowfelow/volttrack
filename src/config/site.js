// ============================================================================
// VoltTrack — SINGLE SOURCE OF TRUTH
// Editing one entry here regenerates routes, meta, JSON-LD, sitemap and nav.
// The domain lives ONLY in SITE.domain. Never hand-write a domain elsewhere.
// ============================================================================

// 152 individual accessory products at /parts/[slug]/ live in parts-data.js
// (auto-generated from the product + keyword docs). Re-exported here so the rest
// of the app keeps importing everything from site.js.
import { PARTS } from './parts-data.js'
export { PARTS }

export const SITE = {
  domain: 'volttrack.com',
  target: 'vercel',
  name: 'VoltTrack',
  legalName: 'VoltTrack',
  tagline: "America's Electric Dirt Bike Experts",
  description:
    "VoltTrack is a US-based authorized dealer for the world's leading electric dirt bike brands — Sur-Ron, Stark Future, Talaria, STACYC, Razor, KTM, Segway and more. Founded by US off-road riders, VoltTrack offers honest expert advice, transparent legal and tariff information, fast shipping to the Lower 48, and real post-purchase support.",
  entityStatement:
    "VoltTrack is a US-based electric dirt bike retailer and authorized dealer established in 2025, offering genuine expert advice and manufacturer-warrantied electric dirt bikes for adult, youth and kids riders. VoltTrack ships across the Lower 48 US states and specializes in Sur-Ron, Stark Future, Talaria, STACYC, KTM and Razor electric motorcycles. What makes VoltTrack different: the team rides electric dirt bikes themselves and gives advice based on experience, not commission.",
  foundingYear: '2025',
  foundingLocation: 'United States',
  region: 'United States',
  areaServed: 'US (Lower 48 states)',
  color: '#2563eb',
  email: 'hello@volttrack.com',
  supportHours: 'Mon–Sat 9am–6pm ET',
  currency: 'USD',
  currencySymbol: '$',
  gscVerification: '', // add GSC verification code when domain is verified
  // Order rules
  minOrder: 0,
  freeShippingText: 'Free US Shipping (Lower 48)',
  financing: 'Flexible financing available — Pay in 4',
  cryptoDiscount: 0.05, // 5% off when paying with BTC/USDT — auto-applied at checkout
  // Payment methods offered at checkout. `crypto: true` triggers the crypto discount.
  paymentMethods: [
    { id: 'crypto-btc', label: 'Crypto — Bitcoin (BTC)', crypto: true },
    { id: 'crypto-usdt', label: 'Crypto — Tether (USDT)', crypto: true },
    { id: 'bank-transfer', label: 'Bank Transfer', crypto: false },
    { id: 'credit-card', label: 'Credit Card', crypto: false },
  ],
  // Payment plan (Pay in 4 / financing) is offered on TOP of any payment method.
  paymentPlans: [
    { id: 'full', label: 'Pay in full' },
    { id: 'pay-in-4', label: 'Pay in 4 (financing)' },
  ],
  // Real brand facts (never invent beyond these)
  authorizedBrands: ['Sur-Ron', 'Stark Future', 'Talaria', 'STACYC', 'KTM'],
  sameAs: [], // add real social profile URLs when available
}

export const FORMS = {
  provider: 'web3forms', // web3forms (default, both targets) | resend (Vercel only, needs verified domain)
  web3formsKey: 'YOUR-WEB3FORMS-KEY', // pending — forms redirect to thank-you until set
  resendFrom: '',
  turnstileSiteKey: '',
  contactEmail: 'hello@volttrack.com',
  orderEmail: 'hello@volttrack.com',
}

export const CHAT = {
  channels: [
    { type: 'email', value: 'hello@volttrack.com' },
    { type: 'tawk', value: 'PROPERTY_ID/WIDGET_ID' }, // pending — paste Tawk.to property/widget ID
  ],
}

// ----------------------------------------------------------------------------
// HERO SLIDES (homepage slider). First slide carries the single <h1>.
// `image`: filename in /public/images/ (optional) — falls back to brand gradient.
// ----------------------------------------------------------------------------
export const HERO = [
  {
    eyebrow: "America's Electric Dirt Bike Experts",
    heading: 'The Best Electric Dirt Bikes in the USA',
    sub: 'Sur-Ron, Stark Future, Talaria, STACYC, KTM and more — with honest advice, fast US shipping and financing. Founded by riders, for riders.',
    ctaText: 'Shop All Bikes',
    ctaHref: '/shop/',
    cta2Text: 'Read the Buying Guides',
    cta2Href: '/guides/',
    image: 'homepage-hero.webp',
  },
  {
    eyebrow: 'Lightweight Legends',
    heading: 'Sur-Ron & Talaria, In Stock',
    sub: 'The bikes that started the movement. Light Bee X, Ultra Bee HP and the Talaria Sting range — trail-ready and endlessly upgradeable.',
    ctaText: 'Shop Sur-Ron',
    ctaHref: '/brands/sur-ron/',
    cta2Text: 'Sur-Ron vs Talaria',
    cta2Href: '/compare/sur-ron-vs-talaria/',
    image: 'adult-dirt-bike.webp',
  },
  {
    eyebrow: 'For Every Rider',
    heading: 'Youth & Kids Electric Dirt Bikes',
    sub: 'From a first STACYC to a KTM SX-E, age-appropriate power and ride modes that grow with your rider.',
    ctaText: 'Shop Youth & Kids',
    ctaHref: '/shop/youth-electric-dirt-bikes/',
    cta2Text: 'Best Bikes for Kids',
    cta2Href: '/guides/best-electric-dirt-bikes-for-kids/',
    image: 'beginners-guide.webp',
  },
  {
    eyebrow: 'Buy With Confidence',
    heading: 'Financing, Fast Shipping & Real Aftercare',
    sub: 'Pay in 4 on eligible bikes, free US shipping to the Lower 48, and genuine post-purchase support from people who actually ride.',
    ctaText: 'Start Shopping',
    ctaHref: '/shop/',
    cta2Text: 'About VoltTrack',
    cta2Href: '/about/',
    image: 'enduro.webp',
  },
]

// ----------------------------------------------------------------------------
// CATEGORIES (shop by rider/use)
// `image`: filename in /public/images/ (optional) — falls back to placeholder.
// `h1`: the page's primary keyword, used verbatim as the H1 (falls back to name).
// `metaDesc`: 150–160 chars — primary KW + brand signals + commercial CTA.
// ----------------------------------------------------------------------------
export const CATEGORIES = [
  {
    slug: 'adult-electric-dirt-bikes',
    name: 'Adult Electric Dirt Bikes',
    short: 'Full-performance electric dirt bikes for adult riders.',
    description:
      'Full-size, full-performance electric dirt bikes for adult riders — from trail-ready Sur-Ron builds to race-spec Stark and Talaria machines. Off-road use unless certified street-legal.',
    keyword: 'adult electric dirt bikes',
    image: 'adult-dirt-bike.webp',
  },
  {
    slug: 'youth-electric-dirt-bikes',
    name: 'Youth & Kids Electric Dirt Bikes',
    short: 'Age-appropriate electric dirt bikes for kids and teens.',
    description:
      'Right-sized electric dirt bikes for kids and teens, with adjustable power and ride modes for a safe way to learn. STACYC and Razor lead our youth lineup.',
    keyword: 'youth electric dirt bikes',
    image: 'youth-kids.webp',
  },
  {
    slug: 'electric-motocross-bikes',
    name: 'Electric Motocross Bikes',
    short: 'Race-ready electric motocross machines.',
    description:
      'Track-focused electric motocross bikes built for closed-course racing — high power, full suspension travel and competition geometry. Off-road / closed-course use only.',
    keyword: 'electric motocross bikes',
    image: 'motocross.webp',
  },
  {
    slug: 'electric-trail-bikes',
    name: 'Electric Trail Bikes',
    short: 'Trail and enduro electric bikes for the backcountry.',
    description:
      'Electric trail and enduro bikes tuned for range and rideability on OHV trails and private land. Some models offer street-legal certification — check each listing.',
    keyword: 'electric trail bikes',
    image: 'enduro.webp',
  },
  {
    slug: 'electric-pit-bikes',
    name: 'Electric Pit Bikes',
    short: 'Compact electric pit bikes for the yard and pit lane.',
    description:
      'Compact, playful electric pit bikes — perfect for the pit lane, the yard and newer riders building confidence. Off-road use only.',
    keyword: 'electric pit bikes',
    image: 'pit-bikes.webp',
  },
  {
    slug: 'cheap-electric-dirt-bikes',
    name: 'Cheap Electric Dirt Bikes',
    h1: 'Cheap Electric Dirt Bikes for Adults',
    metaDesc:
      'Cheap electric dirt bikes for adults and kids from $229 — Razor, STACYC, Altis, E-Ride Pro and Talaria. Real bikes, honest advice, free Lower 48 shipping.',
    short: 'Affordable electric dirt bikes that are still worth owning.',
    description:
      'Budget electric dirt bikes that we would actually recommend, from a $229 Razor Dirt Rocket to a sub-$3,500 Talaria. Cheap does not have to mean disposable: every bike here comes with a real warranty and parts availability. Spend less on the bike and put the difference into a helmet and protection. Off-road / OHV use only unless a street-legal path is stated on the listing.',
    keyword: 'cheap electric dirt bikes for adults',
    image: 'pit-bikes.webp',
  },
  {
    slug: 'street-legal-electric-bikes',
    name: 'Street Legal Electric Dirt Bikes',
    h1: 'Street Legal Electric Dirt Bikes',
    metaDesc:
      'Street legal electric dirt bikes with a real registration path — Sur-Ron L1e, Stark Varg EX and SM. Honest legality advice from an authorized US dealer.',
    short: 'Electric dirt bikes with a road-legal certification path.',
    description:
      'Electric dirt bikes with a route to street-legal registration in the US — from the L1e-homologated Sur-Ron Light Bee to the street-legal Stark Varg EX and SM. Street legality varies by state and requires the correct certification and registration; most electric dirt bikes remain off-road / OHV only. California riders: green-sticker / OHV rules under Vehicle Code Section 436.1 apply. Confirm your state DMV requirements with us before riding on public roads.',
    keyword: 'street legal electric dirt bike',
    image: 'enduro.webp',
  },
]

// ----------------------------------------------------------------------------
// BRANDS
// ----------------------------------------------------------------------------
// `h1`: brand hub primary keyword. `authorized`: true ONLY for the five brands
// VoltTrack is an authorized dealer for (see SITE.authorizedBrands). The others we
// carry — the hub copy must never claim authorized status for them.
export const BRANDS = [
  {
    slug: 'sur-ron', name: 'Sur-Ron', audience: 'adult', authorized: true,
    h1: 'Surron Electric Dirt Bikes',
    metaDesc:
      'Shop Sur-Ron electric dirt bikes — Light Bee X, Ultra Bee, Hyper Bee and Storm Bee. Authorized US dealer, free Lower 48 shipping and honest advice.',
    intro:
      'Sur-Ron is the brand that created the lightweight electric dirt bike category. The Light Bee X remains the reference point for a ~110 lb trail machine, while the Ultra Bee and Storm Bee move up to full-size chassis and serious power. Sur-Ron also has by far the deepest aftermarket of any brand we sell, which is why so many riders build on one for years.',
    faqs: [
      { q: 'Is a Sur-Ron street legal?', a: 'Most Sur-Ron models are sold for off-road, private-land and OHV use only and are not street legal. The Light Bee L1e is the exception, built for an L1e-category homologation path, but road legality still depends on your state’s registration rules. California riders follow Vehicle Code Section 436.1.' },
      { q: 'How fast does a Sur-Ron go?', a: 'It depends on the model: the Hyper Bee reaches around 50 mph, the Light Bee X around 47 mph, the Ultra Bee HP around 56 mph and the full-size Storm Bee around 68 mph. Every model has selectable ride modes that cap speed for newer riders.' },
      { q: 'Light Bee X or Ultra Bee — which should I buy?', a: 'Choose the Light Bee X for tight trails, easy transport and the deepest aftermarket. Choose the Ultra Bee HP if you want a full-size chassis, more suspension travel and more range for aggressive enduro riding. The Light Bee is the more forgiving first bike.' },
    ],
  },
  {
    slug: 'stark-future', name: 'Stark Future', titleName: 'Stark', audience: 'adult', authorized: true,
    h1: 'Stark Varg Electric Dirt Bikes',
    metaDesc:
      'Shop the Stark Varg MX, EX and SM — 60HP Standard or 80HP Alpha. Authorized US dealer for Stark Future, with financing and free Lower 48 shipping.',
    intro:
      'Stark Future builds the Varg, the electric motocross bike that matches and beats gas 450s on the track. Every Varg shares a 7.2 kWh battery, KYB suspension and Brembo brakes, with power configurable through the onboard display. The range splits three ways: the off-road MX, the street-legal EX enduro and the 17-inch SM supermoto.',
    faqs: [
      { q: 'How fast does the Stark Varg go?', a: 'Top speed depends on the gearing and model, with the SM supermoto the fastest of the three at around 80 mph. More relevant than top speed is the configurable power output — you can dial the bike between beginner-friendly and full race tune from the display.' },
      { q: 'Is the Stark Varg street legal?', a: 'The Varg EX and SM are built as street-legal enduro and supermoto machines, but road legality depends on final homologation and your state’s registration rules. The Varg MX is off-road only. Confirm your state DMV requirements with us before riding on public roads.' },
      { q: 'MX vs EX vs SM — what is the difference?', a: 'The MX is a pure off-road motocross bike with 21"/18" wheels. The EX is a street-legal enduro with lights and mirrors on the same wheel sizes. The SM is a supermoto on 17" spoked wheels for city and trail. All three use the same core Varg platform.' },
      { q: 'What does Alpha mean on a Stark Varg?', a: 'Alpha is the higher-spec variant of each Varg. It raises output to 80 HP from the Standard’s 60 HP and adds roughly 33% more battery capacity, updated wiring, a new inverter and a new motor. You select Standard or Alpha on the product page.' },
    ],
  },
  {
    slug: 'talaria', name: 'Talaria', audience: 'adult', authorized: true,
    h1: 'Talaria X3 & Sting Electric Dirt Bikes',
    metaDesc:
      'Shop Talaria electric dirt bikes — X3, X3 Pro, Sting MX3, MX4, MX5 Pro, XXX and Komodo. Authorized US dealer with free Lower 48 shipping.',
    intro:
      'Talaria is the closest direct rival to Sur-Ron and often the better value stock. The Sting range spans budget-friendly trail bikes to the track-focused XXX, while the X3 and X3 Pro bring a lighter, more modern chassis. At the top, the 96V Komodo is a genuine mid-weight enduro machine. Note that the X3 and the XXX are completely different bikes, not trim levels.',
    faqs: [
      { q: 'What is the fastest Talaria?', a: 'The Talaria Dragon is the fastest at around 70 mph, followed by the Komodo at around 66 mph. Within the Sting range, the XXX is the quickest at around 60 mph. The entry MX3 tops out near 47 mph.' },
      { q: 'Talaria or Sur-Ron — which should I buy?', a: 'Talaria usually gives you more bike for the money as it comes and has slightly roomier ergonomics. Sur-Ron has the deeper aftermarket and the stronger resale. If you plan heavy upgrades, lean Sur-Ron; if you want the most stock performance per dollar, lean Talaria.' },
      { q: 'Is the Talaria X3 street legal?', a: 'No. The X3 and X3 Pro are sold for off-road, private-land and OHV use only and are not street legal without specific state certification and registration. California riders should follow green-sticker / OHV rules under Vehicle Code Section 436.1.' },
      { q: 'What is the difference between the X3 and the XXX?', a: 'They are separate bikes, not variants. The X3 is a lighter trail chassis with a 40Ah battery distributed in the frame. The Sting XXX is Talaria’s aggressive track build with a frame-spine 60V battery and a higher top speed.' },
    ],
  },
  {
    slug: 'ktm', name: 'KTM', audience: 'adult', authorized: true,
    h1: 'KTM Electric Dirt Bikes',
    metaDesc:
      'Shop KTM electric dirt bikes — SX-E 2, SX-E 3, SX-E 5 youth motocross and the Freeride E-XC. Authorized US dealer, free Lower 48 shipping.',
    intro:
      'KTM’s electric range is built around youth motocross. The SX-E 2, SX-E 3 and SX-E 5 form a genuine progression from ages 3 through 12, each with adjustable seat height and selectable ride modes so a bike can grow with the rider rather than being outgrown in a season. The full-size Freeride E-XC is the adult trail machine in the range.',
    faqs: [
      { q: 'What electric KTM bikes are available?', a: 'The youth motocross line runs SX-E 2 (ages 3–6), SX-E 3 (ages 4–10) and SX-E 5 (ages 4–12), plus the adult Freeride E-XC trail bike. KTM also owns STACYC, which covers the younger balance-bike stage before the SX-E 2.' },
      { q: 'Is KTM the same as GasGas electric?', a: 'They are sister brands under the same group and share engineering and dealer networks. The GasGas MC-E 5 and KTM SX-E 5 are closely related machines with different bodywork and graphics. Choose on price, dealer support and which one your rider prefers the look of.' },
      { q: 'What age is the KTM SX-E 5 for?', a: 'The SX-E 5 suits riders roughly 4 to 12, thanks to an adjustable seat height and six selectable ride modes. It is a genuine competition-capable youth motocross bike rather than a toy, so it rewards a rider who is already confident on a balance or entry bike.' },
    ],
  },
  {
    slug: 'segway', name: 'Segway', audience: 'adult',
    h1: 'Segway Xaber 300 Electric Dirt Bike',
    metaDesc:
      'Shop the Segway Xaber 300 — 21kW, 60mph, Samsung battery and Marzocchi suspension. The replacement for the discontinued X260. Free Lower 48 shipping.',
    intro:
      'Segway Powersports entered the electric dirt bike market with the X160 and X260, both now discontinued. The 2026 Xaber 300 replaces them with a new chassis, a 72V Samsung 50S battery pack and Marzocchi suspension — a serious mid-weight machine rather than a lifestyle product. The Xyber and Xafari round out the range.',
    faqs: [
      { q: 'What replaced the Segway X260?', a: 'The Segway Xaber 300 replaces both the X260 and the smaller X160 for 2026. It brings a new chassis, a 72V/44Ah Samsung 50S battery and upgraded Marzocchi suspension with 220 mm of travel. The older models are no longer produced.' },
      { q: 'How fast is the Segway Xaber 300?', a: 'The Xaber 300 reaches around 60 mph from its 21 kW motor, with up to about 62 miles of range. That puts it squarely against mid-weight machines like the Sur-Ron Ultra Bee rather than the lighter Light Bee class.' },
      { q: 'What are the riding modes on the Xaber 300?', a: 'The Xaber 300 offers selectable ride modes that change power delivery and top speed, so you can soften the bike for a newer rider or technical terrain and open it up on faster trails. Contact us for the exact mode configuration on current US stock.' },
    ],
  },
  {
    slug: 'zero', name: 'Zero Motorcycles', titleName: 'Zero', audience: 'adult',
    h1: 'Zero Electric Dirt Bikes',
    metaDesc:
      'Shop Zero electric dirt bikes — the 2026 XB and XE trail models and the FX dual-sport. US-designed electric motorcycles, free Lower 48 shipping.',
    intro:
      'Zero Motorcycles is the established American electric motorcycle manufacturer, and for 2026 it has returned to dirt with the XB and XE. The XB is the lightest Zero and the natural entry point; the XE steps up to a 4.3 kWh pack and full 21"/18" wheels for real trail and dual-sport duty. The FX sits above both as the premium dual-sport.',
    faqs: [
      { q: 'Zero XB or XE — which should I buy?', a: 'The XB is the lighter and cheaper of the two at $5,095, running 19-inch wheels and aimed at trail riding. The XE steps up to $7,395 with a 4.3 kWh battery, 21"/18" wheels and around 65 miles of range, making it the better choice for longer days and rougher terrain.' },
      { q: 'Is the Zero FX street legal?', a: 'The FX is built as a dual-sport, but street legality still depends on the specific configuration and your state’s registration requirements. Never assume a dual-sport badge means road-legal everywhere — confirm your state DMV rules with us before riding on public roads.' },
      { q: 'How does Zero compare to Sur-Ron?', a: 'Zero builds full motorcycles with a long US track record and dealer support; Sur-Ron builds lightweight, highly upgradeable machines with a much deeper aftermarket. Zero costs more and feels more like a conventional motorcycle. Sur-Ron is lighter, cheaper and easier to modify.' },
    ],
  },
  {
    slug: 'altis', name: 'Altis', audience: 'adult',
    h1: 'Altis Sigma MX Electric Dirt Bikes',
    metaDesc:
      'Shop Altis Powersports electric dirt bikes — the 98V Sigma and Sigma MX, plus the Delta pit bike. 70–80+ mph performance. Free Lower 48 shipping.',
    intro:
      'Altis Powersports builds some of the highest-voltage machines in the lightweight class. The Sigma runs a 98V Samsung 50S pack and 22–25 kW for genuine 70–80+ mph performance at a price that undercuts the established names, offered in Standard 19"/19" and MX 19"/16" wheel setups. The Delta is the smaller pit bike below it.',
    faqs: [
      { q: 'How fast does the Altis Sigma go?', a: 'The Altis Sigma reaches 70–80+ mph depending on variant, gearing and rider weight, driven by a 98V/35Ah Samsung 50S pack and 22–25 kW output. That makes it one of the fastest bikes in its price class and firmly an experienced-rider machine.' },
      { q: 'Altis Sigma or Sur-Ron Ultra Bee?', a: 'The Sigma runs a higher-voltage 98V system and is faster on paper than the 74V Ultra Bee. The Sur-Ron has the far deeper aftermarket, wider dealer support and stronger resale. Choose the Sigma for outright performance per dollar, the Ultra Bee for the ecosystem.' },
      { q: 'What is the Altis Delta?', a: 'The Delta is Altis’s smaller machine — a 72V, 13 kW pit bike reaching around 62 mph, aimed at riders 14 and up. It is a step below the Sigma in size and power and a good option for the yard, pit lane and newer riders.' },
    ],
  },
  {
    slug: 'e-ride-pro', name: 'E-Ride Pro', audience: 'adult',
    h1: 'E Ride Pro Electric Dirt Bikes',
    metaDesc:
      'Shop E-Ride Pro electric dirt bikes — Mini, S, SS 3.0 and the 70mph SR. Full-size performance that undercuts the big names. Free Lower 48 shipping.',
    intro:
      'E-Ride Pro is the value play in full-size electric dirt bikes. The SS delivers 72V, 12 kW and 60 mph for well under what the established brands charge, the SR pushes to 25 kW and around 100 miles of range, and the Mini covers the pit bike end. You give up some aftermarket depth and resale strength; you get a lot more bike for the money.',
    faqs: [
      { q: 'E-Ride Pro SS 2.0 or SS 3.0 — which is better?', a: 'Both share the same 72V/40Ah battery, 12 kW motor and 60 mph top speed. The current SS 3.0 adds Bluetooth ride-mode tuning and upgraded brakes for $300 more. If discounted SS 2.0 stock is still available and you do not need the tuning app, it remains good value.' },
      { q: 'E-Ride Pro or Sur-Ron Light Bee X?', a: 'The E-Ride Pro SS is larger, faster on paper and cheaper than the Light Bee X. The Sur-Ron is lighter, more nimble on tight trails, and has a far deeper aftermarket and better resale. Choose the E-Ride Pro for value and speed, the Sur-Ron for the ecosystem.' },
      { q: 'How fast does the E-Ride Pro SR go?', a: 'The SR reaches roughly 62–70 mph from its 72V/50Ah pack and 25 kW motor, with up to around 100 miles of range and Bluetooth tuning. It is the flagship of the range and suits experienced adult riders 18 and over.' },
    ],
  },
  {
    slug: 'stacyc', name: 'STACYC', audience: 'youth', authorized: true,
    h1: 'STACYC Bikes',
    metaDesc:
      'Shop STACYC electric balance bikes — 12eDRIVE, 16eDRIVE, 18eDRIVE and 20eDRIVE. The best first electric bike for ages 3–10. Authorized US dealer.',
    intro:
      'STACYC invented the electric balance bike category and is now owned by KTM. The range runs 12eDRIVE through 20eDRIVE, covering roughly ages 3 to 10, and every model uses the same quick-swap 20V battery with three power modes. A spare battery is the single best accessory you can buy — it doubles ride time and ends the session on your terms, not the battery’s.',
    faqs: [
      { q: 'What age is the STACYC 12eDRIVE for?', a: 'The 12eDRIVE suits children roughly 3 to 5 years old. At around 17 lb with a low seat height and three power modes topping out near 7.5 mph, it lets a young child learn balance and throttle control safely with adult supervision.' },
      { q: 'What is the difference between the STACYC 12, 16, 18 and 20?', a: 'They step up in wheel size, seat height and speed: 12eDRIVE for ages 3–5 (~7.5 mph), 16eDRIVE for 4–7 with a brushless motor (~9 mph), 18eDRIVE for 5–8 (13 mph) and 20eDRIVE for 6–10 (17 mph). Pick by the rider’s size and confidence, not just age.' },
      { q: 'Does a STACYC have a speed limiter?', a: 'Yes. Every STACYC has three selectable power modes, so a parent can limit speed for a first-time rider and open it up as the child progresses. This is what lets one bike stay useful across a couple of years rather than a single season.' },
      { q: 'Can you use Milwaukee batteries on a STACYC?', a: 'Aftermarket adapters for Milwaukee M18, DeWalt 20V and Makita 18V packs exist at around $75–$80. Be aware that they void the STACYC manufacturer warranty on electrical components, are limited to 5Ah batteries, and are not official STACYC products.' },
    ],
  },
  {
    slug: 'razor', name: 'Razor', audience: 'youth',
    h1: 'Razor Electric Dirt Bikes',
    metaDesc:
      'Shop Razor Dirt Rocket electric dirt bikes — MX125, MX350, MX500 and MX650, from $229. The most affordable way to start riding. Free Lower 48 shipping.',
    intro:
      'Razor’s Dirt Rocket range is where a huge number of riders start, and for good reason: an MX125 costs $229 and an MX650 still lands under $600. These are simple, sealed-lead-acid machines rather than lithium performance bikes, with modest speeds and run times, but for a first taste of off-road riding at this price nothing else comes close.',
    faqs: [
      { q: 'Which Razor electric dirt bike is best for my child?', a: 'Match it to age and size: the MX125 for ages 7–10 (8 mph), MX350 for 10–13 (14 mph), MX500 for 13–16 (15 mph, dual suspension) and MX650 for 16+ (17 mph, 220 lb limit). The MX350 is the most popular for a reason — it fits the widest range of kids.' },
      { q: 'How long does a Razor MX650 battery last?', a: 'Expect around 40 minutes of continuous ride time from the 36V sealed lead-acid pack, less with heavier riders or hilly terrain. Charge it fully after every ride and never store it flat — SLA batteries are damaged by sitting discharged.' },
      { q: 'Is there a difference between the Razor MX350 and MX400?', a: 'They are effectively the same bike. The MX400 is a colour and trim variation on the MX350 platform with the same 24V system and performance, so we list the MX350 and can source the MX400 finish on request.' },
    ],
  },
  {
    slug: 'gasgas', name: 'GasGas', audience: 'youth',
    h1: 'GasGas E Bike — Electric Dirt Bikes',
    metaDesc:
      'Shop GasGas electric dirt bikes — the MC-E 2 for ages 3–7 and the 5kW MC-E 5 for ages 4–12. Austrian-built youth motocross. Free Lower 48 shipping.',
    intro:
      'GasGas sits alongside KTM in the same Austrian group, and its electric range is youth motocross: the MC-E 2 for the youngest riders and the water-cooled MC-E 5 for kids ready to race. They share engineering with the KTM SX-E bikes, so you are choosing between them on price, availability and which one your rider wants to be seen on. We list the electric models only.',
    faqs: [
      { q: 'Is GasGas the same as KTM?', a: 'They are sister brands in the same Austrian group and share engineering and dealer networks. The MC-E 5 and KTM SX-E 5 are closely related machines with different bodywork and graphics rather than fundamentally different bikes.' },
      { q: 'What age is the GasGas MC-E 5 for?', a: 'The MC-E 5 suits riders roughly 4 to 12. Its 5 kW water-cooled motor, 2025-generation frame and adjustable settings make it a genuine competition-capable youth motocross bike, best suited to a rider who is already confident on a smaller machine.' },
      { q: 'How does the MC-E 5 compare to the KTM SX-E 5?', a: 'Very closely — same group, same core engineering, same 5 kW water-cooled platform and the same $5,449 price. The meaningful differences are bodywork, graphics and colour. Buy whichever has better availability when you order, or whichever your rider prefers.' },
    ],
  },
]

// ----------------------------------------------------------------------------
// PRODUCTS (real names + prices carried over from the source site)
// images: [] → placeholder generated. First image is primary.
// ----------------------------------------------------------------------------
// Product fields: slug · name · h1 (primary KW, defaults to name) · price (USD;
// for variant products = default/first variant) · brand · category · tags[] (extra
// category memberships e.g. 'street-legal') · badge · images[] · variants[] · specs ·
// faqs[] (FAQPage) · metaDesc · availNote. Prices reconciled to the July 2026 price doc.
export const PRODUCTS = [
  // ---- SUR-RON ----
  { slug: 'sur-ron-light-bee-x', name: 'Sur-Ron Light Bee X 2026', titleName: 'Light Bee X', h1: 'Surron Light Bee X', price: 4999, brand: 'sur-ron', category: 'adult-electric-dirt-bikes', badge: 'Bestseller', images: [], specs: { power: '10 kW peak', topSpeed: '47 mph', range: '40 mi', weight: '110 lb', battery: '72V 35Ah', modes: '4', roadLegal: 'No (off-road / OHV)', age: '14+' },
    metaDesc: 'Buy the Sur-Ron Light Bee X for $4,999. 10kW, 72V/35Ah, 47mph and just 110lb — the original lightweight legend. Free US shipping from an authorized dealer.',
    short: 'The bike that started the electric dirt movement — light, torquey and endlessly upgradeable.',
    description: 'The Sur-Ron Light Bee X is the definitive lightweight electric dirt bike: around 110 lb, a punchy mid-drive motor and a removable battery. Ideal for trails, single-track and pit duty. Off-road use only unless certified street-legal in your state.' },
  { slug: 'sur-ron-ultra-bee-hp', name: 'Sur-Ron Ultra Bee HP 2026', titleName: 'Ultra Bee HP', h1: 'Surron Ultra Bee', price: 6499, brand: 'sur-ron', category: 'adult-electric-dirt-bikes', badge: 'Flagship', images: [], specs: { power: '21 kW peak', topSpeed: '56 mph', range: '55 mi', weight: '187 lb', battery: '74V 60Ah', modes: '4', roadLegal: 'No (off-road / OHV)', age: '16+' },
    metaDesc: 'Buy the Sur-Ron Ultra Bee HP for $6,499. 21kW HairPin motor, 74V/60Ah, 56mph and 55mi range. Full-size power. Free US shipping, authorized US dealer.',
    short: 'Sur-Ron’s full-size flagship — HairPin motor, more power, more range.',
    description: 'The Ultra Bee HP steps up to a full-size chassis, a 21 kW HairPin motor and long-travel suspension for aggressive trail and enduro riding. A genuine step between the Light Bee and full motocross machines.' },
  { slug: 'sur-ron-hyper-bee', name: 'Sur-Ron Hyper Bee', h1: 'Surron Hyper Bee', price: 3699, brand: 'sur-ron', category: 'adult-electric-dirt-bikes', badge: 'Lightest Sur-Ron', images: [], specs: { power: '8 kW peak', topSpeed: '50 mph', range: '50 mi', weight: '86 lb', battery: '58V 22.5Ah', modes: '4', roadLegal: 'No (off-road / OHV)', age: '12+' },
    metaDesc: 'Buy the Sur-Ron Hyper Bee for $3,699. 8kW, 58V, 50mph and just 86lb — the lightest Sur-Ron made. Free US shipping from an authorized US dealer.',
    short: 'The lightest Sur-Ron — 86 lb of nimble, approachable trail fun for lighter and growing riders.',
    description: 'The Sur-Ron Hyper Bee is the lightest bike in the Sur-Ron range at just 86 lb, pairing an 8 kW motor with a compact 58V battery. Its low weight and approachable power make it ideal for lighter adults, teens and riders stepping up from a first bike. Off-road / OHV use only unless certified street-legal in your state.',
    faqs: [
      { q: 'How fast does the Sur-Ron Hyper Bee go?', a: 'The Sur-Ron Hyper Bee has a top speed of around 50 mph in its highest ride mode. Lower ride modes cap the speed for newer or lighter riders, so the bike can grow with the rider as their confidence and skill increase.' },
      { q: 'Is the Sur-Ron Hyper Bee street legal?', a: 'No. The Hyper Bee is sold for off-road, private-land and OHV use only and is not street legal without specific state certification and registration. California riders must follow green-sticker / OHV rules under Vehicle Code Section 436.1.' },
      { q: 'Who is the Hyper Bee best for?', a: 'At 86 lb it is the lightest Sur-Ron, so it suits lighter adults, teens (roughly 12+ with supervision) and riders moving up from a first electric bike. Its manageable weight makes it easier to handle on tight trails than a full-size Sur-Ron.' },
    ] },
  { slug: 'sur-ron-storm-bee', name: 'Sur-Ron Storm Bee', h1: 'Surron Storm Bee', price: 8499, brand: 'sur-ron', category: 'electric-motocross-bikes', badge: 'Full-size MX', images: [], specs: { power: '22.5 kW peak', topSpeed: '68 mph', range: '75 mi', weight: '265 lb', battery: '84V 55Ah', modes: '3', roadLegal: 'No (closed-course)', age: '18+' },
    metaDesc: 'Buy the Sur-Ron Storm Bee for $8,499. 22.5kW, 84V/55Ah and 68mph of full-size electric motocross. Free US shipping from an authorized US dealer.',
    short: 'Sur-Ron’s full-size electric motocross machine — 22.5 kW and 68 mph of closed-course power.',
    description: 'The Sur-Ron Storm Bee is a full-size electric motocross bike with a 22.5 kW motor, 84V battery and a top speed of around 68 mph. Full suspension travel and race geometry make it a true full-size MX machine for closed-course and off-road riding only.',
    availNote: 'Contact us to confirm current US Storm Bee stock and lead time before ordering.',
    faqs: [
      { q: 'How fast is the Sur-Ron Storm Bee?', a: 'The Sur-Ron Storm Bee reaches around 68 mph, making it one of the fastest bikes in the Sur-Ron lineup. It is a full-size machine built for experienced adult riders on closed courses and off-road terrain, not a lightweight trail bike.' },
      { q: 'Is the Storm Bee a full-size dirt bike?', a: 'Yes. Unlike the lightweight Light Bee and Hyper Bee, the Storm Bee is a full-size electric motocross bike weighing around 265 lb, with full suspension travel and a tall seat height suited to adult riders 18+.' },
      { q: 'Is the Sur-Ron Storm Bee street legal?', a: 'No. The Storm Bee is built for closed-course and off-road use only and is not street legal. Ride it on private land or designated OHV areas with the correct registration; California riders should follow Vehicle Code Section 436.1.' },
    ] },
  { slug: 'sur-ron-ultra-bee-mx', name: 'Sur-Ron Ultra Bee MX 2026', titleName: 'Ultra Bee MX', h1: 'Sur Ron Ultra Bee MX', price: 6799, brand: 'sur-ron', category: 'electric-motocross-bikes', badge: '', images: [], specs: { power: '21 kW peak', topSpeed: '56 mph', range: '55 mi', weight: '185 lb', battery: '74V 60Ah', modes: '4', roadLegal: 'No (closed-course)', age: '16+' },
    metaDesc: 'Buy the Sur-Ron Ultra Bee MX for $6,799. 21kW, 74V/60Ah and 56mph in a pure closed-course motocross build. Free US shipping from an authorized dealer.',
    short: 'Motocross-focused Ultra Bee build.',
    description: 'The Ultra Bee MX trims the road-oriented equipment for a purer closed-course setup — the same strong 21 kW motor and suspension, tuned for the track.' },
  { slug: 'sur-ron-light-bee-l1e', name: 'Sur-Ron Light Bee L1e', titleName: 'Light Bee L1e', h1: 'Surron Light Bee L1e', price: 4500, brand: 'sur-ron', category: 'electric-trail-bikes', tags: ['street-legal-electric-bikes'], badge: 'Street-legal path', images: [], specs: { power: '6 kW peak', topSpeed: '28 mph (L1e limited)', range: '40 mi', weight: '112 lb', battery: '60V 38.5Ah', modes: '3', roadLegal: 'Yes (L1e path — state dependent)', age: '16+' },
    metaDesc: 'Buy the Sur-Ron Light Bee L1e for $4,500. The L1e-homologated Light Bee with lights, mirrors and a street-legal path. State rules vary — ask us first.',
    short: 'The L1e-homologated Light Bee for road-legal certification paths.',
    description: 'The Sur-Ron Light Bee L1e is prepared for L1e-category homologation, offering a route toward street-legal registration with lights, mirrors and a pedal kit. Road legality varies by US state — confirm your DMV requirements with us before road use.' },
  // ---- TALARIA ----
  { slug: 'talaria-sting-r-mx4', name: 'Talaria Sting R MX4', h1: 'Talaria Sting R', price: 3735, brand: 'talaria', category: 'adult-electric-dirt-bikes', badge: 'Popular', images: [], specs: { power: '8 kW peak', topSpeed: '53 mph', range: '50 mi', weight: '128 lb', battery: '60V 45Ah', modes: '4', roadLegal: 'No (off-road / OHV)', age: '14+' },
    metaDesc: 'Buy the Talaria Sting R MX4 for $3,735. 8kW, 60V/45Ah and 53mph — the strongest Sur-Ron alternative at the price. Free US shipping, authorized dealer.',
    short: 'Talaria’s upgraded Sting R — a strong Sur-Ron alternative.',
    description: 'The Talaria Sting R MX4 offers full-size feel, strong low-end torque and a comfortable trail setup at a competitive price — a favorite alternative to the Sur-Ron Light Bee.' },
  { slug: 'talaria-sting-mx5-pro', name: 'Talaria Sting MX5 Pro', titleName: 'Sting MX5 Pro', h1: 'Talaria MX5', price: 4800, brand: 'talaria', category: 'adult-electric-dirt-bikes', badge: '', images: [], specs: { power: '8 kW peak', topSpeed: '55 mph', range: '55 mi', weight: '130 lb', battery: '72V 40Ah Samsung 50S', modes: '4', roadLegal: 'No (off-road / OHV)', age: '16+' },
    metaDesc: 'Buy the Talaria Sting MX5 Pro for $4,800. 72V/40Ah Samsung 50S cells, 55mph and refined power delivery. Free US shipping from an authorized US dealer.',
    short: 'Refined Sting with a 72V Samsung pack and improved power delivery.',
    description: 'The Sting MX5 Pro refines Talaria’s formula with a 72V/40Ah Samsung 50S pack, updated ergonomics and smoother, more controllable power — well suited to trail and light enduro riding.' },
  { slug: 'talaria-sting-xxx', name: 'Talaria Sting XXX', h1: 'Talaria XXX Pro', price: 6649, brand: 'talaria', category: 'electric-motocross-bikes', badge: '', images: [], specs: { power: '10.5 kW peak', topSpeed: '60 mph', range: '55 mi', weight: '132 lb', battery: '60V frame-spine', modes: '4', roadLegal: 'No (closed-course)', age: '16+' },
    metaDesc: 'Buy the Talaria Sting XXX for $6,649. Frame-spine 60V battery, 10.5kW and 60mph — Talaria at its most aggressive. Free US shipping, authorized dealer.',
    short: 'The most aggressive Sting for track-focused riders.',
    description: 'The Sting XXX is Talaria’s most aggressive build with a frame-spine 60V battery, aimed at riders who want maximum performance for closed-course use.' },
  { slug: 'talaria-sting-mx3', name: 'Talaria Sting MX3', h1: 'Talaria MX3', price: 3390, brand: 'talaria', category: 'adult-electric-dirt-bikes', tags: ['cheap-electric-dirt-bikes'], badge: 'Value', images: [], specs: { power: '6 kW peak', topSpeed: '47 mph', range: '40 mi', weight: '110 lb', battery: '60V 38.4Ah', modes: '4', roadLegal: 'No (off-road / OHV)', age: '14+' },
    metaDesc: 'Buy the Talaria Sting MX3 for $3,390. 6kW, 60V/38.4Ah and 47mph — the best-value way into the Talaria range. Free US shipping, authorized US dealer.',
    short: 'An accessible, value-focused entry into the Talaria range.',
    description: 'The Sting MX3 is an approachable, value-focused electric dirt bike with a 60V/38.4Ah pack — ideal for newer and lighter riders getting started off-road.' },
  { slug: 'talaria-komodo', name: 'Talaria Komodo (TL6000)', titleName: 'Talaria Komodo', h1: 'Talaria Komodo', price: 5999, brand: 'talaria', category: 'electric-trail-bikes', badge: 'New', images: [], specs: { power: '32 kW peak', topSpeed: '66 mph', range: '70 mi', weight: '203 lb', battery: '96V 45Ah', modes: '4', roadLegal: 'No (off-road / OHV)', age: '16+' },
    metaDesc: 'Buy the Talaria Komodo (TL6000) for $5,999. 32kW, 96V/45Ah, 66mph and 70mi of range from Talaria’s enduro flagship. Free US shipping, authorized dealer.',
    short: 'Talaria’s 96V enduro flagship — 32 kW, 66 mph and a genuine 70-mile range.',
    description: 'The Talaria Komodo (TL6000) is Talaria’s high-performance enduro machine, pairing a 96V/45Ah battery with a 32 kW motor for a 66 mph top speed and up to 70 miles of range. It slots between the lightweight Stings and full-size machines as a serious mid-weight all-rounder. Off-road / OHV use only.',
    faqs: [
      { q: 'How fast is the Talaria Komodo?', a: 'The Talaria Komodo (TL6000) reaches around 66 mph thanks to its 32 kW motor and 96V battery system. It is significantly more powerful than the Talaria Sting range and competes with mid-weight machines like the Sur-Ron Ultra Bee.' },
      { q: 'What is the range of the Talaria Komodo?', a: 'The Komodo offers up to around 70 miles of range from its 96V/45Ah battery, depending on ride mode, terrain and rider weight. That makes it one of the longer-range electric dirt bikes in its class for trail and enduro riding.' },
      { q: 'Is the Talaria Komodo street legal?', a: 'No. The Komodo is sold for off-road, private-land and OHV use only and is not street legal without specific state certification. California riders should follow green-sticker / OHV rules under Vehicle Code Section 436.1.' },
    ] },
  { slug: 'talaria-x3-pro', name: 'Talaria X3 Pro', h1: 'Talaria X3 Pro', price: 5299, brand: 'talaria', category: 'adult-electric-dirt-bikes', badge: 'New', images: [], specs: { power: '8 kW peak', topSpeed: '53 mph', range: '50 mi', weight: '128 lb', battery: '60V 45Ah', modes: '4', roadLegal: 'No (off-road / OHV)', age: '14+' },
    metaDesc: 'Buy the Talaria X3 Pro for $5,299. Lightweight trail chassis, upgraded suspension and 53mph in the top ride mode. Free US shipping, authorized US dealer.',
    short: 'The performance-tuned Talaria X3 — a lightweight trail bike with upgraded running gear.',
    description: 'The Talaria X3 Pro is the performance version of Talaria’s popular X3, adding upgraded suspension and running gear to a lightweight trail chassis. It stays nimble and approachable while adding capability for faster trail and enduro riding. Off-road / OHV use only. (The X3 Pro is a different bike from the Talaria XXX.)',
    faqs: [
      { q: 'How fast does the Talaria X3 Pro go?', a: 'The Talaria X3 Pro reaches around 53 mph in its highest ride mode. Selectable ride modes let you cap the speed and power for newer or lighter riders, so the bike can grow with the rider over time.' },
      { q: 'What is the difference between the Talaria X3 and X3 Pro?', a: 'The X3 Pro builds on the standard X3 with upgraded suspension and running gear for faster, more capable trail and enduro riding, while keeping the lightweight, approachable X3 chassis. Both are separate bikes from the Talaria XXX.' },
      { q: 'Is the Talaria X3 Pro street legal?', a: 'No. The X3 Pro is sold for off-road, private-land and OHV use only and is not street legal without specific state certification and registration. California riders should follow Vehicle Code Section 436.1.' },
    ] },
  // ---- STARK FUTURE (variant pages) ----
  { slug: 'stark-varg-ex', name: 'Stark Varg EX', h1: 'Stark Varg EX', price: 12900, brand: 'stark-future', category: 'electric-trail-bikes', tags: ['street-legal-electric-bikes'], badge: 'Street-legal enduro', images: [],
    metaDesc: 'Buy the Stark Varg EX from $12,900. Street-legal enduro with 60HP Standard or 80HP Alpha, KYB suspension and Brembo brakes. Authorized Stark Future dealer.',
    variants: [
      { id: 'standard', label: 'Standard (60HP)', price: 12900, specs: { power: '60 HP', battery: '7.2 kWh' } },
      { id: 'alpha', label: 'Alpha (80HP)', price: 13900, specs: { power: '80 HP', battery: '7.2 kWh + 33% capacity' } },
    ],
    specs: { power: '60–80 HP (configurable)', topSpeed: '~75 mph', range: 'Up to ~6 hrs riding', weight: '265 lb', battery: '7.2 kWh (Alpha: +33%)', modes: 'App-configurable', roadLegal: 'Yes (street-legal enduro — state dependent)', age: '18+' },
    short: 'The street-legal enduro Varg — 21"/18" wheels, lights and mirrors, 60 or 80 HP.',
    description: 'The Stark Varg EX is the street-legal enduro version of the Varg platform, with 21"/18" wheels, lights and mirrors. Choose the 60 HP Standard or the 80 HP Alpha, which adds a higher power tune, 33% more battery, updated wiring and a new inverter and motor. Street legality depends on final certification and your state — confirm before road use.',
    faqs: [
      { q: 'What is the difference between the Stark Varg EX Standard and Alpha?', a: 'The Standard produces up to 60 HP, while the Alpha steps up to 80 HP and adds roughly 33% more battery capacity, updated wiring, a new inverter and a new motor. Both share the same 7.2 kWh-class platform, KYB suspension and Brembo brakes.' },
      { q: 'Is the Stark Varg EX street legal?', a: 'The Varg EX is built as a street-legal enduro with lights and mirrors, but road legality depends on final homologation and your US state’s registration rules. Confirm your state DMV requirements with us before riding on public roads.' },
      { q: 'How does the EX differ from the Varg MX and SM?', a: 'The MX is an off-road-only motocross bike, the EX is a street-legal enduro with 21"/18" wheels, and the SM is a supermoto with 17" spoked wheels for city and trail. All three share the same core Varg platform.' },
    ] },
  { slug: 'stark-varg-sm', name: 'Stark Varg SM', h1: 'Stark Varg SM', price: 12900, brand: 'stark-future', category: 'electric-trail-bikes', tags: ['street-legal-electric-bikes'], badge: 'Supermoto', images: [],
    metaDesc: 'Buy the Stark Varg SM from $12,900. The 17-inch supermoto Varg in 60HP Standard or 80HP Alpha, for city and trail. Authorized US Stark Future dealer.',
    variants: [
      { id: 'standard', label: 'Standard (60HP)', price: 12900, specs: { power: '60 HP', battery: '7.2 kWh' } },
      { id: 'alpha', label: 'Alpha (80HP)', price: 13900, specs: { power: '80 HP', battery: '7.2 kWh + 33% capacity' } },
    ],
    specs: { power: '60–80 HP (configurable)', topSpeed: '~80 mph', range: 'Up to ~6 hrs riding', weight: '265 lb', battery: '7.2 kWh (Alpha: +33%)', modes: 'App-configurable', roadLegal: 'Yes (supermoto — state dependent)', age: '18+' },
    short: 'The supermoto Varg — 17" spoked wheels for city and trail, 60 or 80 HP.',
    description: 'The Stark Varg SM brings a 17" spoked wheelset and supermoto setup to the Varg platform for city and trail riding. Choose the 60 HP Standard or the 80 HP Alpha with more power and battery. Street legality depends on final certification and your state — confirm before road use.',
    faqs: [
      { q: 'What is the Stark Varg SM?', a: 'The Stark Varg SM is the supermoto version of the Stark Varg, with 17" spoked wheels and street-oriented setup for city and trail riding. It shares the Varg platform, KYB suspension and Brembo brakes with the MX and EX.' },
      { q: 'What is the difference between the SM Standard and Alpha?', a: 'The Standard makes up to 60 HP; the Alpha steps up to 80 HP with roughly 33% more battery, updated wiring, a new inverter and a new motor. The URL and page stay the same — you select the variant on this page.' },
      { q: 'Is the Stark Varg SM street legal?', a: 'The SM is built as a street-legal supermoto, but road legality depends on final homologation and your US state’s registration rules. Confirm your state DMV requirements with us before riding on public roads.' },
    ] },
  // ---- KTM ----
  { slug: 'ktm-sx-e-5', name: 'KTM SX-E 5 2026', h1: 'KTM E5', price: 5449, brand: 'ktm', category: 'youth-electric-dirt-bikes', badge: '', images: [], specs: { power: '5 kW (water-cooled)', topSpeed: 'Adjustable', range: '~2 hrs', weight: '87 lb', battery: '907 Wh', modes: '6', roadLegal: 'No (closed-course)', age: '4–12' },
    metaDesc: 'Buy the KTM SX-E 5 for $5,449. A 5kW water-cooled youth motocross bike with a new 2025 frame, for ages 4–12. Authorized US KTM dealer, free shipping.',
    short: 'KTM’s premium youth electric motocross bike.',
    description: 'The KTM SX-E 5 is a factory-quality youth electric motocross bike with a 5 kW water-cooled motor, a new 2025-generation frame, adjustable seat height and six selectable ride modes to grow with the rider.' },
  { slug: 'ktm-sx-e-2', name: 'KTM SX-E 2 2025', h1: 'KTM E2', price: 2249, brand: 'ktm', category: 'youth-electric-dirt-bikes', tags: ['cheap-electric-dirt-bikes'], badge: 'Entry', images: [], specs: { power: '1.8 kW hub motor', topSpeed: 'Adjustable', range: '~100 min', weight: '70 lb', battery: 'Integrated', modes: '3', roadLegal: 'No (closed-course)', age: '3–6' },
    metaDesc: 'Buy the KTM SX-E 2 for $2,249. A 1.8kW first motocross bike for ages 3–6, with an adjustable 470–500mm seat. Authorized US KTM dealer, free shipping.',
    short: 'A first real KTM for the youngest riders.',
    description: 'The KTM SX-E 2 is a right-sized first electric motocross bike for young riders (ages 3–6), with a 1.8 kW hub motor, an adjustable 470–500 mm seat height and easy, adjustable power.' },
  // ---- STACYC ----
  { slug: 'stacyc-12e-drive', name: 'STACYC 12eDRIVE', h1: 'STACYC 12', price: 649, brand: 'stacyc', category: 'youth-electric-dirt-bikes', badge: 'Ages 3–5', images: [], specs: { power: '20V drive', topSpeed: '~7.5 mph', range: '30–60 min', weight: '17 lb', battery: '20V Li-ion (quick-swap)', modes: '3', roadLegal: 'No (off-road)', age: '3–5' },
    metaDesc: 'Buy the STACYC 12eDRIVE for $649. A 17lb electric balance bike with three power modes for ages 3–5. Authorized US STACYC dealer, free Lower 48 shipping.',
    short: 'The perfect first electric balance bike — 17 lb, 3 power modes, for ages 3–5.',
    description: 'The STACYC 12eDRIVE is the smallest STACYC, a lightweight 17 lb electric balance bike with three power modes and a quick-swap 20V battery. It is the ideal first electric dirt bike for kids aged 3–5 learning balance and throttle control. Off-road use only, with adult supervision.',
    faqs: [
      { q: 'What age is the STACYC 12eDRIVE for?', a: 'The STACYC 12eDRIVE is designed for children roughly 3–5 years old. At just 17 lb with a low seat height and three selectable power modes, it lets young kids learn balance and throttle control safely with adult supervision.' },
      { q: 'How fast does the STACYC 12eDRIVE go?', a: 'The 12eDRIVE has three power modes with a top speed of around 7.5 mph in the highest mode. Parents can start in the lowest mode to keep speed gentle for first-time riders and increase it as the child’s confidence grows.' },
      { q: 'How long does the STACYC 12eDRIVE battery last?', a: 'Expect roughly 30–60 minutes of ride time per charge from the 20V lithium battery, depending on power mode and terrain. The battery is quick-swap, so a spare pack lets your child keep riding while one charges.' },
    ] },
  { slug: 'stacyc-16e-drive', name: 'STACYC 16eDRIVE Brushless', titleName: 'STACYC 16eDRIVE', h1: 'STACYC 16', price: 899, brand: 'stacyc', category: 'youth-electric-dirt-bikes', badge: 'Ages 4–7', images: [], specs: { power: '20V brushless', topSpeed: '~9 mph', range: '30–60 min', weight: '19 lb', battery: '20V Li-ion (quick-swap)', modes: '3', roadLegal: 'No (off-road)', age: '4–7' },
    metaDesc: 'Buy the STACYC 16eDRIVE Brushless for $899. A brushless-motor balance bike with three modes for ages 4–7. Authorized US STACYC dealer, free shipping.',
    short: 'The brushless-motor STACYC — a larger, faster balance bike for ages 4–7.',
    description: 'The STACYC 16eDRIVE Brushless steps up from the 12eDRIVE with a larger frame, a more efficient brushless motor and slightly higher speed for kids aged 4–7. Three power modes and a quick-swap 20V battery make it a confidence-building second bike. Off-road use only, with adult supervision.',
    faqs: [
      { q: 'What age is the STACYC 16eDRIVE for?', a: 'The STACYC 16eDRIVE Brushless suits children roughly 4–7 years old. Its larger 16-inch frame and brushless motor make it a natural step up from the 12eDRIVE for kids who have outgrown their first balance bike.' },
      { q: 'What is the difference between the STACYC 12 and 16eDRIVE?', a: 'The 16eDRIVE has a larger frame, a taller seat height and a more efficient brushless motor with a slightly higher top speed (~9 mph) than the 12eDRIVE (~7.5 mph). Choose the 12 for ages 3–5 and the 16 for ages 4–7.' },
      { q: 'Does the STACYC 16eDRIVE have a speed limiter?', a: 'Yes. Like all STACYC bikes it has three selectable power modes, so parents can limit speed for beginners and increase it as the child progresses. The highest mode tops out around 9 mph.' },
    ] },
  { slug: 'stacyc-18e-drive', name: 'STACYC 18eDRIVE', h1: 'STACYC 18', price: 1049, brand: 'stacyc', category: 'youth-electric-dirt-bikes', badge: 'Ages 5–8', images: [], specs: { power: '20V drive', topSpeed: '13 mph', range: '30–60 min', weight: '19 lb', battery: '20V Li-ion (quick-swap)', modes: '3', roadLegal: 'No (off-road)', age: '5–8' },
    metaDesc: 'Buy the STACYC 18eDRIVE for $1,049. A 13mph electric balance bike with three power modes for ages 5–8. Authorized US STACYC dealer, free US shipping.',
    short: 'The balance-to-power stepping stone for young riders.',
    description: 'The STACYC 18eDRIVE is a lightweight electric balance bike with three real power modes — the ideal electric dirt bike for kids aged 5–8 building confidence. Off-road use only, with adult supervision.' },
  { slug: 'stacyc-20e-drive', name: 'STACYC 20eDRIVE', h1: 'STACYC 20', price: 1199, brand: 'stacyc', category: 'youth-electric-dirt-bikes', badge: 'Ages 6–10', images: [], specs: { power: '20V drive', topSpeed: '17 mph', range: '30–60 min', weight: '21 lb', battery: '20V Li-ion (quick-swap)', modes: '3', roadLegal: 'No (off-road)', age: '6–10' },
    metaDesc: 'Buy the STACYC 20eDRIVE for $1,199. The largest STACYC at 17mph, with quick-swap 20V battery, for ages 6–10. Authorized US dealer, free US shipping.',
    short: 'The largest, fastest STACYC for growing riders.',
    description: 'The STACYC 20eDRIVE steps up in size and power for kids aged 6–10 ready for more speed and range, with a 17 mph top mode and quick-swap 20V battery. Off-road use only, with adult supervision.' },
  // ---- RAZOR ----
  { slug: 'razor-mx650', name: 'Razor MX650 Dirt Rocket', titleName: 'Razor MX650', h1: 'Razor MX650 Electric Dirt Bike', price: 599, brand: 'razor', category: 'youth-electric-dirt-bikes', tags: ['cheap-electric-dirt-bikes'], badge: 'Fastest Razor', images: [], specs: { power: '650 W', topSpeed: '17 mph', range: '~10 mi', weight: '98 lb', battery: '36V SLA', modes: '1', roadLegal: 'No (off-road)', age: '16+' },
    metaDesc: 'Buy the Razor MX650 Dirt Rocket for $599. 36V, 17mph and a 220lb rider limit — the fastest Razor, for ages 16+. Free Lower 48 shipping from VoltTrack.',
    short: 'The fastest Razor Dirt Rocket — an affordable entry into electric dirt riding.',
    description: 'The Razor MX650 Dirt Rocket is the fastest bike in Razor’s Dirt Rocket range, with a 650 W motor, 17 mph top speed and a 220 lb rider limit. A budget-friendly first taste of off-road electric riding for teens and lighter adults.' },
  // ---- E-RIDE PRO ----
  { slug: 'e-ride-pro-mini', name: 'E-Ride Pro Mini', h1: 'E Ride Pro Mini', price: 2499, brand: 'e-ride-pro', category: 'electric-pit-bikes', tags: ['cheap-electric-dirt-bikes'], badge: 'Pit bike', images: [], specs: { power: '~4 kW peak', topSpeed: '~30 mph', range: '~40 mi', weight: '~110 lb', battery: '60V', modes: '3', roadLegal: 'No (off-road)', age: '14+' },
    metaDesc: 'Buy the E-Ride Pro Mini electric pit bike for $2,499. Compact, ~30mph and easy to handle — ideal for the yard and pit lane. Free Lower 48 US shipping.',
    short: 'A compact, affordable electric pit bike for the yard, pit lane and newer riders.',
    description: 'The E-Ride Pro Mini is a compact electric pit bike that packs real performance into a small, approachable package. Its low weight and manageable power make it ideal for the pit lane, the yard and newer or lighter riders building confidence. Off-road use only.',
    faqs: [
      { q: 'How fast does the E-Ride Pro Mini go?', a: 'The E-Ride Pro Mini reaches around 30 mph, which is plenty for a compact pit bike used in the yard, pit lane or on tight off-road tracks. Selectable modes let you keep the speed gentle for newer or younger riders.' },
      { q: 'Who is the E-Ride Pro Mini for?', a: 'It suits newer and lighter riders (roughly 14+), younger teens with supervision, and anyone wanting a fun, low-cost pit bike. Its small size and light weight make it far easier to handle than a full-size electric dirt bike.' },
      { q: 'Is the E-Ride Pro Mini street legal?', a: 'No. The E-Ride Pro Mini is an off-road pit bike and is not street legal. Ride it on private land or designated off-road areas only; California riders should follow OHV rules under Vehicle Code Section 436.1.' },
    ] },
  { slug: 'e-ride-pro-ss', name: 'E-Ride Pro SS', h1: 'E Ride Pro SS 2.0', price: 3799, brand: 'e-ride-pro', category: 'adult-electric-dirt-bikes', badge: 'Best value', images: [],
    variants: [
      { id: 'ss-3', label: 'SS 3.0 (current)', price: 3799, specs: { modes: '3 + Bluetooth ride-mode tuning' } },
      { id: 'ss-2', label: 'SS 2.0 (2025 stock)', price: 3499, badge: '2025 model', specs: { modes: '3' } },
    ],
    specs: { power: '12 kW peak', topSpeed: '60 mph', range: '~60 mi', weight: '~150 lb', battery: '72V 40Ah', modes: '3', roadLegal: 'No (off-road / OHV)', age: '16+' },
    metaDesc: 'Buy the E-Ride Pro SS electric dirt bike from $3,799 (SS 3.0). 72V, 12kW, 60mph — huge value vs a Sur-Ron. Free US shipping. Authorized US dealer.',
    short: 'A 60 mph, 72V full-size electric dirt bike at a fraction of the price — the value pick.',
    description: 'The E-Ride Pro SS is a full-size electric dirt bike that undercuts the big names while delivering a 72V/40Ah battery, a 12 kW motor and a 60 mph top speed. The current SS 3.0 adds Bluetooth tuning and upgraded brakes over the SS 2.0. Choose your version below. Off-road / OHV use only.',
    faqs: [
      { q: 'What is the difference between the E-Ride Pro SS 2.0 and SS 3.0?', a: 'Both share the same 72V/40Ah battery, 12 kW motor and 60 mph top speed. The current SS 3.0 adds Bluetooth ride-mode tuning and upgraded brakes over the SS 2.0. The SS 2.0 is offered as discounted 2025 stock while it lasts.' },
      { q: 'How does the E-Ride Pro SS compare to a Sur-Ron Light Bee X?', a: 'The E-Ride Pro SS is a larger, faster bike on paper — 72V and 60 mph versus the Light Bee X’s lighter, more nimble package — and costs less. The Sur-Ron has a deeper aftermarket and stronger resale. Choose the SS for value and speed, the Sur-Ron for the ecosystem.' },
      { q: 'Is the E-Ride Pro SS street legal?', a: 'No. The E-Ride Pro SS is sold for off-road, private-land and OHV use only and is not street legal without specific state certification. California riders should follow green-sticker / OHV rules under Vehicle Code Section 436.1.' },
    ] },
  // ---- TALARIA (Phase 3 additions) ----
  { slug: 'talaria-x3', titleName: 'Talaria X3', h1: 'Talaria X3', name: 'Talaria X3', price: 4799, brand: 'talaria', category: 'adult-electric-dirt-bikes', badge: 'Popular', images: [], specs: { power: '8 kW peak', topSpeed: '~53 mph', range: '~55 mi', weight: '~121 lb', battery: '40Ah frame-distributed', modes: '4', roadLegal: 'No (off-road / OHV)', age: '14+' },
    metaDesc: 'Buy the Talaria X3 for $4,799. A lightweight trail chassis with a 40Ah frame-distributed battery and 53mph. Free US shipping, authorized dealer.',
    short: 'Talaria’s lighter, more modern chassis with the battery built into the frame.',
    description: 'The Talaria X3 moves away from the Sting’s removable-pack layout to a 40Ah battery distributed through the frame, giving a lower centre of gravity and a more planted feel on the trail. It is a different bike from the Sting XXX, not a trim level. Off-road / OHV use only.',
    faqs: [
      { q: 'How fast does the Talaria X3 go?', a: 'The X3 reaches around 53 mph in its highest ride mode. Selectable modes let you cap speed and power for newer or lighter riders, so the bike stays useful as their skill develops rather than being too much on day one.' },
      { q: 'What is the difference between the Talaria X3 and the XXX?', a: 'They are separate bikes. The X3 uses a 40Ah battery distributed through the frame for a lower centre of gravity, while the Sting XXX uses a frame-spine 60V pack and is tuned as an aggressive track machine. Neither is a variant of the other.' },
      { q: 'Is the Talaria X3 street legal?', a: 'No. The X3 is sold for off-road, private-land and OHV use only and is not street legal without specific state certification and registration. California riders should follow green-sticker / OHV rules under Vehicle Code Section 436.1.' },
    ] },
  { slug: 'talaria-dragon', titleName: 'Talaria Dragon', h1: 'Talaria Dragon', name: 'Talaria Dragon', price: 7649, brand: 'talaria', category: 'electric-trail-bikes', badge: 'Flagship', images: [], specs: { power: '28 kW peak', topSpeed: '70 mph', range: '93 mi', weight: '~220 lb', battery: '88V 58.5Ah', modes: '4', roadLegal: 'No (off-road / OHV)', age: '18+' },
    metaDesc: 'Buy the Talaria Dragon for $7,649. 88V/58.5Ah, 28kW, 70mph and 93 miles of range — Talaria’s enduro flagship. Free Lower 48 US shipping.',
    short: 'Talaria’s flagship — 28 kW, 70 mph and a genuine 93-mile range.',
    description: 'The Talaria Dragon sits at the top of the range: an 88V/58.5Ah battery driving 28 kW for a 70 mph top speed and up to 93 miles of range. It is the fastest and longest-legged Talaria made, and firmly an experienced adult rider’s machine. Off-road / OHV use only.',
    availNote: 'Contact us to confirm current US availability and lead time before ordering — Dragon stock arrives in limited batches.',
    faqs: [
      { q: 'How fast is the Talaria Dragon?', a: 'The Dragon reaches around 70 mph, making it the fastest bike Talaria builds. Its 28 kW output and 88V battery put it well beyond the Sting range and into genuine full-size performance territory for riders 18 and over.' },
      { q: 'What is the range of the Talaria Dragon?', a: 'Up to around 93 miles from the 88V/58.5Ah pack, depending on ride mode, terrain and rider weight. That is among the longest ranges of any electric dirt bike we sell and makes full-day trail riding realistic without a recharge.' },
      { q: 'Dragon or Komodo — which Talaria should I buy?', a: 'The Komodo is $5,999, 32 kW and 66 mph with 70 miles of range. The Dragon is $7,649, 70 mph and 93 miles. Choose the Komodo for the better value mid-weight; choose the Dragon if outright range and top speed justify the extra $1,650.' },
    ] },
  // ---- STARK FUTURE (Phase 3 addition) ----
  { slug: 'stark-varg-mx', titleName: 'Stark Varg MX', h1: 'Stark Varg MX', name: 'Stark Varg MX 1.2', price: 10490, brand: 'stark-future', category: 'electric-motocross-bikes', badge: 'Race spec', images: [],
    variants: [
      { id: 'standard', label: 'Standard (60HP)', price: 10490, specs: { power: '60 HP', battery: '7.2 kWh' } },
      { id: 'alpha', label: 'Alpha (80HP)', price: 11490, specs: { power: '80 HP', battery: '7.2 kWh + 33% capacity' } },
    ],
    specs: { power: '60–80 HP (configurable)', topSpeed: 'Gearing dependent', range: 'Up to ~6 hrs riding', weight: '242 lb', battery: '7.2 kWh (Alpha: +33%)', modes: 'App-configurable', roadLegal: 'No (closed-course)', age: '18+' },
    metaDesc: 'Buy the Stark Varg MX from $10,490. 60HP Standard or 80HP Alpha, 7.2kWh, KYB suspension and Brembo brakes. Authorized US Stark Future dealer.',
    short: 'The electric motocross bike that beats gas 450s — 60 or 80 HP, closed-course.',
    description: 'The Stark Varg MX is the bike that proved electric motocross works, with configurable output up to 80 HP, a 7.2 kWh battery, KYB suspension and Brembo brakes on 21"/18" wheels. Power is dialled in from the onboard display, so the same bike suits a club rider and a pro. Closed-course and off-road use only — the MX has no street-legal path.',
    faqs: [
      { q: 'What is the difference between the Stark Varg MX Standard and Alpha?', a: 'The Standard produces up to 60 HP; the Alpha steps up to 80 HP and adds roughly 33% more battery capacity, updated wiring, a new inverter and a new motor. Both share the 7.2 kWh-class platform, KYB suspension and Brembo brakes.' },
      { q: 'Is the Stark Varg MX street legal?', a: 'No. The Varg MX is a closed-course motocross bike with no lights or mirrors and no street-legal path. If you need road legality, look at the Varg EX enduro or the Varg SM supermoto, and confirm your state DMV requirements with us first.' },
      { q: 'Can a Stark Varg MX be turned down for a less experienced rider?', a: 'Yes. Output is configurable from the onboard display, so the bike can be dialled well below its peak for training or for a lighter rider. It is still a full-size race machine at 242 lb, so it is not a first dirt bike.' },
    ] },
  // ---- E-RIDE PRO (Phase 3 additions) ----
  { slug: 'e-ride-pro-s', titleName: 'E-Ride Pro S', h1: 'E Ride Pro S', name: 'E-Ride Pro S', price: 3299, brand: 'e-ride-pro', category: 'adult-electric-dirt-bikes', badge: '', images: [],
    variants: [
      { id: 's-17', label: 'S 17" Standard', price: 3299, specs: { weight: '17" wheels — trail setup' } },
      { id: 's-16-fat', label: 'S 16" Fat Tire', price: 3499, specs: { weight: '16" fat tire — supermoto setup' } },
    ],
    specs: { power: '~10 kW peak', topSpeed: '~50 mph', range: '~50 mi', weight: '~140 lb', battery: '72V 30Ah', modes: '3', roadLegal: 'No (off-road / OHV)', age: '14+' },
    metaDesc: 'Buy the E-Ride Pro S from $3,299. A compact 72V trail bike in 17-inch standard or 16-inch fat tire setup. Free Lower 48 US shipping from VoltTrack.',
    short: 'A compact 72V trail bike, in 17-inch trail or 16-inch fat tire form.',
    description: 'The E-Ride Pro S is the compact machine in the range, running a 72V system in a frame smaller than the full-size SS. Pick the 17" Standard for trail riding, or the 16" Fat Tire for a supermoto stance and more grip on hardpack and street-style surfaces. Off-road / OHV use only.',
    faqs: [
      { q: 'What is the difference between the E-Ride Pro S 17" and 16" Fat Tire?', a: 'The mechanicals are shared; the wheels change the character. The 17" Standard is the trail setup at $3,299. The 16" Fat Tire at $3,499 runs a wider, lower-profile tyre for a supermoto stance and more grip on hardpack.' },
      { q: 'E-Ride Pro S or SS — which should I buy?', a: 'The S is the compact bike at $3,299, easier to handle and better for smaller or newer riders. The SS is the full-size machine at $3,799 with a bigger battery, 12 kW and 60 mph. Choose on rider size first, then on how fast you actually need to go.' },
      { q: 'Is the E-Ride Pro S street legal?', a: 'No. The S is sold for off-road, private-land and OHV use only and is not street legal without specific state certification, including the 16" Fat Tire supermoto setup. California riders should follow Vehicle Code Section 436.1.' },
    ] },
  { slug: 'e-ride-pro-sr', titleName: 'E-Ride Pro SR', h1: 'E Ride Pro SR', name: 'E-Ride Pro SR', price: 4799, brand: 'e-ride-pro', category: 'adult-electric-dirt-bikes', badge: 'Flagship', images: [], specs: { power: '25 kW peak', topSpeed: '62–70 mph', range: '~100 mi', weight: '~165 lb', battery: '72V 50Ah', modes: '3 + Bluetooth tuning', roadLegal: 'No (off-road / OHV)', age: '18+' },
    metaDesc: 'Buy the E-Ride Pro SR for $4,799. 72V/50Ah, 25kW, 62–70mph and around 100 miles of range with Bluetooth tuning. Free Lower 48 US shipping.',
    short: 'The flagship E-Ride Pro — 25 kW, up to 70 mph and around 100 miles of range.',
    description: 'The E-Ride Pro SR tops the range with a 72V/50Ah pack, 25 kW output and 62–70 mph, plus Bluetooth ride-mode tuning from your phone. Around 100 miles of range makes it one of the longest-legged bikes at anywhere near the price. An experienced adult rider’s machine. Off-road / OHV use only.',
    faqs: [
      { q: 'How fast does the E-Ride Pro SR go?', a: 'The SR reaches 62–70 mph depending on gearing, rider weight and terrain, from its 25 kW motor and 72V/50Ah battery. That is genuine full-size performance, so it suits experienced riders 18 and over rather than newcomers.' },
      { q: 'What is the range of the E-Ride Pro SR?', a: 'Around 100 miles from the 72V/50Ah pack under moderate riding, less if you use full power throughout. It is one of the longest-range bikes at this price and makes all-day trail riding realistic without a recharge.' },
      { q: 'SR or SS — which E-Ride Pro should I buy?', a: 'The SS is $3,799 with 12 kW, 60 mph and a 40Ah pack. The SR is $4,799 with 25 kW, up to 70 mph and a 50Ah pack for roughly double the range. The extra $1,000 buys real capability if you ride long or fast; the SS is the better value otherwise.' },
    ] },
  // ---- ZERO (Phase 3 addition) ----
  { slug: 'zero-fx', titleName: 'Zero FX', h1: 'Zero FX Electric Dirt Bike', name: 'Zero FX 2025', price: 12495, brand: 'zero', category: 'electric-trail-bikes', badge: 'Premium', images: [], specs: { power: '34 kW peak', topSpeed: '~85 mph', range: '~91 mi city', weight: '~298 lb', battery: '7.2 kWh', modes: '3', roadLegal: 'Dual-sport — state dependent', age: '18+' },
    metaDesc: 'Buy the Zero FX for $12,495. A premium 7.2kWh dual-sport from an established US electric motorcycle maker. Free Lower 48 shipping from VoltTrack.',
    short: 'Zero’s premium dual-sport — a full motorcycle that also works off-road.',
    description: 'The Zero FX is a full electric motorcycle built for dual-sport duty rather than a lightweight e-moto. A 7.2 kWh pack and 34 kW output give it real road-capable performance alongside genuine off-road ability. Dual-sport registration depends on the configuration and your state — confirm with us before any road use.',
    availNote: 'Zero pricing moves with import tariff conditions — contact us to confirm current pricing and availability before ordering.',
    faqs: [
      { q: 'Is the Zero FX street legal?', a: 'The FX is built as a dual-sport, but road legality depends on the specific configuration and your state’s registration requirements. Never assume the dual-sport badge means street legal everywhere — confirm your state DMV rules with us before riding on public roads.' },
      { q: 'Is the Zero FX a dirt bike?', a: 'It is a dual-sport motorcycle rather than a dedicated dirt bike. At around 298 lb it is far heavier than a Sur-Ron or Talaria and better suited to fire roads, trails and road linking than tight single-track or motocross tracks.' },
      { q: 'Zero FX or Zero XE?', a: 'The XE is the lighter, cheaper and more dirt-focused option at $7,395. The FX is the premium dual-sport at $12,495, heavier but far more capable on the road. Buy the XE if you ride mostly dirt; the FX if you need to link trails by road.' },
    ] },
  // ---- RAZOR (Phase 3 addition) ----
  { slug: 'razor-mx500', titleName: 'Razor MX500', h1: 'Razor MX500 Dirt Rocket', name: 'Razor MX500 Dirt Rocket', price: 459, brand: 'razor', category: 'youth-electric-dirt-bikes', tags: ['cheap-electric-dirt-bikes'], badge: '', images: [], specs: { power: '500 W', topSpeed: '15 mph', range: '~40 min', weight: '98 lb', battery: '36V SLA', modes: '1', roadLegal: 'No (off-road)', age: '13–16' },
    metaDesc: 'Buy the Razor MX500 Dirt Rocket for $459. 36V, 15mph and dual suspension for ages 13–16 — the mid-size Dirt Rocket. Free Lower 48 US shipping.',
    short: 'The dual-suspension Dirt Rocket — 15 mph for teens aged 13 to 16.',
    description: 'The Razor MX500 Dirt Rocket adds dual suspension and a 36V system to the Dirt Rocket formula, reaching 15 mph for around 40 minutes. It suits teens aged roughly 13 to 16 who have outgrown the MX350 but do not need the MX650’s higher rider weight limit. Off-road use only.',
    faqs: [
      { q: 'MX500 or MX650 — which Razor should I buy?', a: 'The MX500 is $459, 15 mph, and suits ages 13–16. The MX650 is $599, 17 mph, and carries a 220 lb rider limit for riders 16 and up. If your rider is near adult size or weight, go straight to the MX650.' },
      { q: 'Does the Razor MX500 have suspension?', a: 'Yes — dual suspension front and rear, which is the main upgrade over the MX350. It makes a real difference on rough ground and is the reason the MX500 feels more like a proper dirt bike than the smaller Dirt Rockets.' },
      { q: 'How long does the Razor MX500 run for?', a: 'Around 40 minutes of continuous riding from the 36V sealed lead-acid pack, less with a heavier rider or hilly terrain. Charge it fully after each ride — SLA batteries degrade quickly if stored discharged.' },
    ] },
  // ---- ALTIS ----
  { slug: 'altis-sigma', name: 'Altis Sigma', h1: 'Altis Sigma', price: 3999, brand: 'altis', category: 'adult-electric-dirt-bikes', badge: '98V performance', images: [],
    variants: [
      { id: 'standard', label: 'Sigma Standard 19"/19"', price: 3999, specs: { topSpeed: '~70 mph' } },
      { id: 'mx', label: 'Sigma MX 19"/16"', price: 4199, specs: { topSpeed: '~80 mph (16" rear gearing)' } },
    ],
    specs: { power: '22–25 kW', topSpeed: '70–80+ mph', range: '~50 mi', weight: '~150 lb', battery: '98V 35Ah Samsung 50S', modes: '3', roadLegal: 'No (off-road / OHV)', age: '16+' },
    metaDesc: 'Buy the Altis Sigma from $3,999. 98V/35Ah Samsung 50S cells, 22–25kW and 70–80+mph in Standard or MX wheels. Free Lower 48 shipping from VoltTrack.',
    short: 'A 98V Samsung-powered machine hitting 70–80+ mph for under $4,200.',
    description: 'The Altis Sigma runs one of the highest-voltage systems in the lightweight class — a 98V/35Ah Samsung 50S pack driving 22–25 kW for a genuine 70–80+ mph. Choose the Standard with matched 19"/19" wheels, or the Sigma MX with a 16" rear for a motocross stance and quicker drive out of corners. This is an experienced-rider machine. Off-road / OHV use only.',
    faqs: [
      { q: 'How fast is the Altis Sigma?', a: 'The Sigma reaches 70–80+ mph depending on variant, gearing and rider weight, from a 98V/35Ah Samsung 50S pack and 22–25 kW output. That is faster than most bikes at twice the price, and it demands genuine off-road experience to use safely.' },
      { q: 'What is the difference between the Sigma and the Sigma MX?', a: 'The mechanicals are shared; the wheels differ. The Standard runs 19" front and rear for stability and a smoother ride, while the Sigma MX pairs a 19" front with a 16" rear for a motocross stance and harder drive out of corners. The MX is $200 more.' },
      { q: 'Is the Altis Sigma street legal?', a: 'No. The Sigma is sold for off-road, private-land and OHV use only and is not street legal without specific state certification and registration. California riders should follow green-sticker / OHV rules under Vehicle Code Section 436.1.' },
    ] },
  { slug: 'altis-delta', name: 'Altis Delta', h1: 'Altis Delta E Bike', price: 2799, brand: 'altis', category: 'electric-pit-bikes', tags: ['cheap-electric-dirt-bikes'], badge: '', images: [], specs: { power: '13 kW peak', topSpeed: '62 mph', range: '~45 mi', weight: '~130 lb', battery: '72V', modes: '3', roadLegal: 'No (off-road / OHV)', age: '14+' },
    metaDesc: 'Buy the Altis Delta electric pit bike for $2,799. A 72V, 13kW mid-size frame reaching 62mph — far more bike than the price suggests. Free US shipping.',
    short: 'A 62 mph mid-size pit bike with far more power than its price suggests.',
    description: 'The Altis Delta packs a 72V system and 13 kW into a mid-size pit bike frame, reaching around 62 mph. It sits between a true pit bike and a full-size trail machine, which makes it a strong option for smaller adults, confident teens and anyone wanting real speed without full-size weight. Off-road / OHV use only.',
    faqs: [
      { q: 'How fast is the Altis Delta?', a: 'The Delta reaches around 62 mph from its 72V system and 13 kW motor — well beyond what most pit bikes manage. Selectable modes let you cap the power for a newer or younger rider and open it up as they progress.' },
      { q: 'Is the Altis Delta suitable for a teenager?', a: 'It suits confident riders roughly 14 and up, under supervision. Its mid-size frame is easier to manage than a full-size bike, but 62 mph is real speed — start in the lowest mode, insist on full protective gear and ride on private land or OHV areas.' },
      { q: 'Delta or Sigma — which Altis should I buy?', a: 'The Delta is the smaller, cheaper and more manageable bike at $2,799 and 62 mph. The Sigma is a 98V machine hitting 70–80+ mph for $3,999 and up. Choose the Delta for a smaller rider or a pit and yard bike, the Sigma for open-terrain performance.' },
    ] },
  // ---- ZERO ----
  { slug: 'zero-xb', name: 'Zero XB 2026', h1: 'Zero XB Electric Dirt Bike', price: 5095, brand: 'zero', category: 'electric-trail-bikes', badge: 'New 2026', images: [], specs: { power: '~11 kW', topSpeed: '~55 mph', range: '~50 mi', weight: '~180 lb', battery: '~3.0 kWh', modes: '3', roadLegal: 'No (off-road / OHV)', age: '16+' },
    metaDesc: 'Buy the Zero XB for $5,095. The lightest Zero on 19-inch wheels, bringing US motorcycle engineering back to dirt for 2026. Free Lower 48 US shipping.',
    short: 'Zero returns to dirt — the lightest bike the brand makes, on 19-inch wheels.',
    description: 'The Zero XB marks Zero Motorcycles’ 2026 return to off-road. It is the lightest bike Zero builds, running 19-inch wheels and a trail-focused setup, and it brings the engineering and US support of an established motorcycle manufacturer to a segment dominated by newer names. Off-road / OHV use only.',
    availNote: 'Zero pricing moves with import tariff conditions — contact us to confirm current pricing and availability before ordering.',
    faqs: [
      { q: 'Is the Zero XB worth $5,095?', a: 'It costs more than a Sur-Ron Light Bee X and gives you a US manufacturer with a long track record, established dealer support and full-motorcycle engineering. If aftermarket depth and outright value matter more to you, a Sur-Ron or E-Ride Pro is the stronger buy.' },
      { q: 'Zero XB or Zero XE?', a: 'The XB is the lighter, cheaper entry at $5,095 on 19-inch wheels. The XE steps up to $7,395 with a 4.3 kWh battery, 21"/18" wheels and around 65 miles of range. Choose the XB for trail riding and easier handling, the XE for longer days and rougher ground.' },
      { q: 'Is the Zero XB street legal?', a: 'No. The XB is sold for off-road, private-land and OHV use only and is not street legal without specific state certification and registration. California riders should follow Vehicle Code Section 436.1.' },
    ] },
  { slug: 'zero-xe', name: 'Zero XE 2026', h1: 'Zero XE Electric Dirt Bike', price: 7395, brand: 'zero', category: 'electric-trail-bikes', badge: '', images: [], specs: { power: '15.5 kW', topSpeed: '~60 mph', range: '65 mi', weight: '~230 lb', battery: '4.3 kWh', modes: '3', roadLegal: 'No (off-road / OHV)', age: '16+' },
    metaDesc: 'Buy the Zero XE for $7,395. A 4.3kWh, 15.5kW trail bike on 21"/18" wheels with 65mi of range. US-designed quality. Free Lower 48 shipping from VoltTrack.',
    short: 'A 4.3 kWh dual-sport-capable trail bike with full-size 21"/18" wheels.',
    description: 'The Zero XE is the serious trail and enduro machine in Zero’s 2026 dirt range, with a 4.3 kWh battery, 15.5 kW motor and full-size 21"/18" wheels for around 65 miles of range. It is a genuine all-day trail bike from an established US manufacturer. Off-road / OHV use only.',
    availNote: 'Zero pricing moves with import tariff conditions — contact us to confirm current pricing and availability before ordering.',
    faqs: [
      { q: 'What is the range of the Zero XE?', a: 'The XE offers around 65 miles from its 4.3 kWh battery, depending on ride mode, terrain and rider weight. That is genuine all-day trail range and considerably more than the lightweight Sur-Ron and Talaria class delivers.' },
      { q: 'What wheel sizes does the Zero XE use?', a: 'The XE runs full-size 21-inch front and 18-inch rear wheels, the standard enduro setup. That gives it better rough-terrain capability than the 19-inch XB and lets you fit a much wider choice of dirt tyres.' },
      { q: 'A second Zero battery — how much?', a: 'A spare pack runs around $2,749. It is a significant outlay, so for most riders it only makes sense if you regularly ride beyond the standard range and have no charging option in between. Talk to us before ordering one.' },
    ] },
  // ---- KTM (Phase 2 additions) ----
  { slug: 'ktm-sx-e-3', name: 'KTM SX-E 3 2025', h1: 'KTM SX E 3 Electric Dirt Bike', price: 3649, brand: 'ktm', category: 'youth-electric-dirt-bikes', badge: '', images: [], specs: { power: '~3 kW', topSpeed: 'Adjustable', range: '~2 hrs', weight: '~80 lb', battery: 'Integrated Li-ion', modes: '6', roadLegal: 'No (closed-course)', age: '4–10' },
    metaDesc: 'Buy the KTM SX-E 3 for $3,649. The bridge between SX-E 2 and SX-E 5, with six ride modes for ages 4–10. Authorized US KTM dealer, free Lower 48 shipping.',
    short: 'The missing step between the SX-E 2 and SX-E 5 — for ages 4 to 10.',
    description: 'The KTM SX-E 3 fills the gap in KTM’s youth motocross ladder, sitting between the entry SX-E 2 and the competition SX-E 5. With adjustable seat height and six ride modes it covers ages roughly 4 to 10, giving a rider who has outgrown their first bike somewhere to progress before stepping up to the SX-E 5. Closed-course and off-road use only.',
    faqs: [
      { q: 'What age is the KTM SX-E 3 for?', a: 'The SX-E 3 suits riders roughly 4 to 10 years old. Its adjustable seat height and six selectable ride modes mean one bike covers several years of growth rather than being outgrown in a single season.' },
      { q: 'SX-E 2, SX-E 3 or SX-E 5 — which should I buy?', a: 'The SX-E 2 is the entry bike for ages 3–6 at $2,249. The SX-E 3 bridges ages 4–10 at $3,649. The SX-E 5 is the competition-capable 5 kW machine for ages 4–12 at $5,449. Buy on your rider’s size and confidence, not their age alone.' },
      { q: 'Can the SX-E 3 be limited for a beginner?', a: 'Yes. Six selectable ride modes let a parent cap power and speed for early sessions and open the bike up as skill grows. This is the main reason a KTM SX-E stays useful far longer than a fixed-speed toy bike.' },
    ] },
  { slug: 'ktm-freeride-exc', name: 'KTM Freeride E-XC 2025', h1: 'KTM Freeride E-XC', price: 11499, brand: 'ktm', category: 'electric-trail-bikes', badge: 'Full-size trail', images: [], specs: { power: '19.2 kW', topSpeed: '~50 mph', range: '2–3 hrs trail riding', weight: '247 lb', battery: '5.5 kWh', modes: '3', roadLegal: 'No (off-road / OHV)', age: '16+' },
    metaDesc: 'Buy the KTM Freeride E-XC for $11,499. 5.5kWh, 19.2kW, 247lb and 2–3 hours of full-size trail riding. Authorized US KTM dealer, free Lower 48 shipping.',
    short: 'KTM’s full-size electric trail bike — 5.5 kWh and 2–3 hours of real riding.',
    description: 'The KTM Freeride E-XC is a full-size electric enduro from a manufacturer with decades of off-road racing behind it. A 5.5 kWh battery and 19.2 kW motor give 2–3 hours of genuine trail riding at 247 lb, with the chassis quality you expect from KTM. Off-road / OHV use only.',
    availNote: 'Contact us to confirm current availability before ordering — we verify the US KTM supply channel on every Freeride order.',
    faqs: [
      { q: 'How long can you ride the KTM Freeride E-XC?', a: 'KTM quotes 2 to 3 hours of trail riding from the 5.5 kWh battery, depending on terrain, ride mode and how hard you ride. That is a genuine half-day on technical trails, well beyond the lightweight Sur-Ron and Talaria class.' },
      { q: 'Is the Freeride E-XC a full-size dirt bike?', a: 'Yes. At 247 lb with full-size geometry and suspension it is a proper adult enduro machine, not a lightweight e-moto. It suits experienced riders 16 and up who want KTM chassis quality with an electric drivetrain.' },
      { q: 'Is the KTM Freeride E-XC street legal?', a: 'No. The Freeride E-XC is sold for off-road, private-land and OHV use only and is not street legal without specific state certification and registration. California riders should follow Vehicle Code Section 436.1.' },
    ] },
  // ---- RAZOR (Phase 2 additions) ----
  { slug: 'razor-mx350', name: 'Razor MX350 Dirt Rocket', titleName: 'Razor MX350', h1: 'Razor MX350 Electric Dirt Bike', price: 389, brand: 'razor', category: 'youth-electric-dirt-bikes', tags: ['cheap-electric-dirt-bikes'], badge: 'Best seller', images: [], specs: { power: '350 W', topSpeed: '14 mph', range: '~30 min', weight: '51 lb', battery: '24V SLA', modes: '1', roadLegal: 'No (off-road)', age: '10–13' },
    metaDesc: 'Buy the Razor MX350 Dirt Rocket for $389. 24V, 14mph and 30 minutes of ride time for ages 10–13 — the best seller. Free Lower 48 US shipping.',
    short: 'The best-selling kids electric dirt bike — 14 mph of first-bike fun for $389.',
    description: 'The Razor MX350 Dirt Rocket is the bike that introduces more kids to off-road riding than anything else on the market. A 24V system, 14 mph top speed and around 30 minutes of run time make it right-sized for ages 10 to 13, and at $389 it is an affordable way to find out whether your rider is serious before spending real money. Off-road use only, with adult supervision.',
    footnote: 'Looking for the Razor MX400? It is a colour and trim variation on the same MX350 platform with identical performance — ask us and we can source that finish.',
    faqs: [
      { q: 'What age is the Razor MX350 for?', a: 'The MX350 suits children roughly 10 to 13 years old, within Razor’s stated rider weight limit. Younger or smaller riders are better served by the MX125, while teens will outgrow the MX350 quickly and should look at the MX500 or MX650.' },
      { q: 'How fast does the Razor MX350 go?', a: 'The MX350 has a single speed setting topping out at around 14 mph. There is no selectable mode to limit it, so supervise early rides closely and choose the slower MX125 if 14 mph is too much for your rider.' },
      { q: 'How long does the Razor MX350 battery last?', a: 'Expect around 30 minutes of continuous riding from the 24V sealed lead-acid pack, less with a heavier rider or hilly ground. Charge it fully after every ride — SLA batteries are damaged by being stored flat.' },
    ] },
  { slug: 'razor-mx125', name: 'Razor MX125 Dirt Rocket', titleName: 'Razor MX125', h1: 'Razor MX125 Electric Dirt Bike', price: 229, brand: 'razor', category: 'youth-electric-dirt-bikes', tags: ['cheap-electric-dirt-bikes'], badge: 'Entry', images: [], specs: { power: '125 W', topSpeed: '8 mph', range: '~30 min', weight: '38 lb', battery: '12V SLA', modes: '1', roadLegal: 'No (off-road)', age: '7–10' },
    metaDesc: 'Buy the Razor MX125 Dirt Rocket for $229. 12V, 8mph and a 110lb limit — the cheapest real electric dirt bike for ages 7–10. Free Lower 48 shipping.',
    short: 'The cheapest real electric dirt bike — 8 mph, ages 7 to 10, $229.',
    description: 'The Razor MX125 Dirt Rocket is the gentlest entry into electric dirt riding. A 12V system and 8 mph top speed keep things genuinely manageable for children aged 7 to 10 within the 110 lb rider limit, and at $229 it is the least expensive way to find out whether your child takes to it. Off-road use only, with adult supervision.',
    faqs: [
      { q: 'What age is the Razor MX125 for?', a: 'The MX125 suits children roughly 7 to 10 years old, up to the 110 lb rider weight limit. Its 8 mph top speed is deliberately gentle, which makes it a genuine first bike rather than something a nervous child has to grow into.' },
      { q: 'Is 8 mph fast enough?', a: 'For a first-time rider aged 7 to 10, yes — 8 mph feels quick on dirt and lets a child learn balance and throttle control without being overwhelmed. Confident kids will outgrow it within a season or two, at which point the MX350 is the natural step up.' },
      { q: 'MX125 or MX350 for my child?', a: 'Choose the MX125 for a younger or more cautious rider aged 7–10 at 8 mph. Choose the MX350 for a confident rider aged 10–13 at 14 mph. If your child is on the boundary, the slower bike almost always builds confidence faster.' },
    ] },
  // ---- GASGAS ----
  { slug: 'gasgas-mc-e-2', name: 'GasGas MC-E 2 2025', h1: 'GasGas E2', price: 2249, brand: 'gasgas', category: 'youth-electric-dirt-bikes', tags: ['cheap-electric-dirt-bikes'], badge: 'Entry', images: [], specs: { power: '1.8 kW hub motor', topSpeed: 'Adjustable', range: '~100 min', weight: '~70 lb', battery: 'Integrated Li-ion', modes: '3', roadLegal: 'No (closed-course)', age: '3–7' },
    metaDesc: 'Buy the GasGas MC-E 2 for $2,249. A 1.8kW Austrian-built first motocross bike with an adjustable seat, for ages 3–7. Free Lower 48 US shipping.',
    short: 'Austrian-built first motocross bike for ages 3 to 7 — the KTM SX-E 2’s sister.',
    description: 'The GasGas MC-E 2 is a proper first motocross bike for young riders, with a 1.8 kW hub motor, three power modes and an adjustable 470–500 mm seat height. Around 100 minutes of run time covers a full session. It shares its engineering with the KTM SX-E 2 — same group, different bodywork. Closed-course and off-road use only.',
    faqs: [
      { q: 'What age is the GasGas MC-E 2 for?', a: 'The MC-E 2 suits riders roughly 3 to 7 years old. The adjustable 470–500 mm seat height and three power modes let it fit a growing child across several seasons rather than a single summer.' },
      { q: 'Is the GasGas MC-E 2 the same as the KTM SX-E 2?', a: 'They are sister bikes from the same Austrian group, sharing core engineering and the same $2,249 price. The differences are bodywork, graphics and colour. Buy on availability when you order, or on which one your rider prefers.' },
      { q: 'How long does the MC-E 2 run for?', a: 'Around 100 minutes on a charge in normal use, which comfortably covers a practice session. Run time drops in the highest power mode and with a heavier rider, so start in the lowest mode — it extends the session as well as being safer.' },
    ] },
  { slug: 'gasgas-mc-e-5', name: 'GasGas MC-E 5 2025', h1: 'GasGas Electric Bike', price: 5449, brand: 'gasgas', category: 'youth-electric-dirt-bikes', badge: 'Race ready', images: [], specs: { power: '5 kW (water-cooled)', topSpeed: 'Adjustable', range: '~2 hrs', weight: '~87 lb', battery: '907 Wh (fast-swap)', modes: '6', roadLegal: 'No (closed-course)', age: '4–12' },
    metaDesc: 'Buy the GasGas MC-E 5 for $5,449. A 5kW water-cooled youth motocross bike with a fast-swap battery, for ages 4–12. Free Lower 48 shipping from VoltTrack.',
    short: 'A genuine race-capable youth motocross bike — 5 kW, water-cooled, ages 4 to 12.',
    description: 'The GasGas MC-E 5 is competition-grade youth motocross: a 5 kW water-cooled motor, a new-for-2025 frame and a fast-swap 907 Wh battery so a rider can be back out between motos. Six ride modes cover the span from first laps to racing. It shares its platform with the KTM SX-E 5. Closed-course and off-road use only.',
    faqs: [
      { q: 'What age is the GasGas MC-E 5 for?', a: 'The MC-E 5 suits riders roughly 4 to 12, with six ride modes covering the range from a cautious first lap to full race pace. It is a serious machine and best suited to a rider already confident on a smaller bike.' },
      { q: 'MC-E 5 or KTM SX-E 5?', a: 'They share the same group, the same 5 kW water-cooled platform and the same $5,449 price. The real differences are bodywork, graphics and colour. Order whichever has better availability, or whichever your rider wants to be seen on.' },
      { q: 'Can you swap the MC-E 5 battery between motos?', a: 'Yes — the 907 Wh pack is designed for fast swapping, so with a spare battery your rider can go straight back out rather than waiting on a charge. For anyone racing, a second pack is the first accessory worth buying.' },
    ] },
  // ---- SEGWAY ----
  { slug: 'segway-xaber-300', name: 'Segway Xaber 300 2026', titleName: 'Segway Xaber 300', h1: 'Segway Xaber 300', price: 5299, brand: 'segway', category: 'adult-electric-dirt-bikes', badge: 'New 2026', images: [], specs: { power: '21 kW', topSpeed: '60 mph', range: '62 mi', weight: '~240 lb', battery: '72V 44Ah Samsung 50S', modes: '4', roadLegal: 'No (off-road / OHV)', age: '16+' },
    metaDesc: 'Buy the Segway Xaber 300 for $5,299. 21kW, 60mph, a 72V Samsung 50S pack, 62mi range and Marzocchi suspension. Free Lower 48 shipping from VoltTrack.',
    short: 'Segway’s all-new 2026 off-road machine — 21 kW, 60 mph, Samsung battery and Marzocchi suspension.',
    description: 'The Segway Xaber 300 is Segway Powersports’ all-new 2026 electric dirt bike, replacing the discontinued X260. It pairs a 21 kW motor and a 72V/44Ah Samsung 50S battery for a 60 mph top speed and 62 miles of range, with quality Marzocchi suspension and 220 mm of travel. Off-road / OHV use only.',
    faqs: [
      { q: 'How fast is the Segway Xaber 300?', a: 'The Segway Xaber 300 has a top speed of around 60 mph, driven by a 21 kW motor and a 72V/44Ah Samsung 50S battery. Selectable ride modes let you tailor power delivery for the trail or for newer riders.' },
      { q: 'What replaced the Segway X260?', a: 'The Segway Xaber 300 replaces the discontinued Segway X260 (and the smaller X160) as Segway Powersports’ 2026 off-road electric dirt bike, with a new chassis, a Samsung battery pack and upgraded Marzocchi suspension.' },
      { q: 'What is the range of the Segway Xaber 300?', a: 'The Xaber 300 offers up to around 62 miles of range from its 72V/44Ah battery, depending on ride mode, terrain and rider weight — competitive with other mid-weight electric dirt bikes in its price class.' },
    ] },
  // ---- SEGWAY: confirmed models, US price not yet fixed (enquiry only) ----
  { slug: 'segway-xyber', titleName: 'Segway Xyber', h1: 'Segway Xyber', name: 'Segway Xyber', price: 0, enquire: true, brand: 'segway', category: 'adult-electric-dirt-bikes', badge: 'Contact for pricing', images: [], specs: { power: 'Contact us', topSpeed: 'Contact us', range: 'Contact us', weight: 'Contact us', battery: 'Contact us', modes: 'Contact us', roadLegal: 'No (off-road / OHV)', age: '16+' },
    metaDesc: 'The Segway Xyber e-moto style electric bike. US pricing and availability not yet confirmed — contact VoltTrack for a quote and delivery timeline.',
    short: 'Segway’s e-moto styled machine — contact us for US pricing.',
    description: 'The Segway Xyber is an e-moto styled machine in Segway Powersports’ range. We have not yet confirmed US pricing with Segway, so rather than publish a number we cannot honour, contact us and we will quote you the current figure and lead time. Off-road / OHV use only.',
    faqs: [
      { q: 'How much does the Segway Xyber cost?', a: 'US pricing is not confirmed with Segway yet, so we will not publish a figure we cannot stand behind. Contact us and we will give you the current price and delivery timeline before you commit to anything.' },
      { q: 'When can I get a Segway Xyber?', a: 'Availability depends on Segway’s US allocation. Get in touch and we will tell you honestly what the current lead time looks like — and whether the Xaber 300, which is in stock, is the better bike for what you actually want.' },
    ] },
  { slug: 'segway-xafari', titleName: 'Segway Xafari', h1: 'Segway Xafari', name: 'Segway Xafari', price: 0, enquire: true, brand: 'segway', category: 'electric-trail-bikes', badge: 'Contact for pricing', images: [], specs: { power: 'Contact us', topSpeed: 'Contact us', range: 'Contact us', weight: 'Contact us', battery: 'Contact us', modes: 'Contact us', roadLegal: 'No (off-road / OHV)', age: '14+' },
    metaDesc: 'The Segway Xafari adventure trail e-bike. US pricing and availability not yet confirmed — contact VoltTrack for a quote and delivery timeline.',
    short: 'Segway’s adventure trail e-bike — contact us for US pricing.',
    description: 'The Segway Xafari is the adventure-oriented trail machine in Segway Powersports’ range. US pricing is not yet confirmed with Segway, so contact us for the current figure and lead time rather than relying on a placeholder number. Off-road / OHV use only.',
    faqs: [
      { q: 'How much does the Segway Xafari cost?', a: 'We have not confirmed US pricing with Segway, so we will not publish a number. Contact us and we will quote the current price and lead time, and tell you honestly how it compares to the bikes we already stock.' },
      { q: 'Is the Segway Xafari a dirt bike or an e-bike?', a: 'The Xafari sits toward the adventure trail e-bike end of Segway’s range rather than being a full electric dirt bike like the Xaber 300. If you want genuine dirt bike performance, the Xaber 300 is the model to look at.' },
    ] },
  // ---- PENDING (product doc Section 2) — Coming Soon / Enquire pages only ----
  { slug: 'stark-varg-mx-factory', titleName: 'Stark Varg MX Factory', h1: 'Stark Varg MX Factory Edition', name: 'Stark Varg MX Factory Edition', price: 0, enquire: true, pending: true, brand: 'stark-future', category: 'electric-motocross-bikes', badge: 'Coming soon', images: [], specs: { power: 'Contact us', topSpeed: 'Contact us', range: 'Contact us', weight: 'Contact us', battery: '7.2 kWh class', modes: 'App-configurable', roadLegal: 'No (closed-course)', age: '18+' },
    metaDesc: 'The Stark Varg MX Factory Edition, launched July 2026 at an estimated $15,990. Register your interest with VoltTrack for US availability updates.',
    short: 'The limited-production Factory Edition of the Varg MX — estimated $15,990.',
    description: 'Stark Future launched the Varg MX Factory Edition on 22 July 2026 at an estimated $15,990. We have not yet confirmed that we can source it in the US, so this is not an orderable page — register your interest and we will contact you the moment we can quote firm pricing and delivery.',
    faqs: [
      { q: 'Can I order the Stark Varg MX Factory Edition now?', a: 'Not yet. It launched in July 2026 and we have not confirmed a US supply route, so we are not taking orders. Register your interest and we will come back to you with firm pricing and a delivery date as soon as we have one.' },
      { q: 'What is the Factory Edition estimated price?', a: 'Around $15,990, roughly $4,500 above the standard Varg MX Alpha. Treat that as an estimate only — it is not confirmed US pricing, and tariff conditions can move it before stock actually lands.' },
    ] },
  { slug: 'stark-varg-ex-factory', titleName: 'Stark Varg EX Factory', h1: 'Stark Varg EX Factory Edition', name: 'Stark Varg EX Factory Edition', price: 0, enquire: true, pending: true, brand: 'stark-future', category: 'electric-trail-bikes', badge: 'Coming soon', images: [], specs: { power: 'Contact us', topSpeed: 'Contact us', range: 'Contact us', weight: 'Contact us', battery: '7.2 kWh class', modes: 'App-configurable', roadLegal: 'Street-legal enduro — state dependent', age: '18+' },
    metaDesc: 'The Stark Varg EX Factory Edition, launched July 2026 at an estimated $16,990. Register your interest with VoltTrack for US availability updates.',
    short: 'The limited-production Factory Edition of the Varg EX — estimated $16,990.',
    description: 'Stark Future launched the Varg EX Factory Edition on 22 July 2026 at an estimated $16,990. Production is limited and we have not confirmed US supply, so this page is for registering interest rather than ordering. Street legality depends on final certification and your state.',
    faqs: [
      { q: 'Can I order the Stark Varg EX Factory Edition now?', a: 'Not yet. Production is limited and we have not confirmed a US supply route. Register your interest and we will contact you with firm pricing and lead time as soon as we can genuinely commit to one.' },
      { q: 'Is the EX Factory Edition street legal?', a: 'The standard Varg EX is built as a street-legal enduro, and the Factory Edition is expected to follow. Road legality still depends on final homologation and your state’s registration rules — we will confirm specifics when US stock is verified.' },
    ] },
  { slug: 'altis-omega', titleName: 'Altis Omega', h1: 'Altis Omega', name: 'Altis Omega', price: 0, enquire: true, pending: true, brand: 'altis', category: 'adult-electric-dirt-bikes', badge: 'Coming soon', images: [], specs: { power: 'Contact us', topSpeed: 'Contact us', range: 'Contact us', weight: 'Contact us', battery: '144V (announced)', modes: 'Contact us', roadLegal: 'No (off-road / OHV)', age: '18+' },
    metaDesc: 'The Altis Omega is a 144V race flagship announced for 2026 and not yet shipping. Register your interest with VoltTrack for availability updates.',
    short: 'Altis’s announced 144V race flagship — not yet shipping.',
    description: 'The Altis Omega is a 144V race flagship announced for 2026. It is not yet available to consumers and we have no confirmed pricing or delivery date, so this page exists to register interest rather than to sell. We will update it when Altis ships.',
    faqs: [
      { q: 'When is the Altis Omega available?', a: 'No confirmed date. It was announced for 2026 as a 144V race flagship but is not yet shipping to consumers. Register your interest and we will contact you when Altis confirms availability and pricing.' },
      { q: 'Should I wait for the Omega or buy a Sigma?', a: 'If you want a bike this season, buy the Sigma — it is available now at $3,999 and already hits 70–80+ mph. The Omega has no confirmed date, price or independent performance data, so waiting is a gamble on all three.' },
    ] },
  { slug: 'stacyc-20h-drive', titleName: 'STACYC 20hDRIVE', h1: 'STACYC 20hDRIVE', name: 'STACYC 20hDRIVE', price: 0, enquire: true, pending: true, brand: 'stacyc', category: 'youth-electric-dirt-bikes', badge: 'Coming soon', images: [], specs: { power: 'Contact us', topSpeed: 'Contact us', range: 'Contact us', weight: 'Contact us', battery: '20V Li-ion (quick-swap)', modes: '3', roadLegal: 'No (off-road)', age: '6–10' },
    metaDesc: 'The STACYC 20hDRIVE heavy-duty variant, estimated around $1,399. We are confirming this SKU with STACYC — register your interest with VoltTrack.',
    short: 'A heavy-duty 20-inch STACYC variant — SKU being confirmed.',
    description: 'The STACYC 20hDRIVE is a heavy-duty variant of the 20eDRIVE, estimated around $1,399. We are still confirming with our STACYC distributor whether it is a separate US SKU, so we are not listing it as orderable. Register your interest and we will confirm.',
    faqs: [
      { q: 'How is the 20hDRIVE different from the 20eDRIVE?', a: 'It is understood to be a heavy-duty version of the same 20-inch platform. We are confirming the exact specification and whether it is a separate US SKU with our distributor before we list it — we would rather say "checking" than guess.' },
      { q: 'Should I just buy the 20eDRIVE?', a: 'For most riders aged 6–10, yes. The 20eDRIVE is available now at $1,199, hits 17 mph and uses the same quick-swap 20V battery. Wait for the 20hDRIVE only if you specifically need the heavier-duty build.' },
    ] },
  { slug: 'altis-delta-s', titleName: 'Altis Delta S', h1: 'Altis Delta S', name: 'Altis Delta S', price: 0, enquire: true, pending: true, brand: 'altis', category: 'electric-pit-bikes', badge: 'Coming soon', images: [], specs: { power: 'Contact us', topSpeed: 'Contact us', range: 'Contact us', weight: 'Contact us', battery: 'Contact us', modes: 'Contact us', roadLegal: 'No (off-road / OHV)', age: '12+' },
    metaDesc: 'The Altis Delta S youth variant, estimated around $2,299. We are confirming this SKU with Altis — register your interest with VoltTrack for updates.',
    short: 'A youth-sized variant of the Altis Delta — SKU being confirmed.',
    description: 'The Altis Delta S is understood to be a youth variant of the Delta at an estimated $2,299. We are confirming with our Altis dealer whether it is a separate SKU for the US market before listing it as orderable. Register your interest for an update.',
    faqs: [
      { q: 'How is the Delta S different from the Delta?', a: 'It is understood to be a smaller, youth-oriented version of the same platform. We are confirming the specification and US availability with Altis before we publish specs — we will not invent numbers for a bike we have not verified.' },
      { q: 'What should I buy for a younger rider now?', a: 'If your rider is under about 14, look at the E-Ride Pro Mini at $2,499 or, for a smaller child, the KTM and GasGas youth motocross bikes. The standard Altis Delta suits confident riders 14 and up at 62 mph.' },
    ] },
  { slug: 'zero-fxe', titleName: 'Zero FXE', h1: 'Zero FXE', name: 'Zero FXE 2025', price: 0, enquire: true, pending: true, brand: 'zero', category: 'electric-trail-bikes', badge: 'Enquire', images: [], specs: { power: 'Contact us', topSpeed: 'Contact us', range: 'Contact us', weight: 'Contact us', battery: '7.2 kWh', modes: '3', roadLegal: 'Supermoto / street — state dependent', age: '18+' },
    metaDesc: 'The Zero FXE is a supermoto-oriented street machine rather than a dirt bike. Contact VoltTrack to discuss whether it suits your riding.',
    short: 'Zero’s supermoto-oriented street machine — enquire if it suits your riding.',
    description: 'The Zero FXE is the supermoto and street-focused sibling to the FX, with an estimated $12,495 price. It is a road machine more than a dirt bike, so we list it on enquiry only — talk to us about whether it actually fits how you ride before ordering.',
    faqs: [
      { q: 'Is the Zero FXE a dirt bike?', a: 'Not really. The FXE is supermoto and street oriented, so if you mainly ride off-road the FX, XE or XB will serve you far better. We list it on enquiry because it comes up, not because we think it suits most of our customers.' },
      { q: 'How much is the Zero FXE?', a: 'Estimated around $12,495, but Zero pricing moves with import tariff conditions and we would rather quote you directly than publish a figure that changes. Contact us for the current price and availability.' },
    ] },
]

// ----------------------------------------------------------------------------
// ENQUIRY-ONLY PRODUCTS
// `enquire: true` means: no price shown, no Add to Cart, an enquiry CTA instead.
// Used for confirmed models whose US price is not yet fixed, and for the pending
// models in the product doc's Section 2 (`pending: true`) that are not yet
// orderable. Schema omits `offers` — never publish a price we cannot honour.
// These carry price: 0 and are excluded from price ranges and buy flows.
// ----------------------------------------------------------------------------

// ----------------------------------------------------------------------------
// DISCONTINUED MODELS → successor product.
// Each generates a landing page at /product/<slug>/ AND a 301 in next.config.mjs.
// The 301 is what search engines follow (equity → successor); the landing page is
// the fallback for the static-export target, where next.config redirects do not apply.
// Never listed in the sitemap and never added to PRODUCTS (no price, not buyable).
// ----------------------------------------------------------------------------
export const DISCONTINUED = [
  {
    slug: 'sur-ron-light-bee-s',
    name: 'Sur-Ron Light Bee S',
    successor: 'sur-ron-hyper-bee',
    successorName: 'Sur-Ron Hyper Bee',
    note: 'The Sur-Ron Light Bee S has been discontinued. Its successor is the Sur-Ron Hyper Bee.',
  },
  {
    slug: 'segway-x260',
    name: 'Segway X260',
    successor: 'segway-xaber-300',
    successorName: 'Segway Xaber 300',
    note: 'The Segway X260 has been discontinued and replaced by the Segway Xaber 300.',
  },
  {
    slug: 'segway-x160',
    name: 'Segway X160',
    successor: 'segway-xaber-300',
    successorName: 'Segway Xaber 300',
    note: 'The Segway X160 has been discontinued and replaced by the Segway Xaber 300.',
  },
]

// ----------------------------------------------------------------------------
// PARTS & ACCESSORIES
// One entry generates /parts-accessories/<slug>/ with CollectionPage schema,
// breadcrumbs, nav + sitemap entries. Prices are indicative ranges quoted as
// strings — accessories are enquiry-led, not add-to-cart, until SKUs are firm.
// ----------------------------------------------------------------------------
export const ACCESSORY_HUB = {
  name: 'Electric Dirt Bike Parts & Accessories',
  h1: 'Electric Dirt Bike Parts',
  keyword: 'electric dirt bike parts',
  metaDesc:
    'Electric dirt bike parts and accessories for Sur-Ron, Talaria, STACYC, E-Ride Pro and Razor — batteries, chargers, graphics kits and upgrades. US dealer.',
  description:
    'Genuine and aftermarket parts for the electric dirt bikes we sell — Sur-Ron, Talaria, Stark, STACYC, E-Ride Pro, Razor and more. Batteries and chargers, drivetrain and brake upgrades, graphics kits, protection and maintenance gear. If you cannot see the part you need, ask us: we source from the same suppliers we use for our own bikes.',
}

export const ACCESSORY_CATEGORIES = [
  {
    slug: 'batteries-chargers',
    name: 'Batteries & Chargers',
    h1: 'Electric Dirt Bike Batteries & Chargers',
    keyword: 'surron battery',
    short: 'OEM and upgrade batteries, plus chargers, for every bike we sell.',
    metaDesc:
      'Sur-Ron, Talaria, STACYC, E-Ride Pro and Razor batteries and chargers. OEM replacements and 72V/74V upgrade packs from Chi, eWatt and EBMX. US dealer.',
    description:
      'Replacement and upgrade batteries and chargers for every electric dirt bike we sell. Choose an OEM pack for a straight swap, or step up to a Chi Battery Systems, eWatt or EBMX performance pack for more range or more power. Prices are indicative — battery pricing moves with cell supply and tariff conditions, so contact us to confirm before ordering.',
    brandLinks: ['sur-ron', 'talaria', 'stacyc', 'e-ride-pro', 'razor'],
    groups: [
      {
        name: 'Sur-Ron Batteries',
        note: '72V/81V upgrades require an aftermarket controller (e.g. EBMX X-9000, ~$499). For range alone, stay 60V. For speed and power, go 72V.',
        items: [
          { name: 'Sur-Ron LBX OEM 60V/40Ah Replacement', fits: 'Light Bee X', price: '~$1,499' },
          { name: 'Sur-Ron Hyper Bee OEM 50.4V Replacement', fits: 'Hyper Bee', price: '~$799' },
          { name: 'Sur-Ron Ultra Bee OEM 74V/60Ah Replacement', fits: 'Ultra Bee HP/MX', price: '~$1,799' },
          { name: 'Sur-Ron Storm Bee OEM 84V Battery', fits: 'Storm Bee', price: '~$2,299' },
          { name: 'Chi Battery Systems Gladiator 60 Max (60V/60Ah)', fits: 'Light Bee X', price: '~$1,600' },
          { name: 'Chi Battery Systems Gladiator 60 Touring (60V/70Ah)', fits: 'Light Bee X', price: '~$1,899' },
          { name: 'Chi Battery Systems Gladiator X60 Compact (60V/51Ah)', fits: 'Light Bee X', price: '~$1,299' },
          { name: 'Chi Battery Systems Gladiator X72 Compact (72V/38Ah)', fits: 'Light Bee X', price: '~$1,499' },
          { name: 'eWatt 60V/53Ah Long Range Battery', fits: 'Light Bee X', price: '~$1,600' },
          { name: 'eWatt 72V Race Battery v5 (28kW, QS8)', fits: 'Light Bee X', price: '~$1,755' },
          { name: 'DHS GT 72V/50Ah Battery', fits: 'Light Bee X', price: '~$1,999' },
          { name: 'EBMX 81V Ultra Bee Performance Pack + lid + charger', fits: 'Ultra Bee', price: '~$3,224' },
          { name: 'eWatt Ultra Bee 80V/76Ah Bundle + lid + charger', fits: 'Ultra Bee', price: '~$3,500' },
        ],
      },
      {
        name: 'Talaria Batteries',
        note: '72V and 74V XXX upgrades require an aftermarket controller. Entry 72V packs start around $1,500; premium 74V packs run $2,000–$2,200.',
        items: [
          { name: 'Talaria MX3/MX4 OEM 60V/38–45Ah Replacement', fits: 'Sting MX3, Sting R MX4', price: '~$799' },
          { name: 'Talaria MX5 Pro OEM 72V/40Ah Replacement', fits: 'Sting MX5 Pro', price: '~$999' },
          { name: 'Talaria XXX OEM 60V Battery Replacement', fits: 'Sting XXX', price: '~$899' },
          { name: 'eWatt 60V/53Ah Long Range Battery', fits: 'Sting MX3, Sting R MX4', price: '~$1,600' },
          { name: 'eWatt 72V/42Ah Race Battery (28kW)', fits: 'Sting MX3, Sting R MX4', price: '~$2,000' },
          { name: 'eWatt 72V/63Ah Race Battery', fits: 'Sting MX3, Sting R MX4', price: '~$3,000' },
          { name: 'Chi Battery Systems Titan X 72V', fits: 'Sting XXX', price: '~$1,599' },
          { name: 'eWatt 74V/44Ah Battery for XXX', fits: 'Sting XXX', price: '~$2,000' },
          { name: 'EBMX 74V/44Ah Battery for XXX + lid + harness', fits: 'Sting XXX', price: '~$2,199' },
        ],
      },
      {
        name: 'STACYC Batteries & Adapters',
        warn: 'Power tool battery adapters void the STACYC manufacturer warranty on electrical components. Max 5Ah batteries. Not an official STACYC product.',
        items: [
          { name: 'STACYC OEM 20V Battery (Standard)', fits: '12eDRIVE, 16eDRIVE', price: '~$199' },
          { name: 'STACYC OEM 20V Battery (5Ah High Capacity)', fits: 'All STACYC', price: '~$249' },
          { name: 'STACYC OEM Charger', fits: 'All STACYC', price: '~$49' },
          { name: 'Milwaukee M18 Battery Adapter', fits: '12eDRIVE, 16eDRIVE', price: '~$75–$80' },
          { name: 'DeWalt 20V Battery Adapter', fits: '12eDRIVE, 16eDRIVE', price: '~$75' },
          { name: 'Makita 18V Battery Adapter', fits: '12eDRIVE, 16eDRIVE', price: '~$80' },
          { name: 'STACYC Spare Battery Mount/Holder', fits: '12eDRIVE, 16eDRIVE', price: '~$50' },
        ],
      },
      {
        name: 'E-Ride Pro Batteries',
        items: [
          { name: 'E-Ride Pro SS 72V/40Ah OEM Battery', fits: 'SS 2.0, SS 3.0', price: '~$699' },
          { name: 'E-Ride Pro SR 72V/50Ah OEM Battery', fits: 'SR', price: '~$899' },
          { name: 'E-Ride Pro S 72V/30Ah Battery + Charger', fits: 'S models', price: '~$1,849' },
          { name: 'E-Ride Pro OEM 2nd Gen Charger', fits: 'SS, SR', price: '~$296' },
        ],
      },
      {
        name: 'Razor Batteries',
        items: [
          { name: 'Razor MX350 24V Replacement Battery', fits: 'MX350', price: '~$49' },
          { name: 'Razor MX650 36V Replacement Battery', fits: 'MX650', price: '~$69' },
          { name: 'Razor MX350 OEM Charger', fits: 'MX350', price: '~$29' },
          { name: 'Razor MX650 OEM Charger', fits: 'MX650', price: '~$35' },
        ],
      },
      {
        name: 'Universal & Aftermarket Chargers',
        items: [
          { name: 'Fast Charger for eWatt / EBMX / CCW packs', fits: 'Light Bee X, Talaria upgrade packs', price: '~$160–$200' },
          { name: '60V Standard Aftermarket Charger', fits: 'Light Bee X, Talaria MX3/MX4 stock', price: '~$45–$79' },
          { name: '72V Standard Aftermarket Charger', fits: '72V upgrade packs', price: '~$79–$129' },
          { name: '74V Charger for EBMX/eWatt XXX packs', fits: 'Talaria XXX 74V', price: '~$149' },
          { name: 'Sur-Ron OEM Charger (60V)', fits: 'Light Bee X', price: '~$89' },
          { name: 'Sur-Ron OEM Charger (74V)', fits: 'Ultra Bee HP/MX', price: '~$119' },
        ],
      },
    ],
    faqs: [
      { q: 'What battery does a Sur-Ron use?', a: 'The Sur-Ron Light Bee X uses a 60V/40Ah pack, the Hyper Bee a 50.4V pack, the Ultra Bee a 74V/60Ah pack and the Storm Bee an 84V pack. OEM replacements are a straight swap; upgrade packs from Chi, eWatt and EBMX add range or power.' },
      { q: 'Should I upgrade my Sur-Ron to a 72V battery?', a: 'If you only want more range, stay on 60V and fit a higher-capacity pack — it is simpler and cheaper. If you want more speed and power, a 72V or 81V pack is the route, but it also requires an aftermarket controller such as the EBMX X-9000 at around $499.' },
      { q: 'Can you use Milwaukee or DeWalt batteries on a STACYC?', a: 'Adapters exist for Milwaukee M18, DeWalt 20V and Makita 18V packs at roughly $75–$80. Be aware: power tool battery adapters void the STACYC manufacturer warranty on electrical components, are limited to 5Ah batteries, and are not an official STACYC product.' },
      { q: 'How long does an electric dirt bike battery last?', a: 'Most lithium packs hold usable capacity for several hundred charge cycles, typically three to five years of regular riding. Avoid storing a pack fully charged or fully flat, keep it out of extreme heat, and use the correct charger for its voltage.' },
    ],
  },
  {
    slug: 'graphics-kits',
    name: 'Graphics Kits & Cosmetics',
    h1: 'Sur-Ron Graphics & Electric Dirt Bike Graphics Kits',
    keyword: 'surron graphics',
    short: 'Graphics kits, wraps, number plates and sticker sets.',
    metaDesc:
      'Sur-Ron graphics kits, wraps and number plates, plus Stark Varg, Talaria and STACYC graphics. Custom vinyl from $29. US dealer, free US shipping.',
    description:
      'Graphics kits, vinyl wraps, number plates and sticker sets for Sur-Ron, Stark Varg, Talaria, STACYC, KTM and GasGas. A graphics kit is the cheapest way to make a bike your own and it protects the plastics underneath from trail scuffs. Fitment is model-specific — tell us your exact model and year and we will confirm the right kit.',
    brandLinks: ['sur-ron', 'stark-future', 'talaria', 'stacyc'],
    groups: [
      {
        name: 'Sur-Ron Graphics',
        items: [
          { name: 'Sur-Ron LBX Full Graphics Kit', fits: 'Light Bee X', price: '~$129–$179' },
          { name: 'Sur-Ron Ultra Bee Graphics Kit', fits: 'Ultra Bee HP/MX', price: '~$149–$199' },
          { name: 'Sur-Ron Husqvarna-Style Graphics', fits: 'Ultra Bee', price: '~$149' },
          { name: 'Sur-Ron Custom Vinyl Wrap', fits: 'All Sur-Ron', price: '~$199–$349' },
          { name: 'Sur-Ron Number Plate', fits: 'All Sur-Ron', price: '~$29–$49' },
        ],
      },
      {
        name: 'Stark Varg Graphics',
        items: [
          { name: 'Stark Varg MX Graphics Kit', fits: 'Varg MX', price: '~$179–$249' },
          { name: 'Stark Varg EX Graphics Kit', fits: 'Varg EX', price: '~$179–$249' },
          { name: 'Stark Varg Sticker Set', fits: 'All Varg', price: '~$49–$89' },
        ],
      },
      {
        name: 'Talaria Graphics',
        items: [
          { name: 'Talaria X3 Graphics Kit', fits: 'X3, X3 Pro', price: '~$129–$169' },
          { name: 'Talaria MX4 Graphics Kit', fits: 'Sting R MX4', price: '~$129–$169' },
          { name: 'Talaria Number Plate', fits: 'All Talaria', price: '~$29–$49' },
        ],
      },
      {
        name: 'Youth & Kids Graphics',
        items: [
          { name: 'STACYC 12eDRIVE Graphics Kit', fits: '12eDRIVE', price: '~$69–$99' },
          { name: 'STACYC 16eDRIVE Graphics Kit', fits: '16eDRIVE', price: '~$69–$99' },
          { name: 'KTM SX-E 5 Graphics Kit', fits: 'SX-E 5', price: '~$99–$149' },
          { name: 'GasGas MC-E 5 Graphics Kit', fits: 'MC-E 5', price: '~$99–$149' },
        ],
      },
    ],
    faqs: [
      { q: 'Will a Sur-Ron graphics kit fit my bike?', a: 'Graphics kits are cut for a specific model and plastics generation — a Light Bee X kit will not fit an Ultra Bee. Tell us your exact model and year when you order and we will confirm fitment before shipping.' },
      { q: 'What is the difference between a graphics kit and a wrap?', a: 'A graphics kit is a set of pre-cut decals for the standard plastic panels, typically $129–$199. A full custom vinyl wrap covers more of the bike in one continuous finish and runs $199–$349, but takes longer to fit.' },
      { q: 'Do graphics kits protect the plastics?', a: 'Yes, to a degree. A thick vinyl kit takes the trail scuffs and roost that would otherwise scratch the panel underneath, which helps resale. It will not stop a hard impact, and it is not a substitute for frame guards or a skid plate.' },
    ],
  },
  {
    slug: 'parts-upgrades',
    name: 'Bike Parts & Upgrades',
    h1: 'Sur-Ron & Talaria Parts & Upgrades',
    keyword: 'surron upgrades',
    short: 'Drivetrain, brakes, suspension, wheels, body and electronics.',
    metaDesc:
      'Sur-Ron and Talaria parts and upgrades — controllers, brakes, suspension, wheels, plastics and more. E-Ride Pro, STACYC and Razor parts too. US dealer.',
    description:
      'Replacement parts and performance upgrades for the electric dirt bikes we sell. From a $19 brake pad to a $499 EBMX controller, we can source the drivetrain, braking, suspension, wheel, body and electronic parts for Sur-Ron, Talaria, E-Ride Pro, STACYC and Razor. Tell us your model and year and we will confirm the right part before shipping.',
    brandLinks: ['sur-ron', 'talaria', 'e-ride-pro', 'stacyc', 'razor'],
    groups: [
      {
        name: 'Sur-Ron Parts & Upgrades',
        note: 'A 72V/81V speed upgrade needs a matching controller such as the EBMX X-9000 (~$499) — a battery alone will not do it.',
        items: [
          { name: 'Controller replacement / EBMX X-9000 upgrade', fits: 'Light Bee X, Ultra Bee', price: '$79–$499' },
          { name: 'Brake pads, rotors, master cylinder, levers', fits: 'All Sur-Ron', price: '$19–$149' },
          { name: 'Fork seals, fork oil, rear shock upgrade', fits: 'All Sur-Ron', price: '$29–$299' },
          { name: 'Rims, spoke sets, hub sets', fits: 'All Sur-Ron', price: '$89–$299' },
          { name: 'Fenders, seat, seat cover, plastics set', fits: 'All Sur-Ron', price: '$29–$249' },
          { name: 'Headlight, taillight, display, speedometer', fits: 'All Sur-Ron', price: '$25–$149' },
          { name: 'Handlebars, grips, footpegs, pedal kit (L1e)', fits: 'All Sur-Ron', price: '$19–$129' },
          { name: 'Skid plate, frame guard, chain guide, sprockets', fits: 'All Sur-Ron', price: '$29–$149' },
        ],
      },
      {
        name: 'Talaria Parts & Upgrades',
        items: [
          { name: 'Controller, throttle, gearbox oil', fits: 'Sting range, X3', price: '$49–$399' },
          { name: 'Brake pads, 220x3mm rotors, master cylinder', fits: 'Sting range, X3', price: '$29–$179' },
          { name: 'Fenders, frame guards, seat cover', fits: 'Sting range, X3', price: '$29–$199' },
          { name: 'Pedal kit, display/screen, key fob, frame protectors', fits: 'Sting range, X3', price: '$39–$179' },
        ],
      },
      {
        name: 'E-Ride Pro, STACYC & Razor Parts',
        items: [
          { name: 'E-Ride Pro brakes, display, fender, direct-mount stem', fits: 'SS, SR, S, Mini', price: '$29–$249' },
          { name: 'STACYC motor, throttle, foot pegs, kickstand', fits: '12eDRIVE, 16eDRIVE', price: '$29–$199' },
          { name: 'Razor chain, brake pads, battery cables', fits: 'MX350, MX650', price: '$9–$49' },
        ],
      },
    ],
    faqs: [
      { q: 'What is the best first upgrade for a Sur-Ron?', a: 'For most riders it is suspension — fork oil and a rear shock upgrade transform how the bike rides for well under $300. A controller and battery upgrade adds speed but is a bigger job; do the suspension first and you will enjoy the bike more immediately.' },
      { q: 'Do you sell parts for bikes I did not buy from you?', a: 'Yes. We source parts for Sur-Ron, Talaria, E-Ride Pro, STACYC and Razor regardless of where the bike came from. Give us the exact model and year and we will confirm the right part before you order.' },
      { q: 'Can I make my Sur-Ron faster with a sprocket change?', a: 'A smaller rear or larger front sprocket raises top speed at the cost of acceleration and hill-climbing, for around $29–$149. It is the cheapest speed change you can make, but it does not add power — for that you need a controller and battery upgrade.' },
    ],
  },
  {
    slug: 'helmets-protection',
    name: 'Helmets & Protection',
    h1: 'Electric Dirt Bike Helmets & Protection',
    keyword: 'electric dirt bike helmets',
    short: 'Helmets, goggles and body armour for every rider size.',
    metaDesc:
      'MX helmets, goggles, chest protectors, knee guards and gloves for electric dirt bike riders — adult, youth and kids sizes. The gear that matters most.',
    description:
      'Protection is the highest-value money you will spend on electric dirt biking, and we will always tell you that before we sell you a faster bike. Full-face MX helmets, goggles, chest protectors, knee and elbow guards, neck braces and gloves, in adult, youth and kids sizes. If you buy nothing else with your bike, buy a proper helmet.',
    brandLinks: ['sur-ron', 'talaria', 'stacyc'],
    groups: [
      {
        name: 'Helmets',
        items: [
          { name: 'Full-Face MX Helmet (Adult)', fits: 'Adult riders', price: '~$89–$349' },
          { name: 'Full-Face MX Helmet (Youth)', fits: 'Youth riders', price: '~$59–$179' },
          { name: 'Full-Face MX Helmet (Kids/Mini)', fits: 'Kids / STACYC riders', price: '~$49–$99' },
        ],
      },
      {
        name: 'Goggles & Eyewear',
        items: [
          { name: 'Off-Road Goggles (Adult)', fits: 'Adult riders', price: '~$29–$89' },
          { name: 'Off-Road Goggles (Youth/Kids)', fits: 'Youth / kids riders', price: '~$19–$49' },
        ],
      },
      {
        name: 'Body Armour',
        items: [
          { name: 'Chest Protector (Adult)', fits: 'Adult riders', price: '~$49–$149' },
          { name: 'Chest Protector (Youth)', fits: 'Youth riders', price: '~$39–$99' },
          { name: 'Knee / Shin Guards', fits: 'All riders', price: '~$29–$89' },
          { name: 'Elbow Pads', fits: 'All riders', price: '~$19–$49' },
          { name: 'Neck Brace', fits: 'All riders', price: '~$99–$349' },
          { name: 'Gloves (Adult MX)', fits: 'Adult riders', price: '~$19–$79' },
          { name: 'Gloves (Youth/Kids)', fits: 'Youth / kids riders', price: '~$14–$39' },
        ],
      },
    ],
    faqs: [
      { q: 'What protection does a new rider actually need?', a: 'At minimum: a full-face MX helmet and goggles, gloves, and knee protection. A chest protector is the next priority, especially for kids. Everything else is worth adding as the rider goes faster, but nobody should take a first ride without at least a helmet and gloves.' },
      { q: 'Do kids need a full-face helmet on a STACYC?', a: 'Yes. Even at low STACYC speeds a fall onto hardpack can injure a face or jaw. A properly fitted kids full-face MX helmet from around $49 is non-negotiable, and it sets the habit early that riding means gearing up first.' },
      { q: 'How should an MX helmet fit?', a: 'Snug enough that it does not move when you shake your head, with the cheek pads firmly against your face. A loose helmet does not protect you. Sizes vary between brands, so tell us the rider’s head measurement and we will help you get it right.' },
    ],
  },
  {
    slug: 'riding-gear',
    name: 'Riding Gear & Clothing',
    h1: 'Electric Dirt Bike Riding Gear & Boots',
    keyword: 'enduro dirt bike boots',
    short: 'Jerseys, pants, boots and hydration for on the trail.',
    metaDesc:
      'MX jerseys, pants, enduro boots and hydration packs for electric dirt bike riders — adult and youth. Comfort and protection for a full day on the trail.',
    description:
      'The clothing that makes a full day of riding comfortable and adds a layer of protection: MX jersey and pant combos, off-road boots, hydration packs and base layers, in adult and youth sizes. Boots in particular are worth not skimping on — ankle protection is one of the most common injury gaps we see.',
    brandLinks: ['sur-ron', 'talaria'],
    groups: [
      {
        name: 'Clothing',
        items: [
          { name: 'MX Jersey + Pants Combo (Adult)', fits: 'Adult riders', price: '~$69–$199' },
          { name: 'MX Jersey + Pants Combo (Youth/Kids)', fits: 'Youth / kids riders', price: '~$49–$129' },
          { name: 'Neck Gaiter / Balaclava', fits: 'All riders', price: '~$14–$29' },
        ],
      },
      {
        name: 'Boots',
        items: [
          { name: 'Off-Road Boots (Adult)', fits: 'Adult riders', price: '~$99–$349' },
          { name: 'Off-Road Boots (Youth)', fits: 'Youth riders', price: '~$59–$149' },
        ],
      },
      {
        name: 'Hydration',
        items: [
          { name: 'Hydration Pack', fits: 'All riders', price: '~$39–$99' },
        ],
      },
    ],
    faqs: [
      { q: 'Do I really need dirt bike boots?', a: 'For anything beyond gentle riding, yes. Off-road boots protect your ankles and shins from impacts, the bike and the ground, and stiffen your foot against twisting injuries that ordinary shoes will not. They are one of the higher-value protective purchases after a helmet.' },
      { q: 'What should I wear on an electric dirt bike?', a: 'A full-face helmet and goggles, gloves, an MX jersey and pants, knee protection and off-road boots is the standard kit. The jersey and pants add abrasion resistance and comfort; the boots and knee guards do the real protective work alongside the helmet.' },
      { q: 'Is youth riding gear worth buying if they will grow out of it?', a: 'Yes — ill-fitting adult gear does not protect a child and puts them off riding. Youth-specific jerseys, pants and boots from $49 fit properly and cost far less than adult kit. Buy for the current size and hand it down or resell when they grow.' },
    ],
  },
  {
    slug: 'tyres-wheels',
    name: 'Tyres & Wheels',
    h1: 'Sur-Ron & Talaria Tyres & Wheels',
    keyword: 'surron tires',
    short: 'Knobbly tyres, tubes and wheel-set upgrades.',
    metaDesc:
      'Sur-Ron and Talaria tyres, inner tubes and wheel-set upgrades — 16", 18" and 19" knobbly off-road rubber. Fitment-checked before shipping. US dealer.',
    description:
      'Tyres are the cheapest upgrade that changes how your bike rides, and a fresh knobbly transforms grip on loose ground. We stock front and rear tyres and inner tubes in 16", 18" and 19" for Sur-Ron and Talaria, plus complete wheel-set upgrades. Tell us your model and current wheel sizes and we will confirm fitment before shipping.',
    brandLinks: ['sur-ron', 'talaria'],
    groups: [
      {
        name: 'Sur-Ron Tyres',
        items: [
          { name: 'Sur-Ron LBX Front Tyre 19" Knobbly', fits: 'Light Bee X', price: '~$39–$65' },
          { name: 'Sur-Ron LBX Rear Tyre (18" or 16")', fits: 'Light Bee X', price: '~$39–$59' },
          { name: 'Sur-Ron Ultra Bee Rear Tyre 16"', fits: 'Ultra Bee HP/MX', price: '~$45–$69' },
        ],
      },
      {
        name: 'Talaria Tyres',
        items: [
          { name: 'Talaria Sting Front Tyre 19"', fits: 'Sting range', price: '~$39–$65' },
          { name: 'Talaria Sting Rear Tyre (16" or 18")', fits: 'Sting range', price: '~$39–$59' },
        ],
      },
      {
        name: 'Tubes & Wheel Sets',
        items: [
          { name: 'Inner Tubes 18"/19"', fits: 'Sur-Ron, Talaria', price: '~$12–$19' },
          { name: 'Inner Tubes 16"', fits: 'Sur-Ron, Talaria', price: '~$12–$17' },
          { name: 'Sur-Ron Wheel Set Upgrade', fits: 'Light Bee X', price: '~$249–$449' },
          { name: 'Talaria Wheel Set Upgrade', fits: 'Sting range', price: '~$249–$399' },
        ],
      },
    ],
    faqs: [
      { q: 'What tyres come on a Sur-Ron Light Bee X?', a: 'The Light Bee X runs a 19" front and an 18" or 16" rear depending on setup. A fresh knobbly is the cheapest meaningful upgrade you can make — it improves grip on loose dirt far more than most riders expect for $40–$65.' },
      { q: 'Should I carry a spare inner tube?', a: 'On any longer ride, yes. A pinch flat miles from the truck ends your day otherwise, and a tube plus tyre levers is cheap insurance. Tubes are $12–$19 depending on size — keep a matching spare in your pack.' },
      { q: 'Is a wheel-set upgrade worth it?', a: 'For hard riders, yes. A stronger wheel set resists the dents and buckles that hard landings put into stock rims, and better hubs improve durability. At $249–$449 it is a considered upgrade rather than a first purchase, but it pays off if you ride aggressively.' },
    ],
  },
  {
    slug: 'stands-maintenance',
    name: 'Stands & Maintenance',
    h1: 'Electric Dirt Bike Stands & Maintenance',
    keyword: 'stacyc stand',
    short: 'Stands, cleaners, lubricants and tool kits.',
    metaDesc:
      'Electric dirt bike stands, chain lube, cleaners, tool kits and torque wrenches — including STACYC stands. Keep your bike maintained. US dealer, free shipping.',
    description:
      'Electric drivetrains need far less maintenance than gas bikes, but the basics still matter: a stand to work on, chain lube, a cleaner that will not attack seals, and the right tools to torque things correctly. STACYC stands for the little bikes too. Simple, cheap kit that keeps a bike running well for years.',
    brandLinks: ['sur-ron', 'stacyc'],
    groups: [
      {
        name: 'Stands',
        items: [
          { name: 'Paddock / Rear Stand', fits: 'Most electric dirt bikes', price: '~$39–$79' },
          { name: 'STACYC Bike Stand', fits: 'All STACYC', price: '~$50' },
          { name: 'Centre Stand (Sur-Ron compatible)', fits: 'Sur-Ron', price: '~$59–$99' },
        ],
      },
      {
        name: 'Cleaning & Lubrication',
        items: [
          { name: 'Bike Wash / Cleaner Spray', fits: 'All bikes', price: '~$14–$29' },
          { name: 'Chain Lube / Drivetrain Lube', fits: 'All chain-drive bikes', price: '~$9–$19' },
          { name: 'Battery Terminal Protector Spray', fits: 'All bikes', price: '~$9–$14' },
        ],
      },
      {
        name: 'Tools',
        items: [
          { name: 'Basic Tool Kit (hex, torx, spanners)', fits: 'All bikes', price: '~$29–$59' },
          { name: 'Torque Wrench', fits: 'All bikes', price: '~$39–$99' },
          { name: 'Puncture Repair Kit', fits: 'All bikes', price: '~$9–$19' },
        ],
      },
    ],
    faqs: [
      { q: 'What maintenance does an electric dirt bike need?', a: 'Far less than a gas bike — no oil, filters or spark plugs. You clean and lube the chain, check brake pads and tyre condition, keep bolts torqued correctly, and store the battery properly. A stand, chain lube and a torque wrench cover most of it.' },
      { q: 'How do I clean an electric dirt bike safely?', a: 'Use a gentle cleaner spray and a low-pressure hose or bucket — never a pressure washer aimed at the battery, connectors or bearings. Dry it, then relube the chain. High-pressure water forced past seals is the most common self-inflicted damage we see.' },
      { q: 'Why do I need a torque wrench?', a: 'Electric dirt bikes vibrate and see hard impacts, and both loose and over-tight bolts cause failures. A torque wrench from $39 lets you tighten to the manufacturer’s spec rather than by feel, which protects threads and keeps critical fasteners — axles, brakes, controllers — secure.' },
    ],
  },
  {
    slug: 'transport-storage',
    name: 'Transport & Storage',
    h1: 'Electric Dirt Bike Transport & Storage',
    keyword: 'dirt bike tie downs',
    short: 'Tie-downs, ramps, covers and battery storage.',
    metaDesc:
      'Dirt bike tie-down straps, loading ramps, covers and fireproof LiPo battery storage bags. Move and store your electric dirt bike safely. US dealer.',
    description:
      'Getting the bike to the trail and storing it safely between rides: tie-down straps, aluminium loading ramps, waterproof covers and — important for lithium bikes — fireproof battery storage bags. These are the unglamorous purchases that prevent a damaged bike or a garage fire, so they are worth doing properly.',
    brandLinks: ['sur-ron', 'stacyc'],
    groups: [
      {
        name: 'Transport',
        items: [
          { name: 'Dirt Bike Tie-Down Straps (x4)', fits: 'All bikes', price: '~$19–$39' },
          { name: 'Aluminium Loading Ramp', fits: 'All bikes', price: '~$99–$199' },
          { name: 'Padded Transport Bag (STACYC)', fits: 'STACYC', price: '~$39–$69' },
        ],
      },
      {
        name: 'Storage & Safety',
        items: [
          { name: 'Waterproof Bike Cover', fits: 'All bikes', price: '~$29–$49' },
          { name: 'Fireproof LiPo Battery Storage Bag', fits: 'All lithium packs', price: '~$19–$49' },
        ],
      },
    ],
    faqs: [
      { q: 'How do I transport an electric dirt bike safely?', a: 'Load it up an aluminium ramp into a truck or trailer and secure it with four tie-down straps, compressing the front suspension slightly so it cannot bounce loose. Never rely on a single strap or the side stand — a bike shifting in transit damages itself and the vehicle.' },
      { q: 'How should I store a lithium battery?', a: 'Store the pack at a partial charge (not full, not flat), somewhere cool and dry, ideally in a fireproof LiPo storage bag. Lithium packs are very safe in normal use, but a damaged pack is a fire risk, and a storage bag contains that risk for around $19–$49.' },
      { q: 'Do I need a cover if the bike lives in a garage?', a: 'It helps. A cover keeps dust off the bike, protects the seat and plastics from UV through a window, and discourages casual theft. A waterproof cover is essential if the bike lives outdoors or under a carport, from around $29.' },
    ],
  },
]

// ----------------------------------------------------------------------------
// POSTS (blog)
// ----------------------------------------------------------------------------
export const POSTS = [
  // Blog model: intro[] + sections[{h2, paras[]}] + optional faqs[] + cta.
  // Paragraphs may contain inline [text](/internal-link) markup (see Prose.jsx).
  {
    slug: 'stark-varg-factory-edition-2026',
    title: 'Stark Varg MX and EX Factory Editions: First Look at Stark’s Most Powerful Bikes Yet',
    metaTitle: 'Stark Varg Factory Edition: First Look',
    date: '2026-07-24',
    primaryKw: 'stark varg',
    metaDesc: 'Stark Varg MX and EX Factory Editions launched July 2026 at an estimated $15,990 and $16,990. First look at specs, price and US availability.',
    excerpt: 'Stark Future has unveiled Factory Edition versions of the Varg MX and EX. Here is what we know about price, specs and US availability.',
    intro: [
      'The Stark Varg is already the benchmark for electric motocross, and on July 22 2026 Stark Future pushed it further with two limited Factory Edition models — the Varg MX Factory Edition and the Varg EX Factory Edition. These are the most powerful, most exclusive bikes the company has built, and they sit above the standard [Stark Varg MX](/product/stark-varg-mx/) and [Stark Varg EX](/product/stark-varg-ex/) that we already stock.',
      'Here is our honest first look at what the Factory Editions are, what they are estimated to cost, and — the question we get asked most — when you will actually be able to buy one in the US.',
    ],
    sections: [
      {
        h2: 'What is the Stark Varg Factory Edition?',
        paras: [
          'The Factory Edition is a limited-production trim of the Varg platform, positioned above the 60 HP Standard and 80 HP Alpha versions that make up the current range. Stark Future builds the Varg around a 7.2 kWh battery, KYB suspension and Brembo brakes, with power configurable through the onboard display — and the Factory Edition takes that formula to its highest tune.',
          'There are two Factory Editions. The Varg MX Factory Edition is the closed-course motocross bike, built for the track. The Varg EX Factory Edition is based on the street-legal enduro EX, with lights and mirrors. Both are limited production, which is exactly why we are not listing them as orderable yet — more on that below.',
        ],
      },
      {
        h2: 'Stark Varg Factory Edition price',
        paras: [
          'Stark has positioned the Factory Editions at an estimated $15,990 for the MX and $16,990 for the EX. That is roughly $4,500 above the equivalent Alpha models. For context on where the rest of the range sits, browse the full [Stark Future range](/brands/stark-future/), and the [finance page](/finance/) covers Pay-in-4 options on eligible bikes.',
          'Treat those numbers as estimates. Stark Varg pricing — like all our pricing — moves with import tariff conditions, and Factory Edition allocation to the US is limited. We would rather quote you a firm figure when stock is confirmed than publish a number that changes before the bike lands.',
        ],
      },
      {
        h2: 'How does it compare to the standard Varg?',
        paras: [
          'If you are choosing between the range today, the standard bikes are the ones you can actually order. The [Stark Varg MX](/product/stark-varg-mx/) starts at $10,490 for the 60 HP Standard and $11,490 for the 80 HP Alpha. The street-legal [Stark Varg EX](/product/stark-varg-ex/) runs $12,900 and $13,900, and the supermoto [Stark Varg SM](/product/stark-varg-sm/) matches it.',
          'The Factory Editions add exclusivity and the highest factory tune, but the Alpha models already deliver 80 HP and the 33% larger battery. For the vast majority of riders, an Alpha is the sensible buy and it is available now rather than on an unconfirmed timeline.',
        ],
      },
      {
        h2: 'When can you buy one in the US?',
        paras: [
          'This is the honest part: we have not yet confirmed that we can source the Factory Editions for the US market. They launched days ago, production is limited, and allocation is not settled. We are not taking orders or deposits on them, and we would be wary of anyone who is.',
          'If you want one, the best move is to register your interest with us and buy an Alpha in the meantime if you need a bike this season. We will contact you the moment we can quote firm US pricing and a real delivery date. In the meantime, browse the full [Stark Future range](/brands/stark-future/) to see what is available today.',
        ],
      },
    ],
    faqs: [
      { q: 'How much is the Stark Varg Factory Edition?', a: 'Stark has positioned the Varg MX Factory Edition at an estimated $15,990 and the EX Factory Edition at an estimated $16,990 — roughly $4,500 above the equivalent Alpha models. These are estimates and not confirmed US pricing; tariff conditions and limited allocation can move them.' },
      { q: 'Is the Stark Varg Factory Edition street legal?', a: 'The EX Factory Edition is based on the street-legal enduro EX, so it is expected to follow the same path, while the MX Factory Edition is a closed-course motocross bike with no street-legal path. Road legality always depends on final certification and your state’s registration rules.' },
      { q: 'Can I order a Stark Varg Factory Edition now?', a: 'Not yet. The Factory Editions launched in July 2026, production is limited, and we have not confirmed US supply. We are not taking orders or deposits. Register your interest and consider a standard Varg Alpha if you need a bike this season.' },
    ],
    cta: { text: 'Explore the Stark Varg range', href: '/brands/stark-future/' },
  },
  {
    slug: '2026-stark-varg-sm-first-look',
    metaTitle: '2026 Stark Varg SM: First Look',
    title: '2026 Stark Varg SM First Look: Stark Takes It to the Streets',
    date: '2026-01-15',
    excerpt: 'Stark Future adds a supermoto build to the Varg lineup. Here is what the 2026 Varg SM means for street-legal electric riding.',
    keyword: 'stark varg sm',
    body: [
      'Stark Future built its reputation on the Varg, the electric motocross bike that outperformed gas 450s on the track. Now the company is taking the platform in a new direction with the 2026 Stark Varg SM — a supermoto build with street wheels, road-oriented rubber and a setup aimed at pavement as much as dirt.',
      'The Varg SM keeps the configurable power output that made the original Varg famous, letting riders dial performance up or down through the onboard display. What changes is the wheel and tire package and the suspension tune, which move the bike toward supermoto duty.',
      'The big question for US riders is street legality. A supermoto build only matters on the road if it can be registered, and that depends on final homologation and on your state’s rules for electric motorcycles. Do not assume the SM badge means road-legal everywhere — confirm certification and your state DMV requirements before riding on public roads.',
      'We will update this post with US pricing and availability as Stark confirms them. In the meantime, if street-legal electric performance is your goal, talk to us about which current models have the clearest registration path in your state.',
    ],
  },
  {
    slug: 'california-section-436-1-what-riders-need-to-know',
    metaTitle: 'California Section 436.1 Explained',
    title: 'California Section 436.1: What Electric Dirt Bike Riders Need to Know',
    date: '2025-12-01',
    excerpt: 'California’s Section 436.1 changes how off-highway electric dirt bikes are registered. Here is a plain-English rundown for riders.',
    keyword: 'california section 436.1 electric dirt bike',
    body: [
      'California Vehicle Code Section 436.1 affects how off-highway electric dirt bikes are treated for registration and use on public OHV land. If you ride in California, understanding it can be the difference between a legal ride and an impounded bike.',
      'In plain terms: most electric dirt bikes sold for off-road use are not street legal and must be operated on private land or on OHV routes with the correct registration. Section 436.1 clarifies the green-sticker / OHV registration expectations for these vehicles.',
      'This is general information, not legal advice. Rules change and enforcement varies by county. Always check the current California DMV and State Parks OHV guidance, and never assume a bike is street legal because it can be ridden fast.',
      'When you buy from VoltTrack, every listing states clearly whether a bike is off-road only or has a street-legal certification path. If you are a California rider and unsure, contact us before you buy and we will walk you through it honestly.',
    ],
  },
  {
    slug: 'electric-vs-gas-dirt-bike-cost-of-ownership',
    metaTitle: 'Electric vs Gas Dirt Bike: Cost of Ownership',
    title: 'Electric vs Gas Dirt Bike: The Real Cost of Ownership in 2026',
    date: '2026-02-10',
    excerpt: 'Electric dirt bikes cost more up front but far less to run. We break down the real five-year cost of ownership versus gas.',
    keyword: 'electric vs gas dirt bike cost',
    body: [
      'Electric dirt bikes often carry a higher sticker price than comparable gas machines, and that scares off some buyers. But sticker price is only part of the story. Once you factor in fuel, oil, filters, and the constant maintenance a two-stroke or four-stroke demands, the gap narrows fast — and often reverses.',
      'Fuel and oil: an electric dirt bike costs pennies to charge. A gas bike drinks premium fuel and, for two-strokes, premix oil every tank. Over a season of regular riding that adds up to real money.',
      'Maintenance: no pistons, valves, spark plugs, air filters or oil changes. Electric drivetrains have far fewer wear items. You still maintain tires, brakes, suspension and the chain, but you skip the engine-service treadmill entirely.',
      'Depreciation and tariffs: electric dirt bike pricing can move with import tariff conditions, so quoted prices are estimates. Even so, over a typical five-year hold, lower running and maintenance costs usually make the electric option competitive or cheaper overall — while being quieter and easier to ride where noise rules apply.',
    ],
  },
]

// ----------------------------------------------------------------------------
// FAQS (homepage + FAQ page; direct-answer 40-60 word format)
// ----------------------------------------------------------------------------
export const FAQS = [
  {
    q: 'What is VoltTrack?',
    a: 'VoltTrack is a US-based authorized dealer for the world’s leading electric dirt bike brands, including Sur-Ron, Stark Future, Talaria, STACYC, KTM and Razor. Founded by US off-road riders, VoltTrack offers honest expert advice, fast shipping to the Lower 48, financing and real post-purchase support.',
  },
  {
    q: 'Are electric dirt bikes street legal?',
    a: 'Most electric dirt bikes are sold for off-road, private-land or OHV use and are not street legal without specific federal and state certification. Some models offer a street-legal path. Every VoltTrack listing states this clearly, and we never oversell a bike’s street legality.',
  },
  {
    q: 'Do you ship across the United States?',
    a: 'Yes. VoltTrack offers fast US shipping to the Lower 48 states. Delivery timing depends on the model and your location. Contact us for shipping estimates on specific bikes or bulk orders.',
  },
  {
    q: 'Do you offer financing?',
    a: 'Yes. VoltTrack offers flexible financing including Pay-in-4 options on eligible orders, so you can spread the cost of your electric dirt bike. Financing availability depends on the product and approval.',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'VoltTrack accepts cryptocurrency (Bitcoin BTC and Tether USDT), bank transfer and credit card. Pay-in-4 financing is available on top of any of these payment methods on eligible bikes. Pay with crypto to save 5%.',
  },
  {
    q: 'Which electric dirt bike is right for my rider?',
    a: 'It depends on age, weight, experience and where you ride. Kids start on STACYC or Razor; teens step up to youth Talaria or KTM; adults choose Sur-Ron, Talaria, Stark or KTM by terrain and skill. Ask us and we’ll recommend honestly.',
  },
]

// ----------------------------------------------------------------------------
// GUIDES (evergreen buying guides)
// ----------------------------------------------------------------------------
// GUIDES (evergreen buying guides)
// Slugs are fixed by the keyword map — never invent or rename one.
// `keyword`: primary KW. `schema`: 'Article' (default) or 'HowTo'.
// ----------------------------------------------------------------------------
export const GUIDES = [
  {
    slug: 'best-electric-dirt-bikes-for-beginners',
    title: 'Best Electric Dirt Bikes for Beginners',
    keyword: 'electric dirt bike for beginners',
    metaDesc:
      'The best electric dirt bikes for beginners in 2026, from the 86lb Sur-Ron Hyper Bee to the value Talaria MX3. Honest advice from riders, not salespeople.',
    excerpt: 'New to electric dirt bikes? Here is how to pick a first bike that builds skill without overwhelming you.',
    body: [
      'The best beginner electric dirt bike is one you can control at low speed and grow into as your skill improves. That means three things: manageable weight, selectable ride modes that genuinely limit power, and a seat height you can flat-foot when you stop. Everything else is secondary.',
      'Weight matters more than most buyers expect. A bike you can pick up after a fall is a bike you will keep riding. The Sur-Ron Hyper Bee at 86 lb and the Talaria Sting MX3 at 110 lb are both far more forgiving than a 200 lb full-size machine, and both cap out around 47–50 mph — plenty to learn on.',
      'Ride modes are what let a first bike last. A bike locked at one power level is either too slow within a month or too fast on day one. Anything with three or four selectable modes lets you start conservative and open it up over a season, which is why we steer beginners away from single-speed bikes.',
      'Be honest about where you will ride. Almost every bike here is off-road, private-land and OHV use only, and is not street legal without specific state certification. California riders should understand green-sticker and OHV rules under Vehicle Code Section 436.1 before buying anything.',
      'Skip the full-size motocross machines entirely for now. A Stark Varg or Sur-Ron Storm Bee is a superb bike and a terrible first one. Buy the bike that matches your current skill, ride it hard for a season, and step up when the bike is genuinely holding you back.',
    ],
    related: ['sur-ron-hyper-bee', 'talaria-sting-mx3', 'e-ride-pro-mini'],
  },
  {
    slug: 'best-electric-dirt-bikes-for-adults',
    title: 'Best Electric Dirt Bikes for Adults',
    keyword: 'best electric dirt bike for adults',
    metaDesc:
      'The best electric dirt bikes for adults in 2026 by budget — Sur-Ron, Talaria, E-Ride Pro, Altis and Stark. Real recommendations from an authorized US dealer.',
    excerpt: 'From value trail bikes to race-spec motocross, here are the best adult electric dirt bikes by budget.',
    body: [
      'Adult electric dirt bikes span an enormous range, from $2,499 pit bikes to $13,900 race machines. The useful way to narrow it down is by budget band, because within each band the bikes are genuinely competitive and the choice comes down to fit and priorities rather than raw quality.',
      'Under $4,000, the E-Ride Pro SS at $3,799 and the Sur-Ron Hyper Bee at $3,699 are the standouts. The E-Ride Pro gives you more bike on paper — 72V, 12 kW and 60 mph — while the Hyper Bee gives you 86 lb of agility and Sur-Ron’s aftermarket. The Talaria Sting MX3 at $3,390 undercuts both.',
      'Between $4,000 and $7,000 the choice widens considerably. The Sur-Ron Light Bee X ($4,999) remains the reference lightweight, the Altis Sigma ($3,999) offers 98V and 70–80+ mph for less, the Segway Xaber 300 ($5,299) brings Samsung cells and Marzocchi suspension, and the Talaria Komodo ($5,999) is a genuine 96V enduro machine.',
      'Above $8,000 you are buying full-size machines. The Sur-Ron Storm Bee ($8,499) is 22.5 kW of electric motocross, the KTM Freeride E-XC ($11,499) brings KTM chassis quality and 2–3 hours of trail riding, and the Stark Varg range ($10,490 and up) is the fastest thing here with configurable output to 80 HP.',
      'All of these are off-road / OHV use only unless a street-legal path is stated on the individual listing — the Stark Varg EX and SM and the Sur-Ron Light Bee L1e are the exceptions, and even they depend on your state’s registration rules.',
    ],
    related: ['sur-ron-light-bee-x', 'talaria-komodo', 'e-ride-pro-ss', 'stark-varg-mx'],
  },
  {
    slug: 'best-electric-dirt-bikes-for-kids',
    title: 'Best Electric Dirt Bikes for Kids',
    keyword: 'best kids electric dirt bike',
    metaDesc:
      'The best kids electric dirt bikes by age — STACYC, Razor, KTM SX-E and GasGas MC-E from $229 to $5,449. Age-matched advice from an authorized US dealer.',
    excerpt: 'The right kids electric dirt bike depends on age, size and confidence. Here is a simple age-based guide.',
    body: [
      'Buy for your child’s size and confidence, not their age on the box. A cautious nine-year-old on a bike sized for twelve-year-olds will stop riding; a confident seven-year-old on a bike that is too slow will be bored in a fortnight. Age ranges are a starting point, not a rule.',
      'Ages 3 to 5: a STACYC 12eDRIVE at $649 is the standard answer. At 17 lb with three power modes it teaches balance and throttle control at once. For a child who wants a motocross bike specifically, the KTM SX-E 2 and GasGas MC-E 2 at $2,249 are real machines with adjustable seat heights.',
      'Ages 5 to 8: the STACYC 16eDRIVE ($899) and 18eDRIVE ($1,049) step up in wheel size and speed. This is also where the Razor MX125 at $229 makes sense as a low-cost way to find out whether your child actually takes to riding before you spend real money.',
      'Ages 8 to 13: the Razor MX350 ($389) is the volume seller for a reason, and the STACYC 20eDRIVE ($1,199) tops out at 17 mph. If your child is racing or serious, the KTM SX-E 5 and GasGas MC-E 5 at $5,449 are competition-capable with six ride modes and water-cooled motors.',
      'Whatever you buy, insist on a full-face helmet, goggles, gloves and knee protection from the first ride, and supervise on private land or designated off-road areas. None of these bikes is street legal, and adult supervision is not optional at any of these ages.',
    ],
    related: ['stacyc-12e-drive', 'stacyc-16e-drive', 'razor-mx350', 'ktm-sx-e-5'],
  },
  {
    slug: 'best-electric-dirt-bikes-under-2000',
    title: 'Best Electric Dirt Bikes Under $2,000 in 2026',
    keyword: 'electric dirt bike under $2000',
    metaDesc:
      'The best electric dirt bikes under $2,000 in 2026 — Razor Dirt Rocket from $229 and STACYC from $649. What you actually get at this price, honestly assessed.',
    excerpt: 'What you can genuinely buy under $2,000 — and what you cannot.',
    body: [
      'Let us be straight about what $2,000 buys. It does not buy a full-size adult electric dirt bike. Every genuine adult machine — Sur-Ron, Talaria, E-Ride Pro, Altis — starts above $2,400, and anything advertised as a full-size adult bike for under $2,000 is almost certainly a low-quality import with no parts support.',
      'What $2,000 does buy is an excellent kids or youth bike. The Razor Dirt Rocket range runs from the MX125 at $229 through the MX350 at $389, the MX500 at $459 and the MX650 at $599. These use sealed lead-acid batteries and single-speed motors, so expect 30–40 minutes of ride time and modest speeds — but at these prices that is an honest trade.',
      'Step up to the STACYC range and you get lithium batteries and three genuine power modes. The 12eDRIVE at $649, 16eDRIVE at $899, 18eDRIVE at $1,049 and 20eDRIVE at $1,199 all sit comfortably under budget, and the quick-swap battery system means a spare pack doubles your child’s ride time.',
      'The honest advice for an adult on a $2,000 budget: save a little longer. The gap between a $2,000 compromise and the $2,499 E-Ride Pro Mini or $2,799 Altis Delta is small in money and enormous in capability, warranty and parts availability. Buying twice costs more than buying once.',
      'Whatever you buy at this price, put $150–$250 aside for a helmet and protection. That is not an upsell — it is the single highest-value spend in this entire budget, and it matters far more than an extra 2 mph.',
    ],
    related: ['razor-mx350', 'razor-mx125', 'stacyc-12e-drive', 'razor-mx650'],
  },
  {
    slug: 'electric-vs-gas-dirt-bike',
    title: 'Electric vs Gas Dirt Bike: An Honest Comparison',
    keyword: 'electric vs gas dirt bike',
    metaDesc:
      'Electric vs gas dirt bikes compared honestly — running costs, maintenance, range, noise and resale. Where electric genuinely wins and where gas still does.',
    excerpt: 'Where electric genuinely beats gas, and where gas still wins.',
    body: [
      'Electric dirt bikes win decisively on running costs and maintenance. There are no pistons, valves, spark plugs, air filters or oil changes. You maintain tyres, brakes, suspension and the chain, and you charge for pennies. Over a season of regular riding the saving against premium fuel and premix oil is substantial and entirely real.',
      'They also win on noise and access. A near-silent bike can be ridden on land where a two-stroke would draw complaints, and it opens up early mornings and properties where gas bikes are simply not welcome. For a lot of riders this access advantage matters more than any spec on the page.',
      'Gas still wins on refuelling and long days. A five-minute fuel stop beats any charging solution, and if you are riding all day in the backcountry with no power, a gas bike is the practical choice. Electric range has improved enormously — the Talaria Dragon claims 93 miles — but a jerry can is still faster than a charger.',
      'Gas also currently wins on used-market depth and independent repair. Any small-engine shop can service a four-stroke; far fewer are comfortable with a 72V battery system. This is changing quickly, but if you live somewhere remote it is worth weighing honestly.',
      'On price, electric usually costs more up front and less to run. Note that electric dirt bike pricing moves with import tariff conditions, so quoted prices are estimates. Over a typical five-year hold, lower running and maintenance costs generally make electric competitive or cheaper overall — and quieter and easier to ride the whole way.',
    ],
    related: ['sur-ron-light-bee-x', 'talaria-komodo', 'ktm-freeride-exc'],
  },
  {
    slug: 'how-fast-do-electric-dirt-bikes-go',
    title: 'How Fast Do Electric Dirt Bikes Go?',
    keyword: 'fastest electric dirt bikes',
    metaDesc:
      'The fastest electric dirt bikes in 2026, ranked — from the 70mph Talaria Dragon and 68mph Sur-Ron Storm Bee to 8mph kids bikes. Real speeds, no marketing.',
    excerpt: 'Real top speeds across the range, from 8 mph kids bikes to 80 mph machines.',
    body: [
      'Top speed on an electric dirt bike depends on voltage, motor output, gearing and rider weight, so treat every published figure as a best case on flat ground. The numbers below are what these bikes realistically do, and they range across an entire order of magnitude.',
      'The fastest bikes we sell: the Stark Varg SM at around 80 mph and the Altis Sigma MX at 70–80+ mph lead, followed by the Talaria Dragon at 70 mph, the Sur-Ron Storm Bee at 68 mph and the Talaria Komodo at 66 mph. The E-Ride Pro SR reaches 62–70 mph for $4,799, which is remarkable value at this end.',
      'The mainstream 50–60 mph band is where most riders actually want to be: the E-Ride Pro SS and Segway Xaber 300 at 60 mph, the Sur-Ron Ultra Bee HP at 56 mph, the Talaria Sting MX5 Pro at 55 mph, the Sur-Ron Hyper Bee at 50 mph and the Light Bee X at 47 mph. These are fast enough to be genuinely exciting off-road.',
      'Youth and kids bikes are deliberately much slower, and that is the point: the STACYC range runs 7.5 to 17 mph, and Razor Dirt Rockets from 8 mph (MX125) to 17 mph (MX650). On dirt, 14 mph feels quick to a ten-year-old — do not buy speed a child has not earned.',
      'Speed is the least important number when choosing. Weight, ride modes, seat height and where you can legally ride all matter more day to day. Every bike above is off-road / OHV only unless its listing states a street-legal path, and none of these speeds are legal on a public road without proper certification and registration.',
    ],
    related: ['talaria-dragon', 'sur-ron-storm-bee', 'altis-sigma', 'e-ride-pro-sr'],
  },
  {
    slug: 'best-electric-dirt-bikes-10-year-old',
    title: 'Best Electric Dirt Bikes for 10 Year Olds (2026)',
    keyword: 'electric dirt bike for 10 year old',
    metaDesc:
      'The best electric dirt bikes for 10 year olds in 2026 — Razor MX350, STACYC 20eDRIVE and KTM SX-E 5. Sized and speed-matched advice from a US dealer.',
    excerpt: 'Ten is the age where the choice really opens up. Here is how to narrow it.',
    body: [
      'Ten is the age where a child can genuinely handle a real bike, and where the choice gets confusing. The right answer depends almost entirely on whether your rider is a casual weekend rider or already talking about racing — those two children need very different machines.',
      'For casual riding, the Razor MX350 at $389 is the obvious starting point. It tops out at 14 mph, runs about 30 minutes on a charge, and is sized for roughly ages 10–13. It is the most popular kids electric dirt bike sold, and for a first real off-road bike at this age it is very hard to argue against.',
      'For a rider who wants more, the STACYC 20eDRIVE at $1,199 reaches 17 mph with three power modes and a quick-swap lithium battery — a meaningful step up in build quality and ride time over the Razor. It suits ages 6–10, so a ten-year-old is at the top of its range.',
      'For a serious or racing rider, the KTM SX-E 5 and GasGas MC-E 5 at $5,449 are competition-capable youth motocross bikes with 5 kW water-cooled motors, adjustable seat heights and six ride modes. These are real race bikes, and they hold value far better than the budget options.',
      'Whichever you choose, size the bike so your rider can touch the ground comfortably, start in the lowest power mode, and insist on full protective gear. Ride on private land or designated OHV areas only — none of these bikes is street legal.',
    ],
    related: ['razor-mx350', 'stacyc-20e-drive', 'ktm-sx-e-5', 'gasgas-mc-e-5'],
  },
  {
    slug: 'best-electric-dirt-bikes-12-year-olds',
    title: 'Best Electric Dirt Bikes for 12 Year Olds (2026)',
    keyword: 'electric dirt bike for 12 year old',
    metaDesc:
      'The best electric dirt bikes for 12 year olds in 2026 — Razor MX500, Sur-Ron Hyper Bee and KTM SX-E 5. Honest sizing advice from an authorized US dealer.',
    excerpt: 'Twelve-year-olds are ready for real bikes — with real limits.',
    body: [
      'At twelve, most riders are physically capable of handling a proper dirt bike, and the limiting factor becomes judgement rather than strength. That makes selectable ride modes the single most important feature on the spec sheet: you want a bike that can be turned down now and opened up over the next two years.',
      'The Razor MX500 at $459 is the sensible budget answer, with dual suspension and 15 mph for ages 13–16 — a twelve-year-old sits just under that range but the dual suspension makes it far more capable on rough ground than the MX350. The MX650 at $599 is faster at 17 mph but is really a 16+ bike.',
      'The Sur-Ron Hyper Bee at $3,699 is the serious option. At 86 lb it is the lightest Sur-Ron, rated 12+, and its ride modes cap the speed well below the 50 mph top figure for early riding. It is a genuine adult-quality machine that a twelve-year-old can grow into for years rather than outgrow in one season.',
      'For a racing rider, the KTM SX-E 5 at $5,449 covers ages 4–12, so a twelve-year-old is at the very top of its range and may be better served by stepping up. Talk to us about sizing before committing at this age — the wrong call here is expensive.',
      'Be realistic about the 50 mph capability of a bike like the Hyper Bee. Start in the lowest mode, keep it there longer than your rider would like, and only open it up once you have watched them handle rough terrain confidently. Off-road and private land only.',
    ],
    related: ['sur-ron-hyper-bee', 'razor-mx500', 'ktm-sx-e-5'],
  },
  {
    slug: 'best-electric-dirt-bikes-13-year-olds',
    title: 'Best Electric Dirt Bikes for 13 Year Olds (2026)',
    keyword: 'electric dirt bikes for 13 year olds',
    metaDesc:
      'The best electric dirt bikes for 13 year olds in 2026 — Razor MX500, Sur-Ron Hyper Bee and Talaria Sting MX3. Sizing and safety advice from a US dealer.',
    excerpt: 'Thirteen is where youth bikes end and adult machines begin.',
    body: [
      'Thirteen is the awkward age in electric dirt bikes: most riders have outgrown the youth range entirely but are not yet adult sized. The mistake to avoid is buying another kids bike that will be outgrown in a season — at this age it is usually worth moving to a lightweight adult machine with strong ride-mode limiting.',
      'The Razor MX500 at $459 is the last of the budget bikes that genuinely fits, rated for ages 13–16 with dual suspension and 15 mph. If your rider is casual about it and you are not sure the interest will last, this is the low-risk option and it fits properly.',
      'The Sur-Ron Hyper Bee at $3,699 is the bike we most often recommend at this age. 86 lb is light enough for a thirteen-year-old to pick up and manage, the ride modes let you cap it far below 50 mph, and it will still be the right bike when they are seventeen. That longevity is what makes the price make sense.',
      'The Talaria Sting MX3 at $3,390 is the value alternative — 110 lb, 47 mph and four ride modes. It is slightly heavier than the Hyper Bee but cheaper, and for a rider who is already tall for their age it can actually fit better.',
      'Whatever you buy, the ride modes are the safety system. A thirteen-year-old on a bike locked in its highest mode is a bad outcome waiting to happen. Start low, progress slowly, insist on full gear, and stay on private land or OHV areas — none of these is street legal.',
    ],
    related: ['sur-ron-hyper-bee', 'talaria-sting-mx3', 'razor-mx500'],
  },
  {
    slug: 'best-electric-dirt-bikes-14-year-olds',
    title: 'Best Electric Dirt Bikes for 14 Year Olds (2026)',
    keyword: 'electric dirt bikes for 14 year olds',
    metaDesc:
      'The best electric dirt bikes for 14 year olds in 2026 — Talaria Sting MX3, E-Ride Pro Mini and Sur-Ron Hyper Bee. Real sizing advice from a US dealer.',
    excerpt: 'At fourteen, most riders are ready for a proper adult-class bike.',
    body: [
      'By fourteen, most riders are close enough to adult size that the youth range is genuinely behind them. The bikes below are all rated 14+ and are full members of the adult lightweight class — which means they need respect, full protective gear and sensible use of their ride modes.',
      'The Talaria Sting MX3 at $3,390 is the value pick: 6 kW, 60V, 47 mph and four ride modes at 110 lb. It is a real adult bike at a price that does not hurt if your rider’s interest fades, and its lower ride modes make the early months manageable.',
      'The E-Ride Pro Mini at $2,499 is the cheapest way into a capable machine. At around 30 mph and roughly 110 lb it is deliberately less intimidating than a full 50 mph bike, which for a fourteen-year-old who is still building confidence is a feature rather than a limitation.',
      'The Sur-Ron Hyper Bee at $3,699 remains the strongest all-round recommendation. 86 lb, 50 mph in the top mode, and Sur-Ron’s aftermarket depth mean it grows with the rider and holds its value. If the budget stretches, it is the bike least likely to be replaced in two years.',
      'Fourteen is old enough to understand the rules and young enough to need them enforced. These bikes are off-road, private-land and OHV use only, and are not street legal without specific state certification. California riders should follow Vehicle Code Section 436.1.',
    ],
    related: ['talaria-sting-mx3', 'e-ride-pro-mini', 'sur-ron-hyper-bee'],
  },
  {
    slug: 'best-electric-dirt-bikes-for-teens',
    title: 'Best Electric Dirt Bikes for Teens',
    keyword: 'electric dirt bikes for teens',
    metaDesc:
      'The best electric dirt bikes for teens in 2026 — Sur-Ron Hyper Bee, Talaria MX3, E-Ride Pro Mini and more, matched by age and size. Authorized US dealer.',
    excerpt: 'Teens are ready for more, but not full adult power. Here is how to choose.',
    body: [
      'Teenagers need real performance with real limits, and the good news is that the modern lightweight class delivers exactly that. Almost every bike here has three or four selectable ride modes, so a single bike can be appropriate at thirteen and still exciting at seventeen.',
      'For younger teens (13–15), the Sur-Ron Hyper Bee at $3,699 and the Talaria Sting MX3 at $3,390 are the strongest options. Both are light enough to manage — 86 lb and 110 lb respectively — and both cap out around 47–50 mph in their highest mode, which is fast but not absurd.',
      'For older or larger teens (16+), the step up is significant: the Sur-Ron Light Bee X at $4,999, the E-Ride Pro SS at $3,799 with 60 mph, or the Segway Xaber 300 at $5,299. At this point you are buying full adult machines and the rider needs the experience to match.',
      'Fit is more important than the badge on the tank. A teen should be able to touch the ground comfortably and pick the bike up unassisted after a fall. If they cannot do both, the bike is too big regardless of how well the specs read.',
      'Keep riding off-road and gear up fully — helmet, goggles, gloves, knee and elbow protection at minimum. None of these bikes is street legal without specific state certification, and a teenager riding one on a public road is a serious legal problem as well as a safety one.',
    ],
    related: ['sur-ron-hyper-bee', 'talaria-sting-mx3', 'e-ride-pro-ss', 'e-ride-pro-mini'],
  },
  {
    slug: 'are-electric-dirt-bikes-street-legal',
    title: 'Are Electric Dirt Bikes Street Legal? US Guide',
    keyword: 'street legal electric dirt bike',
    metaDesc:
      'Are electric dirt bikes street legal in the US? Which models have a real registration path, which never will, and what your state actually requires. Honest guide.',
    excerpt: 'Street legal, off-road only, OHV registration — a plain-English guide to US electric dirt bike law.',
    body: [
      'The short answer: most electric dirt bikes are not street legal, and no dealer can make one legal for you by saying so. Street legality is a function of federal certification, state registration and equipment — lights, mirrors, horn, DOT tyres and a compliant VIN — not of how the bike looks or how fast it goes.',
      'Most of what we sell is off-road, private-land and OHV use only. That includes the entire Sur-Ron Light Bee X, Ultra Bee and Storm Bee range, the Talaria Sting and X3 range, the E-Ride Pro line, the Altis bikes and the Segway Xaber 300. These are legal on private land and on OHV routes with the correct registration, and nowhere else.',
      'A small number of models do have a genuine street-legal path. The Stark Varg EX and Varg SM are built as street-legal enduro and supermoto machines, and the Sur-Ron Light Bee L1e is prepared for L1e-category homologation. Even for these, road legality depends on final certification and your specific state’s rules — it is a path, not a guarantee.',
      'California riders have an additional layer. Vehicle Code Section 436.1 governs green-sticker and OHV registration expectations for off-highway electric dirt bikes. If you ride in California, understanding it is the difference between a legal ride and an impounded bike, and it applies regardless of what the bike is capable of.',
      'This is general information, not legal advice. Rules change, enforcement varies by county, and your DMV is the authority. What we can promise is that every VoltTrack listing states plainly whether a bike is off-road only or has a street-legal path — we will never tell you a bike is street legal everywhere, because no electric dirt bike is.',
    ],
    related: ['stark-varg-ex', 'stark-varg-sm', 'sur-ron-light-bee-l1e'],
  },
  {
    slug: 'electric-dirt-bikes-california-legal-guide',
    title: 'California Section 436.1 Legal Guide',
    keyword: 'california section 436.1',
    metaDesc:
      'California Section 436.1 explained for electric dirt bike riders — green sticker, OHV registration and what you can legally ride. Plain-English 2026 guide.',
    excerpt: 'What California’s Section 436.1 means for electric dirt bike owners, in plain English.',
    body: [
      'California Vehicle Code Section 436.1 matters to anyone riding an off-highway electric dirt bike in the state. It clarifies how these vehicles are treated for registration and use on public OHV land, and it is the reason California riders need to think harder about paperwork than riders in most other states.',
      'In practical terms: an electric dirt bike sold for off-road use is not street legal in California and must be operated on private land, or on OHV routes with the correct green-sticker registration. Buying the bike is the easy part; registering it correctly for where you intend to ride is the part people skip and later regret.',
      'This applies regardless of the bike’s performance. A 17 mph Razor and a 68 mph Sur-Ron Storm Bee are both off-highway vehicles under these rules. Speed does not determine legality — certification and registration do, and no amount of capability turns an off-road bike into a road-legal one.',
      'If road use genuinely matters to you in California, look at the models with an actual street-legal path — the Stark Varg EX and SM, or the Sur-Ron Light Bee L1e — and confirm the specific registration requirements with the DMV before you buy, not after. We will happily walk you through what we know first.',
      'This is general information and not legal advice. Rules change and enforcement varies by county, so always check current California DMV and State Parks OHV guidance. If you are a California rider and unsure, contact us before buying and we will give you an honest answer, including telling you when a bike is not right for your situation.',
    ],
    related: ['stark-varg-ex', 'sur-ron-light-bee-l1e'],
  },
  {
    slug: 'sur-ron-light-bee-vs-ultra-bee',
    title: 'Sur-Ron Light Bee X vs Ultra Bee HP',
    keyword: 'sur-ron light bee vs ultra bee',
    metaDesc:
      'Sur-Ron Light Bee X vs Ultra Bee HP compared — 110lb and 47mph against 187lb and 56mph. Which Sur-Ron suits your terrain and skill, honestly assessed.',
    excerpt: 'Two Sur-Rons, two very different bikes. Here is how the Light Bee X and Ultra Bee HP compare.',
    body: [
      'The Sur-Ron Light Bee X is the lightweight icon: around 110 lb, 10 kW, 47 mph and endlessly upgradeable. The Ultra Bee HP is a full-size machine at 187 lb with a 21 kW HairPin motor, 74V/60Ah battery, 56 mph and considerably more suspension travel. They share a badge and very little else.',
      'Choose the Light Bee X if you ride tight trails and single-track, need to lift the bike into a truck alone, or want the deepest aftermarket in electric dirt biking. Its low weight forgives mistakes in a way a full-size bike simply does not, which matters more than peak power for most riders.',
      'Choose the Ultra Bee HP if you ride open terrain, want a bike that handles aggressive enduro without feeling out of its depth, or you are a larger rider who finds the Light Bee cramped. The extra $1,500 buys real capability, not just numbers.',
      'On running costs they are close, but the Ultra Bee’s larger 74V/60Ah pack costs more to replace — around $1,799 against roughly $1,499 for the Light Bee X pack. Factor that in if you are buying used or planning a long ownership.',
      'Both are off-road / OHV use only unless certified street-legal in your state. If you are genuinely torn, think about where you ride most rather than what you might ride someday — tight trails reward the Light Bee, open ground rewards the Ultra Bee.',
    ],
    related: ['sur-ron-light-bee-x', 'sur-ron-ultra-bee-hp'],
  },
]

// ----------------------------------------------------------------------------
// COMPARISON PAGES (/compare/<slug>/) — head-to-head buying decisions.
// Separate route from GUIDES because the keyword map assigns them separate URLs.
// ----------------------------------------------------------------------------
export const COMPARISONS = [
  {
    slug: 'sur-ron-vs-talaria',
    title: 'Sur-Ron vs Talaria: Which to Buy?',
    keyword: 'surron vs talaria',
    metaDesc:
      'Sur-Ron vs Talaria compared honestly — price, weight, aftermarket, resale and which brand suits your riding. From a US dealer that sells both.',
    excerpt: 'The two biggest names in lightweight electric dirt bikes, compared honestly by a dealer that sells both.',
    body: [
      'Sur-Ron and Talaria dominate the lightweight electric dirt bike class, and we sell both, so we have no reason to push you toward either. The honest summary: Talaria usually gives you more bike for the money as it comes; Sur-Ron gives you a better ecosystem to own it in.',
      'On price and stock spec, Talaria wins. The Sting MX3 at $3,390 undercuts the Sur-Ron Light Bee X at $4,999 substantially, and the Sting R MX4 at $3,735 delivers 8 kW and 53 mph for well under Sur-Ron money. Talaria ergonomics are also slightly roomier out of the box, which taller riders notice immediately.',
      'On aftermarket and resale, Sur-Ron wins clearly. The parts ecosystem around the Light Bee X — batteries from Chi, eWatt and DHS, EBMX controllers, suspension, wheels, plastics — is deeper than anything else in the class. If you plan to modify heavily, that depth is worth real money, and Sur-Rons hold their value better when you sell.',
      'On the higher end the comparison shifts. Talaria’s Komodo at $5,999 and Dragon at $7,649 offer 96V and 88V systems with 66–70 mph and 70–93 miles of range, which is more outright performance per dollar than Sur-Ron’s Ultra Bee HP at $6,499. If range and speed are your priority rather than modding, Talaria makes a strong case.',
      'Our practical advice: if this is your first electric dirt bike and you want to keep it simple, buy on fit and price — that often means Talaria. If you already know you will be upgrading batteries and controllers within a year, buy Sur-Ron and save yourself the parts hunt. Both are off-road / OHV use only.',
    ],
    related: ['sur-ron-light-bee-x', 'talaria-sting-r-mx4', 'talaria-komodo', 'sur-ron-ultra-bee-hp'],
  },
]

export const comparisonBySlug = (slug) => COMPARISONS.find((c) => c.slug === slug)

// ----------------------------------------------------------------------------

export const guideBySlug = (slug) => GUIDES.find((g) => g.slug === slug)

// Site-wide price disclaimer — required below every displayed price.
export const PRICE_DISCLAIMER =
  'Prices are estimates and subject to change due to import tariff conditions. Contact us to confirm current pricing before ordering.'

// Convenience lookups
export const productBySlug = (slug) => PRODUCTS.find((p) => p.slug === slug)
export const discontinuedBySlug = (slug) => DISCONTINUED.find((d) => d.slug === slug)
export const accessoryCatBySlug = (slug) => ACCESSORY_CATEGORIES.find((a) => a.slug === slug)
export const partBySlug = (slug) => PARTS.find((p) => p.slug === slug)
export const partsInCategory = (cat) => PARTS.filter((p) => p.category === cat)
// Display helper: "$1,499" or "$160–$200" for ranged parts.
export const partPriceLabel = (p) =>
  p.priceMax
    ? `$${p.price.toLocaleString('en-US')}–$${p.priceMax.toLocaleString('en-US')}`
    : `$${p.price.toLocaleString('en-US')}`
// Default (primary) variant of a product — always the first listed.
export const defaultVariant = (p) => (p.variants && p.variants.length ? p.variants[0] : null)
export const categoryBySlug = (slug) => CATEGORIES.find((c) => c.slug === slug)
export const brandBySlug = (slug) => BRANDS.find((b) => b.slug === slug)
export const postBySlug = (slug) => POSTS.find((p) => p.slug === slug)
export const productsInCategory = (slug) =>
  PRODUCTS.filter((p) => p.category === slug || (p.tags || []).includes(slug))
export const productsForBrand = (slug) => PRODUCTS.filter((p) => p.brand === slug)
export const brandName = (slug) => (brandBySlug(slug) || {}).name || slug
export const priceRange = (list) => {
  // Enquiry-only products have no price and must not drag a range down to $0.
  const prices = list.filter((p) => !p.enquire).map((p) => p.price)
  if (!prices.length) return null
  return { low: Math.min(...prices), high: Math.max(...prices) }
}
