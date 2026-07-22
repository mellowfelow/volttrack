import Link from 'next/link'
import { SITE, PRODUCTS, BRANDS } from '@/config/site'
import Breadcrumbs from '@/components/Breadcrumbs'
import { buildMetadata, JsonLd, url } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'About VoltTrack — America’s Electric Dirt Bike Experts',
  description: 'VoltTrack is a US-based authorized dealer for the world’s leading electric dirt bike brands, founded by off-road riders to give honest advice and real aftercare.',
  path: '/about/',
})

export default function AboutPage() {
  const ld = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About VoltTrack',
    url: url('/about/'),
    mainEntity: {
      '@type': ['Store', 'Organization'],
      name: SITE.name,
      description: SITE.description,
      foundingDate: SITE.foundingYear,
      foundingLocation: SITE.foundingLocation,
      areaServed: SITE.areaServed,
      address: { '@type': 'PostalAddress', addressCountry: 'US' },
      brand: SITE.authorizedBrands,
    },
  }
  return (
    <>
      <Breadcrumbs items={[{ name: 'About', href: '/about/' }]} />
      <JsonLd data={ld} />
      <section className="section" style={{ paddingTop: 8 }}>
        <div className="container prose">
          <h1>Built by Riders, For Riders</h1>
          <p className="lead">
            {SITE.name} was founded in {SITE.foundingYear} by US off-road riders frustrated with the
            lack of genuine expert advice when buying electric dirt bikes. So we built the store we
            always wanted.
          </p>

          <h2>Who We Are</h2>
          <p>
            {SITE.name} is a US-based authorized dealer for the world&rsquo;s leading electric dirt
            bike brands. We stock Sur-Ron, Stark Future, Talaria, STACYC, Razor, KTM, Segway and more
            — currently {PRODUCTS.length} models across {BRANDS.length} brands — and every bike we
            sell, we&rsquo;d ride ourselves. We ship across the Lower 48 US states with genuine US
            manufacturer warranties on every bike.
          </p>

          <h2>Our Mission</h2>
          <p>
            To make buying an electric dirt bike in the US straightforward, safe, and well-informed.
            That means honest advice about which bike suits your rider and terrain, transparent
            information about US riding laws and OHV regulations, and real support after you buy — not
            just a chatbot.
          </p>

          <h2>Why We Started</h2>
          <p>
            When we started researching electric dirt bikes, the US market was full of gray-market
            importers, thin product pages with no real specs, and zero guidance on state laws. We saw
            riders making $5,000+ purchases without understanding OHV registration, tariff
            implications, or what &ldquo;off-road only&rdquo; really means. {SITE.name} exists to fix
            that. We publish detailed buying guides, keep our product pages honest about limits and
            legality, and put a knowledgeable human on the other end of every question.
          </p>

          <h2>Our Promise</h2>
          <ul>
            <li>We only recommend what we&rsquo;d buy ourselves.</li>
            <li>We&rsquo;re transparent about product limits, legal restrictions, and pricing risks (including tariffs).</li>
            <li>We provide real post-purchase support — genuine aftercare, not a ticket queue.</li>
            <li>We never oversell a bike&rsquo;s street legality.</li>
          </ul>

          <h2>What Makes Us Different</h2>
          <div className="authority-grid" style={{ margin: '18px 0' }}>
            <div className="card"><div className="card-body">
              <h3>✅ Authorized US Dealer</h3>
              <p className="muted">Official dealer for Sur-Ron, Stark Future, STACYC, Talaria and more, with genuine US warranties.</p>
            </div></div>
            <div className="card"><div className="card-body">
              <h3>🏍️ Riders, Not Salespeople</h3>
              <p className="muted">Our team rides electric dirt bikes. Advice comes from experience, not commission.</p>
            </div></div>
            <div className="card"><div className="card-body">
              <h3>📋 Fully Compliant</h3>
              <p className="muted">Products clearly labeled off-road or street-legal. Transparent about US OHV laws including California Section 436.1.</p>
            </div></div>
          </div>

          <h2>Where We Ship</h2>
          <p>
            {SITE.name} ships to the Lower 48 US states. Support is available {SITE.supportHours}. If
            you&rsquo;re weighing up a $3,000 kids&rsquo; bike or a $13,000 race machine, the same
            honest advice applies — <Link href="/contact/">get in touch</Link> and we&rsquo;ll help
            you choose.
          </p>
          <p><Link href="/contact/" className="btn">Get in Touch</Link></p>
        </div>
      </section>
    </>
  )
}
