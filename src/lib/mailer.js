// nodemailer lazy singleton. Never throws. Returns {sent:false,reason:'not-configured'}
// when EMAIL_SERVER_* env vars are absent, so API routes can respond gracefully
// and forms still redirect to the thank-you page.
import { SITE } from '@/config/site'

let transporter = null

function getTransporter() {
  if (transporter) return transporter
  const host = process.env.EMAIL_SERVER_HOST
  if (!host) return null
  // Lazy import so the dependency is only loaded when actually sending.
  // eslint-disable-next-line global-require
  const nodemailer = require('nodemailer')
  transporter = nodemailer.createTransport({
    host,
    port: Number(process.env.EMAIL_SERVER_PORT || 465),
    secure: String(process.env.EMAIL_SERVER_SECURE || 'true') === 'true',
    auth: {
      user: process.env.EMAIL_SERVER_USER,
      pass: process.env.EMAIL_SERVER_PASSWORD,
    },
  })
  return transporter
}

export function isMailConfigured() {
  return !!process.env.EMAIL_SERVER_HOST
}

export async function sendMail({ to, subject, html, text, replyTo }) {
  const tx = getTransporter()
  if (!tx) return { sent: false, reason: 'not-configured' }
  const from = process.env.EMAIL_FROM || SITE.reply.channels.email
  try {
    await tx.sendMail({ from, to, subject, html, text, replyTo })
    return { sent: true }
  } catch (e) {
    // Never log credentials; surface only a generic error.
    console.error('[mailer] send failed:', e && e.message)
    return { sent: false, reason: 'send-failed' }
  }
}
