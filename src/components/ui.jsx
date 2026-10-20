import { ExternalLink, FileText, AlertTriangle, Scale } from 'lucide-react'
import { dominio } from '../lib/format.js'
import { FASES, STATUS, TAGS } from '../lib/constantes.js'

export function Fontes({ urls = [], arquivo, rotulo = 'Fonte', max = 4, className = '' }) {
  const lista = [...new Set(urls.filter(Boolean))]
  const visiveis = lista.slice(0, max)
  const resto = lista.slice(max)
  if (!lista.length && !arquivo) return null
  return (
    <div className={`fontes ${className}`}>
      <span className="fontes-rotulo">{rotulo === 'Fonte' && lista.length > 1 ? 'Fontes' : rotulo}</span>
      <ul>
        {visiveis.map((u) => (
          <li key={u}>
            <a href={u} target="_blank" rel="noopener noreferrer" title={u}>
              {dominio(u)}
              <ExternalLink size={12} aria-hidden="true" />
              <span className="sr-only"> (abre em nova aba)</span>
            </a>
          </li>
        ))}
        {resto.length > 0 && (
          <li>
            <details className="fontes-mais">
              <summary>+{resto.length}</summary>
              <ul>
                {resto.map((u) => (
                  <li key={u}>
                    <a href={u} target="_blank" rel="noopener noreferrer" title={u}>
                      {dominio(u)}
                      <ExternalLink size={12} aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
            </details>
          </li>
        )}
        {!lista.length && arquivo && (
          <li>
            <a href={arquivo} target="_blank" rel="noopener noreferrer">
              dossiê completo
              <FileText size={12} aria-hidden="true" />
            </a>
          </li>
        )}
      </ul>
    </div>
  )
}

export function NaoVerificado({ verificado }) {
  if (verificado !== false) return null
  return (
    <span className="selo selo-nv" title="O dossiê marca este dado como não verificado ou de fonte única">
      <AlertTriangle size={12} aria-hidden="true" /> não verificado
    </span>
  )
}

export function StatusCaso({ status }) {
  const s = STATUS[status] || { rotulo: status, icone: Scale, classe: 'st-encerrado' }
  const Icone = s.icone
  return (
    <span className={`selo ${s.classe}`}>
      <Icone size={13} aria-hidden="true" /> {s.rotulo}
    </span>
  )
}

export function FaseStepper({ fase }) {
  const idx = FASES.findIndex((f) => f.id === fase)
  return (
    <ol className="fases" aria-label={`Fase máxima alcançada: ${FASES[idx]?.rotulo || fase}`}>
      {FASES.map((f, i) => (
        <li key={f.id} className={i <= idx ? 'ok' : ''} aria-current={i === idx ? 'step' : undefined}>
          <span className="fases-ponto" aria-hidden="true" />
          <span className="fases-rotulo">{f.rotulo}</span>
        </li>
      ))}
    </ol>
  )
}

export function TagConfianca({ tag }) {
  if (!tag || !TAGS[tag]) return null
  return (
    <span className={`selo tag-${tag}`} title={TAGS[tag].titulo}>
      {TAGS[tag].rotulo}
    </span>
  )
}

export function Segmentado({ opcoes, valor, onChange, rotulo, className = '' }) {
  return (
    <div className={`segmentado ${className}`} role="radiogroup" aria-label={rotulo}>
      {opcoes.map((o) => (
        <button
          key={o.valor}
          type="button"
          role="radio"
          aria-checked={valor === o.valor}
          className={`${valor === o.valor ? 'ativo' : ''} ${o.classe || ''}`}
          onClick={() => onChange(o.valor)}
        >
          {o.icone}
          {o.rotulo}
          {o.contagem != null && <span className="contagem num">{o.contagem}</span>}
        </button>
      ))}
    </div>
  )
}
