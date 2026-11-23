import type { CaseStudy } from "@/lib/case-study";

export const caseStudy: CaseStudy = {
  intro: [
    {
      type: "paragraph",
      text: "2B Gamers Store is a production gaming retail and service platform for the Kenyan market, live at 2bgamersstore.co.ke. It replaced a WordPress-based solution because the business needed custom workflows — variant stock, repair jobs, supplier purchasing, and M-PESA payments — that a general-purpose CMS could not support cleanly.",
    },
    {
      type: "paragraph",
      text: "The platform unifies three sales channels in one system: the online storefront, an in-store point of sale, and a repair operation — backed by a single inventory ledger, procurement workflow, and admin dashboard.",
    },
  ],
  glance: [
    { label: "Product type", value: "Gaming retail and service platform" },
    { label: "Platform type", value: "Web application — storefront, admin, POS" },
    { label: "Live site", value: "2bgamersstore.co.ke" },
    { label: "Stack", value: "Laravel 13, PHP 8.3+, Inertia, React 19, TypeScript, Tailwind CSS 4, MySQL" },
    { label: "Payments", value: "M-PESA STK Push + C2B via iankumu/mpesa" },
    { label: "Auth", value: "Laravel Fortify, Spatie permissions, 2FA" },
  ],
  sections: [
    {
      id: "context-and-problem",
      title: "Context and problem",
      blocks: [
        {
          type: "paragraph",
          text: "The business sells gaming hardware — consoles, controllers, headsets, keyboards, mice, monitors, and PCs — and also runs repairs and in-store sales. The previous WordPress-based platform handled the catalogue but not the operational side: stock needed to be tracked as a ledger rather than a counter, purchases needed approval steps, repairs needed parts tracking, and checkout needed M-PESA.",
        },
        {
          type: "paragraph",
          text: "The rebuild put the storefront and the entire back office on one Laravel application, so online orders, POS sales, and repair parts all draw down the same inventory records.",
        },
      ],
    },
    {
      id: "storefront-and-commerce",
      title: "Storefront and commerce",
      blocks: [
        {
          type: "paragraph",
          text: "Customers browse a category-organised catalogue (consoles, controllers, headsets, keyboards, mice, monitors, PCs), view product detail pages with variants, and build a cart through a dedicated CartService. Checkout requires an account and captures a shipping address before order creation.",
        },
        {
          type: "list",
          items: [
            "Product catalogue with categories, brands, hardware models, and variants",
            "Cart with add, update, and remove operations backed by CartService",
            "Checkout flow via CreateOrder and ProcessCheckout actions",
            "Customer accounts, order history, and product reviews",
            "Consultation appointment booking for pre-sale advice",
            "Promotional campaigns and a Google Merchant product feed",
          ],
        },
      ],
    },
    {
      id: "payments",
      title: "Payments — M-PESA lifecycle",
      blocks: [
        {
          type: "paragraph",
          text: "M-PESA is integrated with the iankumu/mpesa package. Online checkout supports two flows: STK Push for storefront orders and C2B for customer-initiated payments such as paybill deposits.",
        },
        {
          type: "paragraph",
          text: "For STK Push, the order is created with payment_status Pending and an MpesaSTK record is stored with the merchant_request_id and checkout_request_id. The customer completes the prompt on their phone, and Safaricom calls back to POST /api/v1/confirm. The callback handler parses the result, then matches the payment to the order — first by the stored order reference, with a fallback match on phone number plus pending M-PESA orders — and marks the order paid with the M-PESA receipt number. Failed results mark the payment failed, and the customer can retry the prompt, which creates a fresh STK record.",
        },
        {
          type: "paragraph",
          text: "The C2B flow registers validation and confirmation URLs with Safaricom. Confirmations create an MpesaC2B record for every transaction — an audit log of all mobile-money traffic — and match the account number (bill reference) back to an order where one exists. Order updates are guarded by payment-status checks so repeat callbacks do not double-apply.",
        },
        {
          type: "paragraph",
          text: "While the customer waits, the storefront polls a payment-status endpoint that reports the current payment state, receipt number, and paid timestamp.",
        },
      ],
    },
    {
      id: "inventory",
      title: "Inventory — the stock ledger",
      blocks: [
        {
          type: "paragraph",
          text: "Stock is not a counter — it is a ledger. Every change writes a stock_movements row recording the product or variant, movement type, quantity, before and after quantities, an optional polymorphic reference to the entity that caused it (purchase, sale, order, repair, adjustment), the user who made the change, and remarks.",
        },
        {
          type: "paragraph",
          text: "A central InventoryService owns the mutations: increaseStock, decreaseStock, adjustStock, and reverseMovement. decreaseStock refuses to take a product below zero, and reverseMovement writes an offsetting entry rather than editing history — so the ledger is append-only and auditable.",
        },
        {
          type: "list",
          items: [
            "Movement types cover purchases, sales, online sales, returns, adjustments, damage, repair usage, opening balances, and transfers",
            "Cached stock levels are re-synchronised from the ledger via a StockMovementCreated listener",
            "Manual corrections go through stock adjustments with a draft → approved workflow",
            "Low-stock thresholds per product trigger admin alerts through an event-driven CheckLowStock listener",
            "Inventory valuation and movement reports are available in the admin dashboard",
          ],
        },
      ],
    },
    {
      id: "procurement",
      title: "Procurement and receiving",
      blocks: [
        {
          type: "paragraph",
          text: "Purchases move through a draft → approved → received lifecycle. Approval is the point where stock enters the ledger: each linked item increases stock through InventoryService inside a database transaction, and a PurchaseApproved event fans out to notifications and low-stock checks.",
        },
        {
          type: "paragraph",
          text: "Receiving handles goods-in, including items that were not in the catalogue — the system can create a product record on the fly for non-catalog purchases. Purchases support both registered suppliers and individual sellers, with supplier details optional.",
        },
      ],
    },
    {
      id: "repairs",
      title: "Repair operations",
      blocks: [
        {
          type: "paragraph",
          text: "Repair jobs move through pending, in-progress, awaiting-parts, completed, and cancelled states. Jobs capture customer details (including walk-ins), device information, diagnosis, technician assignment, estimated and actual costs, and the parts consumed — which are tracked as repair_parts linked back to products so completing a repair decrements parts stock through the same ledger.",
        },
      ],
    },
    {
      id: "point-of-sale",
      title: "Point of sale",
      blocks: [
        {
          type: "paragraph",
          text: "The POS serves in-store sales alongside the online storefront. Cashiers sell products and services — sale items are polymorphic so a line can be either — with support for walk-in customers, discounts, and multiple payment methods. Completing a sale decreases stock through the ledger, and receipts are generated as PDFs with dompdf.",
        },
      ],
    },
    {
      id: "operations",
      title: "Operations — events, queues, and notifications",
      blocks: [
        {
          type: "paragraph",
          text: "Cross-cutting behaviour is event-driven rather than buried in controllers. Model observers dispatch domain events — PurchaseApproved, SaleCompleted, RepairCompleted, StockAdjusted, StockMovementCreated — and queued listeners react: low-stock checks notify admins, cached stock re-syncs, and purchase notifications are sent. Order confirmation email is queued at checkout.",
        },
        {
          type: "paragraph",
          text: "Critical mutations — checkout, purchase approval and receiving, stock adjustments, and POS sales — are wrapped in database transactions so an order, its payment record, and its stock movements commit or fail together.",
        },
      ],
    },
    {
      id: "testing-and-quality",
      title: "Testing and engineering quality",
      blocks: [
        {
          type: "paragraph",
          text: "The test suite runs 36 feature and unit test files against an in-memory SQLite database, with CI executing PHPUnit across PHP 8.3–8.5. Coverage concentrates on the workflows where correctness matters most: the M-PESA callback handler, the InventoryService (negative stock, reversals, recalculation), purchase approval, POS sale completion, and repair completion.",
        },
        {
          type: "paragraph",
          text: "Access control uses Fortify for authentication — including two-factor — and Spatie permissions with an admin middleware guarding the back office and a dedicated access-control UI for roles and permissions. Custom middleware adds canonical-URL enforcement, security headers, and Inertia request sharing.",
        },
      ],
    },
  ],
};
