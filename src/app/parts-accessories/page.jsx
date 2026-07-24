import Link from 'next/link'
import { ACCESSORY_HUB, ACCESSORY_CATEGORIES, PRICE_DISCLAIMER } from '@/config/site'
import Breadcrumbs from '@/components/Breadcrumbs'
import { buildMetadata, JsonLd, url } from '@/lib/seo'

export function generateMetadata() {
  return buildMetadata({
    title: ACCESSORY_HUB.name,
    description: ACCESSORY_HUB.metaDesc,
    path: '/parts-accessories/',
  })
}

export default function PartsHubPage() {
  const ld = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: ACCESSORY_HUB.name,
    description: ACCESSORY_HUB.metaDesc,
    url: url('/parts-accessories/'),
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: ACCESSORY_CATEGORIES.length,
      itemListElement: ACCESSORY_CATEGORIES.map((a, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: a.name,
        url: url(`/parts-accessories/${a.slug}/`),
      })),
    },
  }

  return (
    <>
      <Breadcrumbs items={[{ name: 'Parts & Accessories', href: '/parts-accessories/' }]} />
      <JsonLd data={ld} />
      <section className="section" style={{ paddingTop: 8 }}>
        <div className="container">
          <h1>{ACCESSORY_HUB.h1}</h1>
          <p className="lead">{ACCESSORY_HUB.description}</p>
          <div className="grid cols-3" style={{ marginTop: 24 }}>
            {ACCESSORY_CATEGORIES.map((a) => (
              <div className="card" key={a.slug}>
                <div className="card-body">
                  <h2 style={{ fontSize: '1.15rem', margin: '0 0 6px' }}>
                    <Link href={`/parts-accessories/${a.slug}/`} style={{ color: 'inherit' }}>{a.name}</Link>
                  </h2>
                  <p className="muted" style={{ fontSize: '.9rem' }}>{a.short}</p>
                  <Link href={`/parts-accessories/${a.slug}/`} className="btn btn-ghost btn-block">
                    Browse {a.name.toLowerCase()}
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="section-soft" style={{ marginTop: 40, padding: 24, borderRadius: 'var(--radius)' }}>
            <h2 style={{ marginTop: 0 }}>Can&rsquo;t see the part you need?</h2>
            <p>
              More categories are coming online. In the meantime we can source most parts for any
              bike in our <Link href="/shop/">range</Link> — tell us your model and year and we will
              quote you. <Link href="/contact/">Contact us</Link>.
            </p>
            <p className="form-note" style={{ marginBottom: 0 }}>{PRICE_DISCLAIMER}</p>
          </div>
        </div>
      </section>
    </>
  )
}
