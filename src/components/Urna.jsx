import { useEffect, useRef, useState } from 'react'
import { Volume2, VolumeX } from 'lucide-react'
import { candidatos } from '../data/index.js'
import { navegar } from '../lib/router.js'

const POR_NUMERO = Object.fromEntries(Object.values(candidatos).map((c) => [String(c.numeroUrna), c]))

let ctx
function bipe(seq) {
  try {
    ctx = ctx || new (window.AudioContext || window.webkitAudioContext)()
    let t = ctx.currentTime
    for (const [freq, dur, pausa = 0.03] of seq) {
      const o = ctx.createOscillator()
      const g = ctx.createGain()
      o.type = 'square'
      o.frequency.value = freq
      g.gain.setValueAtTime(0.0001, t)
      g.gain.exponentialRampToValueAtTime(0.045, t + 0.008)
      g.gain.exponentialRampToValueAtTime(0.0001, t + dur)
      o.connect(g).connect(ctx.destination)
      o.start(t)
      o.stop(t + dur + 0.02)
      t += dur + pausa
    }
  } catch {
    /* sem áudio */
  }
}
const SOM_TECLA = [[1450, 0.07]]
const SOM_CONFIRMA = [
  [1300, 0.07],
  [1300, 0.07],
  [1300, 0.07],
  [1300, 0.07],
  [1300, 0.32],
]

export default function Urna({ onBranco }) {
  const [digitos, setDigitos] = useState('')
  const [modo, setModo] = useState('numero') // 'numero' | 'branco' | 'fim'
  const [som, setSom] = useState(() => {
    try {
      return localStorage.getItem('urna-som') !== 'off'
    } catch {
      return true
    }
  })
  const timer = useRef()
  useEffect(() => () => clearTimeout(timer.current), [])

  const cand = digitos.length === 2 ? POR_NUMERO[digitos] : null
  const errado = digitos.length === 2 && !cand

  function tocar(seq) {
    if (som) bipe(seq)
  }

  function tecla(d) {
    if (modo === 'fim') return
    tocar(SOM_TECLA)
    if (modo === 'branco') {
      setModo('numero')
      setDigitos(d)
      return
    }
    setDigitos((v) => (v.length >= 2 ? v : v + d))
  }

  function corrige() {
    if (modo === 'fim') return
    tocar(SOM_TECLA)
    setDigitos('')
    setModo('numero')
  }

  function branco() {
    if (modo === 'fim') return
    tocar(SOM_TECLA)
    setDigitos('')
    setModo('branco')
  }

  function confirma() {
    if (modo === 'branco') {
      tocar(SOM_CONFIRMA)
      setModo('numero')
      onBranco?.()
      return
    }
    if (!cand) {
      tocar(SOM_TECLA)
      return
    }
    tocar(SOM_CONFIRMA)
    setModo('fim')
    timer.current = setTimeout(() => navegar(cand.id), 900)
  }

  function onKeyDown(e) {
    if (/^[0-9]$/.test(e.key)) {
      e.preventDefault()
      tecla(e.key)
    } else if (e.key === 'Backspace' || e.key === 'Escape') {
      e.preventDefault()
      corrige()
    } else if (e.key === 'Enter') {
      e.preventDefault()
      confirma()
    }
  }

  function alternarSom() {
    setSom((s) => {
      try {
        localStorage.setItem('urna-som', s ? 'off' : 'on')
      } catch {
        /* armazenamento indisponível */
      }
      return !s
    })
  }

  const prontoParaConfirmar = cand || modo === 'branco'

  return (
    <div className="urna" tabIndex={0} onKeyDown={onKeyDown} aria-label="Urna de consulta: digite 13 ou 22 e aperte Confirma para abrir o dossiê">
      <div className="urna-topo">
        <span className="urna-marca">Dossiê 2026</span>
        <button type="button" className="urna-som" onClick={alternarSom} aria-pressed={som} aria-label={som ? 'Desligar som' : 'Ligar som'}>
          {som ? <Volume2 size={16} /> : <VolumeX size={16} />}
        </button>
      </div>
      <div className="urna-corpo">
        <div className={`urna-tela ${cand ? 'c-' + cand.id : ''}`} aria-live="polite">
          {modo === 'fim' ? (
            <div className="tela-fim">FIM</div>
          ) : modo === 'branco' ? (
            <div className="tela-branco">
              <span className="tela-pequeno">Consulta ao dossiê</span>
              <strong>Comparação lado a lado</strong>
              <span>Os dois candidatos, item por item.</span>
            </div>
          ) : (
            <div className="tela-numero">
              <span className="tela-pequeno">Consulta ao dossiê</span>
              <span className="tela-cargo">Presidente</span>
              <div className="tela-linha">
                <span>Número:</span>
                <span className="tela-digitos">
                  {[0, 1].map((i) => (
                    <span key={i} className={`digito ${i === digitos.length ? 'cursor' : ''}`}>
                      {digitos[i] || ''}
                    </span>
                  ))}
                </span>
              </div>
              {cand && (
                <dl className="tela-dados">
                  <div>
                    <dt>Nome:</dt>
                    <dd>{cand.nome}</dd>
                  </div>
                  <div>
                    <dt>Partido:</dt>
                    <dd>{cand.partido}</dd>
                  </div>
                  <div>
                    <dt>Vice:</dt>
                    <dd>{cand.vice}</dd>
                  </div>
                </dl>
              )}
              {errado && <p className="tela-errado">Número errado. No 2º turno, só existem o 13 e o 22.</p>}
              {!digitos && <p className="tela-dica">Digite 13 ou 22 no teclado da urna.</p>}
              {cand && (
                <div className="tela-foto" aria-hidden="true">
                  <span>{cand.numeroUrna}</span>
                </div>
              )}
            </div>
          )}
          {prontoParaConfirmar && modo !== 'fim' && (
            <div className="tela-rodape">
              Aperte a tecla:
              <br />
              <b>CONFIRMA</b> para abrir {modo === 'branco' ? 'a comparação' : 'o dossiê'}
              <br />
              <b>CORRIGE</b> para recomeçar
            </div>
          )}
        </div>
        <div className="urna-teclado">
          <div className="teclas-num">
            {['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'].map((d) => (
              <button key={d} type="button" className="tecla" onClick={() => tecla(d)}>
                {d}
              </button>
            ))}
          </div>
          <div className="teclas-acao">
            <button type="button" className="tecla-acao branco" onClick={branco}>
              Branco
            </button>
            <button type="button" className="tecla-acao corrige" onClick={corrige}>
              Corrige
            </button>
            <button type="button" className={`tecla-acao confirma ${prontoParaConfirmar ? 'pulsa' : ''}`} onClick={confirma}>
              Confirma
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
