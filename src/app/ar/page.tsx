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
  title: "كريديا هاير - منصة توظيف مدعومة بالذكاء الاصطناعي",
  description: "وظّف أسرع وأفضل بذكاء اصطناعي يفحص 100 سيرة ذاتية خلال 5 دقائق",
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

