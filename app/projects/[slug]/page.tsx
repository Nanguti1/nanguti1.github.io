import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SectionHeading } from "@/components/section-heading";
import { getProject, projects } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-6 py-24">
      <SectionHeading
        title={project.title}
        description="Detailed case-study content is being implemented — this page is a temporary placeholder."
      />
    </main>
  );
}
