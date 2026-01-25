import type { Metadata } from "next";

import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProblemSection } from "@/components/ProblemSection";
import { SocialProof } from "@/components/SocialProof";
import { SolutionSection } from "@/components/SolutionSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { ProductShowcase } from "@/components/ProductShowcase";
import { PricingSection } from "@/components/PricingSection";
import { ContactSection } from "@/components/ContactSection";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { ArClient } from "@/components/ArClient";

export const metadata: Metadata = {
  title: "كريديا هاير - منصة توظيف مدعومة بالذكاء الاصطناعي | وظف بذكاء",
  description:
    "ذكاء اصطناعي يفحص 100 سيرة ذاتية في 5 دقائق. تقييم بدقة عشرية، مقابلات ثنائية اللغة، وتقييمات آلية. انضم إلى 127+ شركة توظف بذكاء.",
  alternates: {
    canonical: "https://cridia.ai/ar/",
    languages: {
      en: "https://cridia.ai/",
      ar: "https://cridia.ai/ar/",
    },
  },
  openGraph: {
    title: "كريديا هاير - منصة توظيف مدعومة بالذكاء الاصطناعي",
    description: "ذكاء اصطناعي يفحص 100 سيرة ذاتية في 5 دقائق. وظف بشكل أسرع وأفضل وأذكى.",
    url: "https://cridia.ai/ar/",
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
};

export default function HomeAr() {
  return (
    <ArClient>
      <main className="min-h-screen">
        <Header />
        <Hero />
        <ProblemSection />
        <SocialProof />
        <SolutionSection />
        <FeaturesSection />
        <ProductShowcase />
        <PricingSection />
        <ContactSection />
        <FinalCTA />
        <Footer />
      </main>
    </ArClient>
  );
}

