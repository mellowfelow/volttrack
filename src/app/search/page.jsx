import SearchClient from './SearchClient'
import { buildMetadata } from '@/lib/seo'

export const metadata = {
  ...buildMetadata({
    title: 'Search',
    description: 'Search VoltTrack electric dirt bikes, buying guides and blog posts.',
    path: '/search/',
  }),
  robots: { index: false, follow: true },
}

export default function SearchPage() {
  return <SearchClient />
}
