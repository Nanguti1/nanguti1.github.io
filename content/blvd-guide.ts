import type { CaseStudy } from "@/lib/case-study";

export const caseStudy: CaseStudy = {
  intro: [
    {
      type: "paragraph",
      text: "BLVD GUIDE is a venue discovery and marketplace platform. Venue owners list and manage their venues through a subscription model, while visitors discover venues through search, filters, categories, locations, and an interactive map.",
    },
    {
      type: "paragraph",
      text: "The platform pairs a public discovery experience with a dashboard for venue owners and administrators, covering the full listing lifecycle from draft through approval to publication.",
    },
  ],
  glance: [
    { label: "Product type", value: "Venue discovery and marketplace platform" },
    { label: "Platform type", value: "Web application — public site + owner/admin dashboard" },
    { label: "Stack", value: "Laravel 13.7, PHP 8.3, React 19.2, TypeScript 5.7, Inertia, Tailwind CSS 4" },
    { label: "Maps", value: "Leaflet + OpenStreetMap/Nominatim" },
    { label: "Auth", value: "Laravel Fortify, 2FA, passkeys (WebAuthn)" },
  ],
  sections: [
    {
      id: "context-and-problem",
      title: "Context and problem",
      blocks: [
        {
          type: "paragraph",
          text: "Venue discovery needs more than a list of names — visitors filter by location, price, capacity, and amenities, and venue owners need a managed presence rather than a static page. BLVD GUIDE was built as a two-sided platform: a public directory backed by owner dashboards, subscription packages, and a moderation workflow.",
        },
      ],
    },
    {
      id: "discovery",
      title: "Discovery and search",
      blocks: [
        {
          type: "paragraph",
          text: "Public venue browsing supports full-text search over titles and descriptions (MySQL FULLTEXT index), plus filters for category, price range, capacity, features/amenities, minimum rating, featured status, and the geographic hierarchy. A VenueSearchService centralises the query logic.",
        },
        {
          type: "paragraph",
          text: "Location filtering works two ways: structured filters down the country → county → city → locale hierarchy, and an interactive Leaflet map with marker clustering, bounds-based 'search this area', and a 'near me' radius search using the browser geolocation API and a Haversine distance calculation. Address lookup uses OpenStreetMap Nominatim with rate limiting.",
        },
      ],
    },
    {
      id: "listings-and-approval",
      title: "Listings and approval workflow",
      blocks: [
        {
          type: "paragraph",
          text: "Venue owners manage listings from a dashboard — title, description, pricing, address, coordinates, contact details, capacity, SEO fields, and operational status (available, fully booked, closed, under renovation). Media is handled through Spatie Media Library with dedicated cover, gallery, and document collections.",
        },
        {
          type: "paragraph",
          text: "Listings move through an explicit approval lifecycle: draft → pending → published or rejected. Only published venues are visible publicly. Approval is gated by a venues.approve permission enforced through policies and route middleware, with a dedicated admin approval queue.",
        },
      ],
    },
    {
      id: "subscriptions",
      title: "Subscription plans",
      blocks: [
        {
          type: "paragraph",
          text: "Venue creation is gated by subscription: packages define price, duration, maximum listings, images per listing, featured-listing allowance, badge styling, and support features. A user's remaining listing allowance is computed from their active subscription.",
        },
        {
          type: "paragraph",
          text: "Subscriptions carry payment status (pending, completed, failed, refunded) and lifecycle status (active, expired, cancelled, suspended), with transaction references tracked for reconciliation. Activation is currently an administrative step — there is no payment-gateway integration yet — and a daily scheduled command expires lapsed subscriptions automatically.",
        },
      ],
    },
    {
      id: "reviews-and-moderation",
      title: "Reviews and moderation",
      blocks: [
        {
          type: "paragraph",
          text: "Users can review venues with a 1–5 rating and comment. Reviews enter a pending state and only display publicly once approved through an admin moderation queue; venue pages show the average rating computed from approved reviews. Users can also favourite venues for a personalised shortlist.",
        },
      ],
    },
    {
      id: "geographic-hierarchy",
      title: "Geographic data model",
      blocks: [
        {
          type: "paragraph",
          text: "Locations are normalised into four levels — country → county → city → locale — each with cascade deletes and unique slugs per parent. Venues reference all four levels, and the dashboard can create new locations on the fly, so coverage expands organically rather than being limited to seeded data. The seeder ships with Kenyan geography.",
        },
      ],
    },
    {
      id: "access-control-and-audit",
      title: "Access control and auditability",
      blocks: [
        {
          type: "paragraph",
          text: "Authentication combines Laravel Fortify (two-factor, email verification) with passkey/WebAuthn support. Authorisation uses Spatie permissions with roles for super admin and venue agents, enforced through policies — for example, venue updates check ownership while approval requires the venues.approve permission. Venue and subscription changes are recorded through Spatie Activitylog, and a listener logs successful logins with IP address.",
        },
      ],
    },
    {
      id: "frontend",
      title: "Frontend",
      blocks: [
        {
          type: "paragraph",
          text: "The frontend is React 19.2 with TypeScript 5.7 in strict mode, served through Inertia with Laravel Wayfinder generating typed route definitions. UI primitives come from Radix, icons from Lucide, and styling from Tailwind CSS 4 with Vite 8 and the React Compiler. The build enforces type checking, ESLint, and Prettier.",
        },
      ],
    },
  ],
};
