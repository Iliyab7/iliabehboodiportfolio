export type CaseStudy = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  problem: string;
  solution: string;
  whatIBuilt: readonly string[];
  tools: readonly string[];
  outcomes: readonly string[];
  process: readonly string[];
  impactMetrics: readonly { label: string; value: string }[];
  link?: string;
  visual: "mining" | "website" | "quarry" | "chatbot" | "logistics" | "academy";
};

export const caseStudies: Record<"en" | "fa", readonly CaseStudy[]> = {
  en: [
    {
      slug: "international-academy-management-system",
      title: "International Academy Management System",
      category: "Operations System / Education Management",
      summary:
        "A scalable remote operations system for managing CRM, sales, class scheduling, teacher allocation, student records, payroll, commissions, surveys, observations, and management reporting for an international academy.",
      problem:
        "Remote academy operations can become scattered across spreadsheets, messages, schedules, manual follow-ups, and disconnected reporting systems.",
      solution:
        "Designed a modular Google Sheets and Apps Script-based system that connects CRM, class scheduling, teacher allocation, attendance, surveys, observations, financial tracking, and reporting into a structured operational workflow.",
      whatIBuilt: [
        "CRM structure for leads, students, and follow-ups",
        "Class scheduling and teacher assignment workflow",
        "Attendance and observation tracking",
        "Survey and feedback structure",
        "Payroll and commission tracking concept",
        "Management reporting dashboard foundation",
        "AI-assisted reporting and follow-up messaging concept",
        "Scalable structure for future SaaS or WebApp conversion"
      ],
      tools: ["Google Sheets", "Google Apps Script", "Workflow Design", "CRM Logic", "Dashboard Design", "AI/LLM Reporting"],
      outcomes: [
        "Organized remote academy operations",
        "Reduced dependency on scattered manual tracking",
        "Improved visibility across students, teachers, classes, and operations",
        "Created a scalable foundation for future productization"
      ],
      process: ["Map academy operations", "Design CRM data model", "Connect class scheduling", "Structure reporting", "Prepare AI follow-up layer"],
      impactMetrics: [
        { label: "Operations", value: "Organized" },
        { label: "Visibility", value: "Improved" },
        { label: "Productization", value: "Ready" }
      ],
      visual: "academy"
    },
    {
      slug: "mining-operations-management-system",
      title: "Mining Operations Management System",
      category: "AI Automation / Operations",
      summary:
        "A complete operational data system for mining workflows, built to replace paper-based reporting with structured digital entry, validation, automation, final reports, KPI dashboards, photo management, and AI-assisted summaries.",
      problem: "Manual mining reports were paper-based, delayed, and error-prone.",
      solution:
        "Built an automated Google Sheets and Apps Script system for data entry, validation, archiving, final reports, photo management, KPI dashboards, and AI-assisted management summaries.",
      whatIBuilt: [
        "Digital data-entry workflows for mining operations",
        "Validation and archive logic",
        "Automated final reporting structure",
        "KPI-ready data model",
        "Photo management workflow",
        "AI-assisted reporting foundation"
      ],
      tools: ["Google Sheets", "Google Apps Script", "Looker Studio", "n8n", "Telegram Bot", "AI/LLM"],
      outcomes: [
        "Reduced manual reporting steps",
        "Improved data accuracy",
        "Centralized operational data",
        "Enabled KPI dashboards",
        "Prepared AI-assisted management summaries"
      ],
      process: ["Audit paper reports", "Design structured data entry", "Automate validation", "Prepare KPI model", "Add AI summary layer"],
      impactMetrics: [
        { label: "Reporting speed", value: "70%" },
        { label: "Data structure", value: "100%" },
        { label: "Manual steps", value: "Reduced" }
      ],
      visual: "mining"
    },
    {
      slug: "mahed-group-website",
      title: "Mahed Group Website",
      category: "B2B Website / SEO",
      summary:
        "A professional B2B website for an industrial mining and natural stone company, focused on credibility, SEO, multilingual content, brand presentation, and international visibility.",
      problem:
        "The company needed a stronger digital presence for industrial credibility and international visibility.",
      solution:
        "Designed and developed a professional B2B website with SEO-focused structure, multilingual content planning, content architecture, and improved brand presentation.",
      whatIBuilt: [
        "B2B website structure",
        "SEO-focused page architecture",
        "Industrial content planning",
        "Multilingual content framework",
        "Credibility-first brand presentation"
      ],
      tools: ["WordPress", "SEO", "Content Strategy", "UI/UX", "Multilingual Content"],
      outcomes: [
        "Improved digital credibility",
        "Structured industrial content",
        "Supported B2B communication",
        "Built stronger online presence"
      ],
      process: ["Clarify brand position", "Map page architecture", "Plan multilingual content", "Build website", "Optimize for search visibility"],
      impactMetrics: [
        { label: "Core pages", value: "B2B" },
        { label: "SEO structure", value: "Improved" },
        { label: "Visibility", value: "International" }
      ],
      link: "https://mahed.co",
      visual: "website"
    },
    {
      slug: "shayan-quarry-website",
      title: "Shayan Quarry Website",
      category: "Industrial Website / Quarry Brand",
      summary:
        "A dedicated quarry website built to create a focused digital identity for Shayan Quarry, improve product presentation, and support B2B/export communication.",
      problem: "The quarry needed a dedicated digital identity and clearer product presentation.",
      solution:
        "Created a focused quarry website for brand presentation, product positioning, SEO-oriented pages, and B2B trust-building.",
      whatIBuilt: [
        "Dedicated quarry website",
        "Product presentation pages",
        "B2B trust-building structure",
        "SEO-oriented content layout",
        "Export communication foundation"
      ],
      tools: ["Website Design", "SEO", "Content Architecture", "Brand Presentation"],
      outcomes: [
        "Created dedicated quarry presence",
        "Improved product presentation",
        "Supported export-oriented communication",
        "Built stronger brand clarity"
      ],
      process: ["Define quarry identity", "Structure product content", "Design trust-focused pages", "Build website", "Prepare SEO foundation"],
      impactMetrics: [
        { label: "Brand clarity", value: "Improved" },
        { label: "Product pages", value: "Focused" },
        { label: "Communication", value: "Export-ready" }
      ],
      link: "https://shayanquarry.com",
      visual: "quarry"
    },
    {
      slug: "management-ai-chatbot",
      title: "Management AI Chatbot",
      category: "AI / Business Intelligence",
      summary:
        "A management decision-support concept that connects internal operational data with an AI/LLM layer so managers can ask natural-language questions and receive decision-ready answers.",
      problem: "Managers had to wait for manual reports to answer operational questions.",
      solution:
        "Designed a management chatbot concept that connects internal business data with an AI/LLM layer to answer natural-language questions about production, downtime, equipment, sales, and KPIs.",
      whatIBuilt: [
        "Management chatbot concept",
        "Natural-language question flow",
        "Operational data retrieval structure",
        "AI-assisted summary logic",
        "Decision-support answer format"
      ],
      tools: ["AI/LLM", "Telegram Bot", "Google Sheets", "Workflow Automation", "Data Retrieval"],
      outcomes: [
        "Faster access to management insights",
        "Reduced repetitive reporting requests",
        "Turned raw data into decision-ready summaries"
      ],
      process: ["Map management questions", "Connect data sources", "Design retrieval logic", "Prototype AI responses", "Prepare reporting workflow"],
      impactMetrics: [
        { label: "Response speed", value: "90%" },
        { label: "Report requests", value: "Reduced" },
        { label: "Decision support", value: "AI-ready" }
      ],
      visual: "chatbot"
    },
    {
      slug: "export-logistics-container-planning",
      title: "Export Logistics & Container Planning Automation",
      category: "Logistics Automation",
      summary:
        "An automation framework for export logistics and container planning, designed to turn individual experience into repeatable decision rules based on historical planning patterns.",
      problem: "Container planning depended heavily on individual experience and manual decision-making.",
      solution:
        "Designed an automation framework to analyze historical container planning data, extract decision patterns, and turn them into repeatable rules for better loading suggestions.",
      whatIBuilt: [
        "Container planning analysis framework",
        "Historical pattern extraction",
        "Rule-based decision model",
        "Loading suggestion structure",
        "Process documentation foundation"
      ],
      tools: ["Process Analysis", "Rule-Based Systems", "AI-Assisted Analysis", "Logistics Data"],
      outcomes: [
        "Reduced human error",
        "Standardized container planning",
        "Improved preparation speed",
        "Reduced dependency on one key person"
      ],
      process: ["Review historical plans", "Identify decision patterns", "Extract rules", "Design suggestion logic", "Document repeatable workflow"],
      impactMetrics: [
        { label: "Planning consistency", value: "Improved" },
        { label: "Preparation speed", value: "Faster" },
        { label: "Dependency risk", value: "Reduced" }
      ],
      visual: "logistics"
    }
  ],
  fa: [
    {
      slug: "international-academy-management-system",
      title: "سیستم مدیریت آموزشگاه بین‌المللی",
      category: "سیستم عملیاتی / مدیریت آموزشگاه",
      summary:
        "یک سیستم عملیاتی مقیاس‌پذیر برای مدیریت CRM، فروش، زمان‌بندی کلاس‌ها، تخصیص مدرس، اطلاعات دانشجویان، حقوق، کمیسیون، نظرسنجی، Observation و گزارش مدیریتی در یک آموزشگاه بین‌المللی.",
      problem:
        "عملیات یک آموزشگاه ریموت می‌تواند بین فایل‌های پراکنده، پیام‌ها، زمان‌بندی‌ها، پیگیری‌های دستی و گزارش‌های جدا از هم پخش شود.",
      solution:
        "یک سیستم ماژولار مبتنی بر Google Sheets و Apps Script طراحی شد که CRM، زمان‌بندی کلاس‌ها، تخصیص مدرس، حضور و غیاب، نظرسنجی، Observation، پیگیری مالی و گزارش‌گیری را در یک جریان عملیاتی ساختاریافته متصل می‌کند.",
      whatIBuilt: [
        "ساختار CRM برای لیدها، دانشجویان و پیگیری‌ها",
        "جریان زمان‌بندی کلاس و تخصیص مدرس",
        "ثبت حضور و غیاب و Observation",
        "ساختار نظرسنجی و بازخورد",
        "کانسپت پیگیری حقوق و کمیسیون",
        "زیرساخت داشبورد گزارش مدیریتی",
        "کانسپت گزارش‌سازی و پیام‌های پیگیری با کمک AI",
        "ساختار قابل توسعه برای تبدیل آینده به SaaS یا WebApp"
      ],
      tools: ["Google Sheets", "Google Apps Script", "طراحی جریان کار", "منطق CRM", "طراحی داشبورد", "گزارش‌سازی AI/LLM"],
      outcomes: [
        "ساماندهی عملیات آموزشگاه ریموت",
        "کاهش وابستگی به پیگیری دستی و فایل‌های پراکنده",
        "افزایش شفافیت در وضعیت دانشجویان، مدرس‌ها، کلاس‌ها و عملیات",
        "ایجاد زیرساخت قابل توسعه برای محصول‌سازی در آینده"
      ],
      process: ["مدل‌سازی عملیات آموزشگاه", "طراحی ساختار CRM", "اتصال زمان‌بندی کلاس‌ها", "ساختاردهی گزارش‌ها", "آماده‌سازی لایه پیگیری با AI"],
      impactMetrics: [
        { label: "عملیات", value: "ساماندهی" },
        { label: "شفافیت", value: "بیشتر" },
        { label: "توسعه محصول", value: "آماده" }
      ],
      visual: "academy"
    },
    {
      slug: "mining-operations-management-system",
      title: "سیستم مدیریت عملیات معدن",
      category: "اتوماسیون هوش مصنوعی / عملیات",
      summary:
        "یک سیستم جامع مدیریت داده‌های عملیاتی معدن برای جایگزینی گزارش‌گیری کاغذی با ورود داده دیجیتال، اعتبارسنجی، اتوماسیون، گزارش نهایی، داشبورد KPI، مدیریت عکس و خلاصه‌سازی مدیریتی مبتنی بر AI.",
      problem:
        "گزارش‌های روزانه معدن به‌صورت کاغذی، زمان‌بر، پرخطا و وابسته به ورود دستی داده انجام می‌شد.",
      solution:
        "یک سیستم خودکار مبتنی بر Google Sheets و Google Apps Script طراحی شد که ورود داده، اعتبارسنجی، آرشیو، گزارش نهایی، مدیریت عکس، داشبوردهای KPI و خلاصه‌سازی مدیریتی مبتنی بر AI را پوشش می‌دهد.",
      whatIBuilt: [
        "جریان ورود داده دیجیتال برای عملیات معدن",
        "منطق اعتبارسنجی و آرشیو",
        "ساختار گزارش نهایی خودکار",
        "مدل داده آماده برای KPI",
        "جریان مدیریت عکس‌ها",
        "زیرساخت گزارش‌سازی مبتنی بر AI"
      ],
      tools: ["Google Sheets", "Google Apps Script", "Looker Studio", "n8n", "ربات تلگرام", "AI/LLM"],
      outcomes: [
        "کاهش مراحل گزارش‌گیری دستی",
        "افزایش دقت و یکپارچگی داده‌ها",
        "ایجاد پایگاه داده عملیاتی مرکزی",
        "آماده‌سازی داده برای داشبوردهای مدیریتی",
        "امکان تولید خلاصه‌های مدیریتی با کمک AI"
      ],
      process: ["تحلیل گزارش‌های کاغذی", "طراحی ورود داده ساختاریافته", "اتوماسیون اعتبارسنجی", "آماده‌سازی مدل KPI", "افزودن لایه خلاصه‌سازی AI"],
      impactMetrics: [
        { label: "سرعت گزارش‌گیری", value: "۷۰٪" },
        { label: "ساختار داده", value: "۱۰۰٪" },
        { label: "مراحل دستی", value: "کاهش‌یافته" }
      ],
      visual: "mining"
    },
    {
      slug: "mahed-group-website",
      title: "وب‌سایت گروه ماهد",
      category: "وب‌سایت B2B / سئو",
      summary:
        "یک وب‌سایت حرفه‌ای B2B برای شرکت معدنی و سنگ ساختمانی با تمرکز بر اعتبار برند، سئو، محتوای چندزبانه، معرفی صنعتی و دیده‌شدن در بازارهای داخلی و بین‌المللی.",
      problem:
        "شرکت برای افزایش اعتبار صنعتی، حضور دیجیتال حرفه‌ای‌تر و دیده‌شدن در بازارهای داخلی و بین‌المللی به وب‌سایتی قوی‌تر نیاز داشت.",
      solution:
        "یک وب‌سایت حرفه‌ای B2B با ساختار سئومحور، برنامه‌ریزی محتوای چندزبانه، معماری محتوای صنعتی و ارائه بهتر برند طراحی و توسعه داده شد.",
      whatIBuilt: [
        "ساختار وب‌سایت B2B",
        "معماری صفحات سئومحور",
        "برنامه‌ریزی محتوای صنعتی",
        "چارچوب محتوای چندزبانه",
        "ارائه برند با تمرکز بر اعتماد"
      ],
      tools: ["WordPress", "SEO", "استراتژی محتوا", "UI/UX", "محتوای چندزبانه"],
      outcomes: [
        "افزایش اعتبار دیجیتال برند",
        "ساختاردهی محتوای صنعتی",
        "پشتیبانی از ارتباطات B2B",
        "تقویت حضور آنلاین شرکت"
      ],
      process: ["شفاف‌سازی جایگاه برند", "طراحی معماری صفحات", "برنامه‌ریزی محتوای چندزبانه", "توسعه وب‌سایت", "آماده‌سازی برای دیده‌شدن در جستجو"],
      impactMetrics: [
        { label: "صفحات اصلی", value: "B2B" },
        { label: "ساختار سئو", value: "بهبود" },
        { label: "دید بازار", value: "بین‌المللی" }
      ],
      link: "https://mahed.co",
      visual: "website"
    },
    {
      slug: "shayan-quarry-website",
      title: "وب‌سایت معدن شایان",
      category: "وب‌سایت صنعتی / برندینگ معدن",
      summary:
        "یک وب‌سایت اختصاصی برای معدن شایان با هدف ایجاد هویت دیجیتال مستقل، معرفی بهتر محصول و پشتیبانی از ارتباطات B2B و صادراتی.",
      problem:
        "معدن شایان به یک هویت دیجیتال مستقل و معرفی حرفه‌ای‌تر محصولات و ظرفیت‌های خود نیاز داشت.",
      solution:
        "یک وب‌سایت اختصاصی برای معرفی معدن، جایگاه‌سازی محصول، صفحات سئومحور و تقویت اعتماد در ارتباطات B2B طراحی شد.",
      whatIBuilt: [
        "وب‌سایت اختصاصی معدن",
        "صفحات معرفی محصول",
        "ساختار اعتمادساز برای B2B",
        "چیدمان محتوای سئومحور",
        "زیرساخت ارتباطات صادراتی"
      ],
      tools: ["طراحی وب‌سایت", "SEO", "معماری محتوا", "ارائه برند"],
      outcomes: [
        "ایجاد حضور دیجیتال مستقل برای معدن",
        "بهبود معرفی محصول و ظرفیت‌ها",
        "پشتیبانی از ارتباطات صادراتی",
        "شفاف‌تر شدن هویت برند"
      ],
      process: ["تعریف هویت معدن", "ساختاردهی محتوای محصول", "طراحی صفحات اعتمادساز", "توسعه وب‌سایت", "آماده‌سازی پایه سئو"],
      impactMetrics: [
        { label: "شفافیت برند", value: "بهبود" },
        { label: "صفحات محصول", value: "متمرکز" },
        { label: "ارتباطات", value: "صادراتی" }
      ],
      link: "https://shayanquarry.com",
      visual: "quarry"
    },
    {
      slug: "management-ai-chatbot",
      title: "چت‌بات مدیریتی مبتنی بر داده",
      category: "هوش مصنوعی / هوش تجاری",
      summary:
        "یک سیستم تصمیم‌یار مدیریتی که داده‌های عملیاتی داخلی را به لایه AI/LLM متصل می‌کند تا مدیران بتوانند با زبان طبیعی سوال بپرسند و پاسخ قابل تصمیم‌گیری دریافت کنند.",
      problem:
        "مدیران برای دریافت پاسخ به سوالات عملیاتی مجبور بودند منتظر گزارش‌های دستی بمانند.",
      solution:
        "یک چت‌بات مدیریتی طراحی شد که داده‌های داخلی را به لایه AI/LLM متصل می‌کند و به سوالات طبیعی درباره تولید، توقف، تجهیزات، فروش و KPIها پاسخ می‌دهد.",
      whatIBuilt: [
        "مفهوم چت‌بات مدیریتی",
        "جریان سوال با زبان طبیعی",
        "ساختار بازیابی داده عملیاتی",
        "منطق خلاصه‌سازی AI",
        "فرمت پاسخ تصمیم‌یار"
      ],
      tools: ["AI/LLM", "ربات تلگرام", "Google Sheets", "اتوماسیون جریان کار", "بازیابی داده"],
      outcomes: [
        "دسترسی سریع‌تر به بینش‌های مدیریتی",
        "کاهش درخواست‌های تکراری گزارش‌گیری",
        "تبدیل داده خام به خلاصه قابل تصمیم‌گیری"
      ],
      process: ["شناسایی سوالات مدیریتی", "اتصال منابع داده", "طراحی منطق بازیابی", "نمونه‌سازی پاسخ‌های AI", "آماده‌سازی جریان گزارش‌گیری"],
      impactMetrics: [
        { label: "سرعت پاسخ", value: "۹۰٪" },
        { label: "درخواست گزارش", value: "کاهش" },
        { label: "تصمیم‌یار", value: "آماده AI" }
      ],
      visual: "chatbot"
    },
    {
      slug: "export-logistics-container-planning",
      title: "اتوماسیون لجستیک صادراتی و چیدمان کانتینر",
      category: "اتوماسیون لجستیک",
      summary:
        "یک چارچوب اتوماسیون برای لجستیک صادراتی و چیدمان کانتینر که تجربه فردی را به قوانین تصمیم‌گیری قابل تکرار بر اساس داده‌های تاریخی تبدیل می‌کند.",
      problem:
        "برنامه‌ریزی چیدمان کانتینرها به تجربه فردی و تصمیم‌گیری دستی وابسته بود.",
      solution:
        "یک چارچوب اتوماسیون طراحی شد که داده‌های تاریخی چیدمان را تحلیل می‌کند، الگوهای تصمیم‌گیری را استخراج می‌کند و آن‌ها را به قوانین قابل تکرار برای پیشنهاد چیدمان بهتر تبدیل می‌کند.",
      whatIBuilt: [
        "چارچوب تحلیل چیدمان کانتینر",
        "استخراج الگو از داده تاریخی",
        "مدل تصمیم‌گیری قانون‌محور",
        "ساختار پیشنهاد چیدمان",
        "زیرساخت مستندسازی فرآیند"
      ],
      tools: ["تحلیل فرآیند", "سیستم‌های قانون‌محور", "تحلیل مبتنی بر AI", "داده لجستیک"],
      outcomes: [
        "کاهش خطای انسانی",
        "استانداردسازی برنامه‌ریزی کانتینر",
        "افزایش سرعت آماده‌سازی",
        "کاهش وابستگی به یک فرد کلیدی"
      ],
      process: ["بررسی برنامه‌های تاریخی", "شناسایی الگوهای تصمیم‌گیری", "استخراج قوانین", "طراحی منطق پیشنهاد", "مستندسازی جریان قابل تکرار"],
      impactMetrics: [
        { label: "یکپارچگی برنامه‌ریزی", value: "بهبود" },
        { label: "سرعت آماده‌سازی", value: "بیشتر" },
        { label: "ریسک وابستگی", value: "کاهش" }
      ],
      visual: "logistics"
    }
  ]
} as const;

export const caseStudySlugs = caseStudies.en.map((project) => project.slug);
