import ThankYou from '@/components/ThankYou'
import { buildMetadata } from '@/lib/seo'

export const metadata = {
  ...buildMetadata({ title: 'Order Received', description: 'Your order enquiry has been received.', path: '/thank-you-order/' }),
  robots: { index: false, follow: true },
}

export default function Page() {
  return (
    <ThankYou
      heading="Order enquiry received"
      body="Thanks for your order enquiry. We’ll confirm stock, shipping and the best payment method for you and follow up shortly."
    />
  )
}
