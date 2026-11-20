import type { Language } from "./content";

export type WalkthroughStep = {
  name: string;
  description: string;
  artifact: string;
  rows: readonly (readonly [label: string, value: string])[];
};

export type Walkthrough = {
  context: readonly string[];
  built: readonly { name: string; description: string }[];
  title: string;
  setup: string;
  steps: readonly [WalkthroughStep, WalkthroughStep, WalkthroughStep, WalkthroughStep];
  verification: string;
};

export const featuredWalkthroughs: Readonly<Partial<Record<string, Record<Language, Walkthrough>>>> = {
  "mahed-lead-generation-platform": {
    en: {
      context: ["Market research used to produce scattered lists. A sales colleague seeing a company name needed to reconstruct where it came from, whether another researcher had already found it and why it was qualified.","Research, review and sales needed a shared record to carry the source and the decision through to the report."],
      built: [
        {"name":"Search and job workspace","description":"Set up reusable searches and a job center so researchers can track queued, active and completed work."},
        {"name":"Company and lead records","description":"Connected company records to branches, contacts, source evidence and a reviewable qualification status."},
        {"name":"Reports and handoff","description":"Built configurable reports and tracked export builds so the team can reuse a reviewed selection."},
      ],
      title: "A research batch becomes a sales handoff",
      setup: "A researcher is looking for fictional buyers in a sample market. One buyer appears in two results.",
      steps: [
        {
          name: "Set up the search",
          description: "The researcher selects a market and keyword. The search is saved and its execution has a trackable job.",
          artifact: "Search job",
          rows: [["Market","Sample market A"],["Keyword","Stone distributor"],["Job state","Completed"]]
        },
        {
          name: "Review the matches",
          description: "The reviewer looks at overlapping results and their source context before keeping the candidate record.",
          artifact: "Candidate record",
          rows: [["Company","Sample Buyer A"],["Sources","Two sample listings"],["Review decision","Keep one candidate"]]
        },
        {
          name: "Qualify the lead",
          description: "A reviewer records the decision and keeps a candidate with unresolved source details in review.",
          artifact: "Review queue",
          rows: [["Sample Buyer A","Qualified"],["Sample Buyer B","Source needs review"],["Handoff gate","Review completed"]]
        },
        {
          name: "Hand off to sales",
          description: "The report includes the selected lead, its qualification and the sources the sales team can inspect.",
          artifact: "Sales report",
          rows: [["Included","Sample Buyer A"],["Excluded from this report","Sample Buyer B"],["Fields","Company, review status, source"]]
        },
      ],
      verification: "The documented implementation includes persisted research runs, lead qualification and tracked report builds. The public demo is currently unavailable."
    },
    fa: {
      context: ["تحقیق بازار فهرست‌هایی پراکنده تولید می‌کرد. همکار فروش برای هر نام باید دوباره پیدا می‌کرد شرکت از کدام منبع آمده، قبلاً ثبت شده یا نه و بر چه اساسی واجد شرایط تشخیص داده شده است.","تیم تحقیق، بازبینی و فروش به سابقه‌ای مشترک نیاز داشتند که منبع و دلیل تصمیم را تا مرحلهٔ گزارش حفظ کند."],
      built: [
        {"name":"محیط جست‌وجو و پیگیری اجرا","description":"جست‌وجوهای قابل استفادهٔ دوباره و مرکز پیگیری کار را ساختم تا پژوهشگر وضعیت صف، اجرا و تکمیل را ببیند."},
        {"name":"رکورد شرکت و سرنخ","description":"رکورد شرکت را به شعبه، راه‌های تماس، شواهد منبع و وضعیت قابل بازبینی ارزیابی وصل کردم."},
        {"name":"گزارش و تحویل به فروش","description":"گزارش قابل تنظیم و خروجی قابل پیگیری ساختم تا تیم بتواند از همان فهرست بازبینی‌شده استفاده کند."},
      ],
      title: "تبدیل یک جست‌وجوی بازار به گزارش فروش",
      setup: "پژوهشگری در یک بازار فرضی دنبال خریدار است. نام یکی از خریداران در دو نتیجه ظاهر می‌شود.",
      steps: [
        {
          name: "تعریف جست‌وجو",
          description: "پژوهشگر بازار و کلیدواژه را انتخاب می‌کند. جست‌وجو ذخیره می‌شود و اجرای آن قابل پیگیری است.",
          artifact: "کار جست‌وجو",
          rows: [["بازار","بازار فرضی الف"],["کلیدواژه","توزیع‌کنندهٔ سنگ"],["وضعیت اجرا","تکمیل شد"]]
        },
        {
          name: "بازبینی نتایج",
          description: "بازبین نتایج هم‌پوشان و شواهد هر منبع را می‌بیند و تصمیم می‌گیرد کدام رکورد را نگه دارد.",
          artifact: "رکورد پیشنهادی",
          rows: [["شرکت","خریدار فرضی الف"],["منابع","دو فهرست نمونه"],["تصمیم بازبین","یک رکورد نگه داشته شود"]]
        },
        {
          name: "ارزیابی سرنخ",
          description: "بازبین نتیجه را ثبت می‌کند. رکوردی که منبعش هنوز روشن نشده، در صف بررسی می‌ماند.",
          artifact: "صف بازبینی",
          rows: [["خریدار فرضی الف","واجد شرایط"],["خریدار فرضی ب","منبع نیاز به بررسی دارد"],["شرط تحویل","تکمیل بازبینی"]]
        },
        {
          name: "تحویل به فروش",
          description: "گزارش، سرنخ انتخاب‌شده و نتیجهٔ ارزیابی را همراه منبعی که فروش می‌تواند بررسی کند تحویل می‌دهد.",
          artifact: "گزارش فروش",
          rows: [["در گزارش","خریدار فرضی الف"],["خارج از این گزارش","خریدار فرضی ب"],["ستون‌ها","شرکت، وضعیت بازبینی، منبع"]]
        },
      ],
      verification: "مستندات، اجرای ذخیره‌شدهٔ تحقیق، ارزیابی سرنخ و ساخت قابل پیگیری گزارش را پوشش می‌دهند. دموی عمومی فعلاً در دسترس نیست."
    }
  },
  "enterprise-knowledge-workbench": {
    en: {
      context: ["A PDF can take several sessions to extract, correct and translate. Passing the file between people makes it hard to tell which version has been reviewed and whether it is ready for shared use.","The workspace needed to preserve progress and give operators a separate view from the published library."],
      built: [
        {"name":"Operator workspace and worker","description":"Built a Persian workspace for submitting files and inspecting their processing state. A separate background worker runs the jobs."},
        {"name":"Two review steps","description":"Added review for extracted text before translation and a separate review for the translation before publication."},
        {"name":"Publication queue and library","description":"Linked approved items to matching Markdown and JSON outputs, then to a shared catalog searchable by metadata."},
      ],
      title: "One document through the library",
      setup: "An operator submits a fictional English document. The first extraction contains a heading out of order.",
      steps: [
        {
          name: "Submit the document",
          description: "The workspace keeps a job record while the separate worker extracts text from the PDF.",
          artifact: "Worker queue",
          rows: [["Item","Sample Document A"],["Input","English PDF"],["Job","Extract text"]]
        },
        {
          name: "Review the extraction",
          description: "The reviewer compares the extracted text with the source and corrects the heading before approving the text for translation.",
          artifact: "Extraction review",
          rows: [["Finding","Heading out of order"],["Decision","Return for correction"],["Next step","Approve corrected text"]]
        },
        {
          name: "Review the translation",
          description: "The translation is checked against the accepted text. Approval makes the output eligible for publishing.",
          artifact: "Translation review",
          rows: [["Source","Approved extraction"],["Output","Persian translation"],["Decision","Approved in this example"]]
        },
        {
          name: "Publish and find it",
          description: "The publication queue passes the accepted package to the shared catalog. Readers find its metadata and open the published files.",
          artifact: "Published library record",
          rows: [["Title","Sample Document A"],["Outputs","Markdown and JSON"],["Visible to readers","Published item"]]
        },
      ],
      verification: "Representative development checks covered the web and worker flow and publication of a synthetic document to a development destination. Production acceptance is a separate milestone."
    },
    fa: {
      context: ["استخراج، اصلاح و ترجمهٔ یک PDF ممکن است چند نوبت طول بکشد. دست‌به‌دست شدن فایل مشخص نمی‌کند کدام نسخه بازبینی شده و کدام نسخه آمادهٔ استفادهٔ مشترک است.","سامانه باید پیشرفت پردازش را حفظ می‌کرد و محیط کار اپراتور را از کتابخانهٔ آثار منتشرشده جدا نگه می‌داشت."],
      built: [
        {"name":"محیط اپراتور و پردازشگر","description":"محیط فارسی برای ارسال فایل و دیدن وضعیت کار ساختم. پردازشگر جداگانه در پس‌زمینه کارها را اجرا می‌کند."},
        {"name":"دو مرحلهٔ بازبینی","description":"بازبینی متن استخراج‌شده را قبل از ترجمه و بازبینی جداگانهٔ ترجمه را قبل از انتشار قرار دادم."},
        {"name":"صف انتشار و کتابخانه","description":"آثار تأییدشده را به خروجی هم‌خوان Markdown و JSON و بعد به فهرست مشترک قابل جست‌وجو با فراداده وصل کردم."},
      ],
      title: "مسیر یک سند تا کتابخانه",
      setup: "اپراتور یک سند انگلیسی ساختگی بارگذاری می‌کند. ترتیب یکی از تیترها در استخراج اولیه به‌هم ریخته است.",
      steps: [
        {
          name: "ثبت سند",
          description: "محیط کار وضعیت وظیفه را نگه می‌دارد و پردازشگر جداگانه متن PDF را استخراج می‌کند.",
          artifact: "صف پردازش",
          rows: [["سند","سند نمونهٔ الف"],["ورودی","PDF انگلیسی"],["کار جاری","استخراج متن"]]
        },
        {
          name: "بازبینی استخراج",
          description: "بازبین متن را با منبع مقایسه می‌کند و ترتیب تیتر را پیش از تأیید برای ترجمه اصلاح می‌کند.",
          artifact: "بازبینی استخراج",
          rows: [["یافته","ترتیب نادرست تیتر"],["تصمیم","بازگشت برای اصلاح"],["مرحلهٔ بعد","تأیید متن اصلاح‌شده"]]
        },
        {
          name: "بازبینی ترجمه",
          description: "ترجمه با متن تأییدشده سنجیده می‌شود و پس از تأیید وارد مسیر انتشار می‌شود.",
          artifact: "بازبینی ترجمه",
          rows: [["منبع","استخراج تأییدشده"],["خروجی","ترجمهٔ فارسی"],["تصمیم","تأیید در این نمونه"]]
        },
        {
          name: "انتشار و بازیابی",
          description: "صف انتشار بستهٔ تأییدشده را به فهرست مشترک می‌فرستد تا خواننده سند را با فراداده پیدا کند و فایل‌های منتشرشده را باز کند.",
          artifact: "رکورد کتابخانه",
          rows: [["عنوان","سند نمونهٔ الف"],["خروجی‌ها","Markdown و JSON"],["نمای خواننده","سند منتشرشده"]]
        },
      ],
      verification: "بررسی‌های توسعه، مسیر وب و پردازشگر و انتشار یک سند ساختگی در مقصد توسعه را پوشش داده‌اند. پذیرش تولید مرحلهٔ جداگانه‌ای است."
    }
  },
  "mining-operations-management-system": {
    en: {
      context: ["Shift information entered on paper or in disconnected forms left the office to reconcile reports by hand. A missing field could travel as far as the management summary.","The workflow needed a consistent record for the shift and a way to retain reviewed entries for reporting."],
      built: [
        {"name":"Structured field collection","description":"Built the Sheets and Apps Script workflow to collect comparable shift records and check required fields."},
        {"name":"Review and archive","description":"Connected submissions, corrections and archived records so the reporting view can work from validated entries."},
        {"name":"Reporting layer","description":"Organized production reporting and dashboard inputs, with a management summary based on the recorded data."},
      ],
      title: "One shift from entry to report",
      setup: "In this fictional shift, the operator records 18 tonnes and initially leaves the shift field blank.",
      steps: [
        {
          name: "Capture the record",
          description: "The operator enters the production quantity and shift context in the structured form.",
          artifact: "Production entry",
          rows: [["Record","Sample shift entry"],["Production","18 tonnes"],["Shift","Missing"]]
        },
        {
          name: "Complete the required information",
          description: "Validation calls attention to the missing shift. The record is corrected before it is used for the report.",
          artifact: "Validation result",
          rows: [["Finding","Shift required"],["Correction","Shift A"],["Record state","Complete in this example"]]
        },
        {
          name: "Review and archive",
          description: "The reviewed entry stays available for reporting and later reference.",
          artifact: "Reviewed record",
          rows: [["Shift","Shift A"],["Production","18 tonnes"],["State","Reviewed"]]
        },
        {
          name: "Roll up the report",
          description: "The same reviewed entry contributes to the production report and gives the summary a traceable input.",
          artifact: "Illustrated report row",
          rows: [["Shift","Shift A"],["Reviewed production","18 tonnes"],["Source","Sample shift entry"]]
        },
      ],
      verification: "This case describes the Sheets and Apps Script workflow. The separate web implementation is documented as a development track."
    },
    fa: {
      context: ["اطلاعات شیفت روی کاغذ یا در فرم‌های جدا ثبت می‌شد و دفتر باید گزارش‌ها را دستی تطبیق می‌داد. یک فیلد ناقص می‌توانست تا خلاصهٔ مدیریتی پیش برود.","گردش کار به رکورد یکدست شیفت و روشی برای نگهداری ثبت‌های بازبینی‌شده به‌عنوان مبنای گزارش نیاز داشت."],
      built: [
        {"name":"ثبت ساختاریافتهٔ اطلاعات","description":"با Google Sheets و Apps Script مسیر ثبت رکوردهای قابل مقایسهٔ شیفت و کنترل فیلدهای ضروری را ساختم."},
        {"name":"بازبینی و بایگانی","description":"ثبت، اصلاح و بایگانی را به هم وصل کردم تا لایهٔ گزارش بتواند از رکوردهای اعتبارسنجی‌شده استفاده کند."},
        {"name":"لایهٔ گزارش‌گیری","description":"گزارش تولید و ورودی‌های داشبورد را ساختار دادم تا خلاصهٔ مدیریتی از دادهٔ ثبت‌شده ساخته شود."},
      ],
      title: "از ثبت شیفت تا گزارش تولید",
      setup: "در این مثال ساختگی، اپراتور ۱۸ تن تولید ثبت می‌کند و ابتدا فیلد شیفت را خالی می‌گذارد.",
      steps: [
        {
          name: "ثبت اطلاعات",
          description: "اپراتور مقدار تولید و زمینهٔ شیفت را در فرم ساختاریافته وارد می‌کند.",
          artifact: "فرم ثبت تولید",
          rows: [["رکورد","ثبت نمونهٔ شیفت"],["تولید","۱۸ تن"],["شیفت","خالی"]]
        },
        {
          name: "تکمیل اطلاعات لازم",
          description: "اعتبارسنجی فیلد خالی را مشخص می‌کند. رکورد پیش از استفاده در گزارش اصلاح می‌شود.",
          artifact: "نتیجهٔ اعتبارسنجی",
          rows: [["ایراد","ثبت شیفت الزامی است"],["اصلاح","شیفت الف"],["وضعیت","تکمیل‌شده در نمونه"]]
        },
        {
          name: "بازبینی و بایگانی",
          description: "ثبت بازبینی‌شده برای گزارش و مراجعهٔ بعدی در دسترس می‌ماند.",
          artifact: "رکورد بازبینی‌شده",
          rows: [["شیفت","شیفت الف"],["تولید","۱۸ تن"],["وضعیت","بازبینی شد"]]
        },
        {
          name: "ساخت گزارش",
          description: "همان ثبت بازبینی‌شده وارد گزارش تولید می‌شود تا ورودیِ خلاصهٔ مدیریتی هم قابل ردیابی باشد.",
          artifact: "ردیف نمونهٔ گزارش",
          rows: [["شیفت","شیفت الف"],["تولید بازبینی‌شده","۱۸ تن"],["منبع","ثبت نمونهٔ شیفت"]]
        },
      ],
      verification: "این مطالعه گردش کار Google Sheets و Apps Script را توصیف می‌کند. پیاده‌سازی وب در مستندات به‌عنوان مسیر توسعهٔ جداگانه آمده است."
    }
  },
  "ai-engineering-delivery": {
    en: {
      context: ["When an AI-assisted project moves to a different session or person, the accepted scope and the reason a change was approved can disappear into chat history.","A handoff needed to carry the work plan, acceptance criteria and evidence that actually belongs to the current change."],
      built: [
        {"name":"Versioned intake and plan","description":"Designed the workflow to turn the request into a scope, acceptance checks and an executable next step."},
        {"name":"Evidence validation","description":"Built local reference checks for missing, stale and conflicting evidence at work checkpoints."},
        {"name":"Portable handoff","description":"Packaged the current scope, review decisions, open work and references so a fresh reviewer can resume from the relevant records."},
      ],
      title: "An example change through delivery",
      setup: "A fictional team asks for a filter on a document index. The sample follows that one change from intake to handoff.",
      steps: [
        {
          name: "Turn the request into scope",
          description: "The request is translated into a verifiable result. The expected behavior becomes the acceptance check.",
          artifact: "Work plan",
          rows: [["Change","Filter the document index"],["Acceptance","Only matching items are shown"],["State","Ready to build"]]
        },
        {
          name: "Attach current evidence",
          description: "The implementer links an example run to the current change. Evidence belonging to an older version is flagged.",
          artifact: "Checkpoint record",
          rows: [["Provided","An older test run"],["Decision","Re-run after the change"],["Required","Current acceptance result"]]
        },
        {
          name: "Review the new result",
          description: "The reviewer compares the new evidence with the accepted behavior before advancing the work.",
          artifact: "Review record",
          rows: [["Check","Matching and nonmatching items"],["Result","Pass in the fictional run"],["Decision","Ready for handoff"]]
        },
        {
          name: "Carry the work forward",
          description: "A new contributor opens the handoff, sees what was accepted and can find the evidence and remaining work.",
          artifact: "Handoff packet",
          rows: [["Accepted scope","Document filter"],["Evidence","Current fixture run"],["Next owner","Sample reviewer"]]
        },
      ],
      verification: "The reference runtime was exercised in local and synthetic scenarios. The published example illustrates the method at that scope."
    },
    fa: {
      context: ["وقتی پروژهٔ مبتنی بر هوش مصنوعی به جلسه یا نفر دیگری منتقل می‌شود، محدودهٔ پذیرفته‌شده و دلیل تأیید تغییر ممکن است در تاریخچهٔ گفت‌وگو گم شود.","بستهٔ تحویل باید طرح کار، معیار پذیرش و شواهد مربوط به همان تغییر جاری را همراه خود داشته باشد."],
      built: [
        {"name":"ورود و برنامهٔ نسخه‌دار","description":"گردشی طراحی کردم که درخواست را به محدوده، بررسی‌های پذیرش و قدم بعدی قابل اجرا تبدیل کند."},
        {"name":"اعتبارسنجی شواهد","description":"برای نقاط کنترل، بررسی محلی ساختم تا شاهد قدیمی، ناقص یا متناقض مشخص شود."},
        {"name":"تحویل قابل انتقال","description":"محدوده، تصمیم بازبین، کار باز و ارجاع‌ها را بسته‌بندی کردم تا همکار تازه از رکوردهای مربوط ادامه دهد."},
      ],
      title: "عبور یک تغییر نمونه از مسیر تحویل",
      setup: "یک تیم فرضی برای فهرست اسناد فیلتر می‌خواهد. نمونه، همین تغییر را از دریافت درخواست تا تحویل دنبال می‌کند.",
      steps: [
        {
          name: "تبدیل درخواست به محدوده",
          description: "درخواست به نتیجهٔ قابل بررسی تبدیل می‌شود و رفتار مورد انتظار معیار پذیرش را مشخص می‌کند.",
          artifact: "برنامهٔ کار",
          rows: [["تغییر","فیلتر فهرست اسناد"],["پذیرش","نمایش فقط موارد مطابق"],["وضعیت","آمادهٔ ساخت"]]
        },
        {
          name: "پیوست شاهد جاری",
          description: "سازنده اجرای نمونه را به تغییر جاری وصل می‌کند. شاهد متعلق به نسخهٔ قبلی مشخص می‌شود.",
          artifact: "رکورد نقطهٔ کنترل",
          rows: [["شاهد ارائه‌شده","اجرای آزمون قبلی"],["تصمیم","اجرای دوباره پس از تغییر"],["مورد لازم","نتیجهٔ پذیرش نسخهٔ جاری"]]
        },
        {
          name: "بازبینی نتیجهٔ تازه",
          description: "بازبین شاهد جدید را با رفتار پذیرفته‌شده می‌سنجد و بعد کار را جلو می‌برد.",
          artifact: "رکورد بازبینی",
          rows: [["بررسی","موارد مطابق و نامطابق"],["نتیجه","قبولی در اجرای ساختگی"],["تصمیم","آمادهٔ تحویل"]]
        },
        {
          name: "تحویل برای ادامه",
          description: "همکار تازه بسته را باز می‌کند و محدوده، شواهد و کار باقی‌مانده را در همان‌جا پیدا می‌کند.",
          artifact: "بستهٔ تحویل",
          rows: [["محدودهٔ پذیرفته‌شده","فیلتر سند"],["شاهد","اجرای نمونهٔ نسخهٔ جاری"],["مسئول بعدی","بازبین فرضی"]]
        },
      ],
      verification: "محیط اجرای مرجع در سناریوهای محلی و ساختگی بررسی شده است. نمونهٔ منتشرشده روش را در همین محدوده نشان می‌دهد."
    }
  },
  "trade-accounting-reconciliation": {
    en: {
      context: ["Broker statements can arrive in revised versions. Importing them as new transactions risks counting a trade twice, while replacing the previous rows loses the evidence needed to reconcile it.","The ledger needed to preserve source rows and show which calculated outputs could safely replace the previous report."],
      built: [
        {"name":"Staged import and exception queue","description":"Built the import around source rows, recorded batches and explicit review of possible revisions."},
        {"name":"Rebuildable trade calculations","description":"Calculated moving weighted-average cost and realized/unrealized results from accepted trades rather than editing the source ledger."},
        {"name":"Publication after reconciliation","description":"Used checks and saved previous outputs so an unresolved discrepancy can hold the refreshed report."},
      ],
      title: "A revised trade reaches reconciliation",
      setup: "These trades and values are fictional. Two buys are followed by a sale. The source later reports a possible revision to the sale.",
      steps: [
        {
          name: "Import the statement",
          description: "The input rows are recorded, then accepted transactions become inputs to calculation.",
          artifact: "Accepted trade inputs",
          rows: [["Buy A","5 units at 10"],["Buy B","5 units at 14"],["Sale A","3 units at 16"]]
        },
        {
          name: "Rebuild the calculations",
          description: "The two buys give an average cost of 12 per unit. The sale of 3 units uses 36 of that cost.",
          artifact: "Illustrative calculation before fees",
          rows: [["Average cost","12 per unit"],["Cost of the sale","36"],["Realized result","12"]]
        },
        {
          name: "Review a possible revision",
          description: "A later row gives a different quantity for the same sale. It is held for review next to the accepted row.",
          artifact: "Reconciliation exception",
          rows: [["Accepted sale","3 units"],["Incoming row","4 units"],["Decision","Review source before accepting"]]
        },
        {
          name: "Protect the previous report",
          description: "The unresolved revision is surfaced for the reviewer. A failed reconciliation keeps the previous calculated output in place.",
          artifact: "Report status",
          rows: [["Exception","Quantity differs"],["Published output","Previous calculation retained"],["Next action","Resolve the revision"]]
        },
      ],
      verification: "The case is documented as a release candidate with import, rebuild and reconciliation checks. The arithmetic here is simplified and uses fictional values."
    },
    fa: {
      context: ["گزارش کارگزاری ممکن است با نسخهٔ اصلاح‌شده دوباره برسد. ورود آن به‌عنوان معاملهٔ تازه می‌تواند به دوباره‌شماری منجر شود و جایگزینی رکورد قبلی، شاهد لازم برای تطبیق را از بین می‌برد.","دفتر باید ردیف منبع را حفظ می‌کرد و روشن می‌کرد چه زمانی خروجی محاسبه‌شده می‌تواند جای گزارش قبلی را بگیرد."],
      built: [
        {"name":"ورود مرحله‌ای و صف مغایرت","description":"ورود را بر اساس ردیف منبع و ثبت هر نوبت ساختم و اصلاحیه‌های احتمالی را برای بررسی جدا کردم."},
        {"name":"محاسبهٔ قابل بازسازی معاملات","description":"میانگین موزون متحرک و نتیجهٔ شناسایی‌شده و شناسایی‌نشده را از معاملات پذیرفته‌شده محاسبه کردم تا دفتر منبع باقی بماند."},
        {"name":"انتشار پس از تطبیق","description":"کنترل تطبیق و نگهداری خروجی قبلی را اضافه کردم تا مغایرت حل‌نشده مانع جایگزینی گزارش شود."},
      ],
      title: "رسیدگی به اصلاحیهٔ یک معامله",
      setup: "معاملات و مقدارها ساختگی‌اند. بعد از دو خرید، یک فروش ثبت می‌شود و بعدتر منبع، اصلاحیه‌ای برای فروش می‌فرستد.",
      steps: [
        {
          name: "ورود گزارش",
          description: "ردیف‌های منبع ثبت می‌شوند و معاملات پذیرفته‌شده ورودی محاسبه خواهند بود.",
          artifact: "ورودی معاملات پذیرفته‌شده",
          rows: [["خرید الف","۵ واحد با قیمت ۱۰"],["خرید ب","۵ واحد با قیمت ۱۴"],["فروش الف","۳ واحد با قیمت ۱۶"]]
        },
        {
          name: "بازسازی محاسبه",
          description: "دو خرید، بهای میانگین ۱۲ برای هر واحد می‌دهند. بهای ۳ واحد فروخته‌شده ۳۶ است.",
          artifact: "محاسبهٔ نمونه پیش از کارمزد",
          rows: [["بهای میانگین","۱۲ برای هر واحد"],["بهای فروش","۳۶"],["نتیجهٔ شناسایی‌شده","۱۲"]]
        },
        {
          name: "بررسی اصلاحیهٔ احتمالی",
          description: "در ردیف تازه، تعداد همان فروش فرق کرده است. ردیف جدید کنار معاملهٔ پذیرفته‌شده در انتظار بررسی می‌ماند.",
          artifact: "مغایرت در تطبیق",
          rows: [["فروش پذیرفته‌شده","۳ واحد"],["ردیف ورودی","۴ واحد"],["تصمیم","بررسی منبع پیش از تأیید"]]
        },
        {
          name: "حفظ گزارش قبلی",
          description: "بازبین مغایرت را می‌بیند و تا وقتی تطبیق ناموفق است، خروجی محاسبه‌شدهٔ قبلی سر جایش می‌ماند.",
          artifact: "وضعیت گزارش",
          rows: [["مغایرت","اختلاف تعداد"],["خروجی منتشرشده","محاسبهٔ قبلی حفظ شد"],["اقدام بعدی","رسیدگی به اصلاحیه"]]
        },
      ],
      verification: "شواهد نامزد انتشار، کنترل‌های ورود، بازسازی و تطبیق را پوشش می‌دهند. محاسبهٔ این صفحه ساده‌سازی شده و عددها ساختگی‌اند."
    }
  },
  "mobile-store-operations": {
    en: {
      context: ["Daily operations involve short tasks spread across order, product and inventory screens. On a phone, finding the right action and seeing its impact can take longer than the action itself.","The operator needed a focused queue, a way to return to the same context and separate permissions for sensitive work."],
      built: [
        {"name":"Daily mobile workspace","description":"Built short entry points for today's work, orders, catalog and stock on top of native WooCommerce operations."},
        {"name":"Product and stock actions","description":"Added guided editing for a product and its variants, plus a stock adjustment flow with before/after review and a reason."},
        {"name":"Boundaries for sensitive work","description":"Separated operator permissions and protected stock actions against stale state and repeated submissions."},
      ],
      title: "Fixing a stock count from a phone",
      setup: "An operator notices the counted quantity differs from the recorded quantity for a fictional variant.",
      steps: [
        {
          name: "Open today's queue",
          description: "The operator sees a task and opens the sample product from the mobile workspace.",
          artifact: "Today's queue",
          rows: [["Task","Check stock count"],["Product","Sample item A"],["Variant","Sample variant B"]]
        },
        {
          name: "Find the correct variant",
          description: "The product view separates variants, so the operator opens the matching stock record before editing.",
          artifact: "Variant record",
          rows: [["Selected","Variant B"],["Recorded stock","6 units"],["Counted stock","8 units"]]
        },
        {
          name: "Review the adjustment",
          description: "The form shows the existing value, the proposed count and the reason before the operator confirms.",
          artifact: "Adjustment preview",
          rows: [["Before","6 units"],["After","8 units"],["Reason","Physical count"]]
        },
        {
          name: "Save and see the result",
          description: "The stock view shows the updated count. A stale record or repeated request follows the adjustment safeguards.",
          artifact: "Stock result",
          rows: [["Sample variant","Variant B"],["New count","8 units"],["Adjustment","Recorded in this example"]]
        },
      ],
      verification: "Representative operator tasks were documented with host checks. This walkthrough uses a fictional catalog and shows a stock adjustment scenario."
    },
    fa: {
      context: ["کارهای روزانه بین صفحه‌های سفارش، کالا و موجودی پراکنده بودند. روی گوشی پیدا کردن اقدام درست و فهمیدن اثر آن گاهی از خود اقدام طولانی‌تر می‌شد.","اپراتور به صف متمرکز، حفظ زمینهٔ کار بعد از ویرایش و دسترسی جدا برای اقدام‌های حساس نیاز داشت."],
      built: [
        {"name":"محیط روزانهٔ موبایل","description":"روی عملیات بومی WooCommerce مسیرهای کوتاه برای کارهای امروز، سفارش‌ها، کالا و موجودی ساختم."},
        {"name":"اقدام‌های کالا و موجودی","description":"ویرایش مرحله‌ای کالا و تنوع‌ها و مسیر اصلاح موجودی با نمایش مقدار قبل و بعد و ثبت دلیل را اضافه کردم."},
        {"name":"حدود اقدام‌های حساس","description":"دسترسی‌های اپراتور را جدا کردم و برای وضعیت قدیمی و ارسال دوبارهٔ اقدام موجودی کنترل گذاشتم."},
      ],
      title: "اصلاح شمارش موجودی از روی گوشی",
      setup: "اپراتور برای یک تنوع فرضی متوجه می‌شود تعداد شمارش‌شده با موجودی ثبت‌شده فرق دارد.",
      steps: [
        {
          name: "باز کردن صف امروز",
          description: "اپراتور کار را می‌بیند و از محیط موبایلی وارد کالای نمونه می‌شود.",
          artifact: "صف کارهای امروز",
          rows: [["کار","بررسی شمارش موجودی"],["کالا","کالای نمونهٔ الف"],["تنوع","تنوع نمونهٔ ب"]]
        },
        {
          name: "انتخاب تنوع درست",
          description: "صفحهٔ کالا تنوع‌ها را جدا نشان می‌دهد. اپراتور قبل از ویرایش، رکورد موجودی همان تنوع را باز می‌کند.",
          artifact: "رکورد تنوع",
          rows: [["انتخاب","تنوع ب"],["موجودی ثبت‌شده","۶ عدد"],["تعداد شمارش‌شده","۸ عدد"]]
        },
        {
          name: "مرور اصلاح موجودی",
          description: "پیش از تأیید، مقدار قبلی، شمارش پیشنهادی و دلیل اصلاح در فرم کنار هم دیده می‌شوند.",
          artifact: "پیش‌نمایش اصلاح",
          rows: [["قبل","۶ عدد"],["بعد","۸ عدد"],["دلیل","شمارش فیزیکی"]]
        },
        {
          name: "ثبت و دیدن نتیجه",
          description: "نمای موجودی مقدار جدید را نشان می‌دهد. رکورد قدیمی یا درخواست تکراری از مسیر کنترل‌های اصلاح عبور می‌کند.",
          artifact: "نتیجهٔ ثبت موجودی",
          rows: [["تنوع نمونه","تنوع ب"],["موجودی جدید","۸ عدد"],["اصلاح","در این نمونه ثبت شد"]]
        },
      ],
      verification: "نمونه‌هایی از کار اپراتور روی هاست بررسی و مستند شده‌اند. این نمایش از کاتالوگ ساختگی برای توضیح یک اصلاح موجودی استفاده می‌کند."
    }
  },
};
