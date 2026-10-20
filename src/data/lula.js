// Dados derivados de docs/dossie-lula.md (referência: 20/10/2026). URLs copiadas literalmente do dossiê.

const WIKI = 'https://pt.wikipedia.org/wiki/Luiz_In%C3%A1cio_Lula_da_Silva';
const F23 = [WIKI, 'https://www.diariodepernambuco.com.br/noticia/politica/2024/09/lula-lembra-morte-de-esposa-ao-anunciar-apoio-para-gestantes.html'];
const SCANIA = 'https://pt.org.br/ha-40-anos-greve-da-scania-tornava-se-marco-da-luta-sindical/';
const PRISAO80 = 'https://www.brasildefato.com.br/2020/04/19/primeira-prisao-de-lula-completa-40-anos/';
const FPA80 = 'https://fpabramo.org.br/1980-lula-preso-amanha/';
const MEMORIAL = 'https://www.memorialdademocracia.com.br';
const F24 = [SCANIA, PRISAO80, FPA80, MEMORIAL];
const FPA82 = 'https://fpabramo.org.br/1982-a-primeira-eleicao-de-lula-no-marco-do-fim-da-ditadura';
const INSPER = 'https://www.insper.edu.br/pt/noticias/2018/1/imprensa---quatro-atos-e-uma-incognita--a-carreira-e-o-futuro-de';
const ISTOE22 = 'https://istoedinheiro.com.br/com-100-das-secoes-totalizadas-lula-teve-5090-e-bolsonaro-4910';
const F25 = [FPA82, INSPER, ISTOE22];
const INSTITUTO = 'https://institutolula.org';
const JB_CANCER = 'https://www.jb.com.br/pais/noticias/2012/02/17/lula-termina-ultima-radioterapia-e-deve-deixar-hospital-hoje.html';
const CONJUR_CC = 'https://www.conjur.com.br/2016-mar-17/cinco-acoes-supremo-contestam-nomeacao-lula/';
const F26 = [INSTITUTO, JB_CANCER, CONJUR_CC];
const CNN_SAUDE = 'https://www.cnnbrasil.com.br/politica/de-cirurgia-na-cabeca-a-exames-de-rotina-relembre-idas-de-lula-ao-hospital/';
const AOSFATOS_CIR = 'https://www.aosfatos.org/noticias/o-que-se-sabe-cirurgia-de-lula/';
const AB_PELE = 'https://agenciabrasil.ebc.com.br/politica/noticia/2026-04/medico-diz-que-lula-retirou-lesao-e-deve-repousar-nos-proximos-dias';
const F27 = [CNN_SAUDE, AOSFATOS_CIR, AB_PELE];

const WIKI_G1 = 'https://pt.wikipedia.org/wiki/Primeiro_governo_Lula';
const DGABC_AVAL = 'https://www.dgabc.com.br/Noticia/4346937/lula-busca-quarto-mandato-com-pior-avaliacao-de-governo';
const F31 = [WIKI_G1, DGABC_AVAL];
const JB_SM = 'https://www.jb.com.br/economia/noticias/2011/02/16/salario-teve-ganhos-reais-de-53-nos-ultimos-oito-anos.html';
const CEF_83 = 'https://www.congressoemfoco.com.br/noticia/70755/datafolha-lula-e-aprovado-por-83-dos-entrevistados';
const FGV = 'https://www.cps.fgv.br/cps/bd/clippings/uc127.pdf';
const F32 = [JB_SM, CEF_83, FGV];
const WIKI_G3 = 'https://pt.wikipedia.org/wiki/Terceiro_governo_Lula';
const PIB25 = 'https://www.poder360.com.br/poder-economia/pib-do-brasil-cresce-23-em-2025/';
const IPCA25 = 'https://agenciagov.ebc.com.br/noticias/202601/ipca-em-dezembro-vai-a-0-33-e-acumula-4-26-em-2025';
const DESEMP25 = 'https://www.cnnbrasil.com.br/economia/macroeconomia/dezenove-estados-e-df-tem-em-2025-o-menor-desemprego-ja-registrado/';
const FOME25 = 'https://www.opovo.com.br/noticias/brasil/2025/07/28/brasil-sai-do-mapa-da-fome-anuncia-onu.html';
const PRIM25 = 'https://borainvestir.b3.com.br/noticias/deficit-primario-do-governo-central-totaliza-r-617-bilhoes-em-2025/';
const PEDEMEIA = 'https://www.poder360.com.br/poder-educacao/entenda-por-que-decisao-do-tcu-inviabiliza-pe-de-meia/';
const VOABRASIL = 'https://www.poder360.com.br/poder-infra/voa-brasil-vende-20-000-passagens-e-segue-abaixo-de-1-do-ofertado/';
const COP30 = 'https://agenciagov.ebc.com.br/noticias/202511/cop30-aprova-o-pacote-belem-confira-as-decisoes-e-resultados-da-conferencia';
const SCOTUS = 'https://agenciabrasil.ebc.com.br/internacional/noticia/2026-02/suprema-corte-dos-eua-derruba-tarifaco-imposto-por-trump';
const DF_AVAL = 'https://www.poder360.com.br/poder-governo/38-avaliam-governo-lula-ruim-32-bom-datafolha/';
const DF_PESSOAL = 'https://www.folhape.com.br/politica/datafolha-50-desaprovam-desempenho-pessoal-de-lula-e-47-aprovam/512136/';
const F33 = [WIKI_G3, PIB25, IPCA25, DESEMP25, FOME25, PRIM25, PEDEMEIA, VOABRASIL, COP30, SCOTUS, DF_AVAL, DF_PESSOAL];

const GAZ_ACOES = 'https://www.gazetadopovo.com.br/republica/lula-livre-como-ficaram-as-20-acoes-e-investigacoes-contra-o-ex-presidente/';
const JBR_ARQ = 'https://jornaldebrasilia.com.br/noticias/politica-e-poder/lava-jato-faz-9-anos-definha-e-tem-lula-no-topo-de-arquivamentos/';
const F4 = [GAZ_ACOES, JBR_ARQ];
const EBC_TRAIDO = 'https://memoria.ebc.com.br/agenciabrasil//noticia/2005-08-12/address-nation-lula-says-he-was-betrayed-and-begs-forgiveness';
const CEF_CHINAGLIA = 'https://www.congressoemfoco.com.br/noticia/73012/chinaglia-jefferson-avisou-lula-sobre-mensalao';
const TRIBUNA_40 = 'https://www.tribunapr.com.br/noticias/mp-poupa-lula-denuncia-40-por-mensalao-e-diz-que-chefe-era-dirceu/amp/';
const JB_MENSALAO = 'https://www.jb.com.br/pais/noticias/2015/09/26/mpf-arquiva-ultimo-inquerito-sobre-lula-no-mensalao.html';
const WIKI_MENSALAO = 'https://en.wikipedia.org/wiki/Mensal%C3%A3o_scandal';
const F41 = [EBC_TRAIDO, CEF_CHINAGLIA, TRIBUNA_40, JB_MENSALAO, WIKI_MENSALAO];
const P360_PPT = 'https://www.poder360.com.br/justica/stj-condena-dallagnol-a-pagar-r-75-000-a-lula-por-powerpoint/';
const CONJUR_TOFFOLI = 'https://www.conjur.com.br/2023-set-06/toffoli-declara-imprestaveis-provas-leniencia-odebrecht/';
const STF_RECURSOS = 'https://noticias.stf.jus.br/postsnoticias/stf-suspende-julgamento-de-recursos-contra-nulidade-de-provas-utilizadas-em-acordo-de-leniencia-da-odebrecht/';
const F42 = [P360_PPT, CONJUR_TOFFOLI, STF_RECURSOS];
const CONJUR_TRIPLEX = 'https://conjur.com.br/2017-jul-12/lula-condenado-nove-anos-prisao-triplex-guaruja/';
const TRF4_TRIPLEX = 'https://www.trf4.jus.br/trf4/controlador.php?acao=noticia_visualizar&id_noticia=13418';
const STJ_TRIPLEX = 'https://www.stj.jus.br/sites/portalp/Paginas/Comunicacao/Noticias/Quinta-Turma-reduz-pena-do-ex-presidente-Lula-para-oito-anos-e-dez-meses.aspx';
const SBT_PRESCR = 'https://sbtnews.sbt.com.br/noticia/justica/189769-ministerio-publico-federal-reconhece-prescricao-do-caso-do-triplex-de-lula';
const GAZ_ARQ_TRIPLEX = 'https://www.gazetadopovo.com.br/republica/breves/justica-do-df-arquiva-caso-do-triplex-do-guaruja-atribuido-a-lula-na-lava-jato/';
const INTERCEPT = 'https://intercept.com.br/2019/06/09/dallagnol-duvidas-triplex-lula-telegram-petrobras/';
const F43 = [CONJUR_TRIPLEX, TRF4_TRIPLEX, STJ_TRIPLEX, SBT_PRESCR, GAZ_ARQ_TRIPLEX, INTERCEPT];
const AB_SITIO1 = 'https://agenciabrasil.ebc.com.br/justica/noticia/2019-02/lula-e-condenado-12-anos-de-prisao-em-processo-sobre-sitio';
const AB_SITIO2 = 'https://agenciabrasil.ebc.com.br/justica/noticia/2019-11/segunda-instancia-condena-lula-17-anos-de-prisao-em-caso-de-sitio';
const P360_SITIO = 'https://www.poder360.com.br/justica/justica-do-df-volta-a-negar-denuncia-contra-lula-no-caso-do-sitio-de-atibaia/';
const F44 = [AB_SITIO1, AB_SITIO2, P360_SITIO];
const MIGALHAS_INST = 'https://www.migalhas.com.br/quentes/335410/lula-vira-reu-por-lavagem-de-dinheiro-em-instituto';
const P360_LEWA = 'https://www.poder360.com.br/justica/lewandowski-encerra-3-investigacoes-contra-lula/';
const F45 = [MIGALHAS_INST, P360_LEWA];
const GAZ_PALESTRAS = 'https://www.gazetadopovo.com.br/vida-publica/instituto-diz-que-41-empresas-pagaram-por-palestras-de-lula-2wj6p1kfbvcczvsgwpdsg22mo';
const EM_PALESTRAS = 'https://www.em.com.br/app/noticia/politica/2017/10/31/interna_politica,912988/moro-autoriza-provas-da-odebrecht-em-investigacao-sobre-palestras-de-l.shtml';
const F46 = [GAZ_PALESTRAS, EM_PALESTRAS];
const MIGALHAS_ZEL = 'https://www.migalhas.com.br/quentes/347371/justica-federal-absolve-lula-e-gilberto-carvalho-na-operacao-zelotes';
const P360_GRIPEN = 'https://www.poder360.com.br/justica/lewandowski-suspende-acao-penal-contra-lula-por-cacas-suecos/';
const WIKI_ZEL = 'https://pt.wikipedia.org/wiki/Operação_Zelotes';
const MIGALHAS_CERVERO = 'https://www.migalhas.com.br/quentes/283634/justica-absolve-envolvidos-no-caso-cervero';
const CEF_CERVERO = 'https://www.congressoemfoco.com.br/noticia/39493/justica-do-df-absolve-lula-na-lava-jato';
const F48 = [MIGALHAS_CERVERO, CEF_CERVERO];
const METRO_BNDES = 'https://www.metropoles.com/brasil/justica/trf-1-trava-acao-contra-lula-por-esquema-ilicito-do-bndes-com-a-odebrecht';
const P360_TRF1 = 'https://www.poder360.com.br/justica/tribunal-arquiva-acao-contra-lula-na-justica-federal-em-brasilia/';
const AB_ANGOLA = 'https://agenciabrasil.ebc.com.br/en/justica/noticia/2019-07/ex-president-lula-acquitted-odebrecht-case-angola';
const MIGALHAS_QUAD = 'https://www.migalhas.com.br/quentes/316506/juiz-absolve-lula--dilma--palocci-e-mantega-em-acao-do--quadrilhao-do-pt';
const JP_QUAD = 'https://jovempan.com.br/brasil/justica-absolve-lula-dilma-palocci-mantega-e-vaccari-neto-no-quadrilhao-do-pt/';
const F410 = [MIGALHAS_QUAD, JP_QUAD];
const JB_PALOCCI = 'https://www.jb.com.br/pais/noticias/2017/09/06/amp/palocci-conta-que-havia-pacto-de-sangue-por-propina.html';
const P360_PALOCCI = 'https://www.poder360.com.br/lava-jato/toffoli-mantem-anulacao-de-atos-contra-palocci-na-lava-jato/';
const EXAME_LEO = 'https://exame.com/brasil/apartamento-no-guaruja-era-de-lula-diz-ex-presidente-da-oas';
const CEF_LEO = 'https://congressoemfoco.com.br/justica/lava-jato-so-deu-credito-a-empreiteiro-da-oas-apos-ele-incriminar-lula';
const P360_LEO = 'https://www.poder360.com.br/lava-jato/nao-menti-nem-fui-coagido-pelo-a-incriminar-lula-diz-leo-pinheiro/';
const F411 = [JB_PALOCCI, P360_PALOCCI, EXAME_LEO, CEF_LEO, P360_LEO];
const B61_ALETHEIA = 'https://brasil61.com/noticias/lava-jato-pf-detem-lula-e-faz-buscas-em-imoveis-e-escritorios-do-ex-presidente-pran160152';
const CEF_ALETHEIA = 'https://www.congressoemfoco.com.br/noticia/46810/em-nota-defesa-de-lula-avalia-conducao-coercitiva-como-violencia-juridica';
const F412 = [B61_ALETHEIA, CEF_ALETHEIA];
const CEF_ESCUSAS = 'https://congressoemfoco.com.br/noticias/moro-pede-desculpa-ao-stf-por-audio-com-lula-e-dilma';
const CONJUR_GRAMPO = 'https://www.conjur.com.br/2016-jun-13/teoria-descarta-grampos-lula-prova-envia-moro//?print=1';
const F413 = [CEF_ESCUSAS, CONJUR_GRAMPO];
const BBC_INSS = 'https://www.opovo.com.br/agencia/bbc/2025/05/03/amp/o-que-se-sabe-sobre-fraude-no-inss-que-levou-lula-a-demitir-presidente-do-orgao.html';
const AB_CPMI = 'https://agenciabrasil.ebc.com.br/politica/noticia/2026-03/cpmi-do-inss-termina-sem-relatorio-final';
const CNN_MARCOLA = 'https://www.cnnbrasil.com.br/politica/o-que-sabemos-sobre-o-caso-do-ex-chefe-de-gabinete-de-lula-o-marcola/';
const WIKI_JUSCELINO = 'https://pt.wikipedia.org/wiki/Juscelino_Filho';

const AB_FASES = 'https://agenciabrasil.ebc.com.br/politica/noticia/2018-04/relembre-fases-do-processo-que-levou-ordem-de-prisao-de-lula';
const STF_HC = 'https://portal.stf.jus.br/noticias/verNoticiaDetalhe.asp?idConteudo=374436&ori=1';
const CONJUR_PRISAO = 'https://www.conjur.com.br/2018-abr-05/20h-decisao-stf-sergio-moro-ordena-prisao-lula//?print=1';
const P360_SINDICATO = 'https://www.poder360.com.br/justica/lula-deixa-sindicato-em-sao-bernardo-e-apresenta-se-a-pf/';
const MIGALHAS_TSE = 'https://www.migalhas.com.br/quentes/286709/tse-indefere-registro-de-candidatura-de-lula';
const STF_ADC = 'https://portal.stf.jus.br/noticias/verNoticiaDetalhe.asp?idConteudo=429359&ori=1';
const P360_SOLTO = 'https://www.poder360.com.br/justica/lula-livre-ex-presidente-deixa-a-prisao-em-curitiba/';
const STF_2021 = [
  'https://portal.stf.jus.br/noticias/verNoticiaDetalhe.asp?idConteudo=461870&ori=1',
  'https://portal.stf.jus.br/noticias/verNoticiaDetalhe.asp?idConteudo=462854&ori=1',
  'https://portal.stf.jus.br/noticias/verNoticiaDetalhe.asp?idConteudo=464261&ori=1',
  'https://portal.stf.jus.br/noticias/verNoticiaDetalhe.asp?idConteudo=468086&ori=1',
];
const ONU = ['https://www.poder360.com.br/justica/leia-integra-das-conclusoes-da-onu-sobre-moro-e-lula/', 'https://www.aljazeera.com/news/2022/4/28/brazil-probe-violated-ex-president-lulas-rights-un-panel-finds'];
const MIGALHAS_TOFFOLI = 'https://www.migalhas.com.br/quentes/393163/toffoli-prisao-de-lula-foi-armacao-e-um-dos-maiores-erros-da-historia';
const AOSFATOS_INTERCEPT = 'https://aosfatos.org/noticias/reportagens-de-the-intercept-nao-trazem-mensagem-de-dallagnol-a-moro-sobre-caso-triplex/';
const EM_FACHIN = 'https://www.em.com.br/app/noticia/internacional/factcheck/2021/03/10/interna_internacional,1245327/decisao-de-fachin-sobre-condenacoes-de-lula-nao-8220-inocentou-8221-o-e.shtml';
const F5 = [AB_FASES, STF_HC, CONJUR_PRISAO, P360_SINDICATO, MIGALHAS_TSE, STF_ADC, P360_SOLTO, ...STF_2021, ...ONU, MIGALHAS_TOFFOLI, INTERCEPT, AOSFATOS_INTERCEPT, EM_FACHIN];

const JB_GAMECORP = 'https://www.jb.com.br/pais/noticias/2012/11/09/apos-7-anos-investigacao-sobre-negocios-de-filho-de-lula-e-arquivada.html';
const P360_MAPA = 'https://www.poder360.com.br/lava-jato/juiza-arquiva-investigacao-da-lava-jato-contra-filho-de-lula/';
const BBC_LULINHA = 'https://www.opovo.com.br/agencia/bbc/2026/07/31/lulinha-investigado-por-trafico-de-influencia-e-corrupcao-do-inss-a-lava-jato-o-que-pesa-contra-o-filho-de-lula.html';
const CNN_3INQ = 'https://www.cnnbrasil.com.br/politica/entenda-os-tres-inqueritos-em-que-lulinha-e-investigado/';
const METRO_LULINHA = 'https://www.metropoles.com/brasil/o-que-ha-contra-lulinha-na-investigacao-sobre-fraudes-no-inss';
const G1_QUEBRA = 'https://g1.globo.com/politica/noticia/2026/02/26/cpi-do-inss-aprova-quebra-de-sigilo-bancario-de-filho-de-lula.ghtml';
const G1_PORTUGAL = 'https://g1.globo.com/politica/noticia/2026/03/16/lulinha-viajou-a-portugal-com-careca-do-inss-para-visitar-fabrica-de-cannabis-medicinal-afirma-advogado.ghtml';
const BAND_DINO = 'https://www.band.com.br/noticias/dino-anula-quebra-de-sigilo-de-lulinha-e-outras-realizadas-por-cpm-202603051908';
const CNN_195 = 'https://www.cnnbrasil.com.br/politica/lulinha-movimentou-r-195-milhoes-entre-2022-e-2026-diz-relatorio/';
const INFOMONEY_CPMI = 'https://www.infomoney.com.br/politica/os-motivos-do-relator-da-cpmi-para-pedir-a-prisao-e-o-indiciamento-de-lulinha/';
const DGABC_PF = 'https://www.dgabc.com.br/Noticia/4345307/relatorio-da-pf-expoe-divisao-interna-sobre-lulinha-e-sugere-acionar-corregedoria';
const JB_PGR = 'https://www.jb.com.br/brasil/justica/2026/08/1060644-pgr-pede-envio-de-inqueritos-sobre-lulinha-a-primeira-instancia.html';
const CEF_ZEL_LC = 'https://www.congressoemfoco.com.br/noticia/36203/justica-aceita-denuncia-contra-lula-e-filho-na-zelotes';
const G1_WIKIPEDIA = 'http://g1.globo.com/politica/noticia/2015/11/em-relatorio-pf-diz-que-consultoria-do-filho-de-lula-reproduziu-wikipedia.html';
const JP_TOUCHDOWN = 'https://jovempan.com.br/politica/juiz-arquiva-investigacao-contra-lula-e-filho-por-lavagem-de-dinheiro-e-trafico-de-influencia/';
const OPOVO_LC = 'https://www.opovo.com.br/noticias/politica/2024/07/18/policia-conclui-inquerito-de-filho-de-lula-acusado-de-agressao-por-ex-namorada-relembre-o-caso.html';
const P360_FREI = 'https://www.poder360.com.br/lava-jato/justica-rejeita-denuncia-contra-lula-e-frei-chico-na-lava-jato';
const JBR_TRF3 = 'https://jornaldebrasilia.com.br/noticias/politica-e-poder/por-unanimidade-trf-3-rejeita-denuncia-da-lava-jato-contra-lula-e-frei-chico/';
const P360_SINDNAPI = 'https://poder360.com.br/poder-justica/sindicato-ligado-a-irmao-de-lula-e-alvo-da-operacao-que-mira-o-inss/';
const INFOMONEY_414 = 'https://www.infomoney.com.br/politica/receita-de-sindicato-de-irmao-de-lula-salta-414-com-descontos-de-aposentados-diz-pf/';
const DGABC_CGU = 'https://www.dgabc.com.br/Noticia/4262228/cgu-diz-que-sindicato-investigado-por-descontos-escondeu-do-inss-participacao-de-frei-chico';
const METRO_RELATOR = 'https://www.metropoles.com/colunas/paulo-cappelli/relator-da-cpmi-do-inss-poupa-irmao-de-lula';
const CARTA_FREI = 'https://www.cartacapital.com.br/justica/justica-manda-remover-publicacoes-que-associam-irmao-de-lula-a-fraudes-no-inss/';
const CEF_VAVA = 'https://www.congressoemfoco.com.br/noticia/85419/xeque-mate-mpf-livra-vava-e-denuncia-39-pessoas';
const CEF_VELORIO = 'https://congressoemfoco.com.br/justica/as-vesperas-do-enterro-toffoli-autoriza-lula-a-ir-ao-funeral-de-irmao';
const GAZ_TRF1 = 'https://www.gazetadopovo.com.br/republica/lula-trf-1-arquiva-acao-caso-bndes-angola/';
const GAZ_LARANJA = 'https://www.gazetadopovo.com.br/vida-publica/policia-suspeita-que-sobrinho-de-lula-e-laranja-do-ex-presidente-ddwtaj8az0qvo6e05mok5mmbo/';
const TRF4_MARISA = 'https://www.trf4.jus.br/trf4/controlador.php?acao=noticia_visualizar&id_noticia=13318';
const STF_MARISA = 'https://noticias.stf.jus.br/postsnoticias/ministro-manda-desbloquear-plano-de-previdencia-privada-da-ex-primeira-dama-marisa-leticia/';
const UOL_JANJA = 'https://noticias.uol.com.br/politica/ultimas-noticias/2025/04/25/janja-ganha-agenda-oficial-no-site-do-planalto.htm';
const FOLHA_JANJA = 'https://www1.folha.uol.com.br/poder/2023/12/janja-se-mantem-influente-em-1o-ano-de-lula-e-atua-em-temas-do-legislativo-e-do-judiciario.shtml';
const REUTERS_JANJA = 'https://www.reuters.com/world/americas/brazils-first-lady-insults-elon-musk-g20-social-event-2024-11-17/';
const P360_JANJA = 'https://www.poder360.com.br/poder-eleicoes-2026/janja-vira-alvo-no-pt-por-participacao-excessiva-em-campanha-de-lula/';
const AOSFATOS_JANJA = 'https://www.aosfatos.org/noticias/desinformacao-janja-lula/';

const P360_CONVENCAO = 'https://www.poder360.com.br/poder-eleicoes-2026/pt-confirma-lula-na-disputa-por-um-inedito-4o-mandato/';
const AB_2TURNO = 'https://agenciabrasil.ebc.com.br/politica/noticia/2026-09/flavio-e-lula-vao-disputar-2o-turno-para-presidente-da-republica';
const WIKI_2026 = 'https://en.wikipedia.org/wiki/2026_Brazilian_general_election';
const BDF_DATAFOLHA = 'https://www.brasildefato.com.br/2026/10/15/datafolha-aponta-empate-tecnico-no-2o-turno-flavio-bolsonaro-47-lula-45/';
const GAZ_QUAEST = 'https://www.gazetadopovo.com.br/eleicoes/2026/pesquisa-eleitoral-2026/quaest-presidente-outubro-2026-segundo-turno/';
const CARTA_ATLAS = 'https://www.cartacapital.com.br/politica/lula-sobe-mas-flavio-segue-a-frente-no-2o-turno-indica-atlasintel/';
const AB_DEBATE = 'https://agenciabrasil.ebc.com.br/politica/noticia/2026-10/lula-e-flavio-fazem-primeiro-debate-das-eleicoes-na-band';
const LUPA_DEBATE = 'https://www.agencialupa.org/checagem/2026/10/18/ao-vivo-checagem-do-debate-entre-lula-e-flavio-bolsonaro-na-band/';
const F7 = [P360_CONVENCAO, AB_2TURNO, WIKI_2026, BDF_DATAFOLHA, GAZ_QUAEST, CARTA_ATLAS, AB_DEBATE, LUPA_DEBATE];
const F8 = ['https://www.poder360.com.br/poder-eleicoes-2026/saiba-quais-bens-lula-declara-a-justica-eleitoral-ha-quase-30-anos/', 'https://www.cnnbrasil.com.br/eleicoes/lula-declara-patrimonio-de-r-47-mi-ao-tse-valor-e-35-menor-que-em-2022/'];
const DGABC_OBAMA = 'https://www.dgabc.com.br/Noticia/102048/obama-diz-sobre-lula-ele-e-o-cara-eu-adoro-esse-cara-';
const F9 = [DGABC_OBAMA, 'https://www.olhardireto.com.br/noticias/lula-recebe-premio-em-londres-por-papel-na-america-latina', 'https://news.un.org/en/node/379212'];
const CNN_TIME = 'https://www.cnnbrasil.com.br/politica/zelensky-e-tao-responsavel-quanto-putin-diz-lula-capa-da-time/';
const CNN_ISRAEL = 'https://www.cnnbrasil.com.br/internacional/lula-nao-e-bem-vindo-em-israel-diz-ministro-de-relacoes-exteriores/';
const BAND_MADURO = 'https://www.band.com.br/noticias/lula-ataques-na-venezuela-e-captura-de-maduro-ultrapassam-o-inaceitavel-202601031011';
const F11 = ['https://pt.wikipedia.org/wiki/Lula,_o_Filho_do_Brasil', 'https://pt.wikipedia.org/wiki/Democracia_em_Vertigem'];

export default {
  id: 'lula',
  nome: 'Luiz Inácio Lula da Silva',
  nomeCurto: 'Lula',
  partido: 'PT',
  numeroUrna: 13,
  vice: 'Geraldo Alckmin (PSB)',
  coligacao: 'Brasil Pronto pra Mais — PT, PSB, PCdoB, PV, PDT, PSOL, Rede',
  nascimento: '1945-10-27',
  naturalidade: 'Caetés (PE)',
  profissao: 'Torneiro mecânico, sindicalista',
  resumo:
    'Ex-operário metalúrgico e líder sindical, fundador do PT, presidiu o Brasil de 2003 a 2010 e exerce o 3º mandato desde 2023. Foi condenado em dois processos da Lava Jato e ficou 580 dias preso (2018–2019); as condenações foram **anuladas** pelo STF em 2021 por vícios processuais, e hoje ele não tem condenação criminal válida. Em 2026 disputa sua 8ª eleição presidencial e chegou ao 2º turno em 2º lugar.',
  primeiroTurno: { percentual: 45.16, votos: 53879538, posicao: 2 },

  destaques: [
    { valor: '3', rotulo: 'mandatos presidenciais', detalhe: '2003–2006, 2007–2010 e 2023–2026' },
    { valor: '8ª', rotulo: 'candidatura presidencial', detalhe: 'De 1989 a 2026, contando a de 2018, indeferida pelo TSE' },
    { valor: '45,16%', rotulo: 'dos votos válidos no 1º turno de 2026', detalhe: '2º lugar, ~53,88 milhões de votos; Flávio Bolsonaro teve 47,03%' },
    { valor: '580', rotulo: 'dias preso em Curitiba', detalhe: 'De 07/04/2018 a 08/11/2019, na Superintendência da PF' },
    { valor: '83%', rotulo: 'de ótimo/bom ao fim de 2010', detalhe: 'Datafolha, out/2010 — recorde da série' },
    { valor: '23', rotulo: 'investigações arquivadas', detalhe: 'Levantamento da FolhaPress (2023); nenhuma condenação válida' },
  ],

  situacaoJudicial: {
    titulo: 'Nenhuma condenação criminal válida',
    texto:
      'Lula foi condenado por corrupção passiva e lavagem nos casos do **triplex** e do **sítio de Atibaia**, mas o STF **anulou** as condenações em 2021 por incompetência da 13ª Vara de Curitiba e suspeição de Sergio Moro. Na Justiça Federal do DF, os casos **prescreveram** ou tiveram denúncias rejeitadas — o que **não equivale a absolvição de mérito**. Houve absolvições de mérito em outros três processos: Cerveró (2018), "quadrilhão do PT" (2019) e Zelotes/MP 471 (2021). Juridicamente, é presumido inocente.',
    fontes: [...F5, SBT_PRESCR, GAZ_ARQ_TRIPLEX, P360_SITIO, GAZ_ACOES],
  },

  ficha: [
    { rotulo: 'Nome', valor: 'Luiz Inácio Lula da Silva (nascido Luiz Inácio da Silva; incorporou "Lula" ao nome em 1982)', fontes: [WIKI] },
    { rotulo: 'Nascimento', valor: '27/10/1945, Caetés (então distrito de Garanhuns), Pernambuco', fontes: [WIKI] },
    { rotulo: 'Pais', valor: 'Aristides Inácio da Silva e Eurídice Ferreira de Melo ("Dona Lindu") — 7º de 8 filhos', fontes: [WIKI] },
    { rotulo: 'Profissão', valor: 'Torneiro mecânico (SENAI), sindicalista', fontes: [WIKI] },
    { rotulo: 'Partido', valor: 'PT (fundador, 1980)', fontes: F24 },
    { rotulo: 'Cônjuges', valor: 'Maria de Lourdes da Silva (1969–1971, †), Marisa Letícia (1974–2017, †), Rosângela "Janja" da Silva (desde 18/05/2022)', fontes: F23 },
    { rotulo: 'Filhos', valor: 'Lurian, Marcos Cláudio (adotado), Fábio Luís ("Lulinha"), Sandro Luís, Luís Cláudio', fontes: F23 },
    { rotulo: 'Cargos', valor: 'Deputado federal constituinte (1987–1991); Presidente da República (2003–2006, 2007–2010, 2023–atual)', fontes: F25 },
    { rotulo: 'Prisões', valor: 'DOPS, 1980 (31 dias, Lei de Segurança Nacional); PF Curitiba, 07/04/2018 a 08/11/2019 (580 dias)', fontes: [PRISAO80, P360_SOLTO] },
    { rotulo: 'Situação judicial', valor: 'Nenhuma condenação criminal válida. Condenações da Lava Jato anuladas pelo STF (2021); casos depois prescritos, rejeitados ou trancados. Absolvido no mérito em três processos.', fontes: [GAZ_ACOES, EM_FACHIN] },
    { rotulo: 'Situação política', valor: 'Candidato à reeleição (4º mandato); 2º no 1º turno (45,16%); disputa o 2º turno contra Flávio Bolsonaro em 25/10/2026', fontes: [AB_2TURNO, P360_CONVENCAO] },
    { rotulo: 'Vice e coligação (2026)', valor: 'Geraldo Alckmin (PSB); "Brasil Pronto pra Mais": PT, PSB, PCdoB, PV, PDT, PSOL, Rede', fontes: [P360_CONVENCAO] },
    { rotulo: 'Patrimônio declarado (2026)', valor: 'R$ 4.775.650,64', fontes: F8 },
  ],

  trajetoria: [
    {
      periodo: '1945–1960',
      titulo: 'Origens e infância',
      itens: [
        'Nasce em 27/10/1945 em Caetés (PE). O pai migrara antes para Santos e formara outra família.',
        'Em dezembro de 1952, Dona Lindu e os filhos viajam cerca de 13 dias em um **pau de arara** até o litoral paulista (Guarujá/Vicente de Carvalho).',
        'Trabalho infantil: vendedor ambulante no cais aos 8 anos; após a mudança para a capital (~1956), entregador de tinturaria, **engraxate** e auxiliar de escritório.',
        'Em 1960, primeiro emprego com carteira assinada, como office-boy nos Armazéns Gerais Colúmbia.',
      ],
      fontes: [WIKI],
    },
    {
      periodo: '1961–1968',
      titulo: 'Operário metalúrgico',
      itens: [
        'De 1961 a 1963, faz o curso de torneiro mecânico no **SENAI**.',
        'Em 1964, perde o **dedo mínimo da mão esquerda** em acidente com uma prensa na Metalúrgica Independência.',
        'Trabalha em metalúrgicas do ABC, entre elas a Villares (dado não verificado no dossiê).',
      ],
      fontes: [WIKI],
    },
    {
      periodo: '1969–2022',
      titulo: 'Família',
      itens: [
        'Casa-se com **Maria de Lourdes da Silva** em 24/05/1969; ela morre em junho de 1971, grávida de 8 meses, de hepatite, e o bebê também morre. Lula atribui as mortes a atendimento negligente.',
        'A filha **Lurian** nasce em 1974, da relação com a enfermeira Miriam Cordeiro.',
        'Casa-se em 1974 com **Marisa Letícia Rocco Casa**, viúva e mãe de Marcos Cláudio, que Lula adota. Filhos do casal: Fábio Luís (1975), Sandro Luís e Luís Cláudio (1985). Marisa morre em 03/02/2017 (AVC hemorrágico).',
        'O neto Arthur morre em 01/03/2019, aos 7 anos; Lula, preso, é autorizado a ir ao velório por algumas horas.',
        'Namoro público com a socióloga **Rosângela "Janja" da Silva** em 2019; casamento em 18/05/2022.',
      ],
      fontes: F23,
    },
    {
      periodo: '1968–1985',
      titulo: 'Sindicalismo e luta contra a ditadura',
      itens: [
        'Em 1968, entra no Sindicato dos Metalúrgicos de São Bernardo do Campo e Diadema (suplente em 1969), aproximado pelo irmão **Frei Chico**, militante comunista.',
        'Eleito presidente do sindicato em 1975; reeleito em 1978.',
        'Em 12/05/1978, a greve na **Scania** abre o ciclo de **greves do ABC** (1978–1980), com assembleias no Estádio de Vila Euclides.',
        'Em 10/02/1980, funda o **PT** no Colégio Sion (SP); registro definitivo no TSE em 11/02/1982.',
        'Em 19/04/1980, é **preso pelo DOPS** com base na Lei de Segurança Nacional; fica 31 dias detido, faz greve de fome e vai escoltado ao enterro de Dona Lindu. Solto em 20/05/1980.',
        'Condenado pela Justiça Militar em 1981 a 3 anos e 6 meses; condenação anulada pelo STM em 1982 (não verificado).',
        'Em 28/08/1983, participa da fundação da **CUT**; em 1983–1984, é liderança nas **Diretas Já**.',
      ],
      fontes: F24,
    },
    {
      periodo: '1982–2002',
      titulo: 'Carreira eleitoral',
      itens: [
        'Disputa o governo de SP em 1982 (4º lugar).',
        'Eleito deputado federal constituinte em 1986, o mais votado do país (651.763 votos); mandato 1987–1991, sem tentar reeleição.',
        'Derrotado nas eleições presidenciais de 1989 (Collor, no 2º turno), 1994 e 1998 (FHC, no 1º turno).',
        'Em 22/06/2002, divulga a **"Carta ao Povo Brasileiro"**, com compromisso com contratos, superávit primário e controle da inflação.',
        'Eleito presidente em 2002, vencendo José Serra no 2º turno com 61,27%.',
      ],
      fontes: F25,
    },
    {
      periodo: '2003–2010',
      titulo: 'Dois primeiros mandatos',
      itens: [
        'Governa com o vice José Alencar; cria o Bolsa Família, o ProUni, o PAC e o Minha Casa Minha Vida (ver Mandatos).',
        'Enfrenta o escândalo do **mensalão** (2005), é reeleito em 2006 e deixa o cargo com 83% de ótimo/bom, elegendo Dilma Rousseff.',
      ],
      fontes: [...F31, ...F32],
    },
    {
      periodo: '2011–2022',
      titulo: 'Pós-presidência, Lava Jato e volta',
      itens: [
        'Em 2011, cria o **Instituto Lula** (a partir do Instituto Cidadania) e a empresa **L.I.L.S. Palestras, Eventos e Publicações** (primeira palestra paga em março de 2011, para a LG).',
        '**Câncer de laringe:** diagnóstico em 29/10/2011 (tumor de ~3 cm); quimioterapia e radioterapia até 17/02/2012; remissão anunciada em 28/03/2012.',
        'Em 04/03/2016, é alvo de condução coercitiva na Operação Aletheia.',
        'Nomeado ministro-chefe da Casa Civil por Dilma (posse em 17/03/2016); Gilmar Mendes suspende a nomeação em 18/03 por desvio de finalidade. Exonerado em 12/05/2016 com o afastamento de Dilma; o plenário do STF nunca julgou o mérito.',
        'Em 31/08/2016, Dilma Rousseff sofre impeachment definitivo.',
        'De 2017 a 2021: condenações, prisão (580 dias), soltura e anulações pelo STF (ver Casos).',
        'Eleito para o 3º mandato em 30/10/2022, vencendo Jair Bolsonaro com 50,90%.',
      ],
      fontes: [...F26, ...F25],
    },
    {
      periodo: '2023–2026',
      titulo: 'Saúde no 3º mandato',
      itens: [
        '29/09/2023: artroplastia do quadril direito (artrose) e blefaroplastia.',
        '19/10/2024: queda no banheiro do Alvorada; batida na nuca, 5 pontos e pequena hemorragia; cancela a ida ao BRICS em Kazan.',
        '10/12/2024: **craniotomia de emergência** para drenar hematoma subdural ligado à queda (Sírio-Libanês, SP); alta em 15/12.',
        '12/12/2024: embolização da artéria meníngea média (não verificado).',
        'Mai/2025: labirintite.',
        '30/01/2026: cirurgia de catarata (olho esquerdo).',
        '24/04/2026: retirada de carcinoma basocelular no couro cabeludo (câncer de pele localizado, sem metástase).',
      ],
      fontes: F27,
    },
    {
      periodo: '2025–2026',
      titulo: 'Candidatura ao 4º mandato',
      itens: [
        'Anuncia em Jacarta (23/10/2025) que disputará o 4º mandato — depois diz que "foi um erro" anunciar no exterior.',
        'Convenção do PT em 02/08/2026; vice Geraldo Alckmin; registro no TSE em 08/08/2026. É sua **8ª candidatura presidencial**.',
        'Termina o 1º turno (04/10/2026) em 2º lugar, com 45,16%, e disputa o 2º turno com Flávio Bolsonaro em 25/10/2026.',
      ],
      fontes: [P360_CONVENCAO, AB_2TURNO],
    },
  ],

  eleicoes: [
    { ano: 1982, cargo: 'Governador de SP', partido: 'PT', resultado: '4º lugar (~10%); vence Franco Montoro', votos: '~1,14 milhão', percentual: 10, eleito: false },
    { ano: 1986, cargo: 'Deputado federal constituinte (SP)', partido: 'PT', resultado: 'Eleito, o mais votado do país; mandato 1987–1991; não tenta reeleição', votos: '651.763', percentual: null, eleito: true },
    { ano: 1989, cargo: 'Presidente', partido: 'PT', resultado: '1º turno 17,19%; perde o 2º turno para Collor (46,97% x 53,03%)', votos: '—', percentual: 46.97, eleito: false },
    { ano: 1994, cargo: 'Presidente', partido: 'PT', resultado: 'Perde para FHC no 1º turno (FHC 54,28%; Lula ~27%)', votos: '—', percentual: 27, eleito: false },
    { ano: 1998, cargo: 'Presidente', partido: 'PT', resultado: 'Perde para FHC no 1º turno (FHC 53,06%; Lula ~31,7%)', votos: '—', percentual: 31.7, eleito: false },
    { ano: 2002, cargo: 'Presidente', partido: 'PT', resultado: '1º turno 46,44%; vence José Serra no 2º turno com 61,27%', votos: '~52,8 milhões', percentual: 61.27, eleito: true },
    { ano: 2006, cargo: 'Presidente (reeleição)', partido: 'PT', resultado: '1º turno 48,61%; vence Geraldo Alckmin no 2º turno com 60,83%', votos: '—', percentual: 60.83, eleito: true },
    { ano: 2018, cargo: 'Presidente', partido: 'PT', resultado: 'Candidatura indeferida pelo TSE (Ficha Limpa); substituído por Fernando Haddad', votos: '—', percentual: null, eleito: null },
    { ano: 2022, cargo: 'Presidente', partido: 'PT', resultado: '1º turno 48,43%; vence Jair Bolsonaro no 2º turno com 50,90%', votos: '60.345.999', percentual: 50.9, eleito: true },
    { ano: 2026, cargo: 'Presidente (reeleição)', partido: 'PT', resultado: '1º turno 45,16% (2º lugar); 2º turno contra Flávio Bolsonaro em 25/10/2026', votos: '~53,88 milhões', percentual: 45.16, eleito: null },
  ],

  mandatos: [
    {
      id: 'mandato-1',
      titulo: '1º mandato',
      cargo: 'Presidente da República',
      periodo: '2003–2006',
      resumo:
        'De 01/01/2003 a 31/12/2006, com o vice José Alencar (PL/PRB). Manteve o tripé macroeconômico, criou o Bolsa Família e enfrentou o mensalão. O dossiê ressalva que números de leis e indicadores de 2003–2010 devem ser conferidos em fontes oficiais antes de citação formal.',
      numeros: [
        { rotulo: 'Aprovação ao final', valor: '52% ótimo/bom (Datafolha, dez/2006)' },
        { rotulo: 'Bolsa Família', valor: '~3,6 mi (2003) → ~11 mi de famílias (2006)' },
        { rotulo: 'Selic', valor: 'chegou a 26,5% no início de 2003' },
        { rotulo: 'Superávit primário', valor: '~4,25% do PIB' },
        { rotulo: 'Dívida com o FMI', valor: 'quitação antecipada (~US$ 15,5 bi), dez/2005' },
      ],
      listas: [
        {
          titulo: 'Programas e leis',
          itens: [
            { texto: 'Fome Zero (inclui PAA)', detalhe: 'jan–fev/2003' },
            { texto: '**Bolsa Família**', detalhe: 'MP 132/2003 → Lei 10.836, 09/01/2004; unificou Bolsa Escola, Bolsa Alimentação, Auxílio-Gás e Cartão Alimentação' },
            { texto: 'Reforma da Previdência dos servidores', detalhe: 'EC 41, 19/12/2003 — levou à expulsão de parlamentares que fundaram o PSOL' },
            { texto: 'Estatuto do Idoso', detalhe: 'Lei 10.741, 01/10/2003' },
            { texto: 'Estatuto do Desarmamento', detalhe: 'Lei 10.826, 22/12/2003 (referendo de 2005: "não" à proibição do comércio de armas, ~64%)' },
            { texto: 'Crédito consignado', detalhe: 'Lei 10.820/2003' },
            { texto: 'Luz para Todos', detalhe: 'Decreto 4.873, nov/2003' },
            { texto: 'Brasil Sorridente', detalhe: 'mar/2004' },
            { texto: 'Farmácia Popular', detalhe: 'Lei 10.858, 13/04/2004' },
            { texto: 'SAMU 192', detalhe: 'Decreto 5.055, 27/04/2004' },
            { texto: 'Reforma do Judiciário (cria o CNJ)', detalhe: 'EC 45/2004' },
            { texto: 'Lei das PPPs', detalhe: 'Lei 11.079/2004' },
            { texto: '**ProUni**', detalhe: 'MP 2004 → Lei 11.096/2005' },
            { texto: 'Lei de Falências; Lei de Biossegurança', detalhe: 'Leis 11.101 e 11.105/2005' },
            { texto: '**Lei Maria da Penha**', detalhe: 'Lei 11.340, 07/08/2006' },
            { texto: 'Lei de Drogas', detalhe: 'Lei 11.343/2006' },
            { texto: 'Supersimples (Lei Geral da Micro e Pequena Empresa)', detalhe: 'LC 123, 14/12/2006' },
            { texto: 'Fundeb', detalhe: 'EC 53/2006' },
          ],
        },
        {
          titulo: 'Crises',
          itens: [
            { texto: '**Mensalão** (2005)', detalhe: 'Ver Casos' },
            { texto: 'Waldomiro Diniz/bingos (2004)' },
            { texto: 'Caso Francenildo (2006)', detalhe: 'Queda de Antonio Palocci da Fazenda em 27/03/2006' },
            { texto: 'Sanguessugas (2006)' },
            { texto: '"Dossiê dos aloprados" (set/2006)' },
            { texto: 'Apagão aéreo após o acidente do voo Gol 1907 (2006)' },
          ],
        },
        {
          titulo: 'Política externa',
          itens: [
            { texto: 'G20 comercial na OMC (Cancún, 2003)' },
            { texto: 'Comando militar da Minustah no Haiti (2004)' },
            { texto: 'Campanha por assento permanente no Conselho de Segurança (G4)' },
            { texto: 'Crise com a Bolívia pela nacionalização de ativos da Petrobras (2006)' },
          ],
        },
        {
          titulo: 'Ministros-chave',
          itens: [
            { texto: 'Fazenda: Antonio Palocci (até 27/03/2006) → Guido Mantega' },
            { texto: 'Casa Civil: José Dirceu (até jun/2005, caiu no mensalão) → Dilma Rousseff' },
            { texto: 'Banco Central: Henrique Meirelles (2003–2010)' },
            { texto: 'Itamaraty: Celso Amorim (2003–2010)' },
            { texto: 'Educação: Cristovam Buarque → Tarso Genro → Fernando Haddad' },
            { texto: 'Outros: Dilma (Minas e Energia), Márcio Thomaz Bastos (Justiça), Marina Silva (Meio Ambiente), Gilberto Gil (Cultura), Patrus Ananias (Desenvolvimento Social)' },
          ],
        },
      ],
      indicadores: {
        colunas: ['2003', '2004', '2005', '2006'],
        linhas: [
          { rotulo: 'PIB', unidade: '%', valores: [1.1, 5.8, 3.2, 4.0] },
          { rotulo: 'IPCA (2002: 12,53%)', unidade: '%', valores: [9.3, 7.6, 5.69, 3.14] },
        ],
      },
      fontes: F31,
    },
    {
      id: 'mandato-2',
      titulo: '2º mandato',
      cargo: 'Presidente da República',
      periodo: '2007–2010',
      resumo:
        'De 01/01/2007 a 31/12/2010, com o vice José Alencar (PRB). Marcado pelo PAC, pelo Minha Casa Minha Vida, pelo marco do pré-sal e pela resposta à crise de 2008. Terminou com aprovação recorde e elegeu Dilma Rousseff (56,05% x 43,95% sobre José Serra).',
      numeros: [
        { rotulo: 'Aprovação ao final', valor: '83% ótimo/bom (Datafolha, out/2010 — recorde)' },
        { rotulo: 'Aprovação pessoal', valor: '87% (CNI/Ibope, dez/2010)' },
        { rotulo: 'Salário mínimo (2002–2010)', valor: 'R$ 200 → R$ 510: +53,67% reais (DIEESE)' },
        { rotulo: 'Reservas internacionais', valor: '~US$ 38 bi → ~US$ 289 bi' },
        { rotulo: 'Desemprego (PME)', valor: '5,3% em dez/2010' },
        { rotulo: 'Média do PIB 2003–2010', valor: '≈ 4%' },
        { rotulo: 'Bolsa Família', valor: '~12,8 milhões de famílias em 2010' },
      ],
      listas: [
        {
          titulo: 'Programas e leis',
          itens: [
            { texto: '**PAC** (Programa de Aceleração do Crescimento)', detalhe: '28/01/2007' },
            { texto: 'Fundeb (regulamentação)', detalhe: 'Lei 11.494/2007' },
            { texto: '**Reuni** (expansão das universidades federais)', detalhe: 'Decreto 6.096/2007' },
            { texto: 'Pronasci (segurança pública)', detalhe: '2007' },
            { texto: '**Institutos Federais** (38 IFs)', detalhe: 'Lei 11.892, 29/12/2008' },
            { texto: '**Minha Casa Minha Vida**', detalhe: 'MP 459/2009 → Lei 11.977/2009' },
            { texto: 'Sisu e novo Enem', detalhe: '2009–2010' },
            { texto: '**Lei da Ficha Limpa** (iniciativa popular)', detalhe: 'LC 135, 04/06/2010' },
            { texto: 'Estatuto da Igualdade Racial', detalhe: 'Lei 12.288/2010' },
            { texto: 'Plano Nacional de Banda Larga / reativação da Telebras', detalhe: '2010' },
            { texto: '**Marco do pré-sal**', detalhe: 'Partilha (Lei 12.351), cessão onerosa (Lei 12.276), PPSA (Lei 12.304), Fundo Social; capitalização da Petrobras (set/2010); descoberta de Tupi anunciada em nov/2007' },
            { texto: 'Política de valorização do salário mínimo', detalhe: 'Acordo com centrais em 2007 (inflação + PIB de 2 anos antes); virou lei com Dilma (Lei 12.382/2011)' },
            { texto: 'Expansão da rede federal 2003–2010', detalhe: '14 novas universidades federais e 214 escolas técnicas (MEC)' },
          ],
        },
        {
          titulo: 'Crise de 2008',
          itens: [
            { texto: 'Lula chamou a crise de "marolinha" (out/2008)' },
            { texto: 'Resposta: liberação de compulsórios, crédito de BB/Caixa/BNDES (PSI), redução de IPI para carros e linha branca, MCMV' },
            { texto: 'Recessão leve em 2009 e forte recuperação em 2010; críticos veem ali as sementes da "nova matriz econômica" e da expansão parafiscal via BNDES' },
            { texto: 'Grau de investimento: S&P (abr/2008), Fitch (mai/2008), Moody’s (2009)' },
          ],
        },
        {
          titulo: 'Escândalos e críticas',
          itens: [
            { texto: 'Operação Navalha (2007)', detalhe: 'Queda de Silas Rondeau' },
            { texto: 'Cartões corporativos (2008)', detalhe: 'Queda de Matilde Ribeiro' },
            { texto: 'Operação Satiagraha (2008)' },
            { texto: 'Caso Erenice (set/2010)', detalhe: 'Tráfico de influência envolvendo o filho da ministra da Casa Civil' },
            { texto: 'Passaportes diplomáticos para filhos' },
            { texto: 'Loteamento político das estatais', detalhe: 'A Lava Jato depois revelaria esquemas na Petrobras do período' },
          ],
        },
        {
          titulo: 'Política externa',
          itens: [
            { texto: 'G20 de líderes (2008) e 1ª cúpula do BRIC (jun/2009)' },
            { texto: 'Declaração de Teerã com a Turquia (mai/2010), criticada pelos EUA' },
            { texto: 'Abrigo a Zelaya na embaixada em Honduras (2009)' },
            { texto: 'Novo acordo de Itaipu com o Paraguai (2009); vitória na OMC contra os EUA no caso do algodão' },
            { texto: 'Brasil escolhido para a Copa 2014 (2007) e Rio para a Olimpíada 2016 (02/10/2009)' },
            { texto: 'Críticas pela proximidade com Chávez, Cuba e Ahmadinejad' },
          ],
        },
        {
          titulo: 'Ministros-chave',
          itens: [
            { texto: 'Fazenda: Guido Mantega; Planejamento: Paulo Bernardo' },
            { texto: 'Casa Civil: Dilma Rousseff (até mar/2010) → Erenice Guerra (caiu em set/2010)' },
            { texto: 'Educação: Fernando Haddad; Saúde: José Gomes Temporão; Defesa: Nelson Jobim (a partir de jul/2007)' },
            { texto: 'Meio Ambiente: Marina Silva (até mai/2008) → Carlos Minc; Minas e Energia: Edison Lobão' },
          ],
        },
      ],
      indicadores: {
        colunas: ['2007', '2008', '2009', '2010'],
        linhas: [
          { rotulo: 'PIB', unidade: '%', valores: [6.1, 5.1, -0.1, 7.5] },
          { rotulo: 'IPCA', unidade: '%', valores: [4.46, 5.9, 4.31, 5.91] },
        ],
      },
      fontes: F32,
    },
    {
      id: 'mandato-3',
      titulo: '3º mandato',
      cargo: 'Presidente da República',
      periodo: '2023–2026',
      resumo:
        'De 01/01/2023 até 01/01/2027, com o vice Geraldo Alckmin (PSB), que acumulou o MDIC até abril de 2026. Aprovou o arcabouço fiscal, a reforma tributária do consumo e a isenção de IR até R$ 5 mil; enfrentou o 8 de janeiro, as enchentes no RS, a fraude do INSS e as tarifas de Trump.',
      numeros: [
        { rotulo: 'Pior aprovação', valor: '24% ótimo/bom (Datafolha, fev/2025)' },
        { rotulo: 'Avaliação (Datafolha, set/2026)', valor: '32% ótimo/bom x 42% ruim/péssimo; desempenho pessoal: 47% aprovam x 50% desaprovam' },
        { rotulo: 'Avaliação (Datafolha, out/2026)', valor: '35% positiva x 40% negativa' },
        { rotulo: 'Desemprego 2025', valor: '5,6% — menor da série iniciada em 2012' },
        { rotulo: 'Dívida bruta', valor: '~72% do PIB (2022) → ~79% (nov/2025)' },
        { rotulo: 'Selic / câmbio', valor: 'Selic até 15% em 2025; dólar a R$ 6,26 (dez/2024)' },
        { rotulo: 'Salário mínimo', valor: 'R$ 1.320 (2023) → R$ 1.621 (2026)' },
        { rotulo: 'Informalidade', valor: '~38%' },
      ],
      listas: [
        {
          titulo: 'Programas e leis',
          itens: [
            { texto: '"Revogaço" de decretos sobre armas e sigilos', detalhe: 'jan/2023' },
            { texto: 'Retomada da valorização do salário mínimo', detalhe: 'Lei 14.663/2023; limitada ao arcabouço (0,6% a 2,5% reais) no pacote de dez/2024' },
            { texto: '**Novo Bolsa Família** (piso R$ 600 + R$ 150 por criança até 6 anos)', detalhe: 'Lei 14.601/2023' },
            { texto: 'Minha Casa Minha Vida relançado', detalhe: 'Lei 14.620/2023' },
            { texto: 'Mais Médicos relançado (programa criado no governo Dilma, Lei 12.871/2013)', detalhe: 'Lei 14.621/2023' },
            { texto: '**Desenrola Brasil**', detalhe: 'Lei 14.690/2023 — R$ 29 bi renegociados por 10,7 mi de pessoas até dez/2023; "Novo Desenrola" em mai/2026' },
            { texto: 'Igualdade salarial entre homens e mulheres', detalhe: 'Lei 14.611/2023' },
            { texto: '**Arcabouço fiscal**', detalhe: 'LC 200, ago/2023' },
            { texto: '**Novo PAC** (~R$ 1,7 tri)', detalhe: '11/08/2023' },
            { texto: '**Reforma tributária do consumo** (IBS, CBS, Imposto Seletivo)', detalhe: 'EC 132, 20/12/2023; LC 214/2025; LC 227, 13/01/2026 (Comitê Gestor do IBS)' },
            { texto: 'Tributação de offshores e fundos exclusivos; regulação das bets', detalhe: 'Leis 14.754 e 14.790/2023' },
            { texto: '**Pé-de-Meia** (até R$ 2 mil/ano por aluno do ensino médio de baixa renda)', detalhe: 'Lei 14.818, jan/2024 — TCU bloqueou R$ 6 bi em jan/2025 por pagamento fora do Orçamento' },
            { texto: 'Nova Indústria Brasil (R$ 300 bi até 2026)', detalhe: 'jan/2024' },
            { texto: 'Programa Mover (+ "taxa das blusinhas")', detalhe: 'Lei 14.902/2024' },
            { texto: 'Voa Brasil (passagens a R$ 200 para aposentados)', detalhe: 'jul/2024 — vendeu menos de 1% do ofertado' },
            { texto: 'Farmácia Popular: 41 itens gratuitos', detalhe: 'fev/2025' },
            { texto: 'Crédito do Trabalhador (consignado privado)', detalhe: 'mar/2025' },
            { texto: 'Lei da Reciprocidade; Plano Brasil Soberano (resposta às tarifas dos EUA)', detalhe: '2025' },
            { texto: 'Lei Geral do Licenciamento Ambiental (com vetos)', detalhe: 'ago/2025' },
            { texto: 'ECA Digital', detalhe: 'Lei 15.211/2025' },
            { texto: 'Gás do Povo', detalhe: 'nov/2025' },
            { texto: '**Isenção de IR até R$ 5 mil** (desconto parcial até R$ 7.350; compensada por IR mínimo sobre rendas acima de R$ 600 mil/ano; ~15,6 mi beneficiados)', detalhe: 'Lei 15.270, 26/11/2025, vigente desde 01/01/2026' },
            { texto: 'Lei Antifacção; PEC da Segurança (Câmara)', detalhe: 'mar/2026 — só Wikipedia', verificado: false },
            { texto: 'PEC do fim da escala 6x1 / jornada de 40h', detalhe: 'Câmara (mai/2026); status no Senado divergente entre fontes', verificado: false },
          ],
        },
        {
          titulo: 'Crises',
          itens: [
            { texto: '**8 de janeiro de 2023**', detalhe: 'Ataque às sedes dos Três Poderes; intervenção federal na segurança do DF. Bolsonaro condenado pelo STF em set/2025 (27 anos e 3 meses) pela trama golpista' },
            { texto: 'Emergência yanomami', detalhe: 'jan/2023' },
            { texto: '**Enchentes no RS**', detalhe: 'abr–mai/2024: ~183–185 mortos; R$ 98,7 bi anunciados até set/2024 (R$ 42,3 bi efetivamente pagos)' },
            { texto: 'Dengue em 2024', detalhe: '6.041 mortes' },
            { texto: 'Crise cambial e pacote fiscal desidratado', detalhe: 'dez/2024' },
            { texto: 'Revogação da norma do Pix após onda de desinformação', detalhe: 'jan/2025' },
            { texto: 'IOF', detalhe: 'mai–jul/2025: Congresso derrubou o decreto (383 a 98 na Câmara); Moraes restabeleceu a maior parte' },
            { texto: '**Fraude do INSS**', detalhe: 'Operação Sem Desconto, 23/04/2025: R$ 6,3 bi em descontos indevidos (2019–2024)' },
            { texto: 'Banco Master', detalhe: 'Liquidado em nov/2025; Daniel Vorcaro preso em mar/2026 (caso respingou em vários partidos)' },
            { texto: 'Senado rejeita Jorge Messias para o STF', detalhe: 'abr/2026, 42 a 34 — primeira desde 1894 (só Wikipedia)', verificado: false },
          ],
        },
        {
          titulo: 'Política externa',
          itens: [
            { texto: 'Visita de Estado à China', detalhe: 'abr/2023' },
            { texto: '**G20 no Rio**', detalhe: '18–19/11/2024: Aliança Global contra a Fome e a Pobreza' },
            { texto: 'BRICS', detalhe: 'Expansão (2024); veto à Venezuela como parceira (out/2024); cúpula do Rio (jul/2025)' },
            { texto: '**COP30 em Belém**', detalhe: '10–22/11/2025: "Pacote de Belém" e fundo de florestas tropicais (TFFF); sem roteiro formal de saída dos fósseis; contradição apontada com o licenciamento da Petrobras na Foz do Amazonas' },
            { texto: '**Tarifas de Trump**', detalhe: '50% anunciados em 09/07/2025; sanções Magnitsky a Moraes; Seção 301; encontro em Kuala Lumpur (26/10/2025); retirada dos 40% sobre café, carne e frutas (20/11/2025); Suprema Corte dos EUA derrubou as tarifas da IEEPA (fev/2026, 6 a 3)' },
            { texto: 'Nova tarifa de 25% pela Seção 301', detalhe: 'jul/2026', verificado: false },
            { texto: 'Acordo Mercosul–UE', detalhe: 'Assinado em 17/01/2026 em Assunção, sem a presença de Lula' },
            { texto: 'Venezuela, Rússia e Israel', detalhe: 'Ver Polêmicas' },
          ],
        },
        {
          titulo: 'Ministros-chave e quedas',
          itens: [
            { texto: 'Fazenda: Fernando Haddad (até abr/2026) → Dario Durigan' },
            { texto: 'Casa Civil: Rui Costa → Miriam Belchior; Planejamento: Simone Tebet → Bruno Moretti' },
            { texto: 'Justiça: Flávio Dino → Ricardo Lewandowski → Wellington César Lima e Silva; Saúde: Nísia Trindade → Alexandre Padilha' },
            { texto: 'Banco Central: Roberto Campos Neto (até 2024) → Gabriel Galípolo (2025)' },
            { texto: 'Em abril de 2026, 17 ministros saíram para disputar eleições' },
            { texto: 'Quedas: Gonçalves Dias (GSI, após vídeos do 8/1); Daniela Carneiro (Turismo, 2023); Silvio Almeida (Direitos Humanos, set/2024, denúncias de assédio sexual); Juscelino Filho (Comunicações, abr/2025); Carlos Lupi (Previdência, 02/05/2025, fraude no INSS)' },
          ],
        },
        {
          titulo: 'Principais críticas',
          itens: [
            { texto: 'Expansão de gastos, déficits e dívida crescente; metas cumpridas com exclusões contábeis; despesas fora do Orçamento (Pé-de-Meia)' },
            { texto: 'Ataques ao Banco Central; ingerência em estatais (preços da Petrobras, troca de Jean Paul Prates em 2024, afrouxamento da Lei das Estatais)' },
            { texto: 'Dependência do Centrão e das emendas; ministros investigados; programas de baixa execução (Voa Brasil)' },
            { texto: 'Postura com Venezuela, Rússia, Nicarágua e Israel; alta da carga tributária' },
          ],
        },
      ],
      indicadores: {
        colunas: ['2023', '2024', '2025'],
        linhas: [
          { rotulo: 'PIB', unidade: '%', valores: [3.2, 3.4, 2.3] },
          { rotulo: 'IPCA', unidade: '%', valores: [4.62, 4.83, 4.26] },
          { rotulo: 'Desemprego (PNAD, média anual)', unidade: '%', valores: [7.8, 6.6, 5.6] },
          { rotulo: 'Resultado primário do governo central', unidade: 'R$ bi', valores: [-230, -42.9, -61.7] },
        ],
      },
      fontes: F33,
    },
  ],

  casos: [
    {
      id: 'mensalao',
      titulo: 'Mensalão',
      periodo: '2005–2015',
      grupo: 'Mensalão',
      envolvido: 'candidato',
      pessoa: 'Lula',
      resumo: 'Esquema de pagamentos a deputados da base aliada; Lula nunca foi denunciado nem réu.',
      alegacao:
        'Em junho de 2005, Roberto Jefferson (PTB) denunciou pagamentos mensais a deputados em troca de votos, operados pelo PT, por Marcos Valério e pelo Banco Rural. Em 24/09/2012, Valério disse que o esquema pagara despesas pessoais de Lula; a Procuradoria do DF abriu seis procedimentos.',
      defesa: 'Lula disse não saber do esquema e que Valério mentiu em busca de benefícios. Em 12/08/2005, declarou-se "traído"; em nov/2005, disse que o mensalão "não existiu".',
      desfecho:
        'O PGR denunciou 40 pessoas (AP 470, 11/04/2006), deixando Lula de fora; o STF condenou Dirceu, Genoino, Delúbio e Valério em 2012. Os procedimentos derivados contra Lula foram arquivados — o último em 2015.',
      faseMaxima: 'investigado',
      status: 'arquivado',
      fontes: F41,
    },
    {
      id: 'triplex',
      titulo: 'Triplex do Guarujá',
      periodo: '2016–2022',
      grupo: 'Lava Jato',
      envolvido: 'candidato',
      pessoa: 'Lula',
      resumo: 'Condenado em três instâncias; condenação anulada pelo STF em 2021 e caso arquivado por prescrição, sem julgamento de mérito.',
      alegacao:
        'A OAS teria reservado e reformado o apto. 164-A do Ed. Solaris para Lula e pago o armazenamento de seu acervo presidencial, como propina por contratos com a Petrobras (denúncia de set/2016; ~R$ 3,7 mi em vantagens). Moro condenou por corrupção passiva e lavagem (~R$ 2,25 mi ligados ao triplex), com a tese de "atos de ofício indeterminados"; absolveu na parte do acervo.',
      defesa:
        'Lula nunca foi dono nem teve posse ou chaves do imóvel; não houve ato de ofício; o juiz era parcial. "A única prova que existe nesse processo é a da minha inocência."',
      desfecho:
        'Anulado em 2021 (incompetência da 13ª Vara e suspeição de Moro). No DF, o MPF reconheceu a **prescrição** (dez/2021) e a 12ª Vara arquivou (jan/2022). Críticos lembram que três instâncias confirmaram a condenação; a Vaza Jato indicou dúvidas de Dallagnol sobre o vínculo com a Petrobras.',
      faseMaxima: 'condenado',
      status: 'anulado',
      marcos: [
        { data: '2016-09-14', texto: 'Denúncia do MPF; PowerPoint de Dallagnol' },
        { data: '2016-09-20', texto: 'Moro recebe a denúncia; Lula vira réu' },
        { data: '2017-05-10', texto: 'Primeiro interrogatório diante de Moro' },
        { data: '2017-07-12', texto: 'Moro condena: 9 anos e 6 meses' },
        { data: '2018-01-24', texto: 'TRF-4 confirma (3x0) e eleva a pena para 12 anos e 1 mês' },
        { data: '2018-03-26', texto: 'TRF-4 rejeita embargos de declaração' },
        { data: '2018-04-04', texto: 'STF nega HC preventivo 152.752 (6x5)' },
        { data: '2018-04-07', texto: 'Lula se entrega à PF e é levado a Curitiba' },
        { data: '2019-04-23', texto: 'STJ (5ª Turma, 4x0) mantém a condenação e reduz a pena para 8 anos, 10 meses e 20 dias' },
        { data: '2019-11-08', texto: 'Solto após 580 dias, com a decisão do STF sobre trânsito em julgado' },
        { data: '2021-03-08', texto: 'Fachin anula as condenações por incompetência (HC 193.726)' },
        { data: '2021-03-23', texto: '2ª Turma declara Moro suspeito (3x2)' },
        { data: '2021-04-15', texto: 'Plenário confirma a incompetência (8x3)' },
        { data: '2021-06-23', texto: 'Plenário confirma a suspeição de Moro (7x4)' },
        { data: '2021-12', texto: 'MPF reconhece a prescrição na Justiça Federal do DF' },
        { data: '2022-01', texto: '12ª Vara Federal do DF arquiva o caso' },
      ],
      fontes: [...F43, AB_FASES, STF_HC, P360_SOLTO, ...STF_2021],
    },
    {
      id: 'atibaia',
      titulo: 'Sítio de Atibaia',
      periodo: '2017–2021',
      grupo: 'Lava Jato',
      envolvido: 'candidato',
      pessoa: 'Lula',
      resumo: 'Condenado em duas instâncias; condenação anulada em 2021 e denúncia rejeitada e prescrita no DF.',
      alegacao:
        'O Sítio Santa Bárbara estava em nome de Fernando Bittar e Jonas Suassuna, sócios de Fábio Luís. Odebrecht, OAS e José Carlos Bumlai teriam pago ~R$ 1 milhão em reformas como propina. A juíza Gabriela Hardt condenou Lula a 12 anos e 11 meses (críticos apontaram trechos copiados da sentença do triplex).',
      defesa: 'O sítio não era de Lula, que o frequentava como convidado; não havia vínculo com a Petrobras e ele não ocupava cargo público em 2014.',
      desfecho:
        'Anulado por incompetência; Gilmar Mendes estendeu a suspeição de Moro ao caso (24/06/2021). No DF, a juíza Pollyanna Kelly rejeitou a denúncia por se apoiar em provas anuladas e declarou a **prescrição** (ago/2021; nova rejeição em set/2021). Recurso do MPF sem desfecho localizado.',
      faseMaxima: 'condenado',
      status: 'anulado',
      marcos: [
        { data: '2017-08-01', texto: 'Moro recebe a denúncia' },
        { data: '2019-02-06', texto: 'Gabriela Hardt condena: 12 anos e 11 meses' },
        { data: '2019-11-27', texto: 'TRF-4 confirma e eleva a pena para 17 anos, 1 mês e 10 dias' },
        { data: '2021-03-08', texto: 'Fachin anula as condenações de Curitiba' },
        { data: '2021-06-24', texto: 'Gilmar estende a suspeição de Moro ao sítio' },
        { data: '2021-08', texto: 'Justiça Federal do DF rejeita a denúncia e declara prescrição' },
        { data: '2021-09', texto: 'Nova rejeição da denúncia no DF' },
      ],
      fontes: [...F44, ...STF_2021],
    },
    {
      id: 'instituto-terreno',
      titulo: 'Instituto Lula — terreno',
      periodo: '2016–2023',
      grupo: 'Lava Jato',
      envolvido: 'candidato',
      pessoa: 'Lula',
      resumo: 'Ação sobre terreno e apartamento supostamente pagos pela Odebrecht; anulada e depois trancada.',
      alegacao:
        'A Odebrecht teria comprado, por ~R$ 12 milhões, um terreno em SP para a nova sede do Instituto (nunca construída) e um apartamento vizinho ao de Lula em São Bernardo em nome de Glauco da Costamarques, apontado como "laranja". Denúncia em 14/12/2016.',
      defesa: 'O Instituto nunca recebeu o terreno.',
      desfecho:
        'Em 04/08/2020, a 2ª Turma do STF retirou da ação a delação de Palocci, juntada por Moro às vésperas da eleição de 2018. Anulada por incompetência (2021) e **encerrada definitivamente** por Lewandowski em 17/02/2023, por provas "inapelavelmente maculadas" e falta de justa causa.',
      faseMaxima: 'reu',
      status: 'trancado',
      fontes: F45,
    },
    {
      id: 'instituto-doacoes',
      titulo: 'Instituto Lula — doações',
      periodo: '2020–2023',
      grupo: 'Lava Jato',
      envolvido: 'candidato',
      pessoa: 'Lula',
      resumo: 'Acusação de lavagem por doações da Odebrecht ao Instituto; anulada e trancada.',
      alegacao: 'Denúncia de set/2020 por lavagem de R$ 4 milhões: quatro doações de R$ 1 mi da Odebrecht ao Instituto Lula, entre dez/2013 e mar/2014.',
      defesa: 'As doações eram lícitas e contabilizadas.',
      desfecho: 'Anulada por incompetência (2021) e encerrada definitivamente por Lewandowski em 17/02/2023, sem justa causa.',
      faseMaxima: 'reu',
      status: 'trancado',
      fontes: F45,
    },
    {
      id: 'palestras',
      titulo: 'Palestras da L.I.L.S.',
      periodo: '2015–2018',
      grupo: 'Lava Jato',
      envolvido: 'candidato',
      pessoa: 'Lula',
      resumo: 'Inquérito sobre cachês de palestras pagos por empreiteiras; arquivado sem denúncia.',
      alegacao:
        'A L.I.L.S. recebeu ~R$ 27 milhões entre 2011 e 2015, em boa parte de empreiteiras investigadas (~R$ 9,8 mi de quatro delas), sob suspeita de propina disfarçada de cachê. Inquérito aberto em dez/2015 em Curitiba.',
      defesa: 'Foram ~70 palestras para 41 empresas, remuneradas conforme a projeção internacional, como ocorre com outros ex-presidentes.',
      desfecho: 'Arquivado sem denúncia, por falta de provas (set/2018, segundo a Gazeta do Povo).',
      faseMaxima: 'investigado',
      status: 'arquivado',
      fontes: F46,
    },
    {
      id: 'zelotes-mp471',
      titulo: 'Zelotes — MP 471',
      periodo: '2017–2021',
      grupo: 'Operação Zelotes',
      envolvido: 'candidato',
      pessoa: 'Lula e Gilberto Carvalho',
      resumo: 'Acusação ligada a incentivos fiscais a montadoras; absolvição de mérito em 2021.',
      alegacao: 'Lula e Gilberto Carvalho teriam recebido promessa de R$ 6 milhões para o PT em troca da MP 471/2009, de incentivos fiscais a montadoras.',
      defesa: 'O próprio MPF pediu a absolvição.',
      desfecho:
        '**Absolvidos no mérito** em 21/06/2021 pelo juiz Frederico Botelho de Barros Viana (10ª Vara Federal do DF): a denúncia "carece de elementos, ainda que indiciários".',
      faseMaxima: 'reu',
      status: 'absolvido',
      fontes: [MIGALHAS_ZEL, WIKI_ZEL],
    },
    {
      id: 'zelotes-gripen',
      titulo: 'Zelotes — caças Gripen e MP 627',
      periodo: '2016–2023',
      grupo: 'Operação Zelotes',
      envolvido: 'candidato',
      pessoa: 'Lula e Luís Cláudio (filho)',
      resumo: 'Acusação de tráfico de influência na compra dos caças suecos; era a última ação penal aberta contra Lula, trancada em 2023.',
      alegacao:
        'Denúncia aceita em dez/2016 por tráfico de influência, lavagem e organização criminosa: os lobistas Mauro Marcondes e Cristina Mautoni teriam pago ~R$ 2,5 mi à LFT Marketing Esportivo, de Luís Cláudio, em troca da influência de Lula na compra de 36 caças suecos e na MP 627/2013.',
      defesa: 'Os serviços foram efetivamente prestados; a escolha dos Gripen foi técnica, da FAB, já no governo Dilma.',
      desfecho:
        'Lewandowski suspendeu a ação (02/03/2022) com base em mensagens da Spoofing e a **trancou em 17/02/2023**, afirmando que a compra ocorreu "dentro dos parâmetros constitucionais de legalidade".',
      faseMaxima: 'reu',
      status: 'trancado',
      fontes: [P360_GRIPEN, P360_LEWA, WIKI_ZEL],
    },
    {
      id: 'obstrucao-cervero',
      titulo: 'Obstrução de justiça — Delcídio/Cerveró',
      periodo: '2015–2018',
      grupo: 'Lava Jato',
      envolvido: 'candidato',
      pessoa: 'Lula',
      resumo: 'Primeiro processo em que Lula se tornou réu; absolvição de mérito em 2018.',
      alegacao:
        'Em nov/2015, o senador Delcídio do Amaral foi preso após ser gravado oferecendo dinheiro e plano de fuga para impedir a delação de Nestor Cerveró. Em sua delação, Delcídio disse que agia a mando de Lula, que virou réu em jul/2016.',
      defesa: 'Delcídio inventou a versão para obter benefícios.',
      desfecho:
        'O MPF pediu a absolvição (set/2017). Em 12/07/2018, o juiz Ricardo Augusto Soares Leite (10ª Vara Federal de Brasília) **absolveu todos os réus** por provas insuficientes, baseadas só na palavra de delatores.',
      faseMaxima: 'reu',
      status: 'absolvido',
      fontes: F48,
    },
    {
      id: 'janus-angola',
      titulo: 'Operação Janus — Odebrecht em Angola',
      periodo: '2016–2020',
      grupo: 'BNDES / Odebrecht',
      envolvido: 'candidato',
      pessoa: 'Lula e Taiguara Rodrigues dos Santos (sobrinho da 1ª esposa)',
      resumo: 'Suposta influência de Lula em obras da Odebrecht em Angola financiadas pelo BNDES; ação trancada pelo TRF-1.',
      alegacao:
        'A Odebrecht teria subcontratado a Exergia, de Taiguara, em obras em Angola financiadas pelo BNDES (como a hidrelétrica de Cambambe), em troca da influência de Lula. A PF suspeitava que Taiguara fosse "laranja" de Lula.',
      defesa: 'O dossiê não detalha a versão da defesa neste caso.',
      desfecho:
        'Em 2019, o juiz Vallisney absolveu todos da acusação de organização criminosa e rejeitou parte das imputações de lavagem. O TRF-1 **trancou a ação** por falta de justa causa para Taiguara (jun/2020) e para Lula (01/09/2020).',
      faseMaxima: 'reu',
      status: 'trancado',
      fontes: [METRO_BNDES, AB_ANGOLA, GAZ_TRF1, GAZ_LARANJA],
    },
    {
      id: 'bndes-odebrecht',
      titulo: 'BNDES — linha de crédito à Odebrecht',
      periodo: '–2021',
      grupo: 'BNDES / Odebrecht',
      envolvido: 'candidato',
      pessoa: 'Lula',
      resumo: 'Ação sobre crédito do BNDES à Odebrecht; encerrada sem justa causa.',
      alegacao: 'Ação sobre a linha de crédito do BNDES à Odebrecht, correlata ao caso de Angola.',
      defesa: 'O dossiê não detalha a versão da defesa neste caso.',
      desfecho: 'Encerrada por falta de justa causa em 06/09/2021.',
      faseMaxima: 'reu',
      status: 'trancado',
      fontes: [P360_TRF1, METRO_BNDES],
    },
    {
      id: 'guine-equatorial',
      titulo: 'Guiné Equatorial / grupo ARG',
      periodo: '–2021',
      grupo: 'BNDES / Odebrecht',
      envolvido: 'candidato',
      pessoa: 'Lula',
      resumo: 'Suposta doação de R$ 1 mi do grupo ARG ao Instituto Lula; ação trancada.',
      alegacao: 'Caso Guiné Equatorial / grupo ARG: suposta doação de R$ 1 milhão ao Instituto Lula.',
      defesa: 'O dossiê não detalha a versão da defesa neste caso.',
      desfecho: 'Ação trancada pelo TRF-3 (2021). Caso correlato da **OAS na Costa Rica** também foi trancado.',
      faseMaxima: 'reu',
      status: 'trancado',
      fontes: [P360_TRF1, METRO_BNDES, AB_ANGOLA],
    },
    {
      id: 'quadrilhao',
      titulo: '"Quadrilhão do PT"',
      periodo: '2017–2019',
      grupo: 'Lava Jato',
      envolvido: 'candidato',
      pessoa: 'Lula, Dilma, Palocci, Mantega, Vaccari e outros',
      resumo: 'Denúncia por organização criminosa; absolvição sumária em 2019.',
      alegacao: 'Denúncia do PGR Rodrigo Janot (set/2017) por organização criminosa para desviar recursos da Petrobras, do BNDES e de outros órgãos (~R$ 1,48 bilhão).',
      defesa: 'O próprio MPF-DF pediu a absolvição.',
      desfecho:
        '**Absolvição sumária** em 04/12/2019 (juiz Marcus Vinicius Reis Bastos, 12ª Vara Federal do DF), a pedido do MPF-DF: a denúncia não descrevia os elementos do crime e "traduz tentativa de criminalizar a atividade política". Fundamento: atipicidade, não falta de provas.',
      faseMaxima: 'reu',
      status: 'absolvido',
      fontes: F410,
    },
    {
      id: 'delacoes',
      titulo: 'Delações de Palocci, Marcelo Odebrecht e Léo Pinheiro',
      periodo: '2017–2024',
      grupo: 'Lava Jato',
      envolvido: 'candidato',
      pessoa: 'Lula',
      resumo: 'Relatos de delatores que embasaram acusações da Lava Jato; não são processos autônomos.',
      alegacao:
        'Palocci falou em "pacto de sangue" entre Lula e a Odebrecht (06/09/2017; ~R$ 300 mi ao PT). Marcelo Odebrecht descreveu a planilha "Italiano" e a PF interpretou o codinome "Amigo" como Lula. Léo Pinheiro (OAS) disse a Moro (20/04/2017) que o triplex era destinado a Lula — peça central da condenação.',
      defesa:
        'Relatos "contraditórios" de delatores em busca de benefícios. Reportagem Folha/Intercept (2019) apontou que a delação de Pinheiro foi recusada em 2016 e a versão mudou até incriminar Lula; Pinheiro nega coação.',
      desfecho:
        'A delação de Palocci (firmada com a PF e homologada pelo TRF-4) não resultou em condenação de Lula; seu anexo divulgado por Moro a seis dias do 1º turno de 2018 virou indício de parcialidade. As provas dos sistemas da Odebrecht foram declaradas imprestáveis (2023), e Toffoli anulou os atos da Lava Jato contra Marcelo (21/05/2024).',
      faseMaxima: 'citado',
      status: 'sem_processo',
      fontes: [...F411, ...F42],
    },
    {
      id: 'aletheia',
      titulo: 'Operação Aletheia — condução coercitiva',
      periodo: '2016',
      grupo: 'Lava Jato',
      envolvido: 'candidato',
      pessoa: 'Lula e familiares',
      resumo: '24ª fase da Lava Jato: Lula foi levado a depor em Congonhas; medida depois citada como indício de parcialidade de Moro.',
      alegacao:
        'Em 04/03/2016, a operação cumpriu 44 ordens (33 buscas e 11 conduções coercitivas), com buscas em imóveis de Lula, dos filhos e no Instituto Lula, no âmbito das investigações da Lava Jato.',
      defesa: 'A defesa chamou a medida de "violência jurídica", pois Lula nunca havia se recusado a depor.',
      desfecho:
        'Medida investigativa, não um processo autônomo. Em jun/2018, o STF declarou inconstitucional a condução coercitiva para interrogatório (ADPFs 395 e 444; não verificado). O episódio foi citado pelo STF e pela ONU como indício de parcialidade de Moro.',
      faseMaxima: 'investigado',
      status: 'sem_processo',
      fontes: F412,
    },
    {
      id: 'grampo-bessias',
      titulo: 'Grampo "Bessias" e nomeação à Casa Civil',
      periodo: '2016–2022',
      grupo: 'Lava Jato',
      envolvido: 'candidato',
      pessoa: 'Lula, Dilma Rousseff e Aloizio Mercadante',
      resumo: 'Denúncia por obstrução ligada à nomeação para a Casa Civil; grampo anulado e arquivamento pedido pelo MPF.',
      alegacao:
        'Em 16/03/2016, Moro divulgou a conversa em que Dilma diz que enviaria o termo de posse "pelo Bessias" (Jorge Messias) "para usar em caso de necessidade" — interpretada como tentativa de dar foro privilegiado a Lula. Janot denunciou Lula, Dilma e Mercadante por obstrução (2017).',
      defesa: 'O termo foi enviado porque Lula talvez não comparecesse à cerimônia.',
      desfecho:
        'Moro pediu "escusas" ao STF; em jun/2016, Teori Zavascki anulou a gravação (feita após a ordem de interrupção e com usurpação de competência). O MPF pediu o arquivamento em 11/04/2022 (fonte partidária; parcialmente verificado).',
      faseMaxima: 'denunciado',
      status: 'arquivado',
      verificado: false,
      fontes: [...F413, CONJUR_CC],
    },
    {
      id: 'mesada-frei-chico',
      titulo: '"Mesada" da Odebrecht a Frei Chico',
      periodo: '2019–2020',
      grupo: 'Lava Jato',
      envolvido: 'candidato',
      pessoa: 'Lula e Frei Chico (irmão)',
      resumo: 'Denúncia sobre pagamentos da Odebrecht ao irmão de Lula; rejeitada em 2019 e confirmada pelo TRF-3.',
      alegacao:
        'Frei Chico (José Ferreira da Silva) teria recebido R$ 1.131.333,12 da Odebrecht entre 2003 e 2015, em pagamentos de R$ 3 a 5 mil, sem contrapartida. A Lava Jato de SP denunciou Lula e Frei Chico (set/2019).',
      defesa: 'Não havia prova de que Lula soubesse dos pagamentos.',
      desfecho:
        'Em 16/09/2019, o juiz Ali Mazloum (7ª Vara Federal Criminal de SP) **rejeitou a denúncia** como "inepta" (sem prova de que Lula soubesse; fatos prescritos para maiores de 70). O TRF-3 confirmou por unanimidade (18/05/2020).',
      faseMaxima: 'denunciado',
      status: 'rejeitado',
      fontes: [P360_FREI, JBR_TRF3],
    },
    {
      id: 'mtst-triplex',
      titulo: 'Suposta instigação à ocupação do triplex pelo MTST',
      periodo: '2020',
      grupo: 'Outros',
      envolvido: 'candidato',
      pessoa: 'Lula',
      resumo: 'Denúncia por suposta instigação à ocupação do triplex; rejeitada.',
      alegacao: 'Lula teria instigado a ocupação do triplex do Guarujá pelo MTST.',
      defesa: 'O dossiê não detalha a versão da defesa neste caso.',
      desfecho: 'Denúncia rejeitada (Santos, fev/2020).',
      faseMaxima: 'denunciado',
      status: 'rejeitado',
      fontes: F4,
    },
    {
      id: 'carta-capital',
      titulo: 'Patrocínio da Odebrecht à Carta Capital',
      periodo: '–2020',
      grupo: 'Outros',
      envolvido: 'candidato',
      pessoa: 'Lula',
      resumo: 'Apuração sobre patrocínio da Odebrecht à revista; arquivada.',
      alegacao: 'Apuração sobre patrocínio da Odebrecht à revista Carta Capital.',
      defesa: 'O dossiê não detalha a versão da defesa neste caso.',
      desfecho: 'Arquivado (set/2020).',
      faseMaxima: 'investigado',
      status: 'arquivado',
      fontes: F4,
    },
    {
      id: 'lsn-falas',
      titulo: 'Inquérito pela Lei de Segurança Nacional',
      periodo: '2020',
      grupo: 'Outros',
      envolvido: 'candidato',
      pessoa: 'Lula',
      resumo: 'Inquérito por falas contra Bolsonaro, pedido por Moro como ministro da Justiça; arquivado.',
      alegacao: 'Falas de Lula contra Jair Bolsonaro motivaram pedido de inquérito com base na Lei de Segurança Nacional, feito por Sergio Moro como ministro.',
      defesa: 'O dossiê não detalha a versão da defesa neste caso.',
      desfecho: 'Arquivado (2020).',
      faseMaxima: 'investigado',
      status: 'arquivado',
      fontes: F4,
    },
    {
      id: 'inss-governo',
      titulo: 'Fraude do INSS (Operação Sem Desconto)',
      periodo: '2025–2026',
      grupo: 'Terceiro mandato',
      envolvido: 'candidato',
      pessoa: 'Lula (não investigado)',
      resumo: 'Descontos indevidos de ~R$ 6,3 bi em benefícios de aposentados; Lula não é investigado.',
      alegacao:
        'Em 23/04/2025, PF e CGU revelaram que entidades associativas descontavam mensalidades de aposentados sem autorização — ~R$ 6,3 bilhões entre 2019 e 2024, ~4,1 milhões de beneficiários. A maioria das entidades foi credenciada no governo Bolsonaro, mas os descontos seguiram até abril de 2025.',
      defesa:
        'O governo demitiu o presidente do INSS, Alessandro Stefanutto; o ministro Carlos Lupi saiu em 02/05/2025. Programa de ressarcimento com mais de 4,4 milhões de adesões; R$ 2,8 bi bloqueados pela AGU.',
      desfecho:
        '**Lula não é investigado.** O filho Fábio Luís é investigado no STF e o Sindnapi (de Frei Chico) foi alvo de buscas. A CPMI do INSS terminou em 27–28/03/2026 **sem relatório aprovado** (relatório com 216 indiciamentos rejeitado por 19 a 12).',
      faseMaxima: 'citado',
      status: 'sem_processo',
      fontes: [BBC_INSS, AB_CPMI],
    },
    {
      id: 'marcola',
      titulo: '"Marcola", ex-chefe do gabinete pessoal',
      periodo: '2026',
      grupo: 'Terceiro mandato',
      envolvido: 'aliado',
      pessoa: 'Marco Aurélio Santana Ribeiro ("Marcola")',
      resumo: 'Ex-chefe do gabinete pessoal de Lula deixou o cargo em meio a relatos de pagamentos de empresária ligada a Lulinha.',
      alegacao:
        'Marcola deixou o cargo em 21/07/2026, oficialmente para a campanha; segundo a CNN, o motivo real seriam pagamentos recebidos da empresária Roberta Luchsinger, ligada a Lulinha. É mencionado em inquérito sigiloso relatado por Flávio Dino.',
      defesa: 'Diz que foi um empréstimo pessoal, já quitado.',
      desfecho: 'Inquérito em andamento, sob sigilo.',
      faseMaxima: 'citado',
      status: 'em_curso',
      fontes: [CNN_MARCOLA, CNN_3INQ],
    },
    {
      id: 'juscelino',
      titulo: 'Juscelino Filho — emendas',
      periodo: '2024–2025',
      grupo: 'Terceiro mandato',
      envolvido: 'aliado',
      pessoa: 'Juscelino Filho (ex-ministro das Comunicações)',
      resumo: 'Ministro indiciado pela PF e denunciado pela PGR por corrupção em emendas; deixou o cargo.',
      alegacao: 'Indiciado pela PF (jun/2024) e denunciado pela PGR por corrupção envolvendo emendas.',
      defesa: 'O dossiê não registra a versão da defesa.',
      desfecho: 'Deixou o Ministério das Comunicações em abr/2025; desfecho judicial não informado no dossiê.',
      faseMaxima: 'denunciado',
      status: 'em_curso',
      fontes: [WIKI_JUSCELINO],
    },

    {
      id: 'lulinha-gamecorp',
      titulo: 'Gamecorp / Telemar-Oi',
      periodo: '2005–2012',
      grupo: 'Familiares',
      envolvido: 'familiar',
      pessoa: 'Fábio Luís (filho)',
      resumo: 'Investimento da Telemar na empresa de Lulinha investigado por suspeita de tráfico de influência; arquivado.',
      alegacao:
        'Em 2005, a Telemar (depois Oi) investiu ~R$ 5,2 mi na Gamecorp, fundada em 2004 por Fábio com Fernando e Kalil Bittar (capital declarado ~R$ 100 mil), e pagou ~R$ 10 mi por programas de TV, quando dependia de decisões do governo. O tema surgiu na CPMI dos Correios (2005); inquérito da PF em 2007.',
      defesa: 'O dossiê não detalha a versão da defesa neste caso.',
      desfecho: 'Arquivado pelo MPF em nov/2012: "ilações podem convencer os leigos, mas são absolutamente insuficientes".',
      faseMaxima: 'investigado',
      status: 'arquivado',
      fontes: [JB_GAMECORP],
    },
    {
      id: 'lulinha-mapa-da-mina',
      titulo: 'Operação Mapa da Mina',
      periodo: '2019–2022',
      grupo: 'Familiares',
      envolvido: 'familiar',
      pessoa: 'Fábio Luís (filho)',
      resumo: '69ª fase da Lava Jato mirou repasses da Oi ao grupo Gamecorp; arquivada sem denúncia.',
      alegacao:
        'Em 10/12/2019, o MPF alegou que a Oi/Telemar repassou ~R$ 132 mi ao grupo Gamecorp/Gol (Lulinha, Bittar, Jonas Suassuna) entre 2004 e 2016, como propina disfarçada, e que parte do dinheiro teria pago o sítio de Atibaia. A PF pediu a prisão de Fábio; a Justiça negou.',
      defesa: 'O dossiê não detalha a versão da defesa. Boatos associados (Ferrari de ouro, "maior fazenda do mundo", jatinho, sociedade na JBS) foram desmentidos por agências de checagem.',
      desfecho: 'Arquivada em 17/01/2022 (10ª Vara Criminal Federal de SP), a pedido do MPF, porque as provas derivavam de medidas de Moro anuladas. Não houve denúncia.',
      faseMaxima: 'investigado',
      status: 'arquivado',
      fontes: [P360_MAPA],
    },
    {
      id: 'lulinha-inss',
      titulo: 'Lulinha: INSS / "Careca do INSS" e inquéritos no STF',
      periodo: '2025–2026',
      grupo: 'Familiares',
      envolvido: 'familiar',
      pessoa: 'Fábio Luís (filho)',
      resumo: 'Investigado por suposta ligação com o operador da fraude do INSS e em três inquéritos no STF; sem denúncia nem indiciamento formal.',
      alegacao:
        'A testemunha Edson Claro disse que Antônio Carlos Camilo Antunes, o "Careca do INSS", pagaria uma "mesada" de ~R$ 300 mil a Lulinha; mensagens falam de repasse a empresa de Roberta Luchsinger com destino ao "filho do rapaz". Relatório vazado aponta movimentação de R$ 19,5 mi entre 2022 e 2026. Em jul–ago/2026, o STF abriu três inquéritos por tráfico de influência e corrupção (World Cannabis, 3Structure IT na Dataprev e lobby para empresas de tecnologia).',
      defesa:
        'Conheceu Antunes por meio de Roberta em 2024, não sabia das fraudes e não recebeu dinheiro; admite viagem a Portugal paga pelo lobista; reclama de "vazamentos seletivos" e uso eleitoral. Dataprev e 3Structure negam favorecimento.',
      desfecho:
        'Em andamento, **sem denúncia e sem indiciamento formal pela PF**. A PF disse ao STF não haver indícios de envolvimento direto de Fábio nos descontos fraudulentos; relatório interno (set/2026) classificou os elementos como "frágeis". O relatório da CPMI que pedia seu indiciamento e prisão foi rejeitado. A PGR pediu envio dos casos à 1ª instância.',
      faseMaxima: 'investigado',
      status: 'em_curso',
      marcos: [
        { data: '2025-09', texto: '"Careca do INSS" é preso preventivamente' },
        { data: '2025-12', texto: 'Testemunha Edson Claro cita "mesada" de ~R$ 300 mil a Lulinha' },
        { data: '2026-02-26', texto: 'CPMI aprova quebra de sigilo bancário (votação em bloco)' },
        { data: '2026-03-05', texto: 'Flávio Dino anula a quebra da CPMI; vaza relatório de R$ 19,5 mi' },
        { data: '2026-03-16', texto: 'Defesa admite viagem a Portugal com Antunes em 2024' },
        { data: '2026-03-28', texto: 'Relatório da CPMI com pedido de indiciamento e prisão é rejeitado (19 a 12)' },
        { data: '2026-07-30', texto: 'Mendonça abre inquérito (World Cannabis)' },
        { data: '2026-07-31', texto: 'Mendonça abre inquérito (3Structure IT/Dataprev, ~R$ 55,7 mi)' },
        { data: '2026-08-04', texto: 'Dino abre inquérito sigiloso sobre lobby para empresas de tecnologia' },
        { data: '2026-09', texto: 'Relatório interno da PF classifica os elementos como "frágeis"' },
      ],
      fontes: [BBC_LULINHA, CNN_3INQ, METRO_LULINHA, G1_QUEBRA, G1_PORTUGAL, BAND_DINO, CNN_195, INFOMONEY_CPMI, DGABC_PF, JB_PGR],
    },
    {
      id: 'luis-claudio-zelotes',
      titulo: 'Luís Cláudio: Zelotes (LFT Marketing Esportivo)',
      periodo: '2015–2023',
      grupo: 'Familiares',
      envolvido: 'familiar',
      pessoa: 'Luís Cláudio (filho)',
      resumo: 'Réu na ação dos caças Gripen/MP 627; situação definitiva dele não verificada.',
      alegacao:
        'Os lobistas Mauro Marcondes e Cristina Mautoni teriam pago ~R$ 2,5 mi à LFT, de Luís Cláudio. A PF afirmou (nov/2015) que relatórios de consultoria entregues pela LFT reproduziam textos da Wikipédia. Réu desde 16/12/2016.',
      defesa: 'Os serviços foram prestados.',
      desfecho: 'A ação foi suspensa (2022) e trancada (17/02/2023) pelo STF em relação a Lula; a situação definitiva de Luís Cláudio não foi verificada.',
      faseMaxima: 'reu',
      status: 'trancado',
      verificado: false,
      fontes: [CEF_ZEL_LC, G1_WIKIPEDIA, P360_GRIPEN],
    },
    {
      id: 'luis-claudio-touchdown',
      titulo: 'Luís Cláudio: Touchdown / Odebrecht',
      periodo: '2019–2020',
      grupo: 'Familiares',
      envolvido: 'familiar',
      pessoa: 'Luís Cláudio (filho)',
      resumo: 'Suposto custeio da Odebrecht a projeto de futebol americano; indiciado e depois arquivado.',
      alegacao: 'A Odebrecht teria custeado ~R$ 2 mi em favor da Touchdown (futebol americano) em 2011. Indiciado pela PF com Lula (mar/2019).',
      defesa: 'O dossiê não detalha a versão da defesa neste caso.',
      desfecho: 'Arquivado em 07/12/2020 (6ª Vara Criminal Federal de SP), a pedido do MPF.',
      faseMaxima: 'indiciado',
      status: 'arquivado',
      fontes: [JP_TOUCHDOWN],
    },
    {
      id: 'luis-claudio-violencia',
      titulo: 'Luís Cláudio: acusação de violência doméstica',
      periodo: '2024',
      grupo: 'Familiares (não relacionado a corrupção)',
      envolvido: 'familiar',
      pessoa: 'Luís Cláudio (filho)',
      resumo: 'Acusação da ex-companheira; inquérito concluído sem indiciamento. Não é caso de corrupção.',
      alegacao: 'A ex-companheira Natália Schincariol registrou boletim de ocorrência; o TJ-SP concedeu medida protetiva (abr/2024).',
      defesa: 'Ele nega as acusações.',
      desfecho: 'Inquérito concluído sem indiciamento (jul/2024).',
      faseMaxima: 'investigado',
      status: 'sem_processo',
      fontes: [OPOVO_LC],
    },
    {
      id: 'frei-chico-sindnapi',
      titulo: 'Frei Chico: Sindnapi / INSS',
      periodo: '2025–2026',
      grupo: 'Familiares',
      envolvido: 'familiar',
      pessoa: 'Frei Chico (irmão)',
      resumo: 'Sindicato do qual é vice-presidente foi alvo de buscas na Operação Sem Desconto; ele não é alvo direto.',
      alegacao:
        'A arrecadação do Sindnapi com descontos subiu 414% entre 2019 e 2024; a CGU apontou que 76,9% dos descontos não foram autorizados e que o sindicato omitiu do INSS a participação de Frei Chico (vedação legal a parentes de detentor de cargo público). A PF fez buscas na sede (09/10/2025).',
      defesa: 'Obteve decisão judicial para remover publicações que o associavam às fraudes.',
      desfecho: 'Segundo as reportagens, não é alvo direto da PF; a CPMI rejeitou convocá-lo (19 a 11) e o relatório final não pediu seu indiciamento.',
      faseMaxima: 'citado',
      status: 'sem_processo',
      fontes: [P360_SINDNAPI, INFOMONEY_414, DGABC_CGU, METRO_RELATOR, CARTA_FREI],
    },
    {
      id: 'vava-xeque-mate',
      titulo: 'Vavá: Operação Xeque-Mate',
      periodo: '2007',
      grupo: 'Familiares',
      envolvido: 'familiar',
      pessoa: 'Genival Inácio da Silva, "Vavá" (irmão)',
      resumo: 'Irmão de Lula indiciado pela PF por tráfico de influência na máfia dos caça-níqueis; não foi denunciado.',
      alegacao: 'Em jun/2007, apareceu em 16 gravações fazendo lobby e usando o nome de Lula; foi indiciado por tráfico de influência e exploração de prestígio.',
      defesa: 'A própria PF disse não haver prova de que tenha conseguido interferir ou recebido dinheiro. Lula o chamou de "mais ingênuo que lobista".',
      desfecho: 'O MPF não o denunciou. Vavá morreu em 29/01/2019.',
      faseMaxima: 'indiciado',
      status: 'sem_processo',
      fontes: [CEF_VAVA],
    },
    {
      id: 'marisa',
      titulo: 'Marisa Letícia: triplex e Instituto Lula',
      periodo: '2016–2017',
      grupo: 'Familiares',
      envolvido: 'familiar',
      pessoa: 'Marisa Letícia (esposa, †2017)',
      resumo: 'Denunciada por lavagem em duas ações da Lava Jato; punibilidade extinta por sua morte, sem condenação.',
      alegacao: 'Denunciada por lavagem no caso do triplex (14/09/2016) e no do apartamento vizinho/terreno do Instituto Lula (14/12/2016).',
      defesa: 'Após a morte, a defesa pediu absolvição sumária, que foi negada.',
      desfecho:
        'Morreu em 03/02/2017; **punibilidade extinta pela morte**. O TRF-4 manteve a decisão (nov/2017), ressaltando que a presunção de inocência permanece. Nunca foi condenada. Em mar/2022, o STF mandou desbloquear seu plano de previdência.',
      faseMaxima: 'reu',
      status: 'extinto',
      fontes: [TRF4_MARISA, STF_MARISA],
    },
    {
      id: 'marcos-sandro',
      titulo: 'Marcos Cláudio e Sandro Luís',
      periodo: '2016–2021',
      grupo: 'Familiares',
      envolvido: 'familiar',
      pessoa: 'Marcos Cláudio e Sandro Luís (filhos)',
      resumo: 'Alvos de busca na Aletheia; inquérito sobre repasses entre empresas teria sido arquivado (não verificado).',
      alegacao: 'Foram alvos de busca na Operação Aletheia (04/03/2016). Coluna opinativa menciona inquérito por supostos repasses "sem causa" entre empresas dos filhos.',
      defesa: 'Nenhuma denúncia ou condenação localizada.',
      desfecho: 'Inquérito arquivado em 2021, segundo fonte opinativa (não verificado).',
      faseMaxima: 'investigado',
      status: 'arquivado',
      verificado: false,
      fontes: F412,
    },
    {
      id: 'janja',
      titulo: 'Janja: transparência e atuação informal',
      periodo: '2023–2026',
      grupo: 'Familiares (sem acusação)',
      envolvido: 'familiar',
      pessoa: 'Rosângela "Janja" da Silva (esposa)',
      resumo: 'Não há investigação, denúncia ou acusação formal de corrupção; há polêmicas políticas e de transparência.',
      alegacao:
        'Críticas por sigilo de agenda e gastos, atuação influente sem cargo, viagens oficiais e declarações como o insulto em inglês a Elon Musk no G20 Social (16/11/2024); críticas dentro do PT por "participação excessiva" na campanha de 2026.',
      defesa:
        'A Presidência sustentou que ela não é agente pública. Após decisão da CMRI (2025) e a Orientação Normativa nº 94 da AGU, a agenda passou a ser publicada no site do Planalto em 25/04/2025. É alvo frequente de desinformação.',
      desfecho: 'Nenhum processo. Não há acusação de corrupção.',
      faseMaxima: 'citado',
      status: 'sem_processo',
      fontes: [UOL_JANJA, FOLHA_JANJA, REUTERS_JANJA, P360_JANJA, AOSFATOS_JANJA],
    },
  ],

  votacoes: null,

  patrimonio: {
    serie: [
      { ano: 1998, valor: 320000, detalhe: '~R$ 320 mil' },
      { ano: 2002, valor: 423000, detalhe: '~R$ 423 mil' },
      { ano: 2006, valor: 839000, detalhe: '~R$ 839 mil' },
      { ano: 2018, valor: 7990000, detalhe: 'R$ 7,99 milhões' },
      { ano: 2022, valor: 7423725.78, detalhe: 'Maior item: VGBL de R$ 5,57 mi' },
      { ano: 2026, valor: 4775650.64, detalhe: '69% em dois planos VGBL (Brasilprev R$ 1,92 mi; Bradesco R$ 1,38 mi); frações de terrenos e de um sítio em Riacho Grande; casa em construção; 50% de um apartamento; Chevrolet 2010/2011 (R$ 50 mil); 98% da L.I.L.S. (R$ 49 mil)' },
    ],
    nota: 'Valores declarados ao TSE; os de 1998 a 2006 são aproximados. O patrimônio de 2026 teve queda nominal de 35% e real de ~46% sobre 2022.',
    fontes: F8,
  },

  polemicas: [
    { titulo: 'Rússia/Ucrânia: "Zelensky é tão responsável quanto Putin"', data: '04/05/2022', texto: 'Em entrevista de capa à revista Time, disse que Zelensky é tão responsável pela guerra quanto Putin e que EUA e União Europeia "também são culpados". A embaixada ucraniana protestou.', fontes: [CNN_TIME] },
    { titulo: 'Crimeia e "parar de incentivar a guerra"', data: 'abr/2023', texto: 'Sugeriu que a Ucrânia poderia "abrir mão da Crimeia" e que os EUA precisam "parar de incentivar a guerra", o que gerou críticas dos EUA. Depois recebeu Lavrov (fev/2024), foi ao desfile do Dia da Vitória em Moscou (mai/2025) e encontrou Zelensky (set/2025).', fontes: [CNN_TIME] },
    { titulo: 'Gaza: "genocídio"', data: '25/10/2023', texto: 'Chamou de "genocídio" a guerra em Gaza.', fontes: [CNN_ISRAEL] },
    { titulo: 'Israel e a comparação com Hitler', data: 'fev/2024', texto: 'Em 18/02/2024, na cúpula da União Africana (Adis Abeba), comparou a ação de Israel em Gaza ao que "Hitler fez com os judeus". Em 19/02, o chanceler Israel Katz o declarou *persona non grata* e o Brasil chamou de volta seu embaixador (retirada definitiva em mai/2024, não verificada).', fontes: [CNN_ISRAEL] },
    { titulo: 'Maduro e a "narrativa construída"', data: 'mai/2023', texto: 'Ao receber Nicolás Maduro em Brasília, disse que as críticas à democracia venezuelana eram uma "narrativa construída".', fontes: [BAND_MADURO] },
    { titulo: 'Venezuela: "regime muito desagradável"', data: '2024', texto: 'O Brasil não reconheceu a vitória de Maduro sem as atas; Lula chamou o governo de "regime muito desagradável", mas "não uma ditadura", e vetou a Venezuela como parceira do BRICS.', fontes: [BAND_MADURO] },
    { titulo: 'Captura de Maduro pelos EUA', data: '03/01/2026', texto: 'Após os EUA bombardearem a Venezuela e capturarem Maduro, Lula disse que a ação "ultrapassa uma linha inaceitável" — episódio explorado pela oposição.', fontes: [BAND_MADURO] },
    { titulo: '"Marolinha"', data: 'out/2008', texto: 'Chamou de "marolinha" os efeitos da crise financeira global de 2008 sobre o Brasil; a economia teve recessão leve em 2009 e forte recuperação em 2010.', fontes: F32 },
    { titulo: 'Navios de guerra iranianos no Rio', data: '2023', texto: 'Autorizou dois navios de guerra iranianos a atracarem no Rio de Janeiro.', fontes: [WIKI_G3] },
    { titulo: 'Ataques ao Banco Central', data: '2023–2024', texto: 'Fez ataques públicos ao Banco Central e a Roberto Campos Neto, apontados por críticos entre os problemas do 3º mandato.', fontes: [WIKI_G3] },
    { titulo: 'Filme "Lula, o Filho do Brasil"', data: '2010', texto: 'O filme de Fábio Barreto foi acusado de propaganda eleitoral; foi o filme brasileiro mais caro até então e um fracasso de bilheteria.', fontes: F11 },
    { titulo: 'Passaportes diplomáticos para parentes', data: '2010', texto: 'Filhos e parentes receberam passaportes diplomáticos como exceção; o de Fábio Luís foi anulado pela Justiça em 2013. Polêmica administrativa, não crime.', fontes: F32 },
    { titulo: 'Anúncio da candidatura em Jacarta', data: '23/10/2025', texto: 'Anunciou no exterior que disputaria o 4º mandato e depois disse que "foi um erro" fazê-lo.', fontes: [P360_CONVENCAO] },
  ],

  extras: [
    {
      titulo: 'Prêmios e reconhecimento',
      icone: 'award',
      itens: [
        'Prêmio Príncipe das Astúrias (2003); lista Time 100 (2004, 2010, 2023).',
        'Prêmio da Paz Félix Houphouët-Boigny da UNESCO (2008); **Chatham House Prize** (2009); 33º mais poderoso do mundo pela Forbes (2009).',
        '"Campeão Mundial na Luta contra a Fome" pela ONU (2010); **World Food Prize** (2011, com John Kufuor); Four Freedoms Award (2012).',
        'Ordem Suprema do Crisântemo do Japão (2025); homenagem da Académie Française (2025).',
        "Em 02/04/2009, no G20 de Londres, Barack Obama disse: \"That's my man right here… I love this guy… the most popular politician on Earth\" — popularizado como **\"ele é o cara\"**.",
        'Mais de 37 títulos de doutor honoris causa (o primeiro pela UFV, jan/2011; Coimbra, mar/2011; Sciences Po; Paris 8 etc.); cidadão honorário de Paris (2020).',
        'Uma espécie de sapo, *Brachycephalus lulai*, recebeu seu nome (2025).',
      ],
      fontes: F9,
    },
    {
      titulo: 'Livros, filmes e cultura',
      icone: 'film',
      itens: [
        '**Lula, o Filho do Brasil** — livro de Denise Paraná (1996, prefácio de Antonio Candido) e filme de Fábio Barreto (2009/2010), com Rui Ricardo Diaz e Glória Pires.',
        '**Democracia em Vertigem** (Petra Costa, 2019) — indicado ao Oscar de Melhor Documentário (2020); **Apocalipse nos Trópicos** (Petra Costa, 2024).',
        '**Peões** (Eduardo Coutinho, 2004) e **Entreatos** (João Moreira Salles, 2004, bastidores da campanha de 2002).',
        '**Ao Sul da Fronteira** (Oliver Stone, 2009).',
        '**Polícia Federal: A Lei É para Todos** (2017), com Ary Fontoura como Lula; série **O Mecanismo** (Netflix, 2018).',
        'Música: "Luís Inácio (300 Picaretas)", Paralamas do Sucesso (1995).',
      ],
      fontes: F11,
    },
    {
      titulo: 'Família',
      icone: 'heart',
      itens: [
        'Pais: Aristides Inácio da Silva e Eurídice Ferreira de Melo ("Dona Lindu"); Lula é o 7º de 8 filhos. Irmãos citados no dossiê: Frei Chico (José Ferreira da Silva) e Vavá (Genival Inácio da Silva, †2019).',
        'Esposas: Maria de Lourdes da Silva (1969–1971, †), Marisa Letícia (1974–2017, †) e Rosângela "Janja" da Silva (desde 18/05/2022).',
        'Filhos: Lurian (n. 1974), Marcos Cláudio (adotado), Fábio Luís (1975), Sandro Luís e Luís Cláudio (1985).',
        'Conclusão do dossiê: nenhum familiar tem hoje condenação criminal por corrupção; o único caso relevante em aberto são os inquéritos de 2026 contra Fábio Luís, sem denúncia.',
        'Renata Moreira (nora, esposa de Lulinha) teve bens apreendidos na Aletheia e devolvidos por ordem do TRF-4; não é acusada de crime. Sobre Lurian e os netos, nenhuma investigação localizada.',
      ],
      fontes: F23,
    },
    {
      titulo: 'Fundamentos jurídicos das anulações',
      icone: 'book',
      itens: [
        '**Incompetência** (Fachin/plenário): os fatos não se ligavam exclusivamente aos desvios na Petrobras; atos de juízo incompetente poderiam, em tese, ser ratificados.',
        '**Suspeição** (Gilmar/2ª Turma/plenário): parcialidade demonstrada por fatos dos autos — condução coercitiva, grampo dos advogados de Lula, divulgação do áudio Lula–Dilma, juntada da delação de Palocci às vésperas da eleição e aceitação de cargo no governo Bolsonaro. Atos de juiz suspeito não podem ser ratificados.',
        'Votos vencidos: Nunes Marques, Fux e Marco Aurélio rejeitaram as mensagens da Vaza Jato como prova ilícita e de autenticidade não periciada.',
        '**Comitê de Direitos Humanos da ONU (2022):** concluiu que Moro foi parcial, que houve violação da presunção de inocência e da privacidade e que o impedimento de concorrer em 2018 foi arbitrário. A força jurídica da decisão é controversa; Moro reagiu criticando o STF.',
        '**Acusação/críticos:** três instâncias confirmaram o triplex; o STJ rejeitou a suspeição em 2019; as mensagens da Vaza Jato são prova ilícita; prescrição não equivale a inocência.',
        '**Defesa** (Cristiano Zanin e Valeska Teixeira Zanin Martins): não houve prova de propriedade nem ato de ofício; houve "lawfare" e juiz parcial; teses acolhidas pelo STF e pela ONU.',
      ],
      fontes: [...STF_2021, ...ONU, EM_FACHIN, AOSFATOS_INTERCEPT],
    },
    {
      titulo: 'Eleição 2026: campanha',
      icone: 'info',
      itens: [
        'Coligação "Brasil Pronto pra Mais" (PT, PSB, PCdoB, PV, PDT, PSOL, Rede), com Geraldo Alckmin de vice; convenção em 02/08/2026 (Expo Center Norte, SP) e registro no TSE em 08/08/2026.',
        'Adversário: senador Flávio Bolsonaro (PL), com vice Alfredo Gaspar (relator da CPMI do INSS). Jair Bolsonaro está inelegível e preso; Tarcísio de Freitas desistiu (set/2025).',
        '1º turno (04/10/2026): Flávio 47,03% x Lula 45,16%; Cury 2,89%, Renan Santos 2,24%, Caiado 2,18%, Zema 0,27%. Abstenção de 21,08%, a maior desde 1998.',
        'A última Datafolha antes do 1º turno dava Lula à frente (45% x 42% dos válidos) — primeira vez que o líder das pesquisas terminou em 2º. Desde 1989, nenhum 2º colocado no 1º turno virou no 2º.',
        'Apoios no 2º turno: Lula — partidos da coligação + PSOL, PSTU, PCB, UP; Flávio — Cury, Caiado, Zema, União, PP, Republicanos, Podemos, Novo. MDB e PSD neutros.',
        'Pesquisas do 2º turno (Flávio x Lula): Datafolha 08/10 49% x 45%; AtlasIntel 09/10 52,8% x 47,2% (válidos); Quaest 14/10 46% x 44%; Datafolha 15/10 47% x 45% (51% x 49% dos válidos); AtlasIntel/Bloomberg 19/10 51,1% x 48,9% (válidos).',
        'Primeiro debate na Band (18/10): Lula cobrou de Flávio supostos R$ 134 milhões de Daniel Vorcaro (Banco Master); Flávio citou a investigação contra Fábio Luís. Debate da Globo previsto para 23/10. Lula completa 81 anos em 27/10.',
        'Congresso eleito (Wikipedia): PL com a maior bancada da Câmara (121 deputados) e ~29 das 54 cadeiras em disputa no Senado.',
      ],
      fontes: F7,
    },
  ],

  timeline: [
    { data: '1945-10-27', dataLabel: '27/10/1945', titulo: 'Nasce em Caetés (PE)', descricao: 'Luiz Inácio da Silva nasce em Caetés, então distrito de Garanhuns, 7º de 8 filhos de Aristides e Eurídice ("Dona Lindu").', categoria: 'pessoal', destaque: true, fontes: [WIKI] },
    { data: '1952-12', dataLabel: 'Dez/1952', titulo: 'Migra para São Paulo em pau de arara', descricao: 'Dona Lindu e os filhos viajam cerca de 13 dias até o litoral paulista (Guarujá/Vicente de Carvalho).', categoria: 'pessoal', destaque: true, fontes: [WIKI] },
    { data: '1964', titulo: 'Perde o dedo mínimo em acidente de trabalho', descricao: 'Perde o dedo mínimo da mão esquerda em acidente com prensa na Metalúrgica Independência.', categoria: 'pessoal', fontes: [WIKI] },
    { data: '1968', titulo: 'Entra no Sindicato dos Metalúrgicos', descricao: 'Aproximado pelo irmão Frei Chico, entra no sindicato de São Bernardo do Campo e Diadema; é suplente em 1969.', categoria: 'politica', fontes: F24 },
    { data: '1969-05-24', dataLabel: '24/05/1969', titulo: 'Casa-se com Maria de Lourdes', descricao: 'Ela morreria em junho de 1971, grávida de 8 meses, de hepatite; o bebê também morre.', categoria: 'pessoal', fontes: F23 },
    { data: '1974', titulo: 'Casa-se com Marisa Letícia; nasce Lurian', descricao: 'Casa-se com Marisa Letícia, viúva e mãe de Marcos Cláudio, que Lula adota. No mesmo ano nasce a filha Lurian.', categoria: 'pessoal', fontes: F23 },
    { data: '1975', titulo: 'Presidente do sindicato', descricao: 'Eleito presidente do Sindicato dos Metalúrgicos de São Bernardo e Diadema; seria reeleito em 1978.', categoria: 'politica', fontes: F24 },
    { data: '1978-05-12', dataLabel: '12/05/1978', titulo: 'Greve da Scania abre as greves do ABC', descricao: 'Começa o ciclo de greves de 1978–1980, com assembleias no Estádio de Vila Euclides.', categoria: 'politica', destaque: true, fontes: [SCANIA, MEMORIAL] },
    { data: '1980-02-10', dataLabel: '10/02/1980', titulo: 'Fundação do PT', descricao: 'O Partido dos Trabalhadores é fundado no Colégio Sion (SP); o registro definitivo no TSE sai em 11/02/1982.', categoria: 'politica', destaque: true, fontes: F24 },
    { data: '1980-04-19', dataLabel: '19/04/1980', titulo: 'Preso pelo DOPS', descricao: 'No 19º dia de uma greve de 41 dias, é preso com base na Lei de Segurança Nacional. Faz greve de fome; Dona Lindu morre durante a prisão. É solto em 20/05/1980, após 31 dias.', categoria: 'justica', destaque: true, fontes: [PRISAO80, FPA80] },
    { data: '1981', dataLabel: '1981–82', titulo: 'Condenado pela Justiça Militar; condenação anulada', descricao: 'Condenado em 1981 a 3 anos e 6 meses; a condenação teria sido anulada pelo STM em 1982 (não verificado).', categoria: 'justica', tag: 'nao_confirmado', fontes: F24 },
    { data: '1982', titulo: 'Disputa o governo de SP e adota "Lula" no nome', descricao: 'Fica em 4º lugar, com ~1,14 milhão de votos (~10%), na eleição vencida por Franco Montoro. No mesmo ano incorpora "Lula" ao nome.', categoria: 'politica', fontes: [FPA82, WIKI] },
    { data: '1983-08-28', dataLabel: '28/08/1983', titulo: 'Fundação da CUT', descricao: 'Participa da fundação da Central Única dos Trabalhadores. Em 1983–1984, é uma das lideranças das Diretas Já.', categoria: 'politica', fontes: F24 },
    { data: '1986', titulo: 'Deputado constituinte mais votado do país', descricao: 'Eleito deputado federal por SP com 651.763 votos; exerce o mandato de 1987 a 1991 e não tenta reeleição.', categoria: 'politica', destaque: true, fontes: F25 },
    { data: '1989', titulo: 'Perde o 2º turno para Collor', descricao: 'Tem 17,19% no 1º turno e perde o 2º para Fernando Collor (46,97% x 53,03%).', categoria: 'politica', fontes: F25 },
    { data: '1994', dataLabel: '1994 e 1998', titulo: 'Duas derrotas para FHC no 1º turno', descricao: 'Fernando Henrique Cardoso vence com 54,28% em 1994 (Lula ~27%) e é reeleito com 53,06% em 1998 (Lula ~31,7%).', categoria: 'politica', fontes: F25 },
    { data: '2002-06-22', dataLabel: '22/06/2002', titulo: '"Carta ao Povo Brasileiro"', descricao: 'Compromete-se com contratos, superávit primário e controle da inflação para acalmar o mercado.', categoria: 'politica', fontes: F25 },
    { data: '2002-10', dataLabel: '2002', titulo: 'Eleito presidente da República', descricao: 'Tem 46,44% no 1º turno e vence José Serra no 2º com 61,27% (~52,8 milhões de votos).', categoria: 'politica', destaque: true, fontes: F25 },
    { data: '2003-01-01', dataLabel: '01/01/2003', titulo: 'Posse no 1º mandato; lança o Fome Zero', descricao: 'Assume com o vice José Alencar e mantém o tripé macroeconômico; o Fome Zero é lançado em jan–fev/2003.', categoria: 'governo', fontes: F31 },
    { data: '2003-12-19', dataLabel: '19/12/2003', titulo: 'Reforma da Previdência dos servidores', descricao: 'A EC 41 institui contribuição de inativos e acaba com integralidade e paridade para novos servidores; a votação leva à expulsão de parlamentares que fundariam o PSOL.', categoria: 'governo', fontes: F31 },
    { data: '2004-01-09', dataLabel: '09/01/2004', titulo: 'Lei do Bolsa Família', descricao: 'A Lei 10.836 unifica programas de transferência de renda; o Bolsa Família passa de ~3,6 milhões (2003) para ~11 milhões de famílias (2006).', categoria: 'governo', destaque: true, fontes: F31 },
    { data: '2005-06', dataLabel: 'Jun/2005', titulo: 'Escândalo do mensalão', descricao: 'Roberto Jefferson denuncia pagamentos mensais a deputados da base. José Dirceu deixa a Casa Civil. Lula nunca seria denunciado no caso.', categoria: 'polemica', destaque: true, tag: 'acusacao', fontes: F41 },
    { data: '2005-08-12', dataLabel: '12/08/2005', titulo: 'Diz sentir-se "traído" pelo mensalão', descricao: 'Em pronunciamento, fala em "práticas inaceitáveis" e diz que "o PT tem que pedir desculpas". Em novembro, no Roda Viva, afirma que o mensalão "não existiu".', categoria: 'polemica', tag: 'defesa', fontes: [EBC_TRAIDO] },
    { data: '2006-04-11', dataLabel: '11/04/2006', titulo: 'PGR denuncia 40 no mensalão; Lula fica de fora', descricao: 'O procurador-geral Antonio Fernando de Souza denuncia 40 pessoas na AP 470; depois disse que "não havia nada que justificasse" denunciar Lula.', categoria: 'justica', tag: 'decisao', fontes: [TRIBUNA_40] },
    { data: '2006-10', dataLabel: '2006', titulo: 'Reeleito contra Geraldo Alckmin', descricao: 'Tem 48,61% no 1º turno e vence Alckmin no 2º com 60,83%. Encerra o 1º mandato com 52% de ótimo/bom.', categoria: 'politica', destaque: true, fontes: [...F25, DGABC_AVAL] },
    { data: '2007-01-28', dataLabel: '28/01/2007', titulo: 'Lançamento do PAC', descricao: 'O Programa de Aceleração do Crescimento abre o 2º mandato, iniciado em 01/01/2007.', categoria: 'governo', fontes: F32 },
    { data: '2007-06', dataLabel: 'Jun/2007', titulo: 'Irmão Vavá é indiciado na Operação Xeque-Mate', descricao: 'Vavá aparece em gravações fazendo lobby para a máfia dos caça-níqueis; a PF o indicia, mas o MPF não o denuncia. Lula o chama de "mais ingênuo que lobista".', categoria: 'justica', tag: 'investigacao', fontes: [CEF_VAVA] },
    { data: '2007-11', dataLabel: 'Nov/2007', titulo: 'Anunciada a descoberta de Tupi (pré-sal)', descricao: 'A descoberta abre caminho para o marco regulatório do pré-sal, aprovado em 2010.', categoria: 'governo', fontes: F32 },
    { data: '2008-10', dataLabel: 'Out/2008', titulo: 'Crise global: a "marolinha"', descricao: 'Lula chama a crise de "marolinha". O governo libera compulsórios, amplia crédito público e reduz IPI; há recessão leve em 2009.', categoria: 'governo', fontes: F32 },
    { data: '2009', titulo: 'Minha Casa Minha Vida', descricao: 'O programa habitacional é criado pela MP 459/2009, convertida na Lei 11.977/2009.', categoria: 'governo', fontes: F32 },
    { data: '2009-04-02', dataLabel: '02/04/2009', titulo: 'Obama: "ele é o cara"', descricao: 'No G20 de Londres, Barack Obama o chama de "the most popular politician on Earth".', categoria: 'politica', fontes: [DGABC_OBAMA] },
    { data: '2010-06-04', dataLabel: '04/06/2010', titulo: 'Sanciona a Lei da Ficha Limpa', descricao: 'A LC 135, de iniciativa popular, seria aplicada contra a candidatura do próprio Lula em 2018.', categoria: 'governo', fontes: F32 },
    { data: '2010-10', dataLabel: '2010', titulo: 'Sai com 83% de aprovação e elege Dilma', descricao: 'Datafolha registra 83% de ótimo/bom, recorde da série. Dilma Rousseff vence José Serra (56,05% x 43,95%).', categoria: 'politica', destaque: true, fontes: [CEF_83] },
    { data: '2011', titulo: 'Cria o Instituto Lula e a L.I.L.S.', descricao: 'Funda o Instituto Lula e a empresa de palestras L.I.L.S.; a primeira palestra paga, para a LG, ocorre em março de 2011.', categoria: 'pessoal', fontes: [INSTITUTO] },
    { data: '2011-10-29', dataLabel: '29/10/2011', titulo: 'Diagnóstico de câncer de laringe', descricao: 'Tumor de ~3 cm tratado com quimioterapia e radioterapia até 17/02/2012; remissão anunciada em 28/03/2012.', categoria: 'pessoal', fontes: [JB_CANCER] },
    { data: '2016-03-04', dataLabel: '04/03/2016', titulo: 'Condução coercitiva na Operação Aletheia', descricao: 'Lula é levado a depor no Aeroporto de Congonhas; há buscas em imóveis dele, dos filhos e no Instituto Lula. A defesa fala em "violência jurídica".', categoria: 'justica', destaque: true, tag: 'investigacao', fontes: F412 },
    { data: '2016-03-16', dataLabel: '16/03/2016', titulo: 'Moro divulga grampo "Bessias"', descricao: 'Conversa entre Dilma e Lula sobre o termo de posse é interpretada como tentativa de dar foro a Lula. Moro depois pede "escusas" ao STF.', categoria: 'justica', fontes: F413 },
    { data: '2016-03-17', dataLabel: '17–18/03/2016', titulo: 'Posse na Casa Civil é suspensa por Gilmar Mendes', descricao: 'Nomeado ministro por Dilma, toma posse em 17/03; em 18/03, Gilmar suspende a nomeação por desvio de finalidade. O mérito nunca foi julgado.', categoria: 'politica', fontes: [CONJUR_CC] },
    { data: '2016-07', dataLabel: 'Jul/2016', titulo: 'Vira réu pela primeira vez (caso Cerveró)', descricao: 'Torna-se réu por obstrução de justiça com base na delação de Delcídio do Amaral. No mesmo mês, a defesa leva o caso ao Comitê de Direitos Humanos da ONU.', categoria: 'justica', tag: 'acusacao', fontes: [...F48, ...ONU] },
    { data: '2016-08-31', dataLabel: '31/08/2016', titulo: 'Impeachment de Dilma Rousseff', descricao: 'O Senado aprova o impeachment definitivo da presidente.', categoria: 'politica', fontes: F26 },
    { data: '2016-09-14', dataLabel: '14/09/2016', titulo: 'Denúncia do triplex e PowerPoint de Dallagnol', descricao: 'A força-tarefa aponta Lula como "comandante máximo" do esquema na Petrobras. O STJ depois condenou Dallagnol a indenizá-lo pelo PowerPoint.', categoria: 'justica', tag: 'acusacao', fontes: [P360_PPT, AB_FASES] },
    { data: '2016-09-20', dataLabel: '20/09/2016', titulo: 'Réu no caso do triplex', descricao: 'Sergio Moro recebe a denúncia por corrupção passiva e lavagem.', categoria: 'justica', tag: 'decisao', fontes: [AB_FASES] },
    { data: '2016-12', dataLabel: 'Dez/2016', titulo: 'Réu na Zelotes e no caso do terreno do Instituto', descricao: 'Denúncias sobre os caças Gripen/MP 627 (com o filho Luís Cláudio) e sobre o terreno do Instituto Lula (14/12/2016).', categoria: 'justica', tag: 'acusacao', fontes: [CEF_ZEL_LC, MIGALHAS_INST] },
    { data: '2017-02-03', dataLabel: '03/02/2017', titulo: 'Morte de Marisa Letícia', descricao: 'A ex-primeira-dama morre de AVC hemorrágico. Era ré em duas ações; a punibilidade foi extinta e ela nunca foi condenada.', categoria: 'pessoal', fontes: [TRF4_MARISA, ...F23] },
    { data: '2017-07-12', dataLabel: '12/07/2017', titulo: 'Moro condena Lula no triplex: 9 anos e 6 meses', descricao: 'Condenação por corrupção passiva e lavagem; absolvição na parte do acervo presidencial. Lula: "A única prova que existe nesse processo é a da minha inocência".', categoria: 'justica', destaque: true, tag: 'decisao', fontes: [CONJUR_TRIPLEX] },
    { data: '2017-09-06', dataLabel: '06/09/2017', titulo: 'Palocci fala em "pacto de sangue"', descricao: 'Em depoimento a Moro, o ex-ministro descreve suposto acordo entre Lula e a Odebrecht. Nenhuma acusação baseada na delação resultou em condenação.', categoria: 'justica', tag: 'acusacao', fontes: [JB_PALOCCI] },
    { data: '2018-01-24', dataLabel: '24/01/2018', titulo: 'TRF-4 confirma condenação e eleva pena para 12 anos', descricao: 'Por unanimidade (3x0), a 2ª instância confirma a sentença do triplex e eleva a pena para 12 anos e 1 mês.', categoria: 'justica', tag: 'decisao', fontes: [TRF4_TRIPLEX] },
    { data: '2018-04-04', dataLabel: '04/04/2018', titulo: 'STF nega habeas corpus por 6x5', descricao: 'O plenário nega o HC preventivo 152.752; à época, o STF admitia prisão após condenação em 2ª instância.', categoria: 'justica', tag: 'decisao', fontes: [STF_HC, AB_FASES] },
    { data: '2018-04-05', dataLabel: '05/04/2018', titulo: 'Moro decreta a prisão', descricao: 'Menos de 20 horas após o STF, Moro dá prazo até as 17h de 06/04 e proíbe algemas. Lula permanece no Sindicato dos Metalúrgicos do ABC.', categoria: 'justica', tag: 'decisao', fontes: [CONJUR_PRISAO, P360_SINDICATO] },
    { data: '2018-04-07', dataLabel: '07/04/2018', titulo: 'Entrega-se à PF e é preso em Curitiba', descricao: 'Após missa por Marisa e discurso ("Vou cumprir o mandado"), entrega-se por volta das 18h40 e chega a Curitiba às 22h30.', categoria: 'justica', destaque: true, tag: 'fato', fontes: [P360_SINDICATO, AB_FASES] },
    { data: '2018-07-12', dataLabel: '12/07/2018', titulo: 'Absolvido no caso Cerveró/Delcídio', descricao: 'A 10ª Vara Federal de Brasília absolve todos os réus por insuficiência de provas, a pedido do próprio MPF.', categoria: 'justica', tag: 'decisao', fontes: F48 },
    { data: '2018-08-31', dataLabel: '31/08–01/09/2018', titulo: 'TSE barra a candidatura com base na Ficha Limpa', descricao: 'Por 6x1, o TSE indefere o registro; Fachin, vencido, cita medida cautelar da ONU. Em 11/09, Fernando Haddad o substitui e perde para Bolsonaro.', categoria: 'politica', destaque: true, tag: 'decisao', fontes: [MIGALHAS_TSE] },
    { data: '2018-10-01', dataLabel: '01/10/2018', titulo: 'Moro divulga delação de Palocci', descricao: 'A seis dias do 1º turno, Moro torna pública parte da delação — fato depois usado como indício de parcialidade.', categoria: 'justica', fontes: F411 },
    { data: '2018-11-01', dataLabel: '01/11/2018', titulo: 'Moro aceita ser ministro de Bolsonaro', descricao: 'A aceitação do cargo seria um dos fatos citados pelo STF ao declarar a suspeição do juiz.', categoria: 'politica', fontes: STF_2021 },
    { data: '2019-01-29', dataLabel: '29/01/2019', titulo: 'Morte do irmão Vavá', descricao: 'A Justiça nega a ida ao velório; Toffoli autoriza encontro tardio em unidade militar, que Lula recusa, chamando de "pura maldade".', categoria: 'pessoal', fontes: [CEF_VELORIO] },
    { data: '2019-02-06', dataLabel: '06/02/2019', titulo: 'Condenado no caso do sítio de Atibaia', descricao: 'A juíza Gabriela Hardt fixa pena de 12 anos e 11 meses; críticos apontam trechos copiados da sentença do triplex.', categoria: 'justica', tag: 'decisao', fontes: [AB_SITIO1] },
    { data: '2019-03-01', dataLabel: '01/03/2019', titulo: 'Morte do neto Arthur', descricao: 'O neto morre aos 7 anos; preso, Lula é autorizado a ir ao velório por algumas horas.', categoria: 'pessoal', fontes: F23 },
    { data: '2019-04-23', dataLabel: '23/04/2019', titulo: 'STJ mantém condenação e reduz a pena do triplex', descricao: 'A 5ª Turma (4x0) fixa a pena em 8 anos, 10 meses e 20 dias.', categoria: 'justica', tag: 'decisao', fontes: [STJ_TRIPLEX] },
    { data: '2019-06-09', dataLabel: '09/06/2019', titulo: 'Começa a Vaza Jato', descricao: 'O Intercept Brasil publica mensagens entre Moro e procuradores, incluindo dúvidas de Dallagnol sobre o triplex. A Operação Spoofing prenderia o hacker em 23/07.', categoria: 'justica', destaque: true, tag: 'fato', fontes: [INTERCEPT, AOSFATOS_INTERCEPT] },
    { data: '2019-09-16', dataLabel: '16/09/2019', titulo: 'Rejeitada a denúncia da "mesada" a Frei Chico', descricao: 'O juiz Ali Mazloum considera a denúncia "inepta"; o TRF-3 confirma por unanimidade em 18/05/2020.', categoria: 'justica', tag: 'decisao', fontes: [P360_FREI, JBR_TRF3] },
    { data: '2019-11-07', dataLabel: '07/11/2019', titulo: 'STF derruba prisão após 2ª instância', descricao: 'Por 6x5 (ADCs 43, 44 e 54), o STF decide que a pena só pode ser executada após o trânsito em julgado.', categoria: 'justica', tag: 'decisao', fontes: [STF_ADC] },
    { data: '2019-11-08', dataLabel: '08/11/2019', titulo: 'Deixa a prisão após 580 dias', descricao: 'Sai às ~17h40 por decisão da 12ª Vara Federal de Curitiba. Não foi absolvido: passou a recorrer em liberdade.', categoria: 'justica', destaque: true, tag: 'fato', fontes: [P360_SOLTO] },
    { data: '2019-11-27', dataLabel: '27/11/2019', titulo: 'TRF-4 eleva a pena do sítio para 17 anos', descricao: 'Por unanimidade, a pena passa a 17 anos, 1 mês e 10 dias.', categoria: 'justica', tag: 'decisao', fontes: [AB_SITIO2] },
    { data: '2019-12-04', dataLabel: '04/12/2019', titulo: 'Absolvição sumária no "quadrilhão do PT"', descricao: 'A pedido do MPF-DF, o juiz conclui que a denúncia "traduz tentativa de criminalizar a atividade política".', categoria: 'justica', tag: 'decisao', fontes: F410 },
    { data: '2019-12-10', dataLabel: '10/12/2019', titulo: 'Operação Mapa da Mina mira Lulinha', descricao: 'A 69ª fase da Lava Jato apura repasses da Oi ao grupo Gamecorp; a prisão de Fábio é negada e o caso é arquivado em 17/01/2022.', categoria: 'justica', tag: 'investigacao', fontes: [P360_MAPA] },
    { data: '2021-03-08', dataLabel: '08/03/2021', titulo: 'Fachin anula as condenações de Curitiba', descricao: 'No HC 193.726, declara a incompetência da 13ª Vara Federal de Curitiba; Lula recupera a elegibilidade. Anulação não equivale a absolvição.', categoria: 'justica', destaque: true, tag: 'decisao', fontes: [EM_FACHIN, ...STF_2021] },
    { data: '2021-03-23', dataLabel: '23/03/2021', titulo: '2ª Turma do STF declara Moro suspeito', descricao: 'Por 3x2, com mudança de voto de Cármen Lúcia; Gilmar Mendes fala em "tribunal de exceção".', categoria: 'justica', destaque: true, tag: 'decisao', fontes: STF_2021 },
    { data: '2021-04-15', dataLabel: '15/04/2021', titulo: 'Plenário confirma a incompetência (8x3)', descricao: 'Em 22/04, o plenário fixa a competência da Justiça Federal do DF para os casos.', categoria: 'justica', tag: 'decisao', fontes: STF_2021 },
    { data: '2021-06-21', dataLabel: '21/06/2021', titulo: 'Absolvido na Zelotes (MP 471)', descricao: 'A 10ª Vara Federal do DF absolve Lula e Gilberto Carvalho no mérito, a pedido do próprio MPF.', categoria: 'justica', tag: 'decisao', fontes: [MIGALHAS_ZEL] },
    { data: '2021-06-23', dataLabel: '23/06/2021', titulo: 'Plenário confirma a suspeição de Moro (7x4)', descricao: 'No dia seguinte, Gilmar estende a suspeição aos casos do sítio e do terreno do Instituto Lula.', categoria: 'justica', tag: 'decisao', fontes: STF_2021 },
    { data: '2021-08', dataLabel: 'Ago–set/2021', titulo: 'Sítio: denúncia rejeitada e prescrição no DF', descricao: 'A 12ª Vara Federal do DF rejeita a denúncia por depender de provas anuladas e declara a prescrição para maiores de 70 anos.', categoria: 'justica', tag: 'decisao', fontes: [P360_SITIO] },
    { data: '2022-01', dataLabel: 'Jan/2022', titulo: 'Triplex é arquivado por prescrição', descricao: 'A pedido do MPF, a Justiça Federal do DF arquiva o caso, sem julgamento de mérito.', categoria: 'justica', tag: 'decisao', fontes: [SBT_PRESCR, GAZ_ARQ_TRIPLEX] },
    { data: '2022-03-17', dataLabel: '17/03/2022', titulo: 'ONU conclui que Moro foi parcial', descricao: 'O Comitê de Direitos Humanos conclui que os direitos políticos de Lula foram violados; decisão divulgada em 28/04/2022. Sua força jurídica é controversa.', categoria: 'justica', tag: 'decisao', fontes: ONU },
    { data: '2022-05-04', dataLabel: '04/05/2022', titulo: '"Zelensky é tão responsável quanto Putin"', descricao: 'Em entrevista de capa à Time, diz também que EUA e União Europeia "também são culpados"; a embaixada ucraniana protesta.', categoria: 'polemica', fontes: [CNN_TIME] },
    { data: '2022-05-18', dataLabel: '18/05/2022', titulo: 'Casa-se com Janja', descricao: 'Casamento com a socióloga Rosângela "Janja" da Silva, com quem assumira namoro em 2019.', categoria: 'pessoal', fontes: F23 },
    { data: '2022-10-30', dataLabel: '30/10/2022', titulo: 'Eleito para o 3º mandato', descricao: 'Vence Jair Bolsonaro no 2º turno com 50,90% (60.345.999 votos), depois de 48,43% no 1º turno.', categoria: 'politica', destaque: true, fontes: [ISTOE22] },
    { data: '2023-01-01', dataLabel: '01/01/2023', titulo: 'Posse no 3º mandato', descricao: 'Assume com o vice Geraldo Alckmin e faz um "revogaço" de decretos sobre armas e sigilos.', categoria: 'governo', fontes: [WIKI_G3] },
    { data: '2023-01-08', dataLabel: '08/01/2023', titulo: 'Ataque às sedes dos Três Poderes', descricao: 'As sedes dos Três Poderes são atacadas em Brasília; o governo decreta intervenção federal na segurança do DF.', categoria: 'governo', destaque: true, fontes: [WIKI_G3] },
    { data: '2023-02-17', dataLabel: '17/02/2023', titulo: 'Lewandowski encerra as últimas ações contra Lula', descricao: 'São trancadas as duas ações do Instituto Lula e a dos caças Gripen, última ação penal aberta contra ele.', categoria: 'justica', tag: 'decisao', fontes: [P360_LEWA] },
    { data: '2023-08', dataLabel: 'Ago/2023', titulo: 'Arcabouço fiscal e Novo PAC', descricao: 'Sancionada a LC 200, nova regra fiscal; em 11/08 é lançado o Novo PAC (~R$ 1,7 trilhão).', categoria: 'governo', fontes: [WIKI_G3] },
    { data: '2023-09-06', dataLabel: '06/09/2023', titulo: 'Toffoli: prisão foi "um dos maiores erros judiciários"', descricao: 'Na Rcl 43.007, declara imprestáveis as provas da leniência da Odebrecht e chama a prisão de Lula de "armação". Recursos da PGR seguem sem desfecho verificado.', categoria: 'justica', tag: 'decisao', fontes: [MIGALHAS_TOFFOLI, CONJUR_TOFFOLI, STF_RECURSOS] },
    { data: '2023-12-20', dataLabel: '20/12/2023', titulo: 'Promulgada a reforma tributária do consumo', descricao: 'A EC 132 cria IBS, CBS e Imposto Seletivo; a regulamentação vem com as LCs 214/2025 e 227/2026.', categoria: 'governo', fontes: [WIKI_G3] },
    { data: '2024-02-18', dataLabel: '18/02/2024', titulo: 'Compara ação de Israel em Gaza a Hitler', descricao: 'Na cúpula da União Africana, compara a ofensiva ao que "Hitler fez com os judeus". Israel o declara persona non grata no dia seguinte.', categoria: 'polemica', fontes: [CNN_ISRAEL] },
    { data: '2024-04', dataLabel: 'Abr–mai/2024', titulo: 'Enchentes no Rio Grande do Sul', descricao: 'A tragédia deixa ~183–185 mortos; o governo anuncia R$ 98,7 bi até set/2024, com R$ 42,3 bi efetivamente pagos.', categoria: 'governo', fontes: [WIKI_G3] },
    { data: '2024-10-19', dataLabel: '19/10/2024', titulo: 'Queda no Palácio da Alvorada', descricao: 'Bate a nuca no banheiro, leva 5 pontos e tem pequena hemorragia; cancela a viagem à cúpula do BRICS em Kazan.', categoria: 'pessoal', fontes: [CNN_SAUDE] },
    { data: '2024-12-10', dataLabel: '10/12/2024', titulo: 'Craniotomia de emergência', descricao: 'Operado no Sírio-Libanês para drenar hematoma subdural ligado à queda de outubro; recebe alta em 15/12.', categoria: 'pessoal', fontes: [CNN_SAUDE, AOSFATOS_CIR] },
    { data: '2025-02', dataLabel: 'Fev/2025', titulo: 'Aprovação cai a 24%, pior marca dos três mandatos', descricao: 'Datafolha registra 24% de ótimo/bom, após crise cambial e a revogação da norma do Pix em janeiro.', categoria: 'governo', fontes: [DGABC_AVAL, WIKI_G3] },
    { data: '2025-04-23', dataLabel: '23/04/2025', titulo: 'Operação Sem Desconto revela fraude no INSS', descricao: 'Descontos indevidos de ~R$ 6,3 bi em benefícios (2019–2024). Lula não é investigado; o ministro Carlos Lupi sai em 02/05.', categoria: 'polemica', destaque: true, tag: 'investigacao', fontes: [BBC_INSS] },
    { data: '2025-07-09', dataLabel: '09/07/2025', titulo: 'Trump anuncia tarifa de 50% sobre o Brasil', descricao: 'A medida é vinculada ao julgamento de Bolsonaro; seguem sanções Magnitsky a Moraes. O governo responde com a Lei da Reciprocidade e o Plano Brasil Soberano.', categoria: 'governo', destaque: true, fontes: [WIKI_G3, SCOTUS] },
    { data: '2025-07-28', dataLabel: '28/07/2025', titulo: 'Brasil sai novamente do Mapa da Fome', descricao: 'O relatório SOFI 2025, da FAO, registra a saída; a primeira saída fora anunciada em 2014, no governo Dilma.', categoria: 'governo', fontes: [FOME25] },
    { data: '2025-09', dataLabel: 'Set/2025', titulo: 'Bolsonaro é condenado pelo STF', descricao: 'O ex-presidente recebe pena de 27 anos e 3 meses pela trama golpista.', categoria: 'politica', fontes: [WIKI_G3] },
    { data: '2025-10-23', dataLabel: '23/10/2025', titulo: 'Anuncia em Jacarta que tentará o 4º mandato', descricao: 'Depois diria que "foi um erro" fazer o anúncio no exterior.', categoria: 'politica', fontes: [P360_CONVENCAO] },
    { data: '2025-11-10', dataLabel: '10–22/11/2025', titulo: 'COP30 em Belém', descricao: 'A conferência aprova o "Pacote de Belém" e o fundo de florestas tropicais (TFFF), sem roteiro formal de saída dos combustíveis fósseis.', categoria: 'governo', fontes: [COP30] },
    { data: '2025-11-26', dataLabel: '26/11/2025', titulo: 'Sanciona isenção de IR até R$ 5 mil', descricao: 'A Lei 15.270, vigente desde 01/01/2026, beneficia ~15,6 milhões de pessoas e é compensada por IR mínimo sobre altas rendas.', categoria: 'governo', fontes: [WIKI_G3] },
    { data: '2025-12', dataLabel: 'Dez/2025', titulo: 'Testemunha cita "mesada" do "Careca do INSS" a Lulinha', descricao: 'Edson Claro diz à PF e à CPMI que o operador da fraude pagaria ~R$ 300 mil a Fábio Luís. A defesa nega.', categoria: 'justica', tag: 'acusacao', fontes: [METRO_LULINHA, BBC_LULINHA] },
    { data: '2026-01-03', dataLabel: '03/01/2026', titulo: 'Critica captura de Maduro pelos EUA', descricao: 'Diz que o bombardeio e a captura "ultrapassam uma linha inaceitável"; a oposição explora o episódio.', categoria: 'polemica', fontes: [BAND_MADURO] },
    { data: '2026-01-17', dataLabel: '17/01/2026', titulo: 'Assinado o acordo Mercosul–União Europeia', descricao: 'O acordo é assinado em Assunção, sem a presença de Lula.', categoria: 'governo', fontes: [WIKI_G3] },
    { data: '2026-03-05', dataLabel: '05/03/2026', titulo: 'Dino anula quebra de sigilo de Lulinha pela CPMI', descricao: 'Vaza relatório segundo o qual Fábio Luís movimentou R$ 19,5 mi entre 2022 e 2026; a defesa chama o vazamento de crime.', categoria: 'justica', tag: 'decisao', fontes: [BAND_DINO, CNN_195] },
    { data: '2026-03-28', dataLabel: '27–28/03/2026', titulo: 'CPMI do INSS termina sem relatório aprovado', descricao: 'O relatório de Alfredo Gaspar, com 216 indiciamentos e pedido de prisão de Lulinha, é rejeitado por 19 a 12.', categoria: 'justica', fontes: [AB_CPMI, INFOMONEY_CPMI] },
    { data: '2026-04-24', dataLabel: '24/04/2026', titulo: 'Retira carcinoma basocelular do couro cabeludo', descricao: 'Câncer de pele localizado, sem metástase. Em janeiro, fizera cirurgia de catarata.', categoria: 'pessoal', fontes: [AB_PELE] },
    { data: '2026-07-21', dataLabel: '21/07/2026', titulo: 'Chefe de gabinete "Marcola" deixa o cargo', descricao: 'Oficialmente para a campanha; a CNN relata pagamentos de empresária ligada a Lulinha. Ele diz ter sido empréstimo quitado.', categoria: 'polemica', fontes: [CNN_MARCOLA] },
    { data: '2026-07-30', dataLabel: '30/07–04/08/2026', titulo: 'STF abre três inquéritos sobre Lulinha', descricao: 'Mendonça e Dino abrem inquéritos por suposto tráfico de influência e corrupção. Até 20/10/2026, não há denúncia nem indiciamento formal.', categoria: 'justica', tag: 'investigacao', fontes: [CNN_3INQ, JB_PGR] },
    { data: '2026-08-02', dataLabel: '02/08/2026', titulo: 'PT confirma Lula candidato ao 4º mandato', descricao: 'Convenção em São Paulo, com Alckmin de vice; registro no TSE em 08/08. É sua 8ª candidatura presidencial.', categoria: 'politica', fontes: [P360_CONVENCAO] },
    { data: '2026-10-04', dataLabel: '04/10/2026', titulo: '1º turno: Lula fica em 2º com 45,16%', descricao: 'Flávio Bolsonaro tem 47,03%. É a primeira vez que o líder das pesquisas termina em 2º; a abstenção (21,08%) é a maior desde 1998.', categoria: 'politica', destaque: true, fontes: [AB_2TURNO, WIKI_2026] },
    { data: '2026-10-18', dataLabel: '18/10/2026', titulo: 'Primeiro debate do 2º turno, na Band', descricao: 'Lula cobra de Flávio supostos R$ 134 milhões de Daniel Vorcaro; Flávio cita a investigação contra Fábio Luís.', categoria: 'politica', fontes: [AB_DEBATE, LUPA_DEBATE] },
    { data: '2026-10-25', dataLabel: '25/10/2026', titulo: '2º turno contra Flávio Bolsonaro', descricao: 'Pesquisas às vésperas indicam disputa apertada, com Flávio numericamente à frente (AtlasIntel 19/10: 51,1% x 48,9% dos válidos).', categoria: 'politica', destaque: true, fontes: [BDF_DATAFOLHA, GAZ_QUAEST, CARTA_ATLAS] },
  ],

  lacunas: [
    'Números oficiais do 1º turno de 2026 no portal do TSE (há pequena divergência na votação de Flávio Bolsonaro: 56.103.033 x 56.104.503).',
    'Notícias da campanha a partir de 19/10/2026 e o resultado do 2º turno (25/10/2026).',
    'Status da PEC do fim da escala 6x1 / jornada de 40h no Senado.',
    'Resultado final dos recursos da PGR/ANPR contra as decisões de Toffoli (Rcl 43.007; Marcelo Odebrecht; Palocci).',
    'Decisão de Mendonça sobre o envio dos inquéritos de Lulinha à 1ª instância e eventuais desdobramentos de set–out/2026.',
    'Resultado do julgamento no plenário do STF sobre a decisão de Dino (quebra de sigilo da CPMI).',
    'Desfecho definitivo da ação dos Gripen/MP 627 em relação a Luís Cláudio.',
    'Desfecho do recurso do MPF no caso do sítio de Atibaia (TRF-1).',
    'Episódio Favreto (08/07/2018) e ADPFs 395/444 sobre condução coercitiva (dados de memória).',
    'Itens marcados como "só Wikipedia" de 2026 (Lei Antifacção, rejeição de Messias ao STF, tarifa de 25% de jul/2026).',
    'Selic e IPCA mais recentes de 2026.',
    'Caso Banco Master/Vorcaro e eventuais ligações com o governo (não pesquisado em profundidade).',
  ],

  dossie: {
    arquivo: 'docs/dossie-lula.md',
    dataReferencia: '20/10/2026',
    metodo: 'Pesquisa sistemática na web em cinco frentes (biografia, mandatos, escândalos, processos/prisão e familiares), com fontes jornalísticas, jurídicas e de referência; distingue acusação, investigação, denúncia, condenação, anulação e prescrição.',
  },
};
