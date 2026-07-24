import { notFound } from 'next/navigation'
import Link from 'next/link'
import { COMPARISONS, comparisonBySlug, productBySlug } from '@/config/site'
import ProductCard from '@/components/ProductCard'
import Breadcrumbs from '@/components/Breadcrumbs'
import { buildMetadata, JsonLd, url } from '@/lib/seo'

export function generateStaticParams() {
  return COMPARISONS.map((c) => ({ slug: c.slug }))
}

export function generateMetadata({ params }) {
  const c = comparisonBySlug(params.slug)
  if (!c) return {}
  return buildMetadata({
    title: c.title,
    description: c.metaDesc || c.excerpt,
    path: `/compare/${c.slug}/`,
    type: 'article',
  })
}

export default function ComparePage({ params }) {
  const c = comparisonBySlug(params.slug)
  if (!c) notFound()
  const related = (c.related || []).map(productBySlug).filter(Boolean)
  const ld = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: c.title,
    description: c.metaDesc || c.excerpt,
    author: { '@type': 'Organization', name: 'VoltTrack' },
    publisher: { '@type': 'Organization', name: 'VoltTrack' },
    mainEntityOfPage: url(`/compare/${c.slug}/`),
  }
  return (
    <>
      <Breadcrumbs items={[{ name: 'Compare', href: '/guides/' }, { name: c.title, href: `/compare/${c.slug}/` }]} />
      <JsonLd data={ld} />
      <article className="section" style={{ paddingTop: 8 }}>
        <div className="container prose">
          <h1>{c.title}</h1>
          {c.body.map((para, i) => <p key={i}>{para}</p>)}
        </div>
        {related.length ? (
          <div className="container" style={{ marginTop: 32 }}>
            <h2>Bikes in this comparison</h2>
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
