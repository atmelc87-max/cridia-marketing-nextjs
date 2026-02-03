"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { GlassCard } from "./ui/GlassCard";
import { SectionTitle } from "./ui/SectionTitle";
import { AnimatedButton } from "./ui/AnimatedButton";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/lib/translations";

const plans = [
  {
    name: "Starter",
    price: "$99",
    description: "For growing teams ready to automate",
    features: [
      "100 CVs/month",
      "40 Interviews",
      "3 Team Members",
      "Email Support",
      "All Interview Modes",
      "Basic Analytics",
    ],
    gradient: "from-blue-500 to-cyan-500",
    popular: false,
  },
  {
    name: "Professional",
    price: "$249",
    description: "For serious hiring at scale",
    features: [
      "300 CVs/month",
      "100 Interviews",
      "10 Team Members",
      "Priority Support",
      "Advanced Analytics",
      "Custom Branding",
      "API Access",
    ],
    gradient: "from-purple-500 to-pink-500",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "$699",
    description: "For companies who hire 50+ annually",
    features: [
      "Unlimited CVs",
      "Unlimited Interviews",
      "Unlimited Team",
      "Dedicated Support",
      "Custom Training",
      "SLA Guarantee",
    ],
    gradient: "from-orange-500 to-red-500",
    popular: false,
  },
] as const;

export function PricingSection() {
  const { language } = useLanguage();
  const t = (key: string) => getTranslation(language, key);
  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8 relative scroll-mt-28">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-steel/50 to-obsidian" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <SectionTitle subtitle={t("pricing.subtitle")}>{t("pricing.title")}</SectionTitle>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <div className="bg-gradient-tech px-4 py-1 rounded-full text-white text-sm font-semibold shadow-lg">
                    {t("pricing.mostPopular")}
                  </div>
                </div>
              )}

              <GlassCard
                className={`h-full relative ${plan.popular ? "border-2 border-purple-500/30" : ""}`}
                hover={false}
              >
                <div className="relative z-10">
                  {/* Plan header */}
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {plan.name === "Starter"
                        ? t("pricing.starter")
                        : plan.name === "Professional"
                          ? t("pricing.professional")
                          : t("pricing.enterprise")}
                    </h3>
                    <p className="text-titanium/70 text-sm">
                      {plan.name === "Starter"
                        ? t("pricing.starterDesc")
                        : plan.name === "Professional"
                          ? t("pricing.professionalDesc")
                          : t("pricing.enterpriseDesc")}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="mb-6">
                    <div className="flex items-baseline gap-2">
                      <span
                        className={`text-5xl font-bold bg-gradient-to-br ${plan.gradient} text-gradient`}
                      >
                        {plan.price}
                      </span>
                      <span className="text-titanium/60">{t("pricing.perMonth")}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div
                          className={`w-5 h-5 rounded-full bg-gradient-to-br ${plan.gradient} flex items-center justify-center flex-shrink-0 mt-0.5`}
                        >
                          <Check size={14} className="text-white" />
                        </div>
                        <span className="text-titanium/90">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <AnimatedButton
                    href="https://hire.cridia.ai/register"
                    variant={plan.popular ? "primary" : "secondary"}
                    className="w-full text-center"
                  >
                    {t("pricing.startTrial")}
                  </AnimatedButton>
                  <p className="text-xs text-titanium/60 text-center mt-3">
                    ✓ {t("pricing.noCreditCard")}
                  </p>
                </div>

                {/* Gradient glow on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} opacity-0 hover:opacity-5 transition-opacity duration-500 blur-2xl pointer-events-none`}
                />
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* ROI Calculator info */}
        <motion.div
          className="mt-16 glass rounded-2xl p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">{t("pricing.roiTitle")}</h3>
            <p className="text-titanium/70">{t("pricing.roiSubtitle")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">$2.48</div>
              <div className="text-sm text-titanium/60">{t("pricing.costPerHire")}</div>
              <div className="text-xs text-green-400 mt-1">{t("pricing.vsRecruiter")}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">14.5 hrs</div>
              <div className="text-sm text-titanium/60">{t("pricing.timeSaved")}</div>
              <div className="text-xs text-green-400 mt-1">{t("pricing.vsManual")}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">$47,500</div>
              <div className="text-sm text-titanium/60">{t("pricing.annualSavings")}</div>
              <div className="text-xs text-green-400 mt-1">{t("pricing.professionalPlan")}</div>
            </div>
          </div>
        </motion.div>

        {/* Trial info */}
        <motion.p
          className="text-center text-titanium/60 mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {t("pricing.trialInfo")}
        </motion.p>
      </div>
    </section>
  );
}

