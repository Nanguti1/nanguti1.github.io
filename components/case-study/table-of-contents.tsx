import type { CaseStudySection } from "@/lib/case-study";

interface TableOfContentsProps {
  sections: CaseStudySection[];
}

export function TableOfContents({ sections }: TableOfContentsProps) {
  if (sections.length < 2) return null;
  return (
    <nav aria-label="On this page" className="mb-12">
      <p className="mb-3 font-mono text-xs uppercase tracking-[0.08em] text-subtle">
        On this page
      </p>
      <ol className="flex flex-col gap-2 border-l border-line pl-4">
        {sections.map((section) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              className="text-sm text-muted transition-colors hover:text-accent"
            >
              {section.title}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
