import Link from 'next/link'
import { POSTS } from '@/config/site'
import Breadcrumbs from '@/components/Breadcrumbs'
import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'Electric Dirt Bike Blog — Reviews, Comparisons & News',
  description: 'Electric dirt bike reviews, brand comparisons, US legal updates and ownership tips from VoltTrack — Sur-Ron, Talaria, Stark, KTM and more.',
  path: '/blog/',
})

export default function BlogPage() {
  const posts = [...POSTS].sort((a, b) => (b.date || '').localeCompare(a.date || ''))
  return (
    <>
      <Breadcrumbs items={[{ name: 'Blog', href: '/blog/' }]} />
      <section className="section" style={{ paddingTop: 8 }}>
        <div className="container">
          <h1>Electric Dirt Bike News, Reviews &amp; Riding Guides</h1>
          <p className="lead">Reviews, brand comparisons, legal updates and ownership tips for US electric dirt bike riders.</p>
          <div className="grid cols-3" style={{ marginTop: 20 }}>
            {posts.map((p) => (
              <Link key={p.slug} href={`/blog/${p.slug}/`} className="card" style={{ color: 'inherit' }}>
                <div className="card-body">
                  <span className="muted" style={{ fontSize: '.8rem' }}>{p.date}</span>
                  <h3>{p.title}</h3>
                  <p className="muted" style={{ fontSize: '.9rem' }}>{p.excerpt}</p>
                  <span className="price" style={{ fontSize: '.95rem', color: 'var(--brand)' }}>Read more →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
