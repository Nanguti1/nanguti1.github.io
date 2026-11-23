import type { CaseStudy } from "@/lib/case-study";

export const caseStudy: CaseStudy = {
  intro: [
    {
      type: "paragraph",
      text: "Hamaline Insurance Management System (HIMS) is an end-to-end insurance management application covering the full policy lifecycle — clients, underwriting, quotations, policies, claims, payments, renewals, commissions, and reporting — for multiple insurance lines including medical, motor, and WIBA.",
    },
    {
      type: "paragraph",
      text: "The system is built as a modular monolith: each business area is a self-contained module with its own controllers, form requests, services, models, and React pages, all inside a single Laravel deployable.",
    },
  ],
  glance: [
    { label: "Product type", value: "Insurance management system" },
    { label: "Platform type", value: "Web application" },
    { label: "Role", value: "End-to-end development" },
    { label: "Stack", value: "Laravel 13, PHP 8.3+, Inertia, React 19, TypeScript, MySQL" },
    { label: "Architecture", value: "Modular monolith" },
    { label: "Auth", value: "Laravel Fortify, Spatie permissions, 2FA" },
  ],
  sections: [
    {
      id: "context-and-problem",
      title: "Context and problem",
      blocks: [
        {
          type: "paragraph",
          text: "Insurance operations span several distinct workflows — client onboarding, underwriting decisions, policy administration, claims handling, premium collection, renewals, and broker commissions — each with different actors and permission requirements. HIMS was built to carry all of these in one system rather than stitching together spreadsheets and disconnected tools.",
        },
        {
          type: "paragraph",
          text: "The system serves multiple insurance lines (medical, motor, and WIBA) whose products differ enough to need dedicated data models, while sharing the same client, policy, claims, and payment backbone.",
        },
      ],
    },
    {
      id: "functional-modules",
      title: "Functional modules",
      blocks: [
        {
          type: "list",
          items: [
            "Client administration — individual and corporate clients, KRA PIN / ID / registration details, document uploads (national ID, KRA PIN), medical category mapping",
            "Underwriting — underwriter profiles linked to user accounts and insurer relationships",
            "Quotations — generation, suggestions, and PDF download",
            "Policies — standard and progressive creation, product-specific detail tables for motor, medical, and WIBA, member management for group covers, status lifecycle from pending through active, lapsed, cancelled, expired, and renewed",
            "Risk notes — dedicated underwriting documents for medical, motor, and WIBA lines with a draft → submitted → approved/rejected workflow",
            "Claims — submission, documents, and assignment to claims officers",
            "Payments — premium records with method, status, reference, and proof-of-payment upload; restricted to finance officers",
            "Renewals — renewal tracking plus a scheduled command that detects 30/60/90-day expiries and sends SMS and email reminders",
            "Commissions — percentage-based commission records per underwriter with payment tracking",
            "Reporting — saved report runs (policies by type, active vs cancelled, claims summary, premium collected, corporate coverage, underwriter performance) and role-specific dashboards",
            "Administration — user management and a roles/permissions UI",
          ],
        },
      ],
    },
    {
      id: "modular-monolith",
      title: "Modular monolith architecture",
      blocks: [
        {
          type: "paragraph",
          text: "Rather than separate services, HIMS organises modules by domain inside the Laravel application: each module has its controllers under app/Http/Controllers/{Module}, form requests under app/Http/Requests/{Module}, a service class under app/Services/{Module}, models, and matching React pages and components. Cross-module links — a claim against a policy, a commission against an underwriter — stay as ordinary Eloquent relationships, which keeps workflows transactional and simple to reason about.",
        },
        {
          type: "paragraph",
          text: "Business logic lives in service classes rather than controllers. The largest is RiskNoteService (~1,000 lines), which owns the underwriting workflow for all three risk-note lines, and ReportsService (~780 lines), which computes the report types and dashboard metrics.",
        },
      ],
    },
    {
      id: "access-control",
      title: "Access control and auditability",
      blocks: [
        {
          type: "paragraph",
          text: "Authentication runs through Laravel Fortify — registration, email verification, password reset, and two-factor authentication. Authorisation uses Spatie permissions with five roles — admin, underwriter, claims officer, finance officer, and client — and granular permissions per module and action.",
        },
        {
          type: "paragraph",
          text: "Permissions are enforced at two levels. Routes carry permission middleware, and a ResourceAccessService scopes queries at the record level: claims officers see only claims assigned to them, clients see only their own policies and payments, and finance officers are the only role that reaches payments and commissions. A custom middleware also deactivates suspended accounts.",
        },
        {
          type: "paragraph",
          text: "Core entities carry an audit trail — created_by, updated_by, approved_by, plus assigned_to and received_by where relevant — so every policy, claim, payment, and commission records who touched it.",
        },
      ],
    },
    {
      id: "underwriting-and-documents",
      title: "Underwriting decisions and documents",
      blocks: [
        {
          type: "paragraph",
          text: "Risk notes are the underwriting artefact for each insurance line. Medical, motor, and WIBA each have dedicated controllers and detail structures, but share one workflow: draft → submitted → approved or rejected/cancelled. Approving a risk note creates the policy inside a database transaction, so the decision and the policy it produces commit together.",
        },
        {
          type: "paragraph",
          text: "Documents are generated with DomPDF from dedicated HTML builders — including an 850-line motor risk-note template that renders insurer branding, vehicle details, limits of liability, conditions, exclusions, and financial calculations such as PHCF, training levy, and stamp duty. Quotations also download as PDFs.",
        },
      ],
    },
    {
      id: "frontend-and-validation",
      title: "Frontend and validation",
      blocks: [
        {
          type: "paragraph",
          text: "The frontend is React 19 with TypeScript in strict mode, served through Inertia so there is no separate API layer. Forms use React Hook Form with Zod schemas — for example the progressive policy form validates 100+ fields including vehicle details and member arrays — and the same rules are mirrored in Laravel form requests, so validation exists on both sides of the boundary.",
        },
        {
          type: "paragraph",
          text: "UI components are built on Radix primitives styled with Tailwind CSS 4, giving accessible dialogs, selects, and form controls without a heavy component framework.",
        },
      ],
    },
    {
      id: "operations-and-testing",
      title: "Operations and testing",
      blocks: [
        {
          type: "paragraph",
          text: "The queue runs on the database driver for mail and notifications. A scheduled artisan command sends renewal reminders at the 30, 60, and 90-day marks before policy expiry via SMS and email. Critical service operations — risk-note creation and decisions, underwriter management, user management — are wrapped in database transactions.",
        },
        {
          type: "paragraph",
          text: "The test suite covers authentication flows, role-based route access, policy search, payment summaries, and PDF HTML formatting for quotations and risk notes, with CI running PHPUnit across PHP 8.3–8.5 plus Pint, ESLint, and Prettier lint jobs.",
        },
      ],
    },
  ],
};
