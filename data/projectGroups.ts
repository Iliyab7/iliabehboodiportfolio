import type { Language } from "./content";
import { selectedSlugs } from "./selectedCaseStudies";

export const githubProfile = "https://github.com/Iliyab7";

export const projectGroups = [
  {
    id: "agents",
    nav: { en: "AI & knowledge", fa: "عامل و دانش" },
    title: { en: "AI agents and knowledge systems", fa: "عامل‌های هوش مصنوعی و سامانه‌های دانش" },
    summary: {
      en: "Personal briefings, editorial review, shared libraries and assistants that answer from business data.",
      fa: "گزارش شخصی، بازبینی تحریریه، کتابخانهٔ مشترک و دستیار پاسخ‌گو بر پایهٔ داده‌های کسب‌وکار."
    },
    slugs: ["wellbeing-agent-starter", "drive-book-library-agent", ...selectedSlugs("agents"), "management-ai-chatbot"]
  },
  {
    id: "operations",
    nav: { en: "Sales & operations", fa: "فروش و عملیات" },
    title: { en: "Sales and operations", fa: "فروش و عملیات" },
    summary: {
      en: "Market research, sales follow-up, role handoffs, mining production and export planning.",
      fa: "تحقیق بازار، پیگیری فروش، تحویل کار بین نقش‌ها، تولید معدن و برنامه‌ریزی صادرات."
    },
    slugs: ["mahed-lead-generation-platform", ...selectedSlugs("operations"), "mining-operations-management-system", "international-academy-management-system", "export-logistics-container-planning"]
  },
  {
    id: "finance",
    nav: { en: "Finance & inventory", fa: "مالی و موجودی" },
    title: { en: "Finance, inventory and records", fa: "مالی، موجودی و سوابق" },
    summary: {
      en: "Stock movements, accounting reconciliation, valuation and reporting between periods.",
      fa: "گردش موجودی، تطبیق حسابداری، ارزش‌گذاری و گزارش مقایسهٔ دوره‌ها."
    },
    slugs: selectedSlugs("finance")
  },
  {
    id: "web",
    nav: { en: "Web & commerce", fa: "وب و تجارت" },
    title: { en: "Websites and digital commerce", fa: "وب‌سایت و تجارت دیجیتال" },
    summary: {
      en: "Industrial sites, store operations, class scheduling and order fulfillment.",
      fa: "وب‌سایت صنعتی، عملیات فروشگاه، زمان‌بندی کلاس و تحویل سفارش."
    },
    slugs: [...selectedSlugs("web"), "mahed-group-website", "shayan-quarry-website"]
  },
  {
    id: "engineering",
    nav: { en: "Engineering delivery", fa: "تحویل مهندسی" },
    title: { en: "Engineering delivery", fa: "تحویل مهندسی" },
    summary: {
      en: "Requirements, acceptance evidence and handoff for teams building with AI.",
      fa: "نیازمندی، شواهد پذیرش و تحویل برای تیم‌هایی که با هوش مصنوعی می‌سازند."
    },
    slugs: selectedSlugs("engineering")
  }
] satisfies readonly {
  id: string;
  nav: Record<Language, string>;
  title: Record<Language, string>;
  summary: Record<Language, string>;
  slugs: readonly string[];
}[];
