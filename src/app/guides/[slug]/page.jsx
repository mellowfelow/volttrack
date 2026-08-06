import { notFound } from 'next/navigation'
import Link from 'next/link'
import { GUIDES, guideBySlug, productBySlug } from '@/config/site'
import ProductCard from '@/components/ProductCard'
import Breadcrumbs from '@/components/Breadcrumbs'
import FaqAccordion from '@/components/FaqAccordion'
import Prose from '@/components/Prose'
import { buildMetadata, JsonLd, url } from '@/lib/seo'

export function generateStaticParams() {
  return GUIDES.map((g) => ({ slug: g.slug }))
}

export function generateMetadata({ params }) {
  const g = guideBySlug(params.slug)
  if (!g) return {}
  return buildMetadata({
    // <title> uses the short metaTitle (≤60 with suffix) when a guide's on-page
    // H1 (g.title) runs longer for clarity/SEO — same pattern as blog posts.
    title: g.metaTitle || g.title,
    description: g.metaDesc || g.excerpt,
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
    '@type': g.schema === 'HowTo' ? 'HowTo' : 'Article',
    headline: g.title,
    name: g.title,
    description: g.metaDesc || g.excerpt,
    author: { '@type': 'Organization', name: 'VoltTrack' },
    publisher: { '@type': 'Organization', name: 'VoltTrack' },
    mainEntityOfPage: url(`/guides/${g.slug}/`),
  }
  const faqLd = g.faqs && g.faqs.length ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: g.faqs.map((f) => ({
      '@type': 'Question', name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  } : null

  // Rich model: `intro` (paras[]) + `sections` [{h2, paras[]}] + optional `faqs`.
  // Legacy guides use a flat `body` (paras[]) with no sections — both supported.
  const intro = g.intro || g.body || []

  return (
    <>
      <Breadcrumbs items={[{ name: 'Guides', href: '/guides/' }, { name: g.title, href: `/guides/${g.slug}/` }]} />
      <JsonLd data={ld} />
      {faqLd ? <JsonLd data={faqLd} /> : null}
      <article className="section" style={{ paddingTop: 8 }}>
        <div className="container prose">
          <h1>{g.title}</h1>
          {intro.map((para, i) => <Prose key={i} text={para} />)}

          {(g.sections || []).map((s, i) => (
            <section key={i}>
              <h2>{s.h2}</h2>
              {s.paras.map((para, j) => <Prose key={j} text={para} />)}
            </section>
          ))}

          {g.faqs && g.faqs.length ? (
            <section>
              <h2>Frequently Asked Questions</h2>
              <FaqAccordion items={g.faqs} />
            </section>
          ) : null}
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
