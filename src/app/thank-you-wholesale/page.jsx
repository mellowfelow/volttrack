import ThankYou from '@/components/ThankYou'
import { buildMetadata } from '@/lib/seo'

export const metadata = {
  ...buildMetadata({ title: 'Wholesale Enquiry Received', description: 'Your wholesale enquiry has been received.', path: '/thank-you-wholesale/' }),
  robots: { index: false, follow: true },
}

export default function Page() {
  return (
    <ThankYou
      heading="Wholesale enquiry received"
      body="Thanks for your interest in wholesale. We’ll review your enquiry and get back to you with pricing and next steps."
    />
  )
}
