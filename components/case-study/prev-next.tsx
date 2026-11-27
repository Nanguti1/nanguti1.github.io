import Link from "next/link";
import { projects } from "@/lib/projects";
import { ProjectMockup } from "@/components/project-mockup";

interface PrevNextProps {
  slug: string;
}

function Card({ project, direction }: { project: (typeof projects)[number]; direction: "prev" | "next" }) {
  const isPrev = direction === "prev";
  return (
    <Link
      href={`/projects/${project.slug}`}
      className={`group flex items-center gap-6 rounded-2xl border border-line bg-surface p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/60 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent ${
        isPrev ? "" : "sm:flex-row-reverse sm:text-right"
      }`}
    >
      <div className="w-28 shrink-0 sm:w-36">
        <ProjectMockup
          title={project.title}
          src={project.banner}
          imageAlt={project.banner ? `${project.title} banner` : undefined}
          className="transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />
      </div>
      <div className="min-w-0 flex-1">
        <p className="font-mono text-xs uppercase tracking-[0.08em] text-subtle">
          {isPrev ? "← Previous project" : "Next project →"}
        </p>
        <p className="mt-2 truncate text-base font-medium text-foreground transition-colors group-hover:text-accent">
          {project.title}
        </p>
        <p className="mt-1 text-sm text-muted">{project.category}</p>
      </div>
      <span
        aria-hidden="true"
        className={`hidden shrink-0 text-xl text-subtle transition-all duration-300 group-hover:translate-x-1 group-hover:text-accent sm:block ${
          isPrev ? "" : "sm:-scale-x-100"
        }`}
      >
        →
      </span>
    </Link>
  );
}

export function PrevNext({ slug }: PrevNextProps) {
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) return null;
  const prev = projects[index - 1];
  const next = projects[index + 1];
  if (!prev && !next) return null;

  return (
    <nav
      aria-label="More case studies"
      className={`mt-8 grid grid-cols-1 gap-4 ${prev && next ? "sm:grid-cols-2" : ""}`}
    >
      {prev ? <Card project={prev} direction="prev" /> : null}
      {next ? <Card project={next} direction="next" /> : null}
    </nav>
  );
}
