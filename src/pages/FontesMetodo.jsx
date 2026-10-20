import { useEffect, useMemo, useState } from 'react'
import { ExternalLink, FileText, Search } from 'lucide-react'
import { lista } from '../data/index.js'
import { primeiroTurno, pesquisas, apoios, agenda } from '../data/eleicao.js'
import { StatusCaso, TagConfianca, NaoVerificado } from '../components/ui.jsx'
import { FASES, STATUS, TAGS } from '../lib/constantes.js'
import { dominio, normalizar } from '../lib/format.js'

function coletarUrls(obj, saida = new Set()) {
  if (typeof obj === 'string') {
    if (/^https?:\/\//.test(obj)) saida.add(obj)
  } else if (Array.isArray(obj)) obj.forEach((o) => coletarUrls(o, saida))
  else if (obj && typeof obj === 'object') Object.values(obj).forEach((o) => coletarUrls(o, saida))
  return saida
}

function legivel(url) {
  const sem = url.replace(/^https?:\/\/(www\d*\.)?/, '')
  try {
    return decodeURIComponent(sem).slice(0, 140)
  } catch {
    return sem.slice(0, 140)
  }
}

export default function FontesMetodo() {
  const [busca, setBusca] = useState('')
  useEffect(() => {
    document.title = 'Fontes e método: dossiê 2º turno 2026'
  }, [])

  const dominios = useMemo(() => {
    const porUrl = new Map()
    for (const c of lista) for (const u of coletarUrls(c)) porUrl.set(u, new Set([...(porUrl.get(u) || []), c.id]))
    for (const u of coletarUrls([primeiroTurno, pesquisas, apoios, agenda])) porUrl.set(u, new Set([...(porUrl.get(u) || []), 'eleicao']))
    const m = new Map()
    for (const [u, cs] of porUrl) {
      const d = dominio(u)
      if (!m.has(d)) m.set(d, [])
      m.get(d).push({ url: u, cs: [...cs] })
    }
    return [...m.entries()].map(([d, urls]) => ({ d, urls: urls.sort((a, b) => a.url.localeCompare(b.url)) })).sort((a, b) => b.urls.length - a.urls.length || a.d.localeCompare(b.d))
  }, [])

  const total = dominios.reduce((s, d) => s + d.urls.length, 0)
  const q = normalizar(busca)
  const filtrados = q
    ? dominios.map((d) => ({ ...d, urls: d.urls.filter((u) => normalizar(u.url).includes(q)) })).filter((d) => d.urls.length || normalizar(d.d).includes(q))
    : dominios

  return (
    <div className="pagina-fontes">
      <header className="tempo-cab">
        <div className="container">
          <h1>Fontes e método</h1>
          <p className="texto-2 tempo-sub">
            Como os dossiês foram feitos, como ler as marcações do site e a lista completa dos {total} links citados.
          </p>
        </div>
      </header>

      <div className="container pilha secao-fontes">
        <section className="grade-2">
          {lista.map((c) => (
            <article key={c.id} className={`caixa c-${c.id} caixa-cand`}>
              <h2 className="h-caixa">Dossiê de {c.nomeCurto}</h2>
              <p className="texto-2">Data de referência: {c.dossie.dataReferencia}.</p>
              {c.dossie.metodo && <p className="texto-2">{c.dossie.metodo}</p>}
              <a className="botao" href={c.dossie.arquivo} target="_blank" rel="noopener noreferrer">
                <FileText size={18} aria-hidden="true" /> Abrir o dossiê completo
              </a>
            </article>
          ))}
        </section>

        <section className="caixa" aria-labelledby="t-ler">
          <h2 id="t-ler" className="h-caixa">
            Como ler os processos
          </h2>
          <p className="texto-2">
            Os dossiês distinguem cada etapa. Ser citado ou investigado não é ser acusado formalmente; ser denunciado ou réu não é ser condenado. Uma condenação anulada,
            prescrita ou trancada também não equivale a absolvição de mérito.
          </p>
          <ol className="legenda-fases">
            {FASES.map((f) => (
              <li key={f.id}>{f.rotulo}</li>
            ))}
          </ol>
          <h3 className="h-sub">Situação atual de cada caso</h3>
          <ul className="legenda-status">
            {Object.keys(STATUS).map((s) => (
              <li key={s}>
                <StatusCaso status={s} />
              </li>
            ))}
          </ul>
        </section>

        <section className="caixa" aria-labelledby="t-conf">
          <h2 id="t-conf" className="h-caixa">
            Marcações de confiabilidade
          </h2>
          <ul className="legenda-tags">
            {Object.entries(TAGS).map(([k, v]) => (
              <li key={k}>
                <TagConfianca tag={k} /> <span className="texto-2">{v.titulo}</span>
              </li>
            ))}
            <li>
              <NaoVerificado verificado={false} /> <span className="texto-2">Dado que o próprio dossiê não conseguiu reconfirmar ou que vem de fonte única.</span>
            </li>
          </ul>
          <p className="texto-3">
            O site apresenta os candidatos pela ordem do número na urna (13 e 22). Cores identificam cada candidato e não expressam juízo de valor.
          </p>
        </section>

        <section aria-labelledby="t-indice">
          <div className="secao-cab">
            <h2 id="t-indice">Índice de fontes</h2>
            <p>
              {total} links em {dominios.length} veículos e bases oficiais, agrupados por site.
            </p>
          </div>
          <label className="busca busca-larga">
            <Search size={16} aria-hidden="true" />
            <span className="sr-only">Buscar fonte</span>
            <input type="search" placeholder="Filtrar por site ou endereço" value={busca} onChange={(e) => setBusca(e.target.value)} />
          </label>
          <div className="indice">
            {filtrados.map(({ d, urls }) => (
              <details key={d} className="indice-dominio">
                <summary>
                  <span>{d}</span>
                  <span className="contagem num">{urls.length}</span>
                </summary>
                <ul>
                  {urls.map(({ url, cs }) => (
                    <li key={url}>
                      <a href={url} target="_blank" rel="noopener noreferrer">
                        {legivel(url)}
                        <ExternalLink size={12} aria-hidden="true" />
                      </a>
                      <span className="indice-cands">
                        {cs.map((cid) => (
                          <span key={cid} className={`indice-cand c-${cid}`}>
                            {cid === 'eleicao' ? 'eleição' : cid === 'lula' ? 'Lula' : 'Flávio'}
                          </span>
                        ))}
                      </span>
                    </li>
                  ))}
                </ul>
              </details>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
