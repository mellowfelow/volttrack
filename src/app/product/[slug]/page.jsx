import { notFound } from 'next/navigation'
import Link from 'next/link'
import {
  PRODUCTS, productBySlug, categoryBySlug, brandName, brandBySlug,
  productsInCategory, SITE,
} from '@/config/site'
import Breadcrumbs from '@/components/Breadcrumbs'
import ProductCard from '@/components/ProductCard'
import { buildMetadata, JsonLd, url } from '@/lib/seo'

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }))
}

export function generateMetadata({ params }) {
  const p = productBySlug(params.slug)
  if (!p) return {}
  return buildMetadata({
    title: `${p.name} for Sale`,
    description: p.short,
    path: `/product/${p.slug}/`,
    type: 'product',
    image: p.images && p.images[0] ? url(`/images/${p.images[0]}`) : undefined,
  })
}

export default function ProductPage({ params }) {
  const p = productBySlug(params.slug)
  if (!p) notFound()
  const cat = categoryBySlug(p.category)
  const brand = brandBySlug(p.brand)
  const img = p.images && p.images[0] ? `/images/${p.images[0]}` : '/images/placeholder-bike.svg'
  const related = productsInCategory(p.category).filter((x) => x.slug !== p.slug).slice(0, 4)

  const ld = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: p.name,
    description: p.description,
    image: [url(img)],
    brand: { '@type': 'Brand', name: brandName(p.brand) },
    category: cat ? cat.name : undefined,
    offers: {
      '@type': 'Offer',
      priceCurrency: SITE.currency,
      price: p.price,
      availability: 'https://schema.org/InStock',
      url: url(`/product/${p.slug}/`),
      seller: { '@type': 'Organization', name: SITE.name },
    },
  }

  return (
    <>
      <Breadcrumbs
        items={[
          { name: 'Shop', href: '/shop/' },
          ...(cat ? [{ name: cat.name, href: `/shop/${cat.slug}/` }] : []),
          { name: p.name, href: `/product/${p.slug}/` },
        ]}
      />
      <JsonLd data={ld} />
      <section className="section" style={{ paddingTop: 8 }}>
        <div className="container">
          <div className="grid cols-2" style={{ alignItems: 'start' }}>
            <div className="product-frame" style={{ borderRadius: 'var(--radius)', border: '1px solid var(--line)' }}>
              <img src={img} alt={`${p.name} electric dirt bike`} width={1600} height={1200} loading="eager" />
            </div>
            <div>
              {p.badge ? <span className="badge">{p.badge}</span> : null}
              <p className="muted" style={{ fontWeight: 600, margin: 0 }}>
                {brand ? <Link href={`/brands/${brand.slug}/`}>{brand.name}</Link> : brandName(p.brand)}
              </p>
              <h1 style={{ marginTop: 4 }}>{p.name}</h1>
              <p className="price" style={{ fontSize: '2rem' }}>
                {SITE.currencySymbol}{p.price.toLocaleString('en-US')}
              </p>
              <p>{p.description}</p>
              <div className="hero-cta">
                <Link href="/contact/" className="btn">Enquire &amp; Order</Link>
                <Link href="/shop/" className="btn btn-ghost">Compare bikes</Link>
              </div>
              <p className="form-note" style={{ marginTop: 16 }}>
                {SITE.financing}. {SITE.freeShippingText}. Off-road use only unless a street-legal
                path is stated. Prices are estimates and may change due to import tariff conditions.
              </p>
            </div>
          </div>

          {related.length ? (
            <div style={{ marginTop: 48 }}>
              <h2>Related {cat ? cat.name : 'bikes'}</h2>
              <div className="grid cols-4" style={{ marginTop: 18 }}>
                {related.map((r) => <ProductCard key={r.slug} p={r} />)}
              </div>
            </div>
          ) : null}
        </div>
      </section>
    </>
  )
}
