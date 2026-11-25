import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/lib/projects";
import { TechTags } from "@/components/tech-tags";
import { ProjectCover } from "@/components/project-cover";

interface FlagshipShowcaseProps {
  project: Project;
  index: string;
  visualRight?: boolean;
  coverLabel: string;
  accent?: "accent" | "accent-2";
  imageSrc?: string;
  imageAlt?: string;
}

export function FlagshipShowcase({
  project,
  index,
  visualRight = false,
  coverLabel,
  accent = "accent",
  imageSrc,
  imageAlt,
}: FlagshipShowcaseProps) {
  const visual = imageSrc ? (
    <div className="group relative overflow-hidden rounded-2xl border border-line bg-card">
      <Image
        src={imageSrc}
        alt={imageAlt ?? `${project.title} — project imagery`}
        width={960}
        height={640}
        className="aspect-[3/2] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
      <span className="absolute bottom-4 left-4 rounded-md border border-line bg-background/70 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-muted backdrop-blur">
        {coverLabel}
      </span>
    </div>
  ) : (
    <ProjectCover
      index={index}
      label={coverLabel}
      accent={accent}
      caption="visual placeholder — screenshot pending"
      className="aspect-[3/2] w-full rounded-2xl"
    />
  );

  return (
    <article
      className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
    >
      <div className={visualRight ? "lg:order-2" : ""}>{visual}</div>
      <div className={visualRight ? "lg:order-1" : ""}>
        <div className="mb-5 flex items-baseline gap-4">
          <span className="font-mono text-sm text-accent">{index}</span>
          <span className="font-mono text-xs uppercase tracking-widest text-subtle">
            {project.category}
          </span>
          <span className="hidden h-px flex-1 bg-line sm:block" aria-hidden="true" />
        </div>
        <h3 className="text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl">
          <Link
            href={`/projects/${project.slug}`}
            className="transition-colors hover:text-accent"
          >
            {project.title}
          </Link>
        </h3>
        <p className="mt-5 max-w-xl text-base leading-7 text-muted">
          {project.summary}
        </p>
        <p className="mt-3 text-sm text-subtle">
          Role: <span className="text-muted">{project.role}</span>
        </p>
        <div className="mt-6">
          <TechTags technologies={project.technologies} />
        </div>
        <Link
          href={`/projects/${project.slug}`}
          className="group mt-8 inline-flex items-center gap-3 text-sm font-medium text-accent transition-colors hover:text-accent-2"
        >
          <span className="border-b border-accent/40 pb-0.5 transition-colors group-hover:border-accent-2">
            Read the case study
          </span>
          <span
            aria-hidden="true"
            className="transition-transform duration-300 group-hover:translate-x-1"
          >
            →
          </span>
        </Link>
      </div>
    </article>
  );
}
