"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SectionTitle } from "./ui/SectionTitle";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/lib/translations";

export function ProductShowcase() {
  const { language } = useLanguage();
  const t = (key: string) => getTranslation(language, key);

  const screenshots = [
    {
      title: t("showcase.dashboard"),
      description: t("showcase.dashboardDesc"),
      image: "/screenshots/dashboard.png",
      span: "md:col-span-2",
      fallback: "from-blue-500 to-purple-500",
    },
    {
      title: t("showcase.cvAnalysis"),
      description: t("showcase.cvAnalysisDesc"),
      image: "/screenshots/cv-analysis.png",
      span: "md:col-span-1",
      fallback: "from-purple-500 to-pink-500",
    },
    {
      title: t("showcase.interviewSetup"),
      description: t("showcase.interviewSetupDesc"),
      image: "/screenshots/interview-setup.png",
      span: "md:col-span-1",
      fallback: "from-green-500 to-cyan-500",
    },
    {
      title: t("showcase.reports"),
      description: t("showcase.reportsDesc"),
      image: "/screenshots/interview-report.png",
      span: "md:col-span-2",
      fallback: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-steel/30 to-obsidian" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <SectionTitle subtitle={t("showcase.subtitle")}>
          {t("showcase.title")}
        </SectionTitle>

        {/* Screenshot Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {screenshots.map((screenshot, index) => (
            <motion.div
              key={index}
              className={screenshot.span}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="glass rounded-2xl p-6 group hover:scale-[1.02] transition-transform duration-300">
                {/* Browser mockup frame */}
                <div className="bg-steel/80 rounded-t-xl p-3 flex items-center gap-2 mb-0">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                  </div>
                  <div className="flex-1 bg-obsidian/50 rounded px-3 py-1 text-xs text-titanium/50">
                    hire.cridia.ai
                  </div>
                </div>

                {/* Screenshot */}
                <div className="relative aspect-video bg-gradient-to-br bg-obsidian rounded-b-xl overflow-hidden border-2 border-white/5">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${screenshot.fallback} opacity-20`}
                  />

                  <Image
                    src={screenshot.image}
                    alt={screenshot.title}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      // Hide image if it fails to load, show gradient background instead
                      e.currentTarget.style.display = "none";
                    }}
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-transparent to-transparent" />

                  {/* Placeholder text if image doesn't load */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="text-4xl mb-2">📊</div>
                      <div className="text-white/50 text-sm">Screenshot Preview</div>
                    </div>
                  </div>
                </div>

                {/* Text */}
                <div className="mt-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {screenshot.title}
                  </h3>
                  <p className="text-titanium/70 text-sm">{screenshot.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a
            href="https://hire.cridia.ai/register"
            className="inline-block glass px-8 py-4 rounded-xl text-white font-semibold hover:bg-white/10 transition-all"
          >
            {t("showcase.cta")}
          </a>
        </motion.div>
      </div>
    </section>
  );
}

