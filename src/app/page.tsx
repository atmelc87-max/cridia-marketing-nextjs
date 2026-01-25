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
import { HomeClient } from "@/components/HomeClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cridia Hire - AI-Powered Recruitment Platform | Hire Smarter",
  description:
    "AI that screens 100 CVs in 5 minutes. Decimal precision scoring, bilingual interviews, and automated assessments. Join 127+ companies hiring smarter.",
  alternates: {
    canonical: "https://cridia.ai/",
    languages: {
      en: "https://cridia.ai/",
      ar: "https://cridia.ai/ar/",
    },
  },
  openGraph: {
    title: "Cridia Hire - AI-Powered Recruitment Platform | Hire Smarter",
    description:
      "AI that screens 100 CVs in 5 minutes. Decimal precision scoring, bilingual interviews, and automated assessments. Join 127+ companies hiring smarter.",
    url: "https://cridia.ai/",
    siteName: "Cridia Hire",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://cridia.ai/og-image.png",
        width: 1200,
        height: 630,
        alt: "Cridia Hire - AI-Powered Recruitment Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cridia Hire - AI-Powered Recruitment Platform | Hire Smarter",
    description:
      "AI that screens 100 CVs in 5 minutes. Decimal precision scoring, bilingual interviews, and automated assessments. Join 127+ companies hiring smarter.",
    images: ["https://cridia.ai/og-image.png"],
  },
};

export default function Home() {
  return (
    <HomeClient>
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
    </HomeClient>
  );
}
