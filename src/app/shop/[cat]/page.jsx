import { notFound } from 'next/navigation'
import { CATEGORIES, categoryBySlug, productsInCategory, priceRange } from '@/config/site'
import ProductCard from '@/components/ProductCard'
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
    description: c.description,
    path: `/shop/${c.slug}/`,
  })
}

export default function CategoryPage({ params }) {
  const c = categoryBySlug(params.cat)
  if (!c) notFound()
  const items = productsInCategory(c.slug)
  const range = priceRange(items)

  const ld = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: c.name,
    description: c.description,
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
          <h1>{c.name}</h1>
          <p className="lead">{c.description}</p>
          {items.length ? (
            <div className="grid cols-4" style={{ marginTop: 18 }}>
              {items.map((p, i) => (
                <ProductCard key={p.slug} p={p} eager={i === 0} />
              ))}
            </div>
          ) : (
            <p>New models arriving soon — <a href="/contact/">contact us</a> for current stock.</p>
          )}
        </div>
      </section>
    </>
  )
}
