import { notFound } from 'next/navigation'
import Link from 'next/link'
import { POSTS, postBySlug, SITE } from '@/config/site'
import Breadcrumbs from '@/components/Breadcrumbs'
import FaqAccordion from '@/components/FaqAccordion'
import Prose, { proseNodes } from '@/components/Prose'
import { buildMetadata, JsonLd, url } from '@/lib/seo'

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }))
}

export function generateMetadata({ params }) {
  const p = postBySlug(params.slug)
  if (!p) return {}
  return buildMetadata({
    // <title> uses the short metaTitle (≤60 with suffix); the full tracker title
    // remains the on-page H1 below.
    title: p.metaTitle || p.title,
    description: p.metaDesc || p.excerpt,
    path: `/blog/${p.slug}/`,
    type: 'article',
  })
}

export default function PostPage({ params }) {
  const p = postBySlug(params.slug)
  if (!p) notFound()

  const ld = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: p.title,
    description: p.metaDesc || p.excerpt,
    datePublished: p.date,
    dateModified: p.dateModified || p.date,
    author: { '@type': 'Organization', name: SITE.name },
    publisher: { '@type': 'Organization', name: SITE.name, url: url('/') },
    mainEntityOfPage: url(`/blog/${p.slug}/`),
  }
  const faqLd = p.faqs && p.faqs.length ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: p.faqs.map((f) => ({
      '@type': 'Question', name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  } : null

  // New rich model: `intro` (paras[]) + `sections` [{h2, paras[]}] + optional
  // `faqs` and `cta`. Legacy posts use a flat `body` (paras[]) with no sections.
  const intro = p.intro || p.body || []

  return (
    <>
      <Breadcrumbs items={[{ name: 'Blog', href: '/blog/' }, { name: p.title, href: `/blog/${p.slug}/` }]} />
      <JsonLd data={ld} />
      {faqLd ? <JsonLd data={faqLd} /> : null}
      <article className="section" style={{ paddingTop: 8 }}>
        <div className="container prose">
          <span className="eyebrow">{p.date}</span>
          <h1>{p.title}</h1>
          {intro.map((para, i) => <Prose key={i} text={para} />)}

          {(p.sections || []).map((s, i) => (
            <section key={i}>
              <h2>{s.h2}</h2>
              {s.paras.map((para, j) => <Prose key={j} text={para} />)}
            </section>
          ))}

          {p.faqs && p.faqs.length ? (
            <section>
              <h2>Frequently Asked Questions</h2>
              <FaqAccordion items={p.faqs} />
            </section>
          ) : null}

          <p className="blog-cta" style={{ marginTop: 24 }}>
            {p.cta
              ? <Link href={p.cta.href} className="btn btn-lg">{p.cta.text}</Link>
              : <Link href="/shop/" className="btn btn-lg">Shop electric dirt bikes</Link>}
          </p>
        </div>
      </article>
    </>
  )
}
