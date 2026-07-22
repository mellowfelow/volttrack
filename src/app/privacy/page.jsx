import Breadcrumbs from '@/components/Breadcrumbs'
import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'Privacy Policy',
  description: 'How VoltTrack collects, uses and protects your personal information.',
  path: '/privacy/',
})

export default function PrivacyPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: 'Privacy', href: '/privacy/' }]} />
      <section className="section" style={{ paddingTop: 8 }}>
        <div className="container prose">
          <h1>Privacy Policy</h1>
          <p>We respect your privacy. This policy explains what we collect and how we use it.</p>
          <h2>What we collect</h2>
          <p>When you contact us or place an order we collect the details you provide — such as your name, email and message — solely to respond and fulfill your request.</p>
          <h2>How we use it</h2>
          <p>We use your information to answer enquiries, process orders and provide aftercare. We do not sell your personal information.</p>
          <h2>Cookies</h2>
          <p>We use minimal cookies to run the site and understand usage. You can control cookies through your browser settings.</p>
          <h2>Contact</h2>
          <p>For any privacy question, <a href="/contact/">contact us</a>.</p>
        </div>
      </section>
    </>
  )
}
