"use client";

import { Archive, Bot, Building2, Globe2, Megaphone } from "lucide-react";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import type { Language } from "@/data/content";

const icons = [Globe2, Building2, Archive, Megaphone, Bot];

const content = {
  en: {
    eyebrow: "Experience",
    title: "PR, Digital Marketing & Industrial Communication Experience",
    description:
      "Alongside system-building projects, part of my work at Mahed Group has focused on public relations, digital marketing, industrial content, multilingual communication, online presence, and media organization for B2B and export-facing audiences.",
    cards: [
      ["Multilingual Content Systems", "Planning and structuring content for the parent company and related industrial brands across Persian, English, Arabic, and Chinese."],
      ["Industrial Brand Credibility", "Creating content structures that explain quarries, stone products, export capabilities, company profiles, and industrial value propositions."],
      ["Media Archive & Visual Assets", "Organizing image and video assets for websites, exhibitions, social media, company profiles, and B2B communication."],
      ["Exhibition Media & PR", "Supporting media coverage for exhibition presence, including booth visuals, product content, visitor interactions, and post-event communication assets."],
      ["AI-Assisted Content Workflow", "Using AI tools for writing, rewriting, translation, summarization, localization, and improving multilingual business content."]
    ],
    freelanceTitle: "Freelance & Parallel Projects",
    freelanceDescription:
      "Alongside core projects, I have worked on smaller projects focused on fast delivery, learning new tools, and solving practical business problems.",
    freelanceItems: "Corporate websites, analytics dashboards, digital marketing process improvement, data cleaning, small-to-mid automation workflows, AI-assisted workflows."
  },
  fa: {
    eyebrow: "تجربه",
    title: "تجربه روابط عمومی، دیجیتال مارکتینگ و ارتباطات صنعتی",
    description:
      "در کنار پروژه‌های سیستم‌سازی، بخشی از فعالیت من در گروه ماهد روی روابط عمومی، دیجیتال مارکتینگ، محتوای صنعتی، ارتباطات چندزبانه، حضور آنلاین و ساماندهی رسانه برای مخاطبان B2B و صادراتی متمرکز بوده است.",
    cards: [
      ["سیستم‌های محتوای چندزبانه", "برنامه‌ریزی و ساختاردهی محتوا برای شرکت مادر و برندهای صنعتی مرتبط به زبان‌های فارسی، انگلیسی، عربی و چینی."],
      ["اعتبارسازی برند صنعتی", "ساختاردهی محتوا برای معرفی معادن، محصولات سنگی، ظرفیت صادراتی، پروفایل شرکتی و ارزش پیشنهادی صنعتی."],
      ["آرشیو رسانه و دارایی‌های بصری", "ساماندهی آرشیو تصویری و ویدیویی برای وب‌سایت، نمایشگاه، شبکه‌های اجتماعی، پروفایل شرکتی و ارتباطات B2B."],
      ["رسانه نمایشگاهی و PR", "پشتیبانی از پوشش رسانه‌ای حضور نمایشگاهی شامل محتوای غرفه، محصولات، تعاملات بازدیدکنندگان و دارایی‌های ارتباطی بعد از نمایشگاه."],
      ["جریان محتوایی با کمک AI", "استفاده از ابزارهای AI برای تولید، بازنویسی، ترجمه، خلاصه‌سازی، بومی‌سازی و بهبود محتوای چندزبانه کسب‌وکار."]
    ],
    freelanceTitle: "پروژه‌های فریلنس و همزمان",
    freelanceDescription:
      "در کنار پروژه‌های اصلی، تجربه اجرای پروژه‌های کوچک‌تر با تمرکز بر تحویل سریع، یادگیری ابزارهای جدید و حل مسائل عملیاتی کسب‌وکارها را داشته‌ام.",
    freelanceItems: "وب‌سایت شرکتی، داشبورد تحلیلی، بهبود فرایند دیجیتال مارکتینگ، پاک‌سازی داده، اتوماسیون‌های کوچک و متوسط، جریان‌های کاری مبتنی بر AI."
  }
} as const;

export function ExperienceSection({ language }: { language: Language }) {
  const t = content[language];

  return (
    <section id="experience" className="section-surface border-y border-slate-200 py-12 dark:border-slate-800 md:py-20 lg:py-28">
      <Container>
        <SectionHeader lang={language} eyebrow={t.eyebrow} title={t.title} description={t.description} />
        <div className="no-scrollbar -mx-4 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-2 md:mx-0 md:grid md:grid-cols-2 md:gap-4 md:overflow-visible md:px-0 md:pb-0 lg:grid-cols-12">
          {t.cards.map(([title, description], index) => {
            const Icon = icons[index];
            return (
              <Reveal key={title} delay={index * 0.035} className={`min-w-[74vw] snap-start md:min-w-0 ${index < 2 ? "lg:col-span-6" : "lg:col-span-4"}`}>
                <article className="card-premium card-premium-hover gradient-edge relative h-full overflow-hidden rounded-lg p-4 md:p-5">
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-blue-50 text-accent dark:bg-blue-400/10 dark:text-blue-200">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-base font-semibold leading-6 text-ink dark:text-white md:text-lg">{title}</h3>
                      <p className="mobile-clamp-2 mt-2 text-sm leading-7 text-muted dark:text-slate-400">{description}</p>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
        <details className="mt-4 rounded-lg border border-slate-200 bg-white/70 p-4 dark:border-slate-700 dark:bg-slate-950/50 md:p-5">
          <summary className="cursor-pointer list-none text-lg font-semibold text-ink dark:text-white">{t.freelanceTitle}</summary>
          <p className="mt-3 text-sm leading-7 text-muted dark:text-slate-400">{t.freelanceDescription}</p>
          <p className="mt-3 text-sm font-semibold leading-7 text-charcoal dark:text-slate-200">{t.freelanceItems}</p>
        </details>
      </Container>
    </section>
  );
}
