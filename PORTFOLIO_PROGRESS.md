# Portfolio Progress

Handoff file for portfolio implementation sessions. See
`ENGINEERING_PORTFOLIO_IMPLEMENTATION.md` (spec) and
`PORTFOLIO_PROMPT_PACK.md` (execution sequence).

## Current phase and status

- Phase: Prompt 1 — design system and shared site shell — **complete**
- Next prompt: **Prompt 2 — homepage and projects index**

## Work completed (Prompt 1)

- `app/globals.css` — design tokens from spec palette (background
  `#0B0D12`, surface `#121722`, elevated `#171E2B`, foreground `#F3F5F8`,
  muted `#A4ADBC`, subtle `#778195`, line `rgba(255,255,255,0.10)`,
  accent `#8B9CFF`, accent-2 `#71D5C2`), Geist/Geist Mono font vars,
  focus-visible styles, `prefers-reduced-motion` reset.
- `app/layout.tsx` — metadata (metadataBase `https://nanguti1.github.io`,
  title template), header/footer shell. `SiteHeader` wrapped in
  `<Suspense>` (required by Cache Components for `usePathname`).
- `components/site-header.tsx` — sticky header, desktop nav + accessible
  mobile menu (client component, `aria-expanded`/`aria-controls`).
- `components/site-footer.tsx` — footer with nav + GitHub link; year via
  `"use cache"` function (Cache Components blocks `new Date()` at
  prerender).
- `components/section-heading.tsx`, `components/tech-tags.tsx`,
  `components/image-placeholder.tsx`, `components/project-row.tsx` —
  reusable components; featured variant renders larger placeholder image.
- `lib/projects.ts` — typed `Project` registry for all six slugs with
  only spec-verified facts. `role` and `technologies` are conservative
  where ownership is unconfirmed (see questions below).
- Routes created as **temporary placeholders**: `/` (minimal), `/projects`
  (full index using ProjectRow), `/projects/[slug]` (generateStaticParams
  for all six slugs, per-page metadata, `notFound()` for unknown slugs),
  `/about`, `/contact`.
- Boilerplate `app/page.tsx` starter content removed.

## Decisions made

- Kept `app/` at repo root (existing structure) rather than spec's
  suggested `src/` layout.
- Used Tailwind 4 `@theme` tokens; no new component library.
- `next.config.ts` left unchanged: still has `cacheComponents`,
  `partialPrefetching`, `experimental.agentFeedback`, and **no
  `output: 'export'`** — export config deferred to deployment phase.
- Header uses `usePathname` for active nav state; requires Suspense
  boundary under Cache Components.

## Commands run and results

- `npm run lint` — clean (exit 0, no warnings).
- `npm run build` — success. 14 routes generated; all six
  `/projects/[slug]` paths prerendered statically.
- Build fixes applied: `"use cache"` for footer year; `<Suspense>` around
  header; `generateStaticParams` added to `[slug]` route.

## Outstanding content questions for Kevin

1. Role/ownership labels per project — `lib/projects.ts` uses
   conservative wording ("Engineering contributor", "End-to-end
   development", "Core developer (team of ~11)", "Team contributor
   (team of 4)"). Confirm exact titles.
2. AfriQ Networks technologies — none listed; stack unknown.
3. Live URLs / public repositories for any project — none recorded.
4. Contact email and LinkedIn URL — not yet supplied; contact page only
   links GitHub.
5. Real screenshots — none in repo; all placeholders are neutral.
6. Kevin's precise contribution boundaries for Simplifi, BLVD GUIDE,
   AfriQ, MwalimuPLUS (needed for "My contribution" sections).

## Known bugs / risks

- `next.config.ts` lacks `output: 'export'` — required before GitHub
  Pages deployment.
- No `.github/workflows` deploy workflow exists yet.
- `cacheComponents` + `partialPrefetching` + `agentFeedback` are unusual
  flags; verify they don't conflict with `output: 'export'` in Phase 5.
- Dynamic `[slug]` route shows placeholder copy; links work but content
  is temporary.

## Files that must not be changed carelessly

- `next.config.ts` (until export config is intentionally added)
- No deployment workflows exist yet — do not create without approval

## Exact next task

Run **Prompt 2**: implement homepage sections (hero, selected work,
engineering approach, experience snapshot, contact) and refine projects
index. Case-study route content remains placeholder until Prompts 3–7.
