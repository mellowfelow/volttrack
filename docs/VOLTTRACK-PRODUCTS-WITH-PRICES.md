# VoltTrack — Product List with Prices
## Definitive Version | July 2026 | For Claude Code Implementation

*All prices USD. Research-verified from live US dealer sources July 2026.*
*⚠️ Site disclaimer required on all product pages: "Prices are estimates and subject to change due to import tariff conditions. Contact us to confirm current pricing before ordering."*

---

## IMPLEMENTATION RULES (read before building any product page)

**Variant logic — three scenarios:**
- **Annual spec update** (same bike, new year) → 1 page, update in place. Badge old stock.
- **Simultaneous tiers** (same chassis, different specs) → 1 page + variant selector
- **Different bikes** → separate pages always

**Variant pages (1 page + selector):**
- Stark Varg MX: Standard $10,490 / Alpha $11,490
- Stark Varg EX: Standard $12,900 / Alpha $13,900
- Stark Varg SM: Standard $12,900 / Alpha $13,900
- Altis Sigma: Standard 19/19 $3,999 / Sigma MX 19/16 $4,199
- E-Ride Pro S: S 17" $3,299 / S 16" Fat Tire $3,499

**Old stock badge:** Add "2025 Model — $[discounted price]" as secondary variant when year stocks overlap. Remove when cleared.

**Schema:** Product with `offers` array for variants. Single canonical URL — URL never changes on variant switch.

**Order confirmation:** Must include variant name e.g. "Stark Varg EX — Alpha (80HP) × 1 — $13,900"

---

## SECTION 1 — BIKES: CONFIRMED PRODUCTS

---

### BRAND 1: SUR-RON
**Hub:** `/brands/sur-ron/` | **Category:** Adult Electric Dirt Bikes

| # | Model | URL | Price | Category Tags | Age |
|---|---|---|---|---|---|
| 1 | Sur-Ron Light Bee X (LBX) 2026 | `/product/sur-ron-light-bee-x/` | $4,999 | Adult, Trail, Off-Road | 14+ |
| 2 | Sur-Ron Ultra Bee HP 2026 | `/product/sur-ron-ultra-bee-hp/` | $6,499 | Adult, Trail, MX, Off-Road | 16+ |
| 3 | Sur-Ron Ultra Bee MX 2026 | `/product/sur-ron-ultra-bee-mx/` | $6,799 | Adult, Motocross, Off-Road | 16+ |
| 4 | Sur-Ron Storm Bee 2025 | `/product/sur-ron-storm-bee/` | $8,499 | Adult, Motocross, Full-Size | 18+ |
| 5 | Sur-Ron Hyper Bee 2025/2026 | `/product/sur-ron-hyper-bee/` | $3,699 | Youth/Adult, Trail, Lightweight | 12+ |
| 6 | Sur-Ron Light Bee L1e (Street Legal) | `/product/sur-ron-light-bee-l1e/` | $4,500 | Street Legal, Adult | 16+ |
| 7 | Sur-Ron Light Bee S *(REDIRECT only)* | `/product/sur-ron-light-bee-s/` | — | Redirects → Hyper Bee | — |

**Specs:** LBX: 10kW, 72V/35Ah | Ultra Bee HP: 21kW, 74V/60Ah, HairPin motor, ABS option | Storm Bee: 22.5kW, 84V/55Ah, 68mph | Hyper Bee: 8kW, 58V/22Ah, 86lb | L1e: EU road-legal L1e category
**Note:** Storm Bee — confirm US stock availability before publishing. Light Bee S discontinued 2025.
**Light Bee S Redirect Page spec:** `/product/sur-ron-light-bee-s/` → displays brief "This model has been discontinued" message, explains Hyper Bee as the successor, includes a 5-second auto-redirect OR a prominent "Shop the Sur-Ron Hyper Bee →" CTA button. Implement as 301 redirect in `_redirects` file pointing to `/product/sur-ron-hyper-bee/`. Page captures 5,400/mo searches still looking for this model.

---

### BRAND 2: TALARIA
**Hub:** `/brands/talaria/` | **Category:** Adult Electric Dirt Bikes

| # | Model | URL | Price | Category Tags | Age |
|---|---|---|---|---|---|
| 1 | Talaria Sting MX3 | `/product/talaria-sting-mx3/` | $3,390 | Adult, Trail, Budget | 14+ |
| 2 | Talaria Sting R MX4 | `/product/talaria-sting-r-mx4/` | $3,735 | Adult, Trail, Off-Road | 14+ |
| 3 | Talaria Sting MX5 Pro | `/product/talaria-sting-mx5-pro/` | $4,800 | Adult, Trail, MX, Performance | 16+ |
| 4 | Talaria Sting XXX | `/product/talaria-sting-xxx/` | $6,649 | Adult, MX, Performance, Track | 16+ |
| 5 | Talaria X3 | `/product/talaria-x3/` | $4,799 | Adult, Trail, Lightweight | 14+ |
| 6 | Talaria X3 Pro | `/product/talaria-x3-pro/` | $5,299 | Adult, Trail, Performance | 14+ |
| 7 | Talaria Komodo (TL6000) | `/product/talaria-komodo/` | $5,999 | Adult, Enduro, Performance | 16+ |
| 8 | Talaria Dragon | `/product/talaria-dragon/` | $7,649 | Adult, Enduro, Flagship | 18+ |

**Specs:** MX3: 6kW, 60V/38.4Ah, 47mph | MX4: 8kW, 60V/45Ah, 53mph | MX5 Pro: 72V/40Ah Samsung 50S | XXX: Frame-spine 60V battery | X3: 40Ah distributed frame battery — DIFFERENT from XXX | Komodo: 96V/45Ah, 32kW, 66mph, 70mi | Dragon: 88V/58.5Ah, 28kW, 70mph, 93mi
**Note:** X3 ≠ XXX — completely different products. Talaria Dragon US availability — verify before publishing.

---

### BRAND 3: STARK FUTURE (STARK VARG)
**Hub:** `/brands/stark-future/` | **Category:** Adult Electric Dirt Bikes / Motocross
**⚠️ VARIANT PAGES — 3 product URLs, each with Standard/Alpha selector**

| # | Model | URL | Standard Price | Alpha Price | Category Tags | Age |
|---|---|---|---|---|---|---|
| 1 | Stark Varg MX 1.2 | `/product/stark-varg-mx/` | $10,490 (60HP) | $11,490 (80HP) | Adult, Motocross, Race | 18+ |
| 2 | Stark Varg EX | `/product/stark-varg-ex/` | $12,900 (60HP) | $13,900 (80HP) | Adult, Enduro, Street Legal | 18+ |
| 3 | Stark Varg SM | `/product/stark-varg-sm/` | $12,900 (60HP) | $13,900 (80HP) | Adult, Supermoto, Street Legal | 18+ |

**Specs all models:** 7.2kWh battery, KYB suspension, Brembo brakes | MX: 21"/18" wheels, off-road only | EX: 21"/18", street-legal enduro, lights/mirrors | SM: 17" spoked wheelset, city + trail
**Alpha difference:** Higher power tune, 33% more battery, updated wiring, new inverter, new motor
**Pending:** Factory Editions ($15,990 MX / $16,990 EX) launched July 22 2026 — add when stock confirmed

---

### BRAND 4: KTM ELECTRIC
**Hub:** `/brands/ktm/` | **Category:** Youth Electric Dirt Bikes

| # | Model | URL | Price | Category Tags | Age |
|---|---|---|---|---|---|
| 1 | KTM SX-E 2 2025 | `/product/ktm-sx-e-2/` | $2,249 | Kids, Motocross, Entry | Ages 3–6 |
| 2 | KTM SX-E 3 2025 | `/product/ktm-sx-e-3/` | $3,649 | Youth, Motocross, Kids | Ages 4–10 |
| 3 | KTM SX-E 5 2026 | `/product/ktm-sx-e-5/` | $5,449 | Youth, Motocross, Racing | Ages 4–12 |
| 4 | KTM Freeride E-XC 2025 | `/product/ktm-freeride-exc/` | $11,499 | Adult, Trail, Enduro | 16+ |

**Specs:** SX-E 2: 1.8kW hub motor, 470–500mm seat, 100min | SX-E 3: bridge between SX-E 2 and SX-E 5 | SX-E 5: 5kW water-cooled, new 2025 frame | Freeride E-XC: 5.5kWh, 19.2kW, 247lb, 2–3hr trail
**Note:** Verify US KTM distribution channel before publishing (Pierer group financial restructuring).

---

### BRAND 5: STACYC
**Hub:** `/brands/stacyc/` | **Category:** Kids Electric Bikes

| # | Model | URL | Price | Category Tags | Age |
|---|---|---|---|---|---|
| 1 | STACYC 12eDRIVE | `/product/stacyc-12e-drive/` | $649 | Kids, Balance, Entry | Ages 3–5 |
| 2 | STACYC 16eDRIVE Brushless | `/product/stacyc-16e-drive/` | $899 | Kids, Balance, Intermediate | Ages 4–7 |
| 3 | STACYC 18eDRIVE | `/product/stacyc-18e-drive/` | $1,049 | Kids, Balance, Intermediate | Ages 5–8 |
| 4 | STACYC 20eDRIVE | `/product/stacyc-20e-drive/` | $1,199 | Kids/Youth, Performance | Ages 6–10 |

**Specs:** All: 20V Li-ion, 3 power modes, quick-swap battery | 12eDRIVE: ~17lb, 60min | 16eDRIVE: Brushless motor | 18eDRIVE: 13mph | 20eDRIVE: 17mph
**Note:** KTM-owned brand. Compatible with Milwaukee/DeWalt/Makita power tool battery adapters (aftermarket, $75–$80, voids warranty).

---

### BRAND 6: E-RIDE PRO
**Hub:** `/brands/e-ride-pro/` | **Category:** Adult Electric Dirt Bikes
**⚠️ S-LINE: 1 page with variant selector (S 17" / S 16" Fat Tire)**

| # | Model | URL | Price | Category Tags | Age |
|---|---|---|---|---|---|
| 1 | E-Ride Pro Mini | `/product/e-ride-pro-mini/` | $2,499 | Pit Bike, Adult/Youth | 14+ |
| 2 | E-Ride Pro S *(variant page)* | `/product/e-ride-pro-s/` | $3,299 / $3,499 | Adult, Trail, Compact | 14+ |
| 3 | E-Ride Pro SS *(current gen)* | `/product/e-ride-pro-ss/` | $3,499 (2.0) / $3,799 (3.0) | Adult, Trail, MX, Value | 16+ |
| 4 | E-Ride Pro SR | `/product/e-ride-pro-sr/` | $4,799 | Adult, Trail, Flagship | 18+ |

**S variants:** S 17" Standard $3,299 | S 16" Fat Tire (supermoto) $3,499
**SS variants:** SS 2.0 $3,499 (72V/40Ah, 12kW, 60mph) | SS 3.0 $3,799 (Bluetooth tuning, better brakes) — use SS 3.0 as primary, badge SS 2.0 as old stock if still available
**SR:** 72V/50Ah, 25kW, 62–70mph, 100mi range, Bluetooth

---

### BRAND 7: ALTIS POWERSPORTS
**Hub:** `/brands/altis/` | **Category:** Adult Electric Dirt Bikes
**⚠️ SIGMA: 1 page with variant selector (Standard 19/19 / MX 19/16)**

| # | Model | URL | Price | Category Tags | Age |
|---|---|---|---|---|---|
| 1 | Altis Delta | `/product/altis-delta/` | $2,799 | Pit Bike, Adult/Youth, Mid-Size | 14+ |
| 2 | Altis Sigma *(variant page)* | `/product/altis-sigma/` | $3,999 / $4,199 | Adult, Trail/MX, Performance, 98V | 16+ |

**Sigma variants:** Standard (19"/19") $3,999 | Sigma MX (19"/16") $4,199
**Specs:** Delta: 72V/13kW, 62mph | Sigma: 98V/35Ah Samsung 50S, 22–25kW, 70–80+mph
**Pending:** Altis Omega (144V race flagship, 2026) — add when consumer-available

---

### BRAND 8: ZERO MOTORCYCLES
**Hub:** `/brands/zero/` | **Category:** Adult Electric Dirt Bikes / Dual-Sport

| # | Model | URL | Price | Category Tags | Age |
|---|---|---|---|---|---|
| 1 | Zero XB 2026 | `/product/zero-xb/` | $5,095 | Adult, Trail, Off-Road, Lightweight | 16+ |
| 2 | Zero XE 2026 | `/product/zero-xe/` | $7,395 | Adult, Trail, Dual-Sport, Enduro | 16+ |
| 3 | Zero FX 2025 | `/product/zero-fx/` | $12,495 | Adult, Dual-Sport, Premium | 18+ |

**Specs:** XB: 2026 dirt-return model, 19" wheels, lightest Zero, $5,095 confirmed | XE: 4.3kWh, 15.5kW, 21"/18" wheels, 65mi range, $7,395 confirmed | FX: premium dual-sport
**Note:** Zero pricing subject to tariff changes — include note on product pages. Second Zero battery: ~$2,749.

---

### BRAND 9: RAZOR
**Hub:** `/brands/razor/` | **Category:** Kids Electric Dirt Bikes

| # | Model | URL | Price | Category Tags | Age |
|---|---|---|---|---|---|
| 1 | Razor MX125 Dirt Rocket | `/product/razor-mx125/` | $229 | Kids, Entry, Off-Road | Ages 7–10 |
| 2 | Razor MX350 Dirt Rocket | `/product/razor-mx350/` | $389 | Kids, Off-Road, Best Seller | Ages 10–13 |
| 3 | Razor MX500 Dirt Rocket | `/product/razor-mx500/` | $459 | Youth, Off-Road, Intermediate | Ages 13–16 |
| 4 | Razor MX650 Dirt Rocket | `/product/razor-mx650/` | $599 | Youth/Adult, Off-Road, Fastest | Ages 16+ |

**Specs:** MX125: 12V, 8mph, 110lb limit | MX350: 24V, 14mph, 30min | MX500: 36V, 15mph, dual suspension | MX650: 36V, 17mph, 220lb limit
**Note:** MX400 ≈ MX350 color variant only — no separate product page. Mention as footnote on MX350 page.

---

### BRAND 10: SEGWAY POWERSPORTS
**Hub:** `/brands/segway/` | **Category:** Adult Electric Dirt Bikes

| # | Model | URL | Price | Category Tags | Age |
|---|---|---|---|---|---|
| 1 | Segway Xaber 300 2026 | `/product/segway-xaber-300/` | $5,299 | Adult, Off-Road, Performance | 16+ |
| 2 | Segway Xyber | `/product/segway-xyber/` | Contact for price | Adult, E-Moto Style, Trail | 16+ |
| 3 | Segway Xafari | `/product/segway-xafari/` | Contact for price | Adult, Trail E-Bike, Adventure | 14+ |
| 4 | Segway X260 *(REDIRECT)* | `/product/segway-x260/` | — | Redirects → Xaber 300 | — |
| 5 | Segway X160 *(REDIRECT)* | `/product/segway-x160/` | — | Redirects → Xaber 300 | — |

**Specs Xaber 300:** 21kW, 60mph, 72V/44Ah Samsung 50S, 62mi, Marzocchi suspension, 220mm travel, $5,299.99 CONFIRMED
**Note:** X260 and X160 discontinued — redirect pages only. Xyber and Xafari prices — mark "contact for pricing" until confirmed with Segway dealer.

---

### BRAND 11: GASGAS ELECTRIC
**Hub:** `/brands/gasgas/` | **Category:** Kids Electric Dirt Bikes

| # | Model | URL | Price | Category Tags | Age |
|---|---|---|---|---|---|
| 1 | GasGas MC-E 2 2025 | `/product/gasgas-mc-e-2/` | $2,249 | Kids, Motocross, Entry | Ages 3–7 |
| 2 | GasGas MC-E 5 2025 | `/product/gasgas-mc-e-5/` | $5,449 | Kids/Youth, Motocross, Race | Ages 4–12 |

**Specs:** MC-E 2: 1.8kW hub motor, 3 modes, 100min, adjustable seat 470–500mm | MC-E 5: 5kW water-cooled (new 2025), new frame, fast-swap battery
**Note:** MC-E 3 dropped from 2025 lineup. GasGas = KTM/Pierer group. Austrian-built. KTM same dealer network.

---

## SECTION 2 — BIKES: PENDING PRODUCTS
*Build as "Coming Soon / Enquire" pages. Upgrade to full product when stock confirmed.*

| # | Product | URL | Est. Price | Reason Pending | Action |
|---|---|---|---|---|---|
| P1 | Stark Varg MX Factory Edition | `/product/stark-varg-mx-factory/` | $15,990 | Launched July 22 2026 — verify VoltTrack can source | Blog post NOW. Product page when stock confirmed |
| P2 | Stark Varg EX Factory Edition | `/product/stark-varg-ex-factory/` | $16,990 | Same as above — limited production | Blog post NOW. Product page when stock confirmed |
| P3 | Altis Omega | `/product/altis-omega/` | ~$7,000+ | 2026 144V race flagship announced, not yet shipping | Monitor. Add when available |
| P4 | STACYC 20hDRIVE | `/product/stacyc-20h-drive/` | ~$1,399 | Heavy-duty variant — confirm separate SKU | Verify with STACYC distributor |
| P5 | Altis Delta S | `/product/altis-delta-s/` | ~$2,299 | Youth variant — confirm separate SKU | Verify with Altis dealer |
| P6 | Zero FXE 2025 | `/product/zero-fxe/` | $12,495 | Supermoto/street — verify relevance to dirt audience | Low priority |
| P7 | KTM Freeride E-XC *(supply check only)* | `/product/ktm-freeride-exc/` *(in Section 1)* | $11,499 | Product confirmed. Verify US KTM dealer network is active before publishing — Pierer group financial restructuring may affect supply. Page exists in confirmed list; hold publishing until supply verified. | Confirm with active KTM US dealer before going live |
| P8 | Talaria Dragon *(US availability check)* | `/product/talaria-dragon/` *(in Section 1)* | $7,649 | Specs confirmed, Dragon is in confirmed product table. US stock timeline needs verification with Talaria US distributor before publishing page. | Confirm US availability and lead time before going live |

---

## SECTION 3 — ACCESSORIES & PARTS

**Architecture:** Mirrors the bike shop exactly.
- Hub: `/parts-accessories/` (like `/shop/`)
- Category pages: `/parts-accessories/[category]/` (like `/shop/[category]/`)
- Individual product pages: `/parts/[product-slug]/` (like `/product/[slug]/`)
- Every individual product has its own URL, product schema, price, SKU, Add to Cart
- Category pages list all products in that category — same `<ProductCard>` component as bikes
- Breadcrumb on every parts product: Home → Parts & Accessories → [Category] → [Product]

**SKU convention:** `VT-[CATEGORY-CODE]-[NUMBER]` e.g. `VT-BAT-001`

---

### CATEGORY 1: BATTERIES & CHARGERS
**Category URL:** `/parts-accessories/batteries-chargers/`
**Individual products URL pattern:** `/parts/[product-slug]/`

#### 1A — SUR-RON BATTERIES

| # | Product | URL | SKU | Price | Fits |
|---|---|---|---|---|---|
| 1 | Sur-Ron LBX OEM 60V/40Ah Replacement Battery | `/parts/surron-lbx-oem-60v-battery/` | VT-BAT-001 | ~$1,499 | Light Bee X |
| 2 | Sur-Ron Hyper Bee OEM 50.4V Replacement Battery | `/parts/surron-hyper-bee-oem-battery/` | VT-BAT-002 | ~$799 | Hyper Bee |
| 3 | Sur-Ron Ultra Bee OEM 74V/60Ah Replacement Battery | `/parts/surron-ultra-bee-oem-74v-battery/` | VT-BAT-003 | ~$1,799 | Ultra Bee HP/MX |
| 4 | Sur-Ron Storm Bee OEM 84V Battery | `/parts/surron-storm-bee-oem-84v-battery/` | VT-BAT-004 | ~$2,299 | Storm Bee |
| 5 | Chi Battery Systems Gladiator 60 Max (60V/60Ah) | `/parts/cbs-gladiator-60-max/` | VT-BAT-005 | ~$1,600 | LBX |
| 6 | Chi Battery Systems Gladiator 60 Touring (60V/70Ah) | `/parts/cbs-gladiator-60-touring/` | VT-BAT-006 | ~$1,899 | LBX |
| 7 | Chi Battery Systems Gladiator X60 Compact (60V/51Ah) | `/parts/cbs-gladiator-x60-compact/` | VT-BAT-007 | ~$1,299 | LBX |
| 8 | Chi Battery Systems Gladiator X72 Compact (72V/38Ah) | `/parts/cbs-gladiator-x72-compact/` | VT-BAT-008 | ~$1,499 | LBX |
| 9 | eWatt 60V/53Ah Long Range Battery for LBX | `/parts/ewatt-60v-53ah-lbx/` | VT-BAT-009 | ~$1,600 | LBX |
| 10 | eWatt 72V Race Battery v5 for LBX (28kW) | `/parts/ewatt-72v-race-battery-lbx/` | VT-BAT-010 | ~$1,755 | LBX |
| 11 | DHS GT 72V/50Ah Battery for LBX | `/parts/dhs-gt-72v-50ah-lbx/` | VT-BAT-011 | ~$1,999 | LBX |
| 12 | EBMX 81V Ultra Bee Performance Pack + Lid + Charger | `/parts/ebmx-81v-ultra-bee-pack/` | VT-BAT-012 | ~$3,224 | Ultra Bee |
| 13 | eWatt Ultra Bee 80V/76Ah Bundle + Lid + Charger | `/parts/ewatt-80v-ultra-bee-bundle/` | VT-BAT-013 | ~$3,500 | Ultra Bee |

*⚠️ Note on all product pages for 72V+ upgrades: "72V and 81V batteries require an aftermarket controller (e.g. EBMX X-9000 ~$499). For range only — stay 60V. For speed + power — upgrade to 72V. Contact us for a full upgrade consultation."*

---

#### 1B — TALARIA BATTERIES

| # | Product | URL | SKU | Price | Fits |
|---|---|---|---|---|---|
| 14 | Talaria MX3/MX4 OEM 60V/38–45Ah Replacement | `/parts/talaria-mx3-mx4-oem-60v-battery/` | VT-BAT-014 | ~$799 | MX3, MX4 |
| 15 | Talaria MX5 Pro OEM 72V/40Ah Replacement | `/parts/talaria-mx5-pro-oem-72v-battery/` | VT-BAT-015 | ~$999 | MX5 Pro |
| 16 | Talaria XXX OEM 60V Battery Replacement | `/parts/talaria-xxx-oem-60v-battery/` | VT-BAT-016 | ~$899 | XXX |
| 17 | eWatt 60V/53Ah Long Range Battery for Talaria Sting | `/parts/ewatt-60v-53ah-talaria-sting/` | VT-BAT-017 | ~$1,600 | MX3, MX4 |
| 18 | eWatt 72V/42Ah Race Battery for Talaria Sting | `/parts/ewatt-72v-42ah-talaria-sting/` | VT-BAT-018 | ~$2,000 | MX3, MX4 |
| 19 | eWatt 72V/63Ah Long Range Race Battery for Talaria | `/parts/ewatt-72v-63ah-talaria-sting/` | VT-BAT-019 | ~$3,000 | MX3, MX4 |
| 20 | Chi Battery Systems Titan X 72V for Talaria XXX | `/parts/cbs-titan-x-72v-talaria-xxx/` | VT-BAT-020 | ~$1,599 | XXX |
| 21 | eWatt 74V/44Ah Battery for Talaria XXX | `/parts/ewatt-74v-44ah-talaria-xxx/` | VT-BAT-021 | ~$2,000 | XXX |
| 22 | EBMX 74V/44Ah Battery for Talaria XXX + Lid + Harness | `/parts/ebmx-74v-talaria-xxx-pack/` | VT-BAT-022 | ~$2,199 | XXX |

*⚠️ Note on 72V/74V XXX pages: "72V and 74V upgrades require an aftermarket controller. Entry 72V packs from ~$1,500. Premium 74V packs from eWatt or EBMX: $2,000–$2,200. Add ~$150 for a compatible charger."*

---

#### 1C — STACYC BATTERIES & ADAPTERS

| # | Product | URL | SKU | Price | Fits |
|---|---|---|---|---|---|
| 23 | STACYC OEM 20V Battery (Standard) | `/parts/stacyc-oem-20v-battery-standard/` | VT-BAT-023 | ~$199 | 12eDRIVE, 16eDRIVE |
| 24 | STACYC OEM 20V Battery (5Ah High Capacity) | `/parts/stacyc-oem-20v-battery-5ah/` | VT-BAT-024 | ~$249 | All STACYC |
| 25 | STACYC OEM Battery Charger | `/parts/stacyc-oem-charger/` | VT-CHG-001 | ~$49 | All STACYC |
| 26 | STACYC Milwaukee M18 Battery Adapter | `/parts/stacyc-milwaukee-m18-adapter/` | VT-BAT-025 | ~$75 | 12eDRIVE, 16eDRIVE |
| 27 | STACYC DeWalt 20V Battery Adapter | `/parts/stacyc-dewalt-20v-adapter/` | VT-BAT-026 | ~$75 | 12eDRIVE, 16eDRIVE |
| 28 | STACYC Makita 18V Battery Adapter | `/parts/stacyc-makita-18v-adapter/` | VT-BAT-027 | ~$80 | 12eDRIVE, 16eDRIVE |
| 29 | STACYC Spare Battery Mount/Holder | `/parts/stacyc-spare-battery-mount/` | VT-BAT-028 | ~$50 | 12eDRIVE, 16eDRIVE |

*⚠️ Required disclaimer on all STACYC adapter product pages: "Power tool battery adapters are an aftermarket modification that voids the STACYC manufacturer warranty on electrical components. Do not exceed 5Ah batteries. Do not leave on the bike overnight. This is not an official STACYC product. Use at your own discretion."*

---

#### 1D — E-RIDE PRO BATTERIES

| # | Product | URL | SKU | Price | Fits |
|---|---|---|---|---|---|
| 30 | E-Ride Pro SS 72V/40Ah OEM Battery | `/parts/e-ride-pro-ss-72v-40ah-battery/` | VT-BAT-029 | ~$699 | SS 2.0, SS 3.0 |
| 31 | E-Ride Pro SR 72V/50Ah OEM Battery | `/parts/e-ride-pro-sr-72v-50ah-battery/` | VT-BAT-030 | ~$899 | SR |
| 32 | E-Ride Pro S 72V/30Ah Battery + Charger Bundle | `/parts/e-ride-pro-s-battery-charger-bundle/` | VT-BAT-031 | ~$1,849 | S models |
| 33 | E-Ride Pro OEM 2nd Gen Charger | `/parts/e-ride-pro-oem-charger-2nd-gen/` | VT-CHG-002 | ~$296 | SS, SR |

---

#### 1E — RAZOR BATTERIES

| # | Product | URL | SKU | Price | Fits |
|---|---|---|---|---|---|
| 34 | Razor MX350 24V Replacement Battery | `/parts/razor-mx350-24v-battery/` | VT-BAT-032 | ~$49 | MX350 |
| 35 | Razor MX650 36V Replacement Battery | `/parts/razor-mx650-36v-battery/` | VT-BAT-033 | ~$69 | MX650 |
| 36 | Razor MX350 OEM Charger | `/parts/razor-mx350-oem-charger/` | VT-CHG-003 | ~$29 | MX350 |
| 37 | Razor MX650 OEM Charger | `/parts/razor-mx650-oem-charger/` | VT-CHG-004 | ~$35 | MX650 |

---

#### 1F — AFTERMARKET & UNIVERSAL CHARGERS

| # | Product | URL | SKU | Price | Fits |
|---|---|---|---|---|---|
| 38 | Fast Charger for eWatt / EBMX / CCW Battery Packs | `/parts/fast-charger-ewatt-ebmx-ccw/` | VT-CHG-005 | ~$160–$200 | LBX + Talaria upgrade packs |
| 39 | 60V Standard Aftermarket Charger | `/parts/60v-standard-aftermarket-charger/` | VT-CHG-006 | ~$45–$79 | LBX, Talaria MX3/MX4 stock |
| 40 | 72V Standard Aftermarket Charger | `/parts/72v-standard-aftermarket-charger/` | VT-CHG-007 | ~$79–$129 | All 72V upgrade packs |
| 41 | 74V Charger for EBMX/eWatt XXX Packs | `/parts/74v-charger-talaria-xxx/` | VT-CHG-008 | ~$149 | Talaria XXX 74V upgrades |
| 42 | Sur-Ron OEM Charger 60V | `/parts/surron-oem-charger-60v/` | VT-CHG-009 | ~$89 | LBX stock battery |
| 43 | Sur-Ron OEM Charger 74V | `/parts/surron-oem-charger-74v/` | VT-CHG-010 | ~$119 | Ultra Bee HP/MX |

**Batteries & Chargers total: 43 individual product pages**

---

### CATEGORY 2: BIKE PARTS & UPGRADES
**Category URL:** `/parts-accessories/parts-upgrades/`

#### 2A — SUR-RON PARTS

| # | Product | URL | SKU | Price |
|---|---|---|---|---|
| 44 | Sur-Ron Stock Controller Replacement | `/parts/surron-stock-controller/` | VT-PRT-001 | ~$149 |
| 45 | EBMX X-9000 Aftermarket Controller | `/parts/ebmx-x9000-controller/` | VT-PRT-002 | ~$499 |
| 46 | Sur-Ron Throttle Replacement | `/parts/surron-throttle/` | VT-PRT-003 | ~$39 |
| 47 | Sur-Ron Chain + Sprocket Kit | `/parts/surron-chain-sprocket-kit/` | VT-PRT-004 | ~$59 |
| 48 | Sur-Ron Brake Pads (Front) | `/parts/surron-brake-pads-front/` | VT-PRT-005 | ~$19 |
| 49 | Sur-Ron Brake Pads (Rear) | `/parts/surron-brake-pads-rear/` | VT-PRT-006 | ~$19 |
| 50 | Sur-Ron Brake Rotor (Front 203mm) | `/parts/surron-brake-rotor-front/` | VT-PRT-007 | ~$39 |
| 51 | Sur-Ron Brake Rotor (Rear 180mm) | `/parts/surron-brake-rotor-rear/` | VT-PRT-008 | ~$35 |
| 52 | Sur-Ron Fork Seals Kit | `/parts/surron-fork-seals/` | VT-PRT-009 | ~$29 |
| 53 | Sur-Ron Rear Shock Upgrade | `/parts/surron-rear-shock-upgrade/` | VT-PRT-010 | ~$199–$299 |
| 54 | Sur-Ron Front Rim | `/parts/surron-front-rim/` | VT-PRT-011 | ~$119 |
| 55 | Sur-Ron Rear Rim | `/parts/surron-rear-rim/` | VT-PRT-012 | ~$99 |
| 56 | Sur-Ron Front Fender | `/parts/surron-front-fender/` | VT-PRT-013 | ~$29 |
| 57 | Sur-Ron Rear Fender | `/parts/surron-rear-fender/` | VT-PRT-014 | ~$29 |
| 58 | Sur-Ron Seat | `/parts/surron-seat/` | VT-PRT-015 | ~$79 |
| 59 | Sur-Ron Seat Cover | `/parts/surron-seat-cover/` | VT-PRT-016 | ~$35 |
| 60 | Sur-Ron Handlebars | `/parts/surron-handlebars/` | VT-PRT-017 | ~$69 |
| 61 | Sur-Ron Grips | `/parts/surron-grips/` | VT-PRT-018 | ~$19 |
| 62 | Sur-Ron Foot Pegs | `/parts/surron-foot-pegs/` | VT-PRT-019 | ~$39 |
| 63 | Sur-Ron Pedal Kit (L1e Road Legal) | `/parts/surron-pedal-kit/` | VT-PRT-020 | ~$79 |
| 64 | Sur-Ron Skid Plate | `/parts/surron-skid-plate/` | VT-PRT-021 | ~$49 |
| 65 | Sur-Ron Frame Guard Set | `/parts/surron-frame-guard-set/` | VT-PRT-022 | ~$39 |
| 66 | Sur-Ron Headlight | `/parts/surron-headlight/` | VT-PRT-023 | ~$49 |
| 67 | Sur-Ron Display / Speedometer | `/parts/surron-display/` | VT-PRT-024 | ~$89 |
| 68 | Sur-Ron Fork (Front Suspension Assembly) | `/parts/surron-fork/` | VT-PRT-025 | ~$199–$299 |
| 69 | Sur-Ron Motor | `/parts/surron-motor/` | VT-PRT-026 | ~$349 |

---

#### 2B — TALARIA PARTS

| # | Product | URL | SKU | Price |
|---|---|---|---|---|
| 70 | Talaria Controller Replacement | `/parts/talaria-controller/` | VT-PRT-027 | ~$199 |
| 71 | Talaria Throttle | `/parts/talaria-throttle/` | VT-PRT-028 | ~$39 |
| 72 | Talaria Brake Pads (Front) | `/parts/talaria-brake-pads-front/` | VT-PRT-029 | ~$29 |
| 73 | Talaria Brake Pads (Rear) | `/parts/talaria-brake-pads-rear/` | VT-PRT-030 | ~$29 |
| 74 | Talaria Brake Rotor 220x3mm | `/parts/talaria-brake-rotor-220/` | VT-PRT-031 | ~$49 |
| 75 | Talaria Front Fender | `/parts/talaria-front-fender/` | VT-PRT-032 | ~$29 |
| 76 | Talaria Rear Fender | `/parts/talaria-rear-fender/` | VT-PRT-033 | ~$29 |
| 77 | Talaria Frame Guard Set | `/parts/talaria-frame-guards/` | VT-PRT-034 | ~$49 |
| 78 | Talaria Seat Cover | `/parts/talaria-seat-cover/` | VT-PRT-035 | ~$35 |
| 79 | Talaria Pedal Kit | `/parts/talaria-pedal-kit/` | VT-PRT-036 | ~$79 |
| 80 | Talaria Display Screen | `/parts/talaria-display-screen/` | VT-PRT-037 | ~$89 |
| 81 | Talaria Key Fob Kit | `/parts/talaria-key-fob-kit/` | VT-PRT-038 | ~$59 |
| 82 | Talaria X3 Upgrade Kit | `/parts/talaria-x3-upgrade-kit/` | VT-PRT-039 | ~$199 |

---

#### 2C — E-RIDE PRO PARTS

| # | Product | URL | SKU | Price |
|---|---|---|---|---|
| 83 | E-Ride Pro Brake Pads (Front + Rear Set) | `/parts/e-ride-pro-brake-pads/` | VT-PRT-040 | ~$39 |
| 84 | E-Ride Pro Rear Fender | `/parts/e-ride-pro-rear-fender/` | VT-PRT-041 | ~$29 |
| 85 | E-Ride Pro Display Unit | `/parts/e-ride-pro-display/` | VT-PRT-042 | ~$89 |
| 86 | E-Ride Pro Direct Mount Stem Upgrade | `/parts/e-ride-pro-direct-mount-stem/` | VT-PRT-043 | ~$79 |

---

#### 2D — STACYC PARTS

| # | Product | URL | SKU | Price |
|---|---|---|---|---|
| 87 | STACYC 12eDRIVE Motor Replacement | `/parts/stacyc-12edrive-motor/` | VT-PRT-044 | ~$149 |
| 88 | STACYC 16eDRIVE Motor Replacement | `/parts/stacyc-16edrive-motor/` | VT-PRT-045 | ~$149 |
| 89 | STACYC Throttle | `/parts/stacyc-throttle/` | VT-PRT-046 | ~$29 |
| 90 | STACYC Foot Pegs | `/parts/stacyc-foot-pegs/` | VT-PRT-047 | ~$39 |
| 91 | STACYC Kickstand | `/parts/stacyc-kickstand/` | VT-PRT-048 | ~$29 |

---

#### 2E — RAZOR PARTS

| # | Product | URL | SKU | Price |
|---|---|---|---|---|
| 92 | Razor Dirt Bike Chain | `/parts/razor-dirt-bike-chain/` | VT-PRT-049 | ~$14 |
| 93 | Razor Dirt Bike Brake Pads | `/parts/razor-dirt-bike-brake-pads/` | VT-PRT-050 | ~$12 |
| 94 | Razor Battery Cables | `/parts/razor-battery-cables/` | VT-PRT-051 | ~$19 |

**Bike Parts & Upgrades total: 51 individual product pages**

---

### CATEGORY 3: GRAPHICS KITS & COSMETICS
**Category URL:** `/parts-accessories/graphics-kits/`

| # | Product | URL | SKU | Price |
|---|---|---|---|---|
| 95 | Sur-Ron LBX Full Graphics Kit | `/parts/surron-lbx-graphics-kit/` | VT-GFX-001 | ~$129–$179 |
| 96 | Sur-Ron Ultra Bee Graphics Kit | `/parts/surron-ultra-bee-graphics-kit/` | VT-GFX-002 | ~$149–$199 |
| 97 | Sur-Ron Ultra Bee Husqvarna-Style Graphics | `/parts/surron-ultra-bee-husqvarna-graphics/` | VT-GFX-003 | ~$149 |
| 98 | Sur-Ron LBX Custom Vinyl Wrap | `/parts/surron-lbx-vinyl-wrap/` | VT-GFX-004 | ~$199–$349 |
| 99 | Sur-Ron Number Plate | `/parts/surron-number-plate/` | VT-GFX-005 | ~$29–$49 |
| 100 | Stark Varg MX Graphics Kit | `/parts/stark-varg-mx-graphics-kit/` | VT-GFX-006 | ~$179–$249 |
| 101 | Stark Varg EX Graphics Kit | `/parts/stark-varg-ex-graphics-kit/` | VT-GFX-007 | ~$179–$249 |
| 102 | Stark Varg Sticker Set | `/parts/stark-varg-sticker-set/` | VT-GFX-008 | ~$49–$89 |
| 103 | Talaria X3 Graphics Kit | `/parts/talaria-x3-graphics-kit/` | VT-GFX-009 | ~$129–$169 |
| 104 | Talaria MX4 Graphics Kit | `/parts/talaria-mx4-graphics-kit/` | VT-GFX-010 | ~$129–$169 |
| 105 | Talaria Number Plate | `/parts/talaria-number-plate/` | VT-GFX-011 | ~$29–$49 |
| 106 | STACYC 12eDRIVE Graphics Kit | `/parts/stacyc-12edrive-graphics-kit/` | VT-GFX-012 | ~$69–$99 |
| 107 | STACYC 16eDRIVE Graphics Kit | `/parts/stacyc-16edrive-graphics-kit/` | VT-GFX-013 | ~$69–$99 |
| 108 | KTM SX-E 5 Graphics Kit | `/parts/ktm-sx-e-5-graphics-kit/` | VT-GFX-014 | ~$99–$149 |
| 109 | GasGas MC-E 5 Graphics Kit | `/parts/gasgas-mc-e-5-graphics-kit/` | VT-GFX-015 | ~$99–$149 |

**Graphics Kits total: 15 individual product pages**

---

### CATEGORY 4: HELMETS & PROTECTION
**Category URL:** `/parts-accessories/helmets-protection/`

| # | Product | URL | SKU | Price |
|---|---|---|---|---|
| 110 | Full-Face MX Helmet (Adult) | `/parts/full-face-mx-helmet-adult/` | VT-HLM-001 | ~$89–$349 |
| 111 | Full-Face MX Helmet (Youth) | `/parts/full-face-mx-helmet-youth/` | VT-HLM-002 | ~$59–$179 |
| 112 | Full-Face MX Helmet (Kids/Mini) | `/parts/full-face-mx-helmet-kids/` | VT-HLM-003 | ~$49–$99 |
| 113 | Off-Road Goggles (Adult) | `/parts/off-road-goggles-adult/` | VT-HLM-004 | ~$29–$89 |
| 114 | Off-Road Goggles (Youth/Kids) | `/parts/off-road-goggles-youth/` | VT-HLM-005 | ~$19–$49 |
| 115 | Chest Protector (Adult) | `/parts/chest-protector-adult/` | VT-HLM-006 | ~$49–$149 |
| 116 | Chest Protector (Youth) | `/parts/chest-protector-youth/` | VT-HLM-007 | ~$39–$99 |
| 117 | Knee / Shin Guards | `/parts/knee-shin-guards/` | VT-HLM-008 | ~$29–$89 |
| 118 | Elbow Pads | `/parts/elbow-pads/` | VT-HLM-009 | ~$19–$49 |
| 119 | Neck Brace | `/parts/neck-brace/` | VT-HLM-010 | ~$99–$349 |
| 120 | MX Gloves (Adult) | `/parts/mx-gloves-adult/` | VT-HLM-011 | ~$19–$79 |
| 121 | MX Gloves (Youth/Kids) | `/parts/mx-gloves-youth/` | VT-HLM-012 | ~$14–$39 |

**Helmets & Protection total: 12 individual product pages**

---

### CATEGORY 5: RIDING GEAR & CLOTHING
**Category URL:** `/parts-accessories/riding-gear/`

| # | Product | URL | SKU | Price |
|---|---|---|---|---|
| 122 | MX Jersey + Pants Combo (Adult) | `/parts/mx-jersey-pants-adult/` | VT-GER-001 | ~$69–$199 |
| 123 | MX Jersey + Pants Combo (Youth/Kids) | `/parts/mx-jersey-pants-youth/` | VT-GER-002 | ~$49–$129 |
| 124 | Off-Road Boots (Adult) | `/parts/off-road-boots-adult/` | VT-GER-003 | ~$99–$349 |
| 125 | Off-Road Boots (Youth) | `/parts/off-road-boots-youth/` | VT-GER-004 | ~$59–$149 |
| 126 | Hydration Pack | `/parts/hydration-pack/` | VT-GER-005 | ~$39–$99 |
| 127 | Neck Gaiter / Balaclava | `/parts/neck-gaiter-balaclava/` | VT-GER-006 | ~$14–$29 |

**Riding Gear total: 6 individual product pages**

---

### CATEGORY 6: TYRES & WHEELS
**Category URL:** `/parts-accessories/tyres-wheels/`

| # | Product | URL | SKU | Price |
|---|---|---|---|---|
| 128 | Sur-Ron LBX Front Tyre 19" Knobbly | `/parts/surron-lbx-front-tyre-19/` | VT-TYR-001 | ~$39–$65 |
| 129 | Sur-Ron LBX Rear Tyre 16" Knobbly | `/parts/surron-lbx-rear-tyre-16/` | VT-TYR-002 | ~$39–$59 |
| 130 | Sur-Ron LBX Rear Tyre 18" Knobbly | `/parts/surron-lbx-rear-tyre-18/` | VT-TYR-003 | ~$39–$59 |
| 131 | Sur-Ron Ultra Bee Rear Tyre 16" | `/parts/surron-ultra-bee-rear-tyre-16/` | VT-TYR-004 | ~$45–$69 |
| 132 | Talaria Sting Front Tyre 19" | `/parts/talaria-sting-front-tyre-19/` | VT-TYR-005 | ~$39–$65 |
| 133 | Talaria Sting Rear Tyre 16" | `/parts/talaria-sting-rear-tyre-16/` | VT-TYR-006 | ~$39–$59 |
| 134 | Talaria Sting Rear Tyre 18" | `/parts/talaria-sting-rear-tyre-18/` | VT-TYR-007 | ~$39–$59 |
| 135 | Inner Tube 18" / 19" | `/parts/inner-tube-18-19/` | VT-TYR-008 | ~$12–$19 |
| 136 | Inner Tube 16" | `/parts/inner-tube-16/` | VT-TYR-009 | ~$12–$17 |
| 137 | Sur-Ron Wheel Set Upgrade (Front + Rear) | `/parts/surron-wheel-set-upgrade/` | VT-TYR-010 | ~$249–$449 |
| 138 | Talaria Wheel Set Upgrade (Front + Rear) | `/parts/talaria-wheel-set-upgrade/` | VT-TYR-011 | ~$249–$399 |

**Tyres & Wheels total: 11 individual product pages**

---

### CATEGORY 7: STANDS & MAINTENANCE
**Category URL:** `/parts-accessories/stands-maintenance/`

| # | Product | URL | SKU | Price |
|---|---|---|---|---|
| 139 | Paddock / Rear Stand | `/parts/paddock-rear-stand/` | VT-MNT-001 | ~$39–$79 |
| 140 | STACYC Bike Stand | `/parts/stacyc-bike-stand/` | VT-MNT-002 | ~$50 |
| 141 | Centre Stand (Sur-Ron compatible) | `/parts/centre-stand-surron/` | VT-MNT-003 | ~$59–$99 |
| 142 | Bike Wash / Cleaner Spray | `/parts/bike-wash-cleaner/` | VT-MNT-004 | ~$14–$29 |
| 143 | Chain Lube / Drivetrain Lube | `/parts/chain-lube/` | VT-MNT-005 | ~$9–$19 |
| 144 | Basic Tool Kit (Hex, Torx, Spanners) | `/parts/basic-tool-kit/` | VT-MNT-006 | ~$29–$59 |
| 145 | Torque Wrench | `/parts/torque-wrench/` | VT-MNT-007 | ~$39–$99 |
| 146 | Puncture Repair Kit | `/parts/puncture-repair-kit/` | VT-MNT-008 | ~$9–$19 |
| 147 | Battery Terminal Protector Spray | `/parts/battery-terminal-protector/` | VT-MNT-009 | ~$9–$14 |

**Stands & Maintenance total: 9 individual product pages**

---

### CATEGORY 8: TRANSPORT & STORAGE
**Category URL:** `/parts-accessories/transport-storage/`

| # | Product | URL | SKU | Price |
|---|---|---|---|---|
| 148 | Dirt Bike Tie-Down Straps (Set of 4) | `/parts/dirt-bike-tie-down-straps/` | VT-TRN-001 | ~$19–$39 |
| 149 | Aluminium Loading Ramp | `/parts/aluminium-loading-ramp/` | VT-TRN-002 | ~$99–$199 |
| 150 | Waterproof Bike Cover | `/parts/waterproof-bike-cover/` | VT-TRN-003 | ~$29–$49 |
| 151 | Fireproof LiPo Battery Storage Bag | `/parts/lipo-battery-storage-bag/` | VT-TRN-004 | ~$19–$49 |
| 152 | Padded Transport Bag (STACYC size) | `/parts/stacyc-transport-bag/` | VT-TRN-005 | ~$39–$69 |

**Transport & Storage total: 5 individual product pages**

---

## SECTION 4 — PAGE COUNT SUMMARY

### BIKE PRODUCT PAGES

| Brand | Pages | Notes |
|---|---|---|
| Sur-Ron | 7 | 6 products + 1 redirect |
| Talaria | 8 | All separate pages |
| Stark Varg | 3 | MX/EX/SM — Standard+Alpha variant selector on each |
| KTM Electric | 4 | All separate |
| STACYC | 4 | All separate |
| E-Ride Pro | 4 | Mini + S (variant) + SS (variant) + SR |
| Altis | 2 | Delta + Sigma (Sigma/MX variant) |
| Zero | 3 | XB, XE, FX |
| Razor | 4 | MX125, MX350, MX500, MX650 |
| Segway | 5 | Xaber 300 + Xyber + Xafari + 2 redirects |
| GasGas | 2 | MC-E 2, MC-E 5 |
| **TOTAL BIKE PAGES** | **46** | |

### ACCESSORY & PARTS PAGES

| Section | Category Pages | Individual Product Pages | Notes |
|---|---|---|---|
| Hub | 1 | — | `/parts-accessories/` |
| Batteries & Chargers | 1 | 43 | SKUs VT-BAT-001 to VT-BAT-033, VT-CHG-001 to VT-CHG-010 |
| Bike Parts & Upgrades | 1 | 51 | SKUs VT-PRT-001 to VT-PRT-051 |
| Graphics Kits | 1 | 15 | SKUs VT-GFX-001 to VT-GFX-015 |
| Helmets & Protection | 1 | 12 | SKUs VT-HLM-001 to VT-HLM-012 |
| Riding Gear | 1 | 6 | SKUs VT-GER-001 to VT-GER-006 |
| Tyres & Wheels | 1 | 11 | SKUs VT-TYR-001 to VT-TYR-011 |
| Stands & Maintenance | 1 | 9 | SKUs VT-MNT-001 to VT-MNT-009 |
| Transport & Storage | 1 | 5 | SKUs VT-TRN-001 to VT-TRN-005 |
| **ACCESSORY TOTALS** | **9 category pages** | **152 individual product pages** | |

### FULL SITE TOTALS

| Type | Count |
|---|---|
| Bike product pages | 46 |
| Accessory category pages | 9 |
| Individual parts product pages | 152 |
| **TOTAL PRODUCT PAGES** | **207** |

*Note: Individual parts pages live at `/parts/[slug]/`, not `/product/[slug]/`. This keeps bike and parts routes clearly separated in the Next.js App Router — `app/product/[slug]/page.jsx` for bikes, `app/parts/[slug]/page.jsx` for accessories.*

