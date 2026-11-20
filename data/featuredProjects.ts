import type { Language } from "./content";

type Row = readonly [label: string, value: string];
type Content = { label: string; description: string; visualTitle: string; rows: readonly Row[] };
type Variant = "market" | "library" | "delivery" | "production" | "ledger" | "store";

export type FeaturedProject = Record<Language, Content> & {
  slug: string;
  variant: Variant;
};

export const featuredProjects: readonly FeaturedProject[] = [
  {
    slug: "mahed-lead-generation-platform",
    variant: "market",
    en: {
      label: "Market intelligence",
      description: "Research, qualify and hand off sales leads from a shared workspace with traceable sources.",
      visualTitle: "Market research workspace",
      rows: [["Buyer A", "Source checked"], ["Buyer B", "In review"], ["Buyer C", "Ready for sales"]]
    },
    fa: {
      label: "هوشمندی بازار",
      description: "از تحقیق بازار تا ارزیابی و تحویل سرنخ فروش، در یک فضای مشترک با منابع قابل‌ردگیری.",
      visualTitle: "فضای کار تحقیق بازار",
      rows: [["خریدار الف", "منبع بررسی شد"], ["خریدار ب", "در حال ارزیابی"], ["خریدار ج", "آمادهٔ تحویل به فروش"]]
    }
  },
  {
    slug: "enterprise-knowledge-workbench",
    variant: "library",
    en: {
      label: "Knowledge systems",
      description: "Move documents from intake through extraction and translation review to a searchable library.",
      visualTitle: "Document publishing pipeline",
      rows: [["Intake", "PDF received"], ["Review", "Text and translation"], ["Publish", "Approved catalog"]]
    },
    fa: {
      label: "سامانهٔ دانش",
      description: "از دریافت سند و بازبینی استخراج و ترجمه تا انتشار نسخهٔ تأییدشده در کتابخانهٔ قابل جست‌وجو.",
      visualTitle: "مسیر انتشار سند",
      rows: [["ورود سند", "PDF دریافت شد"], ["بازبینی", "متن و ترجمه"], ["انتشار", "فهرست تأییدشده"]]
    }
  },
  {
    slug: "mining-operations-management-system",
    variant: "production",
    en: {
      label: "Industrial operations",
      description: "Turn shift records into validated production reports and management summaries.",
      visualTitle: "Shift reporting overview",
      rows: [["Shift A", "Submitted"], ["Shift B", "Reviewed"]]
    },
    fa: {
      label: "عملیات صنعتی",
      description: "تبدیل ثبت‌های شیفت به گزارش تولید اعتبارسنجی‌شده و خلاصهٔ مدیریتی.",
      visualTitle: "نمای گزارش شیفت‌ها",
      rows: [["شیفت الف", "ثبت شد"], ["شیفت ب", "بازبینی شد"]]
    }
  },
  {
    slug: "ai-engineering-delivery",
    variant: "delivery",
    en: {
      label: "Engineering delivery",
      description: "Keep requirements, review evidence and handoff connected so a new contributor can resume the work.",
      visualTitle: "Delivery checklist",
      rows: [["Scope", "Agreed"], ["Verification", "Evidence attached"], ["Handoff", "Ready for review"]]
    },
    fa: {
      label: "تحویل مهندسی",
      description: "نیازمندی، شواهد بازبینی و تحویل در یک مسیر ثبت می‌شوند تا همکار تازه بتواند کار را ادامه دهد.",
      visualTitle: "چک‌لیست تحویل",
      rows: [["دامنه", "توافق شد"], ["آزمون", "شواهد پیوست شد"], ["تحویل", "آمادهٔ بازبینی"]]
    }
  },
  {
    slug: "trade-accounting-reconciliation",
    variant: "ledger",
    en: {
      label: "Financial controls",
      description: "Rebuild trade calculations from their sources and surface unresolved revisions before replacing reports.",
      visualTitle: "Reconciliation register",
      rows: [["Sample entry A", "Matched"], ["Sample entry B", "Review revision"], ["Sample entry C", "Awaiting source"]]
    },
    fa: {
      label: "کنترل مالی",
      description: "بازسازی محاسبات معاملات از روی منبع و مشخص‌کردن اصلاحیه‌های حل‌نشده پیش از جایگزینی گزارش.",
      visualTitle: "دفتر تطبیق",
      rows: [["رکورد نمونهٔ الف", "تطبیق شد"], ["رکورد نمونهٔ ب", "اصلاحیه برای بررسی"], ["رکورد نمونهٔ ج", "در انتظار منبع"]]
    }
  },
  {
    slug: "mobile-store-operations",
    variant: "store",
    en: {
      label: "Commerce operations",
      description: "Give store staff a mobile workspace for daily orders, catalog edits and stock checks.",
      visualTitle: "Store task queue",
      rows: [["Order", "Ready to review"], ["Catalog", "Update a variant"], ["Stock", "Check adjustment"]]
    },
    fa: {
      label: "عملیات فروشگاه",
      description: "یک محیط کار موبایلی برای رسیدگی روزانه به سفارش، ویرایش کالا و کنترل موجودی.",
      visualTitle: "صف کارهای فروشگاه",
      rows: [["سفارش", "آمادهٔ بازبینی"], ["کالا", "ویرایش تنوع"], ["موجودی", "کنترل تغییر"]]
    }
  }
];
