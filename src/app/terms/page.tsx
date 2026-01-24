"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/lib/translations";

export default function TermsOfService() {
  const { language } = useLanguage();
  const t = (key: string) => getTranslation(language, key);

  const content = language === "en" ? {
    sections: [
      {
        title: "1. Acceptance of Terms",
        content: "By accessing and using Cridia Hire (\"the Service\"), you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the Service.",
      },
      {
        title: "2. Service Description",
        content: "Cridia Hire is an AI-powered recruitment platform that provides CV screening, interview automation, and candidate assessment tools. The Service is provided on a subscription basis with different pricing tiers.",
      },
      {
        title: "3. Account Registration",
        content: "To use the Service, you must:",
        list: [
          "Provide accurate and complete registration information",
          "Maintain the security of your account credentials",
          "Be at least 18 years old or the age of majority in your jurisdiction",
          "Represent a legitimate business entity",
        ],
      },
      {
        title: "4. Subscription and Payment",
        content: "All plans include a 7-day free trial. After the trial:",
        list: [
          "Subscriptions are billed monthly in advance",
          "Payment is processed through Qi Card payment gateway",
          "You may cancel at any time before the next billing cycle",
          "No refunds for partial months",
          "Usage limits apply based on your plan tier",
        ],
      },
      {
        title: "5. Acceptable Use",
        content: "You agree not to:",
        list: [
          "Use the Service for any illegal purpose",
          "Upload malicious code or attempt to breach security",
          "Share your account credentials with unauthorized parties",
          "Reverse engineer or attempt to extract source code",
          "Use the Service to discriminate against candidates based on protected characteristics",
        ],
      },
      {
        title: "6. Data Ownership and Usage",
        content: "You retain ownership of all candidate data you upload. We use your data solely to provide the Service and improve our AI models (in aggregate, anonymized form). You grant us a license to process your data for these purposes.",
      },
      {
        title: "7. Service Availability",
        content: "We strive for 99.9% uptime but do not guarantee uninterrupted service. We may perform scheduled maintenance with advance notice. We are not liable for service interruptions beyond our reasonable control.",
      },
      {
        title: "8. Limitation of Liability",
        content: "Cridia Hire is provided \"as is\" without warranties of any kind. We are not liable for hiring decisions made using the Service. Our total liability shall not exceed the amount you paid in the preceding 12 months.",
      },
      {
        title: "9. Termination",
        content: "We may suspend or terminate your account if you violate these Terms. Upon termination, you will lose access to the Service and your data may be deleted after a 30-day grace period.",
      },
      {
        title: "10. Changes to Terms",
        content: "We may update these Terms from time to time. We will notify you of significant changes via email. Continued use of the Service constitutes acceptance of updated Terms.",
      },
      {
        title: "11. Contact",
        content: "For questions about these Terms, contact us at: info@cridi.ai",
      },
    ],
  } : {
    sections: [
      {
        title: "1. قبول الشروط",
        content: "بالوصول واستخدام كريديا هاير (\"الخدمة\")، فإنك تقبل وتوافق على الالتزام بشروط الخدمة هذه. إذا كنت لا توافق على هذه الشروط، يرجى عدم استخدام الخدمة.",
      },
      {
        title: "2. وصف الخدمة",
        content: "كريديا هاير هي منصة توظيف مدعومة بالذكاء الاصطناعي توفر فحص السيرة الذاتية وأتمتة المقابلات وأدوات تقييم المرشحين. يتم توفير الخدمة على أساس الاشتراك مع مستويات تسعير مختلفة.",
      },
      {
        title: "3. تسجيل الحساب",
        content: "لاستخدام الخدمة، يجب عليك:",
        list: [
          "تقديم معلومات تسجيل دقيقة وكاملة",
          "الحفاظ على أمان بيانات اعتماد حسابك",
          "أن يكون عمرك 18 عاماً على الأقل أو سن الرشد في ولايتك القضائية",
          "تمثيل كيان تجاري شرعي",
        ],
      },
      {
        title: "4. الاشتراك والدفع",
        content: "تتضمن جميع الخطط تجربة مجانية لمدة 7 أيام. بعد التجربة:",
        list: [
          "يتم إصدار فواتير الاشتراكات شهرياً مقدماً",
          "تتم معالجة الدفع من خلال بوابة الدفع Qi Card",
          "يمكنك الإلغاء في أي وقت قبل دورة الفوترة التالية",
          "لا استرداد للأشهر الجزئية",
          "تنطبق حدود الاستخدام بناءً على مستوى خطتك",
        ],
      },
      {
        title: "5. الاستخدام المقبول",
        content: "أنت توافق على عدم:",
        list: [
          "استخدام الخدمة لأي غرض غير قانوني",
          "تحميل رمز ضار أو محاولة خرق الأمان",
          "مشاركة بيانات اعتماد حسابك مع أطراف غير مصرح لها",
          "الهندسة العكسية أو محاولة استخراج الكود المصدري",
          "استخدام الخدمة للتمييز ضد المرشحين بناءً على الخصائص المحمية",
        ],
      },
      {
        title: "6. ملكية البيانات والاستخدام",
        content: "أنت تحتفظ بملكية جميع بيانات المرشحين التي تقوم بتحميلها. نحن نستخدم بياناتك فقط لتقديم الخدمة وتحسين نماذج الذكاء الاصطناعي لدينا (بشكل إجمالي ومجهول الهوية). أنت تمنحنا ترخيصاً لمعالجة بياناتك لهذه الأغراض.",
      },
      {
        title: "7. توفر الخدمة",
        content: "نحن نسعى جاهدين لتحقيق وقت تشغيل بنسبة 99.9% ولكننا لا نضمن خدمة غير منقطعة. قد نقوم بإجراء صيانة مجدولة مع إشعار مسبق. نحن غير مسؤولين عن انقطاع الخدمة خارج سيطرتنا المعقولة.",
      },
      {
        title: "8. حدود المسؤولية",
        content: "يتم توفير كريديا هاير \"كما هي\" بدون ضمانات من أي نوع. نحن غير مسؤولين عن قرارات التوظيف المتخذة باستخدام الخدمة. لا تتجاوز مسؤوليتنا الإجمالية المبلغ الذي دفعته في الأشهر الـ 12 السابقة.",
      },
      {
        title: "9. الإنهاء",
        content: "قد نقوم بتعليق أو إنهاء حسابك إذا انتهكت هذه الشروط. عند الإنهاء، ستفقد الوصول إلى الخدمة وقد يتم حذف بياناتك بعد فترة سماح مدتها 30 يوماً.",
      },
      {
        title: "10. التغييرات على الشروط",
        content: "قد نقوم بتحديث هذه الشروط من وقت لآخر. سنخطرك بالتغييرات الهامة عبر البريد الإلكتروني. يشكل الاستخدام المستمر للخدمة قبولاً للشروط المحدثة.",
      },
      {
        title: "11. اتصل بنا",
        content: "للأسئلة حول هذه الشروط، اتصل بنا على: info@cridi.ai",
      },
    ],
  };

  return (
    <main className="min-h-screen">
      <Header />
      
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          {t("legal.terms.title")}
        </h1>
        <p className="text-titanium/60 mb-12">
          {t("legal.terms.lastUpdated")}: {language === "en" ? "January 25, 2025" : "25 يناير 2025"}
        </p>

        <div className="prose prose-invert prose-lg max-w-none space-y-8">
          {content.sections.map((section, index) => (
            <section key={index}>
              <h2 className="text-2xl font-bold text-white mb-4">{section.title}</h2>
              <p className="text-titanium/80 leading-relaxed mb-4">{section.content}</p>
              {section.list && (
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

