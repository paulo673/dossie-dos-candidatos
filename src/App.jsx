import { useEffect } from 'react'
import { useRota } from './lib/router.js'
import { Topo, NavInferior, Rodape } from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import Candidato from './pages/Candidato.jsx'
import LinhaDoTempo from './pages/LinhaDoTempo.jsx'
import FontesMetodo from './pages/FontesMetodo.jsx'
import { candidatos } from './data/index.js'

export default function App() {
  const { partes, query } = useRota()
  const [p0, p1] = partes
  let pagina
  let rotaAtual = ''
  if (candidatos[p0]) {
    pagina = <Candidato key={p0} id={p0} aba={p1} />
    rotaAtual = p0
  } else if (p0 === 'linha-do-tempo') {
    pagina = <LinhaDoTempo query={query} />
    rotaAtual = p0
  } else if (p0 === 'fontes') {
    pagina = <FontesMetodo />
    rotaAtual = p0
  } else {
    pagina = <Home />
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [p0])

  useEffect(() => {
    if (!p0) document.title = 'Dossiê 2º turno 2026: Lula e Flávio Bolsonaro'
  }, [p0])

  return (
    <>
      <a href="#conteudo" className="pular" onClick={(e) => { e.preventDefault(); document.getElementById('conteudo')?.focus() }}>
        Pular para o conteúdo
      </a>
      <Topo rotaAtual={rotaAtual} />
      <main id="conteudo" tabIndex={-1}>
        {pagina}
      </main>
      <Rodape />
      <NavInferior rotaAtual={rotaAtual} />
    </>
  )
}
