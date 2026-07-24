import Link from 'next/link'
import { SITE, brandName, partPriceLabel } from '@/config/site'
import CardBuy from '@/components/CardBuy'
import SmartImage from '@/components/SmartImage'

// Renders a bike product by default, or an accessory when `part` is true
// (links to /parts/[slug]/, shows SKU + ranged price, no spec chips).
export default function ProductCard({ p, eager = false, part = false }) {
  const href = part ? `/parts/${p.slug}/` : `/product/${p.slug}/`
  const img = p.images && p.images[0]
    ? `/images/${p.images[0]}`
    : '/images/placeholder-bike.svg'
  const brandLabel = part ? p.brandLabel : brandName(p.brand)
  return (
    <div className="card">
      <Link href={href} style={{ color: 'inherit' }} aria-label={p.name}>
        <div className="product-frame">
          <SmartImage
            src={img}
            alt={`${p.name}${part ? '' : ' electric dirt bike'}`}
            width={1600}
            height={1200}
            loading={eager ? 'eager' : 'lazy'}
          />
        </div>
      </Link>
      <div className="card-body">
        {p.badge ? <span className="badge">{p.badge}</span> : null}
        <span className="muted" style={{ fontSize: '.8rem', fontWeight: 600 }}>{brandLabel}</span>
        <h3 style={{ margin: '2px 0 6px' }}>
          <Link href={href} style={{ color: 'inherit' }}>{p.name}</Link>
        </h3>
        {part ? (
          p.fits ? <p className="muted" style={{ fontSize: '.9rem' }}>Fits {p.fits}</p> : null
        ) : (
          <p className="muted" style={{ fontSize: '.9rem' }}>{p.short}</p>
        )}
        {!part && p.specs ? (
          <ul className="spec-chips" aria-label="Key specifications">
            <li><span aria-hidden="true">⚡</span> {p.specs.topSpeed}</li>
            <li><span aria-hidden="true">📏</span> {p.specs.range}</li>
            <li><span aria-hidden="true">🔋</span> {p.specs.battery}</li>
            <li><span aria-hidden="true">⚖️</span> {p.specs.weight}</li>
          </ul>
        ) : null}
        {part ? (
          <>
            <span className="price">{partPriceLabel(p)}</span>
            <CardBuy product={p} />
            <Link href={href} className="btn btn-ghost btn-block" style={{ marginTop: 8 }}>View details</Link>
          </>
        ) : p.enquire ? (
          <>
            <span className="price">Contact for pricing</span>
            <Link href={href} className="btn btn-block" style={{ marginTop: 8 }}>
              {p.pending ? 'Register interest' : 'Enquire'}
            </Link>
          </>
        ) : (
          <>
            <span className="price">{SITE.currencySymbol}{p.price.toLocaleString('en-US')}</span>
            <CardBuy product={p} />
            <Link href={href} className="btn btn-ghost btn-block" style={{ marginTop: 8 }}>View details</Link>
          </>
        )}
      </div>
    </div>
  )
}
