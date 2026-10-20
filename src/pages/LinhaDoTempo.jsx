import { useEffect, useMemo, useRef, useState } from 'react'
import { Heart, Vote, Landmark, Scale, Megaphone, Search, Star, X, SlidersHorizontal } from 'lucide-react'
import { lista, candidatos } from '../data/index.js'
import { Fontes, NaoVerificado, Segmentado, TagConfianca } from '../components/ui.jsx'
import { formatarData, normalizar, ordemData, parseData } from '../lib/format.js'
import { substituir } from '../lib/router.js'
import Rico from '../lib/Rico.jsx'

const CATEGORIAS = {
  pessoal: { rotulo: 'Vida pessoal', curto: 'Pessoal', icone: Heart },
  politica: { rotulo: 'Política e eleições', curto: 'Política', icone: Vote },
  governo: { rotulo: 'Governo e Legislativo', curto: 'Governo', icone: Landmark },
  justica: { rotulo: 'Justiça e investigações', curto: 'Justiça', icone: Scale },
  polemica: { rotulo: 'Polêmicas', curto: 'Polêmicas', icone: Megaphone },
}

const TODOS = lista
  .flatMap((c) => c.timeline.map((e, i) => ({ ...e, cand: c.id, chave: `${c.id}-${i}` })))
  .sort((a, b) => ordemData(a.data) - ordemData(b.data))

const ANO_MIN = Math.min(...TODOS.map((e) => parseData(e.data).ano))
const ANO_MAX = Math.max(...TODOS.map((e) => parseData(e.data).ano))

function idadeNoAno(c, ano) {
  const n = parseData(c.nascimento).ano
  if (ano < n) return null
  if (ano === n) return 'nasce'
  return `${ano - n} anos`
}

function Trilho({ eventos, anoAtivo, onAno }) {
  const ref = useRef()
  const [arrastando, setArrastando] = useState(false)
  const [dica, setDica] = useState(null)
  const anos = ANO_MAX - ANO_MIN + 1
  const cont = useMemo(() => {
    const m = {}
    for (const e of eventos) {
      const a = parseData(e.data).ano
      m[a] = m[a] || { lula: 0, flavio: 0 }
      m[a][e.cand]++
    }
    return m
  }, [eventos])
  const maxC = Math.max(1, ...Object.values(cont).flatMap((v) => [v.lula, v.flavio]))
  const decadas = []
  for (let d = Math.ceil(ANO_MIN / 10) * 10; d <= ANO_MAX; d += 10) decadas.push(d)

  function anoDoPonteiro(e) {
    const r = ref.current.getBoundingClientRect()
    const f = Math.min(0.9999, Math.max(0, (e.clientX - r.left) / r.width))
    return ANO_MIN + Math.floor(f * anos)
  }
  function ir(e) {
    const a = anoDoPonteiro(e)
    setDica(a)
    onAno(a)
  }

  const pos = (a) => ((a - ANO_MIN + 0.5) / anos) * 100

  return (
    <div className="trilho-wrap">
      <div
        className={`trilho ${arrastando ? 'arrastando' : ''}`}
        ref={ref}
        role="slider"
        tabIndex={0}
        aria-label="Ano da linha do tempo"
        aria-valuemin={ANO_MIN}
        aria-valuemax={ANO_MAX}
        aria-valuenow={anoAtivo || ANO_MIN}
        onPointerDown={(e) => {
          e.currentTarget.setPointerCapture(e.pointerId)
          setArrastando(true)
          ir(e)
        }}
        onPointerMove={(e) => {
          if (arrastando) ir(e)
          else setDica(anoDoPonteiro(e))
        }}
        onPointerUp={() => setArrastando(false)}
        onPointerLeave={() => !arrastando && setDica(null)}
        onKeyDown={(e) => {
          const a = anoAtivo || ANO_MIN
          if (e.key === 'ArrowRight') onAno(Math.min(ANO_MAX, a + 1), true)
          if (e.key === 'ArrowLeft') onAno(Math.max(ANO_MIN, a - 1), true)
        }}
      >
        <div className="trilho-barras" aria-hidden="true">
          {Array.from({ length: anos }, (_, i) => {
            const a = ANO_MIN + i
            const v = cont[a] || { lula: 0, flavio: 0 }
            return (
              <span key={a} className={`trilho-ano ${a === anoAtivo ? 'ativo' : ''}`}>
                <span className="trilho-cima c-lula" style={{ height: `${(v.lula / maxC) * 100}%` }} />
                <span className="trilho-baixo c-flavio" style={{ height: `${(v.flavio / maxC) * 100}%` }} />
              </span>
            )
          })}
        </div>
        {anoAtivo && <span className="trilho-cursor" style={{ left: `${pos(anoAtivo)}%` }} aria-hidden="true" />}
        {dica && (
          <span className="trilho-dica num" style={{ left: `${pos(dica)}%` }} aria-hidden="true">
            {dica}
          </span>
        )}
      </div>
      <div className="trilho-decadas num" aria-hidden="true">
        {decadas.map((d) => (
          <span key={d} style={{ left: `${pos(d)}%` }}>
            {d}
          </span>
        ))}
      </div>
    </div>
  )
}

function Evento({ e }) {
  const c = candidatos[e.cand]
  const Cat = CATEGORIAS[e.categoria] || CATEGORIAS.politica
  const Icone = Cat.icone
  return (
    <li className={`evento c-${e.cand} lado-${e.cand} ${e.destaque ? 'marco' : ''}`}>
      <span className="evento-no" aria-hidden="true" />
      <article>
        <p className="evento-meta">
          <span className="evento-cand">{c.nomeCurto}</span>
          <time className="num" dateTime={e.data}>
            {formatarData(e.data, e.dataLabel)}
          </time>
          <span className="evento-cat" title={Cat.rotulo}>
            <Icone size={13} aria-hidden="true" />
            <span>{Cat.rotulo}</span>
          </span>
        </p>
        <h4 className="evento-titulo">
          {e.destaque && <Star size={14} className="evento-estrela" aria-label="Marco" />}
          {e.titulo}
        </h4>
        {e.descricao && <Rico as="p" className="evento-desc" texto={e.descricao} />}
        {(e.tag || e.verificado === false) && (
          <p className="evento-selos">
            <TagConfianca tag={e.tag} />
            <NaoVerificado verificado={e.verificado} />
          </p>
        )}
        <Fontes urls={e.fontes} max={3} className="fontes-mini" arquivo={c.dossie.arquivo} />
      </article>
    </li>
  )
}

export default function LinhaDoTempo({ query }) {
  const inicialCand = ['lula', 'flavio'].includes(query.get('c')) ? query.get('c') : 'ambos'
  const [cand, setCand] = useState(inicialCand)
  const [cats, setCats] = useState(() => new Set(Object.keys(CATEGORIAS)))
  const [soMarcos, setSoMarcos] = useState(false)
  const [busca, setBusca] = useState('')
  const [anoAtivo, setAnoAtivo] = useState(null)
  const [painelAberto, setPainelAberto] = useState(false)
  const controlesRef = useRef()

  // altura dos controles fixos -> cabeçalho do ano gruda logo abaixo
  useEffect(() => {
    const el = controlesRef.current
    if (!el) return
    const ro = new ResizeObserver(() => document.documentElement.style.setProperty('--controles-h', `${el.offsetHeight}px`))
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  useEffect(() => {
    document.title = 'Linha do tempo: dossiê 2º turno 2026'
  }, [])

  function mudarCand(v) {
    setCand(v)
    substituir(v === 'ambos' ? 'linha-do-tempo' : `linha-do-tempo?c=${v}`)
  }

  const eventos = useMemo(() => {
    const q = normalizar(busca)
    return TODOS.filter(
      (e) =>
        (cand === 'ambos' || e.cand === cand) &&
        cats.has(e.categoria) &&
        (!soMarcos || e.destaque) &&
        (!q || normalizar(`${e.titulo} ${e.descricao} ${e.dataLabel || ''} ${e.data}`).includes(q))
    )
  }, [cand, cats, soMarcos, busca])

  const porAno = useMemo(() => {
    const m = new Map()
    for (const e of eventos) {
      const a = parseData(e.data).ano
      if (!m.has(a)) m.set(a, [])
      m.get(a).push(e)
    }
    return [...m.entries()]
  }, [eventos])

  // ano visível -> cursor do trilho
  useEffect(() => {
    const els = document.querySelectorAll('.ano')
    const io = new IntersectionObserver(
      (entradas) => {
        const vis = entradas.filter((x) => x.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (vis[0]) setAnoAtivo(Number(vis[0].target.dataset.ano))
      },
      { rootMargin: '-35% 0px -60% 0px' }
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [porAno])

  function irParaAno(a, exato) {
    const anos = porAno.map(([x]) => x)
    if (!anos.length) return
    let alvo = anos.find((x) => x >= a)
    if (alvo == null) alvo = anos[anos.length - 1]
    if (exato && alvo !== a) {
      // teclado: pula para o próximo ano com eventos na direção certa
      alvo = a > (anoAtivo || 0) ? anos.find((x) => x >= a) ?? anos[anos.length - 1] : [...anos].reverse().find((x) => x <= a) ?? anos[0]
    }
    setAnoAtivo(alvo)
    document.getElementById(`ano-${alvo}`)?.scrollIntoView({ block: 'start', behavior: 'auto' })
  }

  function alternarCat(k) {
    setCats((s) => {
      const n = new Set(s)
      if (n.has(k) && n.size === 1) return new Set(Object.keys(CATEGORIAS))
      if (n.has(k)) n.delete(k)
      else n.add(k)
      return n
    })
  }

  const nFiltros = (cats.size < 5 ? 1 : 0) + (soMarcos ? 1 : 0) + (busca ? 1 : 0)
  const filtrosAtivos = cand !== 'ambos' || nFiltros > 0
  const contCand = (id) => TODOS.filter((e) => id === 'ambos' || e.cand === id).length

  return (
    <div className="pagina-tempo">
      <header className="tempo-cab">
        <div className="container">
          <h1>Linha do tempo</h1>
          <p className="texto-2 tempo-sub">
            {TODOS.length} eventos dos dois dossiês, de {ANO_MIN} a {ANO_MAX}. À esquerda, {candidatos.lula.nomeCurto}; à direita, {candidatos.flavio.nomeCurto}. Arraste na barra colorida para viajar
            pelos anos.
          </p>
        </div>
      </header>

      <div className="tempo-controles" ref={controlesRef}>
        <div className="container">
          <div className="tempo-linha1">
            <Segmentado
              rotulo="Candidato"
              valor={cand}
              onChange={mudarCand}
              opcoes={[
                { valor: 'ambos', rotulo: 'Ambos', contagem: contCand('ambos') },
                { valor: 'lula', rotulo: 'Lula', classe: 'c-lula', contagem: contCand('lula') },
                { valor: 'flavio', rotulo: 'Flávio', classe: 'c-flavio', contagem: contCand('flavio') },
              ]}
            />
            <button
              type="button"
              className={`chip chip-filtros ${painelAberto ? 'ativo' : ''}`}
              aria-expanded={painelAberto}
              aria-controls="painel-filtros"
              onClick={() => setPainelAberto((v) => !v)}
            >
              <SlidersHorizontal size={15} aria-hidden="true" /> <span className="chip-filtros-rotulo">Filtros</span>
              {nFiltros > 0 && <span className="contagem num">{nFiltros}</span>}
            </button>
          </div>
          <div className={`tempo-painel ${painelAberto ? 'aberto' : ''}`} id="painel-filtros">
            <div className="tempo-linha2">
              <button type="button" className={`chip chip-marco ${soMarcos ? 'ativo' : ''}`} aria-pressed={soMarcos} onClick={() => setSoMarcos((v) => !v)}>
                <Star size={14} aria-hidden="true" /> Só os marcos
              </button>
              <label className="busca">
                <Search size={16} aria-hidden="true" />
                <span className="sr-only">Buscar na linha do tempo</span>
                <input type="search" placeholder="Buscar: prisão, Senado, Vorcaro…" value={busca} onChange={(e) => setBusca(e.target.value)} />
              </label>
            </div>
            <div className="chips tempo-cats" role="group" aria-label="Temas">
              {Object.entries(CATEGORIAS).map(([k, v]) => {
                const Icone = v.icone
                return (
                  <button key={k} type="button" className={`chip chip-cat ${cats.has(k) ? 'ativo' : ''}`} aria-pressed={cats.has(k)} onClick={() => alternarCat(k)} title={v.rotulo}>
                    <Icone size={14} aria-hidden="true" /> {v.curto}
                  </button>
                )
              })}
              {filtrosAtivos && (
                <button
                  type="button"
                  className="chip chip-limpar"
                  onClick={() => {
                    mudarCand('ambos')
                    setCats(new Set(Object.keys(CATEGORIAS)))
                    setSoMarcos(false)
                    setBusca('')
                  }}
                >
                  <X size={14} aria-hidden="true" /> Limpar filtros
                </button>
              )}
            </div>
          </div>
          <Trilho eventos={eventos} anoAtivo={anoAtivo} onAno={irParaAno} />
        </div>
      </div>

      <div className={`container tempo-corpo modo-${cand}`}>
        <p className="texto-3 num tempo-contagem" aria-live="polite">
          {eventos.length} {eventos.length === 1 ? 'evento' : 'eventos'}
        </p>
        {porAno.map(([ano, evs]) => (
          <section key={ano} className="ano" id={`ano-${ano}`} data-ano={ano} aria-labelledby={`t-ano-${ano}`}>
            <h2 className="ano-cab" id={`t-ano-${ano}`}>
              <span className="ano-num num">{ano}</span>
              <span className="ano-idades">
                {lista
                  .filter((c) => cand === 'ambos' || c.id === cand)
                  .map((c) => {
                    const i = idadeNoAno(c, ano)
                    return i ? (
                      <span key={c.id} className={`c-${c.id}`}>
                        {c.nomeCurto}: {i}
                      </span>
                    ) : null
                  })}
              </span>
            </h2>
            <ol className="ano-eventos">
              {evs.map((e) => (
                <Evento key={e.chave} e={e} />
              ))}
            </ol>
          </section>
        ))}
        {!eventos.length && <p className="vazio">Nenhum evento com esses filtros. Use "Limpar filtros" para ver tudo.</p>}
      </div>
    </div>
  )
}
