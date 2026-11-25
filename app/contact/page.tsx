import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { ContactMethodCard } from "@/components/contact-method-card";
import { ContactForm } from "@/components/contact-form";
import { TechTags } from "@/components/tech-tags";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Kevin Wanyonyi — engineering portfolio. Email, phone, LinkedIn and GitHub.",
};

const fitAreas = [
  {
    title: "Business systems",
    body: "Insurance, retail and operations tooling.",
    technologies: ["Laravel", "PHP", "MySQL"],
  },
  {
    title: "Storefronts & payments",
    body: "Customer-facing commerce with M-PESA.",
    technologies: ["React", "Next.js", "M-PESA"],
  },
  {
    title: "Marketplaces & admin",
    body: "Venue platforms and administration tooling.",
    technologies: ["Inertia", "Laravel Nova", "TypeScript"],
  },
];

const checklist = [
  "The project goal or problem you're trying to solve",
  "A rough timeline or deadline",
  "Your preferred way to stay in touch",
];

function stripProtocol(url: string) {
  return url.replace(/^https?:\/\//, "").replace(/\/$/, "");
}

export default function ContactPage() {
  const { email, phone, linkedin, github, website, availability } =
    siteConfig.contact;

  return (
    <main className="flex-1">
      {/* Page header */}
      <section className="border-b border-line">
        <div className="mx-auto w-full max-w-6xl px-6 pb-16 pt-16 sm:pb-24 sm:pt-24">
          <Reveal>
            <p className="mb-6 font-mono text-xs uppercase tracking-[0.08em] text-accent-2">
              Contact
            </p>
            <h1 className="text-[clamp(2rem,4vw,3rem)] font-semibold leading-tight tracking-[-0.02em] text-foreground">
              Let&apos;s talk
            </h1>
            <p className="mt-6 max-w-prose text-xl leading-8 text-foreground">
              For project inquiries, collaboration, or questions about the work
              documented in this portfolio.
            </p>
            {availability ? (
              <p className="mt-8 inline-flex items-center gap-3 rounded-full border border-line bg-surface px-4 py-2">
                <span
                  className="h-1.5 w-1.5 animate-pulse-soft rounded-full bg-accent-2"
                  aria-hidden="true"
                />
                <span className="text-sm font-medium text-foreground">
                  {availability}
                </span>
              </p>
            ) : null}
          </Reveal>
        </div>
      </section>

      {/* Contact methods + form */}
      <section className="border-b border-line">
        <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 py-16 sm:py-24 lg:grid-cols-[3fr_2fr] lg:gap-16">
          <Reveal>
            <div className="grid gap-6 sm:grid-cols-2">
              {email ? (
                <ContactMethodCard
                  label="Email"
                  value={email}
                  href={`mailto:${email}`}
                  ariaLabel={`Email Kevin Wanyonyi at ${email}`}
                  copyValue={email}
                />
              ) : null}
              {phone ? (
                <ContactMethodCard
                  label="Phone"
                  value={phone.display}
                  href={phone.href}
                  ariaLabel={`Call Kevin Wanyonyi at ${phone.display}`}
                  copyValue={phone.display}
                />
              ) : null}
              {linkedin ? (
                <ContactMethodCard
                  label="LinkedIn"
                  value={stripProtocol(linkedin)}
                  href={linkedin}
                  ariaLabel="Kevin Wanyonyi on LinkedIn (opens in new tab)"
                  external
                />
              ) : null}
              <ContactMethodCard
                label="GitHub"
                value={stripProtocol(github)}
                href={github}
                ariaLabel="Kevin Wanyonyi on GitHub (opens in new tab)"
                external
              />
              {website ? (
                <div className="sm:col-span-2">
                  <ContactMethodCard
                    label="Website"
                    value={stripProtocol(website)}
                    href={website}
                    ariaLabel="Kevin Wanyonyi's personal website (opens in new tab)"
                    external
                  />
                </div>
              ) : null}
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="rounded-2xl border border-line bg-surface p-6 sm:p-8">
              <h2 className="text-xl font-semibold tracking-tight text-foreground">
                Start a conversation
              </h2>
              <p className="mt-2 text-sm text-muted">
                Tell me what you&apos;re working on — the form opens your email
                app.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
              <div className="mt-8 border-t border-line pt-6">
                <h3 className="font-mono text-xs uppercase tracking-[0.08em] text-subtle">
                  What to include
                </h3>
                <ul className="mt-4 flex flex-col gap-3">
                  {checklist.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-sm leading-6 text-muted"
                    >
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-subtle"
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Good fits */}
      <section className="border-b border-line">
        <div className="mx-auto w-full max-w-6xl px-6 py-16 sm:py-24">
          <Reveal>
            <h2 className="mb-2 font-mono text-xs uppercase tracking-[0.08em] text-subtle">
              Good fits for a conversation
            </h2>
            <p className="mb-10 max-w-prose text-body text-muted">
              The kind of work documented across this portfolio.
            </p>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-3">
            {fitAreas.map((area, i) => (
              <Reveal key={area.title} delay={i * 100}>
                <div className="h-full rounded-xl border border-line bg-surface p-6">
                  <h3 className="text-base font-semibold tracking-tight text-foreground">
                    {area.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{area.body}</p>
                  <div className="mt-4">
                    <TechTags technologies={area.technologies} />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Closing band */}
      <section className="border-t border-line bg-surface">
        <div className="mx-auto w-full max-w-6xl px-6 py-16 sm:py-24">
          <Reveal>
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-semibold leading-tight tracking-[-0.02em] text-foreground">
              See the work first
            </h2>
            <p className="mt-4 max-w-prose text-body text-muted">
              Case studies of production business systems — storefronts,
              insurance platforms, marketplaces, and operations tooling.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/projects"
                className="inline-flex h-12 items-center rounded-full bg-accent px-8 text-sm font-medium text-background transition-colors hover:bg-accent-bright"
              >
                View projects
              </Link>
              <Link
                href="/about"
                className="inline-flex h-12 items-center rounded-full border border-line-strong px-8 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
              >
                About me
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
