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
    <main className="mx-auto w-full max-w-6xl flex-1 px-6 py-16 sm:py-24">
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
            <Link
              href={`/projects/${project.slug}`}
              className="group grid items-center gap-8 rounded-2xl border border-line bg-card p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/60 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent sm:p-10 lg:grid-cols-[1fr_380px]"
            >
              <div>
                <div className="mb-4 flex items-baseline gap-4">
                  <span className="font-mono text-sm text-muted">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-mono text-xs uppercase tracking-[0.08em] text-subtle">
                    {project.category}
                  </span>
                </div>
                <h2 className="text-3xl font-semibold tracking-tight text-foreground transition-colors group-hover:text-accent">
                  {project.title}
                </h2>
                <p className="mt-4 max-w-xl text-base leading-7 text-muted">
                  {project.summary}
                </p>
                <p className="mt-3 text-sm text-subtle">
                  Role: <span className="text-muted">{project.role}</span>
                </p>
                {project.statusLine ? (
                  <p className="mt-2 font-mono text-xs text-subtle">
                    {project.statusLine}
                  </p>
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
              <ProjectMockup
                title={project.title}
                className="w-full transition-transform duration-500 ease-out group-hover:scale-[1.02]"
              />
            </Link>
          </Reveal>
        ))}
      </div>

      {/* Supporting projects */}
      <div className="mt-20">
        <Reveal>
          <h2 className="mb-2 font-mono text-xs uppercase tracking-[0.08em] text-subtle">
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
