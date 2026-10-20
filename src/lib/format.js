const MESES = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez']
const MESES_LONGOS = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']

export function parseData(iso) {
  const [a, m, d] = String(iso).split('-').map(Number)
  return { ano: a, mes: m || null, dia: d || null }
}

// valor numérico para ordenar ('2018' < '2018-04' < '2018-04-07')
export function ordemData(iso) {
  const { ano, mes, dia } = parseData(iso)
  return ano * 10000 + (mes || 0) * 100 + (dia || 0)
}

export function formatarData(iso, label) {
  if (label) return label
  const { ano, mes, dia } = parseData(iso)
  if (dia) return `${String(dia).padStart(2, '0')}/${String(mes).padStart(2, '0')}/${ano}`
  if (mes) return `${MESES[mes - 1]}/${ano}`
  return String(ano)
}

export function formatarDataLonga(iso) {
  const { ano, mes, dia } = parseData(iso)
  if (dia) return `${dia} de ${MESES_LONGOS[mes - 1]} de ${ano}`
  if (mes) return `${MESES_LONGOS[mes - 1]} de ${ano}`
  return String(ano)
}

export const nf = new Intl.NumberFormat('pt-BR')
export const pct = (v, casas = 2) => `${v.toLocaleString('pt-BR', { minimumFractionDigits: casas, maximumFractionDigits: casas })}%`

export function reais(v, { compacto = false } = {}) {
  if (v == null) return '—'
  if (compacto) {
    if (v >= 1e6) return `R$ ${(v / 1e6).toLocaleString('pt-BR', { maximumFractionDigits: 2 })} mi`
    if (v >= 1e3) return `R$ ${(v / 1e3).toLocaleString('pt-BR', { maximumFractionDigits: 0 })} mil`
  }
  return v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 })
}

export function idade(nascimentoIso, referencia = new Date('2026-10-20')) {
  const n = new Date(nascimentoIso + 'T12:00:00')
  let i = referencia.getFullYear() - n.getFullYear()
  const m = referencia.getMonth() - n.getMonth()
  if (m < 0 || (m === 0 && referencia.getDate() < n.getDate())) i--
  return i
}

export function dominio(url) {
  try {
    return new URL(url).hostname.replace(/^www\d*\./, '')
  } catch {
    return url
  }
}

export function normalizar(t) {
  return String(t || '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase()
}
