import type { CaseStudy } from "@/data/caseStudies";

type Language = "en" | "fa";

const visualBySlug: Record<string, CaseStudy["visual"]> = {
  "mahed-lead-generation-platform": "lead-platform",
  "mining-operations-management-system": "mining",
  "mahed-group-website": "website",
  "shayan-quarry-website": "quarry",
  "management-ai-chatbot": "chatbot",
  "export-logistics-container-planning": "logistics",
  "international-academy-management-system": "academy"
};

export function ProjectVisual({ type, slug, language = "en" }: { type?: CaseStudy["visual"]; slug?: CaseStudy["slug"]; language?: Language }) {
  const visualType = type ?? (slug ? visualBySlug[slug] : undefined);
  const isFa = language === "fa";

  return (
    <div dir={isFa ? "rtl" : "ltr"} className="relative overflow-hidden rounded-xl border border-slate-200 bg-slate-100/80 p-3 text-left shadow-[0_18px_50px_rgba(15,23,42,0.12)] transition-colors dark:border-slate-700/70 dark:bg-[#050a12] sm:p-4" aria-label={isFa ? "پیش‌نمایش رابط کاربری پروژه" : "Project interface preview"}>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(37,99,235,0.18),transparent_36%),radial-gradient(circle_at_86%_82%,rgba(6,182,212,0.14),transparent_30%)]" />
      <BrowserBar isFa={isFa} />
      <div className="relative mt-3 min-h-[190px] sm:min-h-[220px]">
        {visualType === "lead-platform" ? <LeadPlatformVisual isFa={isFa} /> : null}
        {visualType === "mining" ? <MiningVisual isFa={isFa} /> : null}
        {visualType === "website" ? <WebsiteVisual isFa={isFa} /> : null}
        {visualType === "quarry" ? <QuarryVisual isFa={isFa} /> : null}
        {visualType === "chatbot" ? <ChatbotVisual isFa={isFa} /> : null}
        {visualType === "logistics" ? <LogisticsVisual isFa={isFa} /> : null}
        {visualType === "academy" ? <AcademyVisual isFa={isFa} /> : null}
      </div>
    </div>
  );
}

function BrowserBar({ isFa }: { isFa: boolean }) {
  return (
    <div className="relative flex items-center justify-between rounded-lg border border-white/80 bg-white/90 px-3 py-2 shadow-sm dark:border-slate-700 dark:bg-slate-900/95">
      <div className="flex gap-1.5" aria-hidden="true"><span className="h-2.5 w-2.5 rounded-full bg-[#ff7a59]" /><span className="h-2.5 w-2.5 rounded-full bg-amber-400" /><span className="h-2.5 w-2.5 rounded-full bg-emerald-400" /></div>
      <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[9px] font-semibold text-slate-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 sm:text-[10px]">{isFa ? "نمای زنده پروژه" : "live project preview"}</span>
      <span className="flex items-center gap-1 text-[9px] font-semibold text-emerald-600 dark:text-emerald-300"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />{isFa ? "آنلاین" : "Live"}</span>
    </div>
  );
}

function LeadPlatformVisual({ isFa }: { isFa: boolean }) {
  const labels = isFa
    ? { title: "نبض بازار، در یک نگاه", lead: "بانک لید", search: "جست‌وجوی بازار", report: "گزارش‌ها", qualified: "لید واجد شرایط", markets: "بازار فعال", ready: "گزارش آماده", insight: "فرصت‌های تازه", status: "آماده بررسی" }
    : { title: "Market pulse at a glance", lead: "Lead bank", search: "Market search", report: "Reports", qualified: "Qualified leads", markets: "Active markets", ready: "Ready reports", insight: "Fresh opportunities", status: "Ready to review" };
  return (
    <div className="grid min-h-[220px] grid-cols-[64px_1fr] overflow-hidden rounded-lg border border-slate-200 bg-[#f7f9fc] shadow-sm dark:border-slate-700 dark:bg-slate-950 sm:grid-cols-[92px_1fr]">
      <aside className="bg-[#102b50] p-2 text-[8px] text-blue-100 sm:p-3 sm:text-[10px]">
        <div className="mb-4 flex h-7 w-7 items-center justify-center rounded-lg bg-orange-500 font-black text-white">M</div>
        {[labels.lead, labels.search, labels.report].map((item, index) => <div key={item} className={`mb-2 rounded-md px-1.5 py-2 ${index === 0 ? "bg-white/10 text-white" : "text-blue-200/75"}`}>{item}</div>)}
      </aside>
      <div className="p-3 sm:p-4">
        <div className="flex items-center justify-between gap-2"><div><span className="text-[8px] font-semibold text-blue-500 sm:text-[9px]">MAHED WORKSPACE</span><h4 className="mt-1 text-xs font-black text-slate-900 dark:text-white sm:text-sm">{labels.title}</h4></div><span className="rounded-full bg-emerald-100 px-2 py-1 text-[8px] font-bold text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-300">● {isFa ? "زنده" : "Live"}</span></div>
        <div className="mt-3 grid grid-cols-3 gap-1.5 sm:gap-2">
          {[[labels.qualified, "842"], [labels.markets, "18"], [labels.ready, "24"]].map(([label, value]) => <div key={label} className="rounded-md border border-slate-200 bg-white p-2 dark:border-slate-700 dark:bg-slate-900 sm:p-3"><span className="block text-[7px] text-slate-500 dark:text-slate-400 sm:text-[9px]">{label}</span><strong className="mt-1 block text-sm text-[#102b50] dark:text-white sm:text-lg">{value}</strong></div>)}
        </div>
        <div className="mt-2.5 grid grid-cols-[1.4fr_0.8fr] gap-2">
          <div className="rounded-md border border-slate-200 bg-white p-2 dark:border-slate-700 dark:bg-slate-900"><div className="mb-2 flex justify-between text-[8px] font-bold text-slate-700 dark:text-slate-200"><span>{labels.insight}</span><span className="text-blue-500">↗</span></div>{["Aria Stone", "Nova Marble"].map((name, index) => <div key={name} className="mb-1 flex items-center justify-between rounded bg-slate-50 px-2 py-1.5 text-[7px] dark:bg-slate-800 sm:text-[8px]"><span className="font-bold text-slate-700 dark:text-slate-200">{name}</span><span className="text-emerald-600 dark:text-emerald-300">{index ? labels.status : isFa ? "واجد شرایط" : "Qualified"}</span></div>)}</div>
          <div className="rounded-md bg-[#102b50] p-2 text-white"><span className="text-sm text-orange-400">✦</span><p className="mt-2 text-[8px] font-bold leading-4 sm:text-[9px]">{isFa ? "سیگنال‌های بازار به اقدام تیمی تبدیل می‌شوند." : "Market signals become team action."}</p><div className="mt-3 flex h-9 items-end gap-1">{[55, 78, 46, 88, 68].map((height, index) => <span key={height} className={index === 3 ? "flex-1 rounded-t bg-orange-500" : "flex-1 rounded-t bg-blue-400/70"} style={{ height: `${height}%` }} />)}</div></div>
        </div>
      </div>
    </div>
  );
}

function MiningVisual({ isFa }: { isFa: boolean }) {
  const headers = isFa ? ["تاریخ", "شیفت", "تناژ", "شاخص"] : ["Date", "Shift", "Tons", "KPI"];
  return <div className="grid gap-3 rounded-lg border border-slate-200 bg-white p-3 dark:border-slate-700 dark:bg-slate-900"><div className="flex items-center justify-between"><strong className="text-xs text-slate-800 dark:text-white">{isFa ? "داشبورد عملیات معدن" : "Mining operations dashboard"}</strong><span className="text-[9px] text-emerald-600 dark:text-emerald-300">● {isFa ? "به‌روز" : "Updated"}</span></div><div className="grid grid-cols-4 gap-1.5">{headers.map((item) => <div key={item} className="rounded bg-slate-100 p-2 text-[9px] font-semibold text-slate-500 dark:bg-slate-800 dark:text-slate-300">{item}</div>)}</div>{[0, 1, 2].map((row) => <div key={row} className="grid grid-cols-4 gap-1.5">{[0, 1, 2, 3].map((col) => <div key={col} className={`h-7 rounded ${col === 3 ? "bg-blue-100 dark:bg-blue-500/20" : "bg-slate-50 dark:bg-slate-800/80"}`} />)}</div>)}<div className="grid grid-cols-3 gap-2">{[72, 84, 91].map((value) => <div key={value} className="rounded-md bg-slate-50 p-2 dark:bg-slate-800"><span className="text-[9px] font-bold text-slate-700 dark:text-white">{value}%</span><div className="mt-2 h-1.5 rounded-full bg-slate-200 dark:bg-slate-700"><div className="h-1.5 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400" style={{ width: `${value}%` }} /></div></div>)}</div></div>;
}

function WebsiteVisual({ isFa }: { isFa: boolean }) {
  return <div className="overflow-hidden rounded-lg border border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900"><div className="relative grid min-h-[190px] items-center gap-4 bg-gradient-to-br from-stone-100 via-white to-blue-50 p-5 dark:from-slate-900 dark:via-slate-900 dark:to-blue-950 sm:grid-cols-[1.1fr_0.9fr]"><div><span className="text-[9px] font-bold uppercase tracking-[0.18em] text-amber-700 dark:text-amber-300">MAHED MINING GROUP</span><h4 className="mt-3 text-lg font-black leading-tight text-slate-900 dark:text-white">{isFa ? "سنگ طبیعی؛ مستقیم از معدن" : "Natural stone, direct from the quarry"}</h4><p className="mt-2 text-[9px] leading-4 text-slate-500 dark:text-slate-300">{isFa ? "معرفی چندزبانه محصولات، معادن و ظرفیت صادراتی" : "Multilingual products, quarries and export capability"}</p><span className="mt-4 inline-flex rounded bg-slate-900 px-3 py-2 text-[9px] font-bold text-white dark:bg-blue-500">{isFa ? "مشاهده محصولات" : "Explore products"}</span></div><div className="relative h-36 overflow-hidden rounded-lg bg-gradient-to-br from-stone-300 via-stone-100 to-amber-100 dark:from-slate-700 dark:via-slate-800 dark:to-amber-950"><div className="absolute -bottom-8 left-3 h-28 w-36 -rotate-6 rounded-lg border-4 border-white/70 bg-[linear-gradient(135deg,#d8c7ad,#f4eadc_45%,#aa9274)] shadow-xl" /><div className="absolute right-2 top-3 rounded bg-white/90 px-2 py-1 text-[8px] font-bold text-slate-700">13+ {isFa ? "معدن" : "quarries"}</div></div></div></div>;
}

function QuarryVisual({ isFa }: { isFa: boolean }) {
  const chips = isFa ? ["محصول", "صادرات", "اعتماد"] : ["Product", "Export", "Trust"];
  return <div className="relative overflow-hidden rounded-lg bg-[#17202e] p-4 text-white"><div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_15%,rgba(245,158,11,0.32),transparent_38%)] opacity-60" /><div className="relative"><span className="text-[9px] font-bold text-amber-300">SHAYAN QUARRY</span><h4 className="mt-2 text-lg font-black">{isFa ? "هویت دیجیتال برای یک معدن شاخص" : "A digital identity for a flagship quarry"}</h4><div className="mt-4 h-24 overflow-hidden rounded-lg bg-[linear-gradient(155deg,#cab18e,#efe0c8_50%,#8b7355)]"><div className="h-full w-1/2 skew-x-[-18deg] bg-white/20" /></div><div className="mt-3 grid grid-cols-3 gap-2">{chips.map((item) => <div key={item} className="rounded border border-white/15 bg-white/10 p-2 text-center text-[9px] font-bold">{item}</div>)}</div></div></div>;
}

function ChatbotVisual({ isFa }: { isFa: boolean }) {
  return <div className="grid gap-3 rounded-lg border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-900"><div className="flex items-center gap-2"><span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-xs font-black text-white">AI</span><div><strong className="block text-xs text-slate-800 dark:text-white">{isFa ? "دستیار مدیریتی" : "Management copilot"}</strong><span className="text-[8px] text-emerald-600 dark:text-emerald-300">● {isFa ? "متصل به داده" : "Data connected"}</span></div></div><div className="max-w-[82%] rounded-lg rounded-bl-sm bg-slate-100 p-3 text-[10px] text-slate-600 dark:bg-slate-800 dark:text-slate-300">{isFa ? "وضعیت تولید این هفته چطور بود؟" : "How did production perform this week?"}</div><div className="ms-auto max-w-[88%] rounded-lg rounded-br-sm bg-blue-600 p-3 text-[10px] leading-5 text-white">{isFa ? "خلاصه KPI آماده است؛ توقف کاهش یافته و خروجی پایدار است." : "KPI summary is ready: downtime decreased and output is stable."}</div><div className="grid grid-cols-3 gap-2">{[["90%", isFa ? "تولید" : "Output"], ["76%", isFa ? "تجهیزات" : "Assets"], ["84%", isFa ? "کیفیت" : "Quality"]].map(([value, label]) => <div key={label} className="rounded bg-slate-50 p-2 dark:bg-slate-800"><strong className="block text-sm text-slate-900 dark:text-white">{value}</strong><span className="text-[8px] text-slate-500 dark:text-slate-400">{label}</span></div>)}</div></div>;
}

function LogisticsVisual({ isFa }: { isFa: boolean }) {
  return <div className="rounded-lg border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-900"><div className="flex items-center justify-between"><strong className="text-xs text-slate-800 dark:text-white">{isFa ? "برنامه چیدمان کانتینر" : "Container load plan"}</strong><span className="rounded bg-emerald-100 px-2 py-1 text-[8px] font-bold text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-300">{isFa ? "بهینه" : "Optimized"}</span></div><div className="mt-4 grid grid-cols-6 gap-1.5 rounded-lg border-2 border-slate-300 p-3 dark:border-slate-600">{Array.from({ length: 30 }).map((_, index) => <div key={index} className={`aspect-square rounded-sm border dark:border-slate-700 ${index % 7 === 0 ? "bg-orange-400" : index % 3 === 0 ? "bg-cyan-400/80" : "bg-blue-500/75"}`} />)}</div><div className="mt-3 flex justify-between text-[9px] text-slate-500 dark:text-slate-300"><span>{isFa ? "وزن و ابعاد کنترل شد" : "Weight and dimensions checked"}</span><strong className="text-blue-600 dark:text-blue-300">96%</strong></div></div>;
}

function AcademyVisual({ isFa }: { isFa: boolean }) {
  const items = isFa ? ["لید", "کلاس", "مدرس", "پرداخت"] : ["Lead", "Class", "Teacher", "Pay"];
  return <div className="grid gap-3 rounded-lg border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-900"><div className="flex items-center justify-between"><div><strong className="block text-xs text-slate-800 dark:text-white">{isFa ? "مرکز عملیات آموزشگاه" : "Academy operations hub"}</strong><span className="text-[8px] text-slate-500 dark:text-slate-400">CRM · {isFa ? "زمان‌بندی · مالی" : "Scheduling · Finance"}</span></div><span className="rounded bg-cyan-50 px-2 py-1 text-[9px] font-bold text-cyan-700 dark:bg-cyan-400/10 dark:text-cyan-200">CRM</span></div><div className="grid grid-cols-4 gap-1.5">{items.map((item, index) => <div key={item} className={`rounded p-2 text-center text-[9px] font-bold ${index === 1 ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300"}`}>{item}</div>)}</div><div className="grid grid-cols-7 gap-1.5">{Array.from({ length: 21 }).map((_, index) => <div key={index} className={`h-6 rounded ${index % 5 === 0 ? "bg-blue-500" : index % 4 === 0 ? "bg-cyan-400" : "bg-slate-100 dark:bg-slate-800"}`} />)}</div><div className="grid grid-cols-3 gap-2">{(isFa ? ["نظرسنجی", "ارزیابی", "گزارش"] : ["Survey", "Review", "Report"]).map((item, index) => <div key={item} className="rounded bg-slate-50 p-2 dark:bg-slate-800"><span className="text-[8px] text-slate-500 dark:text-slate-300">{item}</span><div className="mt-2 h-1.5 rounded bg-slate-200 dark:bg-slate-700"><div className="h-full rounded bg-gradient-to-r from-blue-600 to-cyan-400" style={{ width: `${72 + index * 8}%` }} /></div></div>)}</div></div>;
}
