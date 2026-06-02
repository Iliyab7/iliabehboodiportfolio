"use client";

import { motion } from "framer-motion";

const nodes = [
  { cx: 82, cy: 82, label: "CRM" },
  { cx: 212, cy: 58, label: "AI" },
  { cx: 332, cy: 106, label: "BI" },
  { cx: 112, cy: 224, label: "OPS" },
  { cx: 276, cy: 252, label: "KPI" }
];

const lines = [
  "M82 82 C128 70 164 62 212 58",
  "M212 58 C258 68 298 84 332 106",
  "M82 82 C92 138 104 178 112 224",
  "M112 224 C166 252 224 260 276 252",
  "M332 106 C328 166 306 214 276 252",
  "M212 58 C214 130 236 196 276 252"
];

export function HeroVisual({ isRtl = false }: { isRtl?: boolean }) {
  return (
    <div className="relative mx-auto w-full max-w-xl" aria-hidden="true">
      <div className="absolute inset-6 rounded-full bg-cyan-200/20 blur-3xl dark:bg-cyan-400/14" />
      <motion.div
        className="relative overflow-hidden rounded-lg border border-white/70 bg-white/75 p-4 shadow-premium backdrop-blur-xl dark:border-slate-700/70 dark:bg-slate-950/70"
        initial={{ opacity: 0, y: 18, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(37,99,235,0.10),transparent_30%),radial-gradient(circle_at_80%_0%,rgba(6,182,212,0.14),transparent_28%)]" />
        <div className="relative grid gap-4">
          <div className="flex items-center justify-between border-b border-slate-200/80 pb-4 dark:border-slate-700/70">
            <div className={isRtl ? "text-right" : "text-left"}>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">System Layer</p>
              <p className="mt-1 text-lg font-semibold text-navy dark:text-white">Digital Operating Model</p>
            </div>
            <motion.div
              className="h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_24px_rgba(34,211,238,0.8)]"
              animate={{ scale: [1, 1.45, 1], opacity: [0.75, 1, 0.75] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          <div className="relative aspect-[1.25] rounded-lg border border-slate-200/80 bg-slate-50/80 dark:border-slate-700/70 dark:bg-slate-900/70">
            <svg className="h-full w-full" viewBox="0 0 420 320" role="img">
              <defs>
                <linearGradient id="flow" x1="0" x2="1" y1="0" y2="0">
                  <stop offset="0%" stopColor="#2563eb" stopOpacity="0.05" />
                  <stop offset="45%" stopColor="#2563eb" stopOpacity="0.65" />
                  <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.1" />
                </linearGradient>
                <filter id="softGlow">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              <path d="M0 64H420M0 128H420M0 192H420M0 256H420M70 0V320M140 0V320M210 0V320M280 0V320M350 0V320" stroke="currentColor" className="text-slate-300 dark:text-slate-700" strokeWidth="1" opacity="0.55" />

              {lines.map((d, index) => (
                <g key={d}>
                  <path d={d} fill="none" stroke="currentColor" className="text-slate-300 dark:text-slate-700" strokeWidth="1.2" />
                  <motion.path
                    d={d}
                    fill="none"
                    stroke="url(#flow)"
                    strokeLinecap="round"
                    strokeWidth="2.4"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: [0, 1, 0], opacity: [0, 1, 0] }}
                    transition={{
                      duration: 3.6,
                      delay: index * 0.35,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </g>
              ))}

              {nodes.map((node, index) => (
                <motion.g
                  key={node.label}
                  animate={{ y: [0, index % 2 === 0 ? -4 : 4, 0] }}
                  transition={{ duration: 3 + index * 0.2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <circle cx={node.cx} cy={node.cy} r="24" fill="currentColor" className="text-white dark:text-slate-950" stroke="#bfdbfe" strokeWidth="1.5" />
                  <circle cx={node.cx} cy={node.cy} r="7" fill="#2563eb" filter="url(#softGlow)" />
                  <text x={node.cx} y={node.cy + 43} textAnchor="middle" fill="#475467" fontSize="12" fontWeight="600">
                    {node.label}
                  </text>
                </motion.g>
              ))}
            </svg>

            <motion.div
              className="absolute left-5 top-5 rounded-md border border-slate-200 bg-white/90 p-3 shadow-soft dark:border-slate-700/70 dark:bg-slate-950/90"
              animate={{ y: [0, -7, 0] }}
              transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
            >
              <p className="text-xs text-muted dark:text-slate-400">Reporting speed</p>
              <p className="mt-1 text-xl font-semibold text-navy dark:text-white">+70%</p>
            </motion.div>

            <motion.div
              className="absolute bottom-5 right-5 rounded-md border border-slate-200 bg-white/90 p-3 shadow-soft dark:border-slate-700/70 dark:bg-slate-950/90"
              animate={{ y: [0, 7, 0] }}
              transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
            >
              <p className="text-xs text-muted dark:text-slate-400">Manual errors</p>
              <p className="mt-1 text-xl font-semibold text-navy dark:text-white">-85%</p>
            </motion.div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {["Automate", "Measure", "Decide"].map((item, index) => (
              <motion.div
                key={item}
                className="rounded-md border border-slate-200 bg-white/80 px-3 py-3 text-center text-xs font-semibold text-charcoal dark:border-slate-700/70 dark:bg-slate-900/80 dark:text-slate-200"
                animate={{ opacity: [0.72, 1, 0.72] }}
                transition={{ duration: 2.8, delay: index * 0.4, repeat: Infinity, ease: "easeInOut" }}
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
