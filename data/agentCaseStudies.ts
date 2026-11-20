import type { CaseStudy } from "./caseStudies";

const wellbeingSource = "https://github.com/Iliyab7/wellbeing-agent-starter";
const librarySource = "https://github.com/Iliyab7/drive-book-library-agent";

export const agentEvidence = {
  wellbeingRelease: wellbeingSource + "/releases/tag/v0.4.8",
  libraryAcceptance: librarySource + "/blob/b7c419fa07b1d97d1b8e3675e31845d38e6d8f37/acceptance/ACCEPTANCE-FA.csv"
};

export const agentCaseStudies = {
  en: [
    {
      slug: "wellbeing-agent-starter",
      title: "Personal Wellbeing Agent Starter",
      category: "AI Agents / Personal Data",
      status: "Public pilot starter",
      summary: "A starter for a personal AI team that turns authorized evidence into a short health brief and carries context forward in a private Google Sheet.",
      problem: "Personal wellbeing information accumulates across tools and conversations. A useful assistant needs to remember what the person has confirmed, identify gaps, and respect their preferences about contact.",
      solution: "Designed a role-based workflow that starts with authorized source discovery, records a provisional profile for correction, and prepares a health section for the person's daily briefing. The coordinating agent decides when and where to present it according to the participant's preferences.",
      whatIBuilt: [
        "Role guides for a coordinator, manager, analyst and coach",
        "An onboarding flow that saves and reads back provisional context",
        "A private shared-memory model for preferences, evidence and open work",
        "A Python reference runtime and acceptance scenarios for handoff"
      ],
      tools: ["Python", "Google Sheets", "Dot", "Agent orchestration"],
      outcomes: [
        "The public starter provides instructions, a reference runtime and test scenarios",
        "A two-run scenario shows how provisional context carries into a later run",
        "Live scheduling and delivery depend on the participant's setup and permissions"
      ],
      process: ["Discover authorized sources", "Save and verify initial context", "Invite corrections", "Prepare an evidence-based health brief", "Carry feedback into the next run"],
      impactMetrics: [{ label: "Published artifact", value: "Pilot starter" }, { label: "Reference runtime", value: "Python" }, { label: "Continuity", value: "Private Sheet" }],
      source: wellbeingSource,
      evidence: [
        { label: "Optional hosted runtime architecture", href: wellbeingSource + "/blob/04ea0a6ccd22806bf7ff94dcbe795568bc6642ce/docs/architecture.md" },
        { label: "Two-run acceptance scenarios", href: wellbeingSource + "/blob/04ea0a6ccd22806bf7ff94dcbe795568bc6642ce/docs/participant-pilot-fa.md" },
        { label: "Pilot release v0.4.8", href: agentEvidence.wellbeingRelease }
      ],
      visual: "wellbeing"
    },
    {
      slug: "drive-book-library-agent",
      title: "Google Drive PDF Library Agent",
      category: "Knowledge Systems / Document Automation",
      status: "Public setup kit",
      summary: "A portable agent workflow for turning PDFs into a searchable library with a Sheets catalog, structured text and, where needed, a Persian translation and reading edition.",
      problem: "Archives of PDFs are hard to search and easy to duplicate. Translation and cleanup also need checks that can catch omissions before the files reach readers.",
      solution: "Built a versioned workflow around a Drive inbox, a resumable processing queue and a shared Sheets catalog. Review checks fidelity to the source, and QA checks that the final files meet the delivery requirements.",
      whatIBuilt: [
        "A Drive workflow that preserves the original PDF while work moves through the queue",
        "A Sheets catalog and versioned instructions for resuming from shared state",
        "Separate review and QA gates before output is delivered",
        "Offline fixtures, acceptance checks and upgrade documentation in Persian"
      ],
      tools: ["Python", "Google Drive", "Google Sheets", "Markdown", "HTML"],
      outcomes: [
        "The public kit includes setup, upgrade and acceptance instructions",
        "The deliverable can include the original PDF, structured Markdown and a Persian HTML edition",
        "Offline fixtures demonstrate the workflow. A live setup requires separate verification in the recipient’s account"
      ],
      process: ["Register each PDF", "Move it into processing", "Reconstruct and translate as needed", "Review source fidelity and final files", "Publish the approved files and update the catalog"],
      impactMetrics: [{ label: "Published artifact", value: "Setup kit" }, { label: "Shared catalog", value: "Google Sheets" }, { label: "Quality checks", value: "Review + QA" }],
      source: librarySource,
      evidence: [
        { label: "Content model", href: librarySource + "/blob/b7c419fa07b1d97d1b8e3675e31845d38e6d8f37/docs/CONTENT-MODEL-FA.md" },
        { label: "Acceptance checklist", href: agentEvidence.libraryAcceptance }
      ],
      visual: "library"
    }
  ],
  fa: [
    {
      slug: "wellbeing-agent-starter",
      title: "بستهٔ راه‌اندازی عامل بهزیستی شخصی",
      category: "عامل‌های هوش مصنوعی / داده‌های شخصی",
      status: "بستهٔ عمومی پایلوت",
      summary: "بستهٔ راه‌اندازی یک تیم هوش مصنوعی شخصی که از منابع مجاز، بخش کوتاهی برای گزارش سلامت آماده می‌کند و زمینهٔ کار را در Google Sheets خصوصی به نوبت بعد می‌برد.",
      problem: "اطلاعات مربوط به بهزیستی فرد بین ابزارها و گفت‌وگوها پراکنده است. دستیار باید بداند کدام اطلاعات را خود فرد تأیید کرده، چه چیزهایی هنوز روشن نیست و فرد چه ترجیحی برای دریافت گزارش دارد.",
      solution: "گردش کاری با نقش‌های جدا طراحی کردم که منابع مجاز را بررسی می‌کند، شناخت اولیه را برای اصلاح ثبت می‌کند و بخش سلامت را برای گزارش شخصی آماده می‌کند. عامل هماهنگ‌کننده زمان و محل ارائه را بر اساس ترجیح فرد تعیین می‌کند.",
      whatIBuilt: [
        "راهنمای نقش‌های هماهنگ‌کننده، مدیر، تحلیلگر و مربی",
        "فرایند شروع کار با ثبت و بازخوانی شناخت اولیه",
        "مدل حافظهٔ خصوصی مشترک برای ترجیحات، شواهد و کارهای باز",
        "محیط اجرای مرجع با پایتون و سناریوهای پذیرش برای تحویل"
      ],
      tools: ["Python", "Google Sheets", "Dot", "هماهنگی عامل‌ها"],
      outcomes: [
        "دستورهای اجرا، محیط مرجع و سناریوهای آزمون در بستهٔ عمومی در دسترس‌اند",
        "سناریوی دونوبتی نشان می‌دهد زمینهٔ اولیه چطور به اجرای بعدی منتقل می‌شود",
        "زمان‌بندی و تحویل زنده به تنظیمات و مجوزهای هر فرد وابسته‌اند"
      ],
      process: ["بررسی منابع مجاز", "ثبت و بازخوانی شناخت اولیه", "گرفتن اصلاح از فرد", "آماده‌سازی بخش سلامت با شواهد", "انتقال بازخورد به نوبت بعد"],
      impactMetrics: [{ label: "خروجی منتشرشده", value: "بستهٔ پایلوت" }, { label: "محیط اجرای مرجع", value: "Python" }, { label: "ادامهٔ کار", value: "شیت خصوصی" }],
      source: wellbeingSource,
      evidence: [
        { label: "معماری محیط اجرای اختیاری", href: wellbeingSource + "/blob/04ea0a6ccd22806bf7ff94dcbe795568bc6642ce/docs/architecture.md" },
        { label: "سناریوهای پذیرش دونوبتی", href: wellbeingSource + "/blob/04ea0a6ccd22806bf7ff94dcbe795568bc6642ce/docs/participant-pilot-fa.md" },
        { label: "انتشار پایلوت v0.4.8", href: agentEvidence.wellbeingRelease }
      ],
      visual: "wellbeing"
    },
    {
      slug: "drive-book-library-agent",
      title: "عامل کتابخانهٔ PDF در Google Drive",
      category: "سامانه‌های دانش / اتوماسیون اسناد",
      status: "بستهٔ عمومی راه‌اندازی",
      summary: "گردش کاری قابل انتقال برای تبدیل PDFها به یک کتابخانهٔ قابل جست‌وجو با فهرست Google Sheets، متن ساختاریافته و در صورت نیاز ترجمه و نسخهٔ فارسی برای مطالعه.",
      problem: "پیدا کردن منبع در آرشیوهای PDF دشوار است و فایل‌ها ممکن است چند بار پردازش شوند. بازسازی و ترجمه هم به کنترل نیاز دارند تا بخش‌های جامانده پیش از تحویل مشخص شوند.",
      solution: "برای Drive یک صف ورودی و پردازش قابل‌ادامه طراحی کردم و وضعیت را به فهرست مشترک در Google Sheets وصل کردم. بازبین وفاداری به منبع را بررسی می‌کند و کنترل کیفیت تطابق فایل نهایی با شرایط تحویل را می‌سنجد.",
      whatIBuilt: [
        "جریان جابه‌جایی فایل در Drive با حفظ PDF اصلی",
        "فهرست و دستورهای نسخه‌دار در Google Sheets برای ادامهٔ کار از همان وضعیت",
        "بازبینی محتوا و کنترل کیفیت فایل‌ها در دو مرحلهٔ مستقل",
        "نمونه‌های آزمون آفلاین، معیارهای پذیرش و راهنمای ارتقا به فارسی"
      ],
      tools: ["Python", "Google Drive", "Google Sheets", "Markdown", "HTML"],
      outcomes: [
        "راهنمای راه‌اندازی، ارتقا و پذیرش در بستهٔ عمومی در دسترس است",
        "خروجی می‌تواند شامل PDF اصلی، متن ساختاریافته و نسخهٔ فارسی HTML باشد",
        "نمونه‌های آفلاین گردش کار را نشان می‌دهند. راه‌اندازی زنده برای هر حساب جداگانه بررسی می‌شود"
      ],
      process: ["ثبت PDF در صف", "انتقال به پردازش", "بازسازی متن و ترجمه در صورت نیاز", "بازبینی محتوا و بررسی فایل‌ها", "تحویل خروجی تأییدشده و به‌روزرسانی فهرست"],
      impactMetrics: [{ label: "خروجی منتشرشده", value: "بستهٔ راه‌اندازی" }, { label: "فهرست مشترک", value: "Google Sheets" }, { label: "کنترل کیفیت", value: "بازبینی و QA" }],
      source: librarySource,
      evidence: [
        { label: "مدل محتوا", href: librarySource + "/blob/b7c419fa07b1d97d1b8e3675e31845d38e6d8f37/docs/CONTENT-MODEL-FA.md" },
        { label: "معیارهای پذیرش", href: agentEvidence.libraryAcceptance }
      ],
      visual: "library"
    }
  ]
} satisfies Record<"en" | "fa", readonly CaseStudy[]>;
