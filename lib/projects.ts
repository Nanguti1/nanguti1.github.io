export type ProjectCategory =
  | "E-commerce / business platform"
  | "Insurance system"
  | "Marketplace"
  | "HR / inventory"
  | "Education / opportunity platform";

export interface Project {
  slug: string;
  title: string;
  summary: string;
  category: ProjectCategory;
  role: string;
  featured: boolean;
  technologies: string[];
  published: boolean;
}

export const projects: Project[] = [
  {
    slug: "2b-gamers-store",
    title: "2B Gamers Store",
    summary:
      "Production Kenyan gaming retail and service platform covering storefront, customer accounts, M-PESA payments, inventory, procurement, repairs, and point of sale.",
    category: "E-commerce / business platform",
    role: "Full-stack development",
    featured: true,
    technologies: ["Laravel", "PHP", "Inertia", "React", "Tailwind CSS", "MySQL", "M-PESA"],
    published: true,
  },
  {
    slug: "hamaline-insurance",
    title: "Hamaline Insurance Management System",
    summary:
      "End-to-end insurance management application covering clients, underwriting, policies, claims, payments, renewals, commissions, reporting, and role-based access control.",
    category: "Insurance system",
    role: "End-to-end development",
    featured: true,
    technologies: ["Laravel", "PHP", "Inertia", "React", "TypeScript", "MySQL", "Spatie Permissions"],
    published: true,
  },
  {
    slug: "simplifi-networks",
    title: "Simplifi Networks",
    summary:
      "Networking and telecommunications distribution platform built from the ground up on a Laravel API with a Next.js storefront and Laravel Nova administration.",
    category: "E-commerce / business platform",
    role: "Engineering contributor",
    featured: false,
    technologies: ["Laravel", "Laravel Nova", "Next.js", "MySQL", "Tailwind CSS"],
    published: true,
  },
  {
    slug: "blvd-guide",
    title: "BLVD GUIDE",
    summary:
      "Venue discovery and marketplace platform with listings, reviews, subscription plans, venue approval, media management, and a geographic location hierarchy.",
    category: "Marketplace",
    role: "Engineering contributor",
    featured: false,
    technologies: ["Laravel", "React", "TypeScript", "Inertia", "Tailwind CSS"],
    published: true,
  },
  {
    slug: "mwalimuplus",
    title: "MwalimuPLUS / Ajira Connect",
    summary:
      "Core development work on education and opportunity platforms within a large engineering team, including M-PESA, Google APIs, and mentoring responsibilities.",
    category: "Education / opportunity platform",
    role: "Core developer (team of ~11)",
    featured: false,
    technologies: ["PHP", "Yii2", "JavaScript", "Bootstrap", "MySQL"],
    published: true,
  },
  {
    slug: "afriq-networks",
    title: "AfriQ Networks",
    summary:
      "Contributions to HR and inventory systems and network configuration as part of a four-person team including the CTO.",
    category: "HR / inventory",
    role: "Team contributor (team of 4)",
    featured: false,
    technologies: [],
    published: true,
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
