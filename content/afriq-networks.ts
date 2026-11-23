import type { CaseStudy } from "@/lib/case-study";

export const caseStudy: CaseStudy = {
  intro: [
    {
      type: "paragraph",
      text: "AfriQ Networks was a team engineering engagement of four people, including the CTO. The team built an HR system and an inventory system, and also handled network configuration for the organisation.",
    },
    {
      type: "paragraph",
      text: "This was collaborative work within a small team — this case study describes Kevin's contributions to the HR and inventory systems and the network configuration work, not sole ownership of the systems.",
    },
  ],
  glance: [
    { label: "Product type", value: "HR and inventory systems" },
    { label: "Platform type", value: "Internal business systems" },
    { label: "Role", value: "Team contributor (team of 4, incl. CTO)" },
  ],
  sections: [
    {
      id: "team-context",
      title: "Team context",
      blocks: [
        {
          type: "paragraph",
          text: "The engagement was delivered by a four-person team including the CTO, so work was divided across members rather than carried by one developer. Delivery covered application development for the HR and inventory systems alongside infrastructure-side network configuration.",
        },
      ],
    },
    {
      id: "contribution",
      title: "Contribution",
      blocks: [
        {
          type: "list",
          items: [
            "HR system development — modules and features within the team's system",
            "Inventory system development — modules and features within the team's system",
            "Network configuration tasks supporting the organisation's infrastructure",
          ],
        },
      ],
    },
  ],
};
