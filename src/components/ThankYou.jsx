import Link from 'next/link'

export default function ThankYou({ heading, body }) {
  return (
    <section className="section" style={{ paddingTop: 40 }}>
      <div className="container prose" style={{ textAlign: 'center' }}>
        <h1>{heading}</h1>
        <p className="lead">{body}</p>
        <p>
          <Link href="/shop/" className="btn">Keep browsing bikes</Link>
        </p>
      </div>
    </section>
  )
}
