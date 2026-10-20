import { useDiasAte } from '../lib/useDiasAte.js'
import { Home, History, BookOpen, User, LineChart } from 'lucide-react'
import { DATA_SEGUNDO_TURNO, DATA_REFERENCIA } from '../data/eleicao.js'
import { candidatos } from '../data/index.js'

const REPO_URL = 'https://github.com/paulo673/dossie-dos-candidatos'

const LINKS = [
  { href: '', rotulo: 'Início', icone: Home, rota: '' },
  { href: 'lula', rotulo: 'Lula', icone: User, rota: 'lula', classe: 'c-lula' },
  { href: 'flavio', rotulo: 'Flávio', icone: User, rota: 'flavio', classe: 'c-flavio' },
  { href: 'linha-do-tempo', rotulo: 'Linha do tempo', curto: 'Linha', icone: History, rota: 'linha-do-tempo' },
  { href: 'economia', rotulo: 'Economia', curto: 'Economia', icone: LineChart, rota: 'economia' },
  { href: 'fontes', rotulo: 'Fontes e método', curto: 'Fontes', icone: BookOpen, rota: 'fontes' },
]

export function Contagem() {
  const dias = useDiasAte(DATA_SEGUNDO_TURNO)
  let texto
  if (dias > 1) texto = `2º turno em ${dias} dias`
  else if (dias === 1) texto = '2º turno amanhã'
  else if (dias === 0) texto = '2º turno hoje'
  else texto = '2º turno: 25/10/2026'
  return (
    <span className="contagem-chip">
      <span className="contagem-ponto" aria-hidden="true" />
      {texto}
    </span>
  )
}

function Logo() {
  return (
    <a href="#/" className="logo" aria-label="Dossiê 2º turno 2026, início">
      <svg viewBox="0 0 40 32" width="34" height="27" aria-hidden="true">
        <rect x="1" y="1" width="38" height="30" rx="6" fill="var(--urna-corpo)" />
        <rect x="5" y="5" width="20" height="14" rx="2" fill="var(--urna-tela)" />
        <rect x="28" y="5" width="7" height="4" rx="1" fill="var(--urna-tecla)" />
        <rect x="28" y="11" width="7" height="4" rx="1" fill="var(--urna-tecla)" />
        <rect x="5" y="22" width="9" height="5" rx="1.5" fill="var(--lula)" />
        <rect x="16" y="22" width="9" height="5" rx="1.5" fill="var(--flavio)" />
        <rect x="28" y="22" width="7" height="5" rx="1.5" fill="var(--confirma)" />
      </svg>
      <span className="logo-texto">
        Dossiê <b>2º turno</b>
      </span>
    </a>
  )
}

export function Topo({ rotaAtual }) {
  return (
    <header className="topo">
      <div className="container topo-in">
        <Logo />
        <nav className="topo-nav" aria-label="Seções">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={`#/${l.href}`}
              className={`${l.classe || ''} ${rotaAtual === l.rota ? 'ativo' : ''}`}
              aria-current={rotaAtual === l.rota ? 'page' : undefined}
            >
              {l.classe && <span className="topo-ponto" aria-hidden="true" />}
              {l.rotulo}
            </a>
          ))}
        </nav>
        <Contagem />
        <a href={REPO_URL} className="topo-repo" target="_blank" rel="noopener noreferrer" aria-label="Código-fonte no GitHub" title="Código-fonte no GitHub">
          <svg viewBox="0 0 16 16" width="20" height="20" fill="currentColor" aria-hidden="true">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
          </svg>
        </a>
      </div>
    </header>
  )
}

export function NavInferior({ rotaAtual }) {
  return (
    <nav className="nav-inferior" aria-label="Navegação principal">
      {LINKS.map((l) => {
        const Icone = l.icone
        const ativo = rotaAtual === l.rota
        return (
          <a key={l.href} href={`#/${l.href}`} className={`${l.classe || ''} ${ativo ? 'ativo' : ''}`} aria-current={ativo ? 'page' : undefined}>
            {l.classe ? <span className="nav-num num">{l.rota === 'lula' ? '13' : '22'}</span> : <Icone size={20} aria-hidden="true" />}
            <span>{l.curto || l.rotulo}</span>
          </a>
        )
      })}
    </nav>
  )
}

export function Rodape() {
  return (
    <footer className="rodape">
      <div className="container rodape-in">
        <p>
          Dossiês compilados a partir de fontes públicas, com dados até {DATA_REFERENCIA}. Investigações e acusações não implicam culpa:
          todas as pessoas citadas têm direito à presunção de inocência.
        </p>
        <ul className="rodape-links">
          <li>
            <a href={candidatos.lula.dossie.arquivo} target="_blank" rel="noopener noreferrer">Dossiê completo de Lula</a>
          </li>
          <li>
            <a href={candidatos.flavio.dossie.arquivo} target="_blank" rel="noopener noreferrer">Dossiê completo de Flávio Bolsonaro</a>
          </li>
          <li>
            <a href="#/fontes">Método e índice de fontes</a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
