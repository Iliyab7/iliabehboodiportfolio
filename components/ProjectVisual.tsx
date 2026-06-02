import type { CaseStudy } from "@/data/caseStudies";

const visualBySlug: Record<CaseStudy["slug"], CaseStudy["visual"]> = {
  "mining-operations-management-system": "mining",
  "mahed-group-website": "website",
  "shayan-quarry-website": "quarry",
  "management-ai-chatbot": "chatbot",
  "export-logistics-container-planning": "logistics"
};

export function ProjectVisual({ type, slug }: { type?: CaseStudy["visual"]; slug?: CaseStudy["slug"] }) {
  const visualType = type ?? (slug ? visualBySlug[slug] : undefined);

  return (
    <div className="relative overflow-hidden rounded-lg border border-slate-200 bg-slate-50 p-4 dark:border-slate-700/70 dark:bg-slate-950/70">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(37,99,235,0.14),transparent_34%),radial-gradient(circle_at_80%_80%,rgba(6,182,212,0.10),transparent_30%)]" />
      {visualType === "mining" ? <MiningVisual /> : null}
      {visualType === "website" ? <WebsiteVisual /> : null}
      {visualType === "quarry" ? <QuarryVisual /> : null}
      {visualType === "chatbot" ? <ChatbotVisual /> : null}
      {visualType === "logistics" ? <LogisticsVisual /> : null}
    </div>
  );
}

function MiningVisual() {
  return (
    <div className="relative grid gap-3">
      <div className="grid grid-cols-4 gap-2">
        {["Date", "Shift", "Tons", "KPI"].map((item) => (
          <div key={item} className="rounded bg-white/90 p-2 text-xs font-semibold text-muted dark:bg-slate-900 dark:text-slate-400">
            {item}
          </div>
        ))}
      </div>
      {Array.from({ length: 4 }).map((_, row) => (
        <div key={row} className="grid grid-cols-4 gap-2">
          {Array.from({ length: 4 }).map((__, col) => (
            <div key={col} className="h-8 rounded bg-white/80 dark:bg-slate-800" />
          ))}
        </div>
      ))}
      <div className="mt-2 grid grid-cols-3 gap-2">
        {[72, 84, 91].map((value) => (
          <div key={value} className="rounded-md border border-blue-100 bg-white/90 p-3 dark:border-blue-400/20 dark:bg-slate-900">
            <div className="h-2 rounded-full bg-blue-100 dark:bg-slate-800">
              <div className="h-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400" style={{ width: `${value}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function WebsiteVisual() {
  return (
    <div className="relative rounded-md border border-slate-200 bg-white/90 p-3 dark:border-slate-700 dark:bg-slate-900">
      <div className="mb-3 flex gap-1">
        <span className="h-2 w-2 rounded-full bg-red-300" />
        <span className="h-2 w-2 rounded-full bg-yellow-300" />
        <span className="h-2 w-2 rounded-full bg-green-300" />
      </div>
      <div className="grid gap-3 md:grid-cols-[1.2fr_0.8fr]">
        <div>
          <div className="h-5 w-2/3 rounded bg-slate-200 dark:bg-slate-700" />
          <div className="mt-3 h-3 w-full rounded bg-slate-100 dark:bg-slate-800" />
          <div className="mt-2 h-3 w-4/5 rounded bg-slate-100 dark:bg-slate-800" />
          <div className="mt-4 h-8 w-28 rounded bg-blue-600" />
        </div>
        <div className="h-28 rounded bg-gradient-to-br from-slate-200 to-blue-100 dark:from-slate-800 dark:to-blue-950" />
      </div>
    </div>
  );
}

function QuarryVisual() {
  return (
    <div className="relative grid gap-3">
      <div className="h-28 rounded-lg bg-gradient-to-br from-slate-200 via-slate-100 to-blue-100 dark:from-slate-800 dark:via-slate-900 dark:to-blue-950" />
      <div className="grid grid-cols-3 gap-2">
        {["Product", "Export", "Trust"].map((item) => (
          <div key={item} className="rounded-md bg-white/90 p-3 text-center text-xs font-semibold text-muted dark:bg-slate-900 dark:text-slate-400">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

function ChatbotVisual() {
  return (
    <div className="relative grid gap-3">
      <div className="max-w-[80%] rounded-lg bg-white p-3 text-xs text-muted dark:bg-slate-900 dark:text-slate-300">
        Production status this week?
      </div>
      <div className="ms-auto max-w-[86%] rounded-lg bg-blue-600 p-3 text-xs text-white">
        KPI summary ready. Downtime decreased and output is stable.
      </div>
      <div className="grid grid-cols-3 gap-2">
        {[90, 76, 84].map((item) => (
          <div key={item} className="rounded-md bg-white/90 p-3 dark:bg-slate-900">
            <p className="text-lg font-semibold text-ink dark:text-white">{item}%</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function LogisticsVisual() {
  return (
    <div className="relative grid grid-cols-5 gap-2">
      {Array.from({ length: 25 }).map((_, index) => (
        <div
          key={index}
          className={`aspect-square rounded border dark:border-slate-700 ${
            index % 4 === 0 ? "bg-blue-500/80" : index % 3 === 0 ? "bg-cyan-400/70" : "bg-white/90 dark:bg-slate-900"
          }`}
        />
      ))}
    </div>
  );
}
