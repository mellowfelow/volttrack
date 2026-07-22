import Link from 'next/link'
import { SITE, brandName } from '@/config/site'
import AddToCart from '@/components/AddToCart'

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
        <span className="price">{SITE.currencySymbol}{p.price.toLocaleString('en-US')}</span>
        <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
          <AddToCart product={p} className="btn" label="Add to cart" />
          <Link href={`/product/${p.slug}/`} className="btn btn-ghost" style={{ padding: '13px 14px' }}>Details</Link>
        </div>
      </div>
    </div>
  )
}
