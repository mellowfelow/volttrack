'use client'
import { useVariant } from '@/components/VariantContext'

// Required spec rows on every product page, in a fixed order so the table reads
// the same site-wide. A variant may override any row via `variant.specs`.
const ROWS = [
  ['🏍️', 'Motor', 'power'],
  ['🔋', 'Battery', 'battery'],
  ['⚡', 'Top speed', 'topSpeed'],
  ['📏', 'Range', 'range'],
  ['⚖️', 'Weight', 'weight'],
  ['🎚️', 'Riding modes', 'modes'],
  ['🛣️', 'Road legal', 'roadLegal'],
  ['👤', 'Age recommendation', 'age'],
]

export default function ProductSpecs({ specs }) {
  const { variant } = useVariant()
  const merged = { ...specs, ...((variant && variant.specs) || {}) }
  return (
    <div className="spec-table-wrap">
      <table className="spec-table">
        <caption className="sr-only">
          Technical specifications{variant ? ` — ${variant.label}` : ''}
        </caption>
        <tbody>
          {ROWS.map(([icon, label, key]) => (
            <tr key={key}>
              <th scope="row"><span aria-hidden="true">{icon}</span> {label}</th>
              <td>{merged[key] || '—'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
