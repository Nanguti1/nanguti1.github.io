import type { CaseStudy } from "@/lib/case-study";

export const caseStudy: CaseStudy = {
  intro: [
    {
      type: "paragraph",
      text: "AfriQ Networks was a team engineering effort of four people, including the CTO. The team built and maintained an HR system and an inventory system, and also handled network configuration.",
    },
    {
      type: "paragraph",
      text: "This was collaborative work — the case study describes Kevin's specific contributions within the team rather than sole ownership of the systems.",
    },
  ],
  glance: [
    { label: "Product type", value: "HR and inventory systems" },
    { label: "Platform type", value: "Internal business systems" },
    { label: "Role", value: "Team contributor (team of 4, incl. CTO)" },
  ],
  sections: [
    {
      id: "contribution",
      title: "Contribution",
      blocks: [
        {
          type: "paragraph",
          text: "Work on this project spanned HR system development, inventory system development, and network configuration, carried out as part of a four-person team. Specific modules, dates, and technologies are being confirmed before publication.",
        },
      ],
    },
  ],
};
