# Portfolio

Single-page portfolio — one fixed design, bilingual (English / French). Built with Vite, React 19 and TypeScript.

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
├── components/      # One component per page section + ProjectCard, LangToggle, icons, VoidField, Factory404Hero
├── data/            # content (UI strings), projects, reviews, site info
├── i18n/            # Lang type + LangProvider (state, localStorage) + useLang hook
└── styles/base.css  # Single global stylesheet
```

## How language works

`CONTENT` in `src/data/content.ts` holds every UI string, keyed by language
(`en` / `fr`) under the `SiteContent` shape. `LangProvider` owns the active
language — initial value from `localStorage` then `navigator.language` —
persists it (`vb-lang`) and sets `<html lang>`. Components stay
language-agnostic: they read copy via `useLang().t` and never branch on
language.

Testimonials are fetched live from an API (`src/data/reviews.ts`). With
`REVIEWS_ENDPOINT` empty (the default), the section is hidden.

## Adding content

- **New UI string**: add the field to `SiteContent` in `src/data/content.ts`,
  then fill it in for **both** `en` and `fr`.
- **New project**: add an entry to `PROJECTS` in `src/data/projects.ts`, then a
  matching description (same order) in **both** `PROJECT_DESCRIPTIONS_EN` and
  `PROJECT_DESCRIPTIONS_FR`.
- **New language**: extend the `Lang` union and `isLang` in `src/i18n/lang.ts`,
  then add the key to `CONTENT` and `projectDescriptions`.

## License

Source code is [MIT](LICENSE). Personal content — copy, project descriptions,
images, and the "Vincent Bichat" / "404Factory" names and branding — is not
covered and remains © 2026 Vincent Bichat, all rights reserved.
