'use client'
import { useMemo, useState } from 'react'
import ProductCard from '@/components/ProductCard'

// Parts grid with a brand/compatibility filter (Step 7). Default state shows
// everything and is what SSR renders, so crawlers see the full list.
export default function PartsGrid({ items }) {
  const brands = useMemo(() => {
    const seen = new Map()
    for (const p of items) if (p.brandSlug) seen.set(p.brandSlug, p.brandLabel)
    return [...seen.entries()].sort((a, b) => a[1].localeCompare(b[1]))
  }, [items])

  const [brand, setBrand] = useState('all')
  const shown = useMemo(
    () => (brand === 'all' ? items : items.filter((p) => p.brandSlug === brand)),
    [items, brand],
  )

  return (
    <>
      {brands.length > 1 ? (
        <div className="filter-bar" style={{ gridTemplateColumns: 'minmax(200px,320px)' }}>
          <div className="field">
            <label htmlFor="parts-brand">Filter by bike / brand</label>
            <select id="parts-brand" value={brand} onChange={(e) => setBrand(e.target.value)}>
              <option value="all">All ({items.length})</option>
              {brands.map(([slug, label]) => (
                <option key={slug} value={slug}>
                  {label} ({items.filter((p) => p.brandSlug === slug).length})
                </option>
              ))}
            </select>
          </div>
        </div>
      ) : null}

      <p className="muted" role="status" style={{ marginTop: 8 }}>
        Showing {shown.length} of {items.length} products
      </p>

      <div className="grid cols-4" style={{ marginTop: 18 }}>
        {shown.map((p, i) => <ProductCard key={p.slug} p={p} part eager={i === 0} />)}
      </div>
    </>
  )
}
