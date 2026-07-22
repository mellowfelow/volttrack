// ============================================================================
// VoltTrack — SINGLE SOURCE OF TRUTH
// Editing one entry here regenerates routes, meta, JSON-LD, sitemap and nav.
// The domain lives ONLY in SITE.domain. Never hand-write a domain elsewhere.
// ============================================================================

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
// CATEGORIES (shop by rider/use)
// ----------------------------------------------------------------------------
export const CATEGORIES = [
  {
    slug: 'adult-electric-dirt-bikes',
    name: 'Adult Electric Dirt Bikes',
    short: 'Full-performance electric dirt bikes for adult riders.',
    description:
      'Full-size, full-performance electric dirt bikes for adult riders — from trail-ready Sur-Ron builds to race-spec Stark and Talaria machines. Off-road use unless certified street-legal.',
    keyword: 'adult electric dirt bikes',
  },
  {
    slug: 'youth-electric-dirt-bikes',
    name: 'Youth & Kids Electric Dirt Bikes',
    short: 'Age-appropriate electric dirt bikes for kids and teens.',
    description:
      'Right-sized electric dirt bikes for kids and teens, with adjustable power and ride modes for a safe way to learn. STACYC and Razor lead our youth lineup.',
    keyword: 'youth electric dirt bikes',
  },
  {
    slug: 'electric-motocross-bikes',
    name: 'Electric Motocross Bikes',
    short: 'Race-ready electric motocross machines.',
    description:
      'Track-focused electric motocross bikes built for closed-course racing — high power, full suspension travel and competition geometry. Off-road / closed-course use only.',
    keyword: 'electric motocross bikes',
  },
  {
    slug: 'electric-trail-bikes',
    name: 'Electric Trail Bikes',
    short: 'Trail and enduro electric bikes for the backcountry.',
    description:
      'Electric trail and enduro bikes tuned for range and rideability on OHV trails and private land. Some models offer street-legal certification — check each listing.',
    keyword: 'electric trail bikes',
  },
  {
    slug: 'electric-pit-bikes',
    name: 'Electric Pit Bikes',
    short: 'Compact electric pit bikes for the yard and pit lane.',
    description:
      'Compact, playful electric pit bikes — perfect for the pit lane, the yard and newer riders building confidence. Off-road use only.',
    keyword: 'electric pit bikes',
  },
]

// ----------------------------------------------------------------------------
// BRANDS
// ----------------------------------------------------------------------------
export const BRANDS = [
  { slug: 'sur-ron', name: 'Sur-Ron', audience: 'adult' },
  { slug: 'stark-future', name: 'Stark Future', audience: 'adult' },
  { slug: 'talaria', name: 'Talaria', audience: 'adult' },
  { slug: 'ktm', name: 'KTM', audience: 'adult' },
  { slug: 'segway', name: 'Segway', audience: 'adult' },
  { slug: 'zero', name: 'Zero Motorcycles', audience: 'adult' },
  { slug: 'altis', name: 'Altis', audience: 'adult' },
  { slug: 'e-ride-pro', name: 'E-Ride Pro', audience: 'adult' },
  { slug: 'stacyc', name: 'STACYC', audience: 'youth' },
  { slug: 'razor', name: 'Razor', audience: 'youth' },
]

// ----------------------------------------------------------------------------
// PRODUCTS (real names + prices carried over from the source site)
// images: [] → placeholder generated. First image is primary.
// ----------------------------------------------------------------------------
export const PRODUCTS = [
  { slug: 'sur-ron-light-bee-x', name: 'Sur-Ron Light Bee X 2025', price: 4999, brand: 'sur-ron', category: 'adult-electric-dirt-bikes', badge: 'Bestseller', images: [],
    short: 'The bike that started the electric dirt movement — light, torquey and endlessly upgradeable.',
    description: 'The Sur-Ron Light Bee X is the definitive lightweight electric dirt bike: around 110 lb, a punchy mid-drive motor and a removable 60V battery. Ideal for trails, single-track and pit duty. Off-road use only unless certified street-legal in your state.' },
  { slug: 'sur-ron-ultra-bee-hp', name: 'Sur-Ron Ultra Bee HP', price: 8999, brand: 'sur-ron', category: 'adult-electric-dirt-bikes', badge: 'Flagship', images: [],
    short: 'Sur-Ron’s full-size flagship — more power, more suspension, more range.',
    description: 'The Ultra Bee HP steps up to a full-size chassis, a high-output motor and long-travel suspension for aggressive trail and enduro riding. A genuine step between the Light Bee and full motocross machines.' },
  { slug: 'sur-ron-hyper-bee', name: 'Sur-Ron Hyper Bee', price: 3699, brand: 'sur-ron', category: 'youth-electric-dirt-bikes', badge: '', images: [],
    short: 'A smaller-format Sur-Ron for growing and lighter riders.',
    description: 'The Hyper Bee brings Sur-Ron engineering to a more compact package — approachable power delivery and manageable weight for younger or lighter riders stepping up from a first bike.' },
  { slug: 'sur-ron-storm-bee', name: 'Sur-Ron Storm Bee', price: 8500, brand: 'sur-ron', category: 'electric-motocross-bikes', badge: '', images: [],
    short: 'Full-size electric motocross power from Sur-Ron.',
    description: 'The Storm Bee is Sur-Ron’s full-size motocross machine — high torque, full suspension travel and race geometry for closed-course riding. Off-road / closed-course use only.' },
  { slug: 'sur-ron-ultra-bee-mx', name: 'Sur-Ron Ultra Bee MX', price: 8500, brand: 'sur-ron', category: 'electric-motocross-bikes', badge: '', images: [],
    short: 'Motocross-focused Ultra Bee build.',
    description: 'The Ultra Bee MX trims the road-oriented equipment for a purer closed-course setup — the same strong motor and suspension, tuned for the track.' },
  { slug: 'sur-ron-light-bee-l1e', name: 'Sur-Ron Light Bee L1e', price: 4500, brand: 'sur-ron', category: 'electric-trail-bikes', badge: 'Street-legal option', images: [],
    short: 'The L1e-homologated Light Bee for road-legal certification paths.',
    description: 'The Light Bee L1e is prepared for L1e homologation where applicable, offering a route toward street-legal registration. Legality varies by state — confirm requirements before road use.' },
  { slug: 'talaria-sting-r', name: 'Talaria Sting R MX4', price: 5700, brand: 'talaria', category: 'adult-electric-dirt-bikes', badge: 'Popular', images: [],
    short: 'Talaria’s upgraded Sting R — a strong Sur-Ron alternative.',
    description: 'The Talaria Sting R MX4 offers full-size feel, strong low-end torque and a comfortable trail setup at a competitive price — a favorite alternative to the Sur-Ron Light Bee.' },
  { slug: 'talaria-sting-mx5-pro', name: 'Talaria Sting MX5 Pro', price: 4800, brand: 'talaria', category: 'adult-electric-dirt-bikes', badge: '', images: [],
    short: 'Refined Sting with improved ergonomics and power delivery.',
    description: 'The Sting MX5 Pro refines Talaria’s formula with updated ergonomics and smoother, more controllable power — well suited to trail and light enduro riding.' },
  { slug: 'talaria-sting-xxx', name: 'Talaria Sting XXX', price: 6649, brand: 'talaria', category: 'electric-motocross-bikes', badge: '', images: [],
    short: 'The most aggressive Sting for track-focused riders.',
    description: 'The Sting XXX is Talaria’s most aggressive build, aimed at riders who want maximum performance for closed-course use.' },
  { slug: 'talaria-sting-mx3', name: 'Talaria Sting MX3', price: 3200, brand: 'talaria', category: 'youth-electric-dirt-bikes', badge: 'Value', images: [],
    short: 'An accessible entry into the Talaria range.',
    description: 'The Sting MX3 is an approachable, value-focused electric dirt bike ideal for newer and lighter riders getting started off-road.' },
  { slug: 'stark-varg-ex', name: 'Stark Varg EX', price: 12900, brand: 'stark-future', category: 'electric-motocross-bikes', badge: 'Race-spec', images: [],
    short: 'The bike that redefined electric motocross performance.',
    description: 'The Stark Varg EX delivers class-leading electric motocross performance with configurable power output and a purpose-built race chassis. Closed-course competition use.' },
  { slug: 'stark-varg-sm', name: 'Stark Varg SM', price: 12995, brand: 'stark-future', category: 'electric-trail-bikes', badge: 'New', images: [],
    short: 'Stark takes the Varg to the street with a supermoto build.',
    description: 'The 2026 Stark Varg SM brings supermoto wheels and setup to the Varg platform. Street legality depends on final certification and state law — see our blog first look.' },
  { slug: 'ktm-sx-e5', name: 'KTM SX-E 5', price: 5449, brand: 'ktm', category: 'youth-electric-dirt-bikes', badge: '', images: [],
    short: 'KTM’s premium youth electric motocross bike.',
    description: 'The KTM SX-E 5 is a factory-quality youth electric motocross bike with adjustable seat height and six selectable ride modes to grow with the rider.' },
  { slug: 'ktm-sx-e2', name: 'KTM SX-E 2', price: 3199, brand: 'ktm', category: 'youth-electric-dirt-bikes', badge: '', images: [],
    short: 'A first real KTM for the youngest riders.',
    description: 'The KTM SX-E 2 is a right-sized first electric motocross bike for young riders, with easy handling and adjustable power.' },
  { slug: 'stacyc-18e-drive', name: 'STACYC 18eDRIVE', price: 1049, brand: 'stacyc', category: 'youth-electric-dirt-bikes', badge: 'Kids', images: [],
    short: 'The balance-to-power stepping stone for young riders.',
    description: 'The STACYC 18eDRIVE is a lightweight electric balance bike with real power modes — the ideal first electric dirt bike for kids building confidence.' },
  { slug: 'stacyc-20e-drive', name: 'STACYC 20eDRIVE', price: 1199, brand: 'stacyc', category: 'youth-electric-dirt-bikes', badge: 'Kids', images: [],
    short: 'A larger STACYC for growing riders.',
    description: 'The STACYC 20eDRIVE steps up in size and power for slightly older kids ready for more speed and range.' },
  { slug: 'razor-mx650', name: 'Razor MX650', price: 599, brand: 'razor', category: 'youth-electric-dirt-bikes', badge: 'Entry', images: [],
    short: 'An affordable entry into electric dirt riding.',
    description: 'The Razor MX650 is a budget-friendly electric dirt bike for casual younger riders — an easy, low-cost first taste of off-road riding.' },
  { slug: 'e-ride-pro-ss3', name: 'E-Ride Pro SS3', price: 3499, brand: 'e-ride-pro', category: 'adult-electric-dirt-bikes', badge: '', images: [],
    short: 'A value full-size electric dirt bike with strong specs.',
    description: 'The E-Ride Pro SS3 packs a big battery and strong motor into a value-oriented full-size package for trail and off-road riding.' },
]

// ----------------------------------------------------------------------------
// POSTS (blog)
// ----------------------------------------------------------------------------
export const POSTS = [
  {
    slug: '2026-stark-varg-sm-first-look',
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
    a: 'VoltTrack accepts major payment methods including bank transfer and cryptocurrency (BTC/USDT), alongside financing options on eligible bikes. Contact us if you have a specific payment question before ordering.',
  },
  {
    q: 'Which electric dirt bike is right for my rider?',
    a: 'It depends on age, weight, experience and where you ride. Kids start on STACYC or Razor; teens step up to youth Talaria or KTM; adults choose Sur-Ron, Talaria, Stark or KTM by terrain and skill. Ask us and we’ll recommend honestly.',
  },
]

// ----------------------------------------------------------------------------
// GUIDES (evergreen buying guides)
// ----------------------------------------------------------------------------
export const GUIDES = [
  {
    slug: 'best-electric-dirt-bike-for-beginners',
    title: 'Best Electric Dirt Bike for Beginners — Adult Guide',
    keyword: 'best electric dirt bike for beginners',
    excerpt: 'New to electric dirt bikes? Here is how to pick a first bike that builds skill without overwhelming you.',
    body: [
      'The best beginner electric dirt bike is one you can control at low speed and grow into as your skill improves. For most adults starting out, that means a lightweight, torque-limited bike with selectable ride modes — the Sur-Ron Light Bee X and Talaria Sting R are both popular first choices.',
      'Look for adjustable or lower power modes, a manageable weight (around 110–130 lb for the light class), and a seat height you can flat-foot. Full-size motocross machines like the Stark Varg are exceptional but are not beginner tools.',
      'Start off-road on private land or OHV areas, wear full protective gear, and build throttle control before chasing top speed. When you are ready to step up, the same brands offer higher-output bikes so you keep your ecosystem.',
    ],
    related: ['sur-ron-light-bee-x', 'talaria-sting-r'],
  },
  {
    slug: 'best-electric-dirt-bikes-for-adults',
    title: 'Best Electric Dirt Bikes for Adults — All Budgets',
    keyword: 'best electric dirt bikes for adults',
    excerpt: 'From value trail bikes to race-spec motocross, here are the best adult electric dirt bikes by budget.',
    body: [
      'Adult electric dirt bikes span a wide range. Under $6,000, the Sur-Ron Light Bee X, Talaria Sting R and E-Ride Pro SS3 deliver strong trail performance and upgrade potential.',
      'In the $8,000–$9,000 range, the Sur-Ron Ultra Bee HP and Storm Bee move to full-size chassis and long-travel suspension. At the top, the Stark Varg redefines electric motocross with configurable, class-leading power.',
      'Choose by terrain and goal: light trails and single-track favor the lighter class; aggressive enduro and track riding reward the full-size machines. All are off-road unless a specific street-legal path is listed.',
    ],
    related: ['sur-ron-light-bee-x', 'sur-ron-ultra-bee-hp', 'stark-varg-ex'],
  },
  {
    slug: 'best-electric-dirt-bikes-for-kids',
    title: 'Best Electric Dirt Bikes for Kids — By Age Group',
    keyword: 'best electric dirt bikes for kids',
    excerpt: 'The right kids electric dirt bike depends on age, size and confidence. Here is a simple age-based guide.',
    body: [
      'For the youngest riders (roughly 3–7), a STACYC 18eDRIVE or 20eDRIVE is the ideal first electric dirt bike: light, low-power modes, and balance-bike simplicity that builds confidence safely.',
      'For growing kids (7–12), the Razor MX650 offers an affordable step up, while the KTM SX-E 2 brings factory quality and adjustable power for keen young riders.',
      'Always match power to the rider, insist on full protective gear, and supervise early rides on private land. Adjustable ride modes let a bike grow with your child rather than being outgrown in a season.',
    ],
    related: ['stacyc-18e-drive', 'razor-mx650', 'ktm-sx-e2'],
  },
  {
    slug: 'best-electric-dirt-bike-for-teens',
    title: 'Best Electric Dirt Bike for Teens — Safe Teen eMoto Guide',
    keyword: 'best electric dirt bike for teens',
    excerpt: 'Teens are ready for more, but not full adult power. Here is how to pick a teen electric dirt bike.',
    body: [
      'Teens riding electric dirt bikes need real performance with sensible limits. The KTM SX-E 5 and Talaria Sting MX3 hit that balance — enough power to progress, with ride modes to keep early sessions in check.',
      'Fit matters more than badge: a teen should be able to touch the ground and handle the bike’s weight comfortably. Adjustable power lets you start conservative and open it up as skill grows.',
      'Keep riding off-road and gear up fully. When a confident teen approaches adult size, the Sur-Ron Light Bee X is a common and capable next step.',
    ],
    related: ['ktm-sx-e5', 'talaria-sting-mx3', 'sur-ron-light-bee-x'],
  },
  {
    slug: 'sur-ron-vs-talaria',
    title: 'Sur-Ron vs Talaria Sting R — Which Electric Dirt Bike to Buy?',
    keyword: 'sur-ron vs talaria',
    excerpt: 'The two biggest names in lightweight electric dirt bikes, compared honestly.',
    body: [
      'Sur-Ron and Talaria dominate the lightweight electric dirt bike class, and the Light Bee X vs Sting R is the classic matchup. Both weigh around 110–130 lb, both use a mid-drive motor and removable battery, and both are hugely upgradeable.',
      'The Sur-Ron Light Bee X has the deeper aftermarket and resale strength. The Talaria Sting R often undercuts it on price and comes with a slightly roomier ergonomic package out of the box.',
      'For most riders it comes down to budget and local support. If you plan heavy upgrades and want the strongest resale, Sur-Ron. If you want more bike for the money stock, Talaria. Ask us and we’ll match one to your terrain and size.',
    ],
    related: ['sur-ron-light-bee-x', 'talaria-sting-r'],
  },
  {
    slug: 'sur-ron-light-bee-vs-ultra-bee',
    title: 'Sur-Ron Light Bee X vs Ultra Bee HP — Full Comparison',
    keyword: 'sur-ron light bee vs ultra bee',
    excerpt: 'Two Sur-Rons, two very different bikes. Here is how the Light Bee X and Ultra Bee HP compare.',
    body: [
      'The Sur-Ron Light Bee X is the lightweight icon: ~110 lb, nimble, and perfect for trails and pit duty. The Ultra Bee HP is a full-size machine with a bigger motor, more suspension travel and more range.',
      'Choose the Light Bee X if you value agility, easy transport and the deepest aftermarket. Choose the Ultra Bee HP if you want a bike that handles aggressive enduro and bridges toward full motocross performance.',
      'Both are off-road unless certified street-legal. If you are between them, think about where you ride most — tight trails reward the Light Bee, open terrain rewards the Ultra Bee.',
    ],
    related: ['sur-ron-light-bee-x', 'sur-ron-ultra-bee-hp'],
  },
  {
    slug: 'are-electric-dirt-bikes-legal-in-my-state',
    title: 'Are Electric Dirt Bikes Legal in My State? US Guide',
    keyword: 'are electric dirt bikes legal',
    excerpt: 'Street-legal, off-road only, OHV registration — a plain-English guide to US electric dirt bike laws.',
    body: [
      'Whether an electric dirt bike is legal to ride depends on where you ride it and how it is classified. Most electric dirt bikes are off-road only: legal on private land and on OHV routes with the correct registration, but not on public streets without specific certification.',
      'California riders should understand Vehicle Code Section 436.1 and green-sticker / OHV registration expectations. Other states have their own OHV rules and, in some cases, street-legal pathways for L1e-type machines.',
      'This is general information, not legal advice — always confirm current state DMV and OHV guidance. Every VoltTrack listing states whether a bike is off-road only or has a street-legal path, and we’ll help you understand your state before you buy.',
    ],
    related: [],
  },
]

export const guideBySlug = (slug) => GUIDES.find((g) => g.slug === slug)

// Convenience lookups
export const productBySlug = (slug) => PRODUCTS.find((p) => p.slug === slug)
export const categoryBySlug = (slug) => CATEGORIES.find((c) => c.slug === slug)
export const brandBySlug = (slug) => BRANDS.find((b) => b.slug === slug)
export const postBySlug = (slug) => POSTS.find((p) => p.slug === slug)
export const productsInCategory = (slug) => PRODUCTS.filter((p) => p.category === slug)
export const productsForBrand = (slug) => PRODUCTS.filter((p) => p.brand === slug)
export const brandName = (slug) => (brandBySlug(slug) || {}).name || slug
export const priceRange = (list) => {
  if (!list.length) return null
  const prices = list.map((p) => p.price)
  return { low: Math.min(...prices), high: Math.max(...prices) }
}
