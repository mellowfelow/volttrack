import CheckoutClient from './CheckoutClient'
import { buildMetadata } from '@/lib/seo'

export const metadata = {
  ...buildMetadata({
    title: 'Checkout',
    description: 'Complete your VoltTrack electric dirt bike order. Pay by crypto (5% off), bank transfer or financing.',
    path: '/checkout/',
  }),
  robots: { index: false, follow: true },
}

export default function CheckoutPage() {
  return <CheckoutClient />
}
