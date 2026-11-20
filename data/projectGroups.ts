import type { Language } from "./content";

export const githubProfile = "https://github.com/Iliyab7";

export const projectGroups = [
  {
    id: "agents",
    title: { en: "AI agents and knowledge systems", fa: "عامل‌های هوش مصنوعی و سامانه‌های دانش" },
    summary: {
      en: "Personal briefings, document libraries and assistants that answer from business data.",
      fa: "گزارش شخصی، کتابخانهٔ اسناد و دستیار پاسخ‌گویی بر پایهٔ داده‌های کسب‌وکار."
    },
    slugs: ["wellbeing-agent-starter", "drive-book-library-agent", "management-ai-chatbot"]
  },
  {
    id: "operations",
    title: { en: "Sales, operations and reporting", fa: "فروش، عملیات و گزارش‌گیری" },
    summary: {
      en: "Market research, sales follow-up, inventory and reconciliation, mining production and export planning.",
      fa: "تحقیق بازار، پیگیری فروش، موجودی و تطبیق مالی، تولید معدن و برنامه‌ریزی صادرات."
    },
    slugs: ["mahed-lead-generation-platform", "mining-operations-management-system", "international-academy-management-system", "export-logistics-container-planning"]
  },
  {
    id: "web",
    title: { en: "Websites and digital commerce", fa: "وب‌سایت و تجارت دیجیتال" },
    summary: {
      en: "Industrial websites built for search and inquiries, alongside work on storefronts and booking.",
      fa: "وب‌سایت‌های صنعتی برای دیده شدن در جست‌وجو و دریافت درخواست مشتری، در کنار کار روی فروشگاه و رزرو."
    },
    slugs: ["mahed-group-website", "shayan-quarry-website"]
  }
] satisfies readonly {
  id: string;
  title: Record<Language, string>;
  summary: Record<Language, string>;
  slugs: readonly string[];
}[];
