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
        <table className="admin-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Type</th>
              <th>Message</th>
              <th>Status</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {enquiries.map((e) => (
              <tr key={e.id}>
                <td className="mono">{e.id}</td>
                <td>{e.name}</td>
                <td>{e.email}</td>
                <td>{e.type}</td>
                <td style={{ maxWidth: 220, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{e.message}</td>
                <td><span className={`status-badge status-${e.status}`}>{e.status}</span></td>
                <td style={{ color: '#888' }}>{e.createdAt ? new Date(e.createdAt).toLocaleDateString() : '—'}</td>
                <td>
                  <div className="action-row">
                    <a href={`/admin/reply-enquiry/?id=${encodeURIComponent(e.id)}`} className="btn-sm">Reply</a>
                    <button onClick={() => handleDelete(e.id)} className="btn-danger">Delete</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}
