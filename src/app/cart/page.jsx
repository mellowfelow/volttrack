import CartClient from './CartClient'
import { buildMetadata } from '@/lib/seo'

export const metadata = {
  ...buildMetadata({
    title: 'Cart',
    description: 'Review the electric dirt bikes in your VoltTrack cart and complete your order with expert help.',
    path: '/cart/',
  }),
  robots: { index: false, follow: true },
}

export default function CartPage() {
  return <CartClient />
}
