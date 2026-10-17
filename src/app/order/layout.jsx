import './order.css'

// Customer-only pages reached from the payment-details email — never indexed.
export const metadata = {
  title: 'Your order',
  robots: { index: false, follow: false },
}

export default function OrderLayout({ children }) {
  return children
}
