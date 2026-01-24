"use client";

import { motion } from "framer-motion";
import { AnimatedButton } from "./ui/AnimatedButton";
import { Shield, Globe, CreditCard } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/lib/translations";

export function FinalCTA() {
  const { language } = useLanguage();
  const t = (key: string) => getTranslation(language, key);
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-pink-900/20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-tech rounded-full blur-3xl opacity-20 animate-pulse" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="text-white">{t("finalCta.title1")}</span>
            <br />
            <span className="bg-gradient-tech text-gradient">{t("finalCta.title2")}</span>
          </h2>

          <p className="text-xl text-titanium/80 mb-8 max-w-2xl mx-auto">
            {t("finalCta.subtitle")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <AnimatedButton
              href="https://hire.cridia.ai/register"
              variant="primary"
              className="text-lg px-10"
            >
              {t("finalCta.startTrial")}
            </AnimatedButton>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-8 text-sm text-titanium/60">
            <div className="flex items-center gap-2">
              <Shield size={20} className="text-green-400" />
              <span>{t("finalCta.encryption")}</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe size={20} className="text-blue-400" />
              <span>{t("finalCta.gdpr")}</span>
            </div>
            <div className="flex items-center gap-2">
              <CreditCard size={20} className="text-purple-400" />
              <span>{t("finalCta.secure")}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

