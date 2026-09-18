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
      <div className="admin-gate">
        <h1>Admin</h1>
        <p className="subtitle">Enter your passcode to continue</p>
        <form onSubmit={(e) => { e.preventDefault(); verify(input) }}>
          <label htmlFor="passcode">Passcode</label>
          <input id="passcode" type="password" value={input} onChange={(e) => setInput(e.target.value)} autoFocus required placeholder="Enter passcode" />
          {error ? <p className="error">{error}</p> : null}
          <button type="submit" className="btn-primary">Unlock</button>
        </form>
      </div>
    )
  }

  return (
    <div>
      <nav className="admin-nav">
        <a href="/admin/" className="brand">VoltTrack Admin</a>
        <a href="/admin/">Dashboard</a>
        <a href="/admin/orders/">Orders</a>
        <a href="/admin/enquiries/">Enquiries</a>
        <span style={{ flex: 1 }} />
        <button onClick={logout} className="logout-btn">Sign out</button>
      </nav>
      <div className="admin-body">{children}</div>
    </div>
  )
}
