# پورتفولیوی ایلیا

## بیلد و انتشار در Firebase Hosting

با Node.js 24، دستورهای `npm ci` و `npm run build` خروجی استاتیک را در `out/` می‌سازند. تنظیمات Hosting در `firebase.json` است و صفحه‌های نمونه‌کار مستقیم و با refresh باز می‌شوند.

GitHub Actions با تغییرات `main` نسخهٔ زنده را روی Firebase Hosting منتشر می‌کند. برای انتشار دستی، در **Actions → Firebase Hosting** شاخهٔ `main` را انتخاب کنید و کانال `preview` یا `live` را اجرا کنید. دسترسی انتشار از Workload Identity Federation و اعتبارنامهٔ موقت گوگل استفاده می‌کند.

آدرس فعلی سایت `https://ilia-behboodi-portfolio.web.app` است و در canonical، sitemap و robots استفاده می‌شود. اگر دامنهٔ اختصاصی به Firebase متصل و تأیید شد، متغیر `PORTFOLIO_SITE_URL` را روی آدرس آن بگذارید و دوباره بیلد و منتشر کنید.
