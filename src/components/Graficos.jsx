import { useMemo, useRef, useState } from 'react'
import { reais, pct, formatarData } from '../lib/format.js'
import { useLargura, passoBonito } from '../lib/graficos.js'

function eixoReais(v) {
  if (v === 0) return 'R$ 0'
  if (v >= 1e6) return `R$ ${(v / 1e6).toLocaleString('pt-BR', { maximumFractionDigits: 1 })} mi`
  return `R$ ${(v / 1e3).toLocaleString('pt-BR', { maximumFractionDigits: 0 })} mil`
}

/**
 * Linhas por ano (patrimônio declarado). series: [{ id, nome, classe, pontos: [{ ano, valor, detalhe }] }]
 */
export function GraficoLinhas({ series, titulo, descricao, altura = 300 }) {
  const ref = useRef()
  const w = useLargura(ref)
  const [hover, setHover] = useState(null)
  const [tabela, setTabela] = useState(false)
  const m = { t: 16, r: w < 480 ? 64 : 96, b: 32, l: 64 }
  const iw = w - m.l - m.r
  const ih = altura - m.t - m.b

  const anos = useMemo(() => [...new Set(series.flatMap((s) => s.pontos.map((p) => p.ano)))].sort((a, b) => a - b), [series])
  const minA = anos[0]
  const maxA = anos[anos.length - 1]
  const maxV = Math.max(...series.flatMap((s) => s.pontos.map((p) => p.valor)))
  const passo = passoBonito(maxV)
  const topo = Math.ceil(maxV / passo) * passo
  const x = (a) => m.l + ((a - minA) / (maxA - minA || 1)) * iw
  const y = (v) => m.t + ih - (v / topo) * ih
  const ticksY = Array.from({ length: Math.round(topo / passo) + 1 }, (_, i) => i * passo)
  const passoX = w < 480 ? 8 : 4
  const ticksX = []
  for (let a = Math.ceil(minA / passoX) * passoX; a <= maxA; a += passoX) ticksX.push(a)

  function mover(e) {
    const r = e.currentTarget.getBoundingClientRect()
    const px = ((e.clientX - r.left) / r.width) * w
    let melhor = anos[0]
    for (const a of anos) if (Math.abs(x(a) - px) < Math.abs(x(melhor) - px)) melhor = a
    setHover(melhor)
  }

  const linhasHover = hover != null ? series.map((s) => ({ s, p: s.pontos.find((p) => p.ano === hover) })).filter((d) => d.p) : []
  const tipEsq = hover != null && x(hover) > w / 2

  return (
    <figure className="grafico">
      <figcaption className="grafico-cab">
        <div>
          <h3>{titulo}</h3>
          {descricao && <p className="texto-2">{descricao}</p>}
        </div>
        {series.length > 1 && (
          <ul className="legenda" aria-label="Legenda">
            {series.map((s) => (
              <li key={s.id} className={s.classe}>
                <span className="legenda-traco" aria-hidden="true" /> {s.nome}
              </li>
            ))}
          </ul>
        )}
      </figcaption>
      <div className="grafico-area" ref={ref}>
        {!tabela ? (
          <>
            <svg
              width={w}
              height={altura}
              viewBox={`0 0 ${w} ${altura}`}
              role="img"
              aria-label={`${titulo}. Use "Ver tabela" para os valores.`}
              onPointerMove={mover}
              onPointerDown={mover}
              onPointerLeave={() => setHover(null)}
            >
              {ticksY.map((t) => (
                <g key={t}>
                  <line x1={m.l} x2={w - m.r} y1={y(t)} y2={y(t)} className="grade" />
                  <text x={m.l - 8} y={y(t)} className="eixo" textAnchor="end" dominantBaseline="middle">
                    {eixoReais(t)}
                  </text>
                </g>
              ))}
              {ticksX.map((a) => (
                <text key={a} x={x(a)} y={altura - 8} className="eixo" textAnchor="middle">
                  {a}
                </text>
              ))}
              {hover != null && <line x1={x(hover)} x2={x(hover)} y1={m.t} y2={m.t + ih} className="mira" />}
              {series.map((s) => {
                const pts = [...s.pontos].sort((a, b) => a.ano - b.ano)
                const d = pts.map((p, i) => `${i ? 'L' : 'M'}${x(p.ano)},${y(p.valor)}`).join(' ')
                const ult = pts[pts.length - 1]
                return (
                  <g key={s.id} className={`serie ${s.classe}`}>
                    <path d={`${d} L${x(ult.ano)},${y(0)} L${x(pts[0].ano)},${y(0)} Z`} className="serie-area" />
                    <path d={d} className="serie-linha" />
                    {pts.map((p) => (
                      <circle key={p.ano} cx={x(p.ano)} cy={y(p.valor)} r={hover === p.ano ? 6 : 4} className="serie-ponto" />
                    ))}
                    <text x={x(ult.ano) + 10} y={y(ult.valor)} className="rotulo-fim" dominantBaseline="middle">
                      {series.length > 1 && (
                        <tspan x={x(ult.ano) + 10} dy="-0.5em" className="rotulo-nome">
                          {s.nome}
                        </tspan>
                      )}
                      <tspan x={x(ult.ano) + 10} dy={series.length > 1 ? '1.2em' : '0'}>
                        {reais(ult.valor, { compacto: true })}
                      </tspan>
                    </text>
                  </g>
                )
              })}
            </svg>
            {hover != null && linhasHover.length > 0 && (
              <div className="dica" style={{ left: tipEsq ? undefined : x(hover) + 12, right: tipEsq ? w - x(hover) + 12 : undefined, top: m.t }}>
                <strong className="num">{hover}</strong>
                {linhasHover.map(({ s, p }) => (
                  <div key={s.id} className={`dica-linha ${s.classe}`}>
                    <span className="legenda-traco" aria-hidden="true" />
                    <span>{s.nome}</span>
                    <b className="num">{reais(p.valor)}</b>
                    {p.detalhe && <small>{p.detalhe}</small>}
                  </div>
                ))}
              </div>
            )}
          </>
        ) : (
          <TabelaSeries series={series} anos={anos} />
        )}
      </div>
      <button type="button" className="botao-link" onClick={() => setTabela((t) => !t)}>
        {tabela ? 'Ver gráfico' : 'Ver tabela'}
      </button>
    </figure>
  )
}

function TabelaSeries({ series, anos }) {
  return (
    <div className="tabela-rolagem">
      <table className="tabela">
        <thead>
          <tr>
            <th scope="col">Ano</th>
            {series.map((s) => (
              <th key={s.id} scope="col">
                {s.nome}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {anos.map((a) => (
            <tr key={a}>
              <th scope="row" className="num">
                {a}
              </th>
              {series.map((s) => {
                const p = s.pontos.find((p) => p.ano === a)
                return (
                  <td key={s.id} className="num">
                    {p ? reais(p.valor) : '—'}
                    {p?.detalhe && <small className="texto-3">{p.detalhe}</small>}
                  </td>
                )
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

/** Barra 100% do 1º turno */
export function BarraPrimeiroTurno({ dados }) {
  const [ativo, setAtivo] = useState(null)
  const outros = dados.candidatos.filter((c) => !c.id)
  const outrosPct = outros.reduce((s, c) => s + c.percentual, 0)
  const segmentos = [
    ...dados.candidatos.filter((c) => c.id).map((c) => ({ ...c, classe: `c-${c.id}` })),
    { nome: 'Outros 4 candidatos', percentual: outrosPct, classe: 'c-outros', detalhe: outros.map((o) => `${o.nome} (${o.partido}) ${pct(o.percentual)}`).join('; ') },
  ]
  return (
    <div className="barra-turno">
      <div className="barra-turno-trilho" role="img" aria-label={segmentos.map((s) => `${s.nome}: ${pct(s.percentual)}`).join(', ')}>
        {segmentos.map((s) => (
          <button
            type="button"
            key={s.nome}
            className={`barra-seg ${s.classe} ${ativo === s.nome ? 'ativo' : ''}`}
            style={{ flexBasis: `${s.percentual}%` }}
            onMouseEnter={() => setAtivo(s.nome)}
            onMouseLeave={() => setAtivo(null)}
            onFocus={() => setAtivo(s.nome)}
            onBlur={() => setAtivo(null)}
            aria-label={`${s.nome}: ${pct(s.percentual)}`}
          />
        ))}
        <span className="barra-meio" aria-hidden="true" />
      </div>
      <ul className="barra-turno-rotulos">
        {segmentos.map((s) => (
          <li key={s.nome} className={`${s.classe} ${ativo === s.nome ? 'ativo' : ''}`}>
            <span className="legenda-bloco" aria-hidden="true" />
            <span className="barra-nome">
              {s.nome} {s.partido && <span className="texto-3">{s.partido}</span>}
            </span>
            <b className="barra-pct">{pct(s.percentual)}</b>
            {s.votos && <span className="texto-3 num">{s.votos.toLocaleString('pt-BR')} votos</span>}
            {s.detalhe && <span className="texto-3 barra-detalhe">{s.detalhe}</span>}
          </li>
        ))}
      </ul>
    </div>
  )
}

/** Halteres: uma linha por pesquisa, Lula x Flávio */
export function GraficoPesquisas({ pesquisas, nomes }) {
  const [tipo, setTipo] = useState('todos')
  const lista = pesquisas.filter((p) => tipo === 'todos' || p.tipo === tipo)
  const min = 40
  const max = 56
  const pos = (v) => `${((v - min) / (max - min)) * 100}%`
  const ticks = [40, 44, 48, 52, 56]
  return (
    <figure className="grafico pesquisas">
      <figcaption className="grafico-cab">
        <div>
          <h3>Pesquisas do 2º turno</h3>
          <p className="texto-2">Cada linha é uma pesquisa divulgada em outubro. A escala começa em 40% para mostrar a distância entre os dois.</p>
        </div>
        <ul className="legenda" aria-label="Legenda">
          <li className="c-lula">
            <span className="legenda-ponto" aria-hidden="true" /> {nomes.lula}
          </li>
          <li className="c-flavio">
            <span className="legenda-ponto" aria-hidden="true" /> {nomes.flavio}
          </li>
        </ul>
      </figcaption>
      <div className="filtros-linha" role="radiogroup" aria-label="Tipo de pesquisa">
        {[
          ['todos', 'Todas'],
          ['total', 'Votos totais'],
          ['validos', 'Votos válidos'],
        ].map(([v, r]) => (
          <button key={v} type="button" role="radio" aria-checked={tipo === v} className={`chip ${tipo === v ? 'ativo' : ''}`} onClick={() => setTipo(v)}>
            {r}
          </button>
        ))}
      </div>
      <div className="halteres">
        <div className="halteres-eixo" aria-hidden="true">
          {ticks.map((t) => (
            <span key={t} style={{ left: pos(t) }}>
              {t}%
            </span>
          ))}
        </div>
        <ul>
          {lista.map((p) => {
            const lider = p.flavio > p.lula ? 'flavio' : 'lula'
            return (
              <li key={p.instituto + p.data} className="haltere">
                <div className="haltere-info">
                  <b>{p.instituto}</b>
                  <span className="texto-3">
                    {formatarData(p.data).slice(0, 5)}, {p.tipo === 'validos' ? 'válidos' : 'totais'}
                  </span>
                </div>
                <div className="haltere-trilho">
                  {ticks.map((t) => (
                    <span key={t} className="haltere-grade" style={{ left: pos(t) }} aria-hidden="true" />
                  ))}
                  <span
                    className={`haltere-barra c-${lider}`}
                    style={{ left: pos(Math.min(p.lula, p.flavio)), width: `calc(${pos(Math.max(p.lula, p.flavio))} - ${pos(Math.min(p.lula, p.flavio))})` }}
                    aria-hidden="true"
                  />
                  <span className={`haltere-ponto c-lula ${p.lula < p.flavio ? 'esq' : 'dir'}`} style={{ left: pos(p.lula) }} title={`${nomes.lula}: ${p.lula}%`}>
                    <span className="haltere-valor">{p.lula.toLocaleString('pt-BR')}</span>
                  </span>
                  <span className={`haltere-ponto c-flavio ${p.flavio < p.lula ? 'esq' : 'dir'}`} style={{ left: pos(p.flavio) }} title={`${nomes.flavio}: ${p.flavio}%`}>
                    <span className="haltere-valor">{p.flavio.toLocaleString('pt-BR')}</span>
                  </span>
                </div>
                <span className="sr-only">
                  {nomes.lula} {p.lula}%, {nomes.flavio} {p.flavio}%. {p.obs}
                </span>
              </li>
            )
          })}
        </ul>
      </div>
    </figure>
  )
}
