import type { Metadata } from "next";
import { caseStudies, caseStudySlugs } from "@/data/caseStudies";
import { ProjectDetailClient } from "./ProjectDetailClient";

type ProjectPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return caseStudySlugs.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: ProjectPageProps): Metadata {
  const project = caseStudies.en.find((item) => item.slug === params.slug);
  const title = project ? `${project.title} | Ilia Behboodi` : "Project Case Study | Ilia Behboodi";
  const description = project?.summary ?? "AI automation and digital systems case study by Ilia Behboodi.";
  const url = `https://iliabehboodiportfolio.vercel.app/projects/${params.slug}`;

  return {
    title,
    description,
    alternates: {
      canonical: url
    },
    openGraph: {
      title,
      description,
      url,
      type: "article"
    }
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  return <ProjectDetailClient slug={params.slug} />;
}
