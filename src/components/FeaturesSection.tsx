"use client";

import { motion } from "framer-motion";
import { BarChart3, Cloud, Globe, Mic, Target, Users } from "lucide-react";
import { GlassCard } from "./ui/GlassCard";
import { SectionTitle } from "./ui/SectionTitle";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/lib/translations";

export function FeaturesSection() {
  const { language } = useLanguage();
  const t = (key: string) => getTranslation(language, key);
  const features = [
    {
      icon: Target,
      title: t("features.precision"),
      description: t("features.precisionDesc"),
      gradient: "from-purple-500 to-blue-500",
      span: "md:col-span-2",
    },
    {
      icon: Globe,
      title: t("features.bilingual"),
      description: t("features.bilingualDesc"),
      gradient: "from-blue-500 to-cyan-500",
      span: "md:col-span-1",
    },
    {
      icon: Mic,
      title: t("features.voice"),
      description: t("features.voiceDesc"),
      gradient: "from-cyan-500 to-green-500",
      span: "md:col-span-1",
    },
    {
      icon: Users,
      title: t("features.team"),
      description: t("features.teamDesc"),
      gradient: "from-green-500 to-yellow-500",
      span: "md:col-span-2",
    },
    {
      icon: BarChart3,
      title: t("features.structured"),
      description: t("features.structuredDesc"),
      gradient: "from-yellow-500 to-orange-500",
      span: "md:col-span-1",
    },
    {
      icon: Cloud,
      title: t("features.cloud"),
      description: t("features.cloudDesc"),
      gradient: "from-orange-500 to-red-500",
      span: "md:col-span-1",
    },
  ] as const;

  return (
    <section
      id="features"
      className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-tech rounded-full blur-3xl opacity-10" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-success rounded-full blur-3xl opacity-10" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <SectionTitle subtitle={t("features.subtitle")}>{t("features.title")}</SectionTitle>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                className={feature.span}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <GlassCard className="h-full relative overflow-hidden group">
                  {/* Gradient glow */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-2xl`}
                  />

                  {/* Icon container */}
                  <div className="relative mb-6">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} p-0.5 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <div className="w-full h-full bg-steel/80 backdrop-blur-xl rounded-2xl flex items-center justify-center">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-titanium transition-all duration-300">
                    {feature.title}
                  </h3>

                  <p className="text-titanium/80 leading-relaxed">{feature.description}</p>

                  {/* Hover border effect */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-white/10 transition-colors duration-300" />
                </GlassCard>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 glass rounded-2xl p-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-white mb-3">{t("features.ctaTitle")}</h3>
          <p className="text-titanium/80 mb-6 max-w-2xl mx-auto">
            {t("features.ctaDesc")}
          </p>
          <a
            href="#pricing"
            className="text-purple-400 hover:text-purple-300 transition-colors font-semibold inline-flex items-center gap-2 group"
          >
            {t("features.ctaLink")}
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

