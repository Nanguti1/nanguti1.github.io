export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] };

export interface CaseStudySection {
  id: string;
  title: string;
  blocks: ContentBlock[];
}

export interface GlanceItem {
  label: string;
  value: string;
}

export interface CaseStudy {
  intro: ContentBlock[];
  glance: GlanceItem[];
  sections: CaseStudySection[];
}
