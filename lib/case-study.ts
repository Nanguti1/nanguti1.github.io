export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[]; variant?: "list" | "chips" }
  | { type: "callout"; text: string }
  | { type: "steps"; items: string[] }
  | { type: "diagram"; id: string };

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

/* ---------- Diagrams ---------- */

export interface FlowNode {
  title: string;
  items?: string[];
  note?: string;
}

export interface SequenceMessage {
  /** Lane-to-lane message. */
  from?: string;
  to?: string;
  label?: string;
  /** Self-contained note pinned to a lane (no arrow). */
  lane?: string;
  note?: string;
}

export interface StateGroup {
  label: string;
  states: string[];
  /** state name -> small annotation rendered under that chip */
  notes?: Record<string, string>;
  /** states rendered without connectors (e.g. cancelled) */
  detached?: string[];
}

export type DiagramDef =
  | {
      type: "flow";
      caption?: string;
      nodes: FlowNode[];
    }
  | {
      type: "sequence";
      caption?: string;
      lanes: string[];
      messages: SequenceMessage[];
    }
  | {
      type: "stateflow";
      caption?: string;
      groups: StateGroup[];
    }
  | {
      type: "entrycard";
      caption?: string;
      fields: string[];
      methods: string[];
      note?: string;
    }
  | {
      type: "events";
      caption?: string;
      events: string[];
      reactions: string[];
      /** event -> reactions it triggers, per the copy */
      links: { event: string; reactions: string[] }[];
    };

export interface CaseStudy {
  intro: ContentBlock[];
  glance: GlanceItem[];
  /** Optional headline figures shown under the header. Hidden when empty. */
  stats?: StatItem[];
  /** Optional diagrams referenced by `{ type: "diagram", id }` blocks. */
  diagrams?: Record<string, DiagramDef>;
  sections: CaseStudySection[];
}
