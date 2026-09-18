'use client'
import { useState } from 'react'
import { useAdminPasscode } from '@/lib/useAdminPasscode'

export default function PasscodeGate({ children }) {
  const { status, error, verify, logout } = useAdminPasscode()
  const [input, setInput] = useState('')

  if (status === 'checking') {
    return <div style={{ padding: 40, textAlign: 'center', color: '#888' }}>Verifying…</div>
  }

  if (status === 'locked') {
    return (
      <div style={{ maxWidth: 360, margin: '80px auto', padding: 24 }}>
        <h1 style={{ fontSize: '1.4rem', marginBottom: 16 }}>Admin Dashboard</h1>
        <form onSubmit={(e) => { e.preventDefault(); verify(input) }}>
          <label htmlFor="passcode" style={{ display: 'block', marginBottom: 6, fontWeight: 600 }}>Passcode</label>
          <input
            id="passcode"
            type="password"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            autoFocus
            required
            style={{ width: '100%', padding: '10px 12px', fontSize: 16, borderRadius: 8, border: '1px solid #ccc' }}
          />
          {error ? <p style={{ color: '#b91c1c', marginTop: 8, fontSize: 14 }}>{error}</p> : null}
          <button type="submit" style={{ marginTop: 12, width: '100%', padding: '10px 0', fontSize: 15, fontWeight: 700, borderRadius: 8, border: 'none', background: '#1d4ed8', color: '#fff', cursor: 'pointer' }}>
            Unlock
          </button>
        </form>
      </div>
    )
  }

  return (
    <div>
      <nav style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '12px 24px', borderBottom: '1px solid #e5e5e5', background: '#fafafa' }}>
        <strong style={{ fontSize: 15 }}>VoltTrack Admin</strong>
        <a href="/admin/" style={{ fontSize: 14 }}>Dashboard</a>
        <a href="/admin/orders/" style={{ fontSize: 14 }}>Orders</a>
        <a href="/admin/enquiries/" style={{ fontSize: 14 }}>Enquiries</a>
        <span style={{ flex: 1 }} />
        <button onClick={logout} style={{ fontSize: 13, color: '#666', background: 'none', border: 'none', cursor: 'pointer' }}>Logout</button>
      </nav>
      <div style={{ padding: 24 }}>{children}</div>
    </div>
  )
}
