import Link from "next/link";
import type { Project } from "@/lib/projects";
import { TechTags } from "@/components/tech-tags";
import { ImagePlaceholder } from "@/components/image-placeholder";

interface ProjectRowProps {
  project: Project;
  featured?: boolean;
}

export function ProjectRow({ project, featured = false }: ProjectRowProps) {
  return (
    <article
      className={`grid gap-6 rounded-2xl border border-line bg-surface p-6 sm:p-8 ${
        featured ? "lg:grid-cols-[1fr_320px]" : ""
      }`}
    >
      <div className="flex flex-col gap-4">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <h3 className="text-xl font-semibold tracking-tight text-foreground">
            <Link
              href={`/projects/${project.slug}`}
              className="transition-colors hover:text-accent"
            >
              {project.title}
            </Link>
          </h3>
          <span className="font-mono text-xs uppercase tracking-wider text-subtle">
            {project.category}
          </span>
        </div>
        <p className="max-w-2xl text-base leading-7 text-muted">
          {project.summary}
        </p>
        <p className="text-sm text-subtle">
          Role: <span className="text-muted">{project.role}</span>
        </p>
        <TechTags technologies={project.technologies} />
        <Link
          href={`/projects/${project.slug}`}
          className="mt-2 inline-flex w-fit items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-accent-2"
        >
          Read case study
          <span aria-hidden="true">→</span>
        </Link>
      </div>
      {featured ? (
        <ImagePlaceholder
          label={project.title}
          className="min-h-40 w-full rounded-xl lg:min-h-full"
        />
      ) : null}
    </article>
  );
}
