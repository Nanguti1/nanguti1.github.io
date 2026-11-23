import type { CaseStudy } from "@/lib/case-study";

export const caseStudy: CaseStudy = {
  intro: [
    {
      type: "paragraph",
      text: "Hamaline Insurance Management System is an end-to-end insurance management application covering the full policy lifecycle — from client administration and underwriting through claims, payments, renewals, and commissions.",
    },
    {
      type: "paragraph",
      text: "The system is organised as a modular monolith: business areas are separated into modules within a single Laravel deployable, keeping boundaries clear without the operational overhead of distributed services.",
    },
  ],
  glance: [
    { label: "Product type", value: "Insurance management system" },
    { label: "Platform type", value: "Web application" },
    { label: "Role", value: "End-to-end development" },
    { label: "Stack", value: "Laravel 13, PHP 8.3+, Inertia, React 19, TypeScript, MySQL" },
    { label: "Architecture", value: "Modular monolith" },
  ],
  sections: [
    {
      id: "functional-modules",
      title: "Functional modules",
      blocks: [
        {
          type: "list",
          items: [
            "Client administration",
            "Underwriting",
            "Policy lifecycle and administration",
            "Claims processing",
            "Payments",
            "Renewals",
            "Commissions",
            "Reporting and PDF/document generation",
            "Access control and administration",
          ],
        },
      ],
    },
    {
      id: "technical-implementation",
      title: "Technical implementation",
      blocks: [
        {
          type: "paragraph",
          text: "Laravel 13 on PHP 8.3+ serves an Inertia frontend built with React 19 and TypeScript. MySQL is the datastore. Laravel Fortify handles authentication, and Spatie permissions drives role-based access control.",
        },
        {
          type: "paragraph",
          text: "Forms are validated on both sides of the boundary: Laravel rules on the backend, and React Hook Form with Zod schemas on the frontend. DomPDF generates PDF documents for reporting. PHPUnit covers the backend, including critical business rules.",
        },
        {
          type: "paragraph",
          text: "The UI uses Radix UI primitives for accessible components, styled consistently across the application.",
        },
      ],
    },
    {
      id: "architecture-and-decisions",
      title: "Architecture and engineering decisions",
      blocks: [
        {
          type: "paragraph",
          text: "A modular monolith was chosen so each business area — policies, claims, commissions — has clear boundaries and can be reasoned about independently, while remaining a single deployable system. This keeps cross-module workflows (e.g. a claim against a policy) simple and transactional.",
        },
      ],
    },
  ],
};
