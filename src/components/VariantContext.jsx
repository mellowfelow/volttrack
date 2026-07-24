'use client'
import { createContext, useContext, useMemo, useState } from 'react'

// Shared variant selection for a product page. The buy panel sets it; the price,
// the Add to cart label and the spec table all read it. The URL never changes —
// a variant product has one canonical URL and one page.
const VariantCtx = createContext({ variant: null, setVariantId: () => {}, variants: [] })

export function VariantProvider({ variants = [], children }) {
  const [variantId, setVariantId] = useState(variants.length ? variants[0].id : null)
  const value = useMemo(
    () => ({ variants, variantId, setVariantId, variant: variants.find((v) => v.id === variantId) || null }),
    [variants, variantId],
  )
  return <VariantCtx.Provider value={value}>{children}</VariantCtx.Provider>
}

export const useVariant = () => useContext(VariantCtx)
