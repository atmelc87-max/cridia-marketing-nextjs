"use client";

import { motion } from "framer-motion";
import { Clock, DollarSign, TrendingDown } from "lucide-react";
import { GlassCard } from "./ui/GlassCard";
import { SectionTitle } from "./ui/SectionTitle";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/lib/translations";

export function ProblemSection() {
  const { language } = useLanguage();
  const t = (key: string) => getTranslation(language, key);
  const problems = [
    {
      icon: Clock,
      title: t("problem.timeDrain"),
      description: t("problem.timeDrainDesc"),
      gradient: "from-red-500 to-orange-500",
    },
    {
      icon: DollarSign,
      title: t("problem.costlyMistakes"),
      description: t("problem.costlyMistakesDesc"),
      gradient: "from-yellow-500 to-red-500",
    },
    {
      icon: TrendingDown,
      title: t("problem.bias"),
      description: t("problem.biasDesc"),
      gradient: "from-purple-500 to-pink-500",
    },
  ] as const;

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-steel/50 to-obsidian" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <SectionTitle subtitle={t("problem.subtitle")}>{t("problem.title")}</SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <GlassCard className="h-full group relative overflow-hidden">
                  {/* Glow effect on hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${problem.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-2xl`}
                  />

                  {/* Soft gradient border glow (avoids dynamic Tailwind class pitfalls) */}
                  <div
                    className={`pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br ${problem.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                    style={{ padding: 2 }}
                  >
                    <div className="w-full h-full rounded-2xl bg-transparent" />
                  </div>

                  {/* Icon with gradient background */}
                  <div
                    className={`relative w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br ${problem.gradient} p-0.5`}
                  >
                    <div className="w-full h-full bg-obsidian rounded-2xl flex items-center justify-center">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-titanium transition-all duration-300">
                    {problem.title}
                  </h3>

                  <p className="text-titanium/80 leading-relaxed">{problem.description}</p>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>

        {/* Stats bar */}
        <motion.div
          className="mt-16 glass rounded-2xl p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold bg-gradient-tech text-gradient mb-2">
                {t("problem.stat1")}
              </div>
              <div className="text-titanium/60">{t("problem.stat1Desc")}</div>
            </div>
            <div>
              <div className="text-4xl font-bold bg-gradient-success text-gradient mb-2">
                {t("problem.stat2")}
              </div>
              <div className="text-titanium/60">{t("problem.stat2Desc")}</div>
            </div>
            <div>
              <div className="text-4xl font-bold bg-gradient-premium text-gradient mb-2">
                {t("problem.stat3")}
              </div>
              <div className="text-titanium/60">{t("problem.stat3Desc")}</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

