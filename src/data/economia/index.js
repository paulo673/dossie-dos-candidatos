// Dados da página de economia (Brasil República, 1889–2026).
// series.json: séries anuais com fonte; governos.json: fases e presidentes; marcos.json: eventos.
// Gerados a partir da pesquisa consolidada em docs/economia.md.
import seriesBrutas from './series.json'
import governos from './governos.json'
import marcosBrutos from './marcos.json'
import urlEconomiaMd from '../../../docs/economia.md?url'
import { parseData } from '../../lib/format.js'

export { urlEconomiaMd }

export const ANO_INICIO = 1889
export const ANO_FIM = 2026

// anoInicio/anoFim: ano atribuído à fase que ocupou a maior parte dele (faixas do gráfico)
const VISUAL = {
  republica_velha: { cor: '#c98500', curto: 'República Velha', anoInicio: 1889, anoFim: 1930 },
  era_vargas: { cor: '#199e70', curto: 'Era Vargas', anoInicio: 1931, anoFim: 1945 },
  populista: { cor: '#d95926', curto: 'Populista', anoInicio: 1946, anoFim: 1963 },
  ditadura: { cor: '#9085e9', curto: 'Ditadura', anoInicio: 1964, anoFim: 1984 },
  nova_republica: { cor: '#d55181', curto: 'Nova República', anoInicio: 1985, anoFim: ANO_FIM },
}

const anoMeio = (iso) => {
  // ano que contém a maior parte do intervalo começando em iso
  const { ano, mes } = parseData(iso)
  return mes && mes > 6 ? ano + 1 : ano
}

export const FASES = governos.fases.map((f) => ({
  ...f,
  ...VISUAL[f.id],
  subfases: (f.subfases || []).map((s) => {
    const anoInicio = anoMeio(s.inicio)
    const anoFim = s.fim ? anoMeio(s.fim) - 1 : ANO_FIM
    return { ...s, anoInicio, anoFim, periodo: anoFim === ANO_FIM ? `${anoInicio}–hoje` : anoFim === anoInicio ? `${anoInicio}` : `${anoInicio}–${anoFim}` }
  }),
}))

export function faseDoAno(ano) {
  return FASES.find((f) => ano >= f.anoInicio && ano <= f.anoFim)
}
export function subfaseDoAno(ano) {
  return faseDoAno(ano)?.subfases.find((s) => ano >= s.anoInicio && ano <= s.anoFim)
}

// --- presidentes ---
const dia = (iso) => new Date(`${iso.length === 4 ? iso + '-01-01' : iso.length === 7 ? iso + '-01' : iso}T12:00:00Z`).getTime()
const HOJE = '2026-10-20'

function nomeCurto(nome) {
  const especiais = {
    'Luiz Inácio Lula da Silva': 'Lula',
    'Getúlio Vargas': 'Vargas',
    'Getúlio Dornelles Vargas': 'Vargas',
    'Juscelino Kubitschek': 'JK',
    'Juscelino Kubitschek de Oliveira': 'JK',
    'Fernando Henrique Cardoso': 'FHC',
    'Jair Bolsonaro': 'Bolsonaro',
    'Jair Messias Bolsonaro': 'Bolsonaro',
    'Dilma Rousseff': 'Dilma',
    'Dilma Vana Rousseff': 'Dilma',
    'Michel Temer': 'Temer',
    'Michel Miguel Elias Temer Lulia': 'Temer',
    'Itamar Franco': 'Itamar',
    'Fernando Collor de Mello': 'Collor',
    'Fernando Collor': 'Collor',
    'José Sarney': 'Sarney',
  }
  if (especiais[nome]) return especiais[nome]
  if (/^junta/i.test(nome)) return 'Junta militar'
  const partes = nome.split(' ').filter((p) => !['de', 'da', 'do', 'dos', 'das', 'e'].includes(p))
  return partes.length > 1 ? `${partes[0]} ${partes[partes.length - 1]}` : nome
}

export const PRESIDENTES = governos.presidentes
  .map((p, i) => {
    const ini = dia(p.inicio)
    const fim = dia(p.fim || HOJE)
    // anos em que governou mais da metade do ano
    const anos = []
    for (let a = parseData(p.inicio).ano; a <= parseData(p.fim || HOJE).ano; a++) {
      const a0 = dia(`${a}-01-01`)
      const a1 = dia(`${a + 1}-01-01`)
      const cobre = Math.min(fim, a1) - Math.max(ini, a0)
      if (cobre > (a1 - a0) / 2) anos.push(a)
    }
    return { ...p, chave: `${i}-${parseData(p.inicio).ano}`, nomeCurto: p.nomeCurto || nomeCurto(p.nome), anos, _ini: ini, _fim: fim }
  })
  .sort((a, b) => a._ini - b._ini)

// todos os que governaram em algum momento do ano (para o painel do ano)
export function presidentesDoAno(ano) {
  const a0 = dia(`${ano}-01-01`)
  const a1 = dia(`${ano + 1}-01-01`)
  return PRESIDENTES.filter((p) => p._ini < a1 && p._fim > a0 && (p._fim - p._ini > 20 * 864e5 || p.anos.length))
}

// --- marcos ---
export const MARCOS = marcosBrutos
  .map((m, i) => ({ ...m, chave: `m${i}` }))
  .sort((a, b) => (a.data < b.data ? -1 : a.data > b.data ? 1 : 0))

// --- séries ---
export const SERIES = Object.fromEntries(seriesBrutas.map((s) => [s.id, { ...s, dados: [...s.dados].sort((a, b) => a.ano - b.ano) }]))

const s = (id, extra = {}) => (SERIES[id] ? { ...SERIES[id], nome: SERIES[id].indicador, ...extra } : null)

export const GRUPOS_IND = {
  atividade: 'Atividade',
  precos: 'Preços, juros e câmbio',
  fiscal: 'Contas públicas e dívida',
  externo: 'Setor externo',
  trabalho: 'Trabalho e renda',
  social: 'Desigualdade e bem-estar',
}

// formato: pct (casas), pib (% do PIB), usd_bi, num, anos, indice, brl
function definir(lista) {
  return lista
    .map((ind) => ({ ...ind, series: ind.series.filter(Boolean) }))
    .filter((ind) => ind.series.length && ind.series.some((x) => x.dados.length))
}

export const INDICADORES = definir([
  { id: 'pib', grupo: 'atividade', rotulo: 'Crescimento do PIB', rotuloCurto: 'PIB', unidade: '% ao ano, real', tipo: 'barras', formato: 'pct', casas: 1, series: [s('pib_cresc')], descricao: 'Variação real do Produto Interno Bruto. A cor de cada barra indica a fase da República.' },
  { id: 'pib_pc', grupo: 'atividade', rotulo: 'Crescimento do PIB per capita', rotuloCurto: 'PIB per capita', unidade: '% ao ano, real', tipo: 'barras', formato: 'pct', casas: 1, series: [s('pib_pc_cresc')] },
  { id: 'pib_pc_nivel', grupo: 'atividade', rotulo: 'PIB per capita (dólares internacionais)', rotuloCurto: 'Renda por pessoa', unidade: 'US$ PPC de 2011', tipo: 'linhas', formato: 'usd', casas: 0, series: [s('pib_pc_maddison')], descricao: 'Nível de renda por habitante em paridade de poder de compra, comparável entre épocas.' },
  { id: 'pib_usd', grupo: 'atividade', rotulo: 'PIB em dólares correntes', rotuloCurto: 'PIB em US$', unidade: 'US$ bilhões', tipo: 'linhas', formato: 'usd_bi', series: [s('pib_usd')] },
  { id: 'investimento', grupo: 'atividade', rotulo: 'Taxa de investimento (FBCF)', rotuloCurto: 'Investimento', unidade: '% do PIB', tipo: 'linhas', formato: 'pib', casas: 1, series: [s('fbcf_pib')] },
  { id: 'setores', grupo: 'atividade', rotulo: 'Composição do PIB por setor', rotuloCurto: 'Setores', unidade: '% do valor adicionado', tipo: 'linhas', formato: 'pib', casas: 1, series: [s('setor_agro', { curto: 'Agropecuária' }), s('setor_industria', { curto: 'Indústria' }), s('setor_servicos', { curto: 'Serviços' })] },
  { id: 'ranking', grupo: 'atividade', rotulo: 'Posição no ranking mundial do PIB', rotuloCurto: 'Ranking', unidade: 'posição, PIB em US$ correntes', tipo: 'linhas', formato: 'ord', casas: 0, inverter: true, zero: false, series: [s('ranking_pib_nominal_bm')] },
  { id: 'populacao', grupo: 'atividade', rotulo: 'População', rotuloCurto: 'População', unidade: 'milhões de habitantes', tipo: 'linhas', formato: 'mi', casas: 1, series: [s('populacao')] },

  { id: 'inflacao', grupo: 'precos', rotulo: 'Inflação anual', rotuloCurto: 'Inflação', unidade: '% ao ano, escala logarítmica', tipo: 'linhas', log: true, formato: 'pct', casas: 1, series: [s('ipca', { curto: 'IPCA' }), s('igp_di', { curto: 'IGP-DI' }), s('inflacao_historica', { curto: 'Histórica' })], descricao: 'Escala logarítmica: cada linha de grade multiplica a inflação, para caber a hiperinflação e os anos de inflação baixa no mesmo gráfico.' },
  { id: 'selic', grupo: 'precos', rotulo: 'Juro básico (Selic)', rotuloCurto: 'Selic', unidade: '% ao ano, escala logarítmica', tipo: 'linhas', log: true, formato: 'pct', casas: 2, series: [s('selic_acumulada', { curto: 'Acumulada no ano' }), s('selic', { curto: 'Meta no fim do ano' })], descricao: 'Taxa acumulada no ano (desde 1974) e meta definida pelo Copom no fim de cada ano (desde 1999).' },
  { id: 'juro_real', grupo: 'precos', rotulo: 'Juro real', rotuloCurto: 'Juro real', unidade: '% ao ano', tipo: 'barras', formato: 'pct', casas: 1, series: [s('juro_real')] },
  { id: 'cambio', grupo: 'precos', rotulo: 'Dólar em reais (média anual)', rotuloCurto: 'Dólar', unidade: 'R$ por US$', tipo: 'linhas', formato: 'brl', casas: 2, zero: false, series: [s('cambio_real')] },
  { id: 'desvalorizacao', grupo: 'precos', rotulo: 'Desvalorização da moeda frente ao dólar', rotuloCurto: 'Desvalorização', unidade: '% ao ano, escala logarítmica', tipo: 'barras', log: true, formato: 'pct', casas: 1, series: [s('desvalorizacao')], descricao: 'Quanto a cotação média do dólar subiu (ou caiu) em moeda nacional a cada ano, já descontadas as trocas de moeda. Barra para cima: a moeda brasileira perdeu valor.' },
  { id: 'mil_reis', grupo: 'precos', rotulo: 'Mil-réis em pence esterlinos', rotuloCurto: 'Mil-réis', unidade: 'pence por 1$000', tipo: 'linhas', formato: 'num', casas: 1, series: [s('cambio_libra')], descricao: 'O câmbio da República Velha: quantos pence da libra esterlina valia um mil-réis. A paridade-ouro de 1846 era de 27 pence.' },
  { id: 'meta', grupo: 'precos', rotulo: 'Meta de inflação (centro)', rotuloCurto: 'Meta', unidade: '% ao ano', tipo: 'linhas', formato: 'pct', casas: 2, series: [s('meta_inflacao', { curto: 'Meta' }), s('ipca', { curto: 'IPCA' })], inicioMin: 1999 },

  { id: 'primario', grupo: 'fiscal', rotulo: 'Resultado primário do setor público', rotuloCurto: 'Primário', unidade: '% do PIB', tipo: 'barras', formato: 'pib', casas: 2, series: [s('primario_pib')], descricao: 'Barra para cima é superávit (o governo poupou antes dos juros); para baixo, déficit.' },
  { id: 'primario_gc', grupo: 'fiscal', rotulo: 'Resultado primário do Governo Central', rotuloCurto: 'Primário federal', unidade: '% do PIB', tipo: 'barras', formato: 'pib', casas: 2, series: [s('primario_gc_pib')], descricao: 'Tesouro, Previdência e Banco Central: é o recorte da meta fiscal federal.' },
  { id: 'operacional', grupo: 'fiscal', rotulo: 'Déficit operacional (anos de inflação alta)', rotuloCurto: 'Operacional', unidade: '% do PIB', tipo: 'barras', formato: 'pib', casas: 1, series: [s('operacional_pib')], descricao: 'Barra para cima é déficit. Era o indicador oficial entre 1981 e 1994, quando o resultado nominal ficava inflado pela inflação.' },
  { id: 'nominal', grupo: 'fiscal', rotulo: 'Resultado nominal (com juros)', rotuloCurto: 'Nominal', unidade: '% do PIB', tipo: 'barras', formato: 'pib', casas: 2, series: [s('nominal_pib')] },
  { id: 'juros', grupo: 'fiscal', rotulo: 'Juros nominais da dívida', rotuloCurto: 'Juros da dívida', unidade: '% do PIB', tipo: 'linhas', formato: 'pib', casas: 2, series: [s('juros_pib')] },
  { id: 'saldo_hist', grupo: 'fiscal', rotulo: 'Saldo do governo central (1889–1986)', rotuloCurto: 'Saldo histórico', unidade: '% do PIB', tipo: 'barras', formato: 'pib', casas: 1, series: [s('saldo_uniao_pib_fmi')], descricao: 'Receita menos despesa do governo central, na base histórica do FMI. Barra para cima: superávit. Antes de 1947 o PIB é estimado.' },
  { id: 'saldo_uniao', grupo: 'fiscal', rotulo: 'Saldo orçamentário da União (1889–1990)', rotuloCurto: 'Saldo da União', unidade: '% da despesa', tipo: 'barras', formato: 'pct', casas: 1, series: [s('saldo_uniao_hist')], descricao: 'Receita arrecadada menos despesa realizada, em % da despesa (Balanço Geral da União).' },
  { id: 'divida', grupo: 'fiscal', rotulo: 'Dívida pública', rotuloCurto: 'Dívida', unidade: '% do PIB', tipo: 'linhas', formato: 'pib', casas: 1, series: [s('divida_publica_pib_hist', { curto: 'Bruta, FMI' }), s('dbgg_pib', { curto: 'Bruta, BCB' }), s('dlsp_pib', { curto: 'Líquida, BCB' })], descricao: 'A série do FMI (dívida bruta) cobre toda a República; as do Banco Central (DBGG, desde 2006, e DLSP, desde 1981) são as oficiais atuais. A dívida líquida desconta ativos como as reservas internacionais.' },
  { id: 'divida_interna_hist', grupo: 'fiscal', rotulo: 'Dívida interna federal (1909–1969)', rotuloCurto: 'Dívida interna', unidade: '% do PIB', tipo: 'linhas', formato: 'pib', casas: 1, series: [s('divida_interna_federal_hist')] },
  { id: 'carga', grupo: 'fiscal', rotulo: 'Carga tributária bruta', rotuloCurto: 'Carga tributária', unidade: '% do PIB', tipo: 'linhas', formato: 'pib', casas: 1, series: [s('carga_tributaria')] },

  { id: 'divida_externa', grupo: 'externo', rotulo: 'Dívida externa', rotuloCurto: 'Dívida externa', unidade: 'US$ bilhões', tipo: 'linhas', formato: 'usd_bi', series: [s('divida_externa_usd', { curto: 'Dívida externa' }), s('reservas_usd', { curto: 'Reservas' })], descricao: 'Comparada às reservas internacionais: quando as reservas superam a dívida, o país é credor líquido em moeda forte.' },
  { id: 'divida_externa_pib', grupo: 'externo', rotulo: 'Dívida externa em % do PIB', rotuloCurto: 'Dív. externa/PIB', unidade: '% do PIB', tipo: 'linhas', formato: 'pib', casas: 1, series: [s('divida_externa_pib')] },
  { id: 'divida_externa_exp', grupo: 'externo', rotulo: 'Dívida externa em relação às exportações', rotuloCurto: 'Dív. externa/export.', unidade: '% das exportações do ano', tipo: 'linhas', formato: 'pct', casas: 0, series: [s('divida_externa_export')] },
  { id: 'reservas', grupo: 'externo', rotulo: 'Reservas internacionais', rotuloCurto: 'Reservas', unidade: 'US$ bilhões', tipo: 'linhas', formato: 'usd_bi', series: [s('reservas_usd')] },
  { id: 'comercio', grupo: 'externo', rotulo: 'Saldo da balança comercial', rotuloCurto: 'Balança comercial', unidade: 'US$ bilhões', tipo: 'barras', formato: 'usd_bi', series: [s('saldo_comercial_usd')] },
  { id: 'exportacoes', grupo: 'externo', rotulo: 'Exportações e importações', rotuloCurto: 'Exportações', unidade: 'US$ bilhões', tipo: 'linhas', formato: 'usd_bi', series: [s('exportacoes_usd', { curto: 'Exportações' }), s('importacoes_usd', { curto: 'Importações' })] },
  { id: 'transacoes', grupo: 'externo', rotulo: 'Transações correntes', rotuloCurto: 'Transações correntes', unidade: '% do PIB', tipo: 'barras', formato: 'pib', casas: 2, series: [s('transacoes_correntes_pib')] },
  { id: 'idp', grupo: 'externo', rotulo: 'Investimento direto no país', rotuloCurto: 'IDP', unidade: 'US$ bilhões', tipo: 'linhas', formato: 'usd_bi', series: [s('idp_usd')] },
  { id: 'cafe', grupo: 'externo', rotulo: 'Café e soja nas exportações', rotuloCurto: 'Café e soja', unidade: '% do valor exportado', tipo: 'linhas', formato: 'pct', casas: 1, series: [s('cafe_export_pct', { curto: 'Café' }), s('soja_export_pct', { curto: 'Soja' })], descricao: 'Do café da República Velha à soja de hoje. Em 2025 o petróleo bruto (12,8%) passou a soja (12,5%) como principal produto exportado.' },

  { id: 'desemprego', grupo: 'trabalho', rotulo: 'Taxa de desemprego', rotuloCurto: 'Desemprego', unidade: '% da força de trabalho', tipo: 'linhas', formato: 'pct', casas: 1, series: [s('desemprego_pnadc', { curto: 'PNAD Contínua' }), s('desemprego_pme', { curto: 'PME (6 metrópoles)' }), s('desemprego_oit', { curto: 'OIT (modelada)' })], descricao: 'Não existe série oficial de desemprego antes de 1980. As pesquisas têm metodologias diferentes e não devem ser emendadas.' },
  { id: 'caged', grupo: 'trabalho', rotulo: 'Saldo de empregos formais (Caged)', rotuloCurto: 'Caged', unidade: 'mil vagas', tipo: 'barras', formato: 'mil', casas: 0, series: [s('caged_saldo')] },
  { id: 'ocupacao', grupo: 'trabalho', rotulo: 'Nível de ocupação', rotuloCurto: 'Ocupação', unidade: '% da população de 14 anos ou mais', tipo: 'linhas', formato: 'pct', casas: 1, zero: false, series: [s('nivel_ocupacao')] },
  { id: 'informalidade', grupo: 'trabalho', rotulo: 'Taxa de informalidade', rotuloCurto: 'Informalidade', unidade: '% dos ocupados', tipo: 'linhas', formato: 'pct', casas: 1, series: [s('informalidade')] },
  { id: 'salario_minimo', grupo: 'trabalho', rotulo: 'Salário mínimo real', rotuloCurto: 'Salário mínimo', unidade: 'R$ de preços recentes', tipo: 'linhas', formato: 'brl', casas: 0, series: [s('salario_minimo_real')], descricao: 'Poder de compra do salário mínimo, corrigido pela inflação até preços atuais.' },
  { id: 'cestas', grupo: 'trabalho', rotulo: 'Cestas básicas compradas com um salário mínimo', rotuloCurto: 'Cestas por SM', unidade: 'cestas (São Paulo)', tipo: 'linhas', formato: 'num', casas: 2, series: [s('sm_cestas')], descricao: 'Poder de compra do mínimo medido em cestas básicas do DIEESE na cidade de São Paulo.' },
  { id: 'horas_cesta', grupo: 'trabalho', rotulo: 'Horas de trabalho para comprar a cesta básica', rotuloCurto: 'Horas por cesta', unidade: 'horas por mês', tipo: 'linhas', formato: 'num', casas: 0, series: [s('sm_horas_cesta')] },
  { id: 'sm_ppc', grupo: 'trabalho', rotulo: 'Salário mínimo em dólares PPC', rotuloCurto: 'SM em US$ PPC', unidade: 'US$ PPC', tipo: 'linhas', formato: 'usd', casas: 0, series: [s('salario_minimo_ppc')] },
  { id: 'renda', grupo: 'trabalho', rotulo: 'Renda média real', rotuloCurto: 'Renda média', unidade: 'R$ por mês, preços de 2025', tipo: 'linhas', formato: 'brl', casas: 0, series: [s('renda_media_real', { curto: 'Do trabalho' }), s('renda_domiciliar_pc_ipea', { curto: 'Domiciliar per capita' })] },
  { id: 'pea_agro', grupo: 'trabalho', rotulo: 'Trabalhadores na agropecuária', rotuloCurto: 'Emprego no campo', unidade: '% dos ocupados', tipo: 'linhas', formato: 'pct', casas: 0, series: [s('pea_agricultura')] },

  { id: 'gini', grupo: 'social', rotulo: 'Desigualdade de renda (Gini)', rotuloCurto: 'Gini', unidade: 'índice de 0 a 1', tipo: 'linhas', formato: 'dec', casas: 3, zero: false, series: [s('gini')] },
  { id: 'pobreza', grupo: 'social', rotulo: 'Pobreza e extrema pobreza', rotuloCurto: 'Pobreza', unidade: '% da população', tipo: 'linhas', formato: 'pct', casas: 1, series: [s('pobreza', { curto: 'Pobreza' }), s('extrema_pobreza', { curto: 'Extrema pobreza' })] },
  { id: 'vida', grupo: 'social', rotulo: 'Expectativa de vida ao nascer', rotuloCurto: 'Expectativa de vida', unidade: 'anos', tipo: 'linhas', formato: 'anos', casas: 1, zero: false, series: [s('expectativa_vida')] },
  { id: 'fome', grupo: 'social', rotulo: 'Subalimentação (Mapa da Fome)', rotuloCurto: 'Fome', unidade: '% da população', tipo: 'linhas', formato: 'pct', casas: 1, series: [s('subalimentacao_fao')], descricao: 'Acima de 2,5% o país entra no Mapa da Fome da FAO. O valor 2,5 significa "abaixo de 2,5%".' },
  { id: 'mortalidade', grupo: 'social', rotulo: 'Mortalidade infantil', rotuloCurto: 'Mortalidade infantil', unidade: 'por mil nascidos vivos', tipo: 'linhas', formato: 'num', casas: 1, series: [s('mortalidade_infantil')] },
  { id: 'analfabetismo', grupo: 'social', rotulo: 'Analfabetismo (15 anos ou mais)', rotuloCurto: 'Analfabetismo', unidade: '% da população', tipo: 'linhas', formato: 'pct', casas: 1, series: [s('analfabetismo')] },
  { id: 'urbanizacao', grupo: 'social', rotulo: 'População urbana', rotuloCurto: 'Urbanização', unidade: '% da população', tipo: 'linhas', formato: 'pct', casas: 1, series: [s('urbanizacao')] },
  { id: 'idh', grupo: 'social', rotulo: 'IDH', rotuloCurto: 'IDH', unidade: 'índice de 0 a 1', tipo: 'linhas', formato: 'dec', casas: 3, zero: false, series: [s('idh')] },
])

// --- formatação ---
const nfmt = (v, casas = 1) => v.toLocaleString('pt-BR', { minimumFractionDigits: casas, maximumFractionDigits: casas })

export function fmtValor(v, ind = {}) {
  if (v == null || Number.isNaN(v)) return '—'
  const c = ind.eixo ? (Math.abs(v) >= 100 || Number.isInteger(v) ? 0 : Math.min(ind.casas ?? 1, 2)) : (ind.casas ?? 1)
  switch (ind.formato) {
    case 'pct':
      return `${nfmt(v, c)}%`
    case 'pib':
      return `${nfmt(v, c)}${ind.eixo ? '%' : '% do PIB'}`
    case 'usd_bi':
      return `US$ ${nfmt(v, ind.eixo ? 0 : Math.abs(v) < 10 ? 2 : 1)}${ind.eixo ? '' : ' bi'}`
    case 'usd':
      return `US$ ${nfmt(v, c)}`
    case 'brl':
      return `R$ ${nfmt(v, c)}`
    case 'mi':
      return `${nfmt(v, c)}${ind.eixo ? '' : ' mi'}`
    case 'mil':
      return `${nfmt(v, 0)}${ind.eixo ? '' : ' mil'}`
    case 'anos':
      return `${nfmt(v, c)}${ind.eixo ? '' : ' anos'}`
    case 'ord':
      return `${nfmt(v, 0)}º`
    case 'dec':
      return nfmt(v, ind.eixo ? 2 : c)
    default:
      return nfmt(v, c)
  }
}

export function valorNoAno(serieId, ano) {
  return SERIES[serieId]?.dados.find((d) => d.ano === ano) || null
}

// inflação "emendada" para médias: IPCA desde 1980, IGP-DI 1944–1979, histórica antes
// anos parciais (2026) não entram nas médias
const fechado = (p) => (p && !p.parcial ? p : null)
function inflacaoNoAno(ano) {
  return fechado((ano >= 1980 && valorNoAno('ipca', ano)) || (ano >= 1944 && valorNoAno('igp_di', ano)) || valorNoAno('inflacao_historica', ano))
}
// só a PNAD Contínua (desde 2012): PME e PNAD antiga têm metodologias diferentes e não se comparam
function desempregoNoAno(ano) {
  return fechado(valorNoAno('desemprego_pnadc', ano))
}

const geo = (vs) => (Math.exp(vs.reduce((acc, v) => acc + Math.log(1 + v / 100), 0) / vs.length) - 1) * 100
const media = (vs) => vs.reduce((a, b) => a + b, 0) / vs.length

/** Estatísticas resumidas de um período (fase ou governo). `anos` opcional (lista explícita). */
export function statsPeriodo(inicio, fim, anos) {
  const lista = anos || Array.from({ length: fim - inicio + 1 }, (_, i) => inicio + i)
  const out = []
  const pib = lista.map((a) => fechado(valorNoAno('pib_cresc', a))).filter(Boolean)
  if (pib.length) {
    const v = geo(pib.map((p) => p.valor))
    out.push({ id: 'pib', rotulo: 'PIB médio', valor: v, texto: `${nfmt(v, 1)}% a.a.` })
  }
  const inf = lista.map(inflacaoNoAno).filter(Boolean)
  if (inf.length) {
    const v = geo(inf.map((p) => p.valor))
    out.push({ id: 'inflacao', rotulo: 'Inflação média', valor: v, texto: `${nfmt(v, v >= 100 ? 0 : 1)}% a.a.` })
  }
  const des = lista.map(desempregoNoAno).filter(Boolean)
  if (des.length) {
    const v = media(des.map((p) => p.valor))
    const ini = des[0].ano
    const fim = des[des.length - 1].ano
    out.push({ id: 'desemprego', rotulo: `Desemprego médio (${ini === fim ? ini : `${ini}–${fim}`})`, valor: v, texto: `${nfmt(v, 1)}%` })
  }
  // dívida: primeiro e último ano disponíveis no período
  // uma única série (FMI, bruta) do início ao fim, para não misturar metodologias
  const div = lista.map((a) => fechado(valorNoAno('divida_publica_pib_hist', a))).filter(Boolean)
  if (!anos && div.length >= 2) {
    out.push({ id: 'divida', rotulo: `Dívida bruta, FMI (${div[0].ano}–${div[div.length - 1].ano})`, texto: `${nfmt(div[0].valor, 0)}% → ${nfmt(div[div.length - 1].valor, 0)}% do PIB` })
  }
  const sm = lista.map((a) => fechado(valorNoAno('salario_minimo_real', a))).filter(Boolean)
  if (!anos && sm.length >= 2) {
    const v = (sm[sm.length - 1].valor / sm[0].valor - 1) * 100
    out.push({ id: 'sm', rotulo: `Salário mínimo real (${sm[0].ano}–${sm[sm.length - 1].ano})`, texto: `${v >= 0 ? '+' : ''}${nfmt(v, 0)}% no período` })
  }
  return out
}
