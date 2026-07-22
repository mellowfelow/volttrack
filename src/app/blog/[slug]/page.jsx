import { notFound } from 'next/navigation'
import Link from 'next/link'
import { POSTS, postBySlug, SITE } from '@/config/site'
import Breadcrumbs from '@/components/Breadcrumbs'
import { buildMetadata, JsonLd, url } from '@/lib/seo'

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }))
}

export function generateMetadata({ params }) {
  const p = postBySlug(params.slug)
  if (!p) return {}
  return buildMetadata({
    title: p.title,
    description: p.excerpt,
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
    description: p.excerpt,
    datePublished: p.date,
    dateModified: p.date,
    author: { '@type': 'Organization', name: SITE.name },
    publisher: { '@type': 'Organization', name: SITE.name },
    mainEntityOfPage: url(`/blog/${p.slug}/`),
  }
  return (
    <>
      <Breadcrumbs items={[{ name: 'Blog', href: '/blog/' }, { name: p.title, href: `/blog/${p.slug}/` }]} />
      <JsonLd data={ld} />
      <article className="section" style={{ paddingTop: 8 }}>
        <div className="container prose">
          <span className="eyebrow">{p.date}</span>
          <h1>{p.title}</h1>
          {p.body.map((para, i) => <p key={i}>{para}</p>)}
          <p style={{ marginTop: 24 }}>
            <Link href="/shop/" className="btn">Shop electric dirt bikes</Link>
          </p>
        </div>
      </article>
    </>
  )
}
