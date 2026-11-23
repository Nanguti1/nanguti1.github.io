import type { CaseStudy } from "@/lib/case-study";

export const caseStudy: CaseStudy = {
  intro: [
    {
      type: "paragraph",
      text: "Simplifi Networks is a networking and telecommunications distribution platform. It was built from the ground up as a custom system after the business moved away from a PrestaShop-based solution that could not be shaped to the required workflows.",
    },
    {
      type: "paragraph",
      text: "The platform separates concerns across a Laravel API backend, a Laravel Nova administration panel, and a Next.js customer-facing storefront — designed and implemented end to end, covering backend, API, admin, and frontend.",
    },
  ],
  glance: [
    { label: "Product type", value: "Telecommunications distribution platform" },
    { label: "Platform type", value: "Web application — API + admin + storefront" },
    { label: "Role", value: "End-to-end developer" },
    { label: "Stack", value: "Laravel, Laravel Nova, Next.js, MySQL, Tailwind CSS" },
  ],
  sections: [
    {
      id: "context-and-problem",
      title: "Context and problem",
      blocks: [
        {
          type: "paragraph",
          text: "As a networking and telecommunications distributor, the business needed a platform shaped around how networking products are actually sold and fulfilled. The previous PrestaShop-based solution imposed a generic commerce model, and the customisation it needed made a ground-up rebuild the more maintainable path.",
        },
      ],
    },
    {
      id: "architecture",
      title: "Architecture",
      blocks: [
        {
          type: "paragraph",
          text: "The system is split into three layers. A Laravel application exposes the API and owns the business logic and data. Laravel Nova provides the internal administration interface, giving staff resource management without a separately built admin frontend. A Next.js application serves the customer-facing storefront and consumes the Laravel API.",
        },
        {
          type: "paragraph",
          text: "MySQL is the datastore, and the storefront is styled with Tailwind CSS.",
        },
      ],
    },
    {
      id: "my-contribution",
      title: "My contribution",
      blocks: [
        {
          type: "paragraph",
          text: "I designed and implemented the platform end to end: the Laravel backend and API, the Laravel Nova administration panel, and the Next.js storefront — covering server-side logic, API contracts, admin tooling, and the customer-facing frontend.",
        },
      ],
    },
  ],
};
