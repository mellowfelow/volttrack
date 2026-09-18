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

  if (loading) return <p>Loading…</p>

  return (
    <div>
      <h1 style={{ fontSize: '1.4rem', marginBottom: 16 }}>Enquiries</h1>
      {enquiries.length === 0 ? <p style={{ color: '#888' }}>No enquiries yet.</p> : (
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
          <thead>
            <tr style={{ borderBottom: '2px solid #e5e5e5', textAlign: 'left' }}>
              <th style={{ padding: '8px 12px' }}>ID</th>
              <th style={{ padding: '8px 12px' }}>Name</th>
              <th style={{ padding: '8px 12px' }}>Email</th>
              <th style={{ padding: '8px 12px' }}>Type</th>
              <th style={{ padding: '8px 12px' }}>Message</th>
              <th style={{ padding: '8px 12px' }}>Status</th>
              <th style={{ padding: '8px 12px' }}>Date</th>
              <th style={{ padding: '8px 12px' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {enquiries.map((e) => (
              <tr key={e.id} style={{ borderBottom: '1px solid #f0f0f0' }}>
                <td style={{ padding: '8px 12px', fontWeight: 600 }}>{e.id}</td>
                <td style={{ padding: '8px 12px' }}>{e.name}</td>
                <td style={{ padding: '8px 12px' }}>{e.email}</td>
                <td style={{ padding: '8px 12px' }}>{e.type}</td>
                <td style={{ padding: '8px 12px', maxWidth: 200, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{e.message}</td>
                <td style={{ padding: '8px 12px' }}>
                  <span style={{ padding: '2px 8px', borderRadius: 4, fontSize: 12, fontWeight: 600, background: e.status === 'new' ? '#dbeafe' : '#d1fae5', color: e.status === 'new' ? '#1e40af' : '#065f46' }}>{e.status}</span>
                </td>
                <td style={{ padding: '8px 12px', color: '#888' }}>{e.createdAt ? new Date(e.createdAt).toLocaleDateString() : '—'}</td>
                <td style={{ padding: '8px 12px' }}>
                  <a href={`/admin/reply-enquiry/?id=${encodeURIComponent(e.id)}`} style={{ fontSize: 13, marginRight: 8 }}>Reply</a>
                  <button onClick={() => handleDelete(e.id)} style={{ fontSize: 13, color: '#b91c1c', background: 'none', border: 'none', cursor: 'pointer' }}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}
