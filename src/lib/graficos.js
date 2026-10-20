import { useEffect, useState } from 'react'

export function useLargura(ref, inicial = 600) {
  const [w, setW] = useState(inicial)
  useEffect(() => {
    if (!ref.current) return
    const ro = new ResizeObserver(([e]) => setW(Math.max(260, Math.round(e.contentRect.width))))
    ro.observe(ref.current)
    return () => ro.disconnect()
  }, [ref])
  return w
}

export function passoBonito(max, alvo = 4) {
  const bruto = max / alvo
  const mag = 10 ** Math.floor(Math.log10(bruto))
  const n = bruto / mag
  const p = n <= 1 ? 1 : n <= 2 ? 2 : n <= 2.5 ? 2.5 : n <= 5 ? 5 : 10
  return p * mag
}
