import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "كريديا هاير - منصة توظيف مدعومة بالذكاء الاصطناعي | وظف بذكاء",
  description:
    "ذكاء اصطناعي يفحص 100 سيرة ذاتية في 5 دقائق. تقييم بدقة عشرية، مقابلات ثنائية اللغة، وتقييمات آلية. انضم إلى 127+ شركة توظف بذكاء.",
  keywords:
    "توظيف بالذكاء الاصطناعي, فحص السير الذاتية, أتمتة المقابلات, منصة توظيف, تقييم المرشحين, برنامج توظيف",
  authors: [{ name: "Cridia Hire" }],
  creator: "Cridia Hire",
  publisher: "Cridia Hire",
  alternates: {
    canonical: "https://cridia.ai/ar",
    languages: {
      en: "https://cridia.ai",
      ar: "https://cridia.ai/ar",
    },
  },
  openGraph: {
    title: "كريديا هاير - منصة توظيف مدعومة بالذكاء الاصطناعي",
    description:
      "ذكاء اصطناعي يفحص 100 سيرة ذاتية في 5 دقائق. وظف بشكل أسرع وأفضل وأذكى.",
    url: "https://cridia.ai/ar",
    siteName: "Cridia Hire",
    locale: "ar_IQ",
    type: "website",
    images: [
      {
        url: "https://cridia.ai/og-image-ar.png",
        width: 1200,
        height: 630,
        alt: "كريديا هاير - منصة توظيف بالذكاء الاصطناعي",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "كريديا هاير - منصة توظيف مدعومة بالذكاء الاصطناعي",
    description: "ذكاء اصطناعي يفحص 100 سيرة ذاتية في 5 دقائق. وظف بذكاء.",
    images: ["https://cridia.ai/og-image-ar.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function ArabicLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

