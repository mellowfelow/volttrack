import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import StreetLegalChecker from '@/components/StreetLegalChecker'
import { buildMetadata, JsonLd, url } from '@/lib/seo'

const PATH = '/electric-dirt-bike-street-legal-by-state/'

export const metadata = buildMetadata({
  title: 'Are Electric Dirt Bikes Street Legal? State-by-State Checker',
  description:
    'Free tool: check how electric dirt bike street-legal rules work in your US state, which models can be road-registered, and where to confirm official rules.',
  path: PATH,
  type: 'article',
})

export default function StreetLegalByStatePage() {
  const ld = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Electric Dirt Bike Street-Legal Checker',
    applicationCategory: 'ReferenceApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    description:
      'Interactive tool explaining electric dirt bike street-legal and OHV rules by US state, with the models that offer a road-legal path.',
    url: url(PATH),
    publisher: { '@type': 'Organization', name: 'VoltTrack' },
  }

  return (
    <>
      <Breadcrumbs items={[{ name: 'Street-Legal Checker', href: PATH }]} />
      <JsonLd data={ld} />
      <section className="section" style={{ paddingTop: 8 }}>
        <div className="container">
          <h1>Are Electric Dirt Bikes Street Legal? State-by-State Checker</h1>
          <p className="lead">
            Whether an electric dirt bike can be ridden on the road depends on the model and on your
            state. Pick your state below for a plain-English rundown, the VoltTrack models that offer a
            street-legal path, and a link to your state&rsquo;s official rules.
          </p>

          <StreetLegalChecker />

          <div className="section-soft" style={{ marginTop: 48, padding: 24, borderRadius: 'var(--radius)' }}>
            <h2 style={{ marginTop: 0 }}>How street legality actually works</h2>
            <p>
              Three things make an electric dirt bike road-legal: the model has the required federal
              certification and equipment (lights, mirrors, horn, DOT tyres, a compliant VIN), your
              state lets that class be registered, and you actually register and insure it. Miss any one
              and it&rsquo;s off-road only — regardless of speed or power.
            </p>
            <p style={{ marginBottom: 0 }}>
              Read the deeper guide: <Link href="/guides/are-electric-dirt-bikes-street-legal/">Are electric dirt bikes street legal? US guide</Link>{' '}
              · <Link href="/guides/electric-dirt-bikes-california-legal-guide/">California Section 436.1 guide</Link>{' '}
              · <Link href="/shop/street-legal-electric-bikes/">Shop street-legal electric dirt bikes</Link>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
