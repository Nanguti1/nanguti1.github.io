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
  /**
   * Optional status line shown on project cards, e.g.
   * "Live at https://example.com — serving N users".
   * TODO: fill in verified values; leave null to hide.
   */
  statusLine?: string | null;
  /** Optional banner image shown in place of the schematic mockup. */
  banner?: string;
}

export const projects: Project[] = [
  {
    slug: "2b-gamers-store",
    banner: "/images/projects/2b-gamers-store-banner.webp",
    title: "2B Gamers Store",
    summary:
      "Production Kenyan gaming retail and service platform covering storefront, customer accounts, M-PESA payments, inventory, procurement, repairs, and point of sale.",
    category: "E-commerce / business platform",
    role: "Full-stack development",
    featured: true,
    technologies: ["Laravel", "PHP", "Inertia", "React", "TypeScript", "Tailwind CSS", "MySQL", "M-PESA"],
    published: true,
    // TODO: statusLine — e.g. "Live at <url> — <metric>". Hidden while null.
    statusLine: null,
  },
  {
    slug: "hamaline-insurance",
    banner: "/images/projects/hamaline-insurance-agency-banner.png",
    title: "Hamaline Insurance Management System",
    summary:
      "End-to-end insurance management application covering clients, underwriting, policies, claims, payments, renewals, commissions, reporting, and role-based access control.",
    category: "Insurance system",
    role: "End-to-end development",
    featured: true,
    technologies: ["Laravel", "PHP", "Inertia", "React", "TypeScript", "MySQL", "Spatie Permissions", "DomPDF"],
    published: true,
    // TODO: statusLine — e.g. "Live at <url> — <metric>". Hidden while null.
    statusLine: null,
  },
  {
    slug: "simplifi-networks",
    banner: "/images/projects/simplifi-networks-banner.png",
    title: "Simplifi Networks",
    summary:
      "Networking and telecommunications distribution platform built from the ground up on a Laravel API with a Next.js storefront and Laravel Nova administration.",
    category: "E-commerce / business platform",
    role: "End-to-end developer (backend, API, admin, storefront)",
    featured: false,
    technologies: ["Laravel", "Laravel Nova", "Next.js", "MySQL", "Tailwind CSS"],
    published: true,
    // TODO: statusLine — e.g. "Live at <url> — <metric>". Hidden while null.
    statusLine: null,
  },
  {
    slug: "blvd-guide",
    banner: "/images/projects/blvd-guide-banner.png",
    title: "BLVD GUIDE",
    summary:
      "Venue discovery and marketplace platform with listings, reviews, subscription plans, venue approval, media management, and a geographic location hierarchy.",
    category: "Marketplace",
    role: "Engineering contributor",
    featured: false,
    technologies: ["Laravel", "React", "TypeScript", "Inertia", "Tailwind CSS", "Leaflet"],
    published: true,
    // TODO: statusLine — e.g. "Live at <url> — <metric>". Hidden while null.
    statusLine: null,
  },
  {
    slug: "mwalimuplus",
    title: "MwalimuPLUS / Ajira Connect",
    summary:
      "Intelligent e-tutoring and digital learning platform for Kenyan primary and junior secondary students, developed as a core team member.",
    category: "Education / opportunity platform",
    role: "Core developer (team of ~11)",
    featured: false,
    technologies: ["PHP", "Yii2", "JavaScript", "Bootstrap", "MySQL", "M-PESA"],
    published: true,
    // TODO: statusLine — e.g. "Live at <url> — <metric>". Hidden while null.
    statusLine: null,
  },
  {
    slug: "afriq-networks",
    title: "AfriQ Networks",
    summary:
      "Contributions to HR and inventory systems (PHP, Laravel, React, MySQL, Node.js) and network configuration as part of a four-person team including the CTO.",
    category: "HR / inventory",
    role: "Team contributor (team of 4)",
    featured: false,
    technologies: ["PHP", "Laravel", "React", "MySQL", "Node.js"],
    published: true,
    // TODO: statusLine — e.g. "Live at <url> — <metric>". Hidden while null.
    statusLine: null,
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
