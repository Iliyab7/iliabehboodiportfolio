"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { Language } from "@/data/content";

const architectureContent = {
  en: {
    steps: [
      "Manual Input / Field Data",
      "Digital Data Entry",
      "Validation",
      "Central Database",
      "KPI Dashboard",
      "AI Reporting Layer",
      "Management Decision"
    ]
  },
  fa: {
    steps: [
      "ورودی دستی / داده عملیاتی",
      "ورود داده دیجیتال",
      "اعتبارسنجی",
      "پایگاه داده مرکزی",
      "داشبورد KPI",
      "لایه گزارش‌سازی AI",
      "تصمیم مدیریتی"
    ]
  }
} as const;

export function SystemArchitecture({ language }: { language: Language }) {
  const reduceMotion = useReducedMotion();
  const steps = architectureContent[language].steps;
  const isFa = language === "fa";

  return (
    <div className="relative overflow-hidden rounded-lg border border-slate-200 bg-white p-4 shadow-premium dark:border-slate-800 dark:bg-[#07111f] sm:p-6 lg:p-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(37,99,235,0.10),transparent_32%),radial-gradient(circle_at_90%_80%,rgba(6,182,212,0.08),transparent_28%)]" />
      <div className="relative">
        <div className={`hidden items-center gap-3 lg:flex ${isFa ? "flex-row-reverse" : ""}`}>
          {steps.map((step, index) => (
            <div key={step} className="flex min-w-0 flex-1 items-center gap-3">
              <ArchitectureNode label={step} index={index} reduceMotion={Boolean(reduceMotion)} />
              {index < steps.length - 1 ? <ArchitectureConnector reduceMotion={Boolean(reduceMotion)} /> : null}
            </div>
          ))}
        </div>

        <div className="grid gap-3 lg:hidden">
          {steps.map((step, index) => (
            <div key={step} className="grid gap-3">
              <ArchitectureNode label={step} index={index} reduceMotion={Boolean(reduceMotion)} />
              {index < steps.length - 1 ? (
                <div className="ms-6 h-8 w-px overflow-hidden bg-slate-200 dark:bg-slate-800">
                  <motion.div
                    className="h-1/2 w-px bg-gradient-to-b from-blue-600 to-cyan-400"
                    animate={reduceMotion ? undefined : { y: ["-100%", "220%"] }}
                    transition={{ duration: 1.8, repeat: Infinity, delay: index * 0.14, ease: "easeInOut" }}
                  />
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ArchitectureNode({
  label,
  index,
  reduceMotion
}: {
  label: string;
  index: number;
  reduceMotion: boolean;
}) {
  return (
    <motion.div
      className="relative flex min-h-20 w-full items-center gap-3 rounded-lg border border-slate-200 bg-white/88 p-3 shadow-sm dark:border-slate-700/70 dark:bg-slate-950/72"
      initial={reduceMotion ? false : { opacity: 0, y: 12 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.45, delay: index * 0.04 }}
    >
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-blue-100 bg-blue-50 text-xs font-semibold text-accent dark:border-blue-400/20 dark:bg-blue-400/10 dark:text-blue-200">
        {String(index + 1).padStart(2, "0")}
      </span>
      <span className="text-sm font-semibold leading-6 text-ink dark:text-white">{label}</span>
    </motion.div>
  );
}

function ArchitectureConnector({ reduceMotion }: { reduceMotion: boolean }) {
  return (
    <div className="relative h-px w-8 shrink-0 overflow-hidden bg-slate-200 dark:bg-slate-800 xl:w-12">
      <motion.div
        className="absolute inset-y-0 w-8 bg-gradient-to-r from-transparent via-blue-500 to-cyan-400"
        animate={reduceMotion ? undefined : { x: ["-120%", "220%"] }}
        transition={{ duration: 1.9, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
