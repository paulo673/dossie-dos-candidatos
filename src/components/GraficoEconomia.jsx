import { useMemo, useRef, useState } from 'react'
import { useLargura, passoBonito } from '../lib/graficos.js'
import { FASES, faseDoAno, presidentesDoAno, fmtValor } from '../data/economia/index.js'

// cores das séries de linha (texto e realce do site; as fases ficam no fundo)
const CORES_LINHA = ['var(--ink)', 'var(--sol)', 'var(--flavio-claro)']

// escala log simétrica (inflação, juros, câmbio): aceita deflação e cabe a hiperinflação
const logT = (v) => Math.sign(v) * Math.log10(1 + Math.abs(v) / 10)

function ticksLog(min, max) {
  const cands = [-20, -10, 0, 10, 30, 100, 300, 1000, 3000, 10000, 30000]
  return cands.filter((t) => t >= Math.min(0, min) - 1e-9 && t <= Math.max(10, max) * 1.02)
}

/**
 * Gráfico anual com faixas de fase ao fundo.
 * ind: { tipo: 'barras'|'linhas', log?, series: [{ id, nome, dados }], unidade, casas }
 */
export default function GraficoEconomia({ ind, inicio, fim, anoSel, onAno, altura = 320 }) {
  const ref = useRef()
  const w = useLargura(ref, 700)
  const [hover, setHover] = useState(null)
  const estreito = w < 520
  const m = { t: 26, r: ind.tipo === 'linhas' ? (estreito ? 52 : 84) : 12, b: 28, l: estreito ? 44 : 56 }
  const iw = w - m.l - m.r
  const ih = altura - m.t - m.b

  const series = useMemo(
    () =>
      ind.series.map((s, i) => ({
        ...s,
        cor: CORES_LINHA[i % CORES_LINHA.length],
        // anos parciais (2026) ficam só na tabela e no painel do ano
        pontos: s.dados.filter((d) => d.ano >= inicio && d.ano <= fim && d.valor != null && !d.parcial).sort((a, b) => a.ano - b.ano),
      })),
    [ind, inicio, fim]
  )
  const todos = series.flatMap((s) => s.pontos)
  const n = fim - inicio + 1
  const banda = iw / n
  const x = (a) => m.l + (a - inicio + 0.5) * banda

  // domínio y
  const vals = todos.map((p) => p.valor)
  const minV = vals.length ? Math.min(...vals) : 0
  const maxV = vals.length ? Math.max(...vals) : 1
  let y, ticks, base
  if (ind.log) {
    const tmin = logT(Math.min(0, minV, ...ticksLog(minV, maxV)))
    const tmax = logT(Math.max(10, maxV))
    y = (v) => m.t + ih - ((logT(v) - tmin) / (tmax - tmin || 1)) * ih
    ticks = ticksLog(minV, maxV)
    base = y(0)
  } else {
    const zeroNaBase = ind.zero !== false || minV <= 0
    const lo = zeroNaBase ? Math.min(0, minV) : minV
    const hi = Math.max(zeroNaBase ? 0 : lo, maxV)
    const passo = passoBonito(Math.max(hi - lo, 1e-9), estreito ? 4 : 5)
    const topo = Math.ceil(hi / passo) * passo
    const piso = Math.floor(lo / passo) * passo
    y = ind.inverter ? (v) => m.t + ((v - piso) / (topo - piso || 1)) * ih : (v) => m.t + ih - ((v - piso) / (topo - piso || 1)) * ih
    ticks = []
    for (let t = piso; t <= topo + passo / 2; t += passo) ticks.push(Math.round(t * 1e6) / 1e6)
    base = y(Math.max(piso, Math.min(0, topo)))
  }

  const passoX = n > 100 ? (estreito ? 25 : 10) : n > 40 ? (estreito ? 10 : 5) : n > 15 ? (estreito ? 4 : 2) : 1
  const ticksX = []
  for (let a = Math.ceil(inicio / passoX) * passoX; a <= fim; a += passoX) ticksX.push(a)

  const fases = FASES.map((f) => ({ ...f, a0: Math.max(inicio, f.anoInicio), a1: Math.min(fim, f.anoFim) })).filter((f) => f.a0 <= f.a1)

  function anoDoPonteiro(e) {
    const r = e.currentTarget.getBoundingClientRect()
    const px = ((e.clientX - r.left) / r.width) * w
    return Math.max(inicio, Math.min(fim, inicio + Math.floor((px - m.l) / banda)))
  }

  const ativo = hover ?? anoSel
  const valoresAtivo = ativo != null ? series.map((s) => ({ s, p: s.pontos.find((p) => p.ano === ativo) })) : []
  const temValor = valoresAtivo.some((v) => v.p)
  const tipEsq = ativo != null && x(ativo) > w * 0.55
  const larguraBarra = Math.max(1, banda - (banda > 6 ? 2 : banda > 3 ? 1 : 0))

  function caminho(pts) {
    // quebra a linha em lacunas maiores que 12 anos (ex.: séries de censo seguem ligadas)
    let d = ''
    pts.forEach((p, i) => {
      const novo = i === 0 || p.ano - pts[i - 1].ano > 12
      d += `${novo ? 'M' : 'L'}${x(p.ano).toFixed(1)},${y(p.valor).toFixed(1)}`
    })
    return d
  }

  const fmt = (v) => fmtValor(v, ind)

  // rótulos no fim de cada linha, afastados para não se sobreporem
  const rotulos = (() => {
    if (ind.tipo !== 'linhas') return {}
    const altRot = series.length > 1 && !estreito ? 28 : 15
    const ls = series
      .filter((sr) => sr.pontos.length)
      .map((sr) => {
        const ult = sr.pontos[sr.pontos.length - 1]
        return { id: sr.id, ult, x: x(ult.ano), y: y(ult.valor) }
      })
      .sort((a, b) => a.y - b.y)
    for (let i = 1; i < ls.length; i++) {
      const ant = ls[i - 1]
      if (Math.abs(ls[i].x - ant.x) < 60 && ls[i].y - ant.y < altRot) ls[i].y = ant.y + altRot
    }
    return Object.fromEntries(ls.map((l) => [l.id, l]))
  })()

  return (
    <div className="geco" ref={ref}>
      <svg
        width={w}
        height={altura}
        viewBox={`0 0 ${w} ${altura}`}
        role="img"
        aria-label={`${ind.rotulo}, ${inicio} a ${fim}. Toque num ano para ver detalhes; a tabela tem todos os valores.`}
        tabIndex={0}
        onPointerMove={(e) => setHover(anoDoPonteiro(e))}
        onPointerLeave={() => setHover(null)}
        onClick={(e) => onAno?.(anoDoPonteiro(e))}
        onKeyDown={(e) => {
          const a = anoSel ?? fim
          if (e.key === 'ArrowRight') onAno?.(Math.min(fim, a + 1))
          if (e.key === 'ArrowLeft') onAno?.(Math.max(inicio, a - 1))
        }}
      >
        {fases.map((f) => {
          const x0 = m.l + (f.a0 - inicio) * banda
          const x1 = m.l + (f.a1 - inicio + 1) * banda
          const larg = x1 - x0
          return (
            <g key={f.id} style={{ '--f': f.cor }}>
              <rect x={x0} y={m.t - 18} width={larg} height={ih + 18} className="geco-fase" />
              <rect x={x0} y={m.t - 18} width={larg} height={3} className="geco-fase-topo" />
              {larg > (estreito ? 54 : 80) && (
                <text x={x0 + 6} y={m.t - 6} className="geco-fase-rot">
                  {larg > 150 ? f.nome : f.curto}
                </text>
              )}
            </g>
          )
        })}
        {ticks.map((t) => (
          <g key={t}>
            <line x1={m.l} x2={w - m.r} y1={y(t)} y2={y(t)} className={t === 0 ? 'grade grade-zero' : 'grade'} />
            <text x={m.l - 6} y={y(t)} className="eixo" textAnchor="end" dominantBaseline="middle">
              {fmtValor(t, { ...ind, eixo: true })}
            </text>
          </g>
        ))}
        {ticksX.map((a) => (
          <text key={a} x={x(a)} y={altura - 8} className="eixo" textAnchor="middle">
            {a}
          </text>
        ))}
        {ativo != null && <rect x={x(ativo) - banda / 2} y={m.t} width={banda} height={ih} className="geco-coluna" />}

        {ind.tipo === 'barras'
          ? series[0]?.pontos.map((p) => {
              const f = faseDoAno(p.ano)
              const yv = y(p.valor)
              const topo = Math.min(yv, base)
              const h = Math.max(1, Math.abs(yv - base))
              return (
                <rect
                  key={p.ano}
                  x={x(p.ano) - larguraBarra / 2}
                  y={topo}
                  width={larguraBarra}
                  height={h}
                  rx={larguraBarra > 6 ? 2 : 0}
                  className={`geco-barra ${p.estimado ? 'estimado' : ''} ${p.ano === ativo ? 'ativo' : ''}`}
                  style={{ '--f': f?.cor }}
                />
              )
            })
          : series.map((s) => (
              <g key={s.id} style={{ '--c': s.cor }}>
                <path d={caminho(s.pontos)} className="geco-linha" />
                {s.pontos.length < 45 &&
                  s.pontos.map((p) => <circle key={p.ano} cx={x(p.ano)} cy={y(p.valor)} r={3.5} className={`geco-ponto ${p.estimado ? 'estimado' : ''}`} />)}
                {rotulos[s.id] &&
                  (() => {
                    const { ult, y: yr } = rotulos[s.id]
                    return (
                      <text x={x(ult.ano) + 8} y={yr} className="rotulo-fim" dominantBaseline="middle">
                        {series.length > 1 && !estreito && (
                          <tspan x={x(ult.ano) + 8} dy="-0.55em" className="rotulo-nome">
                            {s.curto || s.nome}
                          </tspan>
                        )}
                        <tspan x={x(ult.ano) + 8} dy={series.length > 1 && !estreito ? '1.2em' : 0}>
                          {fmt(ult.valor)}
                        </tspan>
                      </text>
                    )
                  })()}
              </g>
            ))}
        {ind.tipo === 'linhas' &&
          ativo != null &&
          valoresAtivo.map(({ s, p }) => p && <circle key={s.id} cx={x(p.ano)} cy={y(p.valor)} r={6} className="geco-ponto-ativo" style={{ '--c': s.cor }} />)}
        {anoSel != null && anoSel >= inicio && anoSel <= fim && <line x1={x(anoSel)} x2={x(anoSel)} y1={m.t} y2={m.t + ih} className="geco-sel" />}
      </svg>
      {ativo != null && (
        <div className="dica geco-dica" style={{ left: tipEsq ? undefined : x(ativo) + banda / 2 + 10, right: tipEsq ? w - x(ativo) + banda / 2 + 10 : undefined, top: m.t }}>
          <strong className="num">{ativo}</strong>
          {valoresAtivo.map(({ s, p }) => (
            <div key={s.id} className="dica-linha" style={{ '--c': s.cor }}>
              {series.length > 1 ? <span className="legenda-traco legenda-traco-escuro" aria-hidden="true" /> : <span />}
              <span>{series.length > 1 ? s.curto || s.nome : ind.rotuloCurto || ind.rotulo}</span>
              <b className="num">{p ? fmt(p.valor) : 's/ dado'}</b>
              {p?.estimado && <small>estimativa</small>}
            </div>
          ))}
          {!temValor && <small className="geco-dica-sem">Sem dado para este ano.</small>}
          <small className="geco-dica-pres">
            {presidentesDoAno(ativo)
              .map((p) => p.nomeCurto)
              .join(', ')}
            {faseDoAno(ativo) ? ` · ${faseDoAno(ativo).nome}` : ''}
          </small>
        </div>
      )}
    </div>
  )
}
