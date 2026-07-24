'use client'
import { useMemo, useState } from 'react'
import { SITE, brandName } from '@/config/site'
import ProductCard from '@/components/ProductCard'

const money = (n) => `${SITE.currencySymbol}${n.toLocaleString('en-US')}`

const SORTS = [
  { id: 'featured', label: 'Featured' },
  { id: 'price-asc', label: 'Price: low to high' },
  { id: 'price-desc', label: 'Price: high to low' },
  { id: 'speed-desc', label: 'Top speed' },
]

// Leading number out of a spec string, e.g. "47 mph" → 47, "~30 mph" → 30.
const num = (s) => {
  const m = String(s || '').match(/[\d.]+/)
  return m ? parseFloat(m[0]) : 0
}

// Brand + price filtering and sorting for a collection page. The default state
// is "everything, unfiltered", and that state is what server-side rendering emits,
// so crawlers see the complete product list without running the filters.
export default function ProductFilters({ items }) {
  const brands = useMemo(
    () => [...new Set(items.map((p) => p.brand))].sort((a, b) => brandName(a).localeCompare(brandName(b))),
    [items],
  )
  const max = useMemo(() => Math.max(...items.map((p) => p.price), 0), [items])

  const [brand, setBrand] = useState('all')
  const [maxPrice, setMaxPrice] = useState(max)
  const [sort, setSort] = useState('featured')

  const shown = useMemo(() => {
    let list = items.filter((p) => (brand === 'all' || p.brand === brand) && p.price <= maxPrice)
    if (sort === 'price-asc') list = [...list].sort((a, b) => a.price - b.price)
    if (sort === 'price-desc') list = [...list].sort((a, b) => b.price - a.price)
    if (sort === 'speed-desc') list = [...list].sort((a, b) => num(b.specs && b.specs.topSpeed) - num(a.specs && a.specs.topSpeed))
    return list
  }, [items, brand, maxPrice, sort])

  return (
    <>
      <div className="filter-bar">
        <div className="field">
          <label htmlFor="filter-brand">Brand</label>
          <select id="filter-brand" value={brand} onChange={(e) => setBrand(e.target.value)}>
            <option value="all">All brands ({items.length})</option>
            {brands.map((b) => (
              <option key={b} value={b}>
                {brandName(b)} ({items.filter((p) => p.brand === b).length})
              </option>
            ))}
          </select>
        </div>
        <div className="field">
          <label htmlFor="filter-price">Max price: {money(maxPrice)}</label>
          <input
            id="filter-price" type="range" min={0} max={max} step={100}
            value={maxPrice} onChange={(e) => setMaxPrice(Number(e.target.value))}
          />
        </div>
        <div className="field">
          <label htmlFor="filter-sort">Sort by</label>
          <select id="filter-sort" value={sort} onChange={(e) => setSort(e.target.value)}>
            {SORTS.map((s) => <option key={s.id} value={s.id}>{s.label}</option>)}
          </select>
        </div>
      </div>

      <p className="muted" role="status" style={{ marginTop: 8 }}>
        Showing {shown.length} of {items.length} bikes
      </p>

      {shown.length ? (
        <div className="grid cols-4" style={{ marginTop: 18 }}>
          {shown.map((p, i) => <ProductCard key={p.slug} p={p} eager={i === 0} />)}
        </div>
      ) : (
        <p>No bikes match those filters. Widen the price range or choose another brand.</p>
      )}
    </>
  )
}
