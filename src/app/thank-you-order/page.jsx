import OrderThankYou from '@/components/OrderThankYou'
import { buildMetadata } from '@/lib/seo'

export const metadata = {
  ...buildMetadata({ title: 'Order Received', description: 'Your order enquiry has been received.', path: '/thank-you-order/' }),
  robots: { index: false, follow: true },
}

export default function Page() {
  return <OrderThankYou />
}
