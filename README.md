# Nivi Portfolio — React + Vite + TypeScript

A fresh, responsive developer portfolio. This project is separate from your existing repository.

## Requirements
- Node.js 20.19+ or 22.12+ (recommended for current Vite releases)
- npm

## Run locally

```bash
npm install
npm run dev
```

Open the local URL Vite prints in your terminal (usually `http://localhost:5173`).

## Production build

```bash
npm run build
npm run preview
```

## Personalize before publishing
1. In `src/App.tsx`, replace `hello@example.com` with your professional email.
2. Update the GitHub and LinkedIn URLs in the footer to your profile URLs.
3. Review the project summaries in `src/data/projects.ts`; keep confidential employer details out of public descriptions.
4. Update the page title and meta description in `index.html` if needed.

## Structure

```text
src/
  components/SectionHeading.tsx
  data/projects.ts
  App.tsx
  main.tsx
  styles.css
index.html
package.json
vite.config.ts
```
