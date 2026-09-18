import { NextResponse } from 'next/server'
import { checkAdminPasscode } from '@/lib/adminAuth'
import { getEnquiry, markEnquiryReplied } from '@/lib/enquiryStore'
import { sendMail } from '@/lib/mailer'
import { buildEmailHtml } from '@/lib/emailTemplate'
import { SITE } from '@/config/site'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function POST(request) {
  const denied = checkAdminPasscode(request)
  if (denied) return denied

  const body = await request.json()
  const { enquiryId, message, subject } = body
  if (!enquiryId || !message) {
    return NextResponse.json({ ok: false, error: 'enquiryId and message are required' }, { status: 400 })
  }

  const enquiry = await getEnquiry(enquiryId)
  if (!enquiry) return NextResponse.json({ ok: false, error: 'not-found' }, { status: 404 })

  const html = buildEmailHtml({
    title: subject || `Re: Your enquiry — ${SITE.name}`,
    intro: `Hi ${enquiry.name || 'there'},`,
    rows: [
      { label: 'Message', value: message, block: true },
    ],
    secondaryCta: { label: 'Contact Us', url: `https://${SITE.domain}/contact/` },
  })

  const result = await sendMail({
    to: enquiry.email,
    subject: subject || `Re: Your enquiry — ${SITE.name}`,
    html,
    text: `Hi ${enquiry.name || 'there'},\n\n${message}\n\n— ${SITE.name}`,
    replyTo: SITE.reply.channels.email,
  })

  if (result.sent) {
    await markEnquiryReplied(enquiryId)
  }

  return NextResponse.json({ ok: true, sent: result.sent, reason: result.reason || null })
}
