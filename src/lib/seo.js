import { SITE } from '@/config/site'

export const base = `https://${SITE.domain}`
export const url = (path = '/') => `${base}${path.startsWith('/') ? '' : '/'}${path}`

// entity-encode an email so it never appears as plaintext (incl. JSON-LD)
export const encEmail = (e) =>
  e.replace(/[A-Za-z@.]/g, (c) => `&#${c.charCodeAt(0)};`)

export function buildMetadata({ title, description, path = '/', type = 'website', image, robots }) {
  const canonical = url(path)
  const desc = (description || SITE.description).slice(0, 158)
  // Next's typed metadata only accepts a subset of OG types; map product→website.
  const ogType = type === 'product' ? 'website' : type
  const meta = {
    title,
    description: desc,
    alternates: { canonical },
    openGraph: {
      type: ogType,
      siteName: SITE.name,
      title,
      description: desc,
      url: canonical,
      images: image ? [image] : [url('/images/placeholder-bike.svg')],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: desc,
      images: [image || url('/images/placeholder-bike.svg')],
    },
  }
  if (robots) meta.robots = robots
  if (SITE.gscVerification) meta.verification = { google: SITE.gscVerification }
  return meta
}

export function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
