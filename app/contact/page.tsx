import type { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Kevin Wanyonyi.",
};

export default function ContactPage() {
  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-24">
      <SectionHeading
        title="Contact"
        description="Contact details and links are being finalized. This page is a temporary placeholder."
      />
      <p className="text-base leading-7 text-muted">
        GitHub:{" "}
        <a
          href="https://github.com/Nanguti1"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:text-accent-2"
        >
          github.com/Nanguti1
        </a>
      </p>
    </main>
  );
}
