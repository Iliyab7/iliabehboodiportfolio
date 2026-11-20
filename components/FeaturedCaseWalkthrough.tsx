"use client";

import { useState } from "react";
import { ArrowRight, FileText } from "lucide-react";
import { Container } from "@/components/Container";
import type { Language } from "@/data/content";
import type { Walkthrough } from "@/data/featuredWalkthroughs";

export function FeaturedCaseWalkthrough({ walkthrough, language }: { walkthrough: Walkthrough; language: Language }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const step = walkthrough.steps[activeIndex];
  const isFa = language === "fa";

  return (
    <>
      <section className="py-12 md:py-20">
        <Container>
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold text-ink dark:text-white">{isFa ? "مسئله چه بود؟" : "What needed to change?"}</h2>
            <div className="mt-5 space-y-3">
              {walkthrough.context.map((paragraph) => (
                <p key={paragraph} className="text-base leading-8 muted-copy">{paragraph}</p>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="section-surface border-y border-slate-200 py-12 dark:border-slate-800 md:py-20">
        <Container>
          <h2 className="text-3xl font-semibold text-ink dark:text-white">{isFa ? "دقیقاً چه ساختم؟" : "What I built"}</h2>
          <ul className="mt-7 grid gap-4 md:grid-cols-3">
            {walkthrough.built.map(({ name, description }) => (
              <li key={name} className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-700 dark:bg-slate-900/60">
                <h3 className="text-lg font-semibold leading-8 text-navy dark:text-white">{name}</h3>
                <p className="mt-2 text-sm leading-7 muted-copy">{description}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section id="how-it-works" className="scroll-mt-16 py-12 md:py-20">
        <Container>
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold text-ink dark:text-white">{isFa ? "خروجی چطور کار می‌کند؟" : "How it works"}</h2>
            <p className="mt-3 text-xl font-semibold text-navy dark:text-slate-100">{walkthrough.title}</p>
            <p className="mt-2 text-base leading-8 muted-copy">{walkthrough.setup}</p>
          </div>
          <div className="mt-7 overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900/60 lg:grid lg:grid-cols-[minmax(16rem,0.8fr)_minmax(0,1.2fr)]">
            <div className="border-b border-slate-200 p-3 dark:border-slate-700 sm:p-4 lg:border-b-0 lg:border-e">
              <ol aria-label={isFa ? "مرحله‌های نمونه" : "Example steps"} className="grid grid-cols-2 gap-2 lg:grid-cols-1">
                {walkthrough.steps.map((item, index) => (
                  <li key={index} className="min-w-0">
                    <button
                      type="button"
                      aria-pressed={activeIndex === index}
                      aria-controls="case-step-output"
                      onClick={() => setActiveIndex(index)}
                      className={`flex min-h-[52px] w-full items-center gap-2 rounded-lg border p-2 text-start text-xs font-semibold leading-5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent sm:px-3 sm:text-sm ${activeIndex === index
                        ? "border-blue-200 bg-blue-50 text-navy dark:border-blue-400/40 dark:bg-blue-400/15 dark:text-blue-100"
                        : "border-transparent bg-slate-50 text-charcoal hover:border-slate-200 dark:bg-slate-950/45 dark:text-slate-200 dark:hover:border-slate-700"}`}
                    >
                      <span aria-hidden="true" className="grid h-6 w-6 shrink-0 place-items-center rounded-md bg-slate-200/70 text-[11px] tabular-nums text-navy dark:bg-slate-800 dark:text-blue-200">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      {item.name}
                      {activeIndex === index ? <ArrowRight aria-hidden="true" className="ms-auto hidden h-4 w-4 shrink-0 rtl:rotate-180 xl:block" /> : null}
                    </button>
                  </li>
                ))}
              </ol>
            </div>
            <div id="case-step-output" aria-live="polite" aria-atomic="true" className="min-w-0 p-4 sm:p-6">
              <h3 className="text-xl font-semibold text-ink dark:text-white">{step.name}</h3>
              <p className="mt-2 min-h-[3.5rem] text-sm leading-7 muted-copy">{step.description}</p>
              <figure className="mt-4 overflow-hidden rounded-xl border border-blue-950 bg-[#101d36] text-white">
                <figcaption className="flex flex-wrap items-center justify-between gap-2 border-b border-white/15 px-4 py-3">
                  <span className="flex min-w-0 items-center gap-2 text-sm font-semibold leading-6"><FileText aria-hidden="true" className="h-4 w-4 shrink-0 text-blue-200" />{step.artifact}</span>
                  <span className="rounded-md bg-blue-300/15 px-2 py-1 text-xs font-semibold text-blue-200">{isFa ? "دادهٔ ساختگی" : "Fictional data"}</span>
                </figcaption>
                <dl className="divide-y divide-white/10">
                  {step.rows.map(([label, value]) => (
                    <div key={label} className="grid grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] gap-3 px-4 py-3 text-sm leading-6">
                      <dt className="text-slate-300">{label}</dt>
                      <dd className="font-semibold text-white">{value}</dd>
                    </div>
                  ))}
                </dl>
              </figure>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
