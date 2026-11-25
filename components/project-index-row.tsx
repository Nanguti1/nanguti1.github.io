import Link from "next/link";
import type { Project } from "@/lib/projects";
import { TechTags } from "@/components/tech-tags";
import { ProjectMockup } from "@/components/project-mockup";

interface ProjectIndexRowProps {
  project: Project;
  index: string;
}

/** Numbered editorial row: index | thumbnail | content | arrow. Whole row links to the case study. */
export function ProjectIndexRow({ project, index }: ProjectIndexRowProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group grid grid-cols-[minmax(0,1fr)_auto] items-center gap-x-6 gap-y-6 border-t border-line py-8 transition-colors first:border-t-0 hover:border-accent/60 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent sm:grid-cols-[48px_220px_minmax(0,1fr)_24px]"
    >
      {/* Thumbnail — above content on mobile, fixed column on desktop */}
      <div className="col-span-2 max-w-sm sm:col-span-1 sm:col-start-2 sm:max-w-none sm:row-start-1">
        <ProjectMockup
          title={project.title}
          className="transition-transform duration-500 ease-out group-hover:scale-[1.02]"
        />
      </div>

      {/* Index */}
      <span className="order-3 hidden font-mono text-sm text-muted sm:col-start-1 sm:row-start-1 sm:block">
        {index}
      </span>

      {/* Content */}
      <div className="order-4 col-span-2 min-w-0 sm:col-span-1 sm:col-start-3 sm:row-start-1">
        <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
          <h3 className="text-xl font-semibold tracking-tight text-foreground transition-colors group-hover:text-accent sm:text-2xl">
            {project.title}
          </h3>
          <span className="font-mono text-xs uppercase tracking-[0.08em] text-subtle">
            {project.category}
          </span>
        </div>
        <p className="mt-2 max-w-2xl text-[15px] leading-6 text-muted">
          {project.summary}
        </p>
        {project.statusLine ? (
          <p className="mt-2 font-mono text-xs text-subtle">{project.statusLine}</p>
        ) : null}
        <div className="mt-4">
          <TechTags technologies={project.technologies} />
        </div>
        <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-accent">
          Read case study
          <span
            aria-hidden="true"
            className="transition-transform duration-300 group-hover:translate-x-1"
          >
            →
          </span>
        </span>
      </div>

      {/* Arrow */}
      <span
        aria-hidden="true"
        className="order-5 hidden text-2xl text-subtle transition-all duration-300 group-hover:translate-x-1 group-hover:text-accent sm:col-start-4 sm:row-start-1 sm:block"
      >
        →
      </span>
    </Link>
  );
}
