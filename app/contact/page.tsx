import type { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Kevin Wanyonyi — engineering portfolio.",
};

export default function ContactPage() {
  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-16 sm:py-24">
      <SectionHeading
        title="Contact"
        description="For project inquiries, collaboration, or questions about the work documented in this portfolio."
      />
      <div className="flex flex-col gap-4">
        <a
          href="https://github.com/Nanguti1"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-11 w-fit items-center rounded-full border border-line px-6 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
        >
          GitHub — Nanguti1
        </a>
        <p className="text-sm text-subtle">
          Portfolio:{" "}
          <span className="font-mono text-muted">nanguti1.github.io</span>
        </p>
      </div>
    </main>
  );
}
