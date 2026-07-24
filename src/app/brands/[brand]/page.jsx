import { notFound } from 'next/navigation'
import Link from 'next/link'
import {
  BRANDS, brandBySlug, productsForBrand, categoryBySlug, priceRange, PRICE_DISCLAIMER,
} from '@/config/site'
import ProductCard from '@/components/ProductCard'
import Breadcrumbs from '@/components/Breadcrumbs'
import FaqAccordion from '@/components/FaqAccordion'
import { buildMetadata, JsonLd, url } from '@/lib/seo'

export function generateStaticParams() {
  return BRANDS.map((b) => ({ brand: b.slug }))
}

export function generateMetadata({ params }) {
  const b = brandBySlug(params.brand)
  if (!b) return {}
  return buildMetadata({
    title: `${b.name} Electric Dirt Bikes`,
    description: b.metaDesc
      || `Shop ${b.name} electric dirt bikes at VoltTrack — expert advice, financing and fast shipping to the Lower 48.`,
    path: `/brands/${b.slug}/`,
  })
}

export default function BrandPage({ params }) {
  const b = brandBySlug(params.brand)
  if (!b) notFound()
  const items = productsForBrand(b.slug)
  const range = priceRange(items)
  // Categories this brand appears in, for the internal-link block.
  const cats = [...new Set(items.flatMap((p) => [p.category, ...(p.tags || [])]))]
    .map(categoryBySlug).filter(Boolean)

  const ld = {
    '@context': 'https://schema.org',
    '@type': 'Brand',
    name: b.name,
    description: b.intro,
    url: url(`/brands/${b.slug}/`),
    ...(range && {
      makesOffer: {
        '@type': 'AggregateOffer',
        priceCurrency: 'USD',
        lowPrice: range.low,
        highPrice: range.high,
        offerCount: items.length,
      },
    }),
  }

  const listLd = items.length ? {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `${b.name} electric dirt bikes`,
    numberOfItems: items.length,
    itemListElement: items.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: p.name,
      url: url(`/product/${p.slug}/`),
    })),
  } : null

  const faqLd = b.faqs && b.faqs.length ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: b.faqs.map((f) => ({
      '@type': 'Question', name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  } : null

  return (
    <>
      <Breadcrumbs items={[{ name: 'Brands', href: '/brands/' }, { name: b.name, href: `/brands/${b.slug}/` }]} />
      <JsonLd data={ld} />
      {listLd ? <JsonLd data={listLd} /> : null}
      {faqLd ? <JsonLd data={faqLd} /> : null}
      <section className="section" style={{ paddingTop: 8 }}>
        <div className="container">
          {/* H1 is the brand's primary keyword (config `h1`). */}
          <h1>{b.h1 || `${b.name} Electric Dirt Bikes`}</h1>
          <p className="lead">{b.intro}</p>
          <p className="muted">
            {/* Only the five brands in SITE.authorizedBrands may claim authorized status. */}
            {b.authorized
              ? `VoltTrack is an authorized US dealer for ${b.name}, so every bike ships with its genuine manufacturer warranty.`
              : `VoltTrack carries ${b.name} in the US, with the manufacturer's warranty and real post-purchase support.`}
            {' '}We ship to the Lower 48 and offer Pay-in-4 financing on eligible bikes.
          </p>

          {items.length ? (
            <>
              <div className="grid cols-4" style={{ marginTop: 24 }}>
                {items.map((p, i) => <ProductCard key={p.slug} p={p} eager={i === 0} />)}
              </div>
              <p className="form-note" style={{ marginTop: 20 }}>{PRICE_DISCLAIMER}</p>
            </>
          ) : (
            <p>New {b.name} models arriving soon — <Link href="/contact/">contact us</Link> for availability.</p>
          )}

          {b.faqs && b.faqs.length ? (
            <div style={{ marginTop: 48 }}>
              <h2>{b.name} — Frequently Asked Questions</h2>
              <FaqAccordion items={b.faqs} />
            </div>
          ) : null}

          <div className="section-soft" style={{ marginTop: 48, padding: 24, borderRadius: 'var(--radius)' }}>
            <h2 style={{ marginTop: 0 }}>Every {b.name} model</h2>
            <ul>
              {items.map((p) => (
                <li key={p.slug}>
                  <Link href={`/product/${p.slug}/`}>{p.name}</Link> — {p.short}
                </li>
              ))}
            </ul>
            {cats.length ? (
              <p style={{ marginBottom: 0 }}>
                Browse by type:{' '}
                {cats.map((c, i) => (
                  <span key={c.slug}>
                    {i > 0 ? ' · ' : ''}
                    <Link href={`/shop/${c.slug}/`}>{c.name}</Link>
                  </span>
                ))}
                {' · '}<Link href="/parts-accessories/">Parts &amp; accessories</Link>
              </p>
            ) : null}
          </div>
        </div>
      </section>
    </>
  )
}
