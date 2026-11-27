export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[]; variant?: "list" | "chips" }
  | { type: "callout"; text: string }
  | { type: "steps"; items: string[] };

export interface CaseStudySection {
  id: string;
  title: string;
  blocks: ContentBlock[];
}

export interface GlanceItem {
  label: string;
  value?: string;
  /** Renders the value as an external link when set. */
  href?: string;
  /** Renders tech-tag pills instead of a text value when set. */
  tags?: string[];
}

export interface StatItem {
  value: string;
  label: string;
}

export interface CaseStudy {
  intro: ContentBlock[];
  glance: GlanceItem[];
  /** Optional headline figures shown under the header. Hidden when empty. */
  stats?: StatItem[];
  sections: CaseStudySection[];
}
