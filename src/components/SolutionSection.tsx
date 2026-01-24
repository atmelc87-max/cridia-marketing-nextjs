"use client";

import { motion } from "framer-motion";
import { Brain, FileText, Sparkles, Upload } from "lucide-react";
import { GlassCard } from "./ui/GlassCard";
import { SectionTitle } from "./ui/SectionTitle";
import { BentoGrid, BentoItem } from "./ui/BentoGrid";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/lib/translations";

export function SolutionSection() {
  const { language } = useLanguage();
  const t = (key: string) => getTranslation(language, key);
  const steps = [
    {
      number: "01",
      icon: Upload,
      title: t("solution.step1"),
      description: t("solution.step1Desc"),
      details: t("solution.step1Details"),
      gradient: "from-blue-500 to-cyan-500",
      span: "1" as const,
    },
    {
      number: "02",
      icon: Brain,
      title: t("solution.step2"),
      description: t("solution.step2Desc"),
      details: t("solution.step2Details"),
      gradient: "from-purple-500 to-pink-500",
      span: "2" as const,
    },
    {
      number: "03",
      icon: Sparkles,
      title: t("solution.step3"),
      description: t("solution.step3Desc"),
      details: t("solution.step3Details"),
      gradient: "from-green-500 to-emerald-500",
      span: "2" as const,
    },
    {
      number: "04",
      icon: FileText,
      title: t("solution.step4"),
      description: t("solution.step4Desc"),
      details: t("solution.step4Details"),
      gradient: "from-orange-500 to-red-500",
      span: "1" as const,
    },
  ] as const;

  return (
    <section id="how-it-works" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-steel to-obsidian" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <SectionTitle subtitle={t("solution.subtitle")}>{t("solution.title")}</SectionTitle>

        <BentoGrid className="mt-16">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <BentoItem key={index} span={step.span}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="h-full"
                >
                  <GlassCard className="h-full relative overflow-hidden group">
                    {/* Gradient glow on hover */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-3xl`}
                    />

                    {/* Gradient border on hover (Tailwind-safe) */}
                    <div
                      className={`pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-30 transition-opacity duration-300`}
                      style={{ padding: 2 }}
                    >
                      <div className="w-full h-full rounded-2xl bg-transparent" />
                    </div>

                    {/* Step number */}
                    <div
                      className={`absolute top-4 right-4 text-6xl font-bold bg-gradient-to-br ${step.gradient} text-gradient opacity-20 group-hover:opacity-40 transition-opacity duration-300`}
                    >
                      {step.number}
                    </div>

                    {/* Icon */}
                    <div
                      className={`relative w-14 h-14 mb-4 rounded-xl bg-gradient-to-br ${step.gradient} p-0.5 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <div className="w-full h-full bg-obsidian rounded-xl flex items-center justify-center">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold text-white mb-3 relative z-10">
                      {step.title}
                    </h3>

                    <p className="text-titanium/90 mb-4 leading-relaxed relative z-10">
                      {step.description}
                    </p>

                    <p className="text-sm text-titanium/60 relative z-10">{step.details}</p>
                  </GlassCard>
                </motion.div>
              </BentoItem>
            );
          })}
        </BentoGrid>

        {/* CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-xl text-titanium/80 mb-6">
            {t("solution.ctaText")}{" "}
            <span className="text-white font-semibold">{t("solution.ctaHighlight")}</span>
          </p>
          <div className="glass inline-block px-6 py-3 rounded-full">
            <span className="text-green-400 font-mono">
              {t("solution.timeSaved")}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

