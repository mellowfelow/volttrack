import Link from 'next/link'
import { BRANDS, productsForBrand } from '@/config/site'
import Breadcrumbs from '@/components/Breadcrumbs'
import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'Electric Dirt Bike Brands',
  description: 'VoltTrack is an authorized US dealer for Sur-Ron, Stark Future, Talaria, KTM, STACYC, Razor, Segway, Zero and more. Browse electric dirt bikes by brand.',
  path: '/brands/',
})

export default function BrandsPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: 'Brands', href: '/brands/' }]} />
      <section className="section" style={{ paddingTop: 8 }}>
        <div className="container">
          <h1>The Brands We Carry</h1>
          <p className="lead">Authorized US dealer for the world&rsquo;s leading electric dirt bike brands.</p>
          <div className="grid cols-3" style={{ marginTop: 20 }}>
            {BRANDS.map((b) => (
              <Link key={b.slug} href={`/brands/${b.slug}/`} className="card" style={{ color: 'inherit' }}>
                <div className="card-body">
                  <h3>{b.name}</h3>
                  <p className="muted">{productsForBrand(b.slug).length} model(s) · {b.audience === 'youth' ? 'Youth & kids' : 'Adult'}</p>
                  <span className="price" style={{ fontSize: '.95rem', color: 'var(--brand)' }}>View bikes →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
