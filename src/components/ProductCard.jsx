import Link from 'next/link'
import { SITE, brandName } from '@/config/site'
import CardBuy from '@/components/CardBuy'

export default function ProductCard({ p, eager = false }) {
  const img = p.images && p.images[0]
    ? `/images/${p.images[0]}`
    : '/images/placeholder-bike.svg'
  return (
    <div className="card">
      <Link href={`/product/${p.slug}/`} style={{ color: 'inherit' }} aria-label={p.name}>
        <div className="product-frame">
          <img
            src={img}
            alt={`${p.name} electric dirt bike`}
            width={1600}
            height={1200}
            loading={eager ? 'eager' : 'lazy'}
          />
        </div>
      </Link>
      <div className="card-body">
        {p.badge ? <span className="badge">{p.badge}</span> : null}
        <span className="muted" style={{ fontSize: '.8rem', fontWeight: 600 }}>{brandName(p.brand)}</span>
        <h3 style={{ margin: '2px 0 6px' }}>
          <Link href={`/product/${p.slug}/`} style={{ color: 'inherit' }}>{p.name}</Link>
        </h3>
        <p className="muted" style={{ fontSize: '.9rem' }}>{p.short}</p>
        {p.specs ? (
          <ul className="spec-chips" aria-label="Key specifications">
            <li><span aria-hidden="true">⚡</span> {p.specs.topSpeed}</li>
            <li><span aria-hidden="true">📏</span> {p.specs.range}</li>
            <li><span aria-hidden="true">🔋</span> {p.specs.battery}</li>
            <li><span aria-hidden="true">⚖️</span> {p.specs.weight}</li>
          </ul>
        ) : null}
        <span className="price">{SITE.currencySymbol}{p.price.toLocaleString('en-US')}</span>
        <CardBuy product={p} />
        <Link href={`/product/${p.slug}/`} className="btn btn-ghost btn-block" style={{ marginTop: 8 }}>View details</Link>
      </div>
    </div>
  )
}
