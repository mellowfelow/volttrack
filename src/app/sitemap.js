import { CATEGORIES, BRANDS, PRODUCTS, POSTS, GUIDES, COMPARISONS, ACCESSORY_CATEGORIES } from '@/config/site'
import { url } from '@/lib/seo'

export const dynamic = 'force-static'

export default function sitemap() {
  const now = new Date().toISOString()
  const staticPaths = [
    '/', '/shop/', '/brands/', '/blog/', '/guides/', '/about/', '/contact/',
    '/faq/', '/finance/', '/shipping/', '/returns/', '/privacy/', '/terms/', '/parts-accessories/',
    '/electric-dirt-bike-street-legal-by-state/',
  ]
  // Deliberately NOT in the sitemap:
  //  - DISCONTINUED slugs — they 301 to their successor.
  //  - The 152 /parts/[slug]/ pages — on a young, low-authority domain a sitemap
  //    that is >50% thin accessory pages suppresses crawl demand for the core
  //    catalogue (GSC: 200 URLs "Discovered – currently not indexed"). Parts stay
  //    fully crawlable via on-page links from the /parts-accessories/ hubs and
  //    each product page. Re-add them here once the core set is fully indexed.
  const entries = [
    ...staticPaths.map((p) => ({ url: url(p), lastModified: now, priority: p === '/' ? 1 : 0.7 })),
    ...CATEGORIES.map((c) => ({ url: url(`/shop/${c.slug}/`), lastModified: now, priority: 0.8 })),
    ...BRANDS.map((b) => ({ url: url(`/brands/${b.slug}/`), lastModified: now, priority: 0.7 })),
    ...PRODUCTS.map((p) => ({ url: url(`/product/${p.slug}/`), lastModified: now, priority: 0.8 })),
    ...POSTS.map((p) => ({ url: url(`/blog/${p.slug}/`), lastModified: p.date, priority: 0.6 })),
    ...GUIDES.map((g) => ({ url: url(`/guides/${g.slug}/`), lastModified: now, priority: 0.6 })),
    ...COMPARISONS.map((c) => ({ url: url(`/compare/${c.slug}/`), lastModified: now, priority: 0.6 })),
    ...ACCESSORY_CATEGORIES.map((a) => ({ url: url(`/parts-accessories/${a.slug}/`), lastModified: now, priority: 0.6 })),
  ]
  return entries
}
