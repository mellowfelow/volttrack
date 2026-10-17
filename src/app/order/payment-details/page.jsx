'use client'
import { Suspense, useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { SITE } from '@/config/site'
import CopyField from '@/components/CopyField'
import { copyText } from '@/lib/clipboard'
import { CopyIcon, CheckIcon } from '@/components/admin/icons'
import { money } from '@/lib/order'

function PaymentDetailsView() {
  const params = useSearchParams()
  const orderNumber = (params.get('id') || '').trim()

  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [copiedAll, setCopiedAll] = useState(false)
  const timer = useRef(null)

  useEffect(() => {
    if (!orderNumber) {
      setLoading(false)
      setError('This link is missing your order number — please use the link from your payment-details email.')
      return
    }
    let cancelled = false
    fetch(`/api/order/payment-details/?id=${encodeURIComponent(orderNumber)}`, { cache: 'no-store' })
      .then((r) => r.json())
      .then((d) => { if (!cancelled) { if (d.ok) setData(d); else setError(d.error || 'Payment details not found.') } })
      .catch(() => { if (!cancelled) setError('Could not load your payment details — check your connection and try again.') })
      .finally(() => { if (!cancelled) setLoading(false) })
    return () => { cancelled = true }
  }, [orderNumber])

  async function copyAll() {
    const text = (data?.paymentDetails?.fields || []).map((f) => `${f.label}: ${f.value}`).join('\n')
    const ok = await copyText(text)
    setCopiedAll(ok)
    clearTimeout(timer.current)
    timer.current = setTimeout(() => setCopiedAll(false), 2200)
  }

  const email = SITE.reply.channels.email
  const fields = data?.paymentDetails?.fields || []

  return (
    <div className="pay-shell">
      <div className="pay-card">
        <span className="pay-brand">{SITE.name}</span>
        <h1>Payment details</h1>

        {loading ? <p className="pay-loading">Loading your payment details…</p> : null}
        {!loading && error ? <p className="pay-error" role="alert">{error}</p> : null}

        {!loading && data ? (
          <>
            <p className="pay-order">Order <strong>{data.orderNumber}</strong></p>
            <p className="pay-amount">{money(data.amountDue)}</p>

            {data.status === 'payment-confirmed' ? (
              <p className="pay-text" style={{ textAlign: 'center', color: '#15803d', fontWeight: 700 }}>
                We’ve received your payment confirmation — thank you. We’ll verify it and be in touch.
              </p>
            ) : null}

            {data.paymentDetails.opening ? <p className="pay-text">{data.paymentDetails.opening}</p> : null}

            <div className="pay-fields">
              {fields.map((f, i) => <CopyField key={`${f.label}-${i}`} label={f.label} value={f.value} />)}
            </div>

            <button type="button" onClick={copyAll} className="pay-btn outline">
              {copiedAll ? <><CheckIcon /> Copied all details</> : <><CopyIcon /> Copy all details</>}
            </button>

            {data.paymentDetails.closing ? <p className="pay-text" style={{ marginTop: 16 }}>{data.paymentDetails.closing}</p> : null}

            {data.terms?.length ? (
              <ul className="pay-text" style={{ paddingLeft: 18, marginBottom: 0 }}>
                {data.terms.map((t, i) => <li key={i} style={{ marginBottom: 6 }}>{t}</li>)}
              </ul>
            ) : null}

            <div className="pay-actions">
              <Link href={`/order/confirm-payment/?id=${encodeURIComponent(data.orderNumber)}`} className="pay-btn">
                I’ve paid — upload confirmation
              </Link>
            </div>
          </>
        ) : null}

        <p className="pay-note">
          Tap any row to copy it. Need help? Email <a href={`mailto:${email}`}>{email}</a>.
        </p>
      </div>
    </div>
  )
}

export default function PaymentDetailsPage() {
  return (
    <Suspense fallback={<div className="pay-shell" />}>
      <PaymentDetailsView />
    </Suspense>
  )
}
