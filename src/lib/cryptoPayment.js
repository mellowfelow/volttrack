// Crypto checkout helpers shared by the browser (success panel) and the server
// (order route + emails). Wallet addresses live in CRYPTO_WALLETS in site.js only.
import { SITE, CRYPTO_WALLETS } from '@/config/site'

// True when the chosen checkout method (SITE.paymentMethods id) is the crypto one.
export function isCryptoMethod(methodId) {
  const m = SITE.paymentMethods.find((x) => x.id === methodId)
  return !!(m && m.crypto)
}

// {label, value} rows — the same shape parsePaymentDetail produces — so the email
// card, the tap-to-copy payment page and the admin order view all render them.
export function cryptoPaymentFields() {
  return CRYPTO_WALLETS.map((w) => ({ label: w.label, value: w.address }))
}

// Funds sent on the wrong network are unrecoverable, so this line travels with every
// place the addresses are shown.
export const CRYPTO_NETWORK_WARNING =
  'Send each coin only to its own address and on its own network — Bitcoin to the Bitcoin address, USDT only on the network named on the address you use. Funds sent to the wrong network are lost.'

// Pay-in-4 orders only owe the first instalment up front.
export function cryptoOpening(dueNow, payIn4, fmt) {
  return `Send ${fmt(dueNow)} worth of Bitcoin or USDT${payIn4 ? ' (your first Pay in 4 instalment)' : ''} to the matching address below, at your wallet’s current rate. Choose one coin.`
}

// The network warning leads the closing so it reaches the email and the public
// payment-details page as well as the checkout panel.
export const CRYPTO_CLOSING =
  `${CRYPTO_NETWORK_WARNING} Once sent, upload a screenshot (or the transaction hash) so we can verify the payment and dispatch your order.`

// Stored on the order at checkout so /order/payment-details/ works immediately.
export function cryptoPaymentDetails(dueNow, payIn4, fmt) {
  return {
    methodId: 'crypto',
    fields: cryptoPaymentFields(),
    opening: cryptoOpening(dueNow, payIn4, fmt),
    closing: CRYPTO_CLOSING,
    sentAt: new Date().toISOString(),
    auto: true, // shown at checkout, not composed by an admin
  }
}
