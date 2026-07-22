import '@/styles/globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ChatHub from '@/components/ChatHub'
import { SITE } from '@/config/site'
import { base } from '@/lib/seo'

export const metadata = {
  metadataBase: new URL(base),
  title: {
    default: `${SITE.name} | ${SITE.tagline}`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  icons: { icon: '/favicon.ico' },
}

export const viewport = {
  themeColor: SITE.color,
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script src="/js/webmcp.js" defer></script>
      </head>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
        <ChatHub />
      </body>
    </html>
  )
}
