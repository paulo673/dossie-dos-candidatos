import { useEffect, useState } from 'react'

function lerHash() {
  const h = window.location.hash.replace(/^#\/?/, '')
  const [caminho, query = ''] = h.split('?')
  return { partes: caminho.split('/').filter(Boolean), query: new URLSearchParams(query) }
}

export function useRota() {
  const [rota, setRota] = useState(lerHash)
  useEffect(() => {
    const onHash = () => setRota(lerHash())
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])
  return rota
}

export function navegar(caminho, { rolar = true } = {}) {
  const alvo = '#/' + caminho.replace(/^\/+/, '')
  if (window.location.hash !== alvo) window.location.hash = alvo
  if (rolar) window.scrollTo({ top: 0, behavior: 'instant' })
}

export function substituir(caminho) {
  history.replaceState(null, '', '#/' + caminho.replace(/^\/+/, ''))
  window.dispatchEvent(new HashChangeEvent('hashchange'))
}
