import lula from './lula.js'
import flavio from './flavio.js'
import urlDossieLula from '../../docs/dossie-lula.md?url'
import urlDossieFlavio from '../../docs/dossie-flavio.md?url'

// O Vite publica os dossiês de docs/ como arquivos estáticos; `arquivo` passa a ser a URL servida
const comDossie = (c, url) => ({ ...c, dossie: { ...c.dossie, arquivo: url } })

// Ordem de apresentação: número na urna (13, 22)
export const ordem = ['lula', 'flavio']
export const candidatos = { lula: comDossie(lula, urlDossieLula), flavio: comDossie(flavio, urlDossieFlavio) }
export const lista = ordem.map((id) => candidatos[id])
