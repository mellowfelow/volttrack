import Link from 'next/link'
import { SITE } from '@/config/site'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <h4>⚡ {SITE.name}</h4>
            <p className="muted">
              America&rsquo;s expert electric dirt bike destination. Sur-Ron, Stark Future,
              STACYC, Talaria &amp; more. {SITE.freeShippingText}.
            </p>
            <p className="muted">
              <a href="/contact/">Contact us</a> · Support {SITE.supportHours}
            </p>
          </div>
          <div>
            <h4>Electric Dirt Bikes</h4>
            <Link href="/shop/adult-electric-dirt-bikes/">Adult Dirt Bikes</Link>
            <Link href="/shop/youth-electric-dirt-bikes/">Youth &amp; Kids</Link>
            <Link href="/shop/electric-motocross-bikes/">Motocross</Link>
            <Link href="/shop/electric-trail-bikes/">Trail &amp; Enduro</Link>
            <Link href="/shop/street-legal-electric-bikes/">Street Legal</Link>
            <Link href="/brands/">All Brands</Link>
          </div>
          <div>
            <h4>Learn</h4>
            <Link href="/parts-accessories/batteries-chargers/">Batteries &amp; Chargers</Link>
            <Link href="/parts-accessories/graphics-kits/">Graphics Kits</Link>
            <Link href="/guides/">Buying Guides</Link>
            <Link href="/blog/">Blog</Link>
            <Link href="/faq/">FAQ</Link>
            <Link href="/shop/">Shop All</Link>
          </div>
          <div>
            <h4>Company</h4>
            <Link href="/about/">About</Link>
            <Link href="/contact/">Contact</Link>
            <Link href="/finance/">Financing</Link>
            <Link href="/shipping/">Shipping</Link>
            <Link href="/returns/">Returns</Link>
            <Link href="/privacy/">Privacy</Link>
            <Link href="/terms/">Terms</Link>
          </div>
        </div>
        <div className="footer-bottom">
          © {new Date().getFullYear()} {SITE.name}. All prices in USD.
          <p className="disclaimer">
            Off-Road Disclaimer: Most vehicles sold are for off-road, private-land use only and
            are not street legal without specific federal/state certification. California buyers:
            green-sticker / OHV registration is required under Vehicle Code Section 436.1. Prices
            are estimates and may change due to import tariff conditions. Always wear a helmet.
            {' '}{SITE.name} accepts no liability for unlawful use.
          </p>
        </div>
      </div>
    </footer>
  )
}
