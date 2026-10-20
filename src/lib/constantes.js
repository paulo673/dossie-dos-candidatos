import { CircleCheck, CircleDot, CircleSlash, Hourglass } from 'lucide-react'

export const FASES = [
  { id: 'citado', rotulo: 'Citado' },
  { id: 'investigado', rotulo: 'Investigado' },
  { id: 'indiciado', rotulo: 'Indiciado' },
  { id: 'denunciado', rotulo: 'Denunciado' },
  { id: 'reu', rotulo: 'Réu' },
  { id: 'condenado', rotulo: 'Condenado' },
]

export const STATUS = {
  em_curso: { rotulo: 'Em curso', icone: Hourglass, classe: 'st-curso', grupo: 'aberto' },
  absolvido: { rotulo: 'Absolvido', icone: CircleCheck, classe: 'st-absolvido', grupo: 'encerrado' },
  anulado: { rotulo: 'Anulado', icone: CircleSlash, classe: 'st-encerrado', grupo: 'encerrado' },
  arquivado: { rotulo: 'Arquivado', icone: CircleSlash, classe: 'st-encerrado', grupo: 'encerrado' },
  trancado: { rotulo: 'Trancado', icone: CircleSlash, classe: 'st-encerrado', grupo: 'encerrado' },
  rejeitado: { rotulo: 'Denúncia rejeitada', icone: CircleSlash, classe: 'st-encerrado', grupo: 'encerrado' },
  prescrito: { rotulo: 'Prescrito', icone: CircleSlash, classe: 'st-encerrado', grupo: 'encerrado' },
  extinto: { rotulo: 'Punibilidade extinta', icone: CircleSlash, classe: 'st-encerrado', grupo: 'encerrado' },
  sem_processo: { rotulo: 'Sem processo', icone: CircleDot, classe: 'st-encerrado', grupo: 'encerrado' },
}

export const TAGS = {
  fato: { rotulo: 'Fato', titulo: 'Documentado em base oficial ou admitido pelas partes' },
  decisao: { rotulo: 'Decisão', titulo: 'Decisão judicial ou institucional' },
  investigacao: { rotulo: 'Investigação', titulo: 'Apuração em curso, sem denúncia nem condenação' },
  acusacao: { rotulo: 'Acusação', titulo: 'Alegação da imprensa, de adversários, de delatores ou de ex-sócios' },
  defesa: { rotulo: 'Defesa', titulo: 'Versão do candidato ou dos citados' },
  nao_confirmado: { rotulo: 'Não confirmado', titulo: 'Fontes divergentes ou sem verificação primária' },
}
