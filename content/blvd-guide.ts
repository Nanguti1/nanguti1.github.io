import type { CaseStudy } from "@/lib/case-study";

export const caseStudy: CaseStudy = {
  intro: [
    {
      type: "paragraph",
      text: "BLVD GUIDE is a venue discovery and marketplace platform. It lets visitors discover venues through listings and reviews, while venues go through an approval process before appearing on the platform.",
    },
    {
      type: "paragraph",
      text: "Beyond discovery, the platform supports venue profiles, subscription plans, media and document management, and a structured geographic hierarchy of country, county, city, and locale.",
    },
  ],
  glance: [
    { label: "Product type", value: "Venue discovery and marketplace platform" },
    { label: "Platform type", value: "Web application" },
    { label: "Role", value: "Engineering contributor" },
    { label: "Stack", value: "Laravel 13.7, PHP 8.3, React 19.2, TypeScript 5.7, Inertia, Tailwind CSS 4" },
  ],
  sections: [
    {
      id: "functional-modules",
      title: "Functional modules",
      blocks: [
        {
          type: "list",
          items: [
            "Venue discovery and listings",
            "Reviews and ratings",
            "Venue profiles and listing lifecycle",
            "Venue onboarding and approval",
            "Subscription plans",
            "Media and document management",
            "Geographic hierarchy — country, county, city, locale",
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
          text: "Laravel 13.7 on PHP 8.3 serves an Inertia frontend built with React 19.2 and TypeScript 5.7, styled with Tailwind CSS 4. The geographic model is normalised into a country → county → city → locale hierarchy so listings, filtering, and localisation share one structure.",
        },
      ],
    },
  ],
};
