# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Issue Tracking

Bug tracking is managed in BugHerd under the **Donut Hero** project (ID: `519809`): https://www.bugherd.com/projects/519809/kanban

## Commands

```bash
npm install       # install dependencies
npm run dev       # start dev server at http://localhost:4321
npm run build     # production build
npm run preview   # preview production build locally
```

No test runner is configured in this project.

## Architecture

This is an **Astro + React + Tailwind** eCommerce storefront that uses local markdown content collections. It deploys to Vercel in SSR mode (`output: 'server'`).

### Data flow

All storefront content is loaded from `src/content/` through Astro Content Collections.

### Page rendering

- `src/pages/index.astro` — SSR, loads homepage + product list from local markdown content
- `src/pages/shop/[product].astro` — **statically pre-rendered** (`prerender = true`); `getStaticPaths` reads all product slugs from content collections
- `src/pages/cart.astro`, `checkout.astro`, `order/` — client-side cart/checkout flow with a dummy payment method (no Stripe or real payment gateway)

### Component patterns

- `.astro` files handle data fetching and page structure
- `.tsx` React components handle interactivity; hydrated with `client:load` or `client:only`
- The cart state lives in `src/components/local-cart.tsx` (browser-local, not server-persisted)
- `src/layouts/Layout.astro` is the single shared shell — it conditionally hides the animated background on cart/checkout/order pages

### Styling

Theme tokens (colors, typography, spacing) are defined in `tailwind.config.cjs`. The background uses CSS `background-attachment: fixed` which is disabled on mobile via a global media query in `Layout.astro`.
