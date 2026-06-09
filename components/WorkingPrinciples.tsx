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
      "My work is built around systems thinking, practical AI adoption, clear documentation, and turning business problems into usable digital workflows.",
    cards: [
      ["Systems Thinking", "Seeing how sales, operations, logistics, finance, HR, marketing, and management connect inside the business."],
      ["Business-Technology Bridge", "Translating management and operational needs into practical digital, automation, and AI-based solutions."],
      ["Data-Driven Structure Design", "Designing scalable data structures that support reporting, automation, and better decision-making."],
      ["Practical AI Adoption", "Using AI to increase speed, reduce errors, improve quality, and support decisions, not just to show technology."],
      ["Cross-Functional Work", "Working across sales, production, logistics, finance, HR, marketing, and management teams."],
      ["Clear Documentation", "Documenting systems clearly for both technical and non-technical teams so workflows can scale."]
    ]
  },
  fa: {
    eyebrow: "شیوه کاری من",
    title: "شیوه کاری من",
    description:
      "شیوه کاری من بر پایه تفکر سیستمی، استفاده عملی از AI، مستندسازی شفاف و تبدیل مسئله‌های کسب‌وکار به جریان‌های دیجیتال قابل استفاده است.",
    cards: [
      ["تفکر سیستمی", "دیدن ارتباط بین فروش، عملیات، لجستیک، مالی، منابع انسانی، مارکتینگ و مدیریت در ساختار کسب‌وکار."],
      ["پل بین کسب‌وکار و تکنولوژی", "تبدیل نیازهای مدیریتی و عملیاتی به راه‌حل‌های قابل اجرا با ابزارهای دیجیتال، اتوماسیون و AI."],
      ["طراحی ساختار داده‌محور", "طراحی ساختارهای داده‌محور و قابل توسعه برای گزارش‌گیری، اتوماسیون و تصمیم‌گیری بهتر."],
      ["استفاده عملی از AI", "استفاده از AI برای افزایش سرعت، کاهش خطا، بهبود کیفیت و پشتیبانی تصمیم؛ نه صرفا نمایش تکنولوژی."],
      ["کار بین تیم‌ها", "کار در تقاطع تیم‌های فروش، تولید، لجستیک، مالی، منابع انسانی، مارکتینگ و مدیریت."],
      ["مستندسازی شفاف", "مستندسازی شفاف برای تیم‌های فنی و غیرفنی تا سیستم‌ها قابل انتقال و مقیاس‌پذیر باشند."]
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
