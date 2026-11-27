import Link from "next/link";
import type { CaseStudy } from "@/lib/case-study";
import type { Project } from "@/lib/projects";
import { projects } from "@/lib/projects";
import { Glance } from "@/components/case-study/glance";
import { TableOfContents } from "@/components/case-study/table-of-contents";
import { PrevNext } from "@/components/case-study/prev-next";
import { HeroGallery, type GalleryItem } from "@/components/case-study/hero-gallery";
import { TechTags } from "@/components/tech-tags";

interface CaseStudyLayoutProps {
  project: Project;
  caseStudy: CaseStudy;
}

function hostOf(url: string): string {
  try {
    return new URL(url).host;
  } catch {
    return url.replace(/^https?:\/\//, "").replace(/\/$/, "");
  }
}

const buttonPrimary =
  "inline-flex h-11 items-center rounded-full bg-accent px-6 text-sm font-medium text-background transition-colors hover:bg-accent-bright";
const buttonSecondary =
  "inline-flex h-11 items-center rounded-full border border-line-strong px-6 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent";

export function CaseStudyLayout({ project, caseStudy }: CaseStudyLayoutProps) {
  const index = String(
    projects.findIndex((p) => p.slug === project.slug) + 1,
  ).padStart(2, "0");

  const gallery: GalleryItem[] =
    project.gallery && project.gallery.length > 0
      ? project.gallery
      : project.banner
        ? [
            {
              src: project.banner,
              alt: `${project.title} banner`,
              label: "Overview",
            },
          ]
        : [];

  const domain = project.liveUrl ? hostOf(project.liveUrl) : project.title;

  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-6 py-16 sm:py-24">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="mb-8">
        <ol className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.08em] text-subtle">
          <li>
            <Link
              href="/projects"
              className="transition-colors hover:text-accent"
            >
              Projects
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="text-muted">
            {project.title}
          </li>
        </ol>
      </nav>

      {/* Hero */}
      <header className="mb-12">
        <div className="relative mb-12">
          <HeroGallery
            title={project.title}
            domain={domain}
            items={gallery}
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 rounded-b-xl bg-gradient-to-t from-background to-transparent" />
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
          <div className="mt-8 flex flex-wrap items-center gap-4">
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonPrimary}
              >
                Visit live site
              </a>
            ) : null}
            {project.repoUrl ? (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonSecondary}
              >
                View repository
              </a>
            ) : null}
            <Link href="/projects" className={buttonSecondary}>
              Back to projects
            </Link>
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
