import Link from "next/link";
import type { CaseStudy, CaseStudySection } from "@/lib/case-study";
import type { Project } from "@/lib/projects";
import { projects } from "@/lib/projects";
import { Glance } from "@/components/case-study/glance";
import { CaseStudyNav } from "@/components/case-study/case-study-nav";
import { PrevNext } from "@/components/case-study/prev-next";
import { HeroGallery, type GalleryItem } from "@/components/case-study/hero-gallery";
import { StatsStrip } from "@/components/case-study/stats-strip";
import { TechTags } from "@/components/tech-tags";
import { ContentBlockView, renderInline } from "@/components/case-study/content-blocks";

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

function Section({
  section,
  index,
}: {
  section: CaseStudySection;
  index: number;
}) {
  return (
    <section
      aria-labelledby={section.id}
      className="border-t border-line pt-16 first:border-t-0 first:pt-0 sm:pt-24 sm:first:pt-0"
    >
      <p className="mb-4 font-mono text-xs uppercase tracking-[0.08em] text-muted">
        {String(index + 1).padStart(2, "0")}
      </p>
      <h2
        id={section.id}
        className="group mb-8 scroll-mt-24 text-[clamp(1.5rem,2.5vw,2rem)] font-semibold tracking-[-0.02em] text-foreground"
      >
        {section.title}
        <a
          href={`#${section.id}`}
          aria-label={`Copy link to ${section.title}`}
          className="ml-2 inline-block align-middle text-subtle opacity-0 transition-opacity group-hover:opacity-100 focus-visible:opacity-100 hover:text-accent"
        >
          #
        </a>
      </h2>
      <div className="space-y-8">
        {section.blocks.map((block, i) => (
          <ContentBlockView key={i} block={block} />
        ))}
      </div>
    </section>
  );
}

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

      {/* Stats strip */}
      {caseStudy.stats ? (
        <div className="mb-16">
          <StatsStrip stats={caseStudy.stats} />
        </div>
      ) : null}

      {/* Intro */}
      <div className="mb-16 max-w-[68ch] space-y-6">
        {caseStudy.intro.map((block, i) =>
          block.type === "paragraph" ? (
            <p key={i} className="text-prose leading-[1.75] text-foreground/80">
              {renderInline(block.text)}
            </p>
          ) : null,
        )}
      </div>

      {/* At a glance */}
      <div className="mb-16">
        <Glance items={caseStudy.glance} />
      </div>

      {/* Sticky TOC + sections */}
      <div className="grid gap-12 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-16">
        <CaseStudyNav sections={caseStudy.sections} />
        <div className="min-w-0 max-w-[68ch]">
          <div className="flex flex-col">
            {caseStudy.sections.map((section, i) => (
              <Section key={section.id} section={section} index={i} />
            ))}
          </div>
        </div>
      </div>

      <PrevNext slug={project.slug} />
    </main>
  );
}
