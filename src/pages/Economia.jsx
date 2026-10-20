import { useEffect, useMemo, useRef, useState } from 'react'
import {
  Search,
  X,
  TrendingDown,
  ScrollText,
  Coins,
  Landmark,
  Globe,
  Briefcase,
  Building2,
  Factory,
  HeartHandshake,
  User,
  FileText,
  Table2,
  BarChart3,
  ExternalLink,
} from 'lucide-react'
import GraficoEconomia from '../components/GraficoEconomia.jsx'
import { Segmentado } from '../components/ui.jsx'
import {
  FASES,
  PRESIDENTES,
  MARCOS,
  INDICADORES,
  GRUPOS_IND,
  SERIES,
  ANO_INICIO,
  ANO_FIM,
  faseDoAno,
  subfaseDoAno,
  presidentesDoAno,
  fmtValor,
  valorNoAno,
  statsPeriodo,
  urlEconomiaMd,
} from '../data/economia/index.js'
import { glossario, GRUPOS_GLOSSARIO } from '../data/economia/glossario.js'
import { formatarData, normalizar, parseData, dominio } from '../lib/format.js'
import { substituir } from '../lib/router.js'

const CATEGORIAS = {
  crise: { rotulo: 'Crises', icone: TrendingDown },
  plano: { rotulo: 'Planos', icone: ScrollText },
  moeda: { rotulo: 'Moeda', icone: Coins },
  fiscal: { rotulo: 'Fiscal', icone: Landmark },
  externo: { rotulo: 'Setor externo', icone: Globe },
  trabalho: { rotulo: 'Trabalho', icone: Briefcase },
  institucional: { rotulo: 'Instituições', icone: Building2 },
  estatal_privatizacao: { rotulo: 'Estatais', icone: Factory },
  social: { rotulo: 'Social', icone: HeartHandshake },
}

const ABAS = [
  { id: 'linha-do-tempo', rotulo: 'Linha do tempo' },
  { id: 'fases', rotulo: 'Fases e governos' },
  { id: 'glossario', rotulo: 'Glossário' },
  { id: 'dados', rotulo: 'Dados e fontes' },
]

const IND_RESUMO = ['pib', 'inflacao', 'desemprego', 'divida', 'primario', 'salario_minimo']

function LinkFonte({ url, children }) {
  if (!url) return null
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="eco-fonte" title={url}>
      {children || dominio(url)}
      <ExternalLink size={11} aria-hidden="true" />
    </a>
  )
}

/* ---------- faixa das fases (navegação por período) ---------- */
function FaixaFases({ periodo, onPeriodo }) {
  const total = ANO_FIM - ANO_INICIO + 1
  return (
    <div className="faixa-fases" role="group" aria-label="Filtrar por fase da República">
      {FASES.map((f) => {
        const ativo = periodo === f.id
        return (
          <button
            key={f.id}
            type="button"
            className={`faixa-fase ${ativo ? 'ativo' : ''}`}
            style={{ '--f': f.cor, flexGrow: f.anoFim - f.anoInicio + 1, flexBasis: 0 }}
            aria-pressed={ativo}
            onClick={() => onPeriodo(ativo ? 'tudo' : f.id)}
            title={`${f.nome} (${f.anoInicio}–${f.anoFim === ANO_FIM ? 'hoje' : f.anoFim})`}
          >
            <span className="faixa-nome">{f.curto}</span>
            <span className="faixa-anos num">
              {f.anoInicio}–{f.anoFim === ANO_FIM ? '' : String(f.anoFim).slice(2)}
            </span>
          </button>
        )
      })}
      <span className="sr-only">{total} anos</span>
    </div>
  )
}

/* ---------- painel do ano selecionado ---------- */
function PainelAno({ ano, onIndicador }) {
  const f = faseDoAno(ano)
  const sf = subfaseDoAno(ano)
  const pres = presidentesDoAno(ano)
  const marcos = MARCOS.filter((m) => parseData(m.data).ano === ano)
  // uma linha por série (dívida bruta e líquida, setores...), sem repetir séries já mostradas
  const vistas = new Set()
  const linhas = INDICADORES.flatMap((ind) =>
    ind.series
      .filter((s) => !vistas.has(s.id) && vistas.add(s.id))
      .map((s) => ({ ind, s, chave: `${ind.id}-${s.id}`, rotulo: ind.series.length > 1 ? `${ind.rotuloCurto || ind.rotulo}: ${s.curto || s.nome}` : ind.rotuloCurto || ind.rotulo, p: valorNoAno(s.id, ano) }))
  ).filter((l) => l.p)
  return (
    <section className="painel-ano" style={{ '--f': f?.cor }} aria-labelledby="t-painel-ano">
      <header className="painel-ano-cab">
        <h2 id="t-painel-ano" className="num">
          {ano}
        </h2>
        <div>
          <p className="painel-ano-fase">
            {f?.nome}
            {sf ? ` · ${sf.nome}` : ''}
          </p>
          <p className="texto-2 painel-ano-pres">
            <User size={14} aria-hidden="true" /> {pres.map((p) => p.nome).join(' → ') || '—'}
          </p>
        </div>
      </header>
      {linhas.length > 0 ? (
        <dl className="painel-ano-ind">
          {linhas.map(({ ind, p, chave, rotulo }) => (
            <div key={chave}>
              <dt>
                <button type="button" className="botao-link" onClick={() => onIndicador(ind.id)}>
                  {rotulo}
                </button>
              </dt>
              <dd className="num">
                {fmtValor(p.valor, ind)}
                {p.parcial ? <small> parcial</small> : p.estimado && <small> est.</small>}
              </dd>
            </div>
          ))}
        </dl>
      ) : (
        <p className="texto-3">Sem indicadores anuais para este ano.</p>
      )}
      {marcos.length > 0 && (
        <ul className="painel-ano-marcos">
          {marcos.map((m) => (
            <li key={m.data + m.titulo}>
              <a href={`#marco-${m.chave}`} onClick={(e) => (e.preventDefault(), document.getElementById(`marco-${m.chave}`)?.scrollIntoView({ block: 'center' }))}>
                <time className="num">{formatarData(m.data)}</time> {m.titulo}
              </a>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

/* ---------- linha do tempo ---------- */
function Marco({ m }) {
  const Cat = CATEGORIAS[m.categoria] || CATEGORIAS.institucional
  const Icone = Cat.icone
  return (
    <li className="marco-eco" id={`marco-${m.chave}`}>
      <span className="evento-no" aria-hidden="true" />
      <article>
        <p className="evento-meta">
          <time className="num" dateTime={m.data}>
            {formatarData(m.data)}
          </time>
          <span className="evento-cat">
            <Icone size={13} aria-hidden="true" /> {Cat.rotulo}
          </span>
        </p>
        <h4 className="evento-titulo">{m.titulo}</h4>
        {m.descricao && <p className="evento-desc">{m.descricao}</p>}
        {m.fonte && (
          <p className="marco-fonte">
            <LinkFonte url={m.fonte} />
          </p>
        )}
      </article>
    </li>
  )
}

function Posse({ p }) {
  return (
    <li className="posse" id={`posse-${p.chave}`}>
      <span className="posse-no" aria-hidden="true" />
      <div>
        <p className="posse-data num">{formatarData(p.inicio)}</p>
        <p className="posse-nome">
          <User size={14} aria-hidden="true" /> {p.nome} assume
          {p.partido ? <span className="texto-3"> ({p.partido})</span> : null}
        </p>
        {p.chegada && <p className="texto-3 posse-chegada">{p.chegada}</p>}
      </div>
    </li>
  )
}

function ResumoFase({ f }) {
  const st = statsPeriodo(f.anoInicio, f.anoFim)
  return (
    <div className="resumo-fase">
      <p className="texto-2">{f.resumo}</p>
      <dl className="resumo-fase-st">
        {st.map((s) => (
          <div key={s.id}>
            <dt>{s.rotulo}</dt>
            <dd className="num">{s.texto}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}

function LinhaDoTempoEco({ query }) {
  // fase e indicador vivem na URL (#/economia?fase=...&ind=...), para links compartilháveis
  const periodo = FASES.some((f) => f.id === query.get('fase')) ? query.get('fase') : 'tudo'
  const indId = INDICADORES.some((i) => i.id === query.get('ind')) ? query.get('ind') : 'pib'
  function irPara(fase, ind) {
    const q = new URLSearchParams()
    if (fase !== 'tudo') q.set('fase', fase)
    if (ind !== 'pib') q.set('ind', ind)
    const t = q.toString()
    substituir(`economia${t ? `?${t}` : ''}`)
  }
  const setPeriodo = (f) => irPara(f, indId)
  const setIndId = (i) => irPara(periodo, i)
  const [anoSel, setAnoSel] = useState(null)
  const [cats, setCats] = useState(() => new Set(Object.keys(CATEGORIAS)))
  const [busca, setBusca] = useState('')
  const [tabela, setTabela] = useState(false)
  const controlesRef = useRef()

  useEffect(() => {
    const el = controlesRef.current
    if (!el) return
    const ro = new ResizeObserver(() => document.documentElement.style.setProperty('--controles-h', `${el.offsetHeight}px`))
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  const faseSel = FASES.find((f) => f.id === periodo)
  const inicio = faseSel ? faseSel.anoInicio : ANO_INICIO
  const fim = faseSel ? faseSel.anoFim : ANO_FIM
  const ind = INDICADORES.find((i) => i.id === indId) || INDICADORES[0]
  // o gráfico começa no primeiro ano com dado da série (dentro do período escolhido)
  const anosInd = ind.series.flatMap((x) => x.dados.filter((d) => !d.parcial).map((d) => d.ano)).filter((a) => a >= inicio && a <= fim)
  const gInicio = anosInd.length ? Math.max(inicio, ind.inicioMin || 0, Math.min(...anosInd)) : inicio
  const gFim = anosInd.length ? Math.min(fim, Math.max(...anosInd)) : fim

  const q = normalizar(busca)
  const marcos = useMemo(
    () =>
      MARCOS.filter((m) => {
        const a = parseData(m.data).ano
        return a >= inicio && a <= fim && cats.has(m.categoria) && (!q || normalizar(`${m.titulo} ${m.descricao}`).includes(q))
      }),
    [inicio, fim, cats, q]
  )

  // linha do tempo: fase -> itens (posses + marcos) ordenados
  const blocos = useMemo(() => {
    return FASES.filter((f) => f.anoFim >= inicio && f.anoInicio <= fim).map((f) => {
      const posses = q || cats.size < Object.keys(CATEGORIAS).length ? [] : PRESIDENTES.filter((p) => faseDoAno(parseData(p.inicio).ano)?.id === f.id && parseData(p.inicio).ano >= inicio && parseData(p.inicio).ano <= fim)
      const ms = marcos.filter((m) => faseDoAno(parseData(m.data).ano)?.id === f.id)
      const itens = [...posses.map((p) => ({ tipo: 'posse', data: p.inicio, p })), ...ms.map((m) => ({ tipo: 'marco', data: m.data, m }))].sort((a, b) =>
        a.data < b.data ? -1 : a.data > b.data ? 1 : a.tipo === 'posse' ? -1 : 1
      )
      return { f, itens }
    })
  }, [inicio, fim, marcos, q, cats])

  function selecionarAno(a) {
    setAnoSel(a)
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

  const grupos = Object.entries(GRUPOS_IND).map(([g, rotulo]) => ({ g, rotulo, inds: INDICADORES.filter((i) => i.grupo === g) }))

  return (
    <>
      <div className="eco-controles" ref={controlesRef}>
        <div className="container">
          <FaixaFases periodo={periodo} onPeriodo={setPeriodo} />
          {periodo !== 'tudo' && (
            <button type="button" className="chip chip-limpar eco-tudo" onClick={() => setPeriodo('tudo')}>
              <X size={14} aria-hidden="true" /> Ver toda a República ({ANO_INICIO}–{ANO_FIM})
            </button>
          )}
        </div>
      </div>

      <div className="container eco-corpo">
        <section className="eco-grafico grafico" aria-labelledby="t-ind">
          <div className="eco-ind-escolha">
            <label htmlFor="sel-ind" className="sr-only">
              Indicador
            </label>
            <select id="sel-ind" className="eco-select" value={ind.id} onChange={(e) => setIndId(e.target.value)}>
              {grupos.map(({ g, rotulo, inds }) => (
                <optgroup key={g} label={rotulo}>
                  {inds.map((i) => (
                    <option key={i.id} value={i.id}>
                      {i.rotulo}
                    </option>
                  ))}
                </optgroup>
              ))}
            </select>
            <div className="chips eco-ind-rapidos" role="group" aria-label="Indicadores principais">
              {IND_RESUMO.map((id) => {
                const i = INDICADORES.find((x) => x.id === id)
                if (!i) return null
                return (
                  <button key={id} type="button" className={`chip ${indId === id ? 'ativo' : ''}`} aria-pressed={indId === id} onClick={() => setIndId(id)}>
                    {i.rotuloCurto || i.rotulo}
                  </button>
                )
              })}
            </div>
          </div>
          <div className="grafico-cab">
            <div>
              <h2 id="t-ind" className="h-caixa">
                {ind.rotulo} <span className="texto-3 eco-unid">({ind.unidade})</span>
              </h2>
              {ind.descricao && <p className="texto-2">{ind.descricao}</p>}
            </div>
            {ind.series.length > 1 && (
              <ul className="legenda" aria-label="Legenda">
                {ind.series.map((s, i) => (
                  <li key={s.id} style={{ '--c': ['var(--ink)', 'var(--sol)', 'var(--flavio-claro)'][i] }}>
                    <span className="legenda-traco" aria-hidden="true" /> {s.curto || s.nome}
                  </li>
                ))}
              </ul>
            )}
          </div>
          {tabela ? (
            <TabelaIndicador ind={ind} inicio={gInicio} fim={fim} />
          ) : (
            <GraficoEconomia ind={ind} inicio={gInicio} fim={gFim} anoSel={anoSel} onAno={selecionarAno} />
          )}
          <div className="eco-grafico-rodape">
            <button type="button" className="botao-link" onClick={() => setTabela((t) => !t)}>
              {tabela ? (
                <>
                  <BarChart3 size={14} aria-hidden="true" /> Ver gráfico
                </>
              ) : (
                <>
                  <Table2 size={14} aria-hidden="true" /> Ver tabela
                </>
              )}
            </button>
            <p className="texto-3 eco-nota">
              {ind.nota && <>{ind.nota} </>}
              {ind.series.some((s) => s.dados.some((d) => d.estimado && !d.parcial)) && (ind.tipo === 'barras' ? 'Barras mais claras são estimativas históricas. ' : 'Há estimativas históricas na série (marcadas na tabela). ')}
              {ind.series.some((s) => s.dados.some((d) => d.parcial)) && 'Dados parciais de 2026 aparecem só na tabela. '}
              Fonte:{' '}
              {ind.series.map((s, i) => (
                <span key={s.id}>
                  {i > 0 && '; '}
                  <LinkFonte url={s.url}>{s.fonte}</LinkFonte>
                </span>
              ))}
            </p>
          </div>
          {!anoSel && <p className="texto-3 eco-dica-uso">Toque ou clique num ano do gráfico para ver todos os indicadores, o presidente e os marcos daquele ano.</p>}
        </section>

        {anoSel && <PainelAno ano={anoSel} onIndicador={setIndId} />}

        <section className="eco-tempo" aria-labelledby="t-marcos">
          <div className="eco-tempo-cab">
            <h2 id="t-marcos" className="h-aba">
              Marcos econômicos {faseSel ? `· ${faseSel.nome}` : ''}
            </h2>
            <div className="eco-filtros">
              <label className="busca">
                <Search size={16} aria-hidden="true" />
                <span className="sr-only">Buscar nos marcos</span>
                <input type="search" placeholder="Buscar: Real, FMI, café, CLT…" value={busca} onChange={(e) => setBusca(e.target.value)} />
              </label>
              <div className="chips tempo-cats" role="group" aria-label="Temas">
                {Object.entries(CATEGORIAS).map(([k, v]) => {
                  const Icone = v.icone
                  return (
                    <button key={k} type="button" className={`chip chip-cat ${cats.has(k) ? 'ativo' : ''}`} aria-pressed={cats.has(k)} onClick={() => alternarCat(k)}>
                      <Icone size={14} aria-hidden="true" /> {v.rotulo}
                    </button>
                  )
                })}
              </div>
            </div>
            <p className="texto-3 num" aria-live="polite">
              {marcos.length} {marcos.length === 1 ? 'marco' : 'marcos'}
            </p>
          </div>

          {blocos.map(({ f, itens }) => (
            <section key={f.id} className="fase-bloco" style={{ '--f': f.cor }} aria-labelledby={`t-fase-${f.id}`}>
              <h3 className="fase-bloco-cab" id={`t-fase-${f.id}`}>
                <span className="fase-bloco-anos num">
                  {f.anoInicio}–{f.anoFim === ANO_FIM ? 'hoje' : f.anoFim}
                </span>
                {f.nome}
              </h3>
              {!q && <ResumoFase f={f} />}
              {itens.length > 0 ? (
                <ol className="eco-itens">
                  {itens.map((it) => (it.tipo === 'posse' ? <Posse key={`p-${it.p.chave}`} p={it.p} /> : <Marco key={it.m.chave} m={it.m} />))}
                </ol>
              ) : (
                <p className="texto-3 vazio-fase">Nenhum marco com esses filtros nesta fase.</p>
              )}
            </section>
          ))}
        </section>
      </div>
    </>
  )
}

function TabelaIndicador({ ind, inicio, fim }) {
  const anos = [...new Set(ind.series.flatMap((s) => s.dados.map((d) => d.ano)))].filter((a) => a >= inicio && a <= fim).sort((a, b) => b - a)
  return (
    <div className="tabela-rolagem eco-tabela">
      <table className="tabela">
        <thead>
          <tr>
            <th scope="col">Ano</th>
            {ind.series.map((s) => (
              <th key={s.id} scope="col">
                {s.curto || s.nome}
              </th>
            ))}
            <th scope="col">Presidente</th>
          </tr>
        </thead>
        <tbody>
          {anos.map((a) => (
            <tr key={a} style={{ '--f': faseDoAno(a)?.cor }}>
              <th scope="row" className="num eco-ano-cel">
                {a}
              </th>
              {ind.series.map((s) => {
                const p = s.dados.find((d) => d.ano === a)
                return (
                  <td key={s.id} className="num">
                    {p ? fmtValor(p.valor, ind) : '—'}
                    {p?.parcial ? <small className="texto-3"> parcial</small> : p?.estimado && <small className="texto-3"> est.</small>}
                  </td>
                )
              })}
              <td className="texto-2">
                {presidentesDoAno(a)
                  .map((p) => p.nomeCurto)
                  .join(', ')}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

/* ---------- fases e governos ---------- */
function FasesGovernos() {
  const [ordem, setOrdem] = useState('cronologica')
  const linhas = useMemo(() => {
    const ls = PRESIDENTES.filter((p) => p.anos.length > 0).map((p) => {
      const st = Object.fromEntries(statsPeriodo(p.anos[0], p.anos[p.anos.length - 1], p.anos).map((s) => [s.id, s]))
      return { p, st }
    })
    if (ordem === 'pib') return [...ls].sort((a, b) => (b.st.pib?.valor ?? -99) - (a.st.pib?.valor ?? -99))
    if (ordem === 'inflacao') return [...ls].sort((a, b) => (a.st.inflacao?.valor ?? 1e9) - (b.st.inflacao?.valor ?? 1e9))
    return ls
  }, [ordem])

  return (
    <div className="eco-fases">
      <div className="fases-cards">
        {FASES.map((f) => (
          <article key={f.id} className="fase-card" style={{ '--f': f.cor }}>
            <header>
              <p className="fase-card-anos num">
                {f.anoInicio}–{f.anoFim === ANO_FIM ? 'hoje' : f.anoFim}
              </p>
              <h3>{f.nome}</h3>
              {f.palavras_chave?.length > 0 && (
                <ul className="fase-tags">
                  {f.palavras_chave.map((k) => (
                    <li key={k}>{k}</li>
                  ))}
                </ul>
              )}
            </header>
            <ResumoFase f={f} />
            {f.subfases?.length > 0 && (
              <div className="tabela-rolagem">
                <table className="tabela fase-subs">
                  <thead>
                    <tr>
                      <th scope="col">Subfase</th>
                      <th scope="col">PIB</th>
                      <th scope="col">Inflação</th>
                    </tr>
                  </thead>
                  <tbody>
                    {f.subfases.map((s) => {
                      const st = Object.fromEntries(statsPeriodo(s.anoInicio, s.anoFim).map((x) => [x.id, x]))
                      return (
                        <tr key={s.id}>
                          <th scope="row">
                            {s.nome} <small className="texto-3 num">{s.periodo}</small>
                          </th>
                          <td className="num">{st.pib?.texto ?? '—'}</td>
                          <td className="num">{st.inflacao?.texto ?? '—'}</td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            )}
            <a className="botao-link" href={`#/economia?fase=${f.id}`}>
              Ver na linha do tempo →
            </a>
          </article>
        ))}
      </div>

      <section className="caixa eco-governos" aria-labelledby="t-gov">
        <div className="eco-governos-cab">
          <div>
            <h2 id="t-gov" className="h-caixa">
              Governo a governo
            </h2>
            <p className="texto-2">
              Médias anuais nos anos atribuídos a cada presidente (o ano conta para quem governou a maior parte dele). Crescimento e inflação usam média geométrica.
            </p>
          </div>
          <Segmentado
            rotulo="Ordenar"
            valor={ordem}
            onChange={setOrdem}
            opcoes={[
              { valor: 'cronologica', rotulo: 'Cronológica' },
              { valor: 'pib', rotulo: 'Maior PIB' },
              { valor: 'inflacao', rotulo: 'Menor inflação' },
            ]}
          />
        </div>
        <div className="tabela-rolagem">
          <table className="tabela eco-tab-gov">
            <thead>
              <tr>
                <th scope="col">Presidente</th>
                <th scope="col">Anos</th>
                <th scope="col">PIB (% a.a.)</th>
                <th scope="col">Inflação (% a.a.)</th>
                <th scope="col">Desemprego médio*</th>
                <th scope="col">Ministros da Fazenda/Economia</th>
              </tr>
            </thead>
            <tbody>
              {linhas.map(({ p, st }) => (
                <tr key={p.chave} style={{ '--f': faseDoAno(p.anos[0])?.cor }}>
                  <th scope="row" className="eco-ano-cel">
                    {p.nome}
                    <small className="texto-3">{p.chegada}</small>
                  </th>
                  <td className="num">{p.anos.length === 1 ? p.anos[0] : `${p.anos[0]}–${p.anos[p.anos.length - 1]}`}</td>
                  <td className="num">{st.pib?.texto ?? '—'}</td>
                  <td className="num">{st.inflacao?.texto ?? '—'}</td>
                  <td className="num">{st.desemprego?.texto ?? '—'}</td>
                  <td className="texto-2 eco-ministros">{(p.ministros_fazenda || []).map((m) => m.nome).join(', ') || '—'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="texto-3 eco-nota">
          *Desemprego só pela PNAD Contínua (desde 2012): as pesquisas anteriores (PME e PNAD antiga) usam outra metodologia e não podem ser comparadas. Anos ainda em curso (2026)
          não entram nas médias. Presidentes que governaram menos da metade de um ano (interinos, juntas) não recebem anos próprios. Mandatos curtos têm médias de um ou dois anos e devem ser lidos com cuidado: o
          resultado de um ano depende muito do que veio antes.
        </p>
      </section>
    </div>
  )
}

/* ---------- glossário ---------- */
function Glossario() {
  const [busca, setBusca] = useState('')
  const [grupo, setGrupo] = useState('todos')
  const q = normalizar(busca)
  const lista = glossario
    .filter((g) => (grupo === 'todos' || g.grupo === grupo) && (!q || normalizar(`${g.termo} ${g.definicao}`).includes(q)))
    .sort((a, b) => a.termo.localeCompare(b.termo, 'pt-BR'))
  const ancora = (t) => `termo-${normalizar(t).replace(/[^a-z0-9]+/g, '-')}`
  return (
    <div className="eco-glossario">
      <div className="eco-glossario-filtros">
        <label className="busca busca-larga">
          <Search size={16} aria-hidden="true" />
          <span className="sr-only">Buscar no glossário</span>
          <input type="search" placeholder="Buscar termo: Selic, dívida líquida, PPC…" value={busca} onChange={(e) => setBusca(e.target.value)} />
        </label>
        <div className="chips tempo-cats" role="group" aria-label="Grupos de termos">
          {[['todos', 'Todos'], ...Object.entries(GRUPOS_GLOSSARIO)].map(([k, r]) => (
            <button key={k} type="button" className={`chip ${grupo === k ? 'ativo' : ''}`} aria-pressed={grupo === k} onClick={() => setGrupo(k)}>
              {r}
            </button>
          ))}
        </div>
        <p className="texto-3 num" aria-live="polite">
          {lista.length} {lista.length === 1 ? 'termo' : 'termos'}
        </p>
      </div>
      <dl className="glossario-lista">
        {lista.map((g) => (
          <div key={g.termo} id={ancora(g.termo)} className="glossario-item">
            <dt>
              {g.termo} <span className="glossario-grupo">{GRUPOS_GLOSSARIO[g.grupo]}</span>
            </dt>
            <dd>
              {g.definicao}
              {g.ver?.length > 0 && (
                <span className="glossario-ver">
                  {' '}
                  Ver também:{' '}
                  {g.ver.map((v, i) => (
                    <span key={v}>
                      {i > 0 && ', '}
                      <a
                        href={`#${ancora(v)}`}
                        onClick={(e) => {
                          e.preventDefault()
                          setBusca('')
                          setGrupo('todos')
                          requestAnimationFrame(() => document.getElementById(ancora(v))?.scrollIntoView({ block: 'center' }))
                        }}
                      >
                        {v}
                      </a>
                    </span>
                  ))}
                </span>
              )}
            </dd>
          </div>
        ))}
      </dl>
      {!lista.length && <p className="vazio">Nenhum termo encontrado.</p>}
    </div>
  )
}

/* ---------- dados e fontes ---------- */
function DadosFontes() {
  const lista = Object.values(SERIES).sort((a, b) => a.indicador.localeCompare(b.indicador, 'pt-BR'))
  return (
    <div className="eco-dados">
      <section className="caixa caixa-destaque">
        <h2 className="h-caixa">Como os dados foram reunidos</h2>
        <p className="texto-2">
          Todos os números vêm de bases públicas: IBGE, Banco Central (SGS), Tesouro Nacional, Ipeadata, FGV, DIEESE, Banco Mundial, FMI, PNUD e Maddison Project. Antes de 1947 não
          existem contas nacionais oficiais: PIB, inflação e contas públicas da República Velha e da Era Vargas são reconstruções de historiadores econômicos e aparecem marcadas como
          estimativa. Séries com mudança de metodologia (desemprego PME × PNAD Contínua, dívida bruta antiga × nova) são mostradas separadas, nunca emendadas.
        </p>
        <p>
          <a className="botao-link" href={urlEconomiaMd} target="_blank" rel="noopener noreferrer">
            <FileText size={14} aria-hidden="true" /> Relatório completo em Markdown (economia.md)
          </a>
        </p>
      </section>
      <div className="tabela-rolagem">
        <table className="tabela eco-tab-series">
          <thead>
            <tr>
              <th scope="col">Série</th>
              <th scope="col">Unidade</th>
              <th scope="col">Cobertura</th>
              <th scope="col">Fonte</th>
            </tr>
          </thead>
          <tbody>
            {lista.map((s) => {
              const anos = s.dados.map((d) => d.ano)
              return (
                <tr key={s.id}>
                  <th scope="row">
                    {s.indicador}
                    {s.nota && <small className="texto-3">{s.nota}</small>}
                  </th>
                  <td>{s.unidade}</td>
                  <td className="num">
                    {Math.min(...anos)}–{Math.max(...anos)}
                    <small className="texto-3">{anos.length} anos</small>
                  </td>
                  <td>
                    <LinkFonte url={s.url}>{s.fonte}</LinkFonte>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default function Economia({ aba: abaUrl, query }) {
  const aba = ABAS.some((a) => a.id === abaUrl) ? abaUrl : 'linha-do-tempo'
  const abasRef = useRef()
  useEffect(() => {
    document.title = 'Economia do Brasil República (1889–2026): dossiê 2º turno'
  }, [])

  function irAba(id) {
    substituir(id === 'linha-do-tempo' ? 'economia' : `economia/${id}`)
  }
  function onKey(e) {
    const i = ABAS.findIndex((a) => a.id === aba)
    let j = null
    if (e.key === 'ArrowRight') j = (i + 1) % ABAS.length
    if (e.key === 'ArrowLeft') j = (i - 1 + ABAS.length) % ABAS.length
    if (j != null) {
      e.preventDefault()
      irAba(ABAS[j].id)
      abasRef.current?.querySelectorAll('[role="tab"]')[j]?.focus()
    }
  }

  return (
    <div className="pagina-eco">
      <header className="tempo-cab eco-cab">
        <div className="container">
          <p className="eco-sobretitulo">Brasil República · {ANO_INICIO}–{ANO_FIM}</p>
          <h1>A economia em 137 anos</h1>
          <p className="texto-2 tempo-sub">
            PIB, inflação, dívida, contas públicas, emprego, salário e indicadores sociais desde a Proclamação da República, separados pelas cinco fases políticas. Cada número tem fonte
            pública; estimativas históricas vêm marcadas.
          </p>
        </div>
      </header>
      <div className="abas-wrap eco-abas">
        <div className="container">
          <div className="abas" role="tablist" aria-label="Seções da economia" ref={abasRef} onKeyDown={onKey}>
            {ABAS.map((a) => (
              <button
                key={a.id}
                role="tab"
                type="button"
                id={`aba-eco-${a.id}`}
                aria-selected={aba === a.id}
                aria-controls="painel-eco"
                tabIndex={aba === a.id ? 0 : -1}
                onClick={() => irAba(a.id)}
              >
                {a.rotulo}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div id="painel-eco" role="tabpanel" aria-labelledby={`aba-eco-${aba}`} className={aba === 'linha-do-tempo' ? '' : 'container painel'}>
        {aba === 'linha-do-tempo' && <LinhaDoTempoEco query={query} />}
        {aba === 'fases' && <FasesGovernos />}
        {aba === 'glossario' && <Glossario />}
        {aba === 'dados' && <DadosFontes />}
      </div>
    </div>
  )
}
