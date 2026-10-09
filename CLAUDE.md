# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
yarn dev          # Start dev server at http://localhost:5173
yarn build        # Type-check + build to dist/
yarn test         # Run tests with Vitest (watch mode)
yarn lint         # ESLint with zero warnings tolerance
yarn typecheck    # Type-check without emitting
yarn deploy       # Build and deploy to gh-pages branch
```

Run a single test file:
```bash
yarn test src/components/test.tsx
```

## Architecture

Single-page personal portfolio with four full-screen sections rendered in order: `Header → Hero → About → Works`. All sections live under `src/components/` and are composed in `App.tsx`.

**Scroll-driven animations** are central to the UI. The `About` section uses a custom hook (`src/components/about/hook.ts`) built on Framer Motion's `useScroll`/`useTransform` to drive position, scale, and opacity based on scroll progress. The `Hero` section uses mouse/scroll state for its animation. AOS (Animate On Scroll) is initialized globally in `App.tsx` for simpler element animations.

**Lottie + assets**: JSON animation data (`hero.json`, `hello.json`) lives in `src/assets/` and is rendered via `lottie-react`. Project data for the Works section is in `src/components/works/projects.json` and typed by `src/types/project.ts`.

**Path aliases**: `tsconfig.json` sets `baseUrl` to `./src`, so imports use bare paths like `import App from 'components/App'` (no `@` prefix).

**Test convention**: Test files are named `test.tsx` (or `test.ts`) and co-located with the component they test. Vitest is configured to only pick up files matching `**/test.{ts,tsx}`.

**Styling**: Tailwind CSS 3 with a custom `font-exo` font family and a centered container with responsive padding. CSS Modules (`.module.css`) are used per-section for styles that don't map cleanly to Tailwind utilities.
