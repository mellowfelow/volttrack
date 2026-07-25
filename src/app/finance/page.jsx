import Link from 'next/link'
import { SITE } from '@/config/site'
import Breadcrumbs from '@/components/Breadcrumbs'
import FaqAccordion from '@/components/FaqAccordion'
import { buildMetadata, JsonLd, url } from '@/lib/seo'

const FAQS = [
  { q: 'Do you offer financing on electric dirt bikes?', a: 'Yes. VoltTrack offers Pay-in-4 financing on eligible bikes, letting you split the cost into four instalments. Availability depends on the product and approval — contact us and we will confirm what applies to the bike you want.' },
  { q: 'What payment methods does VoltTrack accept?', a: 'We accept credit card, bank / wire transfer, Apple Pay, Cash App, Chime, Zelle and cryptocurrency (Bitcoin and Tether USDT). Pay-in-4 financing can be applied on top of these on eligible bikes. Paying with crypto saves 10%, applied automatically at checkout.' },
  { q: 'Is a credit check required for Pay-in-4?', a: 'Financing is subject to approval, and terms depend on the provider and your circumstances. We will explain exactly what is involved for your order before anything is finalised — there are no surprises, and you are never committed until you confirm.' },
]

export const metadata = buildMetadata({
  title: 'Electric Dirt Bike Financing — Pay in 4',
  description: 'Finance your electric dirt bike with VoltTrack. Pay-in-4 on eligible bikes, plus card, bank/wire, Apple Pay, Cash App, Chime, Zelle and crypto (save 10%).',
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
            however suits you — card, bank / wire transfer, Apple Pay, Cash App, Chime, Zelle or crypto.
          </p>

          <h2>Pay in 4 — interest-free instalments</h2>
          <p>
            {SITE.payIn4Detail} You pay the <strong>first of four instalments as soon as you order,
            which confirms and reserves your bike</strong>, then the remaining three instalments are
            spread over time — with <strong>zero interest</strong>. Choose Pay in 4 at checkout
            alongside any payment method above.
          </p>
          <p>
            Financing availability depends on the product and approval, and we will confirm exactly
            what applies to your chosen bike before you commit — you are never locked in until you say so.
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
