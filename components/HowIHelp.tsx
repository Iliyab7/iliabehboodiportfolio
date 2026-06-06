"use client";

import { ArrowUpRight, CheckCircle2, ClipboardCheck, Mail, MessageCircle, Route, Send } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";
import { contactLinks, type Language } from "@/data/content";

const helpContent = {
  en: {
    eyebrow: "How I Help",
    title: "How I Can Help Your Business",
    description:
      "I help companies identify operational bottlenecks, train teams to use practical AI tools, automate repetitive workflows, improve reporting, and turn scattered processes into smarter digital systems.",
    cards: [
      {
        title: "Find Workflow Bottlenecks",
        description:
          "I review how work actually moves inside the company and identify repetitive tasks, manual reporting loops, scattered files, slow follow-ups, and decision bottlenecks."
      },
      {
        title: "Train Teams on Practical AI",
        description:
          "I help teams use tools like ChatGPT, Claude, Gemini, and Perplexity for research, writing, reporting, analysis, documentation, and faster daily execution."
      },
      {
        title: "Build Practical Automations",
        description:
          "I automate repetitive work using Google Sheets, Apps Script, n8n, Telegram bots, and AI-assisted workflows so teams spend less time on manual tasks."
      },
      {
        title: "Create Dashboards & Management Reports",
        description:
          "I turn scattered operational data into KPIs, dashboards, and management reports so leaders can understand what is happening faster."
      },
      {
        title: "Improve Website, SEO & Digital Presence",
        description:
          "For B2B and industrial companies, I improve website structure, SEO, content systems, product presentation, and digital credibility."
      },
      {
        title: "Design Lightweight Internal Systems",
        description:
          "I design practical internal systems for sales, logistics, production, inventory, HR, and reporting without forcing the company into heavy enterprise software."
      }
    ],
    bestForTitle: "Best for",
    bestFor: [
      "B2B and industrial companies",
      "Teams stuck with scattered spreadsheets and manual follow-ups",
      "Managers who need faster reporting and better visibility",
      "Companies that want to use AI practically, not just experimentally"
    ],
    ctaTitle: "Have a bottleneck in your business?",
    ctaDescription:
      "Send me a message. I can help you map the workflow, find automation opportunities, and design a practical first step.",
    buttons: {
      telegram: "Message on Telegram",
      whatsapp: "WhatsApp",
      email: "Email"
    },
    flow: ["Bottleneck", "AI Training", "Automation", "Dashboard", "Decision"]
  },
  fa: {
    eyebrow: "کمک به کسب‌وکار",
    title: "چطور می‌توانم به کسب‌وکار شما کمک کنم؟",
    description:
      "من به شرکت‌ها کمک می‌کنم فرآیندهای کند و دستی خود را شناسایی کنند، گلوگاه‌های عملیاتی را پیدا کنند، استفاده واقعی از ابزارهای AI را به تیم‌ها آموزش دهند و با اتوماسیون، داشبورد و سیستم‌های سبک دیجیتال، کارها را سریع‌تر و قابل کنترل‌تر کنند.",
    cards: [
      {
        title: "پیدا کردن گلوگاه‌های کاری",
        description:
          "بررسی می‌کنم کارها داخل شرکت چطور انجام می‌شوند؛ کجا گزارش‌گیری دستی است، کجا فایل‌ها پراکنده‌اند، کجا پیگیری‌ها کند است و کجا زمان تیم هدر می‌رود."
      },
      {
        title: "آموزش کاربردی AI به تیم‌ها",
        description:
          "به تیم‌ها یاد می‌دهم چطور از ابزارهایی مثل ChatGPT، Claude، Gemini و Perplexity برای تحقیق، نوشتن، گزارش‌سازی، تحلیل، مستندسازی و اجرای سریع‌تر کارهای روزمره استفاده کنند."
      },
      {
        title: "ساخت اتوماسیون‌های عملی",
        description:
          "با Google Sheets، Apps Script، n8n، ربات تلگرام و AI workflow، کارهای تکراری را خودکار می‌کنم تا نیاز به ورود دستی و پیگیری مداوم کمتر شود."
      },
      {
        title: "ساخت داشبورد و گزارش مدیریتی",
        description:
          "داده‌های پراکنده عملیاتی را به KPI، داشبورد و گزارش‌های مدیریتی تبدیل می‌کنم تا مدیر سریع‌تر بفهمد چه اتفاقی در عملیات، فروش، تولید یا مارکتینگ افتاده است."
      },
      {
        title: "بهبود وب‌سایت، SEO و حضور دیجیتال",
        description:
          "برای شرکت‌های صنعتی و B2B، ساختار وب‌سایت، سئو، سیستم محتوا، معرفی محصول و اعتبار دیجیتال را حرفه‌ای‌تر می‌کنم."
      },
      {
        title: "طراحی سیستم‌های سبک داخلی",
        description:
          "برای فروش، لجستیک، تولید، انبار، منابع انسانی و گزارش‌گیری، سیستم‌های سبک و قابل توسعه طراحی می‌کنم؛ بدون نیاز به نرم‌افزارهای سنگین و پیچیده."
      }
    ],
    bestForTitle: "مناسب برای",
    bestFor: [
      "شرکت‌های صنعتی و B2B",
      "تیم‌هایی که درگیر فایل‌های پراکنده و پیگیری دستی هستند",
      "مدیرانی که گزارش‌گیری سریع‌تر و دید شفاف‌تر می‌خواهند",
      "شرکت‌هایی که می‌خواهند از AI کاربردی استفاده کنند، نه صرفا آزمایشی"
    ],
    ctaTitle: "در کسب‌وکارتان گلوگاه دارید؟",
    ctaDescription:
      "پیام بدهید. می‌توانم جریان کار را بررسی کنم، فرصت‌های اتوماسیون را پیدا کنم و یک قدم عملی برای شروع طراحی کنم.",
    buttons: {
      telegram: "پیام در تلگرام",
      whatsapp: "واتساپ",
      email: "ایمیل"
    },
    flow: ["گلوگاه", "آموزش AI", "اتوماسیون", "داشبورد", "تصمیم"]
  }
} as const;

const auditOfferContent = {
  en: {
    label: "Core offer",
    title: "AI Productivity Audit",
    description:
      "A practical review for industrial and B2B teams that want to find where manual work, scattered reports, messy Excel files, repeated admin tasks, and disconnected workflows are slowing the business down.",
    resultTitle: "The roadmap shows",
    resultDescription:
      "What should be automated, what should be simplified, where AI has real business value, which dashboards are needed, and the safest first implementation step.",
    items: [
      "Operational bottlenecks and wasted time",
      "Repetitive tasks AI can support",
      "Excel, reporting, and dashboard opportunities",
      "Quick wins before complex automation",
      "Recommended tools and workflow changes",
      "A low-risk first implementation plan"
    ],
    fitFor:
      "Built for operators, managers, founders, and industrial teams in mining, export, logistics, trading, manufacturing, and B2B services.",
    cta: "Book an AI Workflow Review"
  },
  fa: {
    label: "پیشنهاد اصلی",
    title: "عارضه‌یابی بهره‌وری با هوش مصنوعی",
    description:
      "یک بررسی عملی برای شرکت‌های صنعتی و B2B که می‌خواهند بفهمند کارهای دستی، گزارش‌های پراکنده، فایل‌های اکسل شلوغ، کارهای اداری تکراری و فرایندهای جدا از هم کجا سرعت کسب‌وکار را کم کرده‌اند.",
    resultTitle: "خروجی نقشه راه",
    resultDescription:
      "مشخص می‌شود چه چیزی باید خودکار شود، چه چیزی باید ساده‌تر شود، کجا AI واقعا ارزش تجاری دارد، چه داشبوردهایی لازم است و اولین قدم اجرایی کم‌ریسک چیست.",
    items: [
      "گلوگاه‌های عملیاتی و زمان‌های تلف‌شده",
      "کارهای تکراری قابل بهبود با AI",
      "فرصت‌های اکسل، گزارش‌گیری و داشبورد",
      "quick winها قبل از اتوماسیون پیچیده",
      "پیشنهاد ابزارها و تغییرات فرایندی",
      "برنامه اولین اجرای کم‌ریسک"
    ],
    fitFor:
      "مناسب برای مدیران، بنیان‌گذاران و تیم‌های صنعتی، معدنی، صادراتی، لجستیک، بازرگانی، تولیدی و خدمات B2B.",
    cta: "بررسی فرایندهای شرکت"
  }
} as const;

export function HowIHelp({ language }: { language: Language }) {
  const t = helpContent[language];
  const isFa = language === "fa";

  return (
    <section id="help" className="relative overflow-hidden border-b border-slate-200 bg-white py-12 transition-colors dark:border-slate-800 dark:bg-[#07111f] md:py-20 lg:py-28">
      <div className="pointer-events-none absolute left-0 top-10 h-80 w-80 rounded-full bg-blue-100/60 blur-3xl dark:bg-blue-500/12" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-100/50 blur-3xl dark:bg-cyan-400/10" />
      <Container className="relative">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="lg:sticky lg:top-24">
            <SectionHeader lang={language} eyebrow={t.eyebrow} title={t.title} description={t.description} />
            <WorkflowDiagnostic language={language} />
            <div className="mt-5 rounded-lg border border-blue-100 bg-blue-50 p-5 dark:border-blue-400/20 dark:bg-blue-400/10">
              <h3 className="text-lg font-semibold text-navy dark:text-white">{t.bestForTitle}</h3>
              <ul className="mt-4 grid gap-3 text-sm leading-7 text-charcoal dark:text-slate-300">
                {t.bestFor.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <AuditOffer language={language} />

            {t.cards.map((card, index) => (
              <article
                key={card.title}
                className={`card-premium card-premium-hover rounded-lg p-4 md:p-5 ${
                  index === 0 || index === 3 ? "md:col-span-2 lg:grid lg:grid-cols-[0.45fr_1fr] lg:items-start lg:gap-5" : ""
                }`}
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-md bg-blue-50 text-sm font-semibold text-accent dark:bg-blue-400/10 dark:text-blue-200 lg:mb-0">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div>
                  <h3 className="text-base font-semibold text-ink dark:text-white md:text-lg">{card.title}</h3>
                  <p className={`mt-2 text-sm text-muted dark:text-slate-400 ${isFa ? "leading-8" : "leading-7"}`}>
                    {card.description}
                  </p>
                </div>
              </article>
            ))}

            <div className="rounded-lg border border-slate-200 bg-navy p-5 text-white shadow-premium dark:border-slate-700 md:col-span-2 md:p-6">
              <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <h3 className="text-2xl font-semibold">{t.ctaTitle}</h3>
                  <p className={`mt-3 max-w-3xl text-sm text-slate-300 ${isFa ? "leading-8" : "leading-7"}`}>{t.ctaDescription}</p>
                </div>
                <div className="flex flex-col gap-2 sm:flex-row lg:flex-col">
                  <a href={contactLinks.telegram} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-4 py-3 text-sm font-semibold text-navy transition hover:bg-blue-50">
                    <Send className="h-4 w-4" />
                    {t.buttons.telegram}
                  </a>
                  <a href={contactLinks.whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-md border border-white/20 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                    <MessageCircle className="h-4 w-4" />
                    {t.buttons.whatsapp}
                  </a>
                  <a href={contactLinks.email} className="inline-flex items-center justify-center gap-2 rounded-md border border-white/20 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                    <Mail className="h-4 w-4" />
                    {t.buttons.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function AuditOffer({ language }: { language: Language }) {
  const offer = auditOfferContent[language];
  const isFa = language === "fa";

  return (
    <article className="relative overflow-hidden rounded-lg border border-blue-100 bg-gradient-to-br from-white via-blue-50/80 to-cyan-50/70 p-5 shadow-premium dark:border-blue-400/20 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950/40 md:col-span-2 md:p-6">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-600 via-cyan-400 to-transparent" />
      <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div>
          <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-md bg-blue-600 text-white shadow-soft dark:bg-blue-500">
            <ClipboardCheck className="h-5 w-5" />
          </div>
          <p className={isFa ? "text-sm font-semibold text-accent" : "text-xs font-semibold uppercase tracking-[0.18em] text-accent"}>
            {offer.label}
          </p>
          <h3 className="mt-2 text-2xl font-semibold tracking-normal text-ink dark:text-white md:text-3xl">
            {offer.title}
          </h3>
          <p className={`mt-4 text-sm text-muted dark:text-slate-300 ${isFa ? "leading-8" : "leading-7"}`}>
            {offer.description}
          </p>
        </div>

        <div className="rounded-lg border border-slate-200 bg-white/76 p-4 dark:border-slate-700/70 dark:bg-slate-950/60">
          <p className="text-sm font-semibold text-ink dark:text-white">{offer.resultTitle}</p>
          <p className={`mt-2 text-sm text-muted dark:text-slate-400 ${isFa ? "leading-8" : "leading-7"}`}>
            {offer.resultDescription}
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {offer.items.map((item) => (
              <div key={item} className="flex gap-2 text-sm text-charcoal dark:text-slate-300">
                <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-cyan-500 dark:text-cyan-300" />
                <span className={isFa ? "leading-7" : "leading-6"}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-5 grid gap-3 rounded-lg border border-slate-200 bg-slate-50 p-4 dark:border-slate-700/70 dark:bg-slate-900/70 lg:grid-cols-[1fr_auto] lg:items-center">
        <p className={`text-sm text-charcoal dark:text-slate-300 ${isFa ? "leading-8" : "leading-7"}`}>
          {offer.fitFor}
        </p>
        <a
          href="#contact"
          className="inline-flex items-center justify-center gap-2 rounded-md bg-navy px-4 py-3 text-sm font-semibold text-white transition hover:bg-charcoal dark:bg-white dark:text-navy dark:hover:bg-blue-50"
        >
          <Route className="h-4 w-4" />
          {offer.cta}
        </a>
      </div>
    </article>
  );
}

function WorkflowDiagnostic({ language }: { language: Language }) {
  const reduceMotion = useReducedMotion();
  const steps = helpContent[language].flow;
  const isFa = language === "fa";

  return (
    <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 dark:border-slate-700/70 dark:bg-slate-950/60">
      <div className={`grid gap-2 sm:grid-cols-5 ${isFa ? "sm:[direction:rtl]" : ""}`}>
        {steps.map((step, index) => (
          <div key={step} className="relative rounded-md border border-slate-200 bg-white p-3 text-center text-xs font-semibold text-charcoal dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200">
            <span>{step}</span>
            {index < steps.length - 1 ? (
              <ArrowUpRight className={`absolute top-1/2 hidden h-4 w-4 -translate-y-1/2 text-accent sm:block ${isFa ? "-left-3 rotate-180" : "-right-3"}`} />
            ) : null}
          </div>
        ))}
      </div>
      <div className="mt-4 h-1 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
        <motion.div
          className="h-full w-1/3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400"
          animate={reduceMotion ? undefined : { x: isFa ? ["220%", "-120%"] : ["-120%", "320%"] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
}
