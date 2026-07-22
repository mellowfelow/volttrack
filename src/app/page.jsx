import Link from 'next/link'
import { SITE, CATEGORIES, BRANDS, PRODUCTS, POSTS, FAQS, priceRange } from '@/config/site'
import ProductCard from '@/components/ProductCard'
import FaqAccordion from '@/components/FaqAccordion'
import { JsonLd, url, buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'Electric Dirt Bikes USA | Sur-Ron, Stark Varg, STACYC | VoltTrack',
  description:
    'Shop electric dirt bikes in the USA. Sur-Ron, Stark Varg, Talaria, STACYC & more. Adult, youth & kids electric dirt bikes with expert advice, fast US shipping and financing.',
  path: '/',
})

export default function Home() {
  const featured = PRODUCTS.filter((p) => p.badge).slice(0, 8)
  const range = priceRange(PRODUCTS)

  const orgLd = {
    '@context': 'https://schema.org',
    '@type': ['Store', 'Organization'],
    name: SITE.name,
    url: url('/'),
    description: SITE.description,
    foundingDate: SITE.foundingYear,
    foundingLocation: SITE.foundingLocation,
    address: { '@type': 'PostalAddress', addressCountry: 'US' },
    areaServed: SITE.areaServed,
    numberOfItems: PRODUCTS.length,
    knowsAbout: ['electric dirt bikes', 'Sur-Ron', 'Stark Future', 'Talaria', 'STACYC', 'electric motocross', 'OHV law'],
    priceRange: `${SITE.currencySymbol}${range.low}–${SITE.currencySymbol}${range.high}`,
    brand: SITE.authorizedBrands,
    makesOffer: {
      '@type': 'AggregateOffer',
      priceCurrency: SITE.currency,
      lowPrice: range.low,
      highPrice: range.high,
      offerCount: PRODUCTS.length,
    },
  }
  const websiteLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE.name,
    url: url('/'),
    potentialAction: {
      '@type': 'SearchAction',
      target: { '@type': 'EntryPoint', urlTemplate: url('/search/?q={search_term_string}') },
      'query-input': 'required name=search_term_string',
    },
  }
  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.slice(0, 4).map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  return (
    <>
      <JsonLd data={orgLd} />
      <JsonLd data={websiteLd} />
      <JsonLd data={faqLd} />

      <section className="hero">
        <div className="container">
          <span className="eyebrow">America&rsquo;s Electric Dirt Bike Experts</span>
          <h1>The Best Electric Dirt Bikes in the USA</h1>
          <p className="lead">
            {SITE.entityStatement}
          </p>
          <div className="hero-cta">
            <Link href="/shop/" className="btn">Shop All Bikes</Link>
            <Link href="/guides/" className="btn btn-ghost">Read the Buying Guides</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="trust">
            <div>🚚 {SITE.freeShippingText}</div>
            <div>✅ Authorized US Dealer</div>
            <div>🔧 Expert Aftercare</div>
            <div>💳 {SITE.financing}</div>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <h2>Shop by Category</h2>
          <div className="grid cols-4" style={{ marginTop: 20 }}>
            {CATEGORIES.map((c) => (
              <Link key={c.slug} href={`/shop/${c.slug}/`} className="card" style={{ color: 'inherit' }}>
                <div className="card-body">
                  <h3>{c.name}</h3>
                  <p className="muted" style={{ fontSize: '.92rem' }}>{c.short}</p>
                  <span className="price" style={{ fontSize: '.95rem', color: 'var(--brand)' }}>Shop now →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Bestselling Electric Dirt Bikes</h2>
          <div className="grid cols-4" style={{ marginTop: 20 }}>
            {featured.map((p, i) => (
              <ProductCard key={p.slug} p={p} eager={i === 0} />
            ))}
          </div>
          <p style={{ marginTop: 20 }}>
            <Link href="/shop/" className="btn btn-ghost">See all bikes</Link>
          </p>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <h2>The Brands We Carry</h2>
          <div className="pill-row" style={{ marginTop: 16 }}>
            {BRANDS.map((b) => (
              <Link key={b.slug} href={`/brands/${b.slug}/`} className="pill">{b.name}</Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Built by Riders, For Riders</h2>
          <div className="authority-grid" style={{ marginTop: 18 }}>
            <div className="card"><div className="card-body">
              <h3>✅ Authorized US Dealer</h3>
              <p className="muted">Official dealer for Sur-Ron, Stark Future, STACYC, Talaria and more — genuine US manufacturer warranties on every bike.</p>
            </div></div>
            <div className="card"><div className="card-body">
              <h3>🏍️ Riders, Not Salespeople</h3>
              <p className="muted">Our team rides electric dirt bikes. Advice comes from experience, not commission structures.</p>
            </div></div>
            <div className="card"><div className="card-body">
              <h3>📋 Fully Compliant</h3>
              <p className="muted">Every product is clearly labeled off-road or street-legal. We&rsquo;re transparent about US OHV laws, including California Section 436.1.</p>
            </div></div>
          </div>
          <p style={{ marginTop: 18 }}><Link href="/about/" className="btn btn-ghost">About VoltTrack</Link></p>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <h2>New Bikes, Deals &amp; Riding Guides</h2>
          <div className="grid cols-3" style={{ marginTop: 20 }}>
            {POSTS.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}/`} className="card" style={{ color: 'inherit' }}>
                <div className="card-body">
                  <h3>{post.title}</h3>
                  <p className="muted" style={{ fontSize: '.9rem' }}>{post.excerpt}</p>
                  <span className="price" style={{ fontSize: '.95rem', color: 'var(--brand)' }}>Read more →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container prose">
          <h2>Frequently Asked Questions</h2>
          <FaqAccordion items={FAQS} />
          <p style={{ marginTop: 20 }}><Link href="/contact/" className="btn">Not sure which bike? Ask us</Link></p>
        </div>
      </section>
    </>
  )
}
