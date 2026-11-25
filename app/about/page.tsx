import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { TechTags } from "@/components/tech-tags";
import { ProjectIndexRow } from "@/components/project-index-row";
import { ExperienceTimeline } from "@/components/experience-timeline";
import { getProject, type Project } from "@/lib/projects";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Kevin Wanyonyi — full-stack software engineer building web applications and business systems.",
};

const capabilityGroups = [
  {
    title: "Backend",
    technologies: ["Laravel", "PHP", "Yii2", "Node.js"],
  },
  {
    title: "Frontend",
    technologies: ["React", "Next.js", "Inertia", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Data",
    technologies: ["MySQL"],
  },
  {
    title: "Integrations",
    technologies: ["M-PESA", "Laravel Nova", "Spatie Permissions", "DomPDF", "Leaflet"],
  },
];

const flagshipSlugs = ["2b-gamers-store", "hamaline-insurance"];

function AboutSection({
  index,
  title,
  children,
}: {
  index: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <p className="mb-4 font-mono text-xs uppercase tracking-[0.08em] text-muted">
        {index}
      </p>
      <h2 className="mb-6 text-[clamp(1.5rem,2.5vw,2rem)] font-semibold tracking-[-0.02em] text-foreground">
        {title}
      </h2>
      {children}
    </section>
  );
}

function Highlight({ children }: { children: React.ReactNode }) {
  return <span className="font-medium text-foreground">{children}</span>;
}

export default function AboutPage() {
  const { portrait, quickFacts } = siteConfig.about;
  const { email, phone, linkedin, github, website, availability } =
    siteConfig.contact;
  const visibleFacts = quickFacts.filter((f) => f.value);
  const flagship = flagshipSlugs
    .map(getProject)
    .filter((p): p is Project => p !== undefined);

  return (
    <main className="flex-1">
      {/* Page header */}
      <section className="border-b border-line">
        <div className="mx-auto w-full max-w-6xl px-6 pb-16 pt-16 sm:pb-24 sm:pt-24">
          <Reveal>
            <p className="mb-6 font-mono text-xs uppercase tracking-[0.08em] text-accent-2">
              About
            </p>
            <h1 className="text-[clamp(2rem,4vw,3rem)] font-semibold leading-tight tracking-[-0.02em] text-foreground">
              Kevin Wanyonyi
            </h1>
            <p className="mt-6 max-w-prose text-xl leading-8 text-foreground">
              Full-stack software engineer focused on practical web
              applications and business systems.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Two-column body */}
      <section className="border-b border-line">
        <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 py-16 sm:py-24 lg:grid-cols-[320px_minmax(0,1fr)] lg:gap-16">
          {/* Sidebar */}
          <Reveal>
            <div className="lg:sticky lg:top-24 lg:self-start">
              <div className="rounded-2xl border border-line bg-surface p-6">
                {portrait ? (
                  <div className="relative mb-6 aspect-square overflow-hidden rounded-xl">
                    <Image
                      src={portrait}
                      alt="Portrait of Kevin Wanyonyi"
                      fill
                      className="object-cover"
                      sizes="320px"
                    />
                  </div>
                ) : (
                  <div
                    className="mb-6 flex aspect-square items-center justify-center rounded-xl border border-line bg-elevated"
                    aria-hidden="true"
                  >
                    <span className="font-mono text-4xl font-semibold text-subtle">
                      KW
                    </span>
                  </div>
                )}
                <p className="text-lg font-semibold tracking-tight text-foreground">
                  Kevin Wanyonyi
                </p>
                <p className="mt-1 text-sm text-subtle">
                  Full-stack software engineer
                </p>
                <div className="mt-6 flex flex-col gap-3">
                  <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-11 items-center justify-center rounded-full bg-accent px-6 text-sm font-medium text-background transition-colors hover:bg-accent-bright"
                  >
                    GitHub — Nanguti1
                  </a>
                  <Link
                    href="/contact"
                    className="inline-flex h-11 items-center justify-center rounded-full border border-line-strong px-6 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
                  >
                    Contact page
                  </Link>
                  {email ? (
                    <a
                      href={`mailto:${email}`}
                      className="text-center text-sm text-accent transition-colors hover:text-accent-bright"
                    >
                      {email}
                    </a>
                  ) : null}
                  {phone ? (
                    <a
                      href={phone.href}
                      className="text-center text-sm text-accent transition-colors hover:text-accent-bright"
                    >
                      {phone.display}
                    </a>
                  ) : null}
                  {linkedin ? (
                    <a
                      href={linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-center text-sm text-accent transition-colors hover:text-accent-bright"
                    >
                      LinkedIn
                    </a>
                  ) : null}
                  {website ? (
                    <a
                      href={website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-center text-sm text-accent transition-colors hover:text-accent-bright"
                    >
                      Personal website
                    </a>
                  ) : null}
                </div>
                {availability ? (
                  <p className="mt-6 border-t border-line pt-4 text-xs text-subtle">
                    <span
                      className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-accent-2 align-middle"
                      aria-hidden="true"
                    />
                    {availability}
                  </p>
                ) : null}
              </div>

              {visibleFacts.length > 0 ? (
                <dl className="mt-6 rounded-2xl border border-line bg-surface p-6">
                  {visibleFacts.map((fact) => (
                    <div
                      key={fact.label}
                      className="flex items-baseline justify-between gap-4 border-t border-line py-3 first:border-t-0 first:pt-0 last:pb-0"
                    >
                      <dt className="font-mono text-xs uppercase tracking-[0.08em] text-subtle">
                        {fact.label}
                      </dt>
                      <dd className="text-sm font-medium text-foreground">
                        {fact.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              ) : null}
            </div>
          </Reveal>

          {/* Main column */}
          <Reveal delay={100}>
            <div className="flex min-w-0 flex-col gap-16">
              <AboutSection index="01" title="Background">
                <div className="max-w-prose space-y-6">
                  <p className="text-lg leading-8 text-foreground/80">
                    Kevin Wanyonyi is a full-stack software engineer who designs
                    and builds web applications and business systems end to
                    end — backend services, APIs, admin tooling, and
                    customer-facing frontends.
                  </p>
                  <p className="text-lg leading-8 text-foreground/80">
                    Recent work spans <Highlight>Laravel</Highlight> and{" "}
                    <Highlight>PHP</Highlight> backends,{" "}
                    <Highlight>React</Highlight> and <Highlight>Next.js</Highlight>{" "}
                    frontends, <Highlight>Inertia</Highlight>-based
                    applications, <Highlight>MySQL</Highlight> data modelling,
                    and third-party integrations such as{" "}
                    <Highlight>M-PESA</Highlight>.
                  </p>
                </div>
              </AboutSection>

              <AboutSection index="02" title="Capabilities">
                <div className="grid gap-6 sm:grid-cols-2">
                  {capabilityGroups.map((group) => (
                    <div
                      key={group.title}
                      className="rounded-xl border border-line bg-surface p-6"
                    >
                      <h3 className="text-base font-semibold tracking-tight text-foreground">
                        {group.title}
                      </h3>
                      <div className="mt-4">
                        <TechTags technologies={group.technologies} />
                      </div>
                    </div>
                  ))}
                </div>
              </AboutSection>

              <AboutSection index="03" title="Selected work">
                <p className="mb-6 max-w-prose text-body text-muted">
                  This portfolio documents six projects and experiences, led by
                  two flagship systems.
                </p>
                <div>
                  {flagship.map((project, i) => (
                    <ProjectIndexRow
                      key={project.slug}
                      project={project}
                      index={`0${i + 1}`}
                    />
                  ))}
                </div>
                <p className="mt-8">
                  <Link
                    href="/projects"
                    className="group inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-accent-bright"
                  >
                    View all six projects
                    <span
                      aria-hidden="true"
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </Link>
                </p>
              </AboutSection>

              <AboutSection index="04" title="Experience">
                <ExperienceTimeline />
                <p className="mt-8 max-w-prose text-body text-subtle">
                  These were team efforts — the portfolio distinguishes personal
                  ownership from team contribution throughout.
                </p>
              </AboutSection>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="border-t border-line bg-surface">
        <div className="mx-auto w-full max-w-6xl px-6 py-16 sm:py-24">
          <Reveal>
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-semibold leading-tight tracking-[-0.02em] text-foreground">
              Let&apos;s talk
            </h2>
            <p className="mt-4 max-w-prose text-body text-muted">
              For project inquiries, collaboration, or questions about the work
              documented in this portfolio.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex h-12 items-center rounded-full bg-accent px-8 text-sm font-medium text-background transition-colors hover:bg-accent-bright"
              >
                Contact page
              </Link>
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center rounded-full border border-line-strong px-8 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
              >
                GitHub — Nanguti1
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
