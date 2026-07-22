import { FAQS } from '@/config/site'
import Breadcrumbs from '@/components/Breadcrumbs'
import { buildMetadata, JsonLd } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'Electric Dirt Bike FAQ',
  description: 'Answers to common questions about buying electric dirt bikes from VoltTrack — street legality, shipping, financing, payment and choosing the right bike.',
  path: '/faq/',
})

export default function FaqPage() {
  const ld = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }
  return (
    <>
      <Breadcrumbs items={[{ name: 'FAQ', href: '/faq/' }]} />
      <JsonLd data={ld} />
      <section className="section" style={{ paddingTop: 8 }}>
        <div className="container prose">
          <h1>Frequently Asked Questions</h1>
          {FAQS.map((f) => (
            <div key={f.q} style={{ marginBottom: 20 }}>
              <h2 style={{ fontSize: '1.2rem' }}>{f.q}</h2>
              <p className="muted">{f.a}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
