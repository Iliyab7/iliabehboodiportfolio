import { ArrowRight, BookOpen, CheckCircle2, ClipboardCheck, FileText, Package, Search, ShoppingBag } from "lucide-react";
import type { Language } from "@/data/content";
import type { FeaturedProject } from "@/data/featuredProjects";

const appearance = {
  market: "bg-[#101d36] text-blue-300",
  library: "bg-[#112c2b] text-teal-200",
  production: "bg-[#2b2017] text-amber-200",
  delivery: "bg-[#241d37] text-violet-200",
  ledger: "bg-[#122b30] text-cyan-200",
  store: "bg-[#2c202c] text-rose-200"
};

const libraryIcons = [FileText, ClipboardCheck, BookOpen];
const storeIcons = [ShoppingBag, Package, ClipboardCheck];
const bars = [30, 47, 40, 65, 54, 79, 69];

export function FeaturedProjectVisual({ feature, language }: { feature: FeaturedProject; language: Language }) {
  const example = feature[language];
  const isFa = language === "fa";
  const { variant } = feature;

  return (
    <figure className={`relative overflow-hidden rounded-xl p-4 sm:p-5 ${appearance[variant]}`}>
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-20 [background-image:linear-gradient(to_right,#94a3b833_1px,transparent_1px),linear-gradient(to_bottom,#94a3b833_1px,transparent_1px)] [background-size:24px_24px]" />
      <figcaption className="relative flex flex-wrap items-start justify-between gap-x-2 gap-y-1">
        <span className="text-xs font-bold leading-5 text-white sm:text-sm">{example.visualTitle}</span>
        <span className="text-[11px] font-medium leading-5 text-slate-300">{isFa ? "دادهٔ ساختگی" : "Fictional data"}</span>
      </figcaption>
      <div className="relative mt-4 flex min-h-[112px] flex-col justify-center">
        {variant === "library" ? (
          <ol className="grid grid-cols-3 gap-2">
            {example.rows.map(([step, value], index) => {
              const Icon = libraryIcons[index];
              return (
                <li key={step} className="relative min-w-0 rounded-lg border border-white/15 bg-white/10 px-2 py-3 sm:px-3">
                  <Icon className="mb-2 h-4 w-4" aria-hidden="true" />
                  <span className="block text-xs font-bold leading-5 text-white">{step}</span>
                  <span className="block text-[11px] leading-5 text-slate-300">{value}</span>
                  {index < example.rows.length - 1 ? (
                    <ArrowRight className="absolute -end-2.5 top-1/2 z-10 hidden h-3.5 w-3.5 -translate-y-1/2 rounded bg-[#112c2b] sm:block rtl:rotate-180" aria-hidden="true" />
                  ) : null}
                </li>
              );
            })}
          </ol>
        ) : variant === "production" ? (
          <>
            <div aria-hidden="true" className="flex h-[82px] items-end gap-2 border-b border-white/20 bg-[repeating-linear-gradient(to_top,transparent_0,transparent_20px,#ffffff19_20px,#ffffff19_21px)] px-2">
              {bars.map((height) => (
                <div key={height} className="flex-1 rounded-t bg-gradient-to-t from-amber-500/50 to-amber-200" style={{ height: `${height}%` }} />
              ))}
            </div>
            <p className="mt-2 text-[11px] leading-5 text-slate-200">{example.rows.map(([label, value]) => `${label} · ${value}`).join("  /  ")}</p>
          </>
        ) : (
          <ul className={`divide-y divide-white/10 border bg-black/20 ${variant === "store" ? "mx-auto w-full max-w-[250px] rounded-2xl border-2 border-rose-200/30 p-1" : "rounded-lg border-white/15"}`}>
            {example.rows.map(([label, value], index) => {
              const Icon = variant === "market" ? Search : variant === "delivery" ? (index < 2 ? CheckCircle2 : ClipboardCheck) : variant === "store" ? storeIcons[index] : FileText;
              return (
                <li key={label} className="flex min-h-9 items-center justify-between gap-2 px-2 py-1.5 sm:px-3">
                  <span className="flex items-center gap-2 text-xs font-semibold leading-5 text-white">
                    <Icon className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                    {label}
                  </span>
                  <span className="text-end text-[11px] font-semibold leading-5">
                    {variant === "ledger" && index === 0 ? <CheckCircle2 className="me-1 inline h-3 w-3" aria-hidden="true" /> : null}
                    {value}
                  </span>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </figure>
  );
}
