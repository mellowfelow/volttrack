import { notFound } from 'next/navigation'
import Link from 'next/link'
import {
  PARTS, partBySlug, accessoryCatBySlug, partsInCategory, productBySlug,
  SITE, PRICE_DISCLAIMER,
} from '@/config/site'
import Breadcrumbs from '@/components/Breadcrumbs'
import PartBuy from '@/components/PartBuy'
import ProductCard from '@/components/ProductCard'
import SmartImage from '@/components/SmartImage'
import { buildMetadata, JsonLd, url } from '@/lib/seo'

const DISC_72V =
  '72V and above batteries require an aftermarket controller (e.g. EBMX X-9000 ~$499). For range only — stay 60V. For speed + power — upgrade to 72V. Contact us for a full upgrade consultation.'
const DISC_STACYC =
  'Power tool battery adapters void the STACYC manufacturer warranty on electrical components. Max 5Ah batteries. Do not leave on the bike overnight. Not an official STACYC product.'

export function generateStaticParams() {
  return PARTS.map((p) => ({ slug: p.slug }))
}

export function generateMetadata({ params }) {
  const p = partBySlug(params.slug)
  if (!p) return {}
  return buildMetadata({
    absoluteTitle: p.title, // already ends "... | VoltTrack Parts"
    description: p.metaDesc,
    path: `/parts/${p.slug}/`,
    type: 'product',
    image: url(`/images/parts/${p.slug}-01.webp`),
  })
}

export default function PartPage({ params }) {
  const p = partBySlug(params.slug)
  if (!p) notFound()
  const cat = accessoryCatBySlug(p.category)
  const img = '/images/placeholder-bike.svg'
  // Related: other parts in the same category.
  const related = partsInCategory(p.category).filter((x) => x.slug !== p.slug).slice(0, 4)
  const compatProducts = (p.compat || []).map(productBySlug).filter(Boolean)

  const ld = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: p.name,
    description: p.metaDesc,
    sku: p.sku,
    brand: { '@type': 'Brand', name: p.brandLabel },
    image: [url(`/images/parts/${p.slug}-01.webp`)],
    offers: {
      '@type': 'Offer',
      price: p.price,
      priceCurrency: SITE.currency,
      availability: 'https://schema.org/InStock',
      url: url(`/parts/${p.slug}/`),
      seller: { '@type': 'Organization', name: SITE.name },
    },
  }

  return (
    <>
      <Breadcrumbs
        items={[
          { name: 'Parts & Accessories', href: '/parts-accessories/' },
          ...(cat ? [{ name: cat.name, href: `/parts-accessories/${cat.slug}/` }] : []),
          { name: p.name, href: `/parts/${p.slug}/` },
        ]}
      />
      <JsonLd data={ld} />
      <section className="section" style={{ paddingTop: 8 }}>
        <div className="container">
          <div className="grid cols-2" style={{ alignItems: 'start' }}>
            <div className="product-frame" style={{ borderRadius: 'var(--radius)', border: '1px solid var(--line)' }}>
              <SmartImage src={img} alt={`${p.name}`} width={1600} height={1200} loading="eager" />
            </div>
            <div>
              <p className="muted" style={{ fontWeight: 600, margin: 0 }}>
                {p.brandSlug ? <Link href={`/brands/${p.brandSlug}/`}>{p.brandLabel}</Link> : p.brandLabel}
              </p>
              <h1 style={{ marginTop: 4 }}>{p.h1}</h1>
              <PartBuy part={p} />

              {p.disc72v ? <p className="min-order-block" role="note">⚠️ {DISC_72V}</p> : null}
              {p.discStacyc ? <p className="min-order-block" role="note">⚠️ {DISC_STACYC}</p> : null}

              <p style={{ marginTop: 12 }}>
                <Link href="/contact/" className="btn btn-ghost">Ask about fitment</Link>
              </p>
              <p className="form-note" style={{ marginTop: 16 }}>
                {SITE.freeShippingText}. {SITE.financing}.
              </p>
            </div>
          </div>

          {/* Compatible bikes — mandatory internal links to product pages */}
          <div style={{ marginTop: 40 }}>
            <h2>Compatible bikes</h2>
            {compatProducts.length ? (
              <>
                <p>This part fits the following electric dirt bikes we sell:</p>
                <ul>
                  {compatProducts.map((b) => (
                    <li key={b.slug}><Link href={`/product/${b.slug}/`}>{b.name}</Link></li>
                  ))}
                </ul>
              </>
            ) : (
              <p>
                A universal accessory suited to riders across our range — browse{' '}
                <Link href="/shop/">all electric dirt bikes</Link> or ask us to confirm fit for your
                specific model.
              </p>
            )}
            <p className="form-note">
              Not sure this fits your bike? <Link href="/contact/">Contact us</Link> with your model
              and year and we&rsquo;ll confirm before you order.
            </p>
          </div>

          <div className="section-soft" style={{ marginTop: 40, padding: 24, borderRadius: 'var(--radius)' }}>
            <p style={{ margin: 0 }}>
              Back to{' '}
              {cat ? <Link href={`/parts-accessories/${cat.slug}/`}>{cat.name}</Link> : <Link href="/parts-accessories/">Parts &amp; Accessories</Link>}
              {' · '}<Link href="/parts-accessories/">All parts &amp; accessories</Link>
            </p>
            <p className="form-note" style={{ marginBottom: 0 }}>{PRICE_DISCLAIMER}</p>
          </div>

          {related.length ? (
            <div style={{ marginTop: 40 }}>
              <h2>More {cat ? cat.name.toLowerCase() : 'parts'}</h2>
              <div className="grid cols-4" style={{ marginTop: 18 }}>
                {related.map((r) => <ProductCard key={r.slug} p={r} part />)}
              </div>
            </div>
          ) : null}
        </div>
      </section>
    </>
  )
}
