import Link from "next/link";
import { TechTags } from "@/components/tech-tags";
import { getProject } from "@/lib/projects";

const entries = [
  {
    slug: "mwalimuplus",
    period: "2018 — 2022",
    note: "Core developer within an ~11-person engineering team, including mentoring interns.",
  },
  {
    slug: "afriq-networks",
    period: "Earlier engagement",
    note: "Team contributor within a four-person team including the CTO.",
  },
];

export function ExperienceTimeline() {
  return (
    <ol className="relative ml-4 border-l border-line-strong pl-8 sm:ml-6 sm:pl-12">
      {entries.map((entry) => {
        const project = getProject(entry.slug);
        if (!project) return null;
        return (
          <li key={entry.slug} className="relative pb-12 last:pb-0">
            <span
              className="absolute -left-[41px] top-1.5 flex h-3.5 w-3.5 items-center justify-center sm:-left-[61px]"
              aria-hidden="true"
            >
              <span className="absolute h-3.5 w-3.5 rounded-full border border-accent-2/50 bg-background" />
              <span className="h-1.5 w-1.5 rounded-full bg-accent-2" />
            </span>
            <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
              <span className="font-mono text-xs uppercase tracking-[0.08em] text-accent-2">
                {entry.period}
              </span>
              <h3 className="text-xl font-semibold tracking-tight text-foreground">
                <Link
                  href={`/projects/${project.slug}`}
                  className="transition-colors hover:text-accent"
                >
                  {project.title}
                </Link>
              </h3>
            </div>
            <p className="mt-2 max-w-2xl text-[15px] leading-6 text-muted">
              {project.summary}
            </p>
            <p className="mt-2 text-sm text-subtle">{entry.note}</p>
            <div className="mt-4">
              <TechTags technologies={project.technologies} />
            </div>
            <Link
              href={`/projects/${project.slug}`}
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-accent-bright"
            >
              Read case study
              <span aria-hidden="true">→</span>
            </Link>
          </li>
        );
      })}
    </ol>
  );
}
