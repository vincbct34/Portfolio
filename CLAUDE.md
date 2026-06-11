# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

| Command             | Action                       |
| ------------------- | ---------------------------- |
| `npm run dev`       | Start dev server             |
| `npm run build`     | Production build (`dist/`)   |
| `npm run lint`      | ESLint                       |
| `npm run typecheck` | `tsc --noEmit`               |
| `npm run preview`   | Preview the production build |

No test suite exists. CI (`.github/workflows/ci.yml`) runs `npm ci`, `npm run lint`, `npm run build`, `npx tsc --noEmit`, plus `npm audit` and a trufflehog secret scan on push/PR to `main`.

## Architecture

Single-page portfolio: same DOM, eight swappable visual/voice "themes". Vite + React 19 + TypeScript, no router, no backend.

- `src/components/` — one component per page section (`Header`, `Hero`, `Work`, `About`, `Contact`, `Footer`, `ThemePicker`, `ProjectCard`). These render structure only and pull all visible text from `theme.copy` via `useTheme()`.
- `src/themes/<id>/` — one folder per theme, each exporting a `Theme` object (`index.tsx`) plus `styles.css`. A theme = a `name`, a picker `swatch`, a `copy` object (every string/JSX shown to the user) and `css` (the whole stylesheet, imported via `?inline`).
- `src/themes/types.ts` — defines `Theme`, `ThemeCopy`, `ThemeId`. Adding a field to `ThemeCopy` requires updating it in **every** theme folder.
- `src/themes/index.ts` — `THEMES` registry (`Record<ThemeId, Theme>`), `THEME_LIST` (picker order = insertion order), `DEFAULT_THEME`, `THEME_STORAGE_KEY`.
- `src/theme/ThemeProvider.tsx` — owns active `themeId` state, persists to `localStorage` (`vb-theme`), sets `data-theme` on `<html>`, and injects the active theme's CSS into a runtime `<style id="theme-css">` tag (must come after `base.css` so equal-specificity overrides win — do not move theme CSS into `index.html`).
- `src/theme/useTheme.ts` / `ThemeContext.ts` — context hook; throws if used outside `ThemeProvider`.
- `src/styles/base.css` — theme-agnostic skeleton + theme-picker styles, shared by all themes.
- `src/data/projects.ts` — `PROJECTS` (shared structural data: num, title, mediaClass, tags, href) and `COMMON_PROJECT_DESCRIPTIONS` (default per-project copy reused by most themes).
- `src/data/site.ts` — site-wide info (email, socials).

### Adding/changing content

- **New project**: add an entry to `PROJECTS` in `src/data/projects.ts`, then add a matching description (same index/order) to `projectDescriptions` in **every** theme.
- **New theme**: create `src/themes/<id>/index.tsx` + `styles.css`, fill out the full `ThemeCopy`, add `<id>` to `ThemeId` in `src/themes/types.ts`, and register the theme in `THEMES` in `src/themes/index.ts` (registration order = picker order).
- Components must stay theme-agnostic — no theme-specific branching in `src/components/`. All visual/voice differences live in `copy` and `styles.css` per theme.

### Reference

`portfolio-multitheme (1).html` is the original single-file prototype this app reproduces.
