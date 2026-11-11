import { notFound } from 'next/navigation'
import Link from 'next/link'
import {
  CATEGORIES, CATEGORY_CONTENT, categoryBySlug, productsInCategory, priceRange, brandBySlug, PRICE_DISCLAIMER,
} from '@/config/site'
import ProductFilters from '@/components/ProductFilters'
import Breadcrumbs from '@/components/Breadcrumbs'
import FaqAccordion from '@/components/FaqAccordion'
import Prose from '@/components/Prose'
import { buildMetadata, JsonLd, url } from '@/lib/seo'

export function generateStaticParams() {
  return CATEGORIES.map((c) => ({ cat: c.slug }))
}

export function generateMetadata({ params }) {
  const c = categoryBySlug(params.cat)
  if (!c) return {}
  return buildMetadata({
    title: `${c.name} for Sale`,
    description: c.metaDesc || c.description,
    path: `/shop/${c.slug}/`,
  })
}

export default function CategoryPage({ params }) {
  const c = categoryBySlug(params.cat)
  if (!c) notFound()
  const items = productsInCategory(c.slug)
  const range = priceRange(items)
  // Brands represented here, and the most popular models to link out to.
  const brands = [...new Set(items.map((p) => p.brand))]
  const popular = [...items].sort((a, b) => b.price - a.price).slice(0, 3)
  const content = CATEGORY_CONTENT[c.slug]
  const parent = c.parent ? categoryBySlug(c.parent) : null
  const children = CATEGORIES.filter((x) => x.parent === c.slug)
  const faqLd = content && content.faqs && content.faqs.length ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: content.faqs.map((f) => ({
      '@type': 'Question', name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  } : null

  const ld = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: c.name,
    description: c.metaDesc || c.description,
    url: url(`/shop/${c.slug}/`),
    ...(range && {
      mainEntity: {
        '@type': 'OfferCatalog',
        name: c.name,
        numberOfItems: items.length,
      },
    }),
  }

  return (
    <>
      <Breadcrumbs items={[{ name: 'Shop', href: '/shop/' }, ...(parent ? [{ name: parent.name, href: `/shop/${parent.slug}/` }] : []), { name: c.name, href: `/shop/${c.slug}/` }]} />
      <JsonLd data={ld} />
      {faqLd ? <JsonLd data={faqLd} /> : null}
      <section className="section" style={{ paddingTop: 8 }}>
        <div className="container">
          {/* H1 is the page's primary keyword (config `h1`), not the display name. */}
          <h1>{c.h1 || c.name}</h1>
          <p className="lead">{c.description}</p>
          {children.length ? (
            <div className="pill-row" style={{ margin: '18px 0' }}>
              {children.map((x) => (
                <Link key={x.slug} href={`/shop/${x.slug}/`} className="pill">{x.name}</Link>
              ))}
            </div>
          ) : null}
          {items.length ? (
            <>
              <ProductFilters items={items} />
              <p className="form-note" style={{ marginTop: 20 }}>{PRICE_DISCLAIMER}</p>

              {c.slug === 'street-legal-electric-bikes' ? (
                <p style={{ marginTop: 4 }}>
                  Not sure what your state allows?{' '}
                  <Link href="/electric-dirt-bike-street-legal-by-state/">Check the rules for your state</Link>
                  {' '}or read the full{' '}
                  <Link href="/guides/are-electric-dirt-bikes-street-legal/">electric dirt bike street-legal guide</Link>.
                </p>
              ) : null}

              <div className="section-soft" style={{ marginTop: 40, padding: 24, borderRadius: 'var(--radius)' }}>
                <h2 style={{ marginTop: 0 }}>Popular in {c.name.toLowerCase()}</h2>
                <ul>
                  {popular.map((p) => (
                    <li key={p.slug}>
                      <Link href={`/product/${p.slug}/`}>{p.name}</Link> — {p.short}
                    </li>
                  ))}
                </ul>
                <p style={{ marginBottom: 0 }}>
                  Shop by brand:{' '}
                  {brands.map((slug, i) => {
                    const b = brandBySlug(slug)
                    if (!b) return null
                    return (
                      <span key={slug}>
                        {i > 0 ? ' · ' : ''}
                        <Link href={`/brands/${b.slug}/`}>{b.name}</Link>
                      </span>
                    )
                  })}
                </p>
              </div>

              {content && content.guide ? content.guide.map((g) => (
                <div key={g.h2} style={{ marginTop: 40, maxWidth: 820 }}>
                  <h2>{g.h2}</h2>
                  {g.paras.map((t) => <Prose key={t} text={t} />)}
                </div>
              )) : null}

              {content && content.faqs ? (
                <div style={{ marginTop: 40, maxWidth: 820 }}>
                  <h2>{c.name} — Frequently Asked Questions</h2>
                  <FaqAccordion items={content.faqs} />
                </div>
              ) : null}

              {content && content.related ? (
                <div className="section-soft" style={{ marginTop: 40, padding: 24, borderRadius: 'var(--radius)' }}>
                  <h2 style={{ marginTop: 0 }}>Related guides</h2>
                  <ul style={{ marginBottom: 0 }}>
                    {content.related.map(([label, href]) => (
                      <li key={href}><Link href={href}>{label}</Link></li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </>
          ) : (
            <p>New models arriving soon — <Link href="/contact/">contact us</Link> for current stock.</p>
          )}
        </div>
      </section>
    </>
  )
}
