import type { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";

export const metadata: Metadata = {
  title: "About",
  description: "About Kevin Wanyonyi — full-stack software engineer.",
};

export default function AboutPage() {
  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-24">
      <SectionHeading
        title="About"
        description="Professional background content is being written. This page is a temporary placeholder."
      />
    </main>
  );
}
