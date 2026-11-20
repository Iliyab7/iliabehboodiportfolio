import { ArrowUpRight } from "lucide-react";

type ProjectEvidenceProps = {
  items: readonly { title: string; description: string; href: string }[];
};

export function ProjectEvidence({ items }: ProjectEvidenceProps) {
  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <li key={item.href}>
          <a href={item.href} target="_blank" rel="noopener noreferrer" className="card-premium card-premium-hover block h-full rounded-lg p-5">
            <span className="flex items-start justify-between gap-3">
              <span className="text-base font-semibold text-ink dark:text-white">{item.title}</span>
              <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-accent dark:text-blue-200" aria-hidden="true" />
            </span>
            <span className="mt-3 block text-sm leading-7 muted-copy">{item.description}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
