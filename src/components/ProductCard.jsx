import Link from 'next/link'
import { SITE, brandName } from '@/config/site'

export default function ProductCard({ p, eager = false }) {
  const img = p.images && p.images[0]
    ? `/images/${p.images[0]}`
    : '/images/placeholder-bike.svg'
  return (
    <Link href={`/product/${p.slug}/`} className="card" style={{ color: 'inherit' }}>
      <div className="product-frame">
        <img
          src={img}
          alt={`${p.name} electric dirt bike`}
          width={1600}
          height={1200}
          loading={eager ? 'eager' : 'lazy'}
        />
      </div>
      <div className="card-body">
        {p.badge ? <span className="badge">{p.badge}</span> : null}
        <span className="muted" style={{ fontSize: '.8rem', fontWeight: 600 }}>{brandName(p.brand)}</span>
        <h3 style={{ margin: '2px 0 6px' }}>{p.name}</h3>
        <p className="muted" style={{ fontSize: '.9rem' }}>{p.short}</p>
        <span className="price">{SITE.currencySymbol}{p.price.toLocaleString('en-US')}</span>
      </div>
    </Link>
  )
}
