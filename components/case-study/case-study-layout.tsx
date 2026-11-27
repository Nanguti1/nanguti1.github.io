import type { CaseStudy } from "@/lib/case-study";
import type { Project } from "@/lib/projects";
import { projects } from "@/lib/projects";
import { Glance } from "@/components/case-study/glance";
import { TableOfContents } from "@/components/case-study/table-of-contents";
import { PrevNext } from "@/components/case-study/prev-next";
import { TechTags } from "@/components/tech-tags";
import { ProjectMockup } from "@/components/project-mockup";

interface CaseStudyLayoutProps {
  project: Project;
  caseStudy: CaseStudy;
}

export function CaseStudyLayout({ project, caseStudy }: CaseStudyLayoutProps) {
  const index = String(
    projects.findIndex((p) => p.slug === project.slug) + 1,
  ).padStart(2, "0");
  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-6 py-16 sm:py-24">
      {/* Hero */}
      <header className="mb-12">
        <div className="relative mb-12 overflow-hidden rounded-2xl">
          <ProjectMockup
            title={project.title}
            domain={`${project.slug}.app`}
            src={project.banner}
            imageAlt={project.banner ? `${project.title} banner` : undefined}
            className="w-full"
          />
          <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-t from-background via-background/20 to-transparent" />
        </div>
        <div className="max-w-3xl">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.08em] text-accent-2">
            {index} — {project.category} — Case study
          </p>
          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl">
            {project.title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted">{project.summary}</p>
          <div className="mt-6 flex flex-col gap-4">
            <p className="text-sm text-subtle">
              Role:{" "}
              <span className="text-muted">{project.role}</span>
            </p>
            <TechTags technologies={project.technologies} />
          </div>
        </div>
      </header>

      {/* Intro */}
      <div className="mb-16 max-w-3xl space-y-6">
        {caseStudy.intro.map((block, i) =>
          block.type === "paragraph" ? (
            <p key={i} className="text-base leading-8 text-muted">
              {block.text}
            </p>
          ) : null,
        )}
      </div>

      {/* At a glance */}
      <div className="mb-16">
        <Glance items={caseStudy.glance} />
      </div>

      {/* TOC + sections */}
      <TableOfContents sections={caseStudy.sections} />

      <div className="max-w-3xl space-y-16">
        {caseStudy.sections.map((section) => (
          <section key={section.id} aria-labelledby={section.id}>
            <h2
              id={section.id}
              className="mb-6 scroll-mt-24 text-2xl font-semibold tracking-tight text-foreground"
            >
              {section.title}
            </h2>
            <div className="space-y-6">
              {section.blocks.map((block, i) =>
                block.type === "paragraph" ? (
                  <p key={i} className="text-base leading-8 text-muted">
                    {block.text}
                  </p>
                ) : (
                  <ul key={i} className="space-y-2">
                    {block.items.map((item) => (
                      <li
                        key={item}
                        className="flex gap-4 text-base leading-7 text-muted"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-subtle"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                ),
              )}
            </div>
          </section>
        ))}
      </div>

      <PrevNext slug={project.slug} />
    </main>
  );
}
