import Link from "next/link";
import type { Metadata } from "next";
import { HeroVisual } from "@/components/hero-visual";
import { FlagshipShowcase } from "@/components/flagship-showcase";
import { ProjectIndexRow } from "@/components/project-index-row";
import { ExperienceTimeline } from "@/components/experience-timeline";
import { Approach } from "@/components/approach";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { ContactLedger } from "@/components/contact-ledger";
import { CopyButton } from "@/components/copy-button";
import { getProject, projects, type Project } from "@/lib/projects";
import { siteConfig } from "@/lib/site-config";

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

  const heroStats = [
    { value: String(projects.length), label: "published case studies" },
    {
      value: String(projects.filter((p) => p.featured).length),
      label: "flagship systems",
    },
    ...siteConfig.heroStats.filter((s) => s.value !== null),
  ];

  return (
    <main className="flex-1">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="bg-grid absolute inset-0" aria-hidden="true" />
        <div
          className="absolute -top-40 left-1/2 h-96 w-[42rem] -translate-x-1/2 rounded-full bg-white/[0.04] blur-3xl"
          aria-hidden="true"
        />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-6 pb-24 pt-24 sm:pt-24 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:pb-24">
          <div>
            <p className="mb-6 inline-flex items-center gap-4 rounded-full border border-line bg-surface/80 px-4 py-2 font-mono text-xs uppercase tracking-[0.08em] text-muted backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-2" aria-hidden="true" />
              Engineering Portfolio — Full-Stack
            </p>
            <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              Kevin
              <br />
              Wanyonyi.
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-8 text-muted">
              Full-stack software engineer building production business
              systems — storefronts, insurance platforms, marketplaces, and
              operations tooling — from backend services to the interfaces
              people actually use.
            </p>
            <div className="mt-12 flex flex-wrap items-center gap-4">
              <Link
                href="/projects"
                className="group inline-flex h-12 items-center gap-4 rounded-full bg-accent px-8 text-sm font-medium text-background transition-all hover:bg-accent-bright"
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
                className="inline-flex h-12 items-center rounded-full border border-line-strong px-8 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
              >
                Contact
              </Link>
            </div>
            <dl className="mt-16 flex max-w-lg flex-wrap gap-x-12 gap-y-6 border-t border-line pt-6">
              {heroStats.map((stat) => (
                <div key={stat.label}>
                  <dt className="font-mono text-lg font-semibold text-foreground">
                    {stat.value}
                  </dt>
                  <dd className="mt-2 font-mono text-xs uppercase tracking-[0.08em] text-subtle">
                    {stat.label}
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
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
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
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
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
          <p className="mt-12">
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
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:gap-16">
            <Reveal>
              <div className="lg:sticky lg:top-24">
                <SectionHeading
                  title="Engineering approach"
                  description="How the work on this portfolio is built and documented."
                />
                <p className="max-w-xs text-body text-muted">
                  The work on this portfolio is built the way the systems it
                  documents are built — around real workflows, explicit
                  boundaries, and engineering decisions that can be defended.
                </p>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <Approach />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Earlier experience */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:gap-16">
            <Reveal>
              <div>
                <SectionHeading
                  title="Earlier experience"
                  description="Team-based engineering work that preceded and complements the flagship projects."
                />
                <p className="max-w-xs text-sm leading-6 text-subtle">
                  These were team efforts — contributions are described as
                  such in each case study.
                </p>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <ExperienceTimeline />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="border-t border-line bg-surface">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-12 px-6 py-16 sm:py-24 lg:grid-cols-[7fr_5fr] lg:gap-16">
          <Reveal>
            <div>
              <h2 className="text-[clamp(2rem,4vw,3rem)] font-semibold leading-tight tracking-[-0.02em] text-foreground">
                Contact
              </h2>
              <p className="mt-4 max-w-[50ch] text-lg leading-8 text-muted">
                For project inquiries, collaboration, or questions about the
                work documented here.
              </p>
              {siteConfig.contact.availability ? (
                <p className="mt-6 inline-flex items-center gap-3 rounded-full border border-line bg-background px-4 py-2">
                  <span
                    className="h-1.5 w-1.5 animate-pulse-soft rounded-full bg-accent-2"
                    aria-hidden="true"
                  />
                  <span className="text-sm font-medium text-foreground">
                    {siteConfig.contact.availability}
                  </span>
                </p>
              ) : null}
              {siteConfig.contact.email ? (
                <>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    aria-label="Email Kevin Wanyonyi"
                    className="group relative mt-8 inline-block text-[clamp(1.75rem,4vw,3.25rem)] font-semibold leading-tight tracking-[-0.02em] text-foreground [overflow-wrap:anywhere] after:absolute after:inset-x-0 after:-bottom-1 after:h-0.5 after:origin-left after:scale-x-0 after:bg-accent after:transition-transform after:duration-300 hover:after:scale-x-100 focus-visible:after:scale-x-100"
                  >
                    {siteConfig.contact.email}
                    <span
                      aria-hidden="true"
                      className="ml-3 inline-block transition-transform duration-300 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </a>
                  <div className="mt-8 flex flex-wrap items-center gap-6">
                    <CopyButton
                      value={siteConfig.contact.email}
                      label="Copy email"
                      copiedLabel="Copied"
                      className="inline-flex h-10 items-center rounded-full border border-line-strong px-5 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
                    />
                    <Link
                      href="/contact"
                      className="text-sm text-muted transition-colors hover:text-accent"
                    >
                      Or use the contact form
                    </Link>
                  </div>
                </>
              ) : null}
            </div>
          </Reveal>
          <Reveal delay={100}>
            <ContactLedger />
          </Reveal>
        </div>
      </section>
    </main>
  );
}
