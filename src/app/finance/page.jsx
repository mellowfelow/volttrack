import Link from 'next/link'
import { SITE } from '@/config/site'
import Breadcrumbs from '@/components/Breadcrumbs'
import FaqAccordion from '@/components/FaqAccordion'
import { buildMetadata, JsonLd, url } from '@/lib/seo'

const FAQS = [
  { q: 'Do you offer financing on electric dirt bikes?', a: 'Yes. VoltTrack offers Pay-in-4 financing on eligible bikes, letting you split the cost into four instalments. Availability depends on the product and approval — contact us and we will confirm what applies to the bike you want.' },
  { q: 'What payment methods does VoltTrack accept?', a: 'We accept bank transfer, credit card and cryptocurrency (Bitcoin and Tether USDT). Pay-in-4 financing can be applied on top of these on eligible bikes. Paying with crypto saves 5%, applied at checkout.' },
  { q: 'Is a credit check required for Pay-in-4?', a: 'Financing is subject to approval, and terms depend on the provider and your circumstances. We will explain exactly what is involved for your order before anything is finalised — there are no surprises, and you are never committed until you confirm.' },
]

export const metadata = buildMetadata({
  title: 'Electric Dirt Bike Financing — Pay in 4',
  description: 'Finance your electric dirt bike with VoltTrack. Pay-in-4 on eligible bikes, plus bank transfer, credit card and crypto (save 5%). Honest terms, US dealer.',
  path: '/finance/',
})

export default function FinancePage() {
  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((f) => ({
      '@type': 'Question', name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }
  return (
    <>
      <Breadcrumbs items={[{ name: 'Financing', href: '/finance/' }]} />
      <JsonLd data={faqLd} />
      <section className="section" style={{ paddingTop: 8 }}>
        <div className="container" style={{ maxWidth: 820 }}>
          <h1>Electric Dirt Bike Financing</h1>
          <p className="lead">
            Spread the cost of your electric dirt bike with Pay-in-4 on eligible bikes, and pay
            however suits you — bank transfer, credit card or crypto.
          </p>

          <h2>Pay in 4</h2>
          <p>
            {SITE.financing}. Split an eligible bike into four instalments rather than paying the
            full amount up front. Financing availability depends on the product and approval, and we
            will confirm exactly what applies to your chosen bike before you commit.
          </p>

          <h2>Ways to pay</h2>
          <ul>
            {SITE.paymentMethods.map((m) => (
              <li key={m.id}>{m.label}{m.crypto ? ` — save ${Math.round(SITE.cryptoDiscount * 100)}% at checkout` : ''}</li>
            ))}
          </ul>
          <p className="form-note">
            Prices are estimates and may change due to import tariff conditions. We confirm final
            pricing and payment details with you before any order is processed — no card is charged
            online.
          </p>

          <h2>Financing questions</h2>
          <FaqAccordion items={FAQS} />

          <p style={{ marginTop: 24 }}>
            <Link href="/shop/" className="btn btn-lg">Shop electric dirt bikes</Link>
            {' '}
            <Link href="/contact/" className="btn btn-ghost">Ask about financing</Link>
          </p>
        </div>
      </section>
    </>
  )
}
