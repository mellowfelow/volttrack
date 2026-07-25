import CheckoutClient from './CheckoutClient'
import { buildMetadata } from '@/lib/seo'

export const metadata = {
  ...buildMetadata({
    title: 'Checkout',
    description: 'Complete your VoltTrack electric dirt bike order. Pay by card, bank/wire, Apple Pay, Cash App, Chime, Zelle or crypto (10% off), plus financing.',
    path: '/checkout/',
  }),
  robots: { index: false, follow: true },
}

export default function CheckoutPage() {
  return <CheckoutClient />
}
