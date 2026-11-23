import type { CaseStudy } from "@/lib/case-study";

export const caseStudy: CaseStudy = {
  intro: [
    {
      type: "paragraph",
      text: "MwalimuPLUS is an intelligent e-tutoring and digital learning platform for primary and junior secondary school students in Kenya (Grades 1–8), supporting both the Competency-Based Curriculum and the 8-4-4 system. Kevin worked as a core developer on the platform — and on Ajira Connect — from October 2018 to April 2022.",
    },
    {
      type: "paragraph",
      text: "The team comprised roughly eleven developers plus a project manager, systems analyst, QA, and technical director — a structured product environment with defined roles, reviews, and release testing rather than an ad-hoc build.",
    },
  ],
  glance: [
    { label: "Product type", value: "E-tutoring / digital learning platform" },
    { label: "Platform type", value: "Web and mobile applications" },
    { label: "Role", value: "Core developer, Oct 2018 – Apr 2022" },
    { label: "Team", value: "~11 developers + PM, systems analyst, QA, technical director" },
    { label: "Stack", value: "PHP, Yii2, JavaScript, Bootstrap, MySQL" },
    { label: "Integrations", value: "M-PESA, Google APIs, Google AI Studio" },
  ],
  sections: [
    {
      id: "platform",
      title: "The platform",
      blocks: [
        {
          type: "paragraph",
          text: "MwalimuPLUS delivers KICD-approved learning content — video tutorials, quizzes, practice exercises, and games, with a strong focus on mathematics — alongside scheduled live online classes. Progress tracking gives parents and teachers detailed performance analytics: completed topics, weak areas, and assigned remedial exercises.",
        },
        {
          type: "paragraph",
          text: "The offering extends beyond the app: hardware bundles such as the KPSA-MwalimuPLUS Complete ICT Learning Package (tablet with detachable keyboard, LMS software, and mobile data), and teacher resources including schemes of work, lesson plans, exams, and revision papers. Access is sold through monthly subscriptions with trial options, on web and mobile.",
        },
        {
          type: "paragraph",
          text: "Kevin also contributed to Ajira Connect, a second platform developed by the same team during the same period.",
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
