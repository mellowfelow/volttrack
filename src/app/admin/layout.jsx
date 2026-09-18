import PasscodeGate from '@/components/admin/PasscodeGate'

export const metadata = { title: 'Admin — VoltTrack', robots: { index: false, follow: false } }

export default function AdminLayout({ children }) {
  return <PasscodeGate>{children}</PasscodeGate>
}
