'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useParams, useRouter } from 'next/navigation'
import { useAdminContextPasscode } from '@/components/admin/AdminPasscodeContext'
import { EnquiryStatusBadge } from '@/components/admin/StatusBadge'
import { ArrowLeftIcon } from '@/components/admin/icons'

const labelStyle = { fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em', color: '#888', marginBottom: 8 }

export default function EnquiryDetailPage() {
  const passcode = useAdminContextPasscode()
  const { id } = useParams()
  const router = useRouter()
  const [enquiry, setEnquiry] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!passcode || !id) { setLoading(false); return }
    fetch(`/api/admin/enquiries/${encodeURIComponent(id)}`, { headers: { 'X-Admin-Passcode': passcode } })
      .then((r) => r.json())
      .then((d) => setEnquiry(d.enquiry || null))
      .catch(() => {})
      .finally(() => setLoading(false))
  }, [passcode, id])

  async function handleDelete() {
    if (!confirm(`Delete enquiry ${id}? This cannot be undone.`)) return
    await fetch(`/api/admin/enquiries/${encodeURIComponent(id)}`, { method: 'DELETE', headers: { 'X-Admin-Passcode': passcode } })
    router.push('/admin/enquiries/')
  }

  if (loading) return <p style={{ padding: 24, color: '#888' }}>Loading enquiry…</p>
  if (!enquiry) return (
    <div className="empty-state">
      <p>Enquiry not found.</p>
      <Link href="/admin/enquiries/" className="btn-sm" style={{ marginTop: 12, display: 'inline-block' }}>Back to enquiries</Link>
    </div>
  )

  const created = enquiry.createdAt ? new Date(enquiry.createdAt) : null

  return (
    <div style={{ maxWidth: 720 }}>
      <Link href="/admin/enquiries/" className="back-link"><ArrowLeftIcon /> All enquiries</Link>

      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12, marginBottom: 24, flexWrap: 'wrap' }}>
        <div>
          <h1 className="admin-page-title" style={{ marginBottom: 4 }}>Enquiry {enquiry.id}</h1>
          <p className="detail-meta">
            {created ? created.toLocaleDateString('en-US', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' }) : '—'}
            {' · '}
            <EnquiryStatusBadge status={enquiry.status} />
          </p>
        </div>
        <button onClick={handleDelete} className="btn-danger" style={{ fontSize: 14 }}>Delete enquiry</button>
      </div>

      <div className="detail-grid">
        <div className="detail-card">
          <div style={labelStyle}>Contact</div>
          <div style={{ fontWeight: 600, marginBottom: 4 }}>{enquiry.name}</div>
          <div style={{ marginBottom: 4 }}>{enquiry.email}</div>
          {enquiry.phone ? <div>{enquiry.phone}</div> : null}
        </div>
        <div className="detail-card">
          <div style={labelStyle}>Details</div>
          <div style={{ fontWeight: 600, marginBottom: 4 }}>{enquiry.type || 'General'}</div>
          {enquiry.subject ? <div style={{ color: '#666' }}>{enquiry.subject}</div> : null}
        </div>
      </div>

      <h2 className="section-title">Message</h2>
      <div className="detail-card">{enquiry.message}</div>

      <div className="action-row" style={{ marginTop: 24, gap: 12, flexWrap: 'wrap' }}>
        <Link href={`/admin/reply-enquiry/?id=${encodeURIComponent(enquiry.id)}`} className="btn-primary">
          {enquiry.status === 'replied' ? 'Send another reply' : 'Reply'}
        </Link>
        <Link href="/admin/enquiries/" className="btn-sm">Back to enquiries</Link>
      </div>
    </div>
  )
}
