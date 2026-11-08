'use client'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { SITE, CRYPTO_WALLETS } from '@/config/site'
import { copyText } from '@/lib/clipboard'
import { CRYPTO_NETWORK_WARNING } from '@/lib/cryptoPayment'
import { CopyIcon, CheckIcon } from '@/components/admin/icons'

// Shown the moment a crypto order is placed, so the customer can pay straight
// away: pick the coin/network, scan the QR or tap-copy the address, then upload
// proof. `amount` is the USD figure due now (full total, or the first Pay in 4
// instalment). The QR carries the address only — a BIP21 amount would have to be
// in BTC, and this site has no live price feed to convert USD correctly.
export default function CryptoPaymentPanel({ amount, orderNumber, payIn4 = false }) {
  const [walletId, setWalletId] = useState(CRYPTO_WALLETS[0].id)
  const [qr, setQr] = useState('')
  const [copied, setCopied] = useState(false)
  const timer = useRef(null)

  const wallet = CRYPTO_WALLETS.find((w) => w.id === walletId) || CRYPTO_WALLETS[0]

  useEffect(() => {
    let cancelled = false
    setQr('')
    // qrcode is loaded on demand so it never weighs down the rest of the site.
    import('qrcode')
      .then((m) => (m.default || m).toDataURL(wallet.address, { width: 240, margin: 1, color: { dark: '#0f172a', light: '#ffffff' } }))
      .then((url) => { if (!cancelled) setQr(url) })
      .catch(() => { if (!cancelled) setQr('') })
    return () => { cancelled = true }
  }, [wallet.address])

  useEffect(() => () => clearTimeout(timer.current), [])

  async function copy() {
    const ok = await copyText(wallet.address)
    setCopied(ok)
    clearTimeout(timer.current)
    timer.current = setTimeout(() => setCopied(false), 2200)
  }

  const money = Number(amount || 0).toLocaleString('en-US')

  return (
    <div className="cx-panel">
      <h2 className="cx-title">Pay now with crypto</h2>
      <p className="cx-amount">
        <span>{payIn4 ? 'First instalment due now' : 'Amount due'}</span>
        <strong>{SITE.currencySymbol}{money} {SITE.currency} equivalent</strong>
      </p>

      <div className="cx-choices" role="group" aria-label="Choose a coin and network">
        {CRYPTO_WALLETS.map((w) => (
          <button
            key={w.id}
            type="button"
            aria-pressed={w.id === walletId}
            className={`cx-choice${w.id === walletId ? ' is-active' : ''}`}
            onClick={() => { setWalletId(w.id); setCopied(false) }}
          >
            <span className="cx-choice-coin">{w.name}</span>
            <span className="cx-choice-net">{w.network === w.name ? w.coin : w.network}</span>
          </button>
        ))}
      </div>

      <div className="cx-body">
        <div className="cx-qr">
          {qr
            ? <img src={qr} width={160} height={160} alt={`${wallet.label} deposit address QR code`} />
            : <div className="cx-qr-wait" aria-hidden="true" />}
        </div>
        <div className="cx-addr">
          <span className="cx-label">{wallet.label} address</span>
          {/* No aria-label: the accessible name must include the address itself. */}
          <button type="button" className={`cx-copy${copied ? ' is-copied' : ''}`} onClick={copy}>
            <code>{wallet.address}</code>
            <span className="cx-copy-action" aria-live="polite">
              {copied ? <><CheckIcon /> Copied</> : <><CopyIcon /> Copy</>}
            </span>
          </button>
          <p className="cx-note">Send the equivalent of {SITE.currencySymbol}{money} in {wallet.name} at your wallet’s current rate.</p>
        </div>
      </div>

      <p className="cx-warn" role="note"><strong>Check the network.</strong> {CRYPTO_NETWORK_WARNING}</p>

      {orderNumber ? (
        <Link className="btn cx-paid" href={`/order/confirm-payment/?id=${encodeURIComponent(orderNumber)}`}>
          I’ve paid — upload confirmation
        </Link>
      ) : null}
    </div>
  )
}
