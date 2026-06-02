import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import type { CaseStudy } from "@/data/caseStudies";
import { Badge } from "@/components/Badge";
import { ProjectVisual } from "@/components/ProjectVisual";

type ProjectCardProps = {
  project: CaseStudy;
  labels: {
    problem: string;
    solution: string;
    outcomes: string;
    visit: string;
    caseStudy: string;
  };
};

export function ProjectCard({ project, labels }: ProjectCardProps) {
  return (
    <>
    <article className="card-premium card-premium-hover group relative flex h-full flex-col overflow-hidden rounded-lg p-4 md:hidden">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <Badge>{project.category}</Badge>
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-1 text-xs font-semibold text-accent"
        >
          {labels.caseStudy}
          <ArrowUpRight className="h-3.5 w-3.5" />
        </Link>
      </div>
      <div className="mt-4">
        <ProjectVisual type={project.visual} />
      </div>
      <h3 className="mt-4 text-xl font-semibold tracking-normal text-ink dark:text-white">{project.title}</h3>
      <p className="mt-3 mobile-clamp-2 text-sm leading-7 muted-copy">{project.summary}</p>
      <ul className="mt-4 space-y-2">
        {project.outcomes.slice(0, 2).map((outcome) => (
          <li key={outcome} className="flex gap-2 text-xs leading-6 muted-copy">
            <CheckCircle2 className="mt-1 h-3.5 w-3.5 shrink-0 text-accent" />
            <span>{outcome}</span>
          </li>
        ))}
      </ul>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.tools.slice(0, 3).map((tool) => (
          <span key={tool} className="rounded-md bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-charcoal dark:bg-slate-800 dark:text-slate-200">
            {tool}
          </span>
        ))}
      </div>
    </article>

    <article className="card-premium card-premium-hover group relative hidden h-full flex-col overflow-hidden rounded-lg p-6 md:flex">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-600 via-cyan-400 to-transparent opacity-0 transition group-hover:opacity-100" />
      <div className="flex flex-wrap items-center justify-between gap-3">
        <Badge>{project.category}</Badge>
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-1 text-sm font-semibold text-accent hover:text-blue-700 dark:hover:text-blue-200"
        >
          {labels.caseStudy}
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
      <div className="mt-5">
        <ProjectVisual type={project.visual} />
      </div>
      <div className="mt-4 flex flex-wrap items-center gap-3">
        {project.link ? (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm font-semibold text-accent hover:text-blue-700"
          >
            {labels.visit}
            <ArrowUpRight className="h-4 w-4" />
          </a>
        ) : (
          <span className="rounded-md border border-slate-200 px-3 py-1 text-xs font-semibold text-muted dark:border-slate-700 dark:text-slate-400">
            {labels.caseStudy}
          </span>
        )}
      </div>
      <h3 className="mt-5 text-2xl font-semibold tracking-normal text-ink dark:text-white">{project.title}</h3>
      <div className="mt-5 grid gap-4 text-sm leading-7 text-muted">
        <div className="subtle-card rounded-md p-4">
          <p className="mb-1 font-semibold text-charcoal dark:text-slate-100">{labels.problem}</p>
          {project.problem}
        </div>
        <div className="rounded-md border border-slate-200 bg-white p-4 dark:border-slate-700/70 dark:bg-slate-950/50">
          <p className="mb-1 font-semibold text-charcoal dark:text-slate-100">{labels.solution}</p>
          {project.solution}
        </div>
      </div>
      <div className="mt-6 flex flex-wrap gap-2">
        {project.tools.map((tool) => (
          <span key={tool} className="rounded-md bg-slate-100 px-3 py-1 text-xs font-medium text-charcoal dark:bg-slate-800 dark:text-slate-200">
            {tool}
          </span>
        ))}
      </div>
      <div className="mt-6 border-t border-slate-200 pt-5 dark:border-slate-700/70">
        <p className="text-xs font-semibold text-muted">{labels.outcomes}</p>
        <ul className="mt-3 space-y-2">
          {project.outcomes.map((outcome) => (
            <li key={outcome} className="flex gap-2 text-sm leading-6 muted-copy">
              <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-accent" />
              <span>{outcome}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
    </>
  );
}
