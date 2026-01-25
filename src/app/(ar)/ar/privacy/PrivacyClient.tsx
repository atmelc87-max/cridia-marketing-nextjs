"use client";

import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

export default function PrivacyClientAr() {
  const { setLanguage } = useLanguage();

  useEffect(() => {
    setLanguage("ar");
  }, [setLanguage]);

  const sections = [
    {
      title: "1. المعلومات التي نجمعها",
      content:
        "نحن نجمع المعلومات التي تقدمها لنا مباشرة عند إنشاء حساب أو استخدام خدماتنا أو التواصل معنا. وهذا يشمل:",
      list: [
        "معلومات الحساب (الاسم، البريد الإلكتروني، تفاصيل الشركة)",
        "بيانات المرشحين (السير الذاتية، تسجيلات المقابلات، نتائج التقييم)",
        "بيانات الاستخدام (كيفية تفاعلك مع منصتنا)",
        "معلومات الدفع (تتم معالجتها بشكل آمن عبر Qi Card)",
      ],
    },
    {
      title: "2. كيف نستخدم معلوماتك",
      content: "نحن نستخدم المعلومات التي نجمعها من أجل:",
      list: [
        "توفير خدماتنا وصيانتها وتحسينها",
        "معالجة طلبات المرشحين وإجراء التقييمات المدعومة بالذكاء الاصطناعي",
        "إرسال إشعارات فنية ورسائل دعم إليك",
        "الرد على تعليقاتك وأسئلتك",
        "تحليل أنماط الاستخدام لتحسين تجربة المستخدم",
      ],
    },
    {
      title: "3. تخزين البيانات والأمان",
      content:
        "نحن نطبق تشفيراً بمستوى البنوك وتدابير أمنية قياسية في الصناعة لحماية بياناتك. يتم تخزين جميع ملفات السيرة الذاتية وتسجيلات المقابلات على بنية تحتية سحابية آمنة (Cloudflare R2) مع التشفير أثناء الراحة وأثناء النقل. الوصول مقتصر على الموظفين المصرح لهم فقط.",
    },
    {
      title: "4. الاحتفاظ بالبيانات",
      content:
        "نحتفظ ببياناتك طالما أن حسابك نشط أو حسب الحاجة لتقديم الخدمات. يمكنك طلب حذف بياناتك في أي وقت عن طريق الاتصال بنا على info@cridi.ai.",
    },
    {
      title: "5. خدمات الطرف الثالث",
      content: "نحن نستخدم خدمات الطرف الثالث التالية:",
      list: [
        "Anthropic Claude API (تحليل السيرة الذاتية والمقابلات المدععومة بالذكاء الاصطناعي)",
        "OpenAI Whisper (نسخ الكلام إلى نص)",
        "ElevenLabs (تحويل النص إلى كلام للمقابلات بالذكاء الاصطناعي)",
        "Cloudflare R2 (تخزين الملفات الآمن)",
        "Qi Card (معالجة الدفع)",
      ],
    },
    {
      title: "6. حقوقك",
      content: "لديك الحق في:",
      list: [
        "الوصول إلى بياناتك الشخصية",
        "تصحيح البيانات غير الدقيقة",
        "طلب حذف بياناتك",
        "الاعتراض على معالجة بياناتك",
        "تصدير بياناتك بتنسيق محمول",
      ],
    },
    {
      title: "7. اتصل بنا",
      content:
        "إذا كان لديك أي أسئلة حول سياسة الخصوصية هذه، يرجى الاتصال بنا على: info@cridi.ai",
    },
  ] as const;

  return (
    <main className="min-h-screen" dir="rtl">
      <Header />

      <article
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-24"
        style={{ paddingTop: "calc(var(--header-height, 140px) + 32px)" }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">سياسة الخصوصية</h1>
        <p className="text-titanium/60 mb-12">آخر تحديث: 25 يناير 2025</p>

        <div className="prose prose-invert prose-lg max-w-none space-y-8">
          {sections.map((section, index) => (
            <section key={index}>
              <h2 className="text-2xl font-bold text-white mb-4">{section.title}</h2>
              <p className="text-titanium/80 leading-relaxed mb-4">{section.content}</p>
              {"list" in section && section.list && (
                <ul className="list-disc list-inside text-titanium/80 space-y-2 ml-4">
                  {section.list.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>
      </article>

      <Footer />
    </main>
  );
}

