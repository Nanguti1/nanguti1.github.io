import Link from "next/link";
import type { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { ProjectIndexRow } from "@/components/project-index-row";
import { TechTags } from "@/components/tech-tags";
import { ProjectMockup } from "@/components/project-mockup";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected software projects and engineering contributions by Kevin Wanyonyi.",
};

export default function ProjectsPage() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-6 py-24">
      <Reveal>
        <SectionHeading
          title="Projects"
          description="Six selected projects and professional experiences, presented as detailed engineering case studies."
        />
      </Reveal>

      {/* Flagship features */}
      <div className="flex flex-col gap-16">
        {featured.map((project, i) => (
          <Reveal key={project.slug} delay={i * 100}>
            <article className="grid items-center gap-8 rounded-2xl border border-line bg-card p-6 sm:p-10 lg:grid-cols-[1fr_380px]">
              <div>
                <div className="mb-4 flex items-baseline gap-4">
                  <span className="font-mono text-sm text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-mono text-xs uppercase tracking-widest text-subtle">
                    {project.category}
                  </span>
                </div>
                <h2 className="text-3xl font-semibold tracking-tight text-foreground">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="transition-colors hover:text-accent"
                  >
                    {project.title}
                  </Link>
                </h2>
                <p className="mt-4 max-w-xl text-base leading-7 text-muted">
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
              <ProjectMockup title={project.title} className="w-full" />
            </article>
          </Reveal>
        ))}
      </div>

      {/* Supporting projects */}
      <div className="mt-20">
        <Reveal>
          <h2 className="mb-2 font-mono text-xs uppercase tracking-widest text-subtle">
            Additional projects &amp; experience
          </h2>
        </Reveal>
        <Reveal delay={80}>
          <div className="border-t border-line">
            {rest.map((project, i) => (
              <ProjectIndexRow
                key={project.slug}
                project={project}
                index={`0${i + 3}`}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </main>
  );
}
