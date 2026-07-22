// Collapsible FAQ using native <details>/<summary> — accessible, no JS required.
export default function FaqAccordion({ items }) {
  return (
    <div className="faq-accordion">
      {items.map((f, i) => (
        <details key={f.q} className="faq-item" {...(i === 0 ? { open: true } : {})}>
          <summary>{f.q}</summary>
          <div className="faq-answer">
            <p className="muted">{f.a}</p>
          </div>
        </details>
      ))}
    </div>
  )
}
