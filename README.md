# Ledgerune

Landing page for Ledgerune, an AI-themed memecoin project on Robinhood Chain.
Built with Next.js 14 (App Router) and TypeScript, no external UI library.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000 in your browser.

## Project structure

```
app/
  layout.tsx     Root layout, fonts, page metadata
  page.tsx        Main landing page content
  globals.css     All styling (design tokens in :root)
public/           Static assets
```

## Before launch, update

- Social links in `app/page.tsx` (currently `href="#"` placeholders for X)
- `CONTRACT_TEXT` constant in `app/page.tsx` with the real contract address
- The tokenomics figures in the `#ledger` section (currently `TBA`)

## Deploy

Push this repo to GitHub, then import it on [Vercel](https://vercel.com/new)
or any host that supports Next.js. No environment variables are required.
