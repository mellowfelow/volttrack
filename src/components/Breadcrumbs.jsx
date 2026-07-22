import Link from 'next/link'
import { JsonLd, url } from '@/lib/seo'

// items: [{ name, href }] — last item is current (no link)
export default function Breadcrumbs({ items }) {
  const all = [{ name: 'Home', href: '/' }, ...items]
  const ld = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: all.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: url(it.href),
    })),
  }
  return (
    <div className="crumbs container" aria-label="Breadcrumb">
      <JsonLd data={ld} />
      {all.map((it, i) => (
        <span key={it.href}>
          {i > 0 ? ' / ' : ''}
          {i < all.length - 1 ? <Link href={it.href}>{it.name}</Link> : <span>{it.name}</span>}
        </span>
      ))}
    </div>
  )
}
