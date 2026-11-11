// Long-form buying-guide content for each /shop/[cat]/ page (rendered below the product grid).
// Keyed by CATEGORIES slug. Paragraphs take inline [text](/internal-link) markup (see Prose.jsx).
// Facts here must match PRODUCTS specs in site.js — prices are estimates (PRICE_DISCLAIMER is shown
// on the page). Never claim a bike is street legal unless its listing states a certification path.
export const CATEGORY_CONTENT = {
  'adult-electric-dirt-bikes': {
    guide: [
      {
        h2: 'How to choose an adult electric dirt bike',
        paras: [
          'Adult electric dirt bikes fall into three power classes, and picking the right one matters more than chasing top speed. Lightweight trail bikes such as the [Sur-Ron Light Bee X](/product/sur-ron-light-bee-x/) (10 kW peak, about 110 lb) and the [Talaria Sting MX3](/product/talaria-sting-mx3/) (6 kW peak) are easy to load, flick through tight single-track and forgive mistakes.',
          'Mid-weight machines like the [Talaria Sting MX5 Pro](/product/talaria-sting-mx5-pro/) and the [E-Ride Pro SS](/product/e-ride-pro-ss/) add range and a more planted feel at speed. Full-size bikes — the [Sur-Ron Ultra Bee HP](/product/sur-ron-ultra-bee-hp/) at 21 kW, the [E-Ride Pro SR](/product/e-ride-pro-sr/) at 25 kW and the [Segway Xaber 300](/product/segway-xaber-300/) at 21 kW — suit experienced riders who want enduro-level power.',
        ],
      },
      {
        h2: 'Battery, range and weight',
        paras: [
          'Range figures are manufacturer estimates and drop with rider weight, terrain and how often you use the top ride mode. Most bikes here quote 40–60 miles; the E-Ride Pro SR claims about 100. Weight is the other trade-off: the [Sur-Ron Hyper Bee](/product/sur-ron-hyper-bee/) weighs around 86 lb while full-size bikes run well past 180 lb.',
          'Every bike has a removable or serviceable battery and selectable ride modes, so you can start in a gentler mode and open it up as your skills build. Spare and upgrade packs are covered in our [batteries and chargers](/parts-accessories/batteries-chargers/) range.',
        ],
      },
      {
        h2: 'Where you can ride',
        paras: [
          'Most adult electric dirt bikes are sold for off-road, private-land and OHV use only. A small number have a stated street-legal certification path, and even those depend on your state. Read our [street-legal guide](/guides/are-electric-dirt-bikes-street-legal/) and the [California Section 436.1 guide](/guides/electric-dirt-bikes-california-legal-guide/) before you buy.',
          'New to electric? Start with our guides to the [best electric dirt bike for beginners](/guides/best-electric-dirt-bikes-for-beginners/) and the [best electric dirt bikes for adults](/guides/best-electric-dirt-bikes-for-adults/), or compare the [Light Bee and Ultra Bee](/guides/sur-ron-light-bee-vs-ultra-bee/).',
        ],
      },
    ],
    faqs: [
      { q: 'How much do adult electric dirt bikes cost?', a: 'Our adult range runs from roughly $3,300 to $6,500, with the lightweight trail bikes at the lower end and full-size 21 kW-plus machines at the top. Prices are estimates and can change with import tariff conditions, so contact us to confirm the current price.' },
      { q: 'Which adult electric dirt bike is best for a beginner?', a: 'Most first-time adult riders do best on a lightweight bike such as the Sur-Ron Light Bee X or Talaria Sting MX3. They are light enough to pick up after a fall and have ride modes that cap power while you learn.' },
      { q: 'Can I ride an adult electric dirt bike on the street?', a: 'Not by default. Most models are sold for off-road, private-land and OHV use only. A few have a stated street-legal path, but registration depends on your state. We never describe a bike as street legal unless its listing says so.' },
      { q: 'Do these bikes come with a warranty?', a: 'Yes. VoltTrack is an authorized dealer for Sur-Ron, Stark Future, Talaria, STACYC and KTM, so those bikes carry the manufacturer warranty. See each listing for the details.' },
    ],
    related: [
      ['Best electric dirt bikes for adults', '/guides/best-electric-dirt-bikes-for-adults/'],
      ['Best electric dirt bike for beginners', '/guides/best-electric-dirt-bikes-for-beginners/'],
      ['How fast do electric dirt bikes go?', '/guides/how-fast-do-electric-dirt-bikes-go/'],
      ['Electric vs gas dirt bike', '/guides/electric-vs-gas-dirt-bike/'],
      ['Electric dirt bikes for 15-year-olds', '/guides/best-electric-dirt-bikes-15-year-olds/'],
      ['Electric dirt bikes for 16-year-olds', '/guides/best-electric-dirt-bikes-16-year-olds/'],
    ],
  },

  'youth-electric-dirt-bikes': {
    guide: [
      {
        h2: 'Matching a youth electric dirt bike to the rider',
        paras: [
          'Age is only a starting point — height, confidence and experience matter just as much. Our youth range is arranged by how a child progresses. The [STACYC 12eDRIVE](/product/stacyc-12e-drive/) (ages 3–5), [16eDRIVE](/product/stacyc-16e-drive/) (4–7), [18eDRIVE](/product/stacyc-18e-drive/) (5–8) and [20eDRIVE](/product/stacyc-20e-drive/) (6–10) are balance bikes with a gentle electric drive.',
          'For young riders ready for a full motorcycle feel, the [KTM SX-E 2](/product/ktm-sx-e-2/) (3–6), [KTM SX-E 3](/product/ktm-sx-e-3/) (4–10) and [KTM SX-E 5](/product/ktm-sx-e-5/) (4–12) have adjustable power. GasGas offers the matching [MC-E 2](/product/gasgas-mc-e-2/) and [MC-E 5](/product/gasgas-mc-e-5/).',
        ],
      },
      {
        h2: 'Budget starter bikes',
        paras: [
          'Razor Dirt Rocket bikes are the most affordable way into electric riding: the [MX125](/product/razor-mx125/) (ages 7–10), [MX350](/product/razor-mx350/) (10–13), [MX500](/product/razor-mx500/) (13–16) and [MX650](/product/razor-mx650/) (16+). They are simple single-speed bikes with lead-acid batteries and low top speeds of roughly 8–17 mph.',
          'Looking for a specific age? We have dedicated guides for [10-year-olds](/guides/best-electric-dirt-bikes-10-year-old/), [12-year-olds](/guides/best-electric-dirt-bikes-12-year-olds/), [13-year-olds](/guides/best-electric-dirt-bikes-13-year-olds/), [14-year-olds](/guides/best-electric-dirt-bikes-14-year-olds/) and [teens](/guides/best-electric-dirt-bikes-for-teens/).',
        ],
      },
      {
        h2: 'Safety and where kids can ride',
        paras: [
          'Always supervise young riders, and fit a helmet, goggles, gloves, boots and body protection every time. Shop the matching [helmets and protection](/parts-accessories/helmets-protection/). Youth bikes are for off-road, private-land or closed-course use only — not public roads.',
        ],
      },
    ],
    faqs: [
      { q: 'What is the best electric dirt bike for a 12-year-old?', a: 'It depends on size and experience. A confident 12-year-old often suits a Razor MX350 or MX500 as a budget starter, or a KTM SX-E 5 or GasGas MC-E 5 for a proper motorcycle feel with adjustable power. See our 12-year-old guide for a full comparison.' },
      { q: 'How much do kids electric dirt bikes cost?', a: 'Youth bikes in our range start at roughly $229 for the Razor MX125 and go up to about $5,449 for the KTM SX-E 5 and GasGas MC-E 5. Prices are estimates and may change due to import tariff conditions.' },
      { q: 'Can the power be limited for a beginner?', a: 'Yes. The KTM SX-E and GasGas MC-E bikes have adjustable power and ride modes, and the STACYC bikes have selectable speed modes, so you can set a lower limit and raise it as the rider improves.' },
      { q: 'Are youth electric dirt bikes street legal?', a: 'No. They are sold for off-road, private-land or closed-course use only and are not for public roads.' },
    ],
    related: [
      ['Best electric dirt bikes for kids', '/guides/best-electric-dirt-bikes-for-kids/'],
      ['Best electric dirt bikes for teens', '/guides/best-electric-dirt-bikes-for-teens/'],
      ['Electric dirt bikes for 13-year-olds', '/guides/best-electric-dirt-bikes-13-year-olds/'],
      ['Electric dirt bikes under $2,000', '/guides/best-electric-dirt-bikes-under-2000/'],
      ['Electric dirt bikes for 8-year-olds', '/guides/best-electric-dirt-bikes-8-year-olds/'],
      ['Electric dirt bikes for 9-year-olds', '/guides/best-electric-dirt-bikes-9-year-olds/'],
      ['Electric dirt bikes for 11-year-olds', '/guides/best-electric-dirt-bikes-11-year-olds/'],
    ],
  },

  'electric-motocross-bikes': {
    guide: [
      {
        h2: 'What makes an electric motocross bike different',
        paras: [
          'Electric motocross bikes are built for closed-course racing: more power, longer suspension travel and race geometry. At the top of the range, the [Stark Varg MX](/product/stark-varg-mx/) is configurable between 60 and 80 HP with a 7.2 kWh battery, while the [Sur-Ron Storm Bee](/product/sur-ron-storm-bee/) delivers 22.5 kW peak with a top speed of about 68 mph.',
          'The [Sur-Ron Ultra Bee MX](/product/sur-ron-ultra-bee-mx/) and the [Talaria Sting XXX](/product/talaria-sting-xxx/) bring motocross-style handling at a lower price. Read our [Storm Bee review](/blog/sur-ron-storm-bee-review/) or the [Stark Varg price guide](/blog/stark-varg-price-2026/) before you choose.',
        ],
      },
      {
        h2: 'Closed-course use only',
        paras: [
          'These bikes are sold for closed-course and off-road use only. They are not street legal. If you want a bike with a road-registration path, see our [street legal electric dirt bikes](/shop/street-legal-electric-bikes/) — and check your state first with the [street-legal checker](/electric-dirt-bike-street-legal-by-state/).',
        ],
      },
    ],
    faqs: [
      { q: 'How fast is an electric motocross bike?', a: 'The Sur-Ron Storm Bee reaches about 68 mph and the Talaria Sting XXX about 60 mph. The Stark Varg MX has a configurable 60–80 HP output and its top speed depends on gearing.' },
      { q: 'Are electric motocross bikes as fast as gas bikes?', a: 'High-end models such as the Stark Varg are built to match or beat gas 450s on the track. See our electric vs gas comparison for running costs and trade-offs.' },
      { q: 'Can I ride an electric motocross bike on the road?', a: 'No. They are sold for closed-course use only and are not street legal.' },
    ],
    related: [
      ['Electric vs gas dirt bike', '/guides/electric-vs-gas-dirt-bike/'],
      ['Sur-Ron Storm Bee review', '/blog/sur-ron-storm-bee-review/'],
      ['Stark Varg price guide', '/blog/stark-varg-price-2026/'],
      ['Stark Varg MX vs EX vs SM', '/guides/stark-varg-mx-vs-ex-vs-sm/'],
      ['How fast do electric dirt bikes go?', '/guides/how-fast-do-electric-dirt-bikes-go/'],
    ],
  },

  'electric-trail-bikes': {
    guide: [
      {
        h2: 'Choosing an electric trail or enduro bike',
        paras: [
          'Trail and enduro bikes trade a little outright power for range and rideability. The [Talaria Komodo](/product/talaria-komodo/) (about 70 mi range), the [Talaria Dragon](/product/talaria-dragon/) (about 93 mi) and the [KTM Freeride E-XC](/product/ktm-freeride-exc/) are built for long days on OHV trails and private land.',
          'The [Zero XB](/product/zero-xb/) and [Zero XE](/product/zero-xe/) are approachable full-size options, and the Stark Varg [EX](/product/stark-varg-ex/) is the performance flagship. Read our [Talaria Komodo review](/blog/talaria-komodo-review/) for a closer look.',
        ],
      },
      {
        h2: 'Street-legal options',
        paras: [
          'Some trail models have a stated street-legal path — for example the [Sur-Ron Light Bee L1e](/product/sur-ron-light-bee-l1e/) and the Stark Varg EX — but registration is state dependent. Always confirm your state\'s rules with our [street-legal checker](/electric-dirt-bike-street-legal-by-state/). Every bike without a stated path is for off-road, private-land and OHV use only.',
        ],
      },
    ],
    faqs: [
      { q: 'What is the longest-range electric trail bike?', a: 'The Talaria Dragon quotes about 93 miles and the Talaria Komodo about 70 miles. Range figures are manufacturer estimates and drop with rider weight, terrain and ride mode.' },
      { q: 'Are electric trail bikes street legal?', a: 'Most are sold for off-road, private-land and OHV use only. A few, such as the Sur-Ron Light Bee L1e and the Stark Varg EX, have a stated certification path that depends on your state.' },
      { q: 'Electric trail bike or electric motocross bike?', a: 'Choose a trail bike for range, comfort and mixed terrain. Choose a motocross bike if you will ride a closed course and want maximum power and suspension travel.' },
    ],
    related: [
      ['Talaria Komodo review', '/blog/talaria-komodo-review/'],
      ['Are electric dirt bikes street legal?', '/guides/are-electric-dirt-bikes-street-legal/'],
      ['California Section 436.1 guide', '/guides/electric-dirt-bikes-california-legal-guide/'],
      ['Best electric dirt bikes for adults', '/guides/best-electric-dirt-bikes-for-adults/'],
    ],
  },

  'electric-pit-bikes': {
    guide: [
      {
        h2: 'What is an electric pit bike?',
        paras: [
          'A pit bike is a small, lightweight dirt bike — originally used by racing teams to get around the pits, and now a popular first bike and yard toy. Electric pit bikes keep that compact size but swap the engine for a quiet electric drive, with no gas, oil changes or pull-starts.',
          'Our range includes the [E-Ride Pro Mini](/product/e-ride-pro-mini/) (about 30 mph, ages 14+) and the faster [Altis Delta](/product/altis-delta/) (13 kW peak, about 62 mph). For younger riders see our [youth electric dirt bikes](/shop/youth-electric-dirt-bikes/), including the [Razor Dirt Rocket](/product/razor-mx500/) range.',
        ],
      },
      {
        h2: 'Electric or gas pit bike?',
        paras: [
          'Electric pit bikes are quieter, cleaner and need far less maintenance, which makes them practical for yards, small properties and neighborhoods where engine noise is a problem. Gas pit bikes still win on cheap refueling and long runtime away from a charger. Our [electric vs gas comparison](/guides/electric-vs-gas-dirt-bike/) walks through the running costs.',
          'Pit bikes are for off-road and private-land use only — never public roads. Pair your bike with a [helmet and protective gear](/parts-accessories/helmets-protection/).',
        ],
      },
    ],
    faqs: [
      { q: 'How fast is an electric pit bike?', a: 'It depends on the model. The E-Ride Pro Mini tops out around 30 mph, while the Altis Delta is quoted at about 62 mph. Both have selectable ride modes.' },
      { q: 'Are electric pit bikes good for beginners?', a: 'Yes — their compact size and low seat height make them approachable. The E-Ride Pro Mini is rated for riders 14+, and for younger children we recommend our youth range.' },
      { q: 'How much does an electric pit bike cost?', a: 'Our pit bikes run from roughly $2,500 to $2,800. Prices are estimates and may change due to import tariff conditions.' },
    ],
    related: [
      ['Best electric pit bikes (2026 buying guide)', '/guides/best-electric-pit-bikes/'],
      ['Electric vs gas dirt bike', '/guides/electric-vs-gas-dirt-bike/'],
      ['Best electric dirt bike for beginners', '/guides/best-electric-dirt-bikes-for-beginners/'],
      ['Electric dirt bikes for teens', '/guides/best-electric-dirt-bikes-for-teens/'],
      ['Altis Sigma review', '/blog/altis-sigma-mx-review/'],
    ],
  },

  'cheap-electric-dirt-bikes': {
    guide: [
      {
        h2: 'What to expect at each budget',
        paras: [
          'Under $700 you are looking at the Razor Dirt Rocket range — the [MX125](/product/razor-mx125/), [MX350](/product/razor-mx350/), [MX500](/product/razor-mx500/) and [MX650](/product/razor-mx650/) — simple, low-speed bikes that suit younger riders and first-time yard riding.',
          'Between roughly $2,200 and $3,400 you reach real motorcycle-style performance: the [KTM SX-E 2](/product/ktm-sx-e-2/), [E-Ride Pro Mini](/product/e-ride-pro-mini/), [Altis Delta](/product/altis-delta/) and the adult [Talaria Sting MX3](/product/talaria-sting-mx3/). Our guide to [electric dirt bikes under $2,000](/guides/best-electric-dirt-bikes-under-2000/) covers the lower end in detail.',
        ],
      },
      {
        h2: 'Cheap does not mean disposable',
        paras: [
          'Very cheap electric dirt bikes sold online without a warranty or parts support can become expensive quickly. Every bike here is from a brand with US support. Check replacement-part availability before you buy — we stock [batteries, chargers and upgrades](/parts-accessories/) for the bikes we sell.',
        ],
      },
    ],
    faqs: [
      { q: 'What is the cheapest electric dirt bike you sell?', a: 'The Razor MX125 Dirt Rocket, from roughly $229, aimed at ages 7–10. Prices are estimates and may change due to import tariff conditions.' },
      { q: 'What is the cheapest adult electric dirt bike?', a: 'The Talaria Sting MX3 at roughly $3,390 is our lowest-priced adult-size bike. The Razor MX650 is cheaper but is a low-speed, 16+ starter bike.' },
      { q: 'Can I finance a cheaper electric dirt bike?', a: 'Pay-in-4 financing is available on eligible bikes. See our finance page for how it works.' },
    ],
    related: [
      ['Electric dirt bikes under $2,000', '/guides/best-electric-dirt-bikes-under-2000/'],
      ['Can you build an electric dirt bike for $1,000?', '/blog/can-you-build-electric-dirt-bike-1000/'],
      ['Financing', '/finance/'],
      ['Best electric dirt bike for beginners', '/guides/best-electric-dirt-bikes-for-beginners/'],
    ],
  },

  'street-legal-electric-bikes': {
    guide: [
      {
        h2: 'How street-legal registration works',
        paras: [
          'Street legality for an electric dirt bike depends on the model, how it is certified and your state — not on the bike alone. VoltTrack sells three bikes with a stated route to road registration: the [Sur-Ron Light Bee L1e](/product/sur-ron-light-bee-l1e/) (built for an L1e homologation path, about 28 mph limited), the [Stark Varg EX](/product/stark-varg-ex/) (street-legal enduro) and the [Stark Varg SM](/product/stark-varg-sm/) (supermoto).',
          'Even these require your state to accept the certification, plus registration, insurance and a licence where applicable. Use the [state-by-state checker](/electric-dirt-bike-street-legal-by-state/) and read the [California Section 436.1 guide](/guides/electric-dirt-bikes-california-legal-guide/) before ordering.',
        ],
      },
      {
        h2: 'Everything else is off-road only',
        paras: [
          'Every other bike we sell is for off-road, private-land and OHV use only. If you are not sure which bucket a bike falls in, read our full [street-legal guide](/guides/are-electric-dirt-bikes-street-legal/) or [contact us](/contact/) first.',
        ],
      },
    ],
    faqs: [
      { q: 'Is the Sur-Ron Light Bee L1e street legal?', a: 'It is built for an L1e-category homologation path and limited to about 28 mph, but road legality still depends on your state and its registration rules.' },
      { q: 'Is the Stark Varg street legal?', a: 'The Stark Varg EX (enduro) and SM (supermoto) are sold as street-legal models, subject to state registration. The Varg MX is a closed-course bike and is not street legal.' },
      { q: 'How do I register an electric dirt bike?', a: 'Rules vary by state. Start with the state-by-state checker on our site and confirm with your local DMV before you buy.' },
    ],
    related: [
      ['Are electric dirt bikes street legal?', '/guides/are-electric-dirt-bikes-street-legal/'],
      ['State-by-state street-legal checker', '/electric-dirt-bike-street-legal-by-state/'],
      ['California Section 436.1 guide', '/guides/electric-dirt-bikes-california-legal-guide/'],
      ['Stark Varg brand page', '/brands/stark-future/'],
    ],
  },

  'electric-quad-bikes': {
    guide: [
      {
        h2: 'What is an electric ATV?',
        paras: [
          'An electric ATV — also called an electric quad, electric four wheeler or e-ATV — swaps the engine and fuel tank for a battery and motor. You get instant torque, almost no noise and no oil changes or fuel, which suits farm and ranch work, hunting and trail riding where engine noise is a problem. The trade-offs are range, charging time and a higher purchase price than a comparable gas ATV.',
          'Our range splits into [electric ATVs for adults](/shop/adult-electric-quads/) — utility and 4x4 models such as the [Can-Am Outlander Electric ATV](/product/can-am-outlander-electric/) and [DRR EV Safari 4x4](/product/drr-ev-safari-4x4/) — and [kids electric 4 wheelers and quads](/shop/kids-electric-quads/) such as the [Razor Dirt Quad](/product/razor-dirt-quad/).',
        ],
      },
      {
        h2: 'Utility, 4x4 or sport?',
        paras: [
          'Choose a utility 4x4 if you tow, haul or ride rough ground: the Can-Am Outlander Electric lists a 1,830 lb towing capacity and selectable 2WD/4WD, and the DRR EV Safari 4x4 adds locking differentials. Choose a lighter 2x4 such as the [DRR EV Lightning](/product/drr-ev-lightning/) (5 kW, 40 mph limited) for recreational riding, or the [DRR EV Adventure](/product/drr-ev-adventure/) (10 kW, up to 65 miles) when you want range.',
          'Range figures are manufacturer estimates under typical conditions. Load, speed, terrain and climbs reduce them — Can-Am, for example, quotes up to 50 miles but about 31 miles of average utility use.',
        ],
      },
      {
        h2: 'Safety, age and where you can ride',
        paras: [
          'Electric ATVs are for off-road, private-land and designated OHV use only — not public roads. Every ATV sold in the US must be covered by an approved CPSC ATV action plan. We checked the CPSC list on 11 November 2026: Bombardier Recreational Products (Can-Am) and L & R Racing, Inc. d/b/a DRR both appear as active. Federal guidance recommends that riders under 16 do not operate adult-size ATVs.',
          'Always wear a helmet, goggles, gloves and boots, and follow your state\'s OHV rules; California riders follow Vehicle Code Section 436.1 and OHV registration requirements. Read our [street-legal guide](/guides/are-electric-dirt-bikes-street-legal/) and the [California Section 436.1 guide](/guides/electric-dirt-bikes-california-legal-guide/), and see our [helmets and protection](/parts-accessories/helmets-protection/).',
        ],
      },
      {
        h2: 'Charging, batteries and accessories',
        paras: [
          'Charging equipment varies by model, so contact us before you order and we will confirm what ships with your quad and what you need to add, such as a charging cable. For the Razor ride-on there is a [24V charger](/parts/razor-dirt-quad-24v-charger/) and a [replacement battery pack](/parts/razor-dirt-quad-24v-battery/); other quad batteries, chargers, tires and winches are available on request.',
          'Much of our existing gear works with quads too: [helmets and protection](/parts-accessories/helmets-protection/), [riding gear and boots](/parts-accessories/riding-gear/), and [transport and storage](/parts-accessories/transport-storage/) items such as tie-down straps and waterproof covers. [Contact us](/contact/) for quad-specific parts.',
        ],
      },
      {
        h2: 'Delivery',
        paras: [
          'Electric ATVs are heavy — the Outlander Electric is about 875 lb dry — so they ship by freight rather than as a parcel. Delivery and preparation costs are quoted before you pay, and manufacturer prices usually exclude transport and preparation. See our [shipping information](/shipping/).',
        ],
      },
    ],
    faqs: [
      { q: 'How much does an electric ATV cost?', a: 'Adult electric ATVs in our range run from roughly $9,000 to $14,500, depending on motor, range and drive system. A kids ride-on 4 wheeler is around $850. Prices are estimates and may change due to import tariff conditions.' },
      { q: 'How far can an electric quad go?', a: 'Manufacturers quote up to 50 miles for the Can-Am Outlander Electric, DRR EV Safari 4x4 and EV Lightning, and up to 65 miles for the DRR EV Adventure. Real range depends on load, terrain and speed.' },
      { q: 'Are electric quads and ATVs street legal?', a: 'No. They are off-road vehicles for private land and designated OHV areas. We never describe an off-road vehicle as street legal.' },
      { q: 'Are the ATVs you sell compliant with US safety rules?', a: 'The adult ATVs we list come from Can-Am (Bombardier Recreational Products) and DRR (L & R Racing, Inc.), both on the CPSC\'s list of active ATV action plans as of 11 November 2026. We do not list youth ATVs from makers that are not on that list.' },
      { q: 'Do electric ATVs ship free?', a: 'No — they ship by freight. Delivery is quoted before you pay, and the free-shipping offer on our bikes does not apply to quads.' },
    ],
    related: [
      ['Electric ATVs for adults', '/shop/adult-electric-quads/'],
      ['Kids electric 4 wheelers and quads', '/shop/kids-electric-quads/'],
      ['Electric UTVs and side-by-sides', '/shop/electric-utvs/'],
      ['Can-Am Outlander Electric ATV', '/product/can-am-outlander-electric/'],
      ['Are electric dirt bikes street legal?', '/guides/are-electric-dirt-bikes-street-legal/'],
    ],
  },

  'adult-electric-quads': {
    guide: [
      {
        h2: 'Choosing an electric ATV for adults',
        paras: [
          'An adult electric quad is a full-size electric ATV with enough power and chassis to carry a rider, a load or a tow. The [Can-Am Outlander Electric ATV](/product/can-am-outlander-electric/) (about $13,249) and the two-seat [Outlander MAX Electric ATV](/product/can-am-outlander-max-electric/) (about $14,549) have a 47 hp motor, 8.9 kWh battery and 1,830 lb towing capacity, the most powerful in our range.',
          'DRR offers three alternatives: the [EV Safari 4x4](/product/drr-ev-safari-4x4/) (about $14,999, 11 kW, 2WD/4WD with locks), the [EV Adventure](/product/drr-ev-adventure/) (about $13,999, 10 kW, up to 65 miles) and the lighter [EV Lightning](/product/drr-ev-lightning/) (about $8,999, 5 kW). Browse the [Can-Am](/brands/can-am/) and [DRR USA](/brands/drr-usa/) pages for more.',
        ],
      },
      {
        h2: 'Before you buy',
        paras: [
          'Check that the electric ATV matches your work: towing, payload, range and charging access all matter more than top speed. Ask about delivery — these are freight items — and confirm lead times with us, because availability is confirmed when you order. Both makers appear on the CPSC list of active ATV action plans (checked 11 November 2026). All prices are manufacturer-based estimates.',
        ],
      },
    ],
    faqs: [
      { q: 'Which electric ATV for adults has the longest range?', a: 'The DRR EV Adventure quotes up to 65 miles. The Can-Am Outlander Electric, DRR EV Safari 4x4 and EV Lightning quote up to 50 miles.' },
      { q: 'Which adult electric quad can tow the most?', a: 'The Can-Am Outlander Electric and Outlander MAX Electric list a 1,830 lb towing capacity. DRR does not publish towing figures — contact us before towing with a DRR quad.' },
      { q: 'What age do you need to be to ride an adult electric ATV?', a: 'DRR states operators must be 18 or older. Can-Am lists the Outlander as an adult-size ATV (16+). Follow your state\'s rules for minimum rider age.' },
    ],
    related: [
      ['Electric ATVs and quad bikes — overview', '/shop/electric-quad-bikes/'],
      ['Can-Am brand page', '/brands/can-am/'],
      ['DRR USA brand page', '/brands/drr-usa/'],
      ['Shipping information', '/shipping/'],
    ],
  },

  'kids-electric-quads': {
    guide: [
      {
        h2: 'Choosing a kids electric 4 wheeler',
        paras: [
          'The [Razor Dirt Quad](/product/razor-dirt-quad/) is a 24V electric 4 wheeler for children aged 8 and up, with a 120 lb maximum rider weight, two speeds (5 and 8 mph) and a reverse switch. Razor states that it is not an ATV and is intended for flat, smooth surfaces only, so treat it as a supervised play vehicle rather than a trail machine. Spares: [24V charger](/parts/razor-dirt-quad-24v-charger/) and [replacement battery pack](/parts/razor-dirt-quad-24v-battery/).',
          'For riders who want to head off-road, see our [youth electric dirt bikes](/shop/youth-electric-dirt-bikes/) — including the STACYC, KTM SX-E and Razor Dirt Rocket ranges — with adjustable power and ride modes.',
        ],
      },
      {
        h2: 'Are electric ATVs for kids legal and safe?',
        paras: [
          'Federal law requires every ATV, including youth ATVs, to be covered by an approved CPSC ATV action plan and to meet the mandatory ATV standard. The CPSC has repeatedly issued stop-use warnings for electric youth ATVs sold without one, and has terminated action plans for companies that broke the rules.',
          'We checked the CPSC list of active ATV action plans on 11 November 2026. The makers of the youth electric ATVs we looked at are not on it, so we do not list them. We will add a kids electric ATV only when its maker is on that list and the product is current and not under a recall. Always supervise young riders and fit a helmet and protective gear — see our [helmets and protection](/parts-accessories/helmets-protection/).',
        ],
      },
    ],
    faqs: [
      { q: 'What is the best electric 4 wheeler for kids?', a: 'For ages 8 and up on flat, smooth ground, the Razor Dirt Quad is a well-known ride-on with a hard speed limit. For off-road riding, a youth electric dirt bike with adjustable power is a better choice.' },
      { q: 'Is there a safe electric ATV for kids?', a: 'Any youth ATV must come from a maker with an approved CPSC ATV action plan. We only list one when its maker is on the CPSC list and the product is current; today our kids range is the Razor ride-on and our youth electric dirt bikes.' },
      { q: 'Can a child ride an adult electric ATV?', a: 'No. Federal safety guidance recommends that riders under 16 do not operate adult-size ATVs.' },
      { q: 'Is the Razor Dirt Quad for off-road use?', a: 'Razor states it is intended for flat, smooth surfaces only and is not an ATV.' },
    ],
    related: [
      ['Youth electric dirt bikes', '/shop/youth-electric-dirt-bikes/'],
      ['Best electric dirt bikes for kids', '/guides/best-electric-dirt-bikes-for-kids/'],
      ['Electric ATVs and quad bikes — overview', '/shop/electric-quad-bikes/'],
      ['Helmets and protection', '/parts-accessories/helmets-protection/'],
    ],
  },

  'electric-utvs': {
    guide: [
      {
        h2: 'What is an electric UTV?',
        paras: [
          'An electric UTV — a utility terrain vehicle, also called an electric side-by-side or electric SxS — is a battery-powered work vehicle with side-by-side seating and a cargo bed. Compared with a quad it carries more and offers a steering wheel and seat, and compared with a gas UTV it is silent, has no fuel and no exhaust, and needs far less maintenance.',
          'Our range starts with the [DRR EV Pathfinder 4x4](/product/drr-ev-pathfinder/): 2WD, 4WD and 4WL drive with a differential lock, 10 inches of ground clearance, a dump bed and tow hook, up to 50 miles of range and a 25 mph limited top speed. If you would rather have a single-rider machine, see our [electric ATVs and quad bikes](/shop/electric-quad-bikes/).',
        ],
      },
      {
        h2: 'Where an electric UTV makes sense',
        paras: [
          'Quiet, fuel-free power suits farms, ranches, hunting land, campgrounds and large properties where engine noise or fumes are a problem. The trade-offs are range, charging time and price, so check your daily distance and charging access before you buy. Figures from the manufacturer are estimates under typical conditions.',
          'Electric UTVs are for off-road, private-land and OHV use only — not public roads. California riders follow Vehicle Code Section 436.1 and OHV registration requirements; read our [street-legal guide](/guides/are-electric-dirt-bikes-street-legal/) first.',
        ],
      },
      {
        h2: 'Delivery',
        paras: [
          'UTVs are large and heavy, so they ship by freight. Delivery and preparation costs are quoted before you pay, and manufacturer prices exclude tax, title, registration and fees. See our [shipping information](/shipping/).',
        ],
      },
    ],
    faqs: [
      { q: 'What is the difference between a UTV and an ATV?', a: 'A UTV (side-by-side) seats two or more people side by side, usually has a steering wheel, roll structure and cargo bed, and is built for work. An ATV (quad) is a straddle-seat vehicle for one rider, steered with handlebars.' },
      { q: 'How much does an electric UTV cost?', a: 'The electric UTV in our range, the DRR EV Pathfinder 4x4, is about $18,999. Prices are estimates and may change due to import tariff conditions.' },
      { q: 'Are electric UTVs street legal?', a: 'No. They are off-road vehicles for private land and designated OHV areas.' },
    ],
    related: [
      ['DRR EV Pathfinder 4x4', '/product/drr-ev-pathfinder/'],
      ['Electric ATVs and quad bikes', '/shop/electric-quad-bikes/'],
      ['DRR USA brand page', '/brands/drr-usa/'],
      ['Shipping information', '/shipping/'],
    ],
  },
}
