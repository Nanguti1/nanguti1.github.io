import Link from "next/link";
import type { Metadata } from "next";
import { HeroVisual } from "@/components/hero-visual";
import { FlagshipShowcase } from "@/components/flagship-showcase";
import { ProjectIndexRow } from "@/components/project-index-row";
import { ExperienceTimeline } from "@/components/experience-timeline";
import { Approach } from "@/components/approach";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { getProject, type Project } from "@/lib/projects";

const supportingSlugs = ["simplifi-networks", "blvd-guide"];

export const metadata: Metadata = {
  title: "Engineering Portfolio",
  description:
    "Kevin Wanyonyi's engineering portfolio — selected software projects and engineering contributions across commerce, insurance, marketplace, and business systems.",
};

export default function Home() {
  const twoB = getProject("2b-gamers-store");
  const hamaline = getProject("hamaline-insurance");
  const supporting = supportingSlugs
    .map(getProject)
    .filter((p): p is Project => p !== undefined);

  return (
    <main className="flex-1">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="bg-grid absolute inset-0" aria-hidden="true" />
        <div
          className="absolute -top-40 left-1/2 h-96 w-[42rem] -translate-x-1/2 rounded-full bg-white/[0.04] blur-3xl"
          aria-hidden="true"
        />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-6 pb-24 pt-20 sm:pt-28 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:pb-32">
          <div>
            <p className="mb-6 inline-flex items-center gap-3 rounded-full border border-line bg-surface/80 px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-muted backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-2" aria-hidden="true" />
              Engineering Portfolio — Full-Stack
            </p>
            <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              Kevin
              <br />
              Wanyonyi.
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-muted">
              Full-stack software engineer building production business
              systems — storefronts, insurance platforms, marketplaces, and
              operations tooling — from backend services to the interfaces
              people actually use.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/projects"
                className="group inline-flex h-12 items-center gap-3 rounded-full bg-accent px-7 text-sm font-medium text-background transition-all hover:bg-accent-bright"
              >
                Explore projects
                <span
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
              <Link
                href="/contact"
                className="inline-flex h-12 items-center rounded-full border border-line-strong px-7 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
              >
                Contact
              </Link>
            </div>
            <dl className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-line pt-6">
              {[
                ["06", "case studies"],
                ["Laravel · React", "core stack"],
                ["M-PESA", "payments"],
              ].map(([value, label]) => (
                <div key={label}>
                  <dt className="font-mono text-lg font-semibold text-foreground">
                    {value}
                  </dt>
                  <dd className="mt-1 font-mono text-[10px] uppercase tracking-widest text-subtle">
                    {label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <Reveal delay={150}>
            <HeroVisual />
          </Reveal>
        </div>
      </section>

      {/* Flagship showcases */}
      <section className="border-t border-line bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <Reveal>
            <SectionHeading
              title="Flagship work"
              description="Two production systems that carry the largest engineering scope on this portfolio."
            />
          </Reveal>
          <div className="flex flex-col gap-24">
            {twoB ? (
              <Reveal>
                <FlagshipShowcase
                  project={twoB}
                  index="01"
                  visualRight
                  imageSrc="/images/projects/2b-gamers-store-banner.webp"
                  imageAlt="2B Gamers Store storefront banner"
                />
              </Reveal>
            ) : null}
            {hamaline ? (
              <Reveal>
                <FlagshipShowcase
                  project={hamaline}
                  index="02"
                />
              </Reveal>
            ) : null}
          </div>
        </div>
      </section>

      {/* Supporting projects */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <Reveal>
            <SectionHeading
              title="More full-stack projects"
              description="Additional platforms built across commerce, marketplaces, and business operations."
            />
          </Reveal>
          <Reveal delay={100}>
            <div className="pb-4">
              {supporting.map((project, i) => (
                <ProjectIndexRow
                  key={project.slug}
                  project={project}
                  index={`0${i + 3}`}
                />
              ))}
            </div>
          </Reveal>
          <p className="mt-10">
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-accent-bright"
            >
              <span className="border-b border-accent/40 pb-0.5 transition-colors group-hover:border-accent-bright">
                View all six projects
              </span>
              <span aria-hidden="true">→</span>
            </Link>
          </p>
        </div>
      </section>

      {/* Engineering approach */}
      <section className="border-t border-line bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <Reveal>
            <SectionHeading
              title="Engineering approach"
              description="How the work on this portfolio is built and documented."
            />
          </Reveal>
          <Reveal delay={100}>
            <Approach />
          </Reveal>
        </div>
      </section>

      {/* Earlier experience */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <Reveal>
            <SectionHeading
              title="Earlier experience"
              description="Team-based engineering work that preceded and complements the flagship projects."
            />
          </Reveal>
          <Reveal delay={100}>
            <ExperienceTimeline />
          </Reveal>
          <p className="mt-10 max-w-2xl text-sm leading-6 text-subtle">
            These were team efforts — contributions are described as such in
            each case study.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section className="border-t border-line bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <Reveal>
            <SectionHeading
              title="Contact"
              description="For project inquiries, collaboration, or questions about the work documented here."
            />
          </Reveal>
          <Reveal delay={100}>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="https://github.com/Nanguti1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 w-fit items-center rounded-full bg-accent px-7 text-sm font-medium text-background transition-colors hover:bg-accent-bright"
              >
                GitHub — Nanguti1
              </a>
              <Link
                href="/contact"
                className="inline-flex h-12 w-fit items-center rounded-full border border-line-strong px-7 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
              >
                Contact page
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
