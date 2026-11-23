import Link from "next/link";
import type { Metadata } from "next";
import { ProjectRow } from "@/components/project-row";
import { SectionHeading } from "@/components/section-heading";
import { TechTags } from "@/components/tech-tags";
import { getProject } from "@/lib/projects";

const flagshipSlugs = ["2b-gamers-store", "hamaline-insurance"];
const substantialSlugs = ["simplifi-networks", "blvd-guide"];
const experienceSlugs = ["afriq-networks", "mwalimuplus"];

export const metadata: Metadata = {
  title: "Engineering Portfolio",
  description:
    "Kevin Wanyonyi's engineering portfolio — selected software projects and engineering contributions across commerce, insurance, marketplace, and business systems.",
};

export default function Home() {
  const flagships = flagshipSlugs
    .map(getProject)
    .filter((p) => p !== undefined);
  const substantial = substantialSlugs
    .map(getProject)
    .filter((p) => p !== undefined);
  const experience = experienceSlugs
    .map(getProject)
    .filter((p) => p !== undefined);

  return (
    <main className="flex-1">
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pb-20 pt-24 sm:pt-32">
        <p className="mb-4 font-mono text-xs uppercase tracking-widest text-accent">
          Engineering Portfolio
        </p>
        <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl">
          Kevin Wanyonyi
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
          Full-stack software engineer designing and building practical web
          applications and business systems — storefronts, insurance
          platforms, marketplaces, and internal operations tools.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/projects"
            className="inline-flex h-11 items-center rounded-full bg-accent px-6 text-sm font-medium text-background transition-colors hover:bg-accent-2"
          >
            Explore projects
          </Link>
          <Link
            href="/contact"
            className="inline-flex h-11 items-center rounded-full border border-line px-6 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            Contact
          </Link>
        </div>
      </section>

      {/* Selected work — flagship case studies */}
      <section className="border-t border-line" aria-labelledby="selected-work">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <SectionHeading
            id="selected-work"
            title="Selected work"
            description="Flagship case studies — production systems with substantial engineering scope."
          />
          <div className="flex flex-col gap-6">
            {flagships.map((project) => (
              <ProjectRow key={project.slug} project={project} featured />
            ))}
          </div>
        </div>
      </section>

      {/* Other substantial projects */}
      <section aria-labelledby="more-work">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <SectionHeading
            id="more-work"
            title="More full-stack projects"
            description="Additional platforms built across commerce, marketplaces, and business operations."
          />
          <div className="flex flex-col gap-6">
            {substantial.map((project) => (
              <ProjectRow key={project.slug} project={project} featured />
            ))}
          </div>
          <p className="mt-8">
            <Link
              href="/projects"
              className="text-sm font-medium text-accent transition-colors hover:text-accent-2"
            >
              View all six projects →
            </Link>
          </p>
        </div>
      </section>

      {/* Engineering approach */}
      <section className="border-t border-line" aria-labelledby="approach">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <SectionHeading
            id="approach"
            title="Engineering approach"
            description="How the work on this portfolio is built and documented."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Business workflows first",
                body: "Systems are shaped around real operational workflows — orders, policies, claims, stock movements — rather than generic CRUD screens.",
              },
              {
                title: "Backend and frontend as one system",
                body: "Laravel backends and React/Inertia or Next.js frontends are designed together, with clear boundaries around APIs, validation, and authorization.",
              },
              {
                title: "Integrations handled deliberately",
                body: "Payment providers, email, and third-party APIs are integrated with explicit status tracking and records — not treated as fire-and-forget calls.",
              },
              {
                title: "Data integrity",
                body: "Financial and inventory data is protected with database transactions, ledgers, and audit trails where the domain requires them.",
              },
              {
                title: "Testing and operations",
                body: "Automated tests cover critical business rules, and production systems include scheduled jobs, monitoring, and backup routines.",
              },
              {
                title: "Maintainability",
                body: "Modular structure, consistent conventions, and readable code so the systems can be extended by teams, not just their author.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-line bg-surface p-6"
              >
                <h3 className="text-base font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience snapshot */}
      <section className="border-t border-line" aria-labelledby="experience">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <SectionHeading
            id="experience"
            title="Earlier experience"
            description="Team-based engineering work that preceded and complements the flagship projects."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {experience.map((project) => (
              <article
                key={project.slug}
                className="flex flex-col gap-4 rounded-2xl border border-line bg-surface p-6"
              >
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="text-lg font-semibold tracking-tight text-foreground">
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
                <p className="text-sm leading-6 text-muted">{project.summary}</p>
                <p className="text-sm text-subtle">
                  Role:{" "}
                  <span className="text-muted">{project.role}</span>
                </p>
                <TechTags technologies={project.technologies} />
                <Link
                  href={`/projects/${project.slug}`}
                  className="mt-auto inline-flex w-fit items-center gap-2 pt-2 text-sm font-medium text-accent transition-colors hover:text-accent-2"
                >
                  Read case study
                  <span aria-hidden="true">→</span>
                </Link>
              </article>
            ))}
          </div>
          <p className="mt-6 text-sm text-subtle">
            These were team efforts — contributions are described as such in
            each case study.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section className="border-t border-line" aria-labelledby="contact">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <SectionHeading
            id="contact"
            title="Contact"
            description="For project inquiries, collaboration, or questions about the work documented here."
          />
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
            <a
              href="https://github.com/Nanguti1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 w-fit items-center rounded-full border border-line px-6 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              GitHub — Nanguti1
            </a>
            <Link
              href="/contact"
              className="inline-flex h-11 w-fit items-center rounded-full border border-line px-6 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              Contact page
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
