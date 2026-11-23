import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-6 py-24">
      <SectionHeading
        title="Kevin Wanyonyi"
        description="Engineering portfolio. Full content is being implemented — this page is a temporary placeholder."
      />
      <p className="max-w-2xl text-base leading-7 text-muted">
        This portfolio documents selected software projects and engineering
        contributions. Browse the{" "}
        <Link href="/projects" className="text-accent hover:text-accent-2">
          projects index
        </Link>{" "}
        for an overview of the work.
      </p>
    </main>
  );
}
