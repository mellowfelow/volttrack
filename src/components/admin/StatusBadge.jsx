const ORDER_LABELS = {
  pending: 'Pending',
  'payment-sent': 'Details sent',
  'payment-confirmed': 'Paid — verify',
}

export function OrderStatusBadge({ status }) {
  const s = status || 'pending'
  return <span className={`status-badge status-${s}`}>{ORDER_LABELS[s] || s}</span>
}

const ENQUIRY_LABELS = { new: 'New', replied: 'Replied' }

export function EnquiryStatusBadge({ status }) {
  const s = status || 'new'
  return <span className={`status-badge status-${s}`}>{ENQUIRY_LABELS[s] || s}</span>
}
