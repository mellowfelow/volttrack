import Link from 'next/link'
import { SITE, CATEGORIES, BRANDS, PRODUCTS, POSTS, FAQS, priceRange } from '@/config/site'
import ProductCard from '@/components/ProductCard'
import Hero from '@/components/Hero'
import SmartImage from '@/components/SmartImage'
import FaqAccordion from '@/components/FaqAccordion'
import Reveal from '@/components/Reveal'
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
    mainEntity: FAQS.map((f) => ({
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

      <Hero />

      <section className="section">
        <div className="container">
          <Reveal>
            <div className="stats">
              <div className="stat"><b>{BRANDS.length}</b><span>Brands stocked</span></div>
              <div className="stat"><b>{PRODUCTS.length}+</b><span>Models available</span></div>
              <div className="stat"><b>Lower 48</b><span>{SITE.freeShippingText}</span></div>
              <div className="stat"><b>{Math.round(SITE.cryptoDiscount * 100)}%</b><span>Off with crypto</span></div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Find your ride</span>
            <h2>Shop by Category</h2>
            <p>From a toddler&rsquo;s first STACYC to a race-spec Stark — choose where you ride.</p>
          </div>
          <Reveal>
            <div className="cat-grid">
              {CATEGORIES.map((c) => (
                <Link key={c.slug} href={`/shop/${c.slug}/`} className="tile">
                  <SmartImage
                    src={c.image ? `/images/${c.image}` : '/images/placeholder-bike.svg'}
                    alt={`${c.name} category`}
                    width={1280}
                    height={960}
                    loading="lazy"
                  />
                  <span className="tile-overlay">
                    <h3>{c.name}</h3>
                    <p>{c.short}</p>
                    <span className="tile-go">Shop now →</span>
                  </span>
                </Link>
              ))}
              <Link href="/shop/" className="tile tile-cta">
                <span className="tile-overlay">
                  <h3>Shop All Bikes</h3>
                  <p>Browse the full VoltTrack lineup.</p>
                  <span className="tile-go">View all →</span>
                </span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Rider favorites</span>
            <h2>Bestselling Electric Dirt Bikes</h2>
          </div>
          <Reveal>
            <div className="grid cols-4">
              {featured.map((p, i) => (
                <ProductCard key={p.slug} p={p} eager={i === 0} />
              ))}
            </div>
          </Reveal>
          <p style={{ marginTop: 24, textAlign: 'center' }}>
            <Link href="/shop/" className="btn btn-ghost">See all bikes</Link>
          </p>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Authorized US dealer</span>
            <h2>The Brands We Carry</h2>
            <p>Genuine manufacturer warranties on every bike we sell.</p>
          </div>
          <Reveal>
            <div className="pill-row" style={{ justifyContent: 'center' }}>
              {BRANDS.map((b) => (
                <Link key={b.slug} href={`/brands/${b.slug}/`} className="pill">{b.name}</Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Why VoltTrack</span>
            <h2>Built by Riders, For Riders</h2>
          </div>
          <Reveal>
            <div className="authority-grid">
              <div className="card"><div className="card-body" style={{ textAlign: 'center' }}>
                <h3>✅ Authorized US Dealer</h3>
                <p className="muted">Official dealer for Sur-Ron, Stark Future, STACYC, Talaria and more — genuine US manufacturer warranties on every bike.</p>
              </div></div>
              <div className="card"><div className="card-body" style={{ textAlign: 'center' }}>
                <h3>🏍️ Riders, Not Salespeople</h3>
                <p className="muted">Our team rides electric dirt bikes. Advice comes from experience, not commission structures.</p>
              </div></div>
              <div className="card"><div className="card-body" style={{ textAlign: 'center' }}>
                <h3>📋 Fully Compliant</h3>
                <p className="muted">Every product is clearly labeled off-road or street-legal. We&rsquo;re transparent about US OHV laws, including California Section 436.1.</p>
              </div></div>
            </div>
          </Reveal>
          <p style={{ marginTop: 24, textAlign: 'center' }}><Link href="/about/" className="btn btn-ghost">About VoltTrack</Link></p>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">From the blog</span>
            <h2>New Bikes, Deals &amp; Riding Guides</h2>
          </div>
          <Reveal>
            <div className="grid cols-3">
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
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Questions?</span>
            <h2>Frequently Asked Questions</h2>
          </div>
          <div style={{ maxWidth: 760, margin: '0 auto' }}>
            <FaqAccordion items={FAQS} />
            <p style={{ marginTop: 24, textAlign: 'center' }}><Link href="/contact/" className="btn">Not sure which bike? Ask us</Link></p>
          </div>
        </div>
      </section>
    </>
  )
}
