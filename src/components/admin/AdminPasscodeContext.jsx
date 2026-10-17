'use client'
import { createContext, useContext } from 'react'

const AdminPasscodeContext = createContext('')

// Provided once by PasscodeGate after the passcode has been verified, so every
// admin page gets it synchronously instead of re-verifying on its own.
export function AdminPasscodeProvider({ passcode, children }) {
  return <AdminPasscodeContext.Provider value={passcode}>{children}</AdminPasscodeContext.Provider>
}

export function useAdminContextPasscode() {
  return useContext(AdminPasscodeContext)
}
