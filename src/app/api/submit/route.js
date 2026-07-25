// Vercel-hosted form handler. Contact form and checkout both POST here (FormData).
// Emails the submission to FORMS.orderEmail via the Resend REST API. Set the
// RESEND_API_KEY env var in Vercel to activate delivery; until then submissions
// are accepted (so the UX never dead-ends) but logged, not emailed.
import { NextResponse } from 'next/server'
import { FORMS } from '@/config/site'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function POST(req) {
  // Accept multipart/form-data (our forms) or JSON.
  let data = {}
  try {
    const fd = await req.formData()
    for (const [k, v] of fd.entries()) if (typeof v === 'string') data[k] = v
  } catch {
    try { data = await req.json() } catch { data = {} }
  }

  // Honeypot: silently accept bot submissions without emailing.
  if (data.botcheck) return NextResponse.json({ ok: true, delivered: false })

  const subject = data.subject || 'VoltTrack — Website submission'
  const replyTo = data.replyto || data.email || ''
  const body = Object.entries(data)
    .filter(([k]) => !['botcheck', 'from_name', 'subject', 'replyto', 'access_key'].includes(k))
    .map(([k, v]) => `${k}: ${v}`)
    .join('\n')

  const key = process.env.RESEND_API_KEY
  if (!key) {
    console.warn('[forms] RESEND_API_KEY not set — submission accepted but not emailed:', subject)
    return NextResponse.json({ ok: true, delivered: false })
  }

  try {
    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: FORMS.resendFrom,
        to: [FORMS.orderEmail],
        ...(replyTo ? { reply_to: replyTo } : {}),
        subject,
        text: body,
      }),
    })
    if (!r.ok) {
      console.error('[forms] resend error', r.status, await r.text())
      return NextResponse.json({ ok: false, error: 'send_failed' }, { status: 502 })
    }
    return NextResponse.json({ ok: true, delivered: true })
  } catch (e) {
    console.error('[forms] resend exception', e)
    return NextResponse.json({ ok: false, error: 'exception' }, { status: 502 })
  }
}
