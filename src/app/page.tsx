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
import { generateMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = generateMetadata(
  {
    title: "Cridia Hire - AI-Powered Recruitment Platform | Hire Smarter",
    description:
      "AI that screens 100 CVs in 5 minutes. Decimal precision scoring, bilingual interviews, and automated assessments. Join 127+ companies hiring smarter.",
    canonical: "/",
    alternates: {
      en: "/",
      ar: "/ar",
    },
  },
  "en"
);

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
