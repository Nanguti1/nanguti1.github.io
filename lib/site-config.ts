/**
 * Single source of truth for contact details, availability copy,
 * hero stats, and per-project status lines.
 *
 * Fields left as null/empty render nothing — fill them in to publish.
 */
export const siteConfig = {
  contact: {
    /** TODO: add a public contact email, e.g. "hello@example.com" */
    email: null as string | null,
    /** TODO: add LinkedIn profile URL */
    linkedin: null as string | null,
    github: "https://github.com/Nanguti1",
    /** TODO: edit the month/year, e.g. "Open to new projects from March 2026" */
    availability: "Open to new projects",
  },
  heroStats: [
    // TODO: fill in verified values; null entries are hidden.
    { value: null as string | null, label: "years building production systems" },
    { value: null as string | null, label: "shipped business systems" },
    { value: null as string | null, label: "third-party integrations" },
  ],
  about: {
    /** TODO: add a portrait image path, e.g. "/images/kevin.jpg". Renders a "KW" monogram tile while null. */
    portrait: null as string | null,
    /** TODO: fill in verified values; rows without a value are hidden. */
    quickFacts: [
      { label: "Years of experience", value: null as string | null },
      { label: "Systems shipped", value: null as string | null },
      { label: "Integrations", value: null as string | null },
    ],
  },
};
