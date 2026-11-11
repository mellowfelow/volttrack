'use client'
import '@/app/order/order.css'
import { CRYPTO_WALLETS } from '@/config/site'
import { CRYPTO_NETWORK_WARNING } from '@/lib/cryptoPayment'
import CopyField from '@/components/CopyField'

// The receiving wallets, readable before an order is placed. Addresses come only from
// CRYPTO_WALLETS (src/config/site.js) — never typed in here.
export default function CryptoWallets() {
  return (
    <div className="crypto-wallets">
      <div className="pay-fields">
        {CRYPTO_WALLETS.map((w) => (
          <CopyField key={w.id} label={w.label} value={w.address} />
        ))}
      </div>
      <p className="form-note" style={{ marginTop: 8 }}>{CRYPTO_NETWORK_WARNING}</p>
    </div>
  )
}
