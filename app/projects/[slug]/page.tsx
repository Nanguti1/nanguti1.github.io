import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyClosing, CaseStudyLayout } from "@/components/case-study/case-study-layout";
import { getCaseStudy } from "@/lib/case-studies";
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
  const ogImage =
    project.gallery?.[0]?.src ??
    (project.banner ? project.banner : undefined);
  return {
    title: `${project.title} — Case study`,
    description: project.summary,
    openGraph: {
      title: `${project.title} — Case study`,
      description: project.summary,
      type: "article",
      ...(ogImage ? { images: [{ url: ogImage }] } : {}),
    },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  const caseStudy = getCaseStudy(slug);
  if (!project || !caseStudy) notFound();

  return (
    <>
      <CaseStudyLayout project={project} caseStudy={caseStudy} />
      <CaseStudyClosing />
    </>
  );
}
