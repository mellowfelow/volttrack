import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="section" style={{ paddingTop: 60, textAlign: 'center' }}>
      <div className="container prose" style={{ margin: '0 auto' }}>
        <h1>Page not found</h1>
        <p className="lead">That page doesn&rsquo;t exist or has moved. Let&rsquo;s get you back on the trail.</p>
        <p>
          <Link href="/" className="btn">Home</Link>{' '}
          <Link href="/shop/" className="btn btn-ghost">Shop all bikes</Link>
        </p>
      </div>
    </section>
  )
}
