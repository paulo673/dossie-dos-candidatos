import { useEffect, useState } from 'react'

const diasAte = (iso) => Math.ceil((new Date(iso) - new Date()) / 86400000)

export function useDiasAte(iso) {
  const [dias, setDias] = useState(() => diasAte(iso))
  useEffect(() => {
    const t = setInterval(() => setDias(diasAte(iso)), 60000)
    return () => clearInterval(t)
  }, [iso])
  return dias
}
