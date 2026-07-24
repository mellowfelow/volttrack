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
| P7 | KTM Freeride E-XC *(supply check only)* | Already in Section 1 | $11,499 | Product confirmed. Verify US KTM dealer network is active before publishing — Pierer group financial restructuring may affect supply. Page exists in confirmed list; hold publishing until supply verified. | Confirm with active KTM US dealer before going live |
| P8 | Talaria Dragon *(US availability check)* | Already in Section 1 | $7,649 | Specs confirmed, Dragon is in confirmed product table. US stock timeline needs verification with Talaria US distributor before publishing page. | Confirm US availability and lead time before going live |

---

## SECTION 3 — ACCESSORIES & PARTS

### 3A — BATTERIES & CHARGERS
**URL:** `/parts-accessories/batteries-chargers/` | **Priority:** 🔴 HIGH

#### SUR-RON BATTERIES

| Product | Fits | Price |
|---|---|---|
| Sur-Ron LBX OEM 60V/40Ah Replacement | Light Bee X | ~$1,499 |
| Sur-Ron Hyper Bee OEM 50.4V Replacement | Hyper Bee | ~$799 |
| Sur-Ron Ultra Bee OEM 74V/60Ah Replacement | Ultra Bee HP/MX | ~$1,799 |
| Sur-Ron Storm Bee OEM 84V Battery | Storm Bee | ~$2,299 |
| Chi Battery Systems Gladiator 60 Max (60V/60Ah) | LBX | ~$1,600 |
| Chi Battery Systems Gladiator 60 Touring (60V/70Ah) | LBX | ~$1,899 |
| Chi Battery Systems Gladiator X60 Compact (60V/51Ah) | LBX | ~$1,299 |
| Chi Battery Systems Gladiator X72 Compact (72V/38Ah) | LBX | ~$1,499 |
| eWatt 60V/53Ah Long Range Battery | LBX | ~$1,600 |
| eWatt 72V Race Battery v5 (28kW, QS8) | LBX | ~$1,755 |
| DHS GT 72V/50Ah Battery | LBX | ~$1,999 |
| EBMX 81V Ultra Bee Performance Pack + lid + charger | Ultra Bee | ~$3,224 |
| eWatt Ultra Bee 80V/76Ah Bundle + lid + charger | Ultra Bee | ~$3,500 |

*72V/81V upgrade requires aftermarket controller (e.g. EBMX X-9000 ~$499). For range only — keep 60V. For speed + power — go 72V.*

#### TALARIA BATTERIES

| Product | Fits | Price |
|---|---|---|
| Talaria MX3/MX4 OEM 60V/38–45Ah Replacement | MX3, MX4 | ~$799 |
| Talaria MX5 Pro OEM 72V/40Ah Replacement | MX5 Pro | ~$999 |
| Talaria XXX OEM 60V Battery Replacement | XXX | ~$899 |
| eWatt 60V/53Ah Long Range Battery | MX3, MX4 | ~$1,600 |
| eWatt 72V/42Ah Race Battery (28kW) | MX3, MX4 | ~$2,000 |
| eWatt 72V/63Ah Race Battery | MX3, MX4 | ~$3,000 |
| Chi Battery Systems Titan X 72V | XXX | ~$1,599 |
| eWatt 74V/44Ah Battery for XXX | XXX | ~$2,000 |
| EBMX 74V/44Ah Battery for XXX + lid + harness | XXX | ~$2,199 |

*72V/74V XXX upgrades require aftermarket controller. Entry 72V packs: ~$1,500. Premium 74V: $2,000–$2,200.*

#### STACYC BATTERIES & ADAPTERS

| Product | Fits | Price |
|---|---|---|
| STACYC OEM 20V Battery (Standard) | 12eDRIVE, 16eDRIVE | ~$199 |
| STACYC OEM 20V Battery (5Ah High Capacity) | All STACYC | ~$249 |
| STACYC OEM Charger | All STACYC | ~$49 |
| Milwaukee M18 Battery Adapter | 12eDRIVE, 16eDRIVE | ~$75–$80 |
| DeWalt 20V Battery Adapter | 12eDRIVE, 16eDRIVE | ~$75 |
| Makita 18V Battery Adapter | 12eDRIVE, 16eDRIVE | ~$80 |
| STACYC Spare Battery Mount/Holder | 12eDRIVE, 16eDRIVE | ~$50 |

*⚠️ Power tool adapters: aftermarket mod, voids STACYC warranty on electrical components. Max 5Ah batteries. Do not leave on bike overnight. Not an official STACYC product.*

#### E-RIDE PRO BATTERIES

| Product | Fits | Price |
|---|---|---|
| E-Ride Pro SS 72V/40Ah OEM Battery | SS 2.0, SS 3.0 | ~$699 |
| E-Ride Pro SR 72V/50Ah OEM Battery | SR | ~$899 |
| E-Ride Pro S 72V/30Ah Battery + Charger | S models | ~$1,849 |
| E-Ride Pro OEM 2nd Gen Charger | SS, SR | ~$296 |

#### RAZOR BATTERIES

| Product | Fits | Price |
|---|---|---|
| Razor MX350 24V Replacement Battery | MX350 | ~$49 |
| Razor MX650 36V Replacement Battery | MX650 | ~$69 |
| Razor MX350 OEM Charger | MX350 | ~$29 |
| Razor MX650 OEM Charger | MX650 | ~$35 |

#### CHARGERS (AFTERMARKET & UNIVERSAL)

| Product | Fits | Price |
|---|---|---|
| Fast Charger for eWatt / EBMX / CCW packs | LBX, Talaria upgrade packs | ~$160–$200 |
| 60V Standard Aftermarket Charger | LBX, Talaria MX3/MX4 stock | ~$45–$79 |
| 72V Standard Aftermarket Charger | 72V upgrade packs | ~$79–$129 |
| 74V Charger for EBMX/eWatt XXX packs | Talaria XXX 74V | ~$149 |
| Sur-Ron OEM Charger (60V) | LBX | ~$89 |
| Sur-Ron OEM Charger (74V) | Ultra Bee HP/MX | ~$119 |

---

### 3B — BIKE PARTS & UPGRADES
**URL:** `/parts-accessories/parts-upgrades/` | **Priority:** 🔴 HIGH

| Sub-Category | Key Products | Price Range |
|---|---|---|
| Sur-Ron Drivetrain | Controller replacement, EBMX X-9000 controller (aftermarket), throttle, chain, sprockets | $79–$499 |
| Sur-Ron Brakes | Brake pads front/rear, rotors, master cylinder, lever sets | $19–$149 |
| Sur-Ron Suspension | Fork seals, fork oil, rear shock upgrade | $29–$299 |
| Sur-Ron Wheels | Rims, spoke sets, hub sets | $89–$299 |
| Sur-Ron Body | Front fender, rear fender, seat, seat cover, plastics set | $29–$249 |
| Sur-Ron Electronics | Headlight, taillight, display unit, speedometer | $25–$149 |
| Sur-Ron Ergonomics | Handlebars, grips, footpegs, pedal kit (L1e), bar ends | $19–$129 |
| Sur-Ron Performance | Skid plate, frame guard, chain guide, sprocket upgrade | $29–$149 |
| Talaria Drivetrain | Controller, throttle, gearbox oil | $49–$399 |
| Talaria Brakes | Brake pads, 220x3mm rotors, master cylinder | $29–$179 |
| Talaria Body | Fenders, frame guards, seat cover | $29–$199 |
| Talaria Accessories | Pedal kit, display/screen, key fob kit, frame protectors | $39–$179 |
| E-Ride Pro Parts | Brakes, display, fender, stem direct mount | $29–$249 |
| STACYC Parts | Motor (12/16 eDRIVE), throttle, foot pegs, kickstand | $29–$199 |
| Razor Parts | Chain, brake pads, battery cables | $9–$49 |

---

### 3C — GRAPHICS KITS & COSMETICS
**URL:** `/parts-accessories/graphics-kits/` | **Priority:** 🟡 MEDIUM

| Product | Price |
|---|---|
| Sur-Ron LBX Full Graphics Kit | ~$129–$179 |
| Sur-Ron Ultra Bee Graphics Kit | ~$149–$199 |
| Sur-Ron Husqvarna-Style Graphics (Ultra Bee) | ~$149 |
| Sur-Ron Custom Vinyl Wrap | ~$199–$349 |
| Sur-Ron Number Plate | ~$29–$49 |
| Stark Varg MX Graphics Kit | ~$179–$249 |
| Stark Varg EX Graphics Kit | ~$179–$249 |
| Stark Varg Sticker Set | ~$49–$89 |
| Talaria X3 Graphics Kit | ~$129–$169 |
| Talaria MX4 Graphics Kit | ~$129–$169 |
| Talaria Number Plate | ~$29–$49 |
| STACYC 12eDRIVE Graphics Kit | ~$69–$99 |
| STACYC 16eDRIVE Graphics Kit | ~$69–$99 |
| KTM SX-E 5 Graphics Kit | ~$99–$149 |
| GasGas MC-E 5 Graphics Kit | ~$99–$149 |

---

### 3D — HELMETS & PROTECTION
**URL:** `/parts-accessories/helmets-protection/` | **Priority:** 🟡 MEDIUM

| Product | Price |
|---|---|
| Full-Face MX Helmet (Adult) | ~$89–$349 |
| Full-Face MX Helmet (Youth) | ~$59–$179 |
| Full-Face MX Helmet (Kids/Mini) | ~$49–$99 |
| Off-Road Goggles (Adult) | ~$29–$89 |
| Off-Road Goggles (Youth/Kids) | ~$19–$49 |
| Chest Protector (Adult) | ~$49–$149 |
| Chest Protector (Youth) | ~$39–$99 |
| Knee/Shin Guards | ~$29–$89 |
| Elbow Pads | ~$19–$49 |
| Neck Brace | ~$99–$349 |
| Gloves (Adult MX) | ~$19–$79 |
| Gloves (Youth/Kids) | ~$14–$39 |

---

### 3E — RIDING GEAR & CLOTHING
**URL:** `/parts-accessories/riding-gear/` | **Priority:** 🟡 MEDIUM

| Product | Price |
|---|---|
| MX Jersey + Pants Combo (Adult) | ~$69–$199 |
| MX Jersey + Pants Combo (Youth/Kids) | ~$49–$129 |
| Off-Road Boots (Adult) | ~$99–$349 |
| Off-Road Boots (Youth) | ~$59–$149 |
| Hydration Pack | ~$39–$99 |
| Neck Gaiter / Balaclava | ~$14–$29 |

---

### 3F — TYRES & WHEELS
**URL:** `/parts-accessories/tyres-wheels/` | **Priority:** 🟡 MEDIUM

| Product | Price |
|---|---|
| Sur-Ron LBX Front Tyre 19" Knobbly | ~$39–$65 |
| Sur-Ron LBX Rear Tyre (18" or 16") | ~$39–$59 |
| Sur-Ron Ultra Bee Rear Tyre 16" | ~$45–$69 |
| Talaria Sting Front Tyre 19" | ~$39–$65 |
| Talaria Sting Rear Tyre (16" or 18") | ~$39–$59 |
| Inner Tubes 18"/19" | ~$12–$19 |
| Inner Tubes 16" | ~$12–$17 |
| Sur-Ron Wheel Set Upgrade | ~$249–$449 |
| Talaria Wheel Set Upgrade | ~$249–$399 |

---

### 3G — STANDS & MAINTENANCE
**URL:** `/parts-accessories/stands-maintenance/` | **Priority:** 🟢 LOW

| Product | Price |
|---|---|
| Paddock / Rear Stand | ~$39–$79 |
| STACYC Bike Stand | ~$50 |
| Centre Stand (Sur-Ron compatible) | ~$59–$99 |
| Bike Wash / Cleaner Spray | ~$14–$29 |
| Chain Lube / Drivetrain Lube | ~$9–$19 |
| Basic Tool Kit (hex, torx, spanners) | ~$29–$59 |
| Torque Wrench | ~$39–$99 |
| Puncture Repair Kit | ~$9–$19 |
| Battery Terminal Protector Spray | ~$9–$14 |

---

### 3H — TRANSPORT & STORAGE
**URL:** `/parts-accessories/transport-storage/` | **Priority:** 🟢 LOW

| Product | Price |
|---|---|
| Dirt Bike Tie-Down Straps (x4) | ~$19–$39 |
| Aluminium Loading Ramp | ~$99–$199 |
| Waterproof Bike Cover | ~$29–$49 |
| Fireproof LiPo Battery Storage Bag | ~$19–$49 |
| Padded Transport Bag (STACYC) | ~$39–$69 |

---

## SECTION 4 — PAGE COUNT SUMMARY

| Brand / Section | Product Pages | Notes |
|---|---|---|
| Sur-Ron | 7 | 6 products + 1 redirect |
| Talaria | 8 | All separate pages |
| Stark Varg | 3 | MX/EX/SM — Standard+Alpha as variant on each |
| KTM Electric | 4 | All separate |
| STACYC | 4 | All separate |
| E-Ride Pro | 4 | Mini + S (variant) + SS (variant) + SR |
| Altis | 2 | Delta + Sigma (Sigma/MX variant) |
| Zero | 3 | XB, XE, FX |
| Razor | 4 | MX125, MX350, MX500, MX650 |
| Segway | 5 | Xaber 300 + Xyber + Xafari + 2 redirects |
| GasGas | 2 | MC-E 2, MC-E 5 |
| **TOTAL BIKE PAGES** | **46** | |
| **Accessory category pages** | **8** | 3A–3H |
| **Parts hub** | **1** | `/parts-accessories/` |
| **TOTAL PRODUCT/ACCESSORY PAGES** | **55** | |

