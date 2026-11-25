import Link from "next/link";
import type { Project } from "@/lib/projects";
import { TechTags } from "@/components/tech-tags";
import { ProjectMockup } from "@/components/project-mockup";

interface FlagshipShowcaseProps {
  project: Project;
  index: string;
  visualRight?: boolean;
  imageSrc?: string;
  imageAlt?: string;
}

export function FlagshipShowcase({
  project,
  index,
  visualRight = false,
  imageSrc,
  imageAlt,
}: FlagshipShowcaseProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group grid grid-cols-1 items-center gap-10 rounded-2xl transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent lg:grid-cols-2 lg:gap-16"
    >
      <div className={visualRight ? "lg:order-2" : ""}>
        <ProjectMockup
          title={project.title}
          src={imageSrc}
          imageAlt={imageAlt}
          className="transition-transform duration-500 ease-out group-hover:scale-[1.02]"
        />
      </div>
      <div className={visualRight ? "lg:order-1" : ""}>
        <div className="mb-5 flex items-baseline gap-4">
          <span className="font-mono text-sm text-muted">{index}</span>
          <span className="font-mono text-xs uppercase tracking-[0.08em] text-subtle">
            {project.category}
          </span>
          <span className="hidden h-px flex-1 bg-line sm:block" aria-hidden="true" />
        </div>
        <h3 className="text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl">
          {project.title}
        </h3>
        <p className="mt-5 max-w-xl text-base leading-7 text-muted">
          {project.summary}
        </p>
        <p className="mt-3 text-sm text-subtle">
          Role: <span className="text-muted">{project.role}</span>
        </p>
        {project.statusLine ? (
          <p className="mt-2 font-mono text-xs text-subtle">{project.statusLine}</p>
        ) : null}
        <div className="mt-6">
          <TechTags technologies={project.technologies} />
        </div>
        <span className="mt-8 inline-flex items-center gap-3 text-sm font-medium text-accent">
          <span className="border-b border-accent/40 pb-0.5 transition-colors group-hover:border-accent-bright">
            Read the case study
          </span>
          <span
            aria-hidden="true"
            className="transition-transform duration-300 group-hover:translate-x-1"
          >
            →
          </span>
        </span>
      </div>
    </Link>
  );
}
