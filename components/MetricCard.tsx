type MetricCardProps = {
  value: string;
  label: string;
};

export function MetricCard({ value, label }: MetricCardProps) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:border-blue-200">
      <p className="text-4xl font-semibold tracking-normal text-ink">{value}</p>
      <p className="mt-3 text-sm font-medium uppercase tracking-[0.14em] text-muted">{label}</p>
    </div>
  );
}
