import { notFound } from 'next/navigation'
import Link from 'next/link'
import {
  ACCESSORY_CATEGORIES, accessoryCatBySlug, brandBySlug, PRICE_DISCLAIMER,
} from '@/config/site'
import Breadcrumbs from '@/components/Breadcrumbs'
import FaqAccordion from '@/components/FaqAccordion'
import { buildMetadata, JsonLd, url } from '@/lib/seo'

export function generateStaticParams() {
  return ACCESSORY_CATEGORIES.map((a) => ({ cat: a.slug }))
}

export function generateMetadata({ params }) {
  const a = accessoryCatBySlug(params.cat)
  if (!a) return {}
  return buildMetadata({
    title: a.name,
    description: a.metaDesc,
    path: `/parts-accessories/${a.slug}/`,
  })
}

export default function AccessoryCategoryPage({ params }) {
  const a = accessoryCatBySlug(params.cat)
  if (!a) notFound()

  const count = a.groups.reduce((n, g) => n + g.items.length, 0)

  const ld = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: a.name,
    description: a.metaDesc,
    url: url(`/parts-accessories/${a.slug}/`),
    isPartOf: { '@type': 'CollectionPage', name: 'Parts & Accessories', url: url('/parts-accessories/') },
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: count,
      itemListElement: a.groups.flatMap((g) => g.items).map((it, i) => ({
        '@type': 'ListItem', position: i + 1, name: it.name,
      })),
    },
  }

  const faqLd = a.faqs && a.faqs.length ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: a.faqs.map((f) => ({
      '@type': 'Question', name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  } : null

  return (
    <>
      <Breadcrumbs
        items={[
          { name: 'Parts & Accessories', href: '/parts-accessories/' },
          { name: a.name, href: `/parts-accessories/${a.slug}/` },
        ]}
      />
      <JsonLd data={ld} />
      {faqLd ? <JsonLd data={faqLd} /> : null}
      <section className="section" style={{ paddingTop: 8 }}>
        <div className="container">
          <h1>{a.h1}</h1>
          <p className="lead">{a.description}</p>

          {a.groups.map((g) => (
            <div key={g.name} style={{ marginTop: 40 }}>
              <h2>{g.name}</h2>
              {g.warn ? <p className="min-order-block" role="note">⚠️ {g.warn}</p> : null}
              <div className="spec-table-wrap">
                <table className="spec-table">
                  <caption className="sr-only">{g.name}</caption>
                  <thead>
                    <tr><th scope="col">Product</th><th scope="col">Fits</th><th scope="col">Price</th></tr>
                  </thead>
                  <tbody>
                    {g.items.map((it) => (
                      <tr key={it.name}>
                        <th scope="row" style={{ fontWeight: 600 }}>{it.name}</th>
                        <td>{it.fits || '—'}</td>
                        <td className="price">{it.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {g.note ? <p className="form-note">{g.note}</p> : null}
            </div>
          ))}

          <p className="form-note" style={{ marginTop: 24 }}>{PRICE_DISCLAIMER}</p>
          <p style={{ marginTop: 16 }}>
            <Link href="/contact/" className="btn btn-lg">Enquire about {a.name.toLowerCase()}</Link>
          </p>

          {a.faqs && a.faqs.length ? (
            <div style={{ marginTop: 48 }}>
              <h2>{a.name} — Frequently Asked Questions</h2>
              <FaqAccordion items={a.faqs} />
            </div>
          ) : null}

          {a.brandLinks && a.brandLinks.length ? (
            <div className="section-soft" style={{ marginTop: 48, padding: 24, borderRadius: 'var(--radius)' }}>
              <h2 style={{ marginTop: 0 }}>Shop the bikes these parts fit</h2>
              <p>
                {a.brandLinks.map((slug, i) => {
                  const b = brandBySlug(slug)
                  if (!b) return null
                  return (
                    <span key={slug}>
                      {i > 0 ? ' · ' : ''}
                      <Link href={`/brands/${b.slug}/`}>{b.name}</Link>
                    </span>
                  )
                })}
              </p>
              <p style={{ marginBottom: 0 }}>
                Or browse <Link href="/parts-accessories/">all parts &amp; accessories</Link> and the
                full <Link href="/shop/">electric dirt bike range</Link>.
              </p>
            </div>
          ) : null}
        </div>
      </section>
    </>
  )
}
