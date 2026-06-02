import type { ReactNode } from "react";

export function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-md border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-semibold text-accent dark:border-blue-400/20 dark:bg-blue-400/10 dark:text-blue-200">
      {children}
    </span>
  );
}
