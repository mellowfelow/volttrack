'use client'
import { useState } from 'react'
import { useAdminPasscode } from '@/lib/useAdminPasscode'
import AdminNav from '@/components/admin/AdminNav'
import { AdminPasscodeProvider } from '@/components/admin/AdminPasscodeContext'

export default function PasscodeGate({ children }) {
  const { passcode, status, error, verify, logout } = useAdminPasscode()
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
      <AdminNav onSignOut={logout} />
      <div className="admin-body">
        <AdminPasscodeProvider passcode={passcode}>{children}</AdminPasscodeProvider>
      </div>
    </div>
  )
}
