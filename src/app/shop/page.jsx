import Link from 'next/link'
import { CATEGORIES, PRODUCTS } from '@/config/site'
import ProductCard from '@/components/ProductCard'
import Breadcrumbs from '@/components/Breadcrumbs'
import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'Shop All Electric Dirt Bikes',
  description: 'Browse every electric dirt bike VoltTrack carries — Sur-Ron, Stark, Talaria, KTM, STACYC and more, for adults, teens and kids. Filter by category and brand.',
  path: '/shop/',
})

export default function ShopPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: 'Shop', href: '/shop/' }]} />
      <section className="section" style={{ paddingTop: 8 }}>
        <div className="container">
          <h1>Shop All Electric Dirt Bikes</h1>
          <p className="lead">Every bike we carry, from kids&rsquo; balance bikes to race-spec motocross machines.</p>
          <div className="pill-row" style={{ margin: '18px 0' }}>
            {CATEGORIES.map((c) => (
              <Link key={c.slug} href={`/shop/${c.slug}/`} className="pill">{c.name}</Link>
            ))}
          </div>
          <div className="grid cols-4">
            {PRODUCTS.map((p, i) => (
              <ProductCard key={p.slug} p={p} eager={i === 0} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
