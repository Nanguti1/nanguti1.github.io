import Link from "next/link";
import { projects } from "@/lib/projects";

interface PrevNextProps {
  slug: string;
}

export function PrevNext({ slug }: PrevNextProps) {
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) return null;
  const prev = projects[index - 1];
  const next = projects[index + 1];

  return (
    <nav
      aria-label="More case studies"
      className="mt-20 flex flex-col gap-4 border-t border-line pt-10 sm:flex-row sm:justify-between"
    >
      {prev ? (
        <Link
          href={`/projects/${prev.slug}`}
          className="group flex flex-col gap-1"
        >
          <span className="font-mono text-xs uppercase tracking-[0.08em] text-subtle">
            ← Previous
          </span>
          <span className="text-base font-medium text-foreground transition-colors group-hover:text-accent">
            {prev.title}
          </span>
        </Link>
      ) : (
        <span />
      )}
      {next ? (
        <Link
          href={`/projects/${next.slug}`}
          className="group flex flex-col items-start gap-1 text-right sm:items-end"
        >
          <span className="font-mono text-xs uppercase tracking-[0.08em] text-subtle">
            Next →
          </span>
          <span className="text-base font-medium text-foreground transition-colors group-hover:text-accent">
            {next.title}
          </span>
        </Link>
      ) : null}
    </nav>
  );
}
