'use client'
import { useState } from 'react'
import Link from 'next/link'

// Interactive "is an electric dirt bike street legal in my state?" tool.
// COMPLIANCE: we never assert that a specific bike is street legal in a given
// state — that varies and we cannot verify 50 states. The tool explains the
// framework that applies everywhere, classifies our models by street-legal path,
// and routes the rider to their state's official source. General info, not legal advice.

const STATES = [
  'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut',
  'Delaware', 'District of Columbia', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois',
  'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts',
  'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada',
  'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
  'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina',
  'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington',
  'West Virginia', 'Wisconsin', 'Wyoming',
]

const officialSearch = (state) =>
  `https://www.google.com/search?q=${encodeURIComponent(state + ' off-highway vehicle registration DMV electric dirt bike street legal')}`

export default function StreetLegalChecker() {
  const [state, setState] = useState('')

  return (
    <div className="checker">
      <div className="field" style={{ maxWidth: 420 }}>
        <label htmlFor="state">Where do you ride?</label>
        <select id="state" value={state} onChange={(e) => setState(e.target.value)}>
          <option value="">Select your state…</option>
          {STATES.map((s) => <option key={s} value={s}>{s}</option>)}
        </select>
      </div>

      {state ? (
        <div className="checker-result surface" role="status" aria-live="polite">
          <h2 style={{ marginTop: 0 }}>Electric dirt bikes in {state}</h2>
          <p>
            As in every US state, <strong>most electric dirt bikes are off-road / OHV use only</strong>{' '}
            in {state} and are <strong>not street legal</strong> by default. A bike is only road-legal
            if that specific model has a street-legal certification path <em>and</em> you register and
            equip it for road use under {state}&rsquo;s rules. Riding an off-road model on public roads
            is not legal no matter how fast or capable it is.
          </p>

          <div className="checker-cols">
            <div>
              <h3>✅ Bikes with a street-legal path</h3>
              <p className="muted">Built for road-legal registration (final legality is state-dependent):</p>
              <ul>
                <li><Link href="/product/stark-varg-ex/">Stark Varg EX</Link> — street-legal enduro</li>
                <li><Link href="/product/stark-varg-sm/">Stark Varg SM</Link> — supermoto</li>
                <li><Link href="/product/sur-ron-light-bee-l1e/">Sur-Ron Light Bee L1e</Link> — L1e path</li>
              </ul>
              <Link href="/shop/street-legal-electric-bikes/" className="btn btn-ghost">All street-legal options →</Link>
            </div>
            <div>
              <h3>🏁 Off-road / OHV only</h3>
              <p className="muted">
                Everything else we sell — Sur-Ron, Talaria, Segway, Altis, E-Ride Pro, Razor, STACYC and
                the Stark Varg MX — is for private land and designated OHV areas with the correct
                registration. Great bikes; just not for public roads.
              </p>
            </div>
          </div>

          {state === 'California' ? (
            <p className="min-order-block" role="note">
              🐻 California: off-highway electric dirt bikes fall under green-sticker / OHV registration
              expectations in Vehicle Code <strong>Section 436.1</strong>. Confirm current CA DMV and
              State Parks OHV guidance before you ride.
            </p>
          ) : null}

          <p className="checker-cta">
            <a href={officialSearch(state)} target="_blank" rel="noopener noreferrer" className="btn">
              Check {state}&rsquo;s official rules ↗
            </a>
            <Link href="/contact/" className="btn btn-ghost">Ask us before you buy</Link>
          </p>

          <p className="form-note">
            This is general information, not legal advice. Rules and enforcement change and vary by
            county — always confirm with your state DMV and OHV authority. VoltTrack never oversells
            street legality: every listing states plainly whether a bike is off-road only or has a
            street-legal path.
          </p>
        </div>
      ) : (
        <p className="muted" style={{ marginTop: 16 }}>
          Pick your state to see how electric dirt bike road-legality works there and which models can
          be registered for the street.
        </p>
      )}
    </div>
  )
}
