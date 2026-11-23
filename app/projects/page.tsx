import type { Metadata } from "next";
import { ProjectRow } from "@/components/project-row";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected software projects and engineering contributions by Kevin Wanyonyi.",
};

export default function ProjectsPage() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-6 py-24">
      <SectionHeading
        title="Projects"
        description="Six selected projects and professional experiences, presented as detailed engineering case studies."
      />
      <div className="flex flex-col gap-6">
        {featured.map((project) => (
          <ProjectRow key={project.slug} project={project} featured />
        ))}
        {rest.map((project) => (
          <ProjectRow key={project.slug} project={project} />
        ))}
      </div>
    </main>
  );
}
