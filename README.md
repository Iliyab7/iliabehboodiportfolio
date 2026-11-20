# پورتفولیوی ایلیا

## بیلد و انتشار در Firebase Hosting

با Node.js 24، دستورهای `npm ci` و `npm run build` خروجی استاتیک را در `out/` می‌سازند. تنظیمات Hosting در `firebase.json` است و صفحه‌های نمونه‌کار مستقیم و با refresh باز می‌شوند.

Workflow به متغیر `FIREBASE_PROJECT_ID` و GitHub Secret به نام `FIREBASE_HOSTING_SERVICE_ACCOUNT` برای حساب سرویس پروژهٔ Firebase نیاز دارد. بعد از تنظیم این دو، از **Actions → Firebase Hosting** کانال `preview` را برای بررسی اجرا کنید. کانال `live` فقط از `main` منتشر می‌شود و pushهای بعدی به آن شاخه نیز انتشار را اجرا می‌کنند.

Workflow به‌طور پیش‌فرض آدرس `<project-id>.web.app` را در canonical، sitemap و robots استفاده می‌کند. وقتی دامنهٔ اختصاصی به Firebase متصل و تأیید شد، متغیر `PORTFOLIO_SITE_URL` را روی URL آن بگذارید و دوباره بیلد و منتشر کنید.
