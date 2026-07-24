import { notFound } from 'next/navigation'
import Link from 'next/link'
import {
  CATEGORIES, categoryBySlug, productsInCategory, priceRange, brandBySlug, PRICE_DISCLAIMER,
} from '@/config/site'
import ProductFilters from '@/components/ProductFilters'
import Breadcrumbs from '@/components/Breadcrumbs'
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
      <Breadcrumbs items={[{ name: 'Shop', href: '/shop/' }, { name: c.name, href: `/shop/${c.slug}/` }]} />
      <JsonLd data={ld} />
      <section className="section" style={{ paddingTop: 8 }}>
        <div className="container">
          {/* H1 is the page's primary keyword (config `h1`), not the display name. */}
          <h1>{c.h1 || c.name}</h1>
          <p className="lead">{c.description}</p>
          {items.length ? (
            <>
              <ProductFilters items={items} />
              <p className="form-note" style={{ marginTop: 20 }}>{PRICE_DISCLAIMER}</p>

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
            </>
          ) : (
            <p>New models arriving soon — <Link href="/contact/">contact us</Link> for current stock.</p>
          )}
        </div>
      </section>
    </>
  )
}
