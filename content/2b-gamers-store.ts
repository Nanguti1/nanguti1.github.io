import type { CaseStudy } from "@/lib/case-study";

export const caseStudy: CaseStudy = {
  intro: [
    {
      type: "paragraph",
      text: "2B Gamers Store is a production gaming retail and service platform built for the Kenyan market. It replaced a WordPress-based solution because the business required custom workflows that a general-purpose CMS could not support cleanly.",
    },
    {
      type: "paragraph",
      text: "The platform covers the full retail operation: a customer-facing storefront, M-PESA payments, inventory management with a stock ledger, procurement and supplier workflows, repair-job tracking, and point-of-sale operations.",
    },
  ],
  glance: [
    { label: "Product type", value: "Gaming retail and service platform" },
    { label: "Platform type", value: "Web application (storefront + admin)" },
    { label: "Role", value: "Full-stack development" },
    { label: "Stack", value: "Laravel 13, PHP 8.4, Inertia, React, Tailwind CSS, MySQL" },
    { label: "Payments", value: "M-PESA (STK Push) via iankumu/mpesa" },
  ],
  sections: [
    {
      id: "context-and-problem",
      title: "Context and problem",
      blocks: [
        {
          type: "paragraph",
          text: "The business needed a platform that handled gaming retail specifics — product variants, repair jobs, stock movements, supplier purchasing — alongside standard e-commerce flows. The previous WordPress-based solution could not accommodate these custom requirements, so the platform was rebuilt from the ground up.",
        },
      ],
    },
    {
      id: "solution-overview",
      title: "Solution overview",
      blocks: [
        {
          type: "paragraph",
          text: "A Laravel backend serves an Inertia + React frontend, giving a single codebase for both the customer storefront and the administrative operations side. MySQL stores catalogue, customer, order, payment, inventory, procurement, and repair data.",
        },
        {
          type: "paragraph",
          text: "M-PESA integration uses the iankumu/mpesa package. Payment records cover STK Push, C2B, and callback data so payment outcomes are persisted rather than inferred.",
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
            "Storefront and commerce — catalogue, customer accounts, cart, checkout, orders",
            "Payments — M-PESA STK Push initiation, callback handling, transaction records",
            "Inventory — stock ledger and movements, product variants, low-stock monitoring, inventory valuation",
            "Procurement — suppliers, purchases, approvals, and goods receiving",
            "Repair operations — repair-job tracking and lifecycle",
            "Point of sale — POS/admin operations tied to stock and orders",
            "Operations — queued email jobs, scheduled tasks (cron), and backups",
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
          text: "Laravel 13 on PHP 8.4 provides the backend; Inertia.js connects it to a React frontend styled with Tailwind CSS. Background work runs through Laravel's queue and scheduler for email notifications, and a backup routine protects operational data.",
        },
      ],
    },
  ],
};
