# Engineering Portfolio --- Implementation Specification

**Project:** Kevin Wanyonyi --- Engineering Portfolio\
**Target URL:** https://nanguti1.github.io/\
**Repository:** `Nanguti1/nanguti1.github.io` (confirm the actual
repository name before changing Git configuration)\
**Document type:** Product, content, design, and technical
implementation specification\
**Status:** Ready for implementation\
**Primary goal:** Present six selected projects and professional
experiences through accurate, detailed engineering case studies.

------------------------------------------------------------------------

## 1. Product vision

Build a polished, premium engineering portfolio that demonstrates the
work behind six selected projects and experiences:

1.  Simplifi Networks
2.  2B Gamers Store
3.  Hamaline Insurance Management System
4.  BLVD GUIDE
5.  AfriQ Networks
6.  MwalimuPLUS / Ajira Connect

This is not a CV website, a generic agency template, or a collection of
short project cards. It is a project-led portfolio. A technical
interviewer, engineering manager, or prospective client should be able
to understand:

-   What each system does and the business problem it addresses.
-   Which users and business workflows it supports.
-   How the system is structured technically.
-   Which technologies and integrations were used.
-   What Kevin personally implemented or contributed.
-   What engineering decisions, constraints, and challenges mattered.

The site must communicate technical depth without exaggerating
ownership, inventing metrics, exposing confidential information, or
using generic claims.

### Non-goals

Do not add unrelated projects, blog posts, testimonials,
services/pricing pages, a CV download section, a generic skills wall, or
speculative product claims unless explicitly approved later. Do not
build an admin dashboard, CMS, authentication system, database, or
separate Laravel API for this static portfolio.

------------------------------------------------------------------------

## 2. Project scope and information architecture

### Primary navigation

-   Home
-   Projects
-   About
-   Contact

Keep navigation restrained. The projects and case studies are the
primary content.

### Routes

``` text
/
├── /projects
├── /projects/simplifi-networks
├── /projects/2b-gamers-store
├── /projects/hamaline-insurance
├── /projects/blvd-guide
├── /projects/afriq-networks
├── /projects/mwalimuplus
├── /about
└── /contact
```

Use clean, stable slugs. The MwalimuPLUS page may explain the user's
work across MwalimuPLUS and Ajira Connect; do not create a separate
Ajira Connect case study unless later requested.

### Home page

The home page should quickly establish professional identity and direct
visitors to the work.

Recommended sections:

1.  **Hero**
    -   Name: Kevin Wanyonyi.
    -   Positioning: Senior Full-Stack Software Consultant / Full-Stack
        Software Engineer (choose one consistent title based on the
        final copy).
    -   A concise introduction focused on designing and building
        practical web applications and business systems.
    -   Primary action: Explore projects.
    -   Secondary action: Contact.
    -   Avoid unsupported years-of-experience counts, client counts,
        revenue claims, or performance metrics.
2.  **Selected work**
    -   Feature 2B Gamers Store and Hamaline Insurance as flagship case
        studies.
    -   Feature Simplifi Networks and BLVD GUIDE as other substantial
        full-stack projects.
    -   Include AfriQ Networks and MwalimuPLUS in the complete project
        index and a compact experience section on the home page if space
        allows.
    -   Use real product screenshots when available. Until supplied, use
        deliberate neutral placeholders rather than fabricated
        application screenshots.
3.  **Engineering approach**
    -   A short, evidence-based summary: business workflows, backend
        architecture, frontend implementation, integrations, data
        integrity, testing, and maintainability.
    -   Do not turn this into a long list of buzzwords.
4.  **Experience snapshot**
    -   Brief links to AfriQ Networks and MwalimuPLUS / Ajira Connect
        case studies.
    -   Clearly distinguish team contributions from individual
        ownership.
5.  **Contact**
    -   Email and verified professional links only.
    -   GitHub: `https://github.com/Nanguti1`
    -   Portfolio: `https://nanguti1.github.io/`
    -   Add LinkedIn only after confirming the correct profile URL.
    -   Do not invent an email address or social profile.

### Projects index

Present all six case studies with strong visual hierarchy. Each item
should include:

-   Project / organization name.
-   One-line factual description.
-   Role or contribution label that accurately reflects the work.
-   Technology summary.
-   Project category (e-commerce/business platform, insurance system,
    marketplace, HR/inventory, education/opportunity platform).
-   A real screenshot or neutral visual placeholder.
-   A clear link to the case study.

Do not use six identical tiny cards. Prefer large editorial project rows
or a responsive asymmetric grid. The two flagship projects should
receive more visual prominence without hiding the others.

------------------------------------------------------------------------

## 3. Case-study content standard

Every case study should follow a reusable structure, with sections
omitted when they are not supported by verified information.

1.  **Project introduction**
    -   Project name, short description, contribution/role, timeframe
        only if confirmed, and technology summary.
2.  **At a glance**
    -   Product type, platform type, role, technologies, and verified
        live link if public.
3.  **Context and problem**
    -   Business context, what the system was intended to improve, and
        intended users.
4.  **Solution overview**
    -   What was built and how the major parts fit together.
5.  **Functional modules**
    -   Group related capabilities into understandable business modules.
6.  **Technical implementation**
    -   Backend, frontend, database, integrations, background work,
        authorization, testing, deployment---only where evidenced.
7.  **Architecture and engineering decisions**
    -   Explain real design decisions and why they mattered. Use a
        diagram only when the architecture is known.
8.  **My contribution**
    -   Separate personally implemented work from team-owned or
        organization-wide functionality.
9.  **Challenges and solutions**
    -   Include only real challenges and solutions. Do not manufacture a
        dramatic problem/solution narrative.
10. **Screenshots / walkthrough**
    -   Use supplied or publicly approved screenshots. Caption each
        image and explain what it demonstrates.
11. **Outcome**
    -   State verified outcomes qualitatively or quantitatively. No
        invented adoption, revenue, speed, uptime, or efficiency
        metrics.
12. **Related work / navigation**
    -   Link to the next or previous case study and back to projects.

Use direct, technically specific language. Explain acronyms on first use
where appropriate. Avoid inflated language such as "revolutionary,"
"cutting-edge," "seamless," "world-class," and "highly scalable" unless
evidence supports it.

------------------------------------------------------------------------

## 4. Project-specific content requirements

The following is the known starting point. Treat it as verified project
context, not permission to invent missing implementation details.
Validate claims against source code, documentation, screenshots, and
Kevin's confirmation before publishing.

### 4.1 Simplifi Networks

**Known context** - A networking / telecommunications distribution
business. - Platform built from the ground up after moving away from a
PrestaShop-based solution. - Laravel API/backend, Laravel Nova
administration, Next.js frontend, MySQL, and Tailwind CSS.

**Areas to investigate and document** - Why the earlier platform was
replaced and which requirements needed customization. - Storefront and
catalogue workflows. - Product, category, pricing, customer, order, and
administrative capabilities, but only those actually implemented. - API
boundary and how Next.js communicates with Laravel. - Laravel Nova
resources and administrative workflows. - Data modelling and deployment
approach, if verifiable. - Kevin's personal contribution and any team
involvement.

**Do not assume** - Payment gateways, stock features, shipping
integrations, customer account features, analytics, or specific business
outcomes unless confirmed by the project.

### 4.2 2B Gamers Store --- flagship case study

**Known context** - Production Kenyan gaming retail and service
platform. - Replaced a WordPress-based solution because of custom
business requirements. - Laravel 13 / PHP 8.4, Inertia, React, Tailwind
CSS, and MySQL. - Includes storefront, customer accounts, cart, M-PESA
STK Push integration, STK/C2B/callback records, inventory ledger and
movements, product variants, low-stock monitoring, inventory valuation,
suppliers, purchases, approvals, receiving, repair jobs, POS/admin
operations, email jobs/cron, and backups. - M-PESA integration uses
`iankumu/mpesa`.

**Recommended modules** 1. Storefront and commerce: catalogue, customer
accounts, cart, checkout, orders. 2. Payments: STK Push initiation,
callback handling, transaction records, and payment status lifecycle.
Explain idempotency, validation, and reconciliation only to the extent
supported by implementation. 3. Inventory: stock movements, variants,
low-stock monitoring, and valuation. 4. Procurement: suppliers,
purchases, approvals, and goods receiving. 5. Repair operations:
repair-job tracking and lifecycle. 6. Point of Sale: actual POS workflow
and its relationship to stock and orders. 7. Operations: queues/jobs,
email notifications, scheduled tasks, and backup strategy.

**Technical investigation** - Payment request and callback lifecycle. -
How payment status is persisted and protected against duplicate
callbacks. - Database transactions and consistency boundaries. - How
stock changes are represented and audited. - How purchases and receiving
affect inventory. - How repair jobs and POS operations connect to
products/customers. - Authorization and admin boundaries. - Tests and
operational safeguards.

Do not claim that a particular concurrency, idempotency, reconciliation,
or security mechanism exists until confirmed in the source.

### 4.3 Hamaline Insurance Management System --- flagship case study

**Known context** - End-to-end insurance management application. -
Laravel 13 / PHP 8.3+, Inertia, React 19, TypeScript, and MySQL. -
Modular monolith approach. - Laravel Fortify, Spatie permissions,
DomPDF, PHPUnit, Radix UI, React Hook Form, and Zod. - Business areas
include client administration, underwriting, policies, claims, payments,
renewals, commissions, reporting, and role-based access control. - Kevin
has described this as a strong example of end-to-end ownership.

**Recommended modules** 1. Client administration. 2. Underwriting. 3.
Policy lifecycle and administration. 4. Claims processing. 5. Payments.
6. Renewals. 7. Commissions. 8. Reporting and PDF/document generation.
9. Access control and administration.

**Technical investigation** - Module boundaries and how the modular
monolith is organized. - Policy and claims workflows. - Authorization
model and role/permission enforcement. - Validation across Laravel and
React forms. - PDF generation and reporting. - Test coverage and
critical business rules. - Kevin's precise end-to-end ownership
boundaries.

Do not invent insurance products, regulatory integrations, payment
providers, actuarial logic, or compliance certifications.

### 4.4 BLVD GUIDE

**Known context** - Venue discovery and marketplace platform. - Laravel
13.7 / PHP 8.3, React 19.2, TypeScript 5.7, Inertia, and Tailwind CSS
4. - Includes venue discovery/listings, reviews, subscription plans,
venue approval, media/documents, and a country/county/city/locale
hierarchy.

**Areas to document** - Visitor discovery and listing experience. -
Venue profile and listing lifecycle. - Venue onboarding and approval. -
Reviews and ratings. - Subscription plans and related workflows. -
Media/document management. - Geographic data model and location
hierarchy. - Roles and permissions, if implemented. - Kevin's
contribution and actual release status.

Do not imply that bookings, maps, payments, messaging, or other
marketplace capabilities exist unless verified.

### 4.5 AfriQ Networks

**Known context** - Worked in a team of four, including the CTO. -
Contributed to an HR system and an inventory system. - Also contributed
to network configuration. - This was a team effort; do not portray the
entire systems as sole individual work.

**Areas to establish with Kevin** - Exact dates and job title. - Stack
and tools used. - HR modules personally implemented. - Inventory modules
personally implemented. - Network configuration tasks actually
performed. - Team workflow and collaboration. - Deployment or production
use, if confirmed.

Use contribution language such as "Contributed to," "Implemented parts
of," or "Worked with the team on" where accurate.

### 4.6 MwalimuPLUS / Ajira Connect

**Known context** - Core developer from October 2018 to April 2022. -
Team of approximately 11 developers, plus project manager, systems
analyst, QA, and technical director. - PHP, Yii2, JavaScript, Bootstrap,
MySQL, and custom CSS. - Third-party integrations included M-PESA,
Google APIs, and Google AI Studio. - Worked with Jira and Microsoft
Teams, peer reviews, demonstrations, and live testing. - Mentored
interns. - Do not claim sole ownership of the platforms.

**Areas to establish** - What MwalimuPLUS did and its principal user
groups. - What Ajira Connect did and how it differed. - Modules
personally worked on for each platform. - Exact API integration use
cases. - Team development and release process. - Mentoring
responsibilities and examples. - Production usage or outcomes, only if
confirmed.

This case study should show growth in a structured engineering team,
collaboration, long-running product development, integrations, and
mentoring.

------------------------------------------------------------------------

## 5. Visual direction and design system

### Design concept

Use a premium, editorial engineering aesthetic: dark, restrained,
confident, and content-led. The design should feel like a thoughtful
technical publication, not a generic SaaS landing-page template.

### Colour direction

Use design tokens rather than scattered hard-coded colours. Suggested
starting palette:

  Token              Suggested value            Usage
  ------------------ -------------------------- --------------------------------
  Background         `#0B0D12`                  Main page background
  Surface            `#121722`                  Cards and panels
  Elevated surface   `#171E2B`                  Hover and nested surfaces
  Primary text       `#F3F5F8`                  Headings and body emphasis
  Secondary text     `#A4ADBC`                  Descriptions
  Muted text         `#778195`                  Metadata
  Border             `rgba(255,255,255,0.10)`   Dividers and card edges
  Accent             `#8B9CFF`                  Links and interactive emphasis
  Accent secondary   `#71D5C2`                  Small secondary highlights

These are starting tokens, not rigid requirements. Maintain contrast and
restraint. Avoid large neon gradients, excessive glows, and saturated
colour blocks.

### Typography

-   Use Geist or Inter, with a clear sans-serif fallback.
-   Large but controlled hero typography.
-   Strong editorial hierarchy: display title, section heading, body,
    metadata, caption.
-   Comfortable line length and generous line-height for long case
    studies.
-   Use monospaced typography sparingly for technology labels,
    architecture annotations, and small metadata.

### Layout

-   Centered content container with a sensible maximum width.
-   Generous vertical spacing.
-   Strong alignment and consistent grid.
-   Responsive layouts designed for mobile first, then tablet and
    desktop.
-   Project screenshots should be large enough to inspect.
-   Case-study reading width should remain comfortable; architecture
    diagrams and galleries may use wider containers.

### Components

Build reusable components for: - Site header and mobile navigation. -
Footer. - Hero. - Section heading. - Project feature / project row. -
Technology tag. - Project metadata. - Screenshot gallery / lightbox if
appropriate. - Case-study section. - Table of contents / in-page
navigation for long case studies. - Architecture diagram frame. -
Next/previous project navigation. - Contact panel. - Neutral image
placeholder.

### Motion

-   Use restrained transitions for navigation, hover, and reveal.
-   Respect `prefers-reduced-motion`.
-   Avoid scroll-jacking, cursor effects, heavy parallax, and animations
    that delay reading.
-   Content must remain visible and usable if animation is disabled.

### Images and screenshots

-   Prefer real screenshots supplied by Kevin.
-   Use consistent image aspect ratios and intentional crops.
-   Do not fabricate UI screenshots or use unrelated stock images as if
    they represent the real product.
-   If no screenshot exists, use a neutral branded placeholder or a
    typography-led visual.
-   Add descriptive alt text and captions.
-   Optimize images and use modern formats where supported.
-   Do not publish confidential customer information, personal data, API
    keys, internal URLs, or production records.

------------------------------------------------------------------------

## 6. Technical implementation

### Stack

-   Next.js with App Router.
-   React and TypeScript.
-   Tailwind CSS.
-   Static export for GitHub Pages.
-   MDX or structured TypeScript content for case studies.
-   No Laravel backend, database, authentication, or CMS for this
    version.

### GitHub Pages constraints

The intended user site URL is `https://nanguti1.github.io/`. Confirm the
repository is named `nanguti1.github.io` and that the account username
matches the URL before configuring deployment.

For a GitHub Pages user site: - Configure Next.js static export
(`output: 'export'`). - Use the root path; do not add a project
`basePath` such as `/wanyonyi.io`. - Ensure all internal links, images,
fonts, and assets work from `/`. - Use trailing-slash settings
consistently with the exported file structure. - Confirm the
repository's Pages deployment workflow and publishing source before
changing it. - Preserve existing GitHub Actions and repository
configuration unless a verified change is required.

A typical static export produces an `out/` directory. The deployment
workflow should publish that directory using the supported GitHub Pages
artifact/deployment flow. Do not assume a particular existing workflow;
inspect it first.

### Content architecture

Keep content separate from page layout. Recommended approach:

``` text
src/
  app/
    page.tsx
    projects/
      page.tsx
      [slug]/
        page.tsx
    about/
      page.tsx
    contact/
      page.tsx
  components/
    layout/
    projects/
    case-study/
    ui/
  content/
    projects/
      simplifi-networks.mdx
      2b-gamers-store.mdx
      hamaline-insurance.mdx
      blvd-guide.mdx
      afriq-networks.mdx
      mwalimuplus.mdx
  lib/
    projects.ts
    metadata.ts
  public/
    images/
      projects/
```

This is a suggested structure. Adapt it to the existing repository
rather than forcing a rewrite. If the current project already has a
suitable content structure, preserve it.

Each project should have typed metadata, for example: - `slug` -
`title` - `summary` - `category` - `role` - `featured` -
`technologies` - `coverImage` - `published` - `liveUrl` (optional,
verified only) - `repositoryUrl` (optional, verified and public only)

Do not store unverified facts in metadata. Keep detailed case-study
content in MDX or an equivalent maintainable content format.

### Metadata and SEO

-   Add a unique title and description for each route.
-   Add canonical URLs based on the final domain.
-   Use Open Graph and Twitter metadata.
-   Add a favicon and appropriate social preview image if available.
-   Use semantic HTML and a logical heading hierarchy.
-   Add sitemap and robots files compatible with static export.
-   Avoid claiming project ownership or availability in metadata beyond
    what is accurate.
-   Do not add structured data with fabricated employer, client, or
    project details.

### Accessibility and performance

-   Keyboard-operable navigation and controls.
-   Visible focus states.
-   Correct heading order and landmarks.
-   Accessible colour contrast.
-   Descriptive link text and image alt text.
-   Reduced-motion support.
-   Responsive image sizing and lazy loading below the fold.
-   Avoid unnecessary client components and large animation libraries.
-   No horizontal overflow at common mobile widths.

------------------------------------------------------------------------

## 7. Content verification and confidentiality rules

These rules are mandatory:

1.  Never invent project features, technologies, dates, roles, users,
    integrations, architecture, metrics, or outcomes.
2.  Distinguish between what Kevin personally implemented, what the team
    built, and what the overall product contains.
3.  Do not claim sole ownership for AfriQ Networks or MwalimuPLUS /
    Ajira Connect.
4.  Do not publish source code, internal architecture, credentials,
    customer data, production screenshots containing private
    information, or non-public links.
5.  Treat public URLs and repository links as optional until verified.
6.  If a claim is uncertain, mark it as a question for Kevin rather than
    publishing it.
7.  Do not use placeholder copy such as "Lorem ipsum" or generic
    AI-generated claims in the final site.
8.  Preserve the six-project scope. Ask before adding anything else.

### Evidence ledger

Maintain a simple internal content verification file (not necessarily
published), with each material claim marked as: - `verified` ---
confirmed by source code, documentation, screenshot, or Kevin. -
`needs-confirmation` --- plausible but not yet confirmed. - `excluded`
--- confidential, unsupported, or not approved for publication.

Only `verified` content may appear as factual claims on the public site.

------------------------------------------------------------------------

## 8. Delivery phases

### Phase 0 --- Repository and source audit

-   Inspect the existing repository, framework, branch, build scripts,
    dependencies, deployment workflow, and current live site.
-   Identify existing content and assets.
-   Do not overwrite or delete existing work.
-   Confirm GitHub Pages user-site configuration.
-   Report findings and propose a minimal implementation plan.

**Exit criteria:** Existing setup is understood; risks and required
changes are documented.

### Phase 1 --- Content inventory and verification

-   Create a content outline for all six case studies.
-   Inspect available source code, READMEs, documentation, and
    screenshots.
-   Build the evidence ledger.
-   Ask Kevin focused questions for missing facts.
-   Draft the project narratives before polishing them.
-   Identify screenshots needed for each case study.

**Exit criteria:** No invented claims; content gaps are visible;
approved content is ready to publish.

### Phase 2 --- Design foundation and shared layout

-   Establish design tokens, typography, spacing, responsive containers,
    navigation, footer, and reusable project components.
-   Implement the home page and projects index.
-   Validate the design on mobile, tablet, and desktop.

**Exit criteria:** A coherent visual system and responsive shared layout
are in place.

### Phase 3 --- Case-study implementation

Recommended order: 1. 2B Gamers Store. 2. Hamaline Insurance. 3.
Simplifi Networks. 4. BLVD GUIDE. 5. MwalimuPLUS. 6. AfriQ Networks.

The order is based on the desired portfolio emphasis, not a claim about
project chronology.

-   Build the reusable case-study template.
-   Add verified content and real screenshots.
-   Add architecture diagrams only when the architecture is confirmed.
-   Add previous/next navigation and in-page contents for long pages.

**Exit criteria:** All six case studies are complete, accurate, and
visually consistent.

### Phase 4 --- About, contact, metadata, and polish

-   Write a concise professional about page.
-   Add verified contact details and external links.
-   Add route metadata and social previews.
-   Check SEO, accessibility, performance, and responsive behaviour.

**Exit criteria:** Public-facing content and metadata are complete and
accurate.

### Phase 5 --- Testing and GitHub Pages deployment

-   Run lint, type checks, tests if present, and production build.
-   Verify the static export output.
-   Test all routes and assets locally.
-   Check case-sensitive paths and direct navigation to nested routes on
    GitHub Pages.
-   Inspect deployment workflow and publish without disrupting unrelated
    configuration.
-   Verify the deployed URL and all six case-study routes.
-   Keep the previous working deployment recoverable.

**Exit criteria:** Build succeeds, all pages load directly, assets
resolve, and the live site works on mobile and desktop.

------------------------------------------------------------------------

## 9. Definition of done

The portfolio is ready when:

-   [ ] The home page communicates professional identity clearly.
-   [ ] All six selected projects/experiences are represented.
-   [ ] 2B Gamers Store and Hamaline Insurance receive flagship
    treatment.
-   [ ] Each project has a dedicated, detailed case-study page.
-   [ ] Every published technical claim is verified.
-   [ ] Individual and team contributions are accurately distinguished.
-   [ ] Real screenshots are used where approved and available.
-   [ ] The design is coherent, premium, responsive, and accessible.
-   [ ] Navigation, internal links, and external links work.
-   [ ] Page metadata and social previews are configured.
-   [ ] Static export completes successfully.
-   [ ] GitHub Pages serves the site at `https://nanguti1.github.io/`.
-   [ ] Direct refresh of every nested route works.
-   [ ] No unrelated repository work or deployment configuration has
    been damaged.
-   [ ] No confidential information or fabricated claims are published.

------------------------------------------------------------------------

## 10. Session handoff protocol

At the end of every implementation session, update a root-level
`PORTFOLIO_PROGRESS.md` containing:

-   Current phase and status.
-   Work completed, with file paths.
-   Decisions made and why.
-   Commands run and their results.
-   Tests/build status.
-   Outstanding content questions for Kevin.
-   Known bugs and risks.
-   Exact next task.
-   Any files or configuration that must not be changed.

The progress file must describe the repository's actual current state,
not an aspirational plan. A new session must read this specification and
`PORTFOLIO_PROGRESS.md`, inspect the current repository state, and
continue from the next incomplete task. Never assume that a previous
session's claims are still true without checking the files.

------------------------------------------------------------------------

## 11. Final editorial standard

The portfolio should sound like an experienced engineer explaining real
work to another technically literate person.

Prefer: - "Implemented M-PESA STK Push initiation and callback handling,
with transaction records used to track payment outcomes" --- if
verified. - "Contributed to HR and inventory system development as part
of a four-person team" --- accurate team framing. - "Built the
customer-facing Next.js application and Laravel backend" --- only if the
actual contribution supports it.

Avoid: - "Revolutionized business operations." - "Built an
enterprise-grade ecosystem." - "Delivered 10x performance." - "Solely
architected the entire platform" when the work was collaborative. - Any
metric, feature, or outcome that cannot be substantiated.

**The portfolio's credibility is more important than the number of
features described.**
