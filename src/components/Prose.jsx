import Link from 'next/link'

// Render a paragraph string that may contain inline markdown-style links:
//   "See the [Stark Varg EX](/product/stark-varg-ex/) for details."
// Internal links (leading /) become <Link>; anything else renders as text.
// Keeps blog/guide authoring readable while producing real crawlable anchors.
const LINK = /\[([^\]]+)\]\((\/[^)]+)\)/g

export function proseNodes(text) {
  const out = []
  let last = 0
  let m
  let i = 0
  LINK.lastIndex = 0
  while ((m = LINK.exec(text)) !== null) {
    if (m.index > last) out.push(text.slice(last, m.index))
    out.push(<Link key={i++} href={m[2]}>{m[1]}</Link>)
    last = m.index + m[0].length
  }
  if (last < text.length) out.push(text.slice(last))
  return out
}

export default function Prose({ text }) {
  return <p>{proseNodes(text)}</p>
}
