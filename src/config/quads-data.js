// Electric quad / ATV section. Spread into CATEGORIES, BRANDS and PRODUCTS in site.js.
//
// Sourcing rules for this file (see CLAUDE.md legality + brand-facts rules):
//  - Specs and prices come from the manufacturer's own US product page, checked 2026-11-11.
//    Prices are MSRP-based estimates and the PRICE_DISCLAIMER is shown wherever a price is.
//  - `authorized: false` on every brand — VoltTrack is only an authorized dealer for the five
//    brands in SITE.authorizedBrands. Hub copy must say "carries", never "authorized".
//  - `freight: true` heavy vehicles ship by freight; the free-shipping line does not apply.
//  - Youth quads: only listed when the maker's product is clearly sold as a children's ride-on
//    or shows CPSC compliance. Unverified youth ATVs (Denago, MotoTec, etc.) are deliberately
//    NOT listed — the CPSC has issued stop-use warnings for non-compliant electric youth ATVs.

export const QUAD_CATEGORIES = [
  {
    slug: 'electric-quad-bikes',
    name: 'Electric Quad Bikes',
    h1: 'Electric Quad Bikes & ATVs',
    metaDesc:
      'Electric quad bikes and ATVs — Can-Am Outlander Electric, DRR EV Safari and Lightning, plus a Razor kids quad. Off-road use only. US dealer, estimated prices.',
    short: 'Electric quad bikes and ATVs for work, trail and yard.',
    description:
      'Electric quad bikes and ATVs — silent, fuel-free four-wheelers for farm and ranch work, trail riding and private land. From the Can-Am Outlander Electric to DRR sport and 4x4 quads, plus a Razor ride-on for kids. Off-road use only.',
    keyword: 'electric quad bikes',
    image: 'quad-bikes.webp',
  },
  {
    slug: 'adult-electric-quads',
    parent: 'electric-quad-bikes',
    name: 'Adult Electric Quads & ATVs',
    h1: 'Adult Electric Quads & ATVs',
    metaDesc:
      'Adult electric quads and ATVs — Can-Am Outlander Electric and MAX, DRR EV Safari 4x4, EV Adventure and EV Lightning. Off-road / OHV use only. US dealer.',
    short: 'Full-size electric ATVs for adults — utility, 4x4 and sport.',
    description:
      'Full-size electric quads for adult riders, from utility-class 4x4 ATVs with towing capability to lighter sport quads. Off-road, private-land and OHV use only.',
    keyword: 'adult electric quad',
    image: 'quad-adult.webp',
  },
  {
    slug: 'kids-electric-quads',
    parent: 'electric-quad-bikes',
    name: 'Kids Electric Quads',
    h1: 'Kids Electric Quads',
    metaDesc:
      'Kids electric quads for ages 8 and up — the Razor Dirt Quad ride-on with two speeds and reverse. Supervised riding on flat ground. Ships to the Lower 48.',
    short: 'Electric ride-on quads for younger riders.',
    description:
      'Electric ride-on quads for children, built for supervised play on flat, smooth ground. We only list kids quads from established makers that are sold as children\'s ride-ons.',
    keyword: 'kids electric quad',
    image: 'quad-kids.webp',
  },
]

export const QUAD_BRANDS = [
  {
    slug: 'can-am', name: 'Can-Am', officialSite: 'https://can-am.brp.com', audience: 'adult', authorized: false,
    h1: 'Can-Am Electric ATV — Outlander Electric',
    metaDesc:
      'Can-Am Outlander Electric and Outlander MAX Electric — 47 hp ROTAX E-POWER, 8.9 kWh battery, 1,830 lb towing. Off-road use. Estimated prices, US dealer.',
    intro:
      'Can-Am is BRP\'s off-road brand. The Outlander Electric is its full-size electric ATV: a liquid-cooled ROTAX E-POWER motor rated at 47 hp and 53 lb-ft, an 8.9 kWh battery, selectable 2WD/4WD and a 1,830 lb towing capacity. It comes as the single-seat Outlander Electric and the two-seat Outlander MAX Electric. Figures are manufacturer-published for the 2027 model year.',
    faqs: [
      { q: 'How far does the Can-Am Outlander Electric go on a charge?', a: 'Can-Am quotes up to 50 miles of range, with an average utility range of about 31 miles. Real-world range depends on load, terrain, speed and which power mode you use.' },
      { q: 'Is the Can-Am Outlander Electric street legal?', a: 'No. It is an off-road ATV for private land and designated OHV areas, and is not street legal. California riders follow Vehicle Code Section 436.1 and OHV registration rules.' },
      { q: 'What warranty does the Outlander Electric have?', a: 'BRP publishes a 5-year battery warranty (with a mileage limit) and a 1-year warranty on the motor and vehicle. Confirm the current terms before you buy.' },
    ],
  },
  {
    slug: 'drr-usa', name: 'DRR USA', officialSite: 'https://www.drrusa.com', audience: 'adult', authorized: false,
    h1: 'DRR USA Electric ATVs — EV Safari, Lightning & Adventure',
    metaDesc:
      'DRR USA electric ATVs — EV Safari 4x4, EV Adventure and EV Lightning sport quad. Quiet, fuel-free four-wheelers for work and trail. Estimated prices.',
    intro:
      'DRR USA sells a range of fully electric ATVs aimed at work, trail and recreation: the EV Safari 4x4 with selectable 2WD/4WD and differential locks, the EV Adventure with a 10 kW motor and up to 65 miles of range, and the EV Lightning sport quad. Speeds are electronically limited. Figures are those published by the manufacturer.',
    faqs: [
      { q: 'How fast are DRR electric ATVs?', a: 'DRR limits speed for rider safety: the EV Safari 4x4 to 35 mph, and the EV Adventure and EV Lightning to 40 mph.' },
      { q: 'Are DRR ATVs street legal?', a: 'No. They are off-road ATVs for private land and designated OHV areas. California riders follow Vehicle Code Section 436.1 and OHV registration rules.' },
      { q: 'What is the difference between the EV Safari, Adventure and Lightning?', a: 'The Safari 4x4 is the most capable, with 2WD/4WD and locking differentials. The Adventure is a 2x4 with a 10 kW motor, the longest range and an included hitch. The Lightning is a lighter 2x4 sport quad.' },
    ],
  },
]

const OFFROAD = 'No (off-road / OHV)'
const LEAD = 'Availability and delivery timing are confirmed when you order — contact us for the current lead time.'

export const QUAD_PRODUCTS = [
  // ---- CAN-AM ----
  {
    slug: 'can-am-outlander-electric', vehicle: 'quad', freight: true,
    name: 'Can-Am Outlander Electric 2027', titleName: 'Outlander Electric', h1: 'Can-Am Outlander Electric',
    price: 13249, brand: 'can-am', category: 'adult-electric-quads', tags: ['electric-quad-bikes'],
    badge: 'Utility 4x4', images: ['can-am-outlander-electric.webp'],
    specs: { power: '47 hp / 53 lb-ft (ROTAX E-POWER)', battery: '8.9 kWh, liquid-cooled', topSpeed: 'Speed limiter (Work / Standard / Sport)', range: 'Up to 50 mi (avg. utility ~31 mi)', weight: '~875 lb dry (est.)', modes: 'Work / Standard / Sport', roadLegal: OFFROAD, age: '16+ (adult-size ATV)' },
    metaDesc: 'Buy the Can-Am Outlander Electric from about $13,249. 47 hp, 8.9 kWh, 2WD/4WD and 1,830 lb towing. Off-road use only. US dealer, estimated price.',
    short: 'Can-Am\'s full-size electric ATV — 47 hp, selectable 2WD/4WD and 1,830 lb towing.',
    description: 'The Can-Am Outlander Electric is a full-size, single-seat electric utility ATV. A liquid-cooled ROTAX E-POWER motor delivers 47 hp and 53 lb-ft from an 8.9 kWh battery, with up to 50 miles of range (about 31 miles of average utility use). Selectable 2WD/4WD with a Visco-Lok QE front differential, Work, Standard and Sport modes, a 1,830 lb towing capacity, a 2-inch hitch receiver and 9 gallons of storage make it a working machine. Off-road, private-land and OHV use only.',
    availNote: `Manufacturer MSRP excludes transport and preparation. ${LEAD}`,
    footnote: 'Specifications are the manufacturer\'s published figures for the 2027 Outlander Electric. Top speed is not published by Can-Am; the power modes include a speed limiter.',
    faqs: [
      { q: 'How much does the Can-Am Outlander Electric cost?', a: 'The manufacturer\'s starting MSRP for the 2027 Outlander Electric is about $13,249, excluding transport and preparation. Prices are estimates and may change due to import tariff conditions — contact us to confirm the current price.' },
      { q: 'How long does it take to charge?', a: 'Can-Am quotes a 20% to 80% charge in as little as 50 minutes on a fast charger. Charging time depends on the charger and starting battery level.' },
      { q: 'How much can it tow?', a: 'Can-Am lists a towing capacity of 1,830 lb (830 kg) and a 2-inch hitch receiver.' },
      { q: 'Is the Outlander Electric street legal?', a: 'No. It is an off-road ATV for private land and designated OHV areas. California riders follow Vehicle Code Section 436.1 and OHV registration rules.' },
    ],
  },
  {
    slug: 'can-am-outlander-max-electric', vehicle: 'quad', freight: true,
    name: 'Can-Am Outlander MAX Electric 2027', titleName: 'Outlander MAX Electric', h1: 'Can-Am Outlander MAX Electric',
    price: 14549, brand: 'can-am', category: 'adult-electric-quads', tags: ['electric-quad-bikes'],
    badge: '2-seat', images: ['can-am-outlander-max-electric.webp'],
    specs: { power: '47 hp / 53 lb-ft (ROTAX E-POWER)', battery: '8.9 kWh, liquid-cooled', topSpeed: 'Speed limiter (Work / Standard / Sport)', range: 'Up to 50 mi (avg. utility ~31 mi)', weight: '~915 lb dry (est.)', modes: 'Work / Standard / Sport', roadLegal: OFFROAD, age: '16+ (adult-size ATV)' },
    metaDesc: 'Buy the Can-Am Outlander MAX Electric from about $14,549. Two-seat electric ATV, 47 hp, 8.9 kWh, 1,830 lb towing. Off-road only. US dealer, estimated price.',
    short: 'The two-seat Outlander Electric — same 47 hp powertrain with a removable passenger seat.',
    description: 'The Can-Am Outlander MAX Electric is the two-seat version of the Outlander Electric, with a removable passenger seat. It shares the 47 hp ROTAX E-POWER motor and 8.9 kWh liquid-cooled battery, with up to 50 miles of range, selectable 2WD/4WD, three power modes and a 1,830 lb towing capacity. Off-road, private-land and OHV use only.',
    availNote: `Manufacturer MSRP excludes transport and preparation. ${LEAD}`,
    footnote: 'Specifications are the manufacturer\'s published figures for the 2027 Outlander MAX Electric.',
    faqs: [
      { q: 'What is the difference between the Outlander Electric and the MAX?', a: 'The MAX carries two people with a removable passenger seat and weighs about 40 lb more (est. 915 lb vs 875 lb dry). The powertrain, battery and towing capacity are the same.' },
      { q: 'How much does the Outlander MAX Electric cost?', a: 'The manufacturer\'s starting MSRP for the 2027 MAX is about $14,549, excluding transport and preparation. Prices are estimates and may change due to import tariff conditions.' },
      { q: 'Is the Outlander MAX Electric street legal?', a: 'No. It is for private land and designated OHV areas only. California riders follow Vehicle Code Section 436.1 and OHV registration rules.' },
    ],
  },

  // ---- DRR USA ----
  {
    slug: 'drr-ev-safari-4x4', vehicle: 'quad', freight: true,
    name: 'DRR EV Safari 4x4', titleName: 'DRR EV Safari 4x4', h1: 'DRR EV Safari 4x4 Electric ATV',
    price: 14999, brand: 'drr-usa', category: 'adult-electric-quads', tags: ['electric-quad-bikes'],
    badge: '2WD / 4WD', images: ['drr-ev-safari-4x4.webp'],
    specs: { power: '11 kW', battery: 'Not published', topSpeed: '35 mph (limited)', range: 'Up to 50 mi', weight: 'Not published', modes: 'Drive / Sport, 2WD / 4WD', roadLegal: OFFROAD, age: 'Adult operators' },
    metaDesc: 'Buy the DRR EV Safari 4x4 electric ATV from about $14,999. 11 kW, selectable 2WD/4WD with differential locks, up to 50 miles. Off-road use only. US dealer.',
    short: 'DRR\'s 4x4 electric ATV — 11 kW, 2WD/4WD, locking differentials and electronic power steering.',
    description: 'The DRR EV Safari 4x4 is a fully battery-powered ATV with an 11 kW motor, selectable 2WD or 4WD, Drive and Sport modes, front and rear locks and electronic power steering. DRR quotes up to 50 miles of range and limits top speed to 35 mph for rider safety. Silent, with no fuel and no harmful emissions. Off-road, private-land and OHV use only.',
    availNote: `Range and speed are the manufacturer\'s figures under typical conditions. ${LEAD}`,
    footnote: 'Battery capacity, weight and towing figures are not published by DRR — contact us and we will confirm them with the manufacturer.',
    faqs: [
      { q: 'How much does the DRR EV Safari 4x4 cost?', a: 'DRR lists the EV Safari 4x4 at about $14,999. Prices are estimates and may change due to import tariff conditions — contact us for the current price.' },
      { q: 'How fast is the EV Safari 4x4?', a: 'DRR limits top speed to 35 mph for rider safety, with Drive and Sport modes.' },
      { q: 'Does it have four-wheel drive?', a: 'Yes — selectable 2WD and 4WD, with front and rear differential locks.' },
      { q: 'Is it street legal?', a: 'No. It is for private land and designated OHV areas only. California riders follow Vehicle Code Section 436.1 and OHV registration rules.' },
    ],
  },
  {
    slug: 'drr-ev-adventure', vehicle: 'quad', freight: true,
    name: 'DRR EV Adventure', titleName: 'DRR EV Adventure', h1: 'DRR EV Adventure Electric ATV',
    price: 13999, brand: 'drr-usa', category: 'adult-electric-quads', tags: ['electric-quad-bikes'],
    badge: 'Longest range', images: ['drr-ev-adventure.webp'],
    specs: { power: '10 kW', battery: 'Not published', topSpeed: '40 mph (limited)', range: 'Up to 65 mi', weight: 'Not published', modes: 'Not published', roadLegal: OFFROAD, age: 'Adult operators (passengers 12+ if permitted)' },
    metaDesc: 'Buy the DRR EV Adventure electric ATV from about $13,999. 10 kW motor, up to 65 miles of range, 2-inch hitch included. Off-road use only. US dealer.',
    short: 'DRR\'s long-range 2x4 electric ATV — 10 kW, up to 65 miles and an included hitch.',
    description: 'The DRR EV Adventure is a fully electric 2x4 ATV with a 10 kW motor and up to 65 miles of range — the longest of DRR\'s ATVs. Top speed is limited to 40 mph for rider safety, and a 2-inch ball hitch is included for hauling. DRR provides a limited one-year warranty on the vehicle (most parts 90 days). Off-road, private-land and OHV use only.',
    availNote: `Range and speed are the manufacturer\'s figures under typical conditions. ${LEAD}`,
    footnote: 'Battery capacity, weight and payload figures are not published by DRR — contact us and we will confirm them with the manufacturer.',
    faqs: [
      { q: 'How much does the DRR EV Adventure cost?', a: 'DRR lists the EV Adventure at about $13,999, excluding tax, title, registration and other fees. Prices are estimates and may change due to import tariff conditions.' },
      { q: 'How far will it go on a charge?', a: 'DRR quotes up to 65 miles, based on average battery life under typical usage. Speed, terrain and climbs reduce range.' },
      { q: 'Can it tow?', a: 'A 2-inch ball hitch is included. DRR does not publish a towing capacity, so contact us before towing a load.' },
      { q: 'Is it street legal?', a: 'No. It is for private land and designated OHV areas only. California riders follow Vehicle Code Section 436.1 and OHV registration rules.' },
    ],
  },
  {
    slug: 'drr-ev-lightning', vehicle: 'quad', freight: true,
    name: 'DRR EV Lightning', titleName: 'DRR EV Lightning', h1: 'DRR EV Lightning Electric Sport Quad',
    price: 8999, brand: 'drr-usa', category: 'adult-electric-quads', tags: ['electric-quad-bikes'],
    badge: 'Sport quad', images: ['drr-ev-lightning.webp'],
    specs: { power: '5 kW', battery: 'Not published', topSpeed: '40 mph (limited)', range: 'Up to 50 mi', weight: 'Not published', modes: 'Not published', roadLegal: OFFROAD, age: 'Operators 18+ (passengers 12+ if permitted)' },
    metaDesc: 'Buy the DRR EV Lightning electric sport quad from about $8,999. 5 kW motor, 40 mph limited, up to 50 miles. Off-road use only. US dealer, estimated price.',
    short: 'DRR\'s lighter 2x4 electric sport quad — 5 kW, 40 mph and up to 50 miles.',
    description: 'The DRR EV Lightning is DRR\'s electric adult sport quad: a 5 kW motor in a 2x4 chassis, with top speed limited to 40 mph for rider safety and up to 50 miles of range. Silent, fuel-free and low-maintenance. DRR requires operators to be 18 or older. Off-road, private-land and OHV use only.',
    availNote: `Range and speed are the manufacturer\'s figures under typical conditions. ${LEAD}`,
    footnote: 'Battery capacity and weight are not published by DRR — contact us and we will confirm them with the manufacturer.',
    faqs: [
      { q: 'How much does the DRR EV Lightning cost?', a: 'DRR lists the EV Lightning at about $8,999. Prices are estimates and may change due to import tariff conditions — contact us to confirm.' },
      { q: 'How old do you have to be to ride it?', a: 'DRR states that operators must be 18 or older, and passengers (if permitted) at least 12.' },
      { q: 'Is it street legal?', a: 'No. It is for private land and designated OHV areas only. California riders follow Vehicle Code Section 436.1 and OHV registration rules.' },
    ],
  },

  // ---- RAZOR (kids ride-on) ----
  {
    slug: 'razor-dirt-quad', vehicle: 'quad', freight: false,
    name: 'Razor Dirt Quad', titleName: 'Razor Dirt Quad', h1: 'Razor Dirt Quad Electric Ride-On',
    price: 850, brand: 'razor', category: 'kids-electric-quads', tags: ['electric-quad-bikes'],
    badge: 'Ages 8+', images: ['razor-dirt-quad.webp', 'razor-dirt-quad-2.webp'],
    specs: { power: '350 W, chain-driven with reverse', battery: '24V (two 12V) sealed lead-acid', topSpeed: '5 mph low / 8 mph high', range: '~80 min low / ~40 min high', weight: '89.1 lb', modes: '2-speed + forward / reverse', roadLegal: 'No (flat, smooth surfaces only — not an ATV)', age: '8+ (max rider 120 lb)' },
    metaDesc: 'Buy the Razor Dirt Quad for about $850. 24V electric ride-on for ages 8+, 8 mph, with reverse. Flat, smooth surfaces only. US dealer, estimated price.',
    short: 'Razor\'s electric ride-on quad for ages 8+ — two speeds, reverse and a 120 lb rider limit.',
    description: 'The Razor Dirt Quad is an electric ride-on for children aged 8 and up. A 350 W chain-driven motor runs on a 24V sealed lead-acid battery, with a high/low two-speed switch (5 mph and 8 mph), a forward/reverse switch, 12-inch pneumatic tires and a hand-operated rear disc brake. Maximum rider weight is 120 lb. Razor states it is not an ATV and is intended for flat, smooth surfaces only. Adult supervision required.',
    footnote: 'Specifications are Razor\'s published figures. Some assembly required; a battery charger is included.',
    faqs: [
      { q: 'What age is the Razor Dirt Quad for?', a: 'Razor rates it for ages 8 and up, with a maximum rider weight of 120 lb. Adult supervision is required.' },
      { q: 'How fast does it go?', a: 'Razor lists 5 mph on the low setting and 8 mph on the high setting, with a forward/reverse switch.' },
      { q: 'How long does the battery last?', a: 'About 80 minutes of continuous use on low speed and about 40 minutes on high speed from the 24V sealed lead-acid battery. Recharge fully after each ride.' },
      { q: 'Can it be ridden off-road?', a: 'Razor states it is intended for flat, smooth surfaces only and is not an ATV. For older riders see our youth electric dirt bikes.' },
    ],
  },
]
