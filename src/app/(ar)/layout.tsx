import type { Metadata } from "next";
import { Cairo, Inter } from "next/font/google";
import "../globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const cairo = Cairo({
  subsets: ["arabic"],
  variable: "--font-cairo",
});

export const metadata: Metadata = {
  title: "كريديا للتوظيف - منصة توظيف بالذكاء الاصطناعي للشركات العربية",
  description: "منصة توظيف ذكية بأسعار معقولة مع دعم كامل للهجات العربية. إجراء مقابلات آلية بالعربي والإنجليزي بتكلفة أقل 90% من الحلول التقليدية.",
  keywords: ["توظيف بالذكاء الاصطناعي", "نظام توظيف عربي", "برامج الموارد البشرية", "مقابلات عمل آلية", "اللهجة العراقية", "توظيف للشركات الصغيرة"],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "كريديا للتوظيف - توظيف ذكي للشركات العربية",
    description: "مقابلات آلية بالذكاء الاصطناعي مع دعم اللهجات العربية",
    url: "https://cridia.ai/ar",
    siteName: "كريديا للتوظيف",
    locale: "ar_SA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "كريديا للتوظيف - منصة توظيف ذكية",
    description: "توظيف آلي بدعم اللهجات العربية",
  },
  alternates: {
    canonical: "https://cridia.ai/ar",
    languages: {
      en: "https://cridia.ai",
    },
  },
};

export default function ArLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-BDC51YE7Y3"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-BDC51YE7Y3');
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} ${cairo.variable} font-sans`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Cridia Hire",
              url: "https://cridia.ai",
              logo: "https://cridia.ai/cridia-icon.png",
              description: "AI-powered recruitment platform for smarter hiring decisions",
              address: {
                "@type": "PostalAddress",
                addressCountry: "IQ",
                addressLocality: "Baghdad",
              },
              sameAs: [
                "https://www.linkedin.com/company/cridia-hire",
                "https://twitter.com/cridiahire",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                email: "info@cridi.ai",
                contactType: "Customer Service",
                availableLanguage: ["English", "Arabic"],
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "كريديا للتوظيف",
              applicationCategory: "BusinessApplication",
              operatingSystem: "Web Browser",
              description: "منصة توظيف بالذكاء الاصطناعي مع دعم اللهجات العربية للشركات الصغيرة والمتوسطة",
              inLanguage: "ar",
              offers: {
                "@type": "Offer",
                priceCurrency: "USD",
                description: "حلول توظيف بأسعار معقولة",
              },
              audience: {
                "@type": "Audience",
                audienceType: "الشركات الصغيرة والمتوسطة",
                geographicArea: {
                  "@type": "Place",
                  name: "الشرق الأوسط وشمال أفريقيا",
                },
              },
            }),
          }}
        />
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
