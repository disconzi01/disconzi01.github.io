# i4Homes — 5 Designs de Home (variação de LAYOUT)

> Por @ux (Uma), 2026-06-08. Segunda rodada: **mesma paleta da marca, designs/layouts diferentes** — para o contratante escolher a **estrutura** da home.

## Como abrir
Abra **`index.html`** (galeria) e clique em cada layout. Todos têm troca de idioma **EN · ES · PT** (padrão inglês).

## Os 5 designs (mesma paleta dark da marca)
| # | Design | Ideia central |
|---|--------|---------------|
| **L1** | **Clássico** | Hero dividido (texto + imagem) + grade de imóveis. Seguro, familiar (Arrived). |
| **L2** | **Imersivo** | Hero em tela cheia com foto + **barra de busca** (Invest/Live/Rent). Impacto, portal imobiliário. |
| **L3** | **Dashboard** | KPIs + oferta em destaque + **feed de oportunidades**. Cara de produto, data-first. |
| **L4** | **Editorial** | Manchete tipográfica gigante + imóvel em destaque tipo matéria de revista. Premium. |
| **L5** | **Bento** | Mosaico modular de blocos (invest grande + Live + Rent + stats + TIR). Tendência 2025. |

## Decisões mantidas em todos
- Foco no **To Invest** (em destaque) **sem abandonar To Rent/To Live**.
- **Imóveis na principal**, com cidades reais da i4 (Palm Bay, Ocala, North Port, Lehigh Acres).
- **Objetivo, claro, sem enrolação**.
- **3 idiomas** EN (padrão) · ES · PT.

## Como propor ao contratante
Dois eixos de decisão, independentes:
1. **Design/layout** → escolher entre L1–L5 (esta pasta).
2. **Paleta/cor** → escolher entre os 5 esquemas de `docs/design/homes/` (rodada anterior).

> Combinam livremente: ex.: "Design **L3 Dashboard** com a paleta **02 Blue-Forward**". Depois de escolhidos, implemento no app real (Next.js + `packages/ui`) com os tokens oficiais.

## Notas
- Paleta usada aqui = **dark metálico da marca** (`#0F0F0F` · `#ACAFB2` · `#FFFFFF` · `#4296E6`).
- Imagens (Unsplash), números e copy são **ilustrativos**. Fonte display = Dancing Script (placeholder da Playlist Script).
- `homes.js` compartilhado (i18n + dados + cards).
