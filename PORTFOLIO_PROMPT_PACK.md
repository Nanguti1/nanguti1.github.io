# Engineering Portfolio --- Implementation Prompt Pack

**Companion specification:** `ENGINEERING_PORTFOLIO_IMPLEMENTATION.md`\
**Target URL:** https://nanguti1.github.io/\
**Repository expected:** `Nanguti1/nanguti1.github.io` (verify before
use)\
**Purpose:** A sequence of reusable, self-contained prompts for
implementing the portfolio with an AI coding agent such as Devin.

------------------------------------------------------------------------

# How to use this prompt pack

This document is designed for multiple independent coding sessions.
Prompts are deliberately staged. Each one builds on the implementation
specification, but also repeats the essential constraints so a new
session can continue safely.

1.  Put `ENGINEERING_PORTFOLIO_IMPLEMENTATION.md` and this prompt pack
    in the repository, preferably under `docs/portfolio/`.
2.  Start with Prompt 0 in a fresh session.
3.  Run only the next phase prompt after the previous phase's exit
    criteria are met.
4.  At the end of every session, require the agent to update
    `PORTFOLIO_PROGRESS.md`.
5.  If a session ends or context is lost, start a new session with the
    Recovery Prompt. Do not restart from scratch.
6.  Do not ask the agent to invent missing content. It must inspect
    available source material and ask Kevin for facts it cannot verify.
7.  Review each phase's report before authorizing the next phase.

**Important:** The agent must work in the existing repository. It must
not create a replacement repository, rewrite the app without an audit,
or modify unrelated work.

------------------------------------------------------------------------

# Prompt 0 --- Master instructions and repository audit

Use this first, in a new implementation session.

``` text
You are implementing Kevin Wanyonyi's professional engineering portfolio.

READ THESE DOCUMENTS FIRST:
- ENGINEERING_PORTFOLIO_IMPLEMENTATION.md
- PORTFOLIO_PROMPT_PACK.md

If these files are not in the repository, stop and ask me to provide them. Do not guess their contents.

TARGET:
- Intended public URL: https://nanguti1.github.io/
- Expected GitHub repository: Nanguti1/nanguti1.github.io
- Confirm the actual repository and current Git remote before assuming anything.

PROJECT PURPOSE:
Create a premium, editorial-style engineering portfolio documenting only these six projects/experiences:
1. Simplifi Networks
2. 2B Gamers Store
3. Hamaline Insurance Management System
4. BLVD GUIDE
5. AfriQ Networks
6. MwalimuPLUS / Ajira Connect

This is a detailed project portfolio, not a CV template, generic agency site, or collection of shallow cards. 2B Gamers Store and Hamaline Insurance are the flagship case studies.

TECHNICAL DIRECTION:
- Next.js App Router, React, TypeScript, Tailwind CSS.
- Static export suitable for GitHub Pages.
- No Laravel backend, database, CMS, authentication, or admin dashboard.
- The target is a GitHub Pages USER site. If the repository is correctly named nanguti1.github.io, deploy at the root. Do not add a project basePath such as /wanyonyi.io.
- Adapt to the existing app; do not force a rewrite if a suitable setup already exists.

DESIGN DIRECTION:
- Premium, restrained, dark editorial engineering aesthetic.
- Near-black background, subtle surface layers and borders, off-white text, muted secondary text, restrained blue/violet accent.
- Geist or Inter typography.
- Strong typography, generous whitespace, large project imagery, editorial project rows, thoughtful responsive layouts.
- Subtle motion only; respect prefers-reduced-motion.
- Avoid generic SaaS-template styling, neon overload, excessive gradients/glows, and decorative animation that harms usability.

CONTENT RULES:
- Never invent features, dates, metrics, technologies, integrations, roles, architecture, or outcomes.
- Distinguish Kevin's individual contribution from team work.
- AfriQ Networks was a four-person team including the CTO; describe Kevin's contributions, not sole ownership.
- MwalimuPLUS / Ajira Connect work was within a larger engineering team; do not claim sole ownership.
- Use real project screenshots only when supplied or publicly approved. Never fabricate application screenshots or imply stock imagery is the actual product.
- Do not publish confidential data, credentials, private URLs, or customer information.
- If a fact is missing, record it as a question for Kevin. Do not fill it with a plausible assumption.

SCOPE:
Home, projects index, six individual case studies, about, and contact. See the implementation specification for full information architecture, known project context, content requirements, visual tokens, technical constraints, delivery phases, and definition of done.

PHASE 0 — AUDIT ONLY:
1. Inspect the current repository and working tree.
2. Inspect package.json, framework and dependency versions, app structure, existing pages, styles, public assets, scripts, lint/typecheck/test commands, Next.js config, and GitHub Pages deployment workflow.
3. Inspect current Git branch, remote, and recent commit context. Do not expose secrets.
4. Determine whether the repository is already a GitHub Pages user-site repository. Do not rename it or change the remote.
5. Inspect the current deployment setup and identify the minimum changes needed for root-level static export.
6. Identify existing work that must be preserved.
7. Check whether the two portfolio specification documents exist and whether a progress file exists.

STRICT SAFETY:
- This phase is audit only. Do not edit, delete, rename, install, upgrade, reformat, or generate files.
- Do not run destructive commands.
- Do not reset, clean, force-push, or overwrite user changes.
- Do not change GitHub settings, repository name, secrets, domains, branches, or deployment workflows.
- Do not make assumptions based on an earlier session.

DELIVERABLE:
Return an audit report with:
- Current stack and versions.
- Current app structure.
- Existing content/assets worth preserving.
- Current build/deployment mechanism.
- GitHub Pages compatibility assessment.
- Risks and required changes.
- Recommended implementation sequence.
- Questions requiring Kevin's decision.

Do not proceed to implementation until I approve the audit.

If the session is ending, create/update PORTFOLIO_PROGRESS.md only after I authorize file creation. Record the exact audit findings and next step.
```

------------------------------------------------------------------------

# Prompt 1 --- Establish the design system and shared site shell

Run only after the audit is reviewed and approved.

``` text
Continue the engineering portfolio implementation.

READ:
- ENGINEERING_PORTFOLIO_IMPLEMENTATION.md
- PORTFOLIO_PROMPT_PACK.md
- PORTFOLIO_PROGRESS.md, if it exists

First inspect the current repository and working tree. Reconcile the progress file with actual files and Git status. Do not assume the previous session completed anything unless the code confirms it.

TASK:
Implement the visual foundation and reusable site shell only. Do not yet write detailed project case-study content.

DESIGN:
Create a premium dark editorial engineering aesthetic:
- Near-black page background.
- Slightly lighter card/panel surfaces.
- Subtle borders.
- Off-white primary text and muted secondary text.
- Restrained blue/violet accent.
- Geist or Inter typography, depending on the existing setup.
- Large editorial headings, readable body text, generous whitespace.
- Responsive containers and carefully controlled line lengths.
- Refined hover/focus states.
- Subtle transitions; respect prefers-reduced-motion.

Avoid:
- Generic template appearance.
- Overuse of gradients, glowing borders, blur, glassmorphism, and neon.
- Tiny project cards.
- Excessive animation.
- Decorative elements that reduce readability.

IMPLEMENT:
1. Design tokens and global styles.
2. Typography and responsive content containers.
3. Site header with desktop and accessible mobile navigation.
4. Footer.
5. Reusable section heading.
6. Reusable project metadata and technology tags.
7. Reusable project feature/row component.
8. Reusable neutral image placeholder for projects without approved screenshots.
9. Basic button/link styles with visible keyboard focus.
10. Shared page layout and responsive spacing.

Do not add a new component library unless the current repository genuinely needs one. Prefer the existing dependencies and simple components.

CONTENT:
Use only the six approved project names. Placeholder copy must be clearly marked as temporary and must not make factual claims. Do not add unrelated projects or generic testimonials.

QUALITY:
- Semantic HTML.
- Keyboard accessible.
- No horizontal overflow at mobile widths.
- Consistent design tokens.
- No unnecessary client components.
- No console errors or hydration warnings.

TEST:
Run the relevant lint, typecheck, and build commands discovered during the audit. Report exact commands and outcomes.

At completion:
- Update PORTFOLIO_PROGRESS.md with changed files, design decisions, test results, outstanding issues, and exact next task.
- Do not deploy.
- Do not modify unrelated files.
- Report whether the phase exit criteria are met.
```

------------------------------------------------------------------------

# Prompt 2 --- Build the homepage and projects index

``` text
Continue the existing engineering portfolio. Do not restart or scaffold a new app.

READ:
- ENGINEERING_PORTFOLIO_IMPLEMENTATION.md
- PORTFOLIO_PROMPT_PACK.md
- PORTFOLIO_PROGRESS.md

Inspect the working tree and reconcile the progress file with actual code before editing.

TASK:
Implement the homepage and projects index using the established design system.

HOMEPAGE SECTIONS:
1. Hero:
   - Kevin Wanyonyi.
   - A concise professional positioning statement.
   - Explain that the portfolio documents selected software projects and engineering contributions.
   - Primary CTA: Explore projects.
   - Secondary CTA: Contact.
   - Do not invent experience duration, client numbers, revenue, or performance statistics.

2. Selected work:
   - Feature 2B Gamers Store and Hamaline Insurance as flagship case studies.
   - Also feature Simplifi Networks and BLVD GUIDE.
   - Use real approved screenshots if present. Otherwise use the neutral project placeholder.
   - Link to the correct case-study routes. If those pages are not implemented yet, use valid planned links only if the route will be created in the next phase; do not leave broken links in the final build.

3. Engineering approach:
   - Brief, concrete statements about business workflows, backend/frontend implementation, integrations, data integrity, testing, and maintainability.
   - Do not turn this into an inflated skills/buzzword wall.

4. Experience snapshot:
   - Include AfriQ Networks and MwalimuPLUS / Ajira Connect with accurate team-contribution framing.

5. Contact:
   - Use only verified contact details and profile links available in the repository or explicitly supplied by Kevin.
   - GitHub profile: https://github.com/Nanguti1
   - Portfolio URL: https://nanguti1.github.io/
   - Do not invent email or LinkedIn URLs.

PROJECTS INDEX:
- Include exactly the six approved project/experience entries.
- Use strong editorial rows or a considered responsive grid, not six tiny identical cards.
- Each item includes project name, factual one-line description, role/contribution label, concise technologies, category, and case-study link.
- Make the two flagship projects visually prominent without hiding the remaining work.
- Do not invent product screenshots.

ABOUT AND CONTACT:
Create the basic route structure if it is needed for navigation, but keep copy concise and factual. Detailed professional narrative can be refined later.

SEO:
Add accurate page title and description metadata. Do not add unsupported structured data.

TEST:
Check all links, responsive layouts, lint, typecheck, and production build.

At completion:
- Update PORTFOLIO_PROGRESS.md with files changed, implemented sections, verified facts, unresolved content, test outcomes, and exact next task.
- Do not deploy.
- Do not add unrelated work.
```

------------------------------------------------------------------------

# Prompt 3 --- Create the reusable case-study framework

``` text
Continue the current portfolio implementation.

READ:
- ENGINEERING_PORTFOLIO_IMPLEMENTATION.md
- PORTFOLIO_PROMPT_PACK.md
- PORTFOLIO_PROGRESS.md

Inspect the current repository and reconcile the progress file before changing anything.

TASK:
Create the reusable case-study page system. Do not yet fill all six pages with invented or speculative content.

REQUIRED PAGE STRUCTURE:
1. Project hero: title, concise description, role/contribution, and technology summary.
2. At-a-glance metadata.
3. Context and problem.
4. Solution overview.
5. Functional modules.
6. Technical implementation.
7. Architecture and engineering decisions.
8. My contribution.
9. Challenges and solutions.
10. Screenshots / walkthrough.
11. Outcome.
12. Related project navigation.

Use sections only when content is supported. A section with no verified material should be omitted or clearly remain an editorial question in the internal content checklist; do not publish fake copy.

IMPLEMENT:
- A typed project metadata model.
- A maintainable content source (MDX or structured TypeScript content) compatible with the existing stack and static export.
- A project registry for the six exact slugs.
- A reusable case-study layout.
- Project metadata component.
- Technology list component.
- Screenshot gallery or image layout.
- In-page table of contents for long case studies, if it improves navigation.
- Previous/next project navigation.
- Per-page metadata.
- Correct not-found behaviour for invalid project slugs.

REQUIRED SLUGS:
- simplifi-networks
- 2b-gamers-store
- hamaline-insurance
- blvd-guide
- afriq-networks
- mwalimuplus

STATIC EXPORT:
Ensure all six dynamic case-study routes are generated at build time. Follow the existing Next.js version's static generation requirements. Do not add a basePath for /wanyonyi.io.

CONTENT SAFETY:
- Seed only facts in the implementation specification.
- Do not infer extra features from a project's name.
- Do not invent dates, metrics, architecture, outcomes, integrations, or responsibilities.
- Preserve the distinction between personal and team contributions.
- If the implementation needs content that is not available, create an internal missing-information checklist for Kevin.

DESIGN:
Keep the dark editorial aesthetic, readable long-form typography, large screenshot presentation, subtle section dividers, and responsive behaviour.

TEST:
Run lint, typecheck, and production static export. Verify each route exists in the generated output and can be reached by direct URL.

At completion:
- Update PORTFOLIO_PROGRESS.md with implementation details, route generation results, tests, unresolved content questions, and exact next task.
- Do not deploy.
```

------------------------------------------------------------------------

# Prompt 4 --- Implement and verify the 2B Gamers Store case study

``` text
Continue the existing portfolio. Read the implementation specification, prompt pack, and PORTFOLIO_PROGRESS.md. Inspect the current repository and verify the case-study framework before editing.

TASK:
Complete the 2B Gamers Store case study as the first flagship page.

KNOWN FACTS THAT MAY BE USED:
- Production Kenyan gaming retail and service platform.
- Laravel 13 / PHP 8.4, Inertia, React, Tailwind CSS, MySQL.
- Replaced a WordPress-based solution because of custom business requirements.
- Storefront, customer accounts, cart.
- M-PESA STK Push integration using iankumu/mpesa.
- STK/C2B/callback records.
- Inventory ledger/movements, product variants, low-stock monitoring, inventory valuation.
- Suppliers, purchases, approvals, receiving.
- Repair jobs.
- POS/admin operations.
- Email jobs/cron and backups.

CASE-STUDY MODULES:
1. Business context and reason for replacing WordPress.
2. Storefront and e-commerce workflows.
3. M-PESA payment lifecycle.
4. Inventory management and stock movement.
5. Procurement and receiving.
6. Repair operations.
7. Point of Sale.
8. Background processing and operational tasks.
9. Architecture and engineering decisions.
10. Kevin's personal contribution.

IMPORTANT TECHNICAL INVESTIGATION:
If source code or project documentation is available, inspect it to validate:
- Payment initiation and callback flow.
- Payment status transitions and duplicate callback protection, if implemented.
- Transaction boundaries and data integrity.
- Inventory mutation and stock ledger rules.
- Purchase/receiving workflow.
- POS relationship with stock and orders.
- Authorization and admin responsibilities.
- Tests and safeguards.

Do not claim idempotency, reconciliation, concurrency handling, security controls, or specific architecture unless verified.

SCREENSHOTS:
Search the repository for approved screenshots. Do not use unrelated stock images or create fake application UI. If screenshots are missing, use the neutral project visual and add a precise request to the content questions.

WRITING:
Write as an engineer explaining real implementation to a technically literate reader. Be detailed, clear, and specific. Avoid marketing exaggeration. Distinguish implemented features from planned features.

DESIGN:
This is a flagship case study. Give it a strong opening visual, clear module sections, architecture visual only if verified, and a well-presented screenshot gallery.

TEST:
Verify the route, metadata, images, mobile layout, internal links, lint, typecheck, and static export.

At completion:
- Update PORTFOLIO_PROGRESS.md.
- Record evidence inspected and any claims still awaiting Kevin's confirmation.
- Report exact files changed and test results.
- Do not deploy.
```

------------------------------------------------------------------------

# Prompt 5 --- Implement and verify the Hamaline Insurance case study

``` text
Continue the existing portfolio. Read the implementation specification, prompt pack, and PORTFOLIO_PROGRESS.md. Inspect the existing case-study framework and current working tree before editing.

TASK:
Complete Hamaline Insurance Management System as the second flagship case study.

KNOWN FACTS THAT MAY BE USED:
- End-to-end insurance management application.
- Laravel 13 / PHP 8.3+, Inertia, React 19, TypeScript, MySQL.
- Modular monolith approach.
- Laravel Fortify.
- Spatie permissions.
- DomPDF.
- PHPUnit.
- Radix UI, React Hook Form, and Zod.
- Business areas: client administration, underwriting, policies, claims, payments, renewals, commissions, reporting, and role-based access control.
- Kevin has described this as a strong example of end-to-end ownership.

CASE-STUDY MODULES:
1. Business context and system overview.
2. Client administration.
3. Underwriting.
4. Policy lifecycle.
5. Claims processing.
6. Payments.
7. Renewals.
8. Commissions.
9. Reporting and PDF generation.
10. Authentication, authorization, and role-based access.
11. Modular monolith architecture.
12. Testing and engineering decisions.
13. Kevin's end-to-end contribution.

TECHNICAL VALIDATION:
Inspect available source and docs to establish:
- Actual module boundaries.
- Policy and claims state transitions.
- Permission model and enforcement.
- Backend/frontend validation flow.
- PDF/report generation.
- Important business rules and tests.
- Which parts Kevin personally owned versus collaborated on.

Do not invent insurance products, regulatory integrations, payment providers, compliance certifications, or actuarial calculations.

SCREENSHOTS:
Use only actual approved screenshots. Redact customer or policyholder data before publication. If screenshots are missing, use a neutral visual and add a request to the content checklist.

WRITING:
Detailed technical case study, not a generic insurance product description. Explain real workflows and engineering decisions. Avoid unsupported outcomes.

TEST:
Verify route, metadata, images, mobile layout, links, lint, typecheck, and static export.

At completion:
- Update PORTFOLIO_PROGRESS.md.
- Record evidence and outstanding confirmation questions.
- Report files changed and exact test results.
- Do not deploy.
```

------------------------------------------------------------------------

# Prompt 6 --- Implement Simplifi Networks and BLVD GUIDE

``` text
Continue the portfolio. Read the implementation specification, prompt pack, and PORTFOLIO_PROGRESS.md. Inspect the repository and verify the case-study system before editing.

TASK:
Complete two case studies:
1. Simplifi Networks.
2. BLVD GUIDE.

SIMPLIFI NETWORKS — KNOWN FACTS:
- Networking / telecommunications distribution business.
- Platform built from the ground up after moving away from a PrestaShop-based solution.
- Laravel API/backend, Laravel Nova administration, Next.js frontend, MySQL, Tailwind CSS.

Document:
- Business context and why the previous solution was replaced, after confirming exact reasons.
- The actual storefront and catalogue workflows.
- Laravel API/backend responsibilities.
- Laravel Nova administration.
- Next.js frontend.
- Data model and integration boundaries, if verified.
- Kevin's individual contribution and team involvement.

Do not assume payment, shipping, inventory, account, analytics, or other features unless the source confirms them.

BLVD GUIDE — KNOWN FACTS:
- Venue discovery and marketplace platform.
- Laravel 13.7 / PHP 8.3, React 19.2, TypeScript 5.7, Inertia, Tailwind CSS 4.
- Venue discovery/listings, reviews, subscription plans, venue approval, media/documents.
- Country/county/city/locale hierarchy.

Document:
- Venue discovery and listing workflows.
- Venue profiles and lifecycle.
- Venue onboarding and approval.
- Reviews and ratings.
- Subscription plans.
- Media and document management.
- Geographic hierarchy and data modelling.
- Kevin's actual contribution and release status.

Do not assume bookings, maps, payment processing, messaging, or other unverified features.

FOR BOTH:
- Use the shared case-study template.
- Explain technical implementation, not just feature lists.
- Use real approved screenshots only.
- Distinguish implementation facts from questions needing confirmation.
- Avoid marketing exaggeration and fabricated results.

TEST:
Verify both routes, metadata, images, mobile layout, internal links, lint, typecheck, and static export.

At completion:
- Update PORTFOLIO_PROGRESS.md with exact status and evidence.
- Record unresolved content questions.
- Report files changed and test results.
- Do not deploy.
```

------------------------------------------------------------------------

# Prompt 7 --- Implement AfriQ Networks and MwalimuPLUS / Ajira Connect

``` text
Continue the portfolio. Read the implementation specification, prompt pack, and PORTFOLIO_PROGRESS.md. Inspect the existing case-study framework and working tree before editing.

TASK:
Complete the two earlier team-experience case studies. Their purpose is to show professional engineering experience, teamwork, platform contributions, integrations, and growth.

AFRIQ NETWORKS — KNOWN FACTS:
- Worked in a team of four, including the CTO.
- Contributed to an HR system.
- Contributed to an inventory system.
- Also participated in network configuration.

MUST ESTABLISH WITH KEVIN OR SOURCE MATERIAL:
- Exact dates and job title.
- Frameworks/languages/database used.
- HR modules personally implemented.
- Inventory modules personally implemented.
- Exact network configuration tasks.
- Team process and deployment context.
- Which systems/features reached production.

Use accurate team framing:
- “Contributed to…”
- “Worked with the team on…”
- “Implemented [specific module]…”
Do not imply that Kevin independently designed and built the complete systems.

MWALIMUPLUS / AJIRA CONNECT — KNOWN FACTS:
- Core developer from October 2018 to April 2022.
- Approximately 11 developers plus project manager, systems analyst, QA, and technical director.
- PHP, Yii2, JavaScript, Bootstrap, MySQL, custom CSS.
- Third-party integrations included M-PESA, Google APIs, and Google AI Studio.
- Jira and Microsoft Teams used for collaboration.
- Peer reviews, demonstrations, and live testing.
- Kevin mentored interns.

MUST ESTABLISH:
- What each platform did and who used it.
- Specific modules Kevin worked on for each platform.
- Actual use cases for M-PESA and Google integrations.
- Release/testing workflow.
- Examples of mentoring and technical collaboration.
- Verified production outcomes, if any.

PRESENTATION:
- One MwalimuPLUS case-study page may include clearly separated MwalimuPLUS and Ajira Connect sections.
- Make the team context clear.
- Show technical contribution without suggesting sole ownership.
- Use a more experience-oriented narrative than the flagship commercial system pages.

Do not invent features, outcomes, dates beyond the known period, or technical details.

TEST:
Verify both routes, metadata, images, responsive layout, links, lint, typecheck, and static export.

At completion:
- Update PORTFOLIO_PROGRESS.md.
- Record all unresolved questions and evidence.
- Report files changed and exact test results.
- Do not deploy.
```

------------------------------------------------------------------------

# Prompt 8 --- About, contact, editorial review, and SEO

``` text
Continue the existing portfolio. Read the implementation specification, prompt pack, and PORTFOLIO_PROGRESS.md. Inspect the actual content and code before editing.

TASK:
Finish the supporting pages and perform an editorial consistency review.

ABOUT PAGE:
- Concise professional background.
- Focus on full-stack software engineering, backend systems, frontend applications, integrations, business workflows, and collaboration.
- Use only verified professional facts.
- Do not turn the page into a copied CV.
- Avoid unsupported years-of-experience claims and generic self-praise.

CONTACT:
- Use only verified email and social/profile URLs.
- GitHub: https://github.com/Nanguti1
- Portfolio: https://nanguti1.github.io/
- Do not guess LinkedIn or email URLs.
- Make contact actions accessible and obvious.

EDITORIAL REVIEW:
Review all six case studies for:
- Unsupported features or technical claims.
- Invented metrics or outcomes.
- Inaccurate ownership language.
- Inconsistent project names and technologies.
- Repetition and generic AI-sounding language.
- Unexplained acronyms.
- Empty sections and placeholder copy.
- Confidential or sensitive information.
- Broken internal/external links.

SEO:
- Unique title and description for every route.
- Canonical URLs using https://nanguti1.github.io/.
- Open Graph and social preview metadata.
- Favicon.
- Sitemap and robots output compatible with static export.
- Semantic headings and accessible link text.
- No fabricated structured data.

Do not add a blog, testimonials, services/pricing, CV download, or additional projects.

TEST:
Run lint, typecheck, and production static export. Verify every route and metadata output.

At completion:
- Update PORTFOLIO_PROGRESS.md.
- Provide an editorial audit listing verified claims, outstanding questions, and any content withheld pending approval.
- Do not deploy yet.
```

------------------------------------------------------------------------

# Prompt 9 --- Final QA and GitHub Pages deployment

``` text
Perform final QA and deployment of Kevin Wanyonyi's engineering portfolio.

READ:
- ENGINEERING_PORTFOLIO_IMPLEMENTATION.md
- PORTFOLIO_PROMPT_PACK.md
- PORTFOLIO_PROGRESS.md

FIRST:
Inspect the repository, current branch, Git status, remotes, deployment workflow, and generated build output. Reconcile the progress file with actual state. Do not assume deployment settings or repository name.

TARGET:
https://nanguti1.github.io/

PRE-DEPLOY CHECKLIST:
1. Confirm the repository is the correct GitHub Pages user-site repository.
2. Confirm the Next.js configuration uses static export.
3. Confirm no project basePath such as /wanyonyi.io is configured.
4. Confirm all six case-study routes are generated.
5. Confirm all internal links and assets resolve.
6. Confirm nested routes work on direct navigation and refresh.
7. Confirm images have appropriate alt text and no private data.
8. Confirm mobile/tablet/desktop layouts.
9. Confirm keyboard navigation, focus states, and reduced-motion support.
10. Confirm page titles, descriptions, canonical URLs, Open Graph metadata, favicon, sitemap, and robots output.
11. Search for temporary placeholders, Lorem ipsum, fake metrics, unsupported claims, and accidental secrets.
12. Run lint, typecheck, tests (if present), and production build/export.

GITHUB PAGES:
- Inspect the existing workflow and publishing configuration.
- Make only the minimum verified changes required to publish the static export.
- Preserve existing unrelated workflows and repository configuration.
- Do not change repository name, branch protection, secrets, domain, or GitHub settings.
- Do not force-push, reset, clean, or discard user changes.
- Do not deploy if the build or route checks fail.

DEPLOY:
Only after all checks pass, use the repository's established safe deployment process. If the process requires a user action or GitHub permission that is unavailable, explain the exact remaining step rather than claiming success.

POST-DEPLOY:
- Verify https://nanguti1.github.io/.
- Verify each of the six case-study URLs by direct navigation.
- Check images, styles, fonts, and browser console/network failures where available.
- Record the deployment commit/workflow result and verification time.

At completion:
- Update PORTFOLIO_PROGRESS.md with the deployed commit, workflow outcome, verified URLs, test commands/results, and any remaining issues.
- Summarize exactly what changed.
- Do not claim successful deployment unless it was actually verified.
```

------------------------------------------------------------------------

# Recovery Prompt --- Continue in a different session

Use this whenever a previous session ended, context was lost, or a
different coding agent is being used.

``` text
I am continuing an existing implementation of Kevin Wanyonyi's engineering portfolio. Do not restart the project.

The authoritative project instructions are:
- ENGINEERING_PORTFOLIO_IMPLEMENTATION.md
- PORTFOLIO_PROMPT_PACK.md
- PORTFOLIO_PROGRESS.md

Read all three files before taking action. If any is missing, stop and tell me which one is missing.

TARGET:
https://nanguti1.github.io/

SCOPE:
Exactly these six projects/experiences:
- Simplifi Networks
- 2B Gamers Store
- Hamaline Insurance Management System
- BLVD GUIDE
- AfriQ Networks
- MwalimuPLUS / Ajira Connect

STACK:
Next.js App Router, React, TypeScript, Tailwind CSS, static export for GitHub Pages. No backend, database, CMS, authentication, or admin dashboard.

DESIGN:
Premium dark editorial engineering portfolio: near-black surfaces, restrained blue/violet accent, Geist/Inter typography, generous whitespace, large real project imagery, clear long-form case studies, responsive layout, subtle accessible motion.

NON-NEGOTIABLE:
- Never invent facts, features, metrics, dates, integrations, technologies, architecture, or outcomes.
- Accurately distinguish personal work from team contributions.
- AfriQ Networks was a four-person team including the CTO.
- MwalimuPLUS / Ajira Connect work was within a larger engineering team.
- Use only supplied or approved real screenshots. Never fabricate product screenshots.
- Do not expose confidential data.
- Do not damage unrelated work or deployment configuration.
- Do not assume prior session claims are true; inspect the repository.

RECOVERY PROCEDURE:
1. Inspect the working tree, branch, remotes, and recent commits.
2. Read PORTFOLIO_PROGRESS.md and verify every claimed completed task against the actual code.
3. Identify the last fully completed phase and its exit criteria.
4. Identify incomplete or partially completed work.
5. Report the current state and propose the single next safe task.
6. Do not make broad changes until I approve the recovery assessment.

If I approve:
- Continue from the next incomplete phase.
- Make the smallest coherent set of changes.
- Run relevant checks.
- Update PORTFOLIO_PROGRESS.md with exact changed files, decisions, test results, unresolved questions, and the next task.

Do not repeat completed work merely because this is a new session.
```

------------------------------------------------------------------------

# Optional content-gathering prompt --- Audit an individual project repository

Use this when you provide Devin with access to one of the actual project
repositories. Run it separately for each project. It is an audit, not
permission to modify the source project.

``` text
I am preparing a public engineering portfolio case study for this project.

Inspect this repository as a technical researcher. This is READ-ONLY. Do not edit files, install dependencies, run migrations, access production systems, expose secrets, or make changes.

OBJECTIVE:
Produce an evidence-based case-study research report covering:
1. What the application does, based on evidence.
2. Main business domains and user workflows.
3. Backend architecture and important modules.
4. Frontend architecture and major screens.
5. Database entities and important relationships.
6. Third-party integrations and their actual use.
7. Authentication and authorization.
8. Background jobs, events, queues, and scheduled tasks.
9. Important business rules and data-integrity mechanisms.
10. Testing approach and available test coverage.
11. Deployment/infrastructure clues, without exposing secrets.
12. Evidence of the specific functionality present in the code.
13. Areas where the repository cannot establish Kevin's personal contribution.

FOR EVERY IMPORTANT CLAIM:
- Include the relevant file path and symbol/class/function name.
- Explain what the evidence demonstrates.
- Distinguish directly observed implementation from inference.
- Mark confidence as high, medium, or low.
- Do not infer that Kevin personally wrote code merely because it exists in the repository.

SECURITY:
- Never print .env values, API keys, tokens, passwords, private customer data, production records, or secrets.
- Do not include sensitive infrastructure details in the public-facing report.
- If a secret is encountered, report only that a sensitive value exists and where it should be reviewed, without reproducing it.

OUTPUT:
A structured research report with:
- Executive summary.
- Verified features/modules.
- Technical architecture.
- Integrations.
- Data integrity and security observations.
- Testing.
- Candidate case-study narrative.
- Claims requiring Kevin's confirmation.
- Details that must not be published.

Do not modify the repository.
```

------------------------------------------------------------------------

# Session completion checklist

Before ending any coding session, the agent must:

-   [ ] Confirm the working tree and identify changed files.
-   [ ] Run the relevant checks and report exact results.
-   [ ] Identify incomplete work and blockers.
-   [ ] Record questions requiring Kevin's answer.
-   [ ] Update `PORTFOLIO_PROGRESS.md`.
-   [ ] State the exact next prompt/phase to run.
-   [ ] Avoid claiming that unverified work is complete.
-   [ ] Avoid deployment unless the deployment prompt has been
    explicitly authorized.

**The progress file is the handoff contract between sessions. The
implementation specification is the source of truth for product scope
and quality. This prompt pack is the execution sequence.**
