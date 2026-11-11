// Parts for the electric quad section. Spread into PARTS in site.js (parts-data.js is auto-generated — do not edit it).
//
// Sourcing note (2026-11-11): Razor's own parts store has no fetchable price list. Fitment comes from Razor's service
// bulletins (Dirt Quad battery/charger port) and parts cross-references listing Razor part W13112099014 (24V 1.5A charger)
// for the Dirt Quad. Prices are VoltTrack estimates (the charger matches our existing Razor 24V charger price; the battery
// is in line with market listings of $60–66 for 24V quad packs) — CONFIRM both before ordering stock.
// Neither part fits the 36V Dirt Quad 500.
export const QUAD_PARTS = [
  {
    slug: 'razor-dirt-quad-24v-charger',
    images: ['razor-mx350-oem-charger.webp'],
    name: 'Razor Dirt Quad 24V Charger (1.5A)',
    sku: 'VT-CHG-011',
    price: 29,
    category: 'batteries-chargers',
    brandLabel: 'Razor',
    brandSlug: 'razor',
    keyword: 'razor 4 wheeler charger',
    h1: 'Razor Dirt Quad 24V Charger (1.5A) for the Razor 4 Wheeler',
    title: 'Razor Dirt Quad 24V Charger | VoltTrack Parts',
    metaDesc: 'Buy the Razor Dirt Quad 24V charger (VT-CHG-011) for $29. Replacement 1.5A charger for the 24V Razor 4 wheeler. Not for the 36V Dirt Quad 500.',
    fits: 'Razor Dirt Quad (24V)',
    compat: ['razor-dirt-quad'],
  },
  {
    slug: 'razor-dirt-quad-24v-battery',
    images: ['razor-mx350-24v-battery.webp'],
    name: 'Razor Dirt Quad 24V Replacement Battery Pack',
    sku: 'VT-BAT-033',
    price: 59,
    category: 'batteries-chargers',
    brandLabel: 'Razor',
    brandSlug: 'razor',
    keyword: 'razor 24v quad battery replacement',
    h1: 'Razor Dirt Quad 24V Replacement Battery Pack (2 x 12V)',
    title: 'Razor Dirt Quad 24V Battery Pack | VoltTrack Parts',
    metaDesc: 'Buy the Razor Dirt Quad 24V replacement battery pack (VT-BAT-033) for $59. Two 12V sealed lead-acid batteries with harness. Not for the Dirt Quad 500.',
    fits: 'Razor Dirt Quad (24V)',
    compat: ['razor-dirt-quad'],
  },
]
