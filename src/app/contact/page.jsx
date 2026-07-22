import { SITE } from '@/config/site'
import Breadcrumbs from '@/components/Breadcrumbs'
import WebForm from '@/components/WebForm'
import { buildMetadata, url, JsonLd } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'Contact VoltTrack',
  description: 'Contact VoltTrack for honest electric dirt bike advice, orders, financing questions or aftercare. US support Mon–Sat 9am–6pm ET.',
  path: '/contact/',
})

export default function ContactPage() {
  const ld = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact VoltTrack',
    url: url('/contact/'),
  }
  return (
    <>
      <Breadcrumbs items={[{ name: 'Contact', href: '/contact/' }]} />
      <JsonLd data={ld} />
      <section className="section" style={{ paddingTop: 8 }}>
        <div className="container">
          <div className="grid cols-2" style={{ alignItems: 'start' }}>
            <div className="prose">
              <h1>Contact VoltTrack</h1>
              <p className="lead">
                Tell us your rider, terrain and budget and we&rsquo;ll recommend the right bike —
                honestly. Questions about orders, financing or aftercare are welcome too.
              </p>
              <p>
                Email us any time and we&rsquo;ll reply during support hours ({SITE.supportHours}).
                Prefer to chat? Use the chat button in the corner.
              </p>
            </div>
            <div className="card"><div className="card-body">
              <WebForm subject="VoltTrack — Contact / Enquiry" thankYou="/thank-you-contact/">
                <div className="field">
                  <label htmlFor="name">Name</label>
                  <input id="name" name="name" required autoComplete="name" />
                </div>
                <div className="field">
                  <label htmlFor="email">Email</label>
                  <input id="email" name="email" type="email" required autoComplete="email" />
                </div>
                <div className="field">
                  <label htmlFor="interest">Which bike or category?</label>
                  <input id="interest" name="interest" placeholder="e.g. Sur-Ron Light Bee X, kids bikes…" />
                </div>
                <div className="field">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows={5} required></textarea>
                </div>
              </WebForm>
            </div></div>
          </div>
        </div>
      </section>
    </>
  )
}
