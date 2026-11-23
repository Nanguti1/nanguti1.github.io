# Portfolio Progress

Handoff file for portfolio implementation sessions. See
`ENGINEERING_PORTFOLIO_IMPLEMENTATION.md` (spec) and
`PORTFOLIO_PROMPT_PACK.md` (execution sequence).

## Current phase and status

- Phase: Prompt 7 — AfriQ Networks + MwalimuPLUS / Ajira Connect —
  **complete at spec-fact level** (no local repos exist; content
  limited to spec + Kevin-confirmed facts)
- Next prompt: **Prompt 8 — about/contact/SEO + editorial review**

## Work completed (Prompt 6)

- Read-only audit of `C:\thelab\blvdguide` (no .git dir).
- `content/blvd-guide.ts` rewritten with verified detail:
  - Discovery: FULLTEXT search, filters (category/price/capacity/
    features/rating/featured/geo), Leaflet map + marker clustering +
    bounds search + Haversine "near me", OSM Nominatim geocoding.
  - Listings: owner dashboard CRUD, operational statuses, Spatie
    Media Library (cover/gallery/documents), draft→pending→published/
    rejected approval gated by venues.approve permission.
  - Subscriptions: 4 package tiers with listing/image/featured
    allowances; payment status tracked but NO payment gateway —
    admin-activated; daily ExpireSubscriptionsCommand.
  - Reviews: 1–5 ratings, pending→approved/rejected moderation,
    favourites.
  - Geo: country→county→city→locale, cascade deletes, on-the-fly
    creation, Kenya seed data.
  - Auth: Fortify 2FA + passkeys (WebAuthn), Spatie permissions
    (Super Admin, Agent), policies, Activitylog, login logging.
  - Frontend: React 19.2 strict TS, Inertia + Wayfinder, Radix,
    Tailwind 4, Vite 8 + React Compiler.
- `lib/projects.ts` — BLVD tech list: added Leaflet.
- **Simplifi Networks: NO local repo** (Kevin changed computers and
  handed the project over). Kevin confirmed (this session): he was the
  **end-to-end developer — backend, API, admin panel (Nova), and
  storefront (Next.js)**. `lib/projects.ts` role updated; case study
  now has architecture + "My contribution" sections. Feature-level
  detail still limited to spec (no payments/shipping/etc. claimed).
  Remaining open questions: live URL, release status.

## Audit notes / do-not-publish (BLVD)

- `database/seeders/DatabaseSeeder.php` contains a hardcoded admin
  password — NOT used anywhere in portfolio content.
- MapTiler API key referenced via env var only; not published.
- Seeder emails (admin@blvdguide.test etc.) not published.
- No live URL, deployment config, or metrics verified — none published.
- Kevin's contribution unverifiable (no git history).

## Commands run and results (Prompt 6)

- `npm run lint` — clean.
- `npm run build` — success; 14 routes prerender.

## Work completed (Prompt 5)

- Read-only audit of `C:\thelab\hims-v1` (confirmed as HIMS; no .git
  dir — Kevin's contribution still not independently verifiable).
- `content/hamaline-insurance.ts` rewritten with verified detail:
  - Modules verified in code: clients (individual/corporate, KRA PIN,
    docs), underwriters, quotations (+PDF), policies (motor/medical/WIBA
    detail tables, members, progressive form, 6-state lifecycle),
    risk notes (medical/motor/WIBA, draft→pending→active/cancelled),
    claims (assignment to officers), payments (finance-only, proof
    upload), renewals (30/60/90-day reminder artisan command → SMS +
    email), commissions, reports (6 report types, role dashboards),
    users/RBAC UI.
  - Modular monolith: per-module controllers/requests/services/pages;
    RiskNoteService ~1k lines, ReportsService ~780 lines.
  - RBAC: Fortify (2FA, email verification) + Spatie, 5 roles
    (admin/underwriter/claims_officer/finance_officer/client), route
    middleware + ResourceAccessService record-level scoping; audit
    fields created_by/updated_by/approved_by/assigned_to/received_by.
  - PDFs via DomPDF incl. 850-line motor risk-note template with
    financial calcs (PHCF, training levy, stamp duty).
  - Frontend: React 19 strict TS, Inertia, RHF + Zod mirroring Laravel
    form requests, Radix + Tailwind 4.
  - Transactions on critical service ops; 21 tests; CI PHP 8.3–8.5 +
    Pint/ESLint/Prettier.
- `lib/projects.ts` — Hamaline tech list: added DomPDF.

## Audit notes / do-not-publish

- Repo contains `.env.local` and a `bibhntxx_hims.sql` production dump —
  neither referenced in portfolio content.
- No live URL, deployment config, or metrics verified — none published.
- SMS/email provider credentials live in env; CommunicationService
  verified to exist but provider unnamed in copy ("SMS and email").

## Commands run and results (Prompt 5)

- `npm run lint` — clean.
- `npm run build` — success; 14 routes prerender.

## Work completed (Prompt 4)

- Read-only audit of `C:\thelab\2bgamersstore` (no .git dir, no author
  tags — Kevin's personal contribution NOT verifiable from repo).
- `content/2b-gamers-store.ts` rewritten with verified implementation
  detail: storefront/commerce modules, M-PESA STK Push + C2B lifecycle
  (order matching, callback handling, retry, status polling), append-only
  stock ledger (InventoryService, polymorphic movements, negative-stock
  prevention, reversals), procurement draft→approved→received workflow,
  repair jobs with parts tracking, POS with polymorphic sale items and
  PDF receipts, event-driven operations (observers → queued listeners),
  transactions on critical mutations, Fortify/Spatie/2FA, 36-test suite
  with multi-PHP CI.
- `lib/projects.ts` — 2B tech list updated (added TypeScript).

## Audit findings vs spec (discrepancies resolved toward repo evidence)

- PHP version: spec said 8.4; composer.json requires ^8.3 → case study
  says "PHP 8.3+". CI tests 8.3–8.5.
- Spec mentioned "email jobs/cron and backups" — audit found queued
  notifications (verified) but NO scheduled tasks and no backup code
  (likely infra-level). Case study describes queues/events only.
- Live URL verified in repo config: 2bgamersstore.co.ke — published in
  glance metadata.
- M-PESA idempotency: order updates guarded by payment-status checks;
  no transaction-id dedup found — case study does NOT claim stronger
  idempotency than evidenced.

## Do-not-publish notes (from audit)

- `.env.example` contains an order-notification email
  (g.nanguti@gmail.com) and GTM ID — neither is used in case-study copy.
- No secrets were copied into portfolio content.

## Outstanding questions added

- Kevin's specific contribution boundaries for 2B Gamers Store (repo
  has no git history).
- Deployment/backup specifics if Kevin wants them mentioned.

## Work completed (Prompt 3)

- `lib/case-study.ts` — typed content model: `ContentBlock`
  (paragraph/list), `CaseStudySection`, `GlanceItem`, `CaseStudy`.
- `lib/case-studies.ts` — slug → CaseStudy registry.
- `content/*.ts` — six content files seeded **only** with facts from
  `ENGINEERING_PORTFOLIO_IMPLEMENTATION.md`. Unsupported sections
  (screenshots, challenges, outcomes, "My contribution" where unconfirmed)
  are omitted rather than published as placeholders.
- `components/case-study/` — `case-study-layout.tsx` (hero, intro,
  at-a-glance, TOC, sections, prev/next), `glance.tsx`,
  `table-of-contents.tsx` (anchor nav, hidden when <2 sections),
  `prev-next.tsx` (ordered by `lib/projects.ts`).
- `app/projects/[slug]/page.tsx` — real page: generateStaticParams for
  all six slugs, per-page metadata, `notFound()` for missing project or
  case study.

## Content source decision

Structured TypeScript under `content/` chosen over MDX — no new
dependency, fully typed, static-export safe.

## Commands run and results (Prompt 4)

- `npm run lint` — clean.
- `npm run build` — success; 14 routes prerender.

## Commands run and results (Prompt 3)

- `npm run lint` — clean after removing unused import.
- `npm run build` — success; all six case-study routes prerender.

## Work completed (Prompt 2)

- `app/page.tsx` — full homepage: hero (name, positioning, Explore
  projects / Contact CTAs), Selected work (2B Gamers Store + Hamaline as
  featured `ProjectRow`s), More full-stack projects (Simplifi + BLVD
  GUIDE featured rows + link to full index), Engineering approach
  (six evidence-based cards), Earlier experience (AfriQ + MwalimuPLUS
  compact cards with explicit team-contribution framing), Contact
  (GitHub link verified; no invented email/LinkedIn). Page metadata
  added.
- `/projects` index (built in Prompt 1) already satisfies Prompt 2
  requirements: all six entries, flagship prominence, category/role/
  tech metadata, neutral placeholders — unchanged.
- `app/about/page.tsx`, `app/contact/page.tsx` remain minimal
  placeholders (detailed copy is Prompt 8 scope).

## Commands run and results (Prompt 2)

- `npm run lint` — clean.
- `npm run build` — success; 14 routes, all six project paths static.

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

## Outstanding questions added (Prompt 6)

- Simplifi Networks: Kevin's role/contribution, whether any repo or
  documentation still exists, live URL, and reasons for leaving
  PrestaShop (spec says "could not be customised" — confirm wording).
- BLVD GUIDE: Kevin's contribution boundaries; release/launch status.

## Work completed (Prompt 7)

- Confirmed no local repos for either project (no Yii2 composer
  packages, no afriq/mwalimu/ajira directory names).
- `content/afriq-networks.ts` — team-context + contribution sections
  using only spec facts (4-person team incl. CTO; HR system, inventory
  system, network config).
- `content/mwalimuplus.ts` — platforms, integrations (M-PESA, Google
  APIs, Google AI Studio), team practice (Jira/Teams, peer reviews,
  demos, live testing), mentoring; dates Oct 2018–Apr 2022 and ~11-dev
  team structure.
- Removed "being confirmed" placeholder sentences — public pages
  contain only statements Kevin can stand behind.

## Outstanding questions for Kevin (Prompt 7 gaps)

- AfriQ Networks: job title/dates, tech stack, which HR and inventory
  modules Kevin personally built, what network configuration entailed,
  whether systems reached production.
- MwalimuPLUS / Ajira Connect: what each platform actually does and
  who uses it; which modules Kevin worked on; concrete examples of the
  M-PESA / Google / AI Studio integrations; mentoring examples;
  production outcomes if any.
- Both: any screenshots or documentation Kevin can supply.

## Commands run and results (Prompt 7)

- `npm run lint` — clean.
- `npm run build` — success; 14 routes prerender.
