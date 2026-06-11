# Portfolio

Multi-theme portfolio — same DOM, eight visual identities. Built with Vite, React 19 and TypeScript.

## Commands

| Command             | Action                       |
| ------------------- | ---------------------------- |
| `npm run dev`       | Start dev server             |
| `npm run build`     | Production build (`dist/`)   |
| `npm run lint`      | ESLint                       |
| `npm run typecheck` | `tsc --noEmit`               |
| `npm run preview`   | Preview the production build |

## Structure

```
src/
├── components/      # One component per page section + ThemePicker
├── data/            # Content: projects, site info (email, socials)
├── theme/           # ThemeProvider (state, localStorage, CSS injection)
├── themes/          # One folder per theme: copy (index.tsx) + styles.css
└── styles/base.css  # Theme-agnostic skeleton + picker styles
```

## How theming works

Every theme is a `Theme` object (`src/themes/types.ts`): a name, a picker
swatch, a `copy` object (the theme's voice — all visible text) and a
stylesheet imported as a string (`styles.css?inline`).

`ThemeProvider` injects the active theme's CSS into `<style id="theme-css">`,
sets `data-theme` on `<html>` and persists the choice in `localStorage`
(`vb-theme`). The DOM never changes between themes — only skin and voice.

## Adding content

- **New project**: add an entry to `src/data/projects.ts`, then a matching
  description in each theme's `projectDescriptions`.
- **New theme**: create `src/themes/<id>/` with `index.tsx` + `styles.css`,
  add the id to `ThemeId` in `src/themes/types.ts` and register it in
  `src/themes/index.ts`. The picker lists themes in registration order.

## Reference

`portfolio-multitheme (1).html` is the original single-file prototype this
app reproduces.
