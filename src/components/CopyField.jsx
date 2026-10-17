'use client'
import { useRef, useState } from 'react'
import { copyText } from '@/lib/clipboard'
import { CopyIcon, CheckIcon } from '@/components/admin/icons'

// One payment-detail row with its own tap-to-copy button. Email clients strip
// all JavaScript, so a real copy button can only live on a web page — which is
// why the payment email links to /order/payment-details/ instead.
export default function CopyField({ label, value }) {
  const [state, setState] = useState('idle') // idle | copied | failed
  const timer = useRef(null)

  async function copy() {
    const ok = await copyText(value)
    setState(ok ? 'copied' : 'failed')
    clearTimeout(timer.current)
    timer.current = setTimeout(() => setState('idle'), 2200)
  }

  return (
    <button type="button" onClick={copy} className={`copy-field${state === 'copied' ? ' is-copied' : ''}`} aria-label={`Copy ${label}`}>
      <span className="copy-field-main">
        <span className="copy-field-label">{label}</span>
        <span className="copy-field-value">{value}</span>
      </span>
      <span className="copy-field-action" aria-live="polite">
        {state === 'copied' ? <><CheckIcon /> Copied</> : state === 'failed' ? 'Select & copy' : <><CopyIcon /> Copy</>}
      </span>
    </button>
  )
}
