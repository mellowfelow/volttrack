import { SITE } from '@/config/site'

// Auto-rotating announcement bar ("revolution slider" style). Pure CSS keyframes
// drive the rotation — no setInterval/JS timer — so it is identical on mobile and
// server-rendered, and it collapses to a static centred list under
// prefers-reduced-motion. One promo shows at a time, sliding up to the next.
export default function AnnounceBar() {
  const items = [
    `🚚 ${SITE.freeShippingText}`,
    `₿ Save ${Math.round(SITE.cryptoDiscount * 100)}% with crypto`,
    `💳 ${SITE.financing}`,
    '✅ Authorized US Dealer',
  ]
  // Each slide's on-screen window is 1/N of the loop; the CSS reads --n / --i.
  return (
    <div className="announce" role="note" aria-label="Store announcements" style={{ '--n': items.length }}>
      <div className="announce-viewport">
        {items.map((t, i) => (
          <span key={i} className="announce-slide" style={{ '--i': i }}>{t}</span>
        ))}
      </div>
    </div>
  )
}
