import { ArrowRight, ClipboardCheck, FileText, Flag, Layers3 } from "lucide-react";
import type { Diagram } from "@/data/caseStudies";
import type { Language } from "@/data/content";

const themes = {
  pipeline: "border-blue-200/70 bg-blue-50/70 text-blue-700 dark:border-blue-400/20 dark:bg-blue-400/10 dark:text-blue-200",
  board: "border-violet-200/70 bg-violet-50/70 text-violet-700 dark:border-violet-400/20 dark:bg-violet-400/10 dark:text-violet-200",
  ledger: "border-teal-200/70 bg-teal-50/70 text-teal-700 dark:border-teal-400/20 dark:bg-teal-400/10 dark:text-teal-200"
};
const stepIcons = [FileText, ClipboardCheck, Flag];

export function CaseStudyDiagram({ diagram, language }: { diagram: Diagram; language: Language }) {
  const isFa = language === "fa";
  return (
    <figure className="overflow-hidden rounded-xl border border-slate-200 bg-slate-50 p-3 dark:border-slate-700 dark:bg-[#0a1525] sm:p-4">
      <figcaption className="flex flex-wrap items-center justify-between gap-2">
        <span className="text-sm font-semibold leading-6 text-navy dark:text-slate-100">{diagram.title}</span>
        <span className={`rounded-md border px-2 py-1 text-[10px] font-semibold ${themes[diagram.kind]}`}>
          {isFa ? "نمای شماتیک · نمونهٔ ساختگی" : "Diagram · fictional example"}
        </span>
      </figcaption>
      {diagram.kind === "ledger" ? (
        <ol className="mt-3 space-y-1.5">
          {diagram.steps.map((step, index) => (
            <li key={step} className="flex min-h-8 items-center gap-2 rounded-md border border-slate-200 bg-white px-2.5 py-1.5 text-xs font-medium leading-5 text-navy dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100">
              <span className={`grid h-5 w-5 shrink-0 place-items-center rounded border text-[10px] ${themes.ledger}`} aria-hidden="true">{index + 1}</span>
              {step}
            </li>
          ))}
        </ol>
      ) : (
        <ol className="mt-3 grid grid-cols-3 gap-2">
          {diagram.steps.map((step, index) => {
            const Icon = stepIcons[index];
            return (
              <li key={step} className="relative flex min-h-[88px] min-w-0 flex-col items-center justify-center gap-2 rounded-md border border-slate-200 bg-white px-1.5 py-2 text-center text-[11px] font-semibold leading-5 text-navy dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 sm:text-xs">
                <span className={`grid h-7 w-7 place-items-center rounded-md border ${themes[diagram.kind]}`} aria-hidden="true">
                  <Icon className="h-3.5 w-3.5" />
                </span>
                {step}
                {diagram.kind === "pipeline" && index < diagram.steps.length - 1 ? (
                  <ArrowRight className="absolute -end-2 top-1/2 z-10 hidden h-3.5 w-3.5 -translate-y-1/2 rounded-sm bg-slate-50 text-accent dark:bg-slate-900 dark:text-blue-200 sm:block rtl:rotate-180" aria-hidden="true" />
                ) : null}
              </li>
            );
          })}
        </ol>
      )}
      <div className="mt-3 flex items-start gap-2 border-t border-slate-200 pt-3 text-xs leading-5 dark:border-slate-700">
        <Layers3 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent dark:text-blue-200" aria-hidden="true" />
        <div>
          <span className="font-semibold text-navy dark:text-slate-100">{diagram.example[0]}</span>
          <span className="ms-2 muted-copy">{diagram.example[1]}</span>
        </div>
      </div>
    </figure>
  );
}
