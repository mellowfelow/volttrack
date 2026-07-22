import { SITE } from '@/config/site'

// Static announcement bar (no autoplay / no carousel): key promos on one line,
// wrapping to a compact list on small screens.
export default function AnnounceBar() {
  const items = [
    `🚚 ${SITE.freeShippingText}`,
    `₿ Save ${Math.round(SITE.cryptoDiscount * 100)}% with crypto`,
    `💳 ${SITE.financing}`,
    '✅ Authorized US Dealer',
  ]
  return (
    <div className="announce" role="note">
      {items.map((t, i) => (
        <span key={i} className="announce-item">{t}</span>
      ))}
    </div>
  )
}
