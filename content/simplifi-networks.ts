import type { CaseStudy } from "@/lib/case-study";

export const caseStudy: CaseStudy = {
  intro: [
    {
      type: "paragraph",
      text: "Simplifi Networks is a networking and telecommunications distribution platform. It was built from the ground up after the business moved away from a PrestaShop-based solution that could not be customised to the required workflows.",
    },
    {
      type: "paragraph",
      text: "The platform pairs a Laravel API backend with a Next.js frontend, and uses Laravel Nova for the administrative interface.",
    },
  ],
  glance: [
    { label: "Product type", value: "Telecommunications distribution platform" },
    { label: "Platform type", value: "Web application (storefront + admin)" },
    { label: "Role", value: "Engineering contributor" },
    { label: "Stack", value: "Laravel, Laravel Nova, Next.js, MySQL, Tailwind CSS" },
  ],
  sections: [
    {
      id: "context-and-problem",
      title: "Context and problem",
      blocks: [
        {
          type: "paragraph",
          text: "As a networking and telecommunications distributor, the business needed a storefront and back-office tooling shaped around how networking products are actually sold and fulfilled. The previous PrestaShop-based platform imposed its own model of commerce, and the required customisation made a ground-up rebuild the more maintainable path.",
        },
      ],
    },
    {
      id: "technical-implementation",
      title: "Technical implementation",
      blocks: [
        {
          type: "paragraph",
          text: "A Laravel backend exposes an API consumed by a Next.js frontend, with MySQL as the datastore. Tailwind CSS styles the storefront. Laravel Nova provides the internal administration interface, giving staff resources and dashboards without a separately built admin frontend.",
        },
      ],
    },
  ],
};
