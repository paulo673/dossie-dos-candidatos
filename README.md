# Dossiê 2º turno 2026

Site interativo (React + Vite) com os dossiês de **Lula** e **Flávio Bolsonaro**, candidatos ao 2º turno da eleição presidencial de 25/10/2026: trajetória, mandatos, processos, votações, patrimônio e uma linha do tempo comparada, com link para a fonte em cada informação.

A página **Economia** (`#/economia`) reúne dados econômicos públicos desde a Proclamação da República (1889–2026), separados pelas cinco fases políticas: gráficos interativos de 52 indicadores, linha do tempo com 149 marcos e as posses presidenciais, médias por fase e por governo, glossário e catálogo de fontes. O relatório completo está em `docs/economia.md`.

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

## Analytics (PostHog)

O PostHog (região EU) só é carregado quando `VITE_POSTHOG_KEY` está definida; sem ela o site funciona normalmente e não baixa o SDK. Copie `.env.example` para `.env.local` para testar localmente e defina a mesma variável no projeto da Vercel para produção.

A configuração fica em `src/lib/analytics.js`: pageview a cada troca de rota (hash), pageleave, cliques automáticos e erros de JavaScript. Não cria perfis de pessoa, não grava sessões e respeita o Do Not Track.

## Estrutura

| Caminho | Conteúdo |
|---|---|
| `docs/` | Dossiês originais em Markdown (o Vite os publica junto com o site) |
| `src/data/lula.js`, `src/data/flavio.js` | Dados estruturados extraídos dos dossiês (formato em `src/data/SCHEMA.md`) |
| `src/data/eleicao.js` | 1º turno, pesquisas e apoios do 2º turno |
| `src/data/economia/` | Séries econômicas (`series.json`), fases e presidentes (`governos.json`), marcos (`marcos.json`), glossário e definição dos indicadores (`index.js`) |
| `docs/economia.md` | Relatório da economia do Brasil República, com tabelas ano a ano por fase, governos, temas, glossário e fontes |
| `src/pages/` | Início (placar, comparação e gráficos), página de cada candidato, linha do tempo, economia, fontes e método |
| `src/components/` | Gráficos, selos de fase processual, links de fonte, layout |

Para atualizar um dado, edite o arquivo em `src/data/` e mantenha o array `fontes` com as URLs.
