// Contact / wholesale handler. Saves the enquiry to the store (best-effort) and
// emails an admin notification. Always returns {ok:true} so the form never
// dead-ends, even before Redis/SMTP env vars are set.
import { NextResponse } from 'next/server'
import { SITE, FORMS } from '@/config/site'
import { saveEnquiry } from '@/lib/enquiryStore'
import { sendMail } from '@/lib/mailer'
import { buildEmailHtml } from '@/lib/emailTemplate'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

async function readData(req) {
  try {
    const fd = await req.formData()
    const data = {}
    for (const [k, v] of fd.entries()) if (typeof v === 'string') data[k] = v
    return data
  } catch {
    try { return await req.json() } catch { return {} }
  }
}

const titleCase = (s) => s.replace(/[_-]+/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())

function classify(data) {
  const s = `${data.subject || ''} ${data.form_type || ''}`.toLowerCase()
  if (s.includes('wholesale')) return 'wholesale'
  if (s.includes('bulk')) return 'bulk'
  return 'contact'
}

export async function POST(req) {
  const data = await readData(req)
  if (data.botcheck) return NextResponse.json({ ok: true, delivered: false })

  const type = classify(data)
  const label = type === 'wholesale' ? 'Wholesale application' : type === 'bulk' ? 'Bulk order enquiry' : 'Contact enquiry'
  const adminEmail = SITE.reply.channels.email || FORMS.contactEmail

  // Everything except plumbing fields becomes meta.
  const skip = new Set(['botcheck', 'from_name', 'subject', 'replyto', 'access_key', 'form_type', 'name', 'email', 'phone', 'message'])
  const meta = {}
  for (const [k, v] of Object.entries(data)) if (!skip.has(k) && v) meta[k] = v

  const enquiry = {
    type,
    name: data.name || '',
    email: data.email || '',
    phone: data.phone || '',
    message: data.message || '',
    meta,
  }
  let id = ''
  try { id = (await saveEnquiry(enquiry)) || '' } catch (e) { console.error('[contact] save failed:', e && e.message) }

  const dash = id ? `https://${SITE.domain}/admin/reply-enquiry/?id=${encodeURIComponent(id)}` : ''
  const metaRows = Object.entries(meta).map(([k, v]) => ({ label: titleCase(k), value: v }))

  const html = buildEmailHtml({
    title: label,
    refBadge: id || undefined,
    intro: `A new ${label.toLowerCase()} came in via ${SITE.domain}.`,
    rows: [
      { label: 'Enquiry', heading: true },
      { label: 'Name', value: enquiry.name },
      { label: 'Email', value: enquiry.email },
      { label: 'Phone', value: enquiry.phone || '—' },
      ...metaRows,
      { label: 'Message', heading: true },
      { label: 'Message', value: enquiry.message, block: true },
    ],
    ...(dash ? { cta: { label: 'Reply in Dashboard →', url: dash } } : {}),
    secondaryCta: { label: 'Reply by Email', url: `mailto:${enquiry.email}` },
  })
  try {
    await sendMail({
      to: adminEmail,
      subject: `${label} — ${enquiry.name || 'website'} — ${SITE.name}`,
      html,
      text: `${label} from ${enquiry.name} <${enquiry.email}> ${enquiry.phone}\n\n${enquiry.message}\n\n${dash}`,
      replyTo: enquiry.email || undefined,
    })
  } catch (e) { console.error('[contact] mail failed:', e && e.message) }

  return NextResponse.json({ ok: true, id })
}
