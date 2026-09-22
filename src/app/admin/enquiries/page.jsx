'use client'
import { useEffect, useState } from 'react'
import { useAdminPasscode } from '@/lib/useAdminPasscode'

export default function EnquiriesPage() {
  const { passcode } = useAdminPasscode()
  const [enquiries, setEnquiries] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!passcode) return
    fetch('/api/admin/enquiries', { headers: { 'X-Admin-Passcode': passcode } })
      .then((r) => r.json())
      .then((d) => { setEnquiries(d.enquiries || []); setLoading(false) })
      .catch(() => setLoading(false))
  }, [passcode])

  async function handleDelete(id) {
    if (!confirm(`Delete enquiry ${id}?`)) return
    await fetch(`/api/admin/enquiries/${encodeURIComponent(id)}`, { method: 'DELETE', headers: { 'X-Admin-Passcode': passcode } })
    setEnquiries((prev) => prev.filter((e) => e.id !== id))
  }

  if (loading) return <p style={{ padding: 24, color: '#888' }}>Loading enquiries…</p>

  return (
    <div>
      <h1 className="admin-page-title">Enquiries</h1>
      {enquiries.length === 0 ? (
        <div className="empty-state">
          <p>No enquiries yet.</p>
        </div>
      ) : (
        <div>
          {enquiries.map((e) => {
            const date = e.createdAt ? new Date(e.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : '—'
            return (
              <div key={e.id} className="item-card">
                <div className="item-card-header">
                  <a href={`/admin/enquiries/${encodeURIComponent(e.id)}`} className="mono" style={{ fontSize: 13, fontWeight: 700, color: '#1d4ed8', textDecoration: 'none' }}>
                    {e.id}
                  </a>
                  <span className="status-badge" style={{ background: '#f3f4f6', color: '#555', textTransform: 'capitalize' }}>{e.type}</span>
                  <span className={`status-badge status-${e.status}`}>{e.status}</span>
                </div>
                <div className="item-card-name">{e.name}</div>
                <div className="item-card-meta">{e.email || e.phone || 'No contact'} · {date}</div>
                {e.message && <p className="item-card-preview">{e.message}</p>}
                <div className="item-card-footer">
                  <div />
                  <div className="action-row">
                    <a href={`/admin/enquiries/${encodeURIComponent(e.id)}`} className="btn-sm">View</a>
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
