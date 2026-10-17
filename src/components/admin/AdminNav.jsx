'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const LINKS = [
  { href: '/admin/', label: 'Dashboard' },
  { href: '/admin/orders/', label: 'Orders' },
  { href: '/admin/enquiries/', label: 'Enquiries' },
]

export default function AdminNav({ onSignOut }) {
  const pathname = (usePathname() || '').replace(/\/?$/, '/')
  return (
    <nav className="admin-nav" aria-label="Admin">
      <Link href="/admin/" className="brand">VoltTrack Admin</Link>
      {LINKS.map((l) => {
        const active = l.href === '/admin/' ? pathname === '/admin/' : pathname.startsWith(l.href)
        return (
          <Link key={l.href} href={l.href} className={active ? 'active' : undefined} aria-current={active ? 'page' : undefined}>
            {l.label}
          </Link>
        )
      })}
      <span style={{ flex: 1 }} />
      <button type="button" onClick={onSignOut} className="logout-btn">Sign out</button>
    </nav>
  )
}
