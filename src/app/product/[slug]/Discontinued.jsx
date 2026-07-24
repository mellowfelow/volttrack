import Link from 'next/link'
import { productBySlug } from '@/config/site'
import Breadcrumbs from '@/components/Breadcrumbs'
import ProductCard from '@/components/ProductCard'

// Landing page for a discontinued model. On Vercel the 301 in next.config.mjs
// fires first and a visitor never sees this; it is the fallback for the static
// export target, where next.config redirects do not apply.
export default function DiscontinuedPage({ model }) {
  const successor = productBySlug(model.successor)
  return (
    <>
      <Breadcrumbs
        items={[
          { name: 'Shop', href: '/shop/' },
          { name: model.name, href: `/product/${model.slug}/` },
        ]}
      />
      <section className="section" style={{ paddingTop: 8 }}>
        <div className="container" style={{ maxWidth: 760 }}>
          <span className="badge">Discontinued</span>
          <h1>{model.name}</h1>
          <p className="lead">{model.note}</p>
          <p>
            <Link href={`/product/${model.successor}/`} className="btn btn-lg">
              Shop the {model.successorName} →
            </Link>
          </p>
          {successor ? (
            <div className="grid cols-2" style={{ marginTop: 32 }}>
              <ProductCard p={successor} eager />
            </div>
          ) : null}
          <p className="form-note" style={{ marginTop: 24 }}>
            Still looking for a used {model.name}? <Link href="/contact/">Contact us</Link> — we can
            tell you honestly whether it is worth tracking one down or whether the{' '}
            {model.successorName} is the better buy.
          </p>
        </div>
      </section>
    </>
  )
}
