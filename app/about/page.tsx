import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Kevin Wanyonyi — full-stack software engineer building web applications and business systems.",
};

export default function AboutPage() {
  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-16 sm:py-24">
      <SectionHeading
        title="About"
        description="Full-stack software engineer focused on practical web applications and business systems."
      />

      <div className="space-y-10 text-base leading-8 text-muted">
        <section>
          <h2 className="mb-3 text-xl font-semibold text-foreground">
            Background
          </h2>
          <p>
            Kevin Wanyonyi is a full-stack software engineer who designs and
            builds web applications and business systems end to end — backend
            services, APIs, admin tooling, and customer-facing frontends.
            Recent work spans Laravel and PHP backends, React and Next.js
            frontends, Inertia-based applications, MySQL data modelling, and
            third-party integrations such as M-PESA.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-semibold text-foreground">
            Selected work
          </h2>
          <p className="mb-4">
            This portfolio documents six projects and experiences, led by two
            flagship systems:
          </p>
          <ul className="space-y-2">
            {projects.map((project) => (
              <li key={project.slug}>
                <Link
                  href={`/projects/${project.slug}`}
                  className="text-accent transition-colors hover:text-accent-bright"
                >
                  {project.title}
                </Link>{" "}
                <span className="text-subtle">— {project.summary}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-semibold text-foreground">
            Experience
          </h2>
          <p>
            Earlier roles were team-based: core development on the
            MwalimuPLUS and Ajira Connect education platforms (2018–2022,
            including mentoring interns), and contributions to HR and
            inventory systems at AfriQ Networks. The portfolio distinguishes
            personal ownership from team contributions throughout.
          </p>
        </section>
      </div>
    </main>
  );
}
