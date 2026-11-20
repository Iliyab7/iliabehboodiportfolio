import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FeaturedProjectVisual } from "@/components/FeaturedProjectVisual";
import type { CaseStudy } from "@/data/caseStudies";
import type { Language } from "@/data/content";
import type { FeaturedProject } from "@/data/featuredProjects";

export function FeaturedProjectCard({ feature, project, language }: { feature: FeaturedProject; project: CaseStudy; language: Language }) {
  const summary = feature[language];
  const callToAction = language === "fa" ? "مطالعهٔ موردی" : "View case study";

  return (
    <article className="card-premium card-premium-hover flex h-full min-w-0 flex-col rounded-2xl p-4 sm:p-5">
      <FeaturedProjectVisual feature={feature} language={language} />
      <p className="mt-4 text-xs font-semibold text-accent dark:text-blue-200">{summary.label}</p>
      <h3 className="mt-1.5 text-xl font-semibold leading-snug text-ink dark:text-white sm:text-2xl">{project.title}</h3>
      <p className="mt-2 text-sm leading-7 muted-copy">{summary.description}</p>
      <div className="mt-auto pt-3">
        <Link
          href={`/projects/${project.slug}`}
          aria-label={`${callToAction} · ${project.title}`}
          className="inline-flex min-h-11 items-center gap-2 rounded-md text-sm font-semibold text-accent hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 dark:text-blue-200"
        >
          {callToAction}
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
