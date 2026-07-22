import { notFound } from 'next/navigation'
import { BRANDS, brandBySlug, productsForBrand } from '@/config/site'
import ProductCard from '@/components/ProductCard'
import Breadcrumbs from '@/components/Breadcrumbs'
import { buildMetadata } from '@/lib/seo'

export function generateStaticParams() {
  return BRANDS.map((b) => ({ brand: b.slug }))
}

export function generateMetadata({ params }) {
  const b = brandBySlug(params.brand)
  if (!b) return {}
  return buildMetadata({
    title: `${b.name} Electric Dirt Bikes`,
    description: `Shop ${b.name} electric dirt bikes at VoltTrack — an authorized US dealer with expert advice, financing and fast shipping to the Lower 48.`,
    path: `/brands/${b.slug}/`,
  })
}

export default function BrandPage({ params }) {
  const b = brandBySlug(params.brand)
  if (!b) notFound()
  const items = productsForBrand(b.slug)
  return (
    <>
      <Breadcrumbs items={[{ name: 'Brands', href: '/brands/' }, { name: b.name, href: `/brands/${b.slug}/` }]} />
      <section className="section" style={{ paddingTop: 8 }}>
        <div className="container">
          <h1>{b.name} Electric Dirt Bikes</h1>
          <p className="lead">VoltTrack is an authorized US dealer for {b.name}, with genuine manufacturer warranties.</p>
          {items.length ? (
            <div className="grid cols-4" style={{ marginTop: 18 }}>
              {items.map((p, i) => <ProductCard key={p.slug} p={p} eager={i === 0} />)}
            </div>
          ) : (
            <p>New {b.name} models arriving soon — <a href="/contact/">contact us</a> for availability.</p>
          )}
        </div>
      </section>
    </>
  )
}
