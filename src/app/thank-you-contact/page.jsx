import ThankYou from '@/components/ThankYou'
import { buildMetadata } from '@/lib/seo'

export const metadata = {
  ...buildMetadata({ title: 'Thank You', description: 'Your message has been received.', path: '/thank-you-contact/' }),
  robots: { index: false, follow: true },
}

export default function Page() {
  return (
    <ThankYou
      heading="Thanks — we’ve got your message"
      body="We’ll get back to you during support hours (Mon–Sat 9am–6pm ET) with honest advice. Prefer to talk now? Use the chat button in the corner."
    />
  )
}
