import type { CaseStudy } from "@/lib/case-study";

export const caseStudy: CaseStudy = {
  intro: [
    {
      type: "paragraph",
      text: "MwalimuPLUS and Ajira Connect were education and opportunity platforms developed by a large engineering team. Kevin worked as a core developer from October 2018 to April 2022.",
    },
    {
      type: "paragraph",
      text: "The team comprised roughly eleven developers alongside a project manager, systems analyst, QA, and technical director. Development followed structured practices: Jira and Microsoft Teams for collaboration, peer reviews, demonstrations, and live testing.",
    },
  ],
  glance: [
    { label: "Product type", value: "Education / opportunity platforms" },
    { label: "Platform type", value: "Web applications" },
    { label: "Role", value: "Core developer, Oct 2018 – Apr 2022" },
    { label: "Team", value: "~11 developers + PM, systems analyst, QA, technical director" },
    { label: "Stack", value: "PHP, Yii2, JavaScript, Bootstrap, MySQL" },
    { label: "Integrations", value: "M-PESA, Google APIs, Google AI Studio" },
  ],
  sections: [
    {
      id: "platforms",
      title: "The platforms",
      blocks: [
        {
          type: "paragraph",
          text: "MwalimuPLUS and Ajira Connect served education and opportunity workflows. Specific modules and responsibilities are being confirmed before publication.",
        },
      ],
    },
    {
      id: "integrations-and-collaboration",
      title: "Integrations and team practice",
      blocks: [
        {
          type: "paragraph",
          text: "The platforms integrated third-party services including M-PESA, Google APIs, and Google AI Studio. Day-to-day work ran through Jira and Microsoft Teams, with peer code reviews, demonstrations, and live testing before release.",
        },
        {
          type: "paragraph",
          text: "Kevin also mentored interns during this period, supporting the team's onboarding and review practices.",
        },
      ],
    },
  ],
};
