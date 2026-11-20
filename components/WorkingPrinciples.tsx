"use client";

import { ClipboardList, DatabaseZap, GitBranch, Network, Sparkles, Users } from "lucide-react";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import type { Language } from "@/data/content";

const icons = [Network, GitBranch, DatabaseZap, Sparkles, Users, ClipboardList];

const content = {
  en: {
    eyebrow: "How I Work",
    title: "How I Work",
    description:
      "My work makes source evidence, quality checks and handoff part of the workflow.",
    cards: [
      ["Systems Thinking", "Seeing how sales, operations, logistics, finance, HR, marketing, and management connect inside the business."],
      ["Business-Technology Bridge", "Translating management and operational needs into practical digital, automation, and AI-based solutions."],
      ["State that carries forward", "Keep sources, decisions and open work in a shared record so a team or agent can resume from the last verified step."],
      ["Review before delivery", "Use separate review and acceptance checks where an agent prepares records, translations or reports."],
      ["Cross-Functional Work", "Working across sales, production, logistics, finance, HR, marketing, and management teams."],
      ["Handoff with a test", "Ship setup instructions, assumptions and sample runs alongside the code so another team can verify and operate it."]
    ]
  },
  fa: {
    eyebrow: "شیوه کاری من",
    title: "شیوه کاری من",
    description:
      "منابع، کنترل کیفیت و تحویل کار را از ابتدا در خود گردش کار طراحی می‌کنم.",
    cards: [
      ["تفکر سیستمی", "دیدن ارتباط بین فروش، عملیات، لجستیک، مالی، منابع انسانی، مارکتینگ و مدیریت در ساختار کسب‌وکار."],
      ["پل بین کسب‌وکار و تکنولوژی", "تبدیل نیازهای مدیریتی و عملیاتی به راه‌حل‌های قابل اجرا با ابزارهای دیجیتال، اتوماسیون و AI."],
      ["ادامه از آخرین وضعیت تأییدشده", "منابع، تصمیم‌ها و کار باز را در یک مرجع مشترک ثبت می‌کنم تا تیم یا عامل بتواند از همان‌جا ادامه دهد."],
      ["بازبینی پیش از تحویل", "وقتی عامل سند، ترجمه یا گزارش آماده می‌کند، بازبینی محتوا و آزمون پذیرش خروجی را جدا انجام می‌دهم."],
      ["کار بین تیم‌ها", "کار در تقاطع تیم‌های فروش، تولید، لجستیک، مالی، منابع انسانی، مارکتینگ و مدیریت."],
      ["تحویل همراه با آزمون", "کنار کد، راهنمای راه‌اندازی، فرض‌ها و نمونهٔ اجرا می‌گذارم تا تیم بعدی بتواند سیستم را بررسی و استفاده کند."]
    ]
  }
} as const;

export function WorkingPrinciples({ language }: { language: Language }) {
  const t = content[language];

  return (
    <section className="py-12 md:py-20 lg:py-28">
      <Container>
        <SectionHeader lang={language} eyebrow={t.eyebrow} title={t.title} description={t.description} />
        <div className="no-scrollbar -mx-4 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-2 sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-3">
          {t.cards.map(([title, description], index) => {
            const Icon = icons[index];
            return (
              <Reveal key={title} delay={index * 0.03} className="min-w-[76vw] snap-start sm:min-w-0">
                <article className="card-premium card-premium-hover h-full rounded-lg p-4 md:p-5">
                  <div className="flex items-start gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-blue-50 text-accent dark:bg-blue-400/10 dark:text-blue-200">
                      <Icon className="h-4 w-4" />
                    </span>
                    <div>
                      <h3 className="text-base font-semibold text-ink dark:text-white">{title}</h3>
                      <p className="mobile-clamp-2 mt-2 text-sm leading-7 text-muted dark:text-slate-400">{description}</p>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
