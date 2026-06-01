import { CheckCircle2 } from "lucide-react";

export function TechStackItem({ name }: { name: string }) {
  return (
    <div className="flex items-center gap-3 rounded-md border border-slate-200 bg-white px-4 py-3">
      <CheckCircle2 className="h-4 w-4 shrink-0 text-accent" />
      <span className="text-sm font-medium text-charcoal">{name}</span>
    </div>
  );
}
