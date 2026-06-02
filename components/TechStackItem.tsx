import { CheckCircle2 } from "lucide-react";

export function TechStackItem({ name }: { name: string }) {
  return (
    <div className="flex items-center gap-3 rounded-md border border-slate-200 bg-white px-4 py-3 transition hover:border-blue-200 dark:border-slate-700/70 dark:bg-slate-950/60 dark:hover:border-blue-400/40">
      <CheckCircle2 className="h-4 w-4 shrink-0 text-accent" />
      <span className="text-sm font-medium text-charcoal dark:text-slate-200">{name}</span>
    </div>
  );
}
