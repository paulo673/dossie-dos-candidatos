import { useMemo } from 'react'
import { ArrowRight, Scale, Landmark, Wallet, Vote, MapPin, Briefcase, Users, History } from 'lucide-react'
import { BarraPrimeiroTurno, GraficoLinhas, GraficoPesquisas } from '../components/Graficos.jsx'
import { Fontes } from '../components/ui.jsx'
import { STATUS } from '../lib/constantes.js'
import { lista, candidatos } from '../data/index.js'
import { primeiroTurno, pesquisas, apoios, DATA_SEGUNDO_TURNO } from '../data/eleicao.js'
import { idade, reais, pct, formatarData } from '../lib/format.js'
import { useDiasAte } from '../lib/useDiasAte.js'
import Rico from '../lib/Rico.jsx'

function resumoCasos(c) {
  const proprios = c.casos.filter((k) => k.envolvido === 'candidato')
  const abertos = proprios.filter((k) => STATUS[k.status]?.grupo === 'aberto').length
  const cond = proprios.filter((k) => k.faseMaxima === 'condenado')
  const condenacoes = cond.length
  const situacaoCond = [...new Set(cond.map((k) => (STATUS[k.status]?.rotulo || k.status).toLowerCase()))].join(', ')
  return { total: proprios.length, abertos, condenacoes, situacaoCond, familiares: c.casos.filter((k) => k.envolvido === 'familiar').length }
}

function cargos(c) {
  const ficha = c.ficha.find((f) => /^cargos/i.test(f.rotulo))
  if (ficha) return ficha.valor
  const porCargo = new Map()
  for (const m of c.mandatos) porCargo.set(m.cargo, [...(porCargo.get(m.cargo) || []), m.periodo])
  return [...porCargo].map(([cargo, ps]) => `${cargo} (${ps.join(', ')})`).join('; ')
}

function FrenteAFrente() {
  const linhas = [
    { icone: Users, rotulo: 'Idade', valor: (c) => `${idade(c.nascimento)} anos`, extra: (c) => `Nascido em ${formatarData(c.nascimento)}` },
    { icone: MapPin, rotulo: 'Naturalidade', valor: (c) => c.naturalidade },
    { icone: Briefcase, rotulo: 'Profissão', valor: (c) => c.profissao },
    { icone: Vote, rotulo: 'Partido e vice', valor: (c) => `${c.partido}, nº ${c.numeroUrna}`, extra: (c) => `Vice: ${c.vice}` },
    { icone: Landmark, rotulo: 'Cargos exercidos', valor: cargos },
    {
      icone: Vote,
      rotulo: 'Candidaturas',
      valor: (c) => {
        const vitorias = c.eleicoes.filter((e) => e.eleito === true).length
        return `${c.eleicoes.length} candidaturas, ${vitorias} vitórias`
      },
      extra: (c) => `1º turno de 2026: ${pct(c.primeiroTurno.percentual)} (${c.primeiroTurno.posicao}º lugar)`,
    },
    {
      icone: Wallet,
      rotulo: 'Patrimônio declarado em 2026',
      valor: (c) => {
        const s = c.patrimonio.serie
        return reais(s[s.length - 1].valor)
      },
      extra: (c) => {
        const s = c.patrimonio.serie
        return `Primeira declaração no dossiê: ${reais(s[0].valor, { compacto: true })} (${s[0].ano})`
      },
    },
    { icone: Scale, rotulo: 'Situação judicial', valor: (c) => c.situacaoJudicial.titulo, rico: true },
    {
      icone: Scale,
      rotulo: 'Casos no dossiê contra o próprio candidato',
      valor: (c) => {
        const r = resumoCasos(c)
        return `${r.total} casos, ${r.abertos} em curso`
      },
      extra: (c) => {
        const r = resumoCasos(c)
        const partes = []
        partes.push(r.condenacoes ? `${r.condenacoes} chegaram a condenação; situação atual: ${r.situacaoCond}` : 'Nenhum chegou a condenação')
        if (r.familiares) partes.push(`mais ${r.familiares} casos de familiares`)
        return partes.join('; ')
      },
    },
  ]
  return (
    <section className="secao" id="frente-a-frente" aria-labelledby="t-frente">
      <div className="container">
        <div className="secao-cab">
          <h2 id="t-frente">Frente a frente</h2>
          <p>Os mesmos itens, lado a lado. Toque no nome para abrir o dossiê completo de cada um.</p>
        </div>
        <div className="frente">
          <div className="frente-cab" role="presentation">
            {lista.map((c) => (
              <a key={c.id} href={`#/${c.id}`} className={`frente-cand c-${c.id}`}>
                <span className="frente-num">{c.numeroUrna}</span>
                <span className="frente-nome">{c.nomeCurto}</span>
                <span className="frente-partido">{c.partido}</span>
              </a>
            ))}
          </div>
          <dl className="frente-linhas">
            {linhas.map((l) => {
              const Icone = l.icone
              return (
                <div key={l.rotulo} className="frente-linha">
                  <dt>
                    <Icone size={16} aria-hidden="true" /> {l.rotulo}
                  </dt>
                  {lista.map((c) => (
                    <dd key={c.id} className={`c-${c.id}`}>
                      <span className="sr-only">{c.nomeCurto}: </span>
                      {l.rico ? <Rico texto={l.valor(c)} className="frente-valor" /> : <span className="frente-valor">{l.valor(c)}</span>}
                      {l.extra && <span className="frente-extra">{l.extra(c)}</span>}
                    </dd>
                  ))}
                </div>
              )
            })}
          </dl>
        </div>
      </div>
    </section>
  )
}

function Hero() {
  const dias = useDiasAte(DATA_SEGUNDO_TURNO)
  return (
    <section className="hero">
      <div className="container hero-in">
        <div className="hero-texto">
          <p className="hero-data">
            {dias > 0 ? `2º turno em 25 de outubro. Dados até 20/10/2026` : 'Dados até 20/10/2026, antes do 2º turno de 25/10'}
          </p>
          <h1>Dois candidatos, dois dossiês.</h1>
          <p className="hero-sub">
            Trajetória, mandatos, processos, votações, patrimônio e uma linha do tempo de 80 anos de história de{' '}
            <a href="#/lula" className="c-lula nome-link">Lula</a> e{' '}
            <a href="#/flavio" className="c-flavio nome-link">Flávio Bolsonaro</a>. Cada informação traz o link da fonte.
          </p>
          <div className="hero-atalhos">
            {lista.map((c) => (
              <a key={c.id} href={`#/${c.id}`} className={`botao-cand c-${c.id}`}>
                <span className="botao-cand-num">{c.numeroUrna}</span>
                <span>
                  <b>{c.nomeCurto}</b>
                  <small>{c.partido}</small>
                </span>
                <ArrowRight size={18} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  const seriesPatrimonio = useMemo(
    () =>
      lista.map((c) => ({
        id: c.id,
        nome: c.nomeCurto.split(' ')[0],
        classe: `c-${c.id}`,
        pontos: c.patrimonio.serie.map((p) => ({ ano: p.ano, valor: p.valor, detalhe: p.detalhe })),
      })),
    []
  )

  return (
    <>
      <Hero />

      <section className="secao secao-placar" aria-labelledby="t-placar">
        <div className="container placar">
          <div className="placar-turno">
            <div className="secao-cab">
              <h2 id="t-placar">Como foi o 1º turno</h2>
              <p>
                Resultado de {primeiroTurno.data}, em votos válidos. Flávio Bolsonaro terminou em 1º e Lula em 2º; os dois voltam às urnas em 25/10.
              </p>
            </div>
            <BarraPrimeiroTurno dados={primeiroTurno} />
            <ul className="notas">
              {primeiroTurno.notas.map((n) => (
                <li key={n}>{n}</li>
              ))}
            </ul>
            <Fontes urls={primeiroTurno.fontes} />
          </div>
          <div className="placar-pesquisas">
            <GraficoPesquisas pesquisas={pesquisas} nomes={{ lula: candidatos.lula.nomeCurto, flavio: candidatos.flavio.nomeCurto }} />
            <Fontes urls={pesquisas.flatMap((p) => p.fontes)} />
          </div>
        </div>
      </section>

      <FrenteAFrente />

      <section className="secao" aria-labelledby="t-patrimonio">
        <div className="container">
          <GraficoLinhas
            series={seriesPatrimonio}
            titulo="Patrimônio declarado ao TSE"
            descricao="Valores nominais, sem correção pela inflação. Passe o dedo ou o mouse sobre o gráfico para ver cada declaração."
          />
          <div className="duas-fontes">
            {lista.map((c) => (
              <Fontes key={c.id} urls={c.patrimonio.fontes} rotulo={`Fontes sobre ${c.nomeCurto}:`} />
            ))}
          </div>
        </div>
      </section>

      <section className="secao" aria-labelledby="t-apoios">
        <div className="container">
          <div className="secao-cab">
            <h2 id="t-apoios">Quem apoia quem no 2º turno</h2>
          </div>
          <div className="apoios">
            {lista.map((c) => (
              <div key={c.id} className={`apoios-col c-${c.id}`}>
                <h3>{c.nomeCurto}</h3>
                <ul>
                  {apoios[c.id].map((a) => (
                    <li key={a}>{a}</li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="apoios-col c-neutro">
              <h3>Neutros</h3>
              <ul>
                {apoios.neutros.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
            </div>
          </div>
          <Fontes urls={apoios.fontes} />
        </div>
      </section>

      <section className="secao chamada-tempo" aria-labelledby="t-chamada">
        <div className="container chamada-in">
          <History size={40} aria-hidden="true" />
          <div>
            <h2 id="t-chamada">De 1945 a 2026, ano a ano</h2>
            <p className="texto-2">
              A linha do tempo junta os {lista.reduce((s, c) => s + c.timeline.length, 0)} eventos dos dois dossiês. Filtre por candidato, por tema ou veja só os marcos.
            </p>
          </div>
          <a href="#/linha-do-tempo" className="botao">
            Abrir a linha do tempo <ArrowRight size={18} aria-hidden="true" />
          </a>
        </div>
      </section>
    </>
  )
}
