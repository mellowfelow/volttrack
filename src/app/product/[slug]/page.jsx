import { notFound } from 'next/navigation'
import Link from 'next/link'
import {
  PRODUCTS, DISCONTINUED, productBySlug, discontinuedBySlug, categoryBySlug,
  brandName, brandBySlug, productsInCategory, productsForBrand, SITE, PRICE_DISCLAIMER,
} from '@/config/site'
import Breadcrumbs from '@/components/Breadcrumbs'
import ProductCard from '@/components/ProductCard'
import ProductBuy from '@/components/ProductBuy'
import ProductSpecs from '@/components/ProductSpecs'
import FaqAccordion from '@/components/FaqAccordion'
import SmartImage from '@/components/SmartImage'
import { VariantProvider } from '@/components/VariantContext'
import { buildMetadata, JsonLd, url } from '@/lib/seo'
import DiscontinuedPage from './Discontinued'

export function generateStaticParams() {
  return [...PRODUCTS, ...DISCONTINUED].map((p) => ({ slug: p.slug }))
}

// Title format: [Model Name] | VoltTrack  (the "| VoltTrack" suffix comes from
// the layout title template, so this returns just the model name). Uses the full
// product name for clarity — all names sit within the ≤60-char rule once suffixed.
const titleFor = (p) => p.name

export function generateMetadata({ params }) {
  const d = discontinuedBySlug(params.slug)
  if (d) {
    return buildMetadata({
      title: `${d.name} — Discontinued`,
      description: `${d.note} See the ${d.successorName} at VoltTrack, an authorized US electric dirt bike dealer.`,
      path: `/product/${d.slug}/`,
      // Discontinued stubs redirect; keep them out of the index.
      robots: { index: false, follow: true },
    })
  }
  const p = productBySlug(params.slug)
  if (!p) return {}
  return buildMetadata({
    title: titleFor(p),
    description: p.metaDesc || p.short,
    path: `/product/${p.slug}/`,
    type: 'product',
    image: p.images && p.images[0] ? url(`/images/${p.images[0]}`) : undefined,
  })
}

export default function ProductPage({ params }) {
  const d = discontinuedBySlug(params.slug)
  if (d) return <DiscontinuedPage model={d} />

  const p = productBySlug(params.slug)
  if (!p) notFound()

  const cat = categoryBySlug(p.category)
  const brand = brandBySlug(p.brand)
  const img = p.images && p.images[0] ? `/images/${p.images[0]}` : '/images/placeholder-bike.svg'
  // Cross-sell: same brand first, topped up from the same category.
  const related = [
    ...productsForBrand(p.brand).filter((x) => x.slug !== p.slug),
    ...productsInCategory(p.category).filter((x) => x.slug !== p.slug && x.brand !== p.brand),
  ].filter((x, i, a) => a.findIndex((y) => y.slug === x.slug) === i).slice(0, 4)

  const offer = (price, name) => ({
    '@type': 'Offer',
    ...(name ? { name } : {}),
    priceCurrency: SITE.currency,
    price,
    availability: 'https://schema.org/InStock',
    url: url(`/product/${p.slug}/`),
    seller: { '@type': 'Organization', name: SITE.name },
  })

  const ld = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: p.name,
    description: p.description,
    image: [url(img)],
    brand: { '@type': 'Brand', name: brandName(p.brand) },
    category: cat ? cat.name : undefined,
    ...(p.specs && {
      additionalProperty: [
        { '@type': 'PropertyValue', name: 'Motor power', value: p.specs.power },
        { '@type': 'PropertyValue', name: 'Battery', value: p.specs.battery },
        { '@type': 'PropertyValue', name: 'Top speed', value: p.specs.topSpeed },
        { '@type': 'PropertyValue', name: 'Range', value: p.specs.range },
        { '@type': 'PropertyValue', name: 'Weight', value: p.specs.weight },
        { '@type': 'PropertyValue', name: 'Riding modes', value: p.specs.modes },
        { '@type': 'PropertyValue', name: 'Road legal', value: p.specs.roadLegal },
        { '@type': 'PropertyValue', name: 'Age recommendation', value: p.specs.age },
      ],
    }),
    // Variant products expose one Offer per variant under the single canonical URL.
    // Enquiry-only products get no Offer at all — we have no price to publish.
    ...(p.enquire ? {} : {
      offers: p.variants && p.variants.length
        ? p.variants.map((v) => offer(v.price, `${p.name} — ${v.label}`))
        : offer(p.price),
    }),
  }

  const faqLd = p.faqs && p.faqs.length ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: p.faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  } : null

  return (
    <VariantProvider variants={p.variants || []}>
      <Breadcrumbs
        items={[
          { name: 'Shop', href: '/shop/' },
          ...(cat ? [{ name: cat.name, href: `/shop/${cat.slug}/` }] : []),
          { name: p.name, href: `/product/${p.slug}/` },
        ]}
      />
      <JsonLd data={ld} />
      {faqLd ? <JsonLd data={faqLd} /> : null}
      <section className="section" style={{ paddingTop: 8 }}>
        <div className="container">
          <div className="grid cols-2" style={{ alignItems: 'start' }}>
            <div className="product-frame" style={{ borderRadius: 'var(--radius)', border: '1px solid var(--line)' }}>
              <SmartImage src={img} alt={`${p.name} electric dirt bike`} width={1600} height={1200} loading="eager" />
            </div>
            <div>
              {p.badge ? <span className="badge">{p.badge}</span> : null}
              <p className="muted" style={{ fontWeight: 600, margin: 0 }}>
                {brand ? <Link href={`/brands/${brand.slug}/`}>{brand.name}</Link> : brandName(p.brand)}
              </p>
              {/* H1 is the page's primary keyword (config `h1`), not the display name. */}
              <h1 style={{ marginTop: 4 }}>{p.h1 || p.name}</h1>
              <p>{p.description}</p>
              {p.availNote ? <p className="min-order-block" role="note">{p.availNote}</p> : null}
              <ProductBuy product={p} />
              <p style={{ marginTop: 12 }}>
                <Link href="/contact/" className="btn btn-ghost">Ask an expert</Link>
              </p>
              <p className="form-note" style={{ marginTop: 16 }}>
                {SITE.financing}. {SITE.freeShippingText}. Off-road use only unless a street-legal
                path is stated on this listing.
              </p>
            </div>
          </div>

          {p.specs ? (
            <div style={{ marginTop: 48 }}>
              <h2>Technical Specifications</h2>
              <ProductSpecs specs={p.specs} />
              {p.footnote ? <p className="form-note">{p.footnote}</p> : null}
              <p className="form-note">Specifications are indicative and may vary by model year and configuration. Confirm current manufacturer specs with us before purchase.</p>
            </div>
          ) : null}

          {p.faqs && p.faqs.length ? (
            <div style={{ marginTop: 48 }}>
              <h2>{p.name} — Frequently Asked Questions</h2>
              <FaqAccordion items={p.faqs} />
            </div>
          ) : null}

          <div className="section-soft" style={{ marginTop: 48, padding: 24, borderRadius: 'var(--radius)' }}>
            <h2 style={{ marginTop: 0 }}>Where this bike sits in the range</h2>
            <p>
              Browse the full{' '}
              {brand ? <Link href={`/brands/${brand.slug}/`}>{brand.name} range</Link> : brandName(p.brand)}
              {cat ? <> , or compare it against every <Link href={`/shop/${cat.slug}/`}>{cat.name.toLowerCase()}</Link> we stock</> : null}.
              Not sure which model fits your rider? <Link href="/contact/">Ask us</Link> — we ride these bikes ourselves.
            </p>
            <p className="form-note" style={{ marginBottom: 0 }}>{PRICE_DISCLAIMER}</p>
          </div>

          {related.length ? (
            <div style={{ marginTop: 48 }}>
              <h2>You might also consider</h2>
              <div className="grid cols-4" style={{ marginTop: 18 }}>
                {related.map((r) => <ProductCard key={r.slug} p={r} />)}
              </div>
            </div>
          ) : null}
        </div>
      </section>
    </VariantProvider>
  )
}
