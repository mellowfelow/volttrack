import Breadcrumbs from '@/components/Breadcrumbs'
import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'Returns & Warranty',
  description: 'VoltTrack returns and warranty policy for electric dirt bikes — genuine US manufacturer warranties and a straightforward returns process.',
  path: '/returns/',
})

export default function ReturnsPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: 'Returns', href: '/returns/' }]} />
      <section className="section" style={{ paddingTop: 8 }}>
        <div className="container prose">
          <h1>Returns &amp; Warranty</h1>
          <h2>30-day returns</h2>
          <p>Unused bikes in original condition and packaging may be returned within 30 days of delivery. Return shipping and any restocking terms are confirmed at the time of return. Contact us first to start a return.</p>
          <h2>Manufacturer warranty</h2>
          <p>Every bike we sell carries a genuine US manufacturer warranty. As an authorized dealer, we help you claim warranty support directly rather than leaving you to deal with a gray-market importer.</p>
          <h2>Damaged or faulty items</h2>
          <p>If a bike arrives damaged or develops a fault, contact us right away with photos and your order details and we&rsquo;ll make it right.</p>
          <p><a href="/contact/">Contact us</a> to start a return or warranty claim.</p>
        </div>
      </section>
    </>
  )
}
