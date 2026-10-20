// Dados compartilhados da eleição presidencial de 2026 (seções 7 do dossiê de Lula e 9.4 do de Flávio)

export const DATA_SEGUNDO_TURNO = '2026-10-25T08:00:00-03:00'
export const DATA_REFERENCIA = '20/10/2026'

export const primeiroTurno = {
  data: '04/10/2026',
  abstencao: 21.08,
  candidatos: [
    { nome: 'Flávio Bolsonaro', partido: 'PL', percentual: 47.03, votos: 56104503, id: 'flavio' },
    { nome: 'Lula', partido: 'PT', percentual: 45.16, votos: 53879538, id: 'lula' },
    { nome: 'Augusto Cury', partido: 'Avante', percentual: 2.89, votos: 3448569 },
    { nome: 'Renan Santos', partido: 'Missão', percentual: 2.24, votos: 2675887 },
    { nome: 'Ronaldo Caiado', partido: 'PSD', percentual: 2.18, votos: 2605148 },
    { nome: 'Romeu Zema', partido: 'Novo', percentual: 0.27, votos: null },
  ],
  notas: [
    'Abstenção de 21,08%, a maior desde 1998.',
    'A última pesquisa Datafolha antes do 1º turno dava Lula à frente (45% x 42% dos válidos). Foi a primeira vez que o líder das pesquisas terminou em 2º.',
    'Desde 1989, nenhum candidato que ficou em 2º no 1º turno virou no 2º turno.',
    'Há pequena divergência entre fontes na votação de Flávio (56.103.033 x 56.104.503).',
  ],
  fontes: [
    'https://agenciabrasil.ebc.com.br/politica/noticia/2026-09/flavio-e-lula-vao-disputar-2o-turno-para-presidente-da-republica',
    'https://en.wikipedia.org/wiki/2026_Brazilian_general_election',
    'https://dadosabertos.tse.jus.br/',
  ],
}

// tipo: 'total' = intenção de voto sobre o total; 'validos' = votos válidos
export const pesquisas = [
  { instituto: 'Datafolha', data: '2026-10-08', flavio: 49, lula: 45, tipo: 'total', obs: 'Rejeição: Lula 46%, Flávio 43%',
    fontes: ['https://www.otempo.com.br/eleicoes/2026/pesquisas/2026/10/12/quaest-e-datafolha-divulgam-novas-pesquisas-do-2-turno-das-eleicoes-2026-nesta-semana'] },
  { instituto: 'AtlasIntel', data: '2026-10-09', flavio: 52.8, lula: 47.2, tipo: 'validos', obs: '',
    fontes: ['https://en.wikipedia.org/wiki/2026_Brazilian_general_election'] },
  { instituto: 'Quaest', data: '2026-10-14', flavio: 46, lula: 44, tipo: 'total', obs: 'Empate técnico',
    fontes: ['https://www.gazetadopovo.com.br/eleicoes/2026/pesquisa-eleitoral-2026/quaest-presidente-outubro-2026-segundo-turno/'] },
  { instituto: 'Datafolha', data: '2026-10-15', flavio: 47, lula: 45, tipo: 'total', obs: '51% x 49% dos válidos; empate técnico',
    fontes: ['https://www.brasildefato.com.br/2026/10/15/datafolha-aponta-empate-tecnico-no-2o-turno-flavio-bolsonaro-47-lula-45/'] },
  { instituto: 'AtlasIntel/Bloomberg', data: '2026-10-19', flavio: 51.1, lula: 48.9, tipo: 'validos', obs: 'Diferença caindo',
    fontes: ['https://www.cartacapital.com.br/politica/lula-sobe-mas-flavio-segue-a-frente-no-2o-turno-indica-atlasintel/'] },
]

export const apoios = {
  flavio: ['Augusto Cury', 'Ronaldo Caiado', 'Romeu Zema', 'União Brasil', 'PP', 'Republicanos', 'Podemos', 'Novo'],
  lula: ['PT, PSB, PCdoB, PV, PDT, PSOL e Rede (coligação)', 'PSTU', 'PCB', 'UP'],
  neutros: ['MDB', 'PSD'],
  fontes: ['https://www.poder360.com.br/poder-eleicoes-2026/pt-confirma-lula-na-disputa-por-um-inedito-4o-mandato/'],
}

export const agenda = [
  { data: '2026-10-18', texto: '1º debate do 2º turno, na Band', fontes: ['https://agenciabrasil.ebc.com.br/politica/noticia/2026-10/lula-e-flavio-fazem-primeiro-debate-das-eleicoes-na-band', 'https://www.agencialupa.org/checagem/2026/10/18/ao-vivo-checagem-do-debate-entre-lula-e-flavio-bolsonaro-na-band/'] },
  { data: '2026-10-23', texto: 'Debate da TV Globo (previsto)', fontes: [] },
  { data: '2026-10-25', texto: '2º turno', fontes: [] },
]
