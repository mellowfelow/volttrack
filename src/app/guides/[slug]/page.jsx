import { notFound } from 'next/navigation'
import Link from 'next/link'
import { GUIDES, guideBySlug, productBySlug } from '@/config/site'
import ProductCard from '@/components/ProductCard'
import Breadcrumbs from '@/components/Breadcrumbs'
import { buildMetadata, JsonLd, url } from '@/lib/seo'

export function generateStaticParams() {
  return GUIDES.map((g) => ({ slug: g.slug }))
}

export function generateMetadata({ params }) {
  const g = guideBySlug(params.slug)
  if (!g) return {}
  return buildMetadata({
    title: g.title,
    description: g.excerpt,
    path: `/guides/${g.slug}/`,
    type: 'article',
  })
}

export default function GuidePage({ params }) {
  const g = guideBySlug(params.slug)
  if (!g) notFound()
  const related = (g.related || []).map(productBySlug).filter(Boolean)
  const ld = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: g.title,
    description: g.excerpt,
    author: { '@type': 'Organization', name: 'VoltTrack' },
    publisher: { '@type': 'Organization', name: 'VoltTrack' },
    mainEntityOfPage: url(`/guides/${g.slug}/`),
  }
  return (
    <>
      <Breadcrumbs items={[{ name: 'Guides', href: '/guides/' }, { name: g.title, href: `/guides/${g.slug}/` }]} />
      <JsonLd data={ld} />
      <article className="section" style={{ paddingTop: 8 }}>
        <div className="container prose">
          <h1>{g.title}</h1>
          {g.body.map((para, i) => <p key={i}>{para}</p>)}
        </div>
        {related.length ? (
          <div className="container" style={{ marginTop: 32 }}>
            <h2>Bikes mentioned in this guide</h2>
            <div className="grid cols-4" style={{ marginTop: 18 }}>
              {related.map((p) => <ProductCard key={p.slug} p={p} />)}
            </div>
          </div>
        ) : null}
        <div className="container" style={{ marginTop: 24 }}>
          <Link href="/guides/" className="btn btn-ghost">← All guides</Link>
        </div>
      </article>
    </>
  )
}
