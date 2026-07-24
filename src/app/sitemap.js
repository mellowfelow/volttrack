import { CATEGORIES, BRANDS, PRODUCTS, POSTS, GUIDES, COMPARISONS, ACCESSORY_CATEGORIES, PARTS } from '@/config/site'
import { url } from '@/lib/seo'

export const dynamic = 'force-static'

export default function sitemap() {
  const now = new Date().toISOString()
  const staticPaths = [
    '/', '/shop/', '/brands/', '/blog/', '/guides/', '/about/', '/contact/',
    '/faq/', '/shipping/', '/returns/', '/privacy/', '/terms/', '/parts-accessories/',
  ]
  // DISCONTINUED slugs are deliberately absent — they 301 to their successor.
  const entries = [
    ...staticPaths.map((p) => ({ url: url(p), lastModified: now, priority: p === '/' ? 1 : 0.7 })),
    ...CATEGORIES.map((c) => ({ url: url(`/shop/${c.slug}/`), lastModified: now, priority: 0.8 })),
    ...BRANDS.map((b) => ({ url: url(`/brands/${b.slug}/`), lastModified: now, priority: 0.6 })),
    ...PRODUCTS.map((p) => ({ url: url(`/product/${p.slug}/`), lastModified: now, priority: 0.8 })),
    ...POSTS.map((p) => ({ url: url(`/blog/${p.slug}/`), lastModified: p.date, priority: 0.6 })),
    ...GUIDES.map((g) => ({ url: url(`/guides/${g.slug}/`), lastModified: now, priority: 0.6 })),
    ...COMPARISONS.map((c) => ({ url: url(`/compare/${c.slug}/`), lastModified: now, priority: 0.6 })),
    ...ACCESSORY_CATEGORIES.map((a) => ({ url: url(`/parts-accessories/${a.slug}/`), lastModified: now, priority: 0.7 })),
    ...PARTS.map((p) => ({ url: url(`/parts/${p.slug}/`), lastModified: now, priority: 0.6 })),
  ]
  return entries
}
