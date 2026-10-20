# Esquema dos dados de candidato (`src/data/<id>.js`)

Cada arquivo é um módulo ES: `export default { ... }`. Todos os textos em português.
Texto pode usar `**negrito**` (o site converte). Nada de HTML.

`fontes` é SEMPRE um array de URLs (strings) copiadas literalmente do dossiê.
Se o trecho do dossiê não tiver URL própria, use as URLs da seção/subseção mais próxima.
Se não houver nenhuma, use `[]` (o site cai para o link do dossiê).

`verificado: false` marca itens que o dossiê marca como [não verificado], [não confirmado],
[só Wikipedia], [parcialmente verificado] etc. Omitir = verificado.

```js
export default {
  id: 'lula',                       // 'lula' | 'flavio'
  nome: 'Luiz Inácio Lula da Silva',
  nomeCurto: 'Lula',
  partido: 'PT',
  numeroUrna: 13,                   // Lula 13, Flávio 22
  vice: 'Geraldo Alckmin (PSB)',
  coligacao: 'Brasil Pronto pra Mais — PT, PSB, ...',
  nascimento: '1945-10-27',         // ISO
  naturalidade: 'Caetés (PE)',
  profissao: 'Torneiro mecânico, sindicalista',
  resumo: '2–3 frases neutras e factuais sobre quem é o candidato.',
  primeiroTurno: { percentual: 45.16, votos: 53879538, posicao: 2 },

  // 4 a 6 números de impacto para cartões ("big numbers")
  destaques: [
    { valor: '3', rotulo: 'mandatos presidenciais', detalhe: '2003–2010 e 2023–2026' },
  ],

  situacaoJudicial: { titulo: 'frase curta', texto: '2–4 frases', fontes: [] },

  ficha: [ { rotulo: 'Nascimento', valor: '27/10/1945, Caetés (PE)', fontes: [] } ],

  // biografia em fases
  trajetoria: [
    { periodo: '1945–1960', titulo: 'Origens e infância', itens: ['frase', 'frase'], fontes: [] },
  ],

  // histórico eleitoral
  eleicoes: [
    { ano: 1989, cargo: 'Presidente', partido: 'PT', resultado: 'Perde o 2º turno para Collor (46,97% x 53,03%)',
      votos: '—', percentual: 46.97, eleito: false },   // eleito: true | false | null (null = em disputa/indeferido)
  ],

  // mandatos / cargos (Lula: 3 mandatos presidenciais; Flávio: ALERJ e Senado)
  mandatos: [
    {
      id: 'mandato-1', titulo: '1º mandato', cargo: 'Presidente da República', periodo: '2003–2006',
      resumo: '1–3 frases',
      numeros: [ { rotulo: 'Aprovação ao final', valor: '52% ótimo/bom' } ],
      listas: [
        { titulo: 'Programas e leis', itens: [ { texto: 'Bolsa Família', detalhe: 'Lei 10.836, 09/01/2004', verificado: true } ] },
        { titulo: 'Crises', itens: [ { texto: 'Mensalão (2005)' } ] },
      ],
      // tabela de indicadores anuais (opcional, null se não houver)
      indicadores: { colunas: ['2003','2004'], linhas: [ { rotulo: 'PIB', unidade: '%', valores: [1.1, 5.8] } ] },
      fontes: [],
    },
  ],

  // casos judiciais / escândalos / investigações
  casos: [
    {
      id: 'triplex', titulo: 'Triplex do Guarujá', periodo: '2016–2022', grupo: 'Lava Jato',
      envolvido: 'candidato',          // 'candidato' | 'familiar' | 'aliado'
      pessoa: 'Lula',                  // quem é o alvo (ex.: 'Fábio Luís (filho)')
      resumo: '1 frase',
      alegacao: '2–4 frases',
      defesa: '1–3 frases',
      desfecho: '1–3 frases',
      faseMaxima: 'condenado',         // 'citado' | 'investigado' | 'indiciado' | 'denunciado' | 'reu' | 'condenado'
      status: 'anulado',               // 'anulado' | 'arquivado' | 'absolvido' | 'trancado' | 'rejeitado' | 'prescrito' | 'extinto' | 'em_curso' | 'sem_processo'
      marcos: [ { data: '2017-07-12', texto: 'Moro condena: 9 anos e 6 meses' } ],   // opcional
      verificado: true,
      fontes: [],
    },
  ],

  // votações (só Flávio; Lula: null)
  votacoes: {
    resumo: [ { rotulo: 'Votos "Sim"', valor: 356 } ],
    padrao: ['frase'],
    itens: [
      { materia: 'PEC 32/2022: PEC da Transição', data: '2022-12-07', voto: 'nao',  // 'sim' | 'nao' | 'ausente' | 'outro'
        votoTexto: 'Não', resultado: 'Aprovada, 64–16', grupo: 'contra',           // 'contra' | 'a_favor' | 'indicacoes' | 'ausencias' | 'alerj'
        tema: 'fiscal', verificado: true, fontes: [] },
    ],
  },

  patrimonio: {
    serie: [ { ano: 2002, valor: 25500, detalhe: 'Um VW Gol 1.0' } ],   // valor em reais (number)
    nota: '1–2 frases',
    fontes: [],
  },

  polemicas: [ { titulo: 'Rússia/Ucrânia', data: 'mai/2022', texto: '2–4 frases', fontes: [] } ],

  // seções livres (prêmios, cultura, família, etc.)
  extras: [ { titulo: 'Prêmios e reconhecimento', icone: 'award', itens: ['frase'], fontes: [] } ],  // icone: 'award'|'film'|'heart'|'book'|'info'|'briefcase'

  // LINHA DO TEMPO — o mais completa possível (60–110 eventos), cobrindo a vida toda
  timeline: [
    {
      data: '2018-04-07',          // 'YYYY-MM-DD' | 'YYYY-MM' | 'YYYY' (para ordenar)
      dataLabel: '07/04/2018',     // opcional; como exibir (ex.: '1978–80', 'Dez/2024')
      titulo: 'Preso em Curitiba',   // ≤ 70 caracteres
      descricao: '1–3 frases',
      categoria: 'justica',        // 'pessoal' | 'politica' | 'governo' | 'justica' | 'polemica'
      destaque: true,              // marcos principais (15–25 por candidato)
      tag: 'fato',                 // opcional: 'fato'|'decisao'|'investigacao'|'acusacao'|'defesa'|'nao_confirmado'
      fontes: [],
    },
  ],

  lacunas: ['frase'],
  dossie: { arquivo: 'docs/dossie-lula.md', dataReferencia: '20/10/2026', metodo: '1–2 frases' },
}
```
