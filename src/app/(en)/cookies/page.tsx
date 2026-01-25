"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/lib/translations";
import { useEffect } from "react";

export default function CookiePolicy() {
  const { language, setLanguage } = useLanguage();
  const t = (key: string) => getTranslation(language, key);

  useEffect(() => {
    const pathname = window.location.pathname;
    if (!pathname.startsWith('/ar')) {
      setLanguage("en");
    }
  }, [setLanguage]);

  const content = language === "en" ? {
    intro: {
      title: "What Are Cookies?",
      content: "Cookies are small text files stored on your device when you visit our website. They help us provide a better user experience by remembering your preferences and analyzing how you use our service.",
    },
    types: {
      title: "Types of Cookies We Use",
      items: [
        {
          title: "1. Essential Cookies",
          content: "Required for the website to function. These include authentication cookies that keep you logged in and session cookies that remember your settings during your visit.",
        },
        {
          title: "2. Performance Cookies",
          content: "Help us understand how visitors interact with our website by collecting anonymous information about page visits, errors, and loading times.",
        },
        {
          title: "3. Functional Cookies",
          content: "Remember your preferences such as language selection, theme preferences, and notification settings.",
        },
      ],
    },
    table: {
      title: "Cookies We Use",
      headers: ["Cookie Name", "Purpose", "Duration"],
      rows: [
        ["auth_token", "Keeps you logged in", "24 hours"],
        ["language", "Remembers language preference", "1 year"],
        ["session_id", "Identifies your session", "Session"],
      ],
    },
    managing: {
      title: "Managing Cookies",
      content: "You can control cookies through your browser settings:",
      list: [
        "Block all cookies (may affect website functionality)",
        "Delete cookies after each visit",
        "Allow cookies only from specific websites",
        "Set your browser to notify you when a cookie is set",
      ],
    },
    thirdParty: {
      title: "Third-Party Cookies",
      content: "We do not currently use third-party advertising or tracking cookies. If we integrate analytics services in the future, we will update this policy and provide opt-out options.",
    },
    updates: {
      title: "Updates to This Policy",
      content: "We may update this Cookie Policy to reflect changes in our practices or legal requirements. Check this page periodically for updates.",
    },
    contact: {
      title: "Contact",
      content: "Questions about our use of cookies? Contact us at: info@cridi.ai",
    },
  } : {
    intro: {
      title: "ما هي ملفات تعريف الارتباط؟",
      content: "ملفات تعريف الارتباط هي ملفات نصية صغيرة يتم تخزينها على جهازك عند زيارة موقعنا الإلكتروني. تساعدنا في توفير تجربة مستخدم أفضل من خلال تذكر تفضيلاتك وتحليل كيفية استخدامك لخدمتنا.",
    },
    types: {
      title: "أنواع ملفات تعريف الارتباط التي نستخدمها",
      items: [
        {
          title: "1. ملفات تعريف الارتباط الأساسية",
          content: "مطلوبة لعمل الموقع الإلكتروني. وتشمل هذه ملفات تعريف الارتباط للمصادقة التي تبقيك مسجلاً للدخول وملفات تعريف ارتباط الجلسة التي تتذكر إعداداتك أثناء زيارتك.",
        },
        {
          title: "2. ملفات تعريف الارتباط للأداء",
          content: "تساعدنا على فهم كيفية تفاعل الزوار مع موقعنا الإلكتروني من خلال جمع معلومات مجهولة المصدر حول زيارات الصفحة والأخطاء وأوقات التحميل.",
        },
        {
          title: "3. ملفات تعريف الارتباط الوظيفية",
          content: "تتذكر تفضيلاتك مثل اختيار اللغة وتفضيلات السمة وإعدادات الإشعارات.",
        },
      ],
    },
    table: {
      title: "ملفات تعريف الارتباط التي نستخدمها",
      headers: ["اسم ملف تعريف الارتباط", "الغرض", "المدة"],
      rows: [
        ["auth_token", "يبقيك مسجلاً للدخول", "24 ساعة"],
        ["language", "يتذكر تفضيل اللغة", "سنة واحدة"],
        ["session_id", "يحدد جلستك", "الجلسة"],
      ],
    },
    managing: {
      title: "إدارة ملفات تعريف الارتباط",
      content: "يمكنك التحكم في ملفات تعريف الارتباط من خلال إعدادات المتصفح الخاص بك:",
      list: [
        "حظر جميع ملفات تعريف الارتباط (قد يؤثر على وظائف الموقع)",
        "حذف ملفات تعريف الارتباط بعد كل زيارة",
        "السماح بملفات تعريف الارتباط فقط من مواقع محددة",
        "ضبط المتصفح لإخطارك عند تعيين ملف تعريف ارتباط",
      ],
    },
    thirdParty: {
      title: "ملفات تعريف الارتباط من طرف ثالث",
      content: "نحن لا نستخدم حالياً ملفات تعريف ارتباط إعلانية أو تتبع من طرف ثالث. إذا قمنا بدمج خدمات التحليلات في المستقبل، فسنقوم بتحديث هذه السياسة وتوفير خيارات إلغاء الاشتراك.",
    },
    updates: {
      title: "التحديثات على هذه السياسة",
      content: "قد نقوم بتحديث سياسة ملفات تعريف الارتباط هذه لتعكس التغييرات في ممارساتنا أو المتطلبات القانونية. تحقق من هذه الصفحة بشكل دوري للحصول على التحديثات.",
    },
    contact: {
      title: "اتصل بنا",
      content: "أسئلة حول استخدامنا لملفات تعريف الارتباط؟ اتصل بنا على: info@cridi.ai",
    },
  };

  return (
    <main className="min-h-screen">
      <Header />
      
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          {t("legal.cookies.title")}
        </h1>
        <p className="text-titanium/60 mb-12">
          {t("legal.cookies.lastUpdated")}: {language === "en" ? "January 25, 2025" : "25 يناير 2025"}
        </p>

        <div className="prose prose-invert prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">{content.intro.title}</h2>
            <p className="text-titanium/80 leading-relaxed">{content.intro.content}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">{content.types.title}</h2>
            <div className="space-y-6">
              {content.types.items.map((item, index) => (
                <div key={index}>
                  <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-titanium/80 leading-relaxed">{item.content}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">{content.table.title}</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border border-white/10">
                <thead className="bg-steel/50">
                  <tr>
                    {content.table.headers.map((header, index) => (
                      <th key={index} className="px-4 py-3 text-white border-b border-white/10">
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="text-titanium/80">
                  {content.table.rows.map((row, index) => (
                    <tr key={index}>
                      {row.map((cell, cellIndex) => (
                        <td key={cellIndex} className={`px-4 py-3 ${index < content.table.rows.length - 1 ? 'border-b border-white/5' : ''}`}>
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">{content.managing.title}</h2>
            <p className="text-titanium/80 leading-relaxed mb-4">{content.managing.content}</p>
            <ul className="list-disc list-inside text-titanium/80 space-y-2 ml-4">
              {content.managing.list.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">{content.thirdParty.title}</h2>
            <p className="text-titanium/80 leading-relaxed">{content.thirdParty.content}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">{content.updates.title}</h2>
            <p className="text-titanium/80 leading-relaxed">{content.updates.content}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">{content.contact.title}</h2>
            <p className="text-titanium/80 leading-relaxed">{content.contact.content}</p>
          </section>
        </div>
      </article>

      <Footer />
    </main>
  );
}

