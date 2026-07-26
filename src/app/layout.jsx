import '@/styles/globals.css'
import { Inter } from 'next/font/google'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ChatHub from '@/components/ChatHub'
import CartDrawer from '@/components/CartDrawer'
import { SITE } from '@/config/site'
import { base } from '@/lib/seo'

// Self-hosted, non-render-blocking font (Next inlines it + preloads the woff2),
// replacing the render-blocking Google Fonts <link>. Exposed as --font-sans.
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-sans',
})

export const metadata = {
  metadataBase: new URL(base),
  title: {
    default: `${SITE.name} | ${SITE.tagline}`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  icons: { icon: '/favicon.ico' },
  // Site-wide search-engine verification (rendered once, in every page's <head>).
  verification: {
    ...(SITE.gscVerification ? { google: SITE.gscVerification } : {}),
    ...(SITE.yandexVerification ? { yandex: SITE.yandexVerification } : {}),
  },
}

export const viewport = {
  themeColor: SITE.color,
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Enable reveal animations only when JS is active (before paint → no flash) */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js-anim')" }} />
        <script src="/js/webmcp.js" defer></script>
      </head>
      <body>
        <a href="#main" className="skip-link">Skip to main content</a>
        <Nav />
        <main id="main">{children}</main>
        <Footer />
        <CartDrawer />
        <ChatHub />
      </body>
    </html>
  )
}
