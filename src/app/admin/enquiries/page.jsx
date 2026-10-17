'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useAdminContextPasscode } from '@/components/admin/AdminPasscodeContext'
import { EnquiryStatusBadge } from '@/components/admin/StatusBadge'

const FILTERS = [
  { id: 'all', label: 'All', test: () => true },
  { id: 'contact', label: 'Contact', test: (e) => e.type === 'contact' },
  { id: 'wholesale', label: 'Wholesale', test: (e) => e.type === 'wholesale' },
  { id: 'new', label: 'New', test: (e) => (e.status || 'new') === 'new' },
  { id: 'replied', label: 'Replied', test: (e) => e.status === 'replied' },
]

export default function EnquiriesPage() {
  const passcode = useAdminContextPasscode()
  const [enquiries, setEnquiries] = useState([])
  const [loading, setLoading] = useState(true)
  const [failed, setFailed] = useState(false)
  const [filter, setFilter] = useState('all')

  useEffect(() => {
    if (!passcode) return
    fetch('/api/admin/enquiries', { headers: { 'X-Admin-Passcode': passcode } })
      .then((r) => r.json())
      .then((d) => setEnquiries(d.enquiries || []))
      .catch(() => setFailed(true))
      .finally(() => setLoading(false))
  }, [passcode])

  async function handleDelete(id) {
    if (!confirm(`Delete enquiry ${id}?`)) return
    await fetch(`/api/admin/enquiries/${encodeURIComponent(id)}`, { method: 'DELETE', headers: { 'X-Admin-Passcode': passcode } })
    setEnquiries((prev) => prev.filter((e) => e.id !== id))
  }

  if (loading) return <p style={{ padding: 24, color: '#888' }}>Loading enquiries…</p>

  const active = FILTERS.find((f) => f.id === filter) || FILTERS[0]
  const shown = enquiries.filter(active.test)

  return (
    <div>
      <h1 className="admin-page-title">Enquiries</h1>
      {failed ? <div className="alert alert-error">Couldn’t load enquiries — refresh and try again.</div> : null}

      {enquiries.length > 0 ? (
        <div className="filter-pills" role="group" aria-label="Filter enquiries">
          {FILTERS.map((f) => (
            <button key={f.id} type="button" onClick={() => setFilter(f.id)} className={`filter-pill${filter === f.id ? ' active' : ''}`} aria-pressed={filter === f.id}>
              {f.label} ({enquiries.filter(f.test).length})
            </button>
          ))}
        </div>
      ) : null}

      {shown.length === 0 ? (
        <div className="empty-state">
          <p>{enquiries.length === 0 ? 'No enquiries yet.' : 'No enquiries match this filter.'}</p>
        </div>
      ) : (
        <div>
          {shown.map((e) => {
            const date = e.createdAt ? new Date(e.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : '—'
            const href = `/admin/enquiries/${encodeURIComponent(e.id)}/`
            return (
              <div key={e.id} className="item-card">
                <div className="item-card-header">
                  <Link href={href} className="mono" style={{ fontSize: 13, fontWeight: 700, color: '#1d4ed8', textDecoration: 'none' }}>
                    {e.id}
                  </Link>
                  <span className="status-badge" style={{ background: '#f3f4f6', color: '#555', textTransform: 'capitalize' }}>{e.type}</span>
                  <EnquiryStatusBadge status={e.status} />
                </div>
                <div className="item-card-name">{e.name}</div>
                <div className="item-card-meta">{e.email || e.phone || 'No contact'} · {date}</div>
                {e.message && <p className="item-card-preview">{e.message}</p>}
                <div className="item-card-footer">
                  <div />
                  <div className="action-row">
                    <Link href={href} className="btn-sm">View</Link>
                    <button onClick={() => handleDelete(e.id)} className="btn-danger">Delete</button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
