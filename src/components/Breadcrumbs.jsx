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
  const lastIdx = all.length - 1
  return (
    <nav className="crumbs container" aria-label="Breadcrumb">
      <JsonLd data={ld} />
      <ol className="crumbs-list">
        {all.map((it, i) => (
          <li key={it.href}>
            {i < lastIdx
              ? <><Link href={it.href}>{it.name}</Link><span className="crumbs-sep" aria-hidden="true"> / </span></>
              : <span aria-current="page">{it.name}</span>}
          </li>
        ))}
      </ol>
    </nav>
  )
}
