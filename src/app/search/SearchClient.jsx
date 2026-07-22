'use client'
import { useState, useMemo } from 'react'
import Link from 'next/link'
import { PRODUCTS, POSTS, GUIDES, SITE, brandName } from '@/config/site'

export default function SearchClient() {
  const [q, setQ] = useState('')
  const query = q.trim().toLowerCase()

  const results = useMemo(() => {
    if (!query) return []
    const hit = (s) => s && s.toLowerCase().includes(query)
    const prods = PRODUCTS.filter(
      (p) => hit(p.name) || hit(p.short) || hit(brandName(p.brand)) || hit(p.category),
    ).map((p) => ({ type: 'Bike', title: p.name, href: `/product/${p.slug}/`, sub: `${brandName(p.brand)} · ${SITE.currencySymbol}${p.price.toLocaleString('en-US')}` }))
    const posts = POSTS.filter((p) => hit(p.title) || hit(p.excerpt)).map((p) => ({ type: 'Blog', title: p.title, href: `/blog/${p.slug}/`, sub: p.excerpt }))
    const guides = GUIDES.filter((g) => hit(g.title) || hit(g.excerpt)).map((g) => ({ type: 'Guide', title: g.title, href: `/guides/${g.slug}/`, sub: g.excerpt }))
    return [...prods, ...posts, ...guides]
  }, [query])

  return (
    <section className="section" style={{ paddingTop: 8 }}>
      <div className="container">
        <h1>Search</h1>
        <div className="field" style={{ maxWidth: 520 }}>
          <label htmlFor="q">Search bikes, guides and posts</label>
          <input id="q" value={q} onChange={(e) => setQ(e.target.value)} placeholder="e.g. Sur-Ron, kids, motocross…" autoFocus />
        </div>
        {query && (
          <p className="muted">{results.length} result{results.length === 1 ? '' : 's'} for &ldquo;{q}&rdquo;</p>
        )}
        <div className="grid cols-2" style={{ marginTop: 12 }}>
          {results.map((r) => (
            <Link key={r.href} href={r.href} className="card" style={{ color: 'inherit' }}>
              <div className="card-body">
                <span className="badge">{r.type}</span>
                <h3>{r.title}</h3>
                <p className="muted" style={{ fontSize: '.9rem' }}>{r.sub}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
