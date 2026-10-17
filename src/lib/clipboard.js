'use client'
// Copy text to the clipboard from inside a tap/click handler.
//
// 1) Synchronous textarea + execCommand('copy') first — it runs inside the user
//    gesture, which is what iOS Safari and in-app browsers require, and it never
//    hangs. 2) Fall back to the async Clipboard API, raced against a timeout so a
//    never-settling promise (unfocused document, blocked permission) can't leave
//    the button with no feedback. Returns true/false so the UI can say so.
function legacyCopy(value) {
  let ta
  const prevFocus = document.activeElement
  try {
    ta = document.createElement('textarea')
    ta.value = value
    ta.setAttribute('readonly', '')
    ta.setAttribute('aria-hidden', 'true')
    ta.style.cssText = 'position:fixed;top:0;left:0;width:1px;height:1px;opacity:0;font-size:16px;pointer-events:none'
    document.body.appendChild(ta)
    ta.focus({ preventScroll: true })
    ta.select()
    ta.setSelectionRange(0, value.length)
    return document.execCommand('copy')
  } catch {
    return false
  } finally {
    if (ta && ta.parentNode) ta.parentNode.removeChild(ta)
    try { if (prevFocus && prevFocus.focus) prevFocus.focus({ preventScroll: true }) } catch { /* ignore */ }
  }
}

export async function copyText(text) {
  const value = String(text == null ? '' : text)
  if (legacyCopy(value)) return true
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await Promise.race([
        navigator.clipboard.writeText(value),
        new Promise((_, reject) => setTimeout(() => reject(new Error('clipboard timeout')), 1500)),
      ])
      return true
    }
  } catch {
    /* fall through */
  }
  return false
}
