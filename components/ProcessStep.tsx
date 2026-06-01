type ProcessStepProps = {
  index: number;
  title: string;
};

export function ProcessStep({ index, title }: ProcessStepProps) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-soft">
      <p className="text-sm font-semibold text-accent">{String(index + 1).padStart(2, "0")}</p>
      <h3 className="mt-4 text-xl font-semibold text-ink">{title}</h3>
    </div>
  );
}
