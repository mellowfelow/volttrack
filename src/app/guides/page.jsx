import Link from 'next/link'
import { GUIDES } from '@/config/site'
import Breadcrumbs from '@/components/Breadcrumbs'
import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'Electric Dirt Bike Buying Guides',
  description: 'Expert buying guides for electric dirt bikes — best bikes for beginners, kids, teens and adults, brand comparisons, and US legal guidance.',
  path: '/guides/',
})

export default function GuidesPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: 'Guides', href: '/guides/' }]} />
      <section className="section" style={{ paddingTop: 8 }}>
        <div className="container">
          <h1>Electric Dirt Bike Buying Guides</h1>
          <p className="lead">Honest, experience-based advice to help you choose the right bike.</p>
          <div className="grid cols-3" style={{ marginTop: 20 }}>
            {GUIDES.map((g) => (
              <Link key={g.slug} href={`/guides/${g.slug}/`} className="card" style={{ color: 'inherit' }}>
                <div className="card-body">
                  <h3>{g.title}</h3>
                  <p className="muted" style={{ fontSize: '.9rem' }}>{g.excerpt}</p>
                  <span className="price" style={{ fontSize: '.95rem', color: 'var(--brand)' }}>Read guide →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
