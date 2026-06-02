export type Language = "en" | "fa";

export type ContactMethod = {
  label: string;
  value: string;
  href: string;
};

export type ContentProject = {
  title: string;
  category: string;
  problem: string;
  solution: string;
  tools: readonly string[];
  outcomes: readonly string[];
  link?: string;
};

export const contactLinks = {
  email: "mailto:iliyabehboudi@gmail.com",
  linkedin: "https://www.linkedin.com/in/ilia-behboodi-3904b7413/",
  telegram: "https://t.me/iliabehboodi",
  instagram: "https://www.instagram.com/iliabehboodi",
  whatsapp: "https://wa.me/989123865565",
  phone: "tel:+989123865565"
};

const enProjects = [
  {
    title: "Mining Operations Management System",
    category: "AI Automation / Operations",
    problem: "Manual mining reports were paper-based, delayed, and error-prone.",
    solution:
      "Built an automated Google Sheets and Apps Script system for data entry, validation, archiving, final reports, photo management, KPI dashboards, and AI-assisted management summaries.",
    tools: ["Google Sheets", "Google Apps Script", "Looker Studio", "n8n", "Telegram Bot", "AI/LLM"],
    outcomes: [
      "Reduced manual reporting steps",
      "Improved data accuracy",
      "Centralized operational data",
      "Enabled KPI dashboards",
      "Prepared AI-assisted management summaries"
    ]
  },
  {
    title: "Mahed Group Website",
    category: "B2B Website / SEO",
    problem:
      "The company needed a stronger digital presence for industrial credibility and international visibility.",
    solution:
      "Designed and developed a professional B2B website with SEO-focused structure, multilingual content planning, content architecture, and improved brand presentation.",
    tools: ["WordPress", "SEO", "Content Strategy", "UI/UX", "Multilingual Content"],
    outcomes: [
      "Improved digital credibility",
      "Structured industrial content",
      "Supported B2B communication",
      "Built stronger online presence"
    ],
    link: "https://mahed.co"
  },
  {
    title: "Shayan Quarry Website",
    category: "Industrial Website / Quarry Brand",
    problem: "The quarry needed a dedicated digital identity and clearer product presentation.",
    solution:
      "Created a focused quarry website for brand presentation, product positioning, SEO-oriented pages, and B2B trust-building.",
    tools: ["Website Design", "SEO", "Content Architecture", "Brand Presentation"],
    outcomes: [
      "Created dedicated quarry presence",
      "Improved product presentation",
      "Supported export-oriented communication",
      "Built stronger brand clarity"
    ],
    link: "https://shayanquarry.com"
  },
  {
    title: "Management AI Chatbot",
    category: "AI / Business Intelligence",
    problem: "Managers had to wait for manual reports to answer operational questions.",
    solution:
      "Designed a management chatbot concept that connects internal business data with an AI/LLM layer to answer natural-language questions about production, downtime, equipment, sales, and KPIs.",
    tools: ["AI/LLM", "Telegram Bot", "Google Sheets", "Workflow Automation", "Data Retrieval"],
    outcomes: [
      "Faster access to management insights",
      "Reduced repetitive reporting requests",
      "Turned raw data into decision-ready summaries"
    ]
  },
  {
    title: "Export Logistics & Container Planning Automation",
    category: "Logistics Automation",
    problem: "Container planning depended heavily on individual experience and manual decision-making.",
    solution:
      "Designed an automation framework to analyze historical container planning data, extract decision patterns, and turn them into repeatable rules for better loading suggestions.",
    tools: ["Process Analysis", "Rule-Based Systems", "AI-Assisted Analysis", "Logistics Data"],
    outcomes: [
      "Reduced human error",
      "Standardized container planning",
      "Improved preparation speed",
      "Reduced dependency on one key person"
    ]
  }
] as const;

const faProjects = [
  {
    title: "سیستم مدیریت عملیات معدن",
    category: "اتوماسیون هوش مصنوعی / عملیات",
    problem:
      "گزارش‌های روزانه معدن به‌صورت کاغذی، زمان‌بر، پرخطا و وابسته به ورود دستی داده انجام می‌شد.",
    solution:
      "یک سیستم خودکار مبتنی بر Google Sheets و Google Apps Script طراحی شد که ورود داده، اعتبارسنجی، آرشیو، گزارش نهایی، مدیریت عکس، داشبوردهای KPI و خلاصه‌سازی مدیریتی مبتنی بر AI را پوشش می‌دهد.",
    tools: ["Google Sheets", "Google Apps Script", "Looker Studio", "n8n", "ربات تلگرام", "AI/LLM"],
    outcomes: [
      "کاهش مراحل گزارش‌گیری دستی",
      "افزایش دقت و یکپارچگی داده‌ها",
      "ایجاد پایگاه داده عملیاتی مرکزی",
      "آماده‌سازی داده برای داشبوردهای مدیریتی",
      "امکان تولید خلاصه‌های مدیریتی با کمک AI"
    ]
  },
  {
    title: "وب‌سایت گروه ماهد",
    category: "وب‌سایت B2B / سئو",
    problem:
      "شرکت برای افزایش اعتبار صنعتی، حضور دیجیتال حرفه‌ای‌تر و دیده‌شدن در بازارهای داخلی و بین‌المللی به وب‌سایتی قوی‌تر نیاز داشت.",
    solution:
      "یک وب‌سایت حرفه‌ای B2B با ساختار سئومحور، برنامه‌ریزی محتوای چندزبانه، معماری محتوای صنعتی و ارائه بهتر برند طراحی و توسعه داده شد.",
    tools: ["WordPress", "SEO", "استراتژی محتوا", "UI/UX", "محتوای چندزبانه"],
    outcomes: [
      "افزایش اعتبار دیجیتال برند",
      "ساختاردهی محتوای صنعتی",
      "پشتیبانی از ارتباطات B2B",
      "تقویت حضور آنلاین شرکت"
    ],
    link: "https://mahed.co"
  },
  {
    title: "وب‌سایت معدن شایان",
    category: "وب‌سایت صنعتی / برندینگ معدن",
    problem:
      "معدن شایان به یک هویت دیجیتال مستقل و معرفی حرفه‌ای‌تر محصولات و ظرفیت‌های خود نیاز داشت.",
    solution:
      "یک وب‌سایت اختصاصی برای معرفی معدن، جایگاه‌سازی محصول، صفحات سئومحور و تقویت اعتماد در ارتباطات B2B طراحی شد.",
    tools: ["طراحی وب‌سایت", "SEO", "معماری محتوا", "ارائه برند"],
    outcomes: [
      "ایجاد حضور دیجیتال مستقل برای معدن",
      "بهبود معرفی محصول و ظرفیت‌ها",
      "پشتیبانی از ارتباطات صادراتی",
      "شفاف‌تر شدن هویت برند"
    ],
    link: "https://shayanquarry.com"
  },
  {
    title: "چت‌بات مدیریتی مبتنی بر داده",
    category: "هوش مصنوعی / هوش تجاری",
    problem:
      "مدیران برای دریافت پاسخ به سوالات عملیاتی مجبور بودند منتظر گزارش‌های دستی بمانند.",
    solution:
      "یک چت‌بات مدیریتی طراحی شد که داده‌های داخلی را به لایه AI/LLM متصل می‌کند و به سوالات طبیعی درباره تولید، توقف، تجهیزات، فروش و KPIها پاسخ می‌دهد.",
    tools: ["AI/LLM", "ربات تلگرام", "Google Sheets", "اتوماسیون جریان کار", "بازیابی داده"],
    outcomes: [
      "دسترسی سریع‌تر به بینش‌های مدیریتی",
      "کاهش درخواست‌های تکراری گزارش‌گیری",
      "تبدیل داده خام به خلاصه قابل تصمیم‌گیری"
    ]
  },
  {
    title: "اتوماسیون لجستیک صادراتی و چیدمان کانتینر",
    category: "اتوماسیون لجستیک",
    problem:
      "برنامه‌ریزی چیدمان کانتینرها به تجربه فردی و تصمیم‌گیری دستی وابسته بود.",
    solution:
      "یک چارچوب اتوماسیون طراحی شد که داده‌های تاریخی چیدمان را تحلیل می‌کند، الگوهای تصمیم‌گیری را استخراج می‌کند و آن‌ها را به قوانین قابل تکرار برای پیشنهاد چیدمان بهتر تبدیل می‌کند.",
    tools: ["تحلیل فرآیند", "سیستم‌های قانون‌محور", "تحلیل مبتنی بر AI", "داده لجستیک"],
    outcomes: [
      "کاهش خطای انسانی",
      "استانداردسازی برنامه‌ریزی کانتینر",
      "افزایش سرعت آماده‌سازی",
      "کاهش وابستگی به یک فرد کلیدی"
    ]
  }
] as const;

export const content = {
  en: {
    meta: {
      name: "Ilia Behboodi",
      title: "AI Automation & Digital Systems Strategist",
      positioning: "AI Automation & Digital Systems for B2B and industrial businesses."
    },
    nav: {
      brand: "Ilia Behboodi",
      items: [
        { label: "How I Help", href: "#help" },
        { label: "Projects", href: "#projects" },
        { label: "Impact", href: "#impact" },
        { label: "Process", href: "#process" },
        { label: "Tech Stack", href: "#tech" },
        { label: "About", href: "#about" },
        { label: "Contact", href: "#contact" }
      ],
      cta: "Contact Me"
    },
    hero: {
      badge: "AI Automation & Digital Systems Strategist",
      name: "Ilia Behboodi",
      microcopy: "Practical systems. Clear reporting. Less manual work.",
      headline: "Building AI-Powered Digital Systems for B2B & Industrial Businesses",
      subheadline:
        "I design automation workflows, dashboards, SEO-driven websites, and AI-assisted reporting systems that help traditional businesses reduce manual work, improve visibility, and make faster decisions.",
      shortSubheadline:
        "Automation, dashboards, SEO websites, and AI reporting systems for B2B operations.",
      primaryCta: "View Projects",
      secondaryCta: "Contact Me",
      downloadProfile: "Download Profile",
      quickLinks: ["Email", "LinkedIn", "Telegram"]
    },
    whatIBuild: {
      eyebrow: "What I Build",
      title: "Practical systems for traditional businesses becoming more digital.",
      description:
        "The work is focused on reducing manual effort, improving reporting quality, and making business operations easier to manage.",
      cards: [
        {
          title: "AI Automation Systems",
          description:
            "Workflow automation, n8n, Apps Script, Telegram bots, and AI-assisted reporting."
        },
        {
          title: "Business Dashboards",
          description:
            "KPI tracking, Looker Studio, Google Sheets systems, and operational analytics."
        },
        {
          title: "B2B Websites & SEO",
          description:
            "Industrial websites, multilingual SEO, content architecture, and lead-generation pages."
        },
        {
          title: "Lightweight ERP Systems",
          description:
            "Connected internal systems for sales, logistics, production, inventory, and reporting."
        }
      ]
    },
    projectsSection: {
      eyebrow: "Featured Projects",
      title: "Industrial automation, B2B websites, dashboards, and AI reporting concepts.",
      description:
        "Each project is structured around a real business problem, the system designed to solve it, and the operational outcomes it supports.",
      labels: {
        problem: "Problem",
        solution: "Solution",
        outcomes: "Outcomes",
        visit: "Visit Website",
        caseStudy: "View Case Study"
      }
    },
    projects: enProjects,
    proof: {
      eyebrow: "Proof of Work",
      title: "A practical portfolio built around real business systems.",
      description: "A practical portfolio built around real business systems, not theoretical demos.",
      cards: [
        {
          title: "Real Industrial Context",
          description:
            "Projects built around mining, quarry operations, B2B websites, reporting, and logistics workflows."
        },
        {
          title: "Systems, Not Just Tools",
          description:
            "Focused on workflows, data structures, dashboards, automation layers, and business outcomes."
        },
        {
          title: "Bilingual & Industrial Communication",
          description:
            "Experience with English/Persian content, industrial SEO, and technical business presentation."
        },
        {
          title: "AI Used Practically",
          description:
            "AI is used for reporting, summarization, decision support, content systems, and workflow acceleration."
        }
      ]
    },
    impact: {
      eyebrow: "Impact Dashboard",
      title: "A compact control panel for operational improvement.",
      description:
        "The dashboard frames portfolio outcomes as reporting speed, error reduction, workflow coverage, and decision support maturity.",
      note: "Metrics are based on internal project goals, operational estimates, and portfolio case studies.",
      metricCards: [
        { value: "70%", label: "Faster Reporting" },
        { value: "85%", label: "Error Reduction" },
        { value: "90%", label: "Faster Management Response" },
        { value: "8", label: "Operational Workflows" }
      ],
      projectImpact: [
        { name: "Mining Reporting System", value: 70 },
        { name: "Management AI Chatbot", value: 90 },
        { name: "Container Planning Automation", value: 60 },
        { name: "Lightweight ERP Architecture", value: 80 },
        { name: "B2B Website/SEO Systems", value: 65 }
      ],
      workflowStages: [
        { name: "Manual", value: 10 },
        { name: "Structured Data", value: 35 },
        { name: "Automation", value: 65 },
        { name: "Dashboard", value: 80 },
        { name: "AI Layer", value: 92 }
      ],
      automationCoverage: [
        { name: "Data Entry", value: 90 },
        { name: "Reporting", value: 85 },
        { name: "Decision Support", value: 75 },
        { name: "Marketing Systems", value: 70 },
        { name: "Operations", value: 80 }
      ]
    },
    process: {
      eyebrow: "Process",
      title: "A transformation pipeline from messy workflow to smarter system.",
      description:
        "I start by understanding the current workflow, then design a cleaner data structure, automate repetitive steps, build reporting dashboards, and add AI-assisted decision support where it creates real business value.",
      steps: [
        {
          title: "Audit",
          description: "Understand current workflows, bottlenecks, and business goals."
        },
        {
          title: "System Design",
          description: "Design clean data structures and scalable workflows."
        },
        {
          title: "Automation",
          description: "Automate repetitive steps using Apps Script, n8n, bots, and no-code tools."
        },
        {
          title: "Dashboard",
          description: "Turn operational data into KPI dashboards and management reports."
        },
        {
          title: "AI Layer",
          description: "Add AI-assisted reporting, summaries, and decision support where useful."
        }
      ]
    },
    techStack: {
      eyebrow: "Tech Stack",
      title: "Tools chosen for speed, clarity, and maintainability.",
      description:
        "The stack stays close to what B2B teams can actually adopt, operate, and improve over time.",
      groups: [
        {
          title: "Automation",
          items: ["n8n", "Google Apps Script", "Telegram Bot", "Workflow Automation"]
        },
        {
          title: "Data & BI",
          items: ["Google Sheets", "Excel", "Looker Studio", "KPI Reporting"]
        },
        {
          title: "Web & Marketing",
          items: ["WordPress", "SEO", "Content Strategy", "Multilingual Content"]
        },
        {
          title: "AI",
          items: ["ChatGPT", "Claude", "Gemini", "Perplexity", "Prompt Engineering"]
        }
      ]
    },
    about: {
      eyebrow: "About",
      title: "A systems-minded strategist for B2B and industrial operations.",
      body: "I work at the intersection of AI automation, digital marketing, and business operations. My focus is on building practical systems that help traditional and B2B companies reduce manual work, improve reporting, and grow through smarter digital infrastructure."
    },
    services: {
      eyebrow: "Work With Me",
      title: "How I Can Help",
      description:
        "Focused engagements for companies that need practical digital infrastructure, not abstract innovation theater.",
      items: [
        {
          title: "AI Automation Systems",
          description:
            "Automate repetitive workflows using Google Apps Script, n8n, bots, and AI-assisted processes."
        },
        {
          title: "KPI Dashboards & Reporting",
          description:
            "Build dashboards and reporting systems that turn scattered data into decision-ready insights."
        },
        {
          title: "B2B Websites & SEO",
          description:
            "Design industrial websites with SEO-focused structure, content architecture, and credibility-first presentation."
        },
        {
          title: "Lightweight ERP & Internal Systems",
          description:
            "Design connected systems for sales, logistics, production, inventory, and management reporting."
        }
      ],
      ctaTitle: "Have a system in mind?",
      ctaButton: "Start a Conversation"
    },
    contact: {
      eyebrow: "Contact",
      title: "Let's build a smarter system for your business.",
      description:
        "If you need a website, dashboard, automation workflow, or AI-assisted reporting system, this portfolio shows the kind of practical systems I build.",
      bestForTitle: "Best for:",
      bestFor: [
        "B2B and industrial companies",
        "Mining, stone, manufacturing, logistics, and operations teams",
        "Founders and managers who need automation, dashboards, or better digital systems"
      ],
      primaryCta: "Message me on Telegram",
      secondaryCta: "Send an email",
      methods: [
        { label: "Email", value: "iliyabehboudi@gmail.com", href: contactLinks.email },
        { label: "LinkedIn", value: "ilia-behboodi", href: contactLinks.linkedin },
        { label: "Telegram", value: "@iliabehboodi", href: contactLinks.telegram },
        { label: "WhatsApp", value: "+98 912 386 5565", href: contactLinks.whatsapp },
        { label: "Instagram", value: "@iliabehboodi", href: contactLinks.instagram },
        { label: "Call", value: "+98 912 386 5565", href: contactLinks.phone }
      ]
    },
    footer: {
      positioning: "AI Automation & Digital Systems for B2B and industrial businesses.",
      copyright: "All rights reserved."
    }
  },
  fa: {
    meta: {
      name: "ایلیا بهبودی",
      title: "استراتژیست اتوماسیون هوش مصنوعی و سیستم‌های دیجیتال",
      positioning: "اتوماسیون هوش مصنوعی و سیستم‌های دیجیتال برای کسب‌وکارهای صنعتی و B2B."
    },
    nav: {
      brand: "ایلیا بهبودی",
      items: [
        { label: "کمک به کسب‌وکار", href: "#help" },
        { label: "پروژه‌ها", href: "#projects" },
        { label: "اثرگذاری", href: "#impact" },
        { label: "فرآیند", href: "#process" },
        { label: "ابزارها", href: "#tech" },
        { label: "درباره", href: "#about" },
        { label: "تماس", href: "#contact" }
      ],
      cta: "ارتباط با من"
    },
    hero: {
      badge: "استراتژیست اتوماسیون هوش مصنوعی و سیستم‌های دیجیتال",
      name: "ایلیا بهبودی",
      microcopy: "سیستم‌های عملی. گزارش‌گیری شفاف. کار دستی کمتر.",
      headline: "طراحی سیستم‌های دیجیتال و اتوماسیون هوش مصنوعی برای کسب‌وکارهای صنعتی و B2B",
      subheadline:
        "من جریان‌های کاری خودکار، داشبوردهای مدیریتی، وب‌سایت‌های سئومحور و سیستم‌های گزارش‌سازی مبتنی بر هوش مصنوعی طراحی می‌کنم تا کسب‌وکارهای سنتی بتوانند کارهای دستی را کاهش دهند، شفاف‌تر کار کنند و سریع‌تر تصمیم بگیرند.",
      shortSubheadline:
        "اتوماسیون، داشبورد، وب‌سایت سئومحور و گزارش‌سازی AI برای کسب‌وکارهای B2B.",
      primaryCta: "مشاهده پروژه‌ها",
      secondaryCta: "ارتباط با من",
      downloadProfile: "دانلود پروفایل",
      quickLinks: ["ایمیل", "لینکدین", "تلگرام"]
    },
    whatIBuild: {
      eyebrow: "چه می‌سازم",
      title: "سیستم‌های عملی برای کسب‌وکارهای سنتی که دیجیتال‌تر می‌شوند.",
      description:
        "تمرکز این کارها روی کاهش کار دستی، بهبود کیفیت گزارش‌گیری و ساده‌تر کردن مدیریت عملیات روزانه است.",
      cards: [
        {
          title: "سیستم‌های اتوماسیون هوش مصنوعی",
          description:
            "اتوماسیون جریان کار، n8n، Apps Script، ربات تلگرام و گزارش‌سازی هوشمند مبتنی بر AI."
        },
        {
          title: "داشبوردهای مدیریتی",
          description:
            "ردیابی KPI، Looker Studio، سیستم‌های Google Sheets و تحلیل داده‌های عملیاتی."
        },
        {
          title: "وب‌سایت‌های B2B و SEO",
          description:
            "وب‌سایت‌های صنعتی، سئوی چندزبانه، معماری محتوا و صفحات متمرکز بر جذب لید."
        },
        {
          title: "سیستم‌های ERP سبک",
          description:
            "اتصال واحدهای فروش، لجستیک، تولید، انبار و گزارش‌گیری در یک ساختار یکپارچه و قابل توسعه."
        }
      ]
    },
    projectsSection: {
      eyebrow: "پروژه‌های منتخب",
      title: "اتوماسیون صنعتی، وب‌سایت‌های B2B، داشبوردها و سیستم‌های گزارش‌گیری هوشمند.",
      description:
        "هر پروژه بر اساس یک مسئله واقعی کسب‌وکار، راه‌حل طراحی‌شده و خروجی عملیاتی قابل استفاده معرفی شده است.",
      labels: {
        problem: "مسئله",
        solution: "راه‌حل",
        outcomes: "خروجی‌ها",
        visit: "مشاهده وب‌سایت",
        caseStudy: "مشاهده کیس‌استادی"
      }
    },
    projects: faProjects,
    proof: {
      eyebrow: "شواهد توانمندی",
      title: "پورتفولیویی بر پایه سیستم‌های واقعی کسب‌وکار.",
      description:
        "این پورتفولیو بر اساس سیستم‌های واقعی کسب‌وکار ساخته شده، نه دموهای نمایشی و بدون کاربرد.",
      cards: [
        {
          title: "زمینه واقعی صنعتی",
          description:
            "پروژه‌ها در بستر واقعی معدن، عملیات صنعتی، وب‌سایت‌های B2B، گزارش‌گیری و لجستیک طراحی شده‌اند."
        },
        {
          title: "سیستم، نه فقط ابزار",
          description:
            "تمرکز روی جریان کار، ساختار داده، داشبورد، لایه اتوماسیون و خروجی کسب‌وکار است؛ نه فقط استفاده از ابزار."
        },
        {
          title: "ارتباطات صنعتی و دوزبانه",
          description:
            "تجربه در محتوای فارسی و انگلیسی، سئوی صنعتی و ارائه حرفه‌ای کسب‌وکارهای فنی و صنعتی."
        },
        {
          title: "استفاده عملی از AI",
          description:
            "هوش مصنوعی برای گزارش‌سازی، خلاصه‌سازی، پشتیبانی تصمیم، سیستم‌های محتوا و افزایش سرعت جریان کار استفاده می‌شود."
        }
      ]
    },
    impact: {
      eyebrow: "داشبورد اثرگذاری",
      title: "یک پنل کنترلی فشرده برای بهبود عملیات.",
      description:
        "این داشبورد خروجی پروژه‌ها را از زاویه سرعت گزارش‌گیری، کاهش خطا، پوشش اتوماسیون و بلوغ تصمیم‌گیری مدیریتی نشان می‌دهد.",
      note: "شاخص‌ها بر اساس اهداف داخلی پروژه، برآوردهای عملیاتی و نمونه‌کارهای پورتفولیو ارائه شده‌اند.",
      metricCards: [
        { value: "۷۰٪", label: "گزارش‌گیری سریع‌تر" },
        { value: "۸۵٪", label: "کاهش خطا" },
        { value: "۹۰٪", label: "پاسخ مدیریتی سریع‌تر" },
        { value: "۸", label: "جریان عملیاتی" }
      ],
      projectImpact: [
        { name: "سیستم گزارش معدن", value: 70 },
        { name: "چت‌بات مدیریتی", value: 90 },
        { name: "اتوماسیون چیدمان کانتینر", value: 60 },
        { name: "معماری ERP سبک", value: 80 },
        { name: "وب‌سایت و SEO B2B", value: 65 }
      ],
      workflowStages: [
        { name: "دستی", value: 10 },
        { name: "داده ساختاریافته", value: 35 },
        { name: "اتوماسیون", value: 65 },
        { name: "داشبورد", value: 80 },
        { name: "لایه AI", value: 92 }
      ],
      automationCoverage: [
        { name: "ورود داده", value: 90 },
        { name: "گزارش‌گیری", value: 85 },
        { name: "تصمیم‌یار مدیریتی", value: 75 },
        { name: "سیستم‌های بازاریابی", value: 70 },
        { name: "عملیات", value: 80 }
      ]
    },
    process: {
      eyebrow: "فرآیند",
      title: "خط تبدیل جریان کاری پراکنده به سیستم هوشمند و قابل اتکا.",
      description:
        "ابتدا جریان کاری فعلی را تحلیل می‌کنم، سپس ساختار داده تمیزتری طراحی می‌کنم، مراحل تکراری را خودکار می‌کنم، داشبوردهای گزارش‌گیری می‌سازم و در نقاط ارزشمند، لایه تصمیم‌یار مبتنی بر هوش مصنوعی اضافه می‌کنم.",
      steps: [
        {
          title: "تحلیل فرآیند",
          description: "بررسی جریان کاری فعلی، گلوگاه‌ها و اهداف کسب‌وکار."
        },
        {
          title: "طراحی سیستم",
          description: "طراحی ساختار داده تمیز و جریان کاری قابل توسعه."
        },
        {
          title: "اتوماسیون",
          description: "خودکارسازی مراحل تکراری با Apps Script، n8n، ربات‌ها و ابزارهای no-code."
        },
        {
          title: "داشبورد",
          description: "تبدیل داده‌های عملیاتی به داشبوردهای KPI و گزارش مدیریتی."
        },
        {
          title: "لایه هوش مصنوعی",
          description:
            "افزودن گزارش‌سازی، خلاصه‌سازی و پشتیبانی تصمیم‌گیری مبتنی بر AI در نقاط ارزشمند."
        }
      ]
    },
    techStack: {
      eyebrow: "ابزارها",
      title: "ابزارهایی برای سرعت، شفافیت و نگهداری آسان.",
      description:
        "انتخاب ابزارها نزدیک به چیزی است که تیم‌های B2B بتوانند واقعا از آن استفاده کنند، نگه دارند و در طول زمان بهبود دهند.",
      groups: [
        {
          title: "اتوماسیون",
          items: ["n8n", "Google Apps Script", "ربات تلگرام", "اتوماسیون جریان کار"]
        },
        {
          title: "داده و BI",
          items: ["Google Sheets", "Excel", "Looker Studio", "گزارش‌گیری KPI"]
        },
        {
          title: "وب و بازاریابی",
          items: ["WordPress", "SEO", "استراتژی محتوا", "محتوای چندزبانه"]
        },
        {
          title: "هوش مصنوعی",
          items: ["ChatGPT", "Claude", "Gemini", "Perplexity", "مهندسی پرامپت"]
        }
      ]
    },
    about: {
      eyebrow: "درباره",
      title: "استراتژیست سیستم‌محور برای عملیات صنعتی و B2B.",
      body: "من در نقطه اتصال اتوماسیون هوش مصنوعی، دیجیتال مارکتینگ و عملیات کسب‌وکار کار می‌کنم. تمرکزم طراحی سیستم‌های عملی و قابل استفاده‌ای است که به شرکت‌های سنتی و B2B کمک می‌کنند کارهای دستی را کاهش دهند، گزارش‌گیری را بهتر کنند و با زیرساخت دیجیتال هوشمندتر رشد کنند."
    },
    services: {
      eyebrow: "همکاری",
      title: "چطور می‌توانم کمک کنم",
      description:
        "همکاری‌های عملی برای شرکت‌هایی که به زیرساخت دیجیتال قابل استفاده نیاز دارند، نه نمایش‌های پیچیده و کم‌کاربرد.",
      items: [
        {
          title: "سیستم‌های اتوماسیون هوش مصنوعی",
          description:
            "خودکارسازی جریان‌های کاری تکراری با Google Apps Script، n8n، ربات‌ها و فرآیندهای مبتنی بر AI."
        },
        {
          title: "داشبوردهای KPI و گزارش‌گیری",
          description:
            "ساخت داشبوردها و سیستم‌های گزارش‌گیری برای تبدیل داده‌های پراکنده به بینش‌های قابل تصمیم‌گیری."
        },
        {
          title: "وب‌سایت‌های B2B و SEO",
          description:
            "طراحی وب‌سایت‌های صنعتی با ساختار سئومحور، معماری محتوا و ارائه حرفه‌ای برای افزایش اعتماد."
        },
        {
          title: "ERP سبک و سیستم‌های داخلی",
          description:
            "طراحی سیستم‌های متصل برای فروش، لجستیک، تولید، انبار و گزارش‌گیری مدیریتی."
        }
      ],
      ctaTitle: "ایده یک سیستم را در ذهن دارید؟",
      ctaButton: "شروع گفتگو"
    },
    contact: {
      eyebrow: "تماس",
      title: "بیایید برای کسب‌وکار شما یک سیستم هوشمندتر بسازیم.",
      description:
        "اگر به وب‌سایت، داشبورد مدیریتی، اتوماسیون فرآیند یا سیستم گزارش‌سازی مبتنی بر هوش مصنوعی نیاز دارید، این پورتفولیو نمونه‌ای از سیستم‌های عملی‌ای است که می‌سازم.",
      bestForTitle: "مناسب برای:",
      bestFor: [
        "شرکت‌های صنعتی و B2B",
        "تیم‌های معدن، سنگ، تولید، لجستیک و عملیات",
        "مدیران و بنیان‌گذارانی که به اتوماسیون، داشبورد یا سیستم دیجیتال بهتر نیاز دارند"
      ],
      primaryCta: "ارسال پیام در تلگرام",
      secondaryCta: "ارسال ایمیل",
      methods: [
        { label: "ایمیل", value: "iliyabehboudi@gmail.com", href: contactLinks.email },
        { label: "لینکدین", value: "ilia-behboodi", href: contactLinks.linkedin },
        { label: "تلگرام", value: "@iliabehboodi", href: contactLinks.telegram },
        { label: "واتساپ", value: "+98 912 386 5565", href: contactLinks.whatsapp },
        { label: "اینستاگرام", value: "@iliabehboodi", href: contactLinks.instagram },
        { label: "تماس", value: "+98 912 386 5565", href: contactLinks.phone }
      ]
    },
    footer: {
      positioning: "اتوماسیون هوش مصنوعی و سیستم‌های دیجیتال برای کسب‌وکارهای صنعتی و B2B.",
      copyright: "تمام حقوق محفوظ است."
    }
  }
} as const;
