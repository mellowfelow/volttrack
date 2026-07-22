import Breadcrumbs from '@/components/Breadcrumbs'
import { SITE } from '@/config/site'
import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  title: 'Terms & Conditions',
  description: 'The terms and conditions governing use of the VoltTrack website and purchases of electric dirt bikes.',
  path: '/terms/',
})

export default function TermsPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: 'Terms', href: '/terms/' }]} />
      <section className="section" style={{ paddingTop: 8 }}>
        <div className="container prose">
          <h1>Terms &amp; Conditions</h1>
          <h2>Products &amp; pricing</h2>
          <p>All prices are in USD and are estimates that may change due to import tariff conditions and manufacturer updates. We confirm final pricing at the time of order.</p>
          <h2>Off-road use &amp; legal compliance</h2>
          <p>Most vehicles sold are for off-road, private-land use only and are not street legal without specific federal/state certification. California buyers require green-sticker / OHV registration under Vehicle Code Section 436.1. Always wear a helmet and ride responsibly. {SITE.name} accepts no liability for unlawful use.</p>
          <h2>Warranty</h2>
          <p>Bikes carry genuine US manufacturer warranties. See our <a href="/returns/">Returns &amp; Warranty</a> page.</p>
          <h2>Contact</h2>
          <p>Questions about these terms? <a href="/contact/">Contact us</a>.</p>
        </div>
      </section>
    </>
  )
}
