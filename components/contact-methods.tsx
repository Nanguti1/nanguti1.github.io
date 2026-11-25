import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

const buttonBase =
  "inline-flex h-12 w-fit items-center rounded-full border border-line-strong px-7 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent";

export function ContactMethods() {
  const { email, linkedin, github, availability } = siteConfig.contact;
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap items-center gap-4">
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-12 items-center rounded-full bg-accent px-7 text-sm font-medium text-background transition-colors hover:bg-accent-bright"
        >
          GitHub — Nanguti1
        </a>
        {email ? (
          <a href={`mailto:${email}`} className={buttonBase}>
            {email}
          </a>
        ) : null}
        {linkedin ? (
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonBase}
          >
            LinkedIn
          </a>
        ) : null}
        <Link href="/contact" className={buttonBase}>
          Contact page
        </Link>
      </div>
      <p className="text-sm text-subtle">
        <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-accent-2 align-middle" aria-hidden="true" />
        {availability}
      </p>
    </div>
  );
}
