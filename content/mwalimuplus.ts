import type { CaseStudy } from "@/lib/case-study";

export const caseStudy: CaseStudy = {
  intro: [
    {
      type: "paragraph",
      text: "MwalimuPLUS and Ajira Connect were platforms developed by a large engineering organisation. Kevin worked as a core developer on both from October 2018 to April 2022.",
    },
    {
      type: "paragraph",
      text: "The team comprised roughly eleven developers plus a project manager, systems analyst, QA, and technical director — a structured product environment with defined roles, reviews, and release testing rather than an ad-hoc build.",
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
          text: "MwalimuPLUS and Ajira Connect served education and opportunity workflows for their users. Kevin contributed as a core developer across both platforms within the larger team.",
        },
      ],
    },
    {
      id: "integrations",
      title: "Third-party integrations",
      blocks: [
        {
          type: "paragraph",
          text: "The platforms integrated M-PESA for mobile payments, Google APIs, and Google AI Studio. Integration work ran alongside feature development inside the team's standard workflow.",
        },
      ],
    },
    {
      id: "team-practice",
      title: "Team practice and growth",
      blocks: [
        {
          type: "paragraph",
          text: "Development followed a structured process: Jira for tracking, Microsoft Teams for communication, peer code reviews, demonstrations, and live testing before release. Working inside this environment — across roughly four years — built experience in long-running product development, code review discipline, and cross-functional collaboration.",
        },
        {
          type: "paragraph",
          text: "Kevin also mentored interns during this period, supporting onboarding, reviews, and day-to-day technical questions.",
        },
      ],
    },
  ],
};
