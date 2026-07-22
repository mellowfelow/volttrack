import Breadcrumbs from '@/components/Breadcrumbs'
import { SITE } from '@/config/site'
import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'Shipping Information',
  description: 'VoltTrack ships electric dirt bikes fast across the Lower 48 US states. Learn about delivery, timing, freight and what to expect.',
  path: '/shipping/',
})

export default function ShippingPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: 'Shipping', href: '/shipping/' }]} />
      <section className="section" style={{ paddingTop: 8 }}>
        <div className="container prose">
          <h1>Shipping Information</h1>
          <p className="lead">{SITE.freeShippingText}.</p>
          <h2>Where we ship</h2>
          <p>VoltTrack ships to the Lower 48 US states. We do not currently ship to Alaska, Hawaii or internationally. Contact us for special arrangements.</p>
          <h2>Delivery timing</h2>
          <p>Most in-stock bikes ship within a few business days. Larger machines ship by freight and delivery timing depends on your location. We&rsquo;ll confirm an estimate when you order.</p>
          <h2>Freight &amp; inspection</h2>
          <p>Bikes are shipped securely crated. Inspect your delivery on arrival and report any transit damage immediately so we can help resolve it with the carrier.</p>
          <p>Questions? <a href="/contact/">Contact us</a> — support {SITE.supportHours}.</p>
        </div>
      </section>
    </>
  )
}
