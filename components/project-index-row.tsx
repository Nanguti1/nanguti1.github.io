import Link from "next/link";
import type { Project } from "@/lib/projects";
import { TechTags } from "@/components/tech-tags";
import { ProjectCover } from "@/components/project-cover";

interface ProjectIndexRowProps {
  project: Project;
  index: string;
  coverLabel: string;
}

/** Numbered editorial row for supporting projects. */
export function ProjectIndexRow({
  project,
  index,
  coverLabel,
}: ProjectIndexRowProps) {
  return (
    <article className="group grid gap-6 border-t border-line py-8 first:border-t-0 sm:grid-cols-[64px_1fr_auto] sm:items-center sm:gap-10">
      <span className="font-mono text-sm text-accent">{index}</span>
      <div>
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <h3 className="text-xl font-semibold tracking-tight text-foreground transition-colors group-hover:text-accent sm:text-2xl">
            <Link href={`/projects/${project.slug}`}>{project.title}</Link>
          </h3>
          <span className="font-mono text-xs uppercase tracking-wider text-subtle">
            {project.category}
          </span>
        </div>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">
          {project.summary}
        </p>
        <div className="mt-4">
          <TechTags technologies={project.technologies} />
        </div>
      </div>
      <div className="hidden w-44 shrink-0 sm:block">
        <ProjectCover
          index={index}
          label={coverLabel}
          className="aspect-[4/3] rounded-lg transition-transform duration-500 group-hover:scale-[1.02]"
        />
      </div>
      <Link
        href={`/projects/${project.slug}`}
        aria-label={`Read case study: ${project.title}`}
        className="hidden text-2xl text-subtle transition-all duration-300 hover:translate-x-1 hover:text-accent sm:col-start-3 sm:row-start-1 sm:block"
      >
        →
      </Link>
    </article>
  );
}
