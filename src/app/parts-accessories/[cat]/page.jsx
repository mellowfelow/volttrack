import { notFound } from 'next/navigation'
import Link from 'next/link'
import {
  ACCESSORY_CATEGORIES, accessoryCatBySlug, partsInCategory, brandBySlug, PRICE_DISCLAIMER,
} from '@/config/site'
import PartsGrid from '@/components/PartsGrid'
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
  const items = partsInCategory(a.slug)

  const ld = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: a.name,
    description: a.metaDesc,
    url: url(`/parts-accessories/${a.slug}/`),
    isPartOf: { '@type': 'CollectionPage', name: 'Parts & Accessories', url: url('/parts-accessories/') },
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: items.length,
      itemListElement: items.map((it, i) => ({
        '@type': 'ListItem', position: i + 1, name: it.name, url: url(`/parts/${it.slug}/`),
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

          {items.length ? <PartsGrid items={items} /> : (
            <p>Products arriving soon — <Link href="/contact/">contact us</Link> for current stock.</p>
          )}

          <p className="form-note" style={{ marginTop: 20 }}>{PRICE_DISCLAIMER}</p>

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
