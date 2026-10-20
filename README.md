# Dossiê 2º turno 2026

Site interativo (React + Vite) com os dossiês de **Lula** e **Flávio Bolsonaro**, candidatos ao 2º turno da eleição presidencial de 25/10/2026: trajetória, mandatos, processos, votações, patrimônio e uma linha do tempo comparada, com link para a fonte em cada informação.

## Rodar localmente

```bash
npm install
npm run dev
```

## Build e deploy na Vercel

```bash
npm run build
```

O projeto já tem `vercel.json` (framework Vite, saída em `dist/`). Basta importar o repositório na Vercel ou rodar `vercel` na raiz. As rotas usam hash (`#/lula`, `#/linha-do-tempo`), então não é preciso configurar rewrites.

## Estrutura

| Caminho | Conteúdo |
|---|---|
| `docs/` | Dossiês originais em Markdown (o Vite os publica junto com o site) |
| `src/data/lula.js`, `src/data/flavio.js` | Dados estruturados extraídos dos dossiês (formato em `src/data/SCHEMA.md`) |
| `src/data/eleicao.js` | 1º turno, pesquisas e apoios do 2º turno |
| `src/pages/` | Início (urna + comparação), página de cada candidato, linha do tempo, fontes e método |
| `src/components/` | Urna, gráficos, selos de fase processual, links de fonte, layout |

Para atualizar um dado, edite o arquivo em `src/data/` e mantenha o array `fontes` com as URLs.
