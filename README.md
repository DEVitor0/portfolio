# Vitor Moreira — Portfólio Front-end

React 18 + Vite. Visual e comportamento idênticos ao HTML original.

## Comandos
- `npm install`
- `npm run dev` — desenvolvimento
- `npm run build` — gera `dist/` (publicar essa pasta)
- `npm run preview` — testa o build

## Estrutura
- `src/sections/` — uma seção da página por arquivo (Hero, Journey, Sobre, Projetos...)
- `src/components/` — peças reutilizáveis (Title, Mag, Halftone, Viz, Marquee...)
- `src/data/` — conteúdo (projetos, certificados, navegação, textos)
- `src/lib/`, `src/hooks/` — estado de scroll/ponteiro, loop de animação, `useTick`
- `src/styles/` — CSS original dividido por seção. **A ordem dos imports em `index.css` é a cascata original; não reordene.**
- `src/assets/` — imagens WebP e fontes WOFF2 (self-hosted)

## Performance
- Sem CDN: React, fontes e imagens saem do próprio domínio, com cache por hash.
- Templates `h\`...\`` compilados em build (`vite.config.js`), sem htm no navegador.
- Imagens fora do HTML (lazy, como antes); fontes com preload e `font-display: swap`.
- Sem tela de carregamento: o texto do hero anima assim que a página pinta.
