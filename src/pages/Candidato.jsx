import { useEffect, useMemo, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import {
  ChevronDown,
  Search,
  Award,
  Film,
  Heart,
  BookOpen,
  Info,
  Briefcase,
  HelpCircle,
  FileText,
  Check,
  X,
  Minus,
  Lock,
  ArrowLeftRight,
} from 'lucide-react'
import { candidatos, ordem } from '../data/index.js'
import { Fontes, NaoVerificado, StatusCaso, FaseStepper, Segmentado } from '../components/ui.jsx'
import { STATUS } from '../lib/constantes.js'
import { GraficoLinhas } from '../components/Graficos.jsx'
import { formatarData, idade, normalizar, pct, reais, ordemData } from '../lib/format.js'
import { substituir } from '../lib/router.js'
import Rico from '../lib/Rico.jsx'

const ICONES = { award: Award, film: Film, heart: Heart, book: BookOpen, info: Info, briefcase: Briefcase }

function abasDe(c) {
  return [
    { id: 'visao-geral', rotulo: 'Visão geral' },
    { id: 'trajetoria', rotulo: 'Trajetória' },
    { id: 'mandatos', rotulo: 'Mandatos', n: c.mandatos?.length },
    { id: 'casos', rotulo: 'Processos e casos', n: c.casos?.length },
    c.votacoes && { id: 'votacoes', rotulo: 'Votações', n: c.votacoes.itens.length },
    { id: 'patrimonio', rotulo: 'Patrimônio' },
    c.polemicas?.length && { id: 'polemicas', rotulo: 'Polêmicas', n: c.polemicas.length },
    { id: 'mais', rotulo: 'Mais' },
  ].filter(Boolean)
}

function Cabecalho({ c }) {
  const outro = candidatos[ordem.find((id) => id !== c.id)]
  return (
    <header className={`cand-cab c-${c.id}`}>
      <div className="container cand-cab-in">
        <div className="cand-num" aria-hidden="true">
          {c.numeroUrna}
        </div>
        <div className="cand-ident">
          <p className="cand-partido">
            {c.partido} <span className="texto-2">nº {c.numeroUrna}, vice {c.vice}</span>
          </p>
          <h1>{c.nome}</h1>
          <Rico as="p" className="cand-resumo" texto={c.resumo} />
          <p className="cand-meta texto-2">
            {idade(c.nascimento)} anos, nascido em {c.naturalidade}. {c.coligacao}.
          </p>
        </div>
        <a href={`#/${outro.id}`} className={`cand-troca c-${outro.id}`}>
          <ArrowLeftRight size={16} aria-hidden="true" /> Ver {outro.nomeCurto}
        </a>
      </div>
      <div className="container">
        <ul className="destaques">
          {c.destaques.map((d) => (
            <li key={d.rotulo}>
              <b className="destaque-valor">{d.valor}</b>
              <span className="destaque-rotulo">{d.rotulo}</span>
              {d.detalhe && <span className="destaque-detalhe">{d.detalhe}</span>}
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}

function Abas({ c, aba }) {
  const abas = abasDe(c)
  const ref = useRef()
  useEffect(() => {
    const el = ref.current?.querySelector('[aria-selected="true"]')
    el?.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' })
  }, [aba])
  function onKey(e) {
    const i = abas.findIndex((a) => a.id === aba)
    let j = null
    if (e.key === 'ArrowRight') j = (i + 1) % abas.length
    if (e.key === 'ArrowLeft') j = (i - 1 + abas.length) % abas.length
    if (j != null) {
      e.preventDefault()
      substituir(`${c.id}/${abas[j].id}`)
      ref.current?.querySelectorAll('[role="tab"]')[j]?.focus()
    }
  }
  return (
    <div className={`abas-wrap c-${c.id}`}>
      <div className="container">
        <div className="abas" role="tablist" aria-label={`Seções do dossiê de ${c.nomeCurto}`} ref={ref} onKeyDown={onKey}>
          {abas.map((a) => (
            <button
              key={a.id}
              role="tab"
              type="button"
              id={`aba-${a.id}`}
              aria-selected={aba === a.id}
              aria-controls="painel-aba"
              tabIndex={aba === a.id ? 0 : -1}
              onClick={() => substituir(`${c.id}/${a.id}`)}
            >
              {a.rotulo}
              {a.n ? <span className="contagem num">{a.n}</span> : null}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ---------- Visão geral ---------- */
function VisaoGeral({ c }) {
  return (
    <div className="grade-2">
      <section className="caixa caixa-destaque" aria-labelledby="t-sit">
        <h2 id="t-sit" className="h-caixa">
          Situação judicial
        </h2>
        <Rico as="p" className="sit-titulo" texto={c.situacaoJudicial.titulo} />
        <Rico as="p" className="texto-2" texto={c.situacaoJudicial.texto} />
        <Fontes urls={c.situacaoJudicial.fontes} arquivo={c.dossie.arquivo} />
        <a className="botao-link" href={`#/${c.id}/casos`}>
          Ver todos os processos e casos
        </a>
      </section>
      <section className="caixa" aria-labelledby="t-ficha">
        <h2 id="t-ficha" className="h-caixa">
          Ficha
        </h2>
        <dl className="ficha">
          {c.ficha.map((f) => (
            <div key={f.rotulo}>
              <dt>{f.rotulo}</dt>
              <dd>
                <Rico texto={f.valor} /> <NaoVerificado verificado={f.verificado} />
                {f.fontes?.length > 0 && <Fontes urls={f.fontes} max={2} className="fontes-mini" />}
              </dd>
            </div>
          ))}
        </dl>
      </section>
      <section className="caixa caixa-larga" aria-labelledby="t-tl-mini">
        <h2 id="t-tl-mini" className="h-caixa">
          Marcos da trajetória
        </h2>
        <ol className="marcos-mini">
          {c.timeline
            .filter((e) => e.destaque)
            .sort((a, b) => ordemData(a.data) - ordemData(b.data))
            .map((e) => (
              <li key={e.data + e.titulo}>
                <span className="num">{formatarData(e.data, e.dataLabel)}</span>
                <span>{e.titulo}</span>
              </li>
            ))}
        </ol>
        <a className="botao-link" href={`#/linha-do-tempo?c=${c.id}`}>
          Abrir a linha do tempo completa de {c.nomeCurto}
        </a>
      </section>
    </div>
  )
}

/* ---------- Trajetória ---------- */
function Trajetoria({ c }) {
  const maxPct = 70
  return (
    <div className="pilha">
      <section aria-labelledby="t-fases">
        <h2 id="t-fases" className="h-aba">
          Fases da vida
        </h2>
        <ol className="fases-vida">
          {c.trajetoria.map((f, i) => (
            <li key={f.titulo}>
              <div className="fase-marca" aria-hidden="true">
                {i + 1}
              </div>
              <div className="fase-corpo">
                <p className="fase-periodo num">{f.periodo}</p>
                <h3>{f.titulo}</h3>
                <ul>
                  {f.itens.map((t) => (
                    <li key={t}>
                      <Rico texto={t} />
                    </li>
                  ))}
                </ul>
                <Fontes urls={f.fontes} arquivo={c.dossie.arquivo} />
              </div>
            </li>
          ))}
        </ol>
      </section>
      <section aria-labelledby="t-eleicoes">
        <h2 id="t-eleicoes" className="h-aba">
          Todas as eleições disputadas
        </h2>
        <p className="texto-2 aba-intro">A barra mostra o percentual de votos válidos, quando o dossiê informa.</p>
        <ul className="eleicoes">
          {c.eleicoes.map((e) => (
            <li key={e.ano + e.cargo} className={e.eleito === true ? 'eleito' : e.eleito === false ? 'nao-eleito' : 'aberto'}>
              <span className="eleicao-ano num">{e.ano}</span>
              <div className="eleicao-corpo">
                <div className="eleicao-topo">
                  <b>{e.cargo}</b>
                  <span className="texto-3">{e.partido}</span>
                  <span className="selo eleicao-selo">{e.eleito === true ? 'Eleito' : e.eleito === false ? 'Não eleito' : 'Em disputa / sem resultado'}</span>
                </div>
                <Rico as="p" className="texto-2" texto={e.resultado} />
                {typeof e.percentual === 'number' && (
                  <div className="eleicao-barra" aria-hidden="true">
                    <span style={{ width: `${Math.min(100, (e.percentual / maxPct) * 100)}%` }} />
                    <b className="num">{pct(e.percentual)}</b>
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}

/* ---------- Mandatos ---------- */
function Indicadores({ ind }) {
  if (!ind) return null
  return (
    <div className="tabela-rolagem">
      <table className="tabela indicadores">
        <thead>
          <tr>
            <th scope="col">Indicador</th>
            {ind.colunas.map((col) => (
              <th scope="col" key={col} className="num">
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {ind.linhas.map((l) => {
            const nums = l.valores.filter((v) => typeof v === 'number')
            const max = Math.max(...nums.map(Math.abs), 1)
            return (
              <tr key={l.rotulo}>
                <th scope="row">
                  {l.rotulo}
                  {l.unidade && <small className="texto-3"> ({l.unidade})</small>}
                </th>
                {l.valores.map((v, i) => (
                  <td key={i} className="num">
                    {typeof v === 'number' ? (
                      <span className="ind-celula">
                        <span className={`ind-barra ${v < 0 ? 'neg' : ''}`} style={{ width: `${(Math.abs(v) / max) * 100}%` }} aria-hidden="true" />
                        <span>{v.toLocaleString('pt-BR')}</span>
                      </span>
                    ) : (
                      v ?? '—'
                    )}
                  </td>
                ))}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

function Lista({ l }) {
  const [aberto, setAberto] = useState(l.itens.length <= 8)
  const itens = aberto ? l.itens : l.itens.slice(0, 6)
  return (
    <div className="lista-mandato">
      <h4>
        {l.titulo} <span className="contagem num">{l.itens.length}</span>
      </h4>
      <ul>
        {itens.map((it, i) => {
          const item = typeof it === 'string' ? { texto: it } : it
          return (
            <li key={i}>
              <Rico texto={item.texto} />
              {item.detalhe && <Rico as="span" className="lista-detalhe" texto={item.detalhe} />}
              <NaoVerificado verificado={item.verificado} />
            </li>
          )
        })}
      </ul>
      {l.itens.length > 8 && (
        <button type="button" className="botao-link" onClick={() => setAberto((a) => !a)} aria-expanded={aberto}>
          {aberto ? 'Mostrar menos' : `Mostrar todos os ${l.itens.length}`}
        </button>
      )}
    </div>
  )
}

function Mandatos({ c }) {
  const [aberto, setAberto] = useState(c.mandatos[0]?.id)
  return (
    <div className="pilha">
      {c.mandatos.map((m) => {
        const estaAberto = aberto === m.id
        return (
          <section key={m.id} className={`mandato ${estaAberto ? 'aberto' : ''}`}>
            <h2 className="mandato-h">
              <button type="button" aria-expanded={estaAberto} onClick={() => setAberto(estaAberto ? null : m.id)}>
                <span className="mandato-periodo num">{m.periodo}</span>
                <span className="mandato-titulo">
                  {m.titulo}
                  <small>{m.cargo}</small>
                </span>
                <ChevronDown className="seta" size={22} aria-hidden="true" />
              </button>
            </h2>
            <AnimatePresence initial={false}>
              {estaAberto && (
                <motion.div
                  className="mandato-corpo"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="mandato-in">
                    {m.resumo && <Rico as="p" className="mandato-resumo" texto={m.resumo} />}
                    {m.numeros?.length > 0 && (
                      <ul className="numeros">
                        {m.numeros.map((n) => (
                          <li key={n.rotulo}>
                            <b>{n.valor}</b>
                            <span>{n.rotulo}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    <Indicadores ind={m.indicadores} />
                    <div className="listas">
                      {m.listas?.map((l) => (
                        <Lista key={l.titulo} l={l} />
                      ))}
                    </div>
                    <Fontes urls={m.fontes} arquivo={c.dossie.arquivo} max={6} />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </section>
        )
      })}
    </div>
  )
}

/* ---------- Casos ---------- */
function CasoCard({ k, arquivo }) {
  const [aberto, setAberto] = useState(false)
  return (
    <article className={`caso ${aberto ? 'aberto' : ''} env-${k.envolvido}`}>
      <button type="button" className="caso-cab" aria-expanded={aberto} onClick={() => setAberto((a) => !a)}>
        <span className="caso-linha1">
          <span className="caso-periodo num">{k.periodo}</span>
          {k.grupo && k.grupo !== k.titulo && <span className="caso-grupo">{k.grupo}</span>}
          <StatusCaso status={k.status} />
        </span>
        <span className="caso-titulo">{k.titulo}</span>
        <span className="caso-pessoa">
          {k.envolvido === 'familiar' ? 'Familiar: ' : k.envolvido === 'aliado' ? 'Aliado: ' : 'Alvo: '}
          {k.pessoa}
        </span>
        <Rico as="span" className="caso-resumo" texto={k.resumo} />
        <FaseStepper fase={k.faseMaxima} />
        <span className="caso-mais">
          {aberto ? 'Fechar' : 'Acusação, defesa e desfecho'} <ChevronDown size={16} className="seta" aria-hidden="true" />
        </span>
      </button>
      <AnimatePresence initial={false}>
        {aberto && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.22 }} className="caso-corpo">
            <div className="caso-in">
              <div className="caso-tres">
                {k.alegacao && (
                  <div className="caso-bloco bloco-acusacao">
                    <h4>O que se alega</h4>
                    <Rico as="p" texto={k.alegacao} />
                  </div>
                )}
                {k.defesa && (
                  <div className="caso-bloco bloco-defesa">
                    <h4>O que diz a defesa</h4>
                    <Rico as="p" texto={k.defesa} />
                  </div>
                )}
                {k.desfecho && (
                  <div className="caso-bloco bloco-desfecho">
                    <h4>Situação</h4>
                    <Rico as="p" texto={k.desfecho} />
                  </div>
                )}
              </div>
              {k.marcos?.length > 0 && (
                <ol className="caso-marcos">
                  {k.marcos.map((mk) => (
                    <li key={mk.data + mk.texto}>
                      <span className="num">{formatarData(mk.data)}</span>
                      <Rico texto={mk.texto} />
                    </li>
                  ))}
                </ol>
              )}
              <NaoVerificado verificado={k.verificado} />
              <Fontes urls={k.fontes} arquivo={arquivo} max={6} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  )
}

function Casos({ c }) {
  const [env, setEnv] = useState('todos')
  const [grupo, setGrupo] = useState('todos')
  const [busca, setBusca] = useState('')
  const contEnv = (v) => c.casos.filter((k) => v === 'todos' || k.envolvido === v).length
  const envs = ['candidato', 'familiar', 'aliado'].filter((v) => contEnv(v) > 0)
  const filtrados = c.casos.filter(
    (k) =>
      (env === 'todos' || k.envolvido === env) &&
      (grupo === 'todos' || STATUS[k.status]?.grupo === grupo) &&
      (!busca || normalizar([k.titulo, k.resumo, k.alegacao, k.pessoa, k.grupo].join(' ')).includes(normalizar(busca)))
  )
  const porStatus = Object.entries(
    c.casos.reduce((acc, k) => {
      acc[k.status] = (acc[k.status] || 0) + 1
      return acc
    }, {})
  ).sort((a, b) => b[1] - a[1])

  return (
    <div className="pilha">
      <div className="aviso-leitura">
        <HelpCircle size={18} aria-hidden="true" />
        <p>
          Cada caso mostra até onde o processo chegou (de <b>citado</b> a <b>condenado</b>) e a situação atual. Acusação não é condenação; anulação ou prescrição não é
          absolvição de mérito. <a href="#/fontes">Como ler</a>
        </p>
      </div>
      <ul className="resumo-status" aria-label="Casos por situação">
        {porStatus.map(([s, n]) => (
          <li key={s}>
            <b className="num">{n}</b> <StatusCaso status={s} />
          </li>
        ))}
      </ul>
      <div className="filtros">
        {envs.length > 1 && (
          <Segmentado
            rotulo="Quem é o alvo"
            valor={env}
            onChange={setEnv}
            opcoes={[
              { valor: 'todos', rotulo: 'Todos', contagem: contEnv('todos') },
              ...envs.map((v) => ({ valor: v, rotulo: v === 'candidato' ? c.nomeCurto : v === 'familiar' ? 'Familiares' : 'Aliados', contagem: contEnv(v) })),
            ]}
          />
        )}
        <Segmentado
          rotulo="Situação"
          valor={grupo}
          onChange={setGrupo}
          opcoes={[
            { valor: 'todos', rotulo: 'Qualquer situação' },
            { valor: 'aberto', rotulo: 'Em curso' },
            { valor: 'encerrado', rotulo: 'Encerrados' },
          ]}
        />
        <label className="busca">
          <Search size={16} aria-hidden="true" />
          <span className="sr-only">Buscar nos casos</span>
          <input type="search" placeholder="Buscar caso" value={busca} onChange={(e) => setBusca(e.target.value)} />
        </label>
      </div>
      <p className="texto-3 num" aria-live="polite">
        {filtrados.length} {filtrados.length === 1 ? 'caso' : 'casos'}
      </p>
      <div className="casos">
        {filtrados.map((k) => (
          <CasoCard key={k.id} k={k} arquivo={c.dossie.arquivo} />
        ))}
        {!filtrados.length && <p className="vazio">Nenhum caso com esses filtros. Escolha "Todos" ou limpe a busca.</p>}
      </div>
    </div>
  )
}

/* ---------- Votações ---------- */
const GRUPOS_VOTO = {
  contra: 'Votou contra',
  a_favor: 'Votou a favor',
  indicacoes: 'Indicações ao STF e à PGR',
  ausencias: 'Ausências e sem registro',
  alerj: 'Na ALERJ',
}

function IconeVoto({ voto }) {
  if (voto === 'sim') return <Check size={14} aria-hidden="true" />
  if (voto === 'nao') return <X size={14} aria-hidden="true" />
  if (voto === 'ausente') return <Minus size={14} aria-hidden="true" />
  return <Lock size={14} aria-hidden="true" />
}

function Votacoes({ c }) {
  const v = c.votacoes
  const [grupo, setGrupo] = useState('todos')
  const [tema, setTema] = useState('todos')
  const [busca, setBusca] = useState('')
  const temas = [...new Set(v.itens.map((i) => i.tema).filter(Boolean))].sort()
  const grupos = Object.keys(GRUPOS_VOTO).filter((g) => v.itens.some((i) => i.grupo === g))
  const itens = v.itens
    .filter((i) => (grupo === 'todos' || i.grupo === grupo) && (tema === 'todos' || i.tema === tema) && (!busca || normalizar(i.materia + ' ' + i.resultado).includes(normalizar(busca))))
    .sort((a, b) => ordemData(b.data) - ordemData(a.data))
  const registroTotal = v.resumo.find((r) => /registros/i.test(r.rotulo))
  const partes = v.resumo.filter((r) => r !== registroTotal && typeof r.valor === 'number')
  const somaPartes = partes.reduce((s, r) => s + r.valor, 0)
  const totalResumo = registroTotal?.valor || somaPartes
  const resto = totalResumo - somaPartes

  return (
    <div className="pilha">
      <section className="caixa" aria-labelledby="t-api">
        <h2 id="t-api" className="h-caixa">
          O que a API do Senado registra
        </h2>
        {registroTotal && (
          <p className="texto-2">
            <b className="num">{registroTotal.valor.toLocaleString('pt-BR')}</b> {registroTotal.rotulo}, dos quais:
          </p>
        )}
        <div className="empilhada" role="img" aria-label={partes.map((r) => `${r.rotulo}: ${r.valor}`).join(', ')}>
          {partes.map((r, i) => (
            <span key={r.rotulo} className={`emp-seg emp-${i}`} style={{ width: `${(r.valor / totalResumo) * 100}%` }} />
          ))}
        </div>
        <ul className="emp-legenda">
          {partes.map((r, i) => (
            <li key={r.rotulo}>
              <span className={`legenda-bloco emp-${i}`} aria-hidden="true" />
              <b className="num">{typeof r.valor === 'number' ? r.valor.toLocaleString('pt-BR') : r.valor}</b> {r.rotulo}
              {typeof r.valor === 'number' && totalResumo > 0 && <span className="texto-3 num"> ({Math.round((r.valor / totalResumo) * 100)}%)</span>}
            </li>
          ))}
        </ul>
        {resto > 0 && <p className="texto-3">Os outros {resto} registros não são classificados no dossiê.</p>}
        {v.padrao?.length > 0 && (
          <>
            <h3 className="h-sub">Padrão de votos</h3>
            <ul className="lista-simples">
              {v.padrao.map((p) => (
                <li key={p}>
                  <Rico texto={p} />
                </li>
              ))}
            </ul>
          </>
        )}
      </section>

      <div className="filtros">
        <Segmentado
          rotulo="Tipo de voto"
          valor={grupo}
          onChange={setGrupo}
          opcoes={[{ valor: 'todos', rotulo: 'Todas', contagem: v.itens.length }, ...grupos.map((g) => ({ valor: g, rotulo: GRUPOS_VOTO[g], contagem: v.itens.filter((i) => i.grupo === g).length }))]}
        />
        <label className="seletor">
          <span>Tema</span>
          <select value={tema} onChange={(e) => setTema(e.target.value)}>
            <option value="todos">Todos os temas</option>
            {temas.map((t) => (
              <option key={t} value={t}>
                {t} ({v.itens.filter((i) => i.tema === t).length})
              </option>
            ))}
          </select>
        </label>
        <label className="busca">
          <Search size={16} aria-hidden="true" />
          <span className="sr-only">Buscar votação</span>
          <input type="search" placeholder="Buscar matéria" value={busca} onChange={(e) => setBusca(e.target.value)} />
        </label>
      </div>
      <p className="texto-3 num" aria-live="polite">
        {itens.length} votações
      </p>
      <ul className="votos">
        {itens.map((i) => (
          <li key={i.materia + i.data} className={`voto voto-${i.voto}`}>
            <span className="voto-selo">
              <IconeVoto voto={i.voto} />
              {i.votoTexto}
            </span>
            <div className="voto-corpo">
              <p className="voto-materia">
                <Rico texto={i.materia} />
              </p>
              <p className="texto-3">
                <span className="num">{formatarData(i.data)}</span>
                {i.tema && <span className="voto-tema">{i.tema}</span>}
                <span>{i.resultado}</span>
              </p>
              <NaoVerificado verificado={i.verificado} />
              <Fontes urls={i.fontes} max={2} className="fontes-mini" arquivo={c.dossie.arquivo} />
            </div>
          </li>
        ))}
        {!itens.length && <li className="vazio">Nenhuma votação com esses filtros. Escolha "Todas" ou limpe a busca.</li>}
      </ul>
    </div>
  )
}

/* ---------- Patrimônio ---------- */
function Patrimonio({ c }) {
  const s = c.patrimonio.serie
  const pri = s[0]
  const ult = s[s.length - 1]
  return (
    <div className="pilha">
      <ul className="numeros numeros-grandes">
        <li>
          <b>{reais(ult.valor, { compacto: true })}</b>
          <span>declarados em {ult.ano}</span>
        </li>
        <li>
          <b>{reais(pri.valor, { compacto: true })}</b>
          <span>na primeira declaração do dossiê ({pri.ano})</span>
        </li>
        <li>
          <b>{s.length}</b>
          <span>declarações ao TSE no dossiê</span>
        </li>
      </ul>
      <GraficoLinhas
        series={[{ id: c.id, nome: c.nomeCurto, classe: `c-${c.id}`, pontos: s }]}
        titulo={`Patrimônio declarado por ${c.nomeCurto}`}
        descricao="Valores nominais informados ao TSE, sem correção pela inflação."
      />
      {c.patrimonio.nota && <Rico as="p" className="texto-2" texto={c.patrimonio.nota} />}
      <ol className="patrimonio-lista">
        {[...s].reverse().map((p) => (
          <li key={p.ano}>
            <span className="num">{p.ano}</span>
            <b className="num">{reais(p.valor)}</b>
            {p.detalhe && <Rico as="span" className="texto-2" texto={p.detalhe} />}
          </li>
        ))}
      </ol>
      <Fontes urls={c.patrimonio.fontes} arquivo={c.dossie.arquivo} />
    </div>
  )
}

/* ---------- Polêmicas ---------- */
function Polemicas({ c }) {
  return (
    <div className="grade-cartoes">
      {c.polemicas.map((p) => (
        <article key={p.titulo} className="cartao">
          <p className="cartao-data num">{p.data}</p>
          <h3>{p.titulo}</h3>
          <Rico as="p" className="texto-2" texto={p.texto} />
          <NaoVerificado verificado={p.verificado} />
          <Fontes urls={p.fontes} arquivo={c.dossie.arquivo} />
        </article>
      ))}
    </div>
  )
}

/* ---------- Mais ---------- */
function Mais({ c }) {
  return (
    <div className="pilha">
      <div className="grade-cartoes">
        {c.extras?.map((x) => {
          const Icone = ICONES[x.icone] || Info
          return (
            <article key={x.titulo} className="cartao">
              <Icone size={22} className="cartao-icone" aria-hidden="true" />
              <h3>{x.titulo}</h3>
              <ul className="lista-simples">
                {x.itens.map((t) => (
                  <li key={t}>
                    <Rico texto={t} />
                  </li>
                ))}
              </ul>
              <Fontes urls={x.fontes} arquivo={c.dossie.arquivo} />
            </article>
          )
        })}
      </div>
      {c.lacunas?.length > 0 && (
        <section className="caixa" aria-labelledby="t-lacunas">
          <h2 id="t-lacunas" className="h-caixa">
            O que o dossiê não conseguiu confirmar
          </h2>
          <ol className="lista-simples lacunas">
            {c.lacunas.map((l) => (
              <li key={l}>
                <Rico texto={l} />
              </li>
            ))}
          </ol>
        </section>
      )}
      <section className="caixa" aria-labelledby="t-dossie">
        <h2 id="t-dossie" className="h-caixa">
          Dossiê original
        </h2>
        {c.dossie.metodo && <Rico as="p" className="texto-2" texto={c.dossie.metodo} />}
        <a className="botao" href={c.dossie.arquivo} target="_blank" rel="noopener noreferrer">
          <FileText size={18} aria-hidden="true" /> Abrir o dossiê completo de {c.nomeCurto}
        </a>
      </section>
    </div>
  )
}

const PAINEIS = { 'visao-geral': VisaoGeral, trajetoria: Trajetoria, mandatos: Mandatos, casos: Casos, votacoes: Votacoes, patrimonio: Patrimonio, polemicas: Polemicas, mais: Mais }

export default function Candidato({ id, aba: abaUrl }) {
  const c = candidatos[id]
  const abas = useMemo(() => abasDe(c), [c])
  const aba = abas.some((a) => a.id === abaUrl) ? abaUrl : 'visao-geral'
  const topoRef = useRef()
  const primeira = useRef(true)

  useEffect(() => {
    if (primeira.current) {
      primeira.current = false
      return
    }
    const alvo = topoRef.current
    const topoH = document.querySelector('.topo')?.offsetHeight || 0
    if (alvo && alvo.getBoundingClientRect().top < topoH) window.scrollTo({ top: alvo.getBoundingClientRect().top + window.scrollY - topoH })
  }, [aba])

  useEffect(() => {
    document.title = `${c.nomeCurto}: dossiê 2º turno 2026`
  }, [c])

  const Painel = PAINEIS[aba]
  return (
    <div className={`pagina-cand c-${c.id}`}>
      <Cabecalho c={c} />
      <div ref={topoRef} className="ancora-abas" />
      <Abas c={c} aba={aba} />
      <div className="container painel" id="painel-aba" role="tabpanel" aria-labelledby={`aba-${aba}`}>
        <Painel c={c} />
      </div>
    </div>
  )
}
