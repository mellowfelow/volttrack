'use client'
import { useState } from 'react'
import Link from 'next/link'
import { SITE, CATEGORIES } from '@/config/site'

export default function Nav() {
  const [open, setOpen] = useState(false)
  return (
    <header className="site-header">
      <div className="announce">
        🚚 {SITE.freeShippingText} · 💳 {SITE.financing} · ✅ Authorized US Dealer
      </div>
      <div className="container">
        <nav className="nav" aria-label="Primary">
          <Link href="/" className="brand-logo">⚡ {SITE.name}</Link>
          <div className="nav-links">
            <Link href="/shop/">Shop</Link>
            <Link href="/brands/">Brands</Link>
            <Link href="/guides/">Guides</Link>
            <Link href="/blog/">Blog</Link>
            <Link href="/about/">About</Link>
            <Link href="/contact/">Contact</Link>
            <Link href="/search/" aria-label="Search">🔍</Link>
            <Link href="/cart/" className="nav-cart" aria-label="Cart">🛒 Cart</Link>
          </div>
          <button
            className="hamburger"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            ☰
          </button>
        </nav>
        <div className={`mobile-menu${open ? ' open' : ''}`}>
          <Link href="/shop/" onClick={() => setOpen(false)}>Shop All Bikes</Link>
          {CATEGORIES.map((c) => (
            <Link key={c.slug} href={`/shop/${c.slug}/`} onClick={() => setOpen(false)}>
              {c.name}
            </Link>
          ))}
          <Link href="/brands/" onClick={() => setOpen(false)}>Brands</Link>
          <Link href="/guides/" onClick={() => setOpen(false)}>Guides</Link>
          <Link href="/blog/" onClick={() => setOpen(false)}>Blog</Link>
          <Link href="/about/" onClick={() => setOpen(false)}>About</Link>
          <Link href="/contact/" onClick={() => setOpen(false)}>Contact</Link>
          <Link href="/search/" onClick={() => setOpen(false)}>Search</Link>
          <Link href="/cart/" onClick={() => setOpen(false)}>Cart</Link>
        </div>
      </div>
    </header>
  )
}
