'use client'
// Quantity stepper: − / typed number / + · min 1 max 999 · aria-label per control.
export default function QtyStepper({ qty, setQty, min = 1, max = 999, size = 'md' }) {
  const clamp = (n) => Math.max(min, Math.min(max, n || min))
  return (
    <div className={`qty-stepper qty-${size}`} role="group" aria-label="Quantity">
      <button type="button" aria-label="Decrease quantity" onClick={() => setQty(clamp(qty - 1))}>−</button>
      <input
        type="number"
        inputMode="numeric"
        min={min}
        max={max}
        value={qty}
        aria-label="Quantity"
        onChange={(e) => setQty(clamp(parseInt(e.target.value || String(min), 10)))}
      />
      <button type="button" aria-label="Increase quantity" onClick={() => setQty(clamp(qty + 1))}>+</button>
    </div>
  )
}
