const chave = import.meta.env.VITE_POSTHOG_KEY
const host = import.meta.env.VITE_POSTHOG_HOST || 'https://eu.i.posthog.com'

// sem chave (ex.: dev local sem .env.local) o PostHog nem é baixado;
// com chave, vai num chunk separado para não pesar no bundle principal nem atrasar a renderização
export async function iniciarAnalytics() {
  if (!chave) return
  const { default: posthog } = await import('posthog-js')
  posthog.init(chave, {
    api_host: host,
    defaults: '2026-08-30',
    // a navegação é por hash e o 'history_change' só olha o pathname: o pageview é enviado à mão abaixo
    capture_pageview: false,
    capture_pageleave: true,
    // site sobre candidatos: sem perfis de pessoa nem gravação de sessão, só métricas anônimas
    person_profiles: 'identified_only',
    disable_session_recording: true,
    respect_dnt: true,
    capture_exceptions: true,
  })

  posthog.capture('$pageview')
  // cobre o navegar() (troca de hash) e o substituir() (que dispara um hashchange sintético)
  window.addEventListener('hashchange', () => posthog.capture('$pageview'))
}
