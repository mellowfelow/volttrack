import { SITE, CATEGORIES, BRANDS, PRODUCTS, PARTS, POSTS, GUIDES, COMPARISONS, ACCESSORY_CATEGORIES } from '@/config/site'
import { url } from '@/lib/seo'

// Note: <image:image> sitemap entries need Next 15's `images` field (or a custom
// XML route). On Next 14.2 the field is silently ignored, so it's left out for now.

export const dynamic = 'force-static'

export default function sitemap() {
  // lastmod must reflect when content really changed. It used to be the build time,
  // which stamped 105 URLs with one identical timestamp on every deploy, so crawlers
  // learned to ignore it. Pages without a date of their own use SITE.catalogUpdated,
  // a date that is only bumped when catalog/page content genuinely changes.
  const catalog = SITE.catalogUpdated
  const staticPaths = [
    '/', '/shop/', '/brands/', '/blog/', '/guides/', '/about/', '/contact/',
    '/faq/', '/finance/', '/shipping/', '/returns/', '/privacy/', '/terms/', '/parts-accessories/',
    '/electric-dirt-bike-street-legal-by-state/',
  ]
  // Deliberately NOT in the sitemap:
  //  - DISCONTINUED slugs — they 301 to their successor.
  //  - Parts with no bike-specific fitment (empty compat[]) — those pages are noindex
  //    (see src/app/parts/[slug]/page.jsx), so listing them would contradict the tag.
  // Bike-specific parts ARE in the sitemap (2026-11-11): GSC showed 55 URLs stuck at
  // "Discovered – currently not indexed" while parts pages were already earning 3 of
  // the top 6 pages by clicks (E-Ride Pro battery 77 clicks), so the old exclusion
  // was holding back the pages that convert.
  const entries = [
    ...staticPaths.map((p) => ({ url: url(p), lastModified: catalog, priority: p === '/' ? 1 : 0.7 })),
    ...CATEGORIES.map((c) => ({ url: url(`/shop/${c.slug}/`), lastModified: catalog, priority: 0.8 })),
    ...BRANDS.map((b) => ({ url: url(`/brands/${b.slug}/`), lastModified: catalog, priority: 0.7 })),
    ...PRODUCTS.map((p) => ({ url: url(`/product/${p.slug}/`), lastModified: catalog, priority: 0.8 })),
    ...POSTS.map((p) => ({ url: url(`/blog/${p.slug}/`), lastModified: p.updated || p.date, priority: 0.6 })),
    ...GUIDES.map((g) => ({ url: url(`/guides/${g.slug}/`), lastModified: g.updated || g.date || catalog, priority: 0.6 })),
    ...COMPARISONS.map((c) => ({ url: url(`/compare/${c.slug}/`), lastModified: catalog, priority: 0.6 })),
    ...ACCESSORY_CATEGORIES.map((a) => ({ url: url(`/parts-accessories/${a.slug}/`), lastModified: catalog, priority: 0.6 })),
    ...PARTS.filter((p) => p.compat && p.compat.length).map((p) => ({ url: url(`/parts/${p.slug}/`), lastModified: catalog, priority: 0.5 })),
  ]
  return entries
}
