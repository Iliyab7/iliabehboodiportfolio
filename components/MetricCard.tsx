type MetricCardProps = {
  value: string;
  label: string;
  lang?: "en" | "fa";
};

export function MetricCard({ value, label, lang = "en" }: MetricCardProps) {
  return (
    <div className="card-premium card-premium-hover group relative overflow-hidden rounded-lg p-6">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-slate-300 opacity-80" />
      <p className="text-4xl font-semibold tracking-normal text-ink transition group-hover:text-accent dark:text-white">{value}</p>
      <p className={lang === "fa" ? "mt-3 text-sm font-medium muted-copy" : "mt-3 text-sm font-medium uppercase tracking-[0.14em] text-muted dark:text-slate-400"}>
        {label}
      </p>
    </div>
  );
}
