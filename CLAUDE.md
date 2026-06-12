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

<!-- rtk-instructions v2 -->
# RTK (Rust Token Killer) - Token-Optimized Commands

## Golden Rule

**Always prefix commands with `rtk`**. If RTK has a dedicated filter, it uses it. If not, it passes through unchanged. This means RTK is always safe to use.

**Important**: Even in command chains with `&&`, use `rtk`:
```bash
# ❌ Wrong
git add . && git commit -m "msg" && git push

# ✅ Correct
rtk git add . && rtk git commit -m "msg" && rtk git push
```

## RTK Commands by Workflow

### Build & Compile (80-90% savings)
```bash
rtk cargo build         # Cargo build output
rtk cargo check         # Cargo check output
rtk cargo clippy        # Clippy warnings grouped by file (80%)
rtk tsc                 # TypeScript errors grouped by file/code (83%)
rtk lint                # ESLint/Biome violations grouped (84%)
rtk prettier --check    # Files needing format only (70%)
rtk next build          # Next.js build with route metrics (87%)
```

### Test (90-99% savings)
```bash
rtk cargo test          # Cargo test failures only (90%)
rtk vitest run          # Vitest failures only (99.5%)
rtk playwright test     # Playwright failures only (94%)
rtk test <cmd>          # Generic test wrapper - failures only
```

### Git (59-80% savings)
```bash
rtk git status          # Compact status
rtk git log             # Compact log (works with all git flags)
rtk git diff            # Compact diff (80%)
rtk git show            # Compact show (80%)
rtk git add             # Ultra-compact confirmations (59%)
rtk git commit          # Ultra-compact confirmations (59%)
rtk git push            # Ultra-compact confirmations
rtk git pull            # Ultra-compact confirmations
rtk git branch          # Compact branch list
rtk git fetch           # Compact fetch
rtk git stash           # Compact stash
rtk git worktree        # Compact worktree
```

Note: Git passthrough works for ALL subcommands, even those not explicitly listed.

### GitHub (26-87% savings)
```bash
rtk gh pr view <num>    # Compact PR view (87%)
rtk gh pr checks        # Compact PR checks (79%)
rtk gh run list         # Compact workflow runs (82%)
rtk gh issue list       # Compact issue list (80%)
rtk gh api              # Compact API responses (26%)
```

### JavaScript/TypeScript Tooling (70-90% savings)
```bash
rtk pnpm list           # Compact dependency tree (70%)
rtk pnpm outdated       # Compact outdated packages (80%)
rtk pnpm install        # Compact install output (90%)
rtk npm run <script>    # Compact npm script output
rtk npx <cmd>           # Compact npx command output
rtk prisma              # Prisma without ASCII art (88%)
```

### Files & Search (60-75% savings)
```bash
rtk ls <path>           # Tree format, compact (65%)
rtk read <file>         # Code reading with filtering (60%)
rtk grep <pattern>      # Search grouped by file (75%)
rtk find <pattern>      # Find grouped by directory (70%)
```

### Analysis & Debug (70-90% savings)
```bash
rtk err <cmd>           # Filter errors only from any command
rtk log <file>          # Deduplicated logs with counts
rtk json <file>         # JSON structure without values
rtk deps                # Dependency overview
rtk env                 # Environment variables compact
rtk summary <cmd>       # Smart summary of command output
rtk diff                # Ultra-compact diffs
```

### Infrastructure (85% savings)
```bash
rtk docker ps           # Compact container list
rtk docker images       # Compact image list
rtk docker logs <c>     # Deduplicated logs
rtk kubectl get         # Compact resource list
rtk kubectl logs        # Deduplicated pod logs
```

### Network (65-70% savings)
```bash
rtk curl <url>          # Compact HTTP responses (70%)
rtk wget <url>          # Compact download output (65%)
```

### Meta Commands
```bash
rtk gain                # View token savings statistics
rtk gain --history      # View command history with savings
rtk discover            # Analyze Claude Code sessions for missed RTK usage
rtk proxy <cmd>         # Run command without filtering (for debugging)
rtk init                # Add RTK instructions to CLAUDE.md
rtk init --global       # Add RTK to ~/.claude/CLAUDE.md
```

## Token Savings Overview

| Category | Commands | Typical Savings |
|----------|----------|-----------------|
| Tests | vitest, playwright, cargo test | 90-99% |
| Build | next, tsc, lint, prettier | 70-87% |
| Git | status, log, diff, add, commit | 59-80% |
| GitHub | gh pr, gh run, gh issue | 26-87% |
| Package Managers | pnpm, npm, npx | 70-90% |
| Files | ls, read, grep, find | 60-75% |
| Infrastructure | docker, kubectl | 85% |
| Network | curl, wget | 65-70% |

Overall average: **60-90% token reduction** on common development operations.
<!-- /rtk-instructions -->