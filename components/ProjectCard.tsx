import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import type { Project } from "@/data/projects";
import { Badge } from "@/components/Badge";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex h-full flex-col rounded-lg border border-slate-200 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:border-blue-200">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <Badge>{project.category}</Badge>
        {project.link ? (
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-sm font-semibold text-accent hover:text-blue-700"
          >
            Visit
            <ArrowUpRight className="h-4 w-4" />
          </a>
        ) : null}
      </div>
      <h3 className="mt-5 text-2xl font-semibold tracking-normal text-ink">{project.title}</h3>
      <div className="mt-5 space-y-4 text-sm leading-7 text-muted">
        <p>
          <span className="font-semibold text-charcoal">Problem: </span>
          {project.problem}
        </p>
        <p>
          <span className="font-semibold text-charcoal">Solution: </span>
          {project.solution}
        </p>
      </div>
      <div className="mt-6 flex flex-wrap gap-2">
        {project.tools.map((tool) => (
          <span key={tool} className="rounded-md bg-slate-100 px-3 py-1 text-xs font-medium text-charcoal">
            {tool}
          </span>
        ))}
      </div>
      <div className="mt-6 border-t border-slate-200 pt-5">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">Outcomes</p>
        <ul className="mt-3 space-y-2">
          {project.outcomes.map((outcome) => (
            <li key={outcome} className="flex gap-2 text-sm leading-6 text-muted">
              <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-accent" />
              <span>{outcome}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
