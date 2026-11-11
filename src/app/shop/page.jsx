import Link from 'next/link'
import { CATEGORIES, BRANDS, PRODUCTS, PRICE_DISCLAIMER } from '@/config/site'
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
            {CATEGORIES.filter((c) => !c.parent).map((c) => (
              <Link key={c.slug} href={`/shop/${c.slug}/`} className="pill">{c.name}</Link>
            ))}
          </div>
          <div className="grid cols-4">
            {PRODUCTS.map((p, i) => (
              <ProductCard key={p.slug} p={p} eager={i === 0} />
            ))}
          </div>
          <p className="form-note" style={{ marginTop: 20 }}>{PRICE_DISCLAIMER}</p>

          <div style={{ marginTop: 40, maxWidth: 820 }}>
            <h2>How to choose an electric dirt bike</h2>
            <p>
              Start with the rider, then the terrain. Young riders do best on a{' '}
              <Link href="/shop/youth-electric-dirt-bikes/">youth electric dirt bike</Link> with adjustable power;
              adults can choose between lightweight <Link href="/shop/electric-trail-bikes/">trail bikes</Link>,
              closed-course <Link href="/shop/electric-motocross-bikes/">motocross bikes</Link> and compact{' '}
              <Link href="/shop/electric-pit-bikes/">pit bikes</Link>. On a budget, see our{' '}
              <Link href="/shop/cheap-electric-dirt-bikes/">cheap electric dirt bikes</Link>.
            </p>
            <p>
              Most bikes we sell are for off-road, private-land and OHV use only. A few have a stated road-registration
              path — see <Link href="/shop/street-legal-electric-bikes/">street legal electric dirt bikes</Link> and our{' '}
              <Link href="/guides/are-electric-dirt-bikes-street-legal/">street-legal guide</Link> before you buy.
              Not sure where to start? Read the <Link href="/guides/best-electric-dirt-bikes-for-beginners/">beginner&rsquo;s guide</Link>{' '}
              or browse all <Link href="/guides/">buying guides</Link>.
            </p>
          </div>

          <div className="section-soft" style={{ marginTop: 32, padding: 24, borderRadius: 'var(--radius)' }}>
            <h2 style={{ marginTop: 0 }}>Shop by brand</h2>
            <p style={{ marginBottom: 0 }}>
              {BRANDS.map((b, i) => (
                <span key={b.slug}>
                  {i > 0 ? ' · ' : ''}
                  <Link href={`/brands/${b.slug}/`}>{b.name}</Link>
                </span>
              ))}
              {' · '}<Link href="/parts-accessories/">Parts &amp; accessories</Link>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
