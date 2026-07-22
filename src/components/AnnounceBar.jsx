'use client'
import { useEffect, useState } from 'react'
import { SITE } from '@/config/site'

const SLIDES = [
  `🚚 ${SITE.freeShippingText}`,
  `💳 ${SITE.financing}`,
  `₿ Save ${Math.round(SITE.cryptoDiscount * 100)}% paying with crypto (BTC/USDT)`,
  '✅ Authorized US Dealer — genuine manufacturer warranties',
]

export default function AnnounceBar() {
  const [i, setI] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % SLIDES.length), 4000)
    return () => clearInterval(t)
  }, [])
  return (
    <div className="announce" role="status" aria-live="polite">
      {SLIDES[i]}
    </div>
  )
}
