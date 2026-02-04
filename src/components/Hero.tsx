"use client";

import { motion } from "framer-motion";
import { AnimatedButton } from "./ui/AnimatedButton";
import { ArrowRight, Play } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/lib/translations";
import { trackStartTrialClick } from "@/lib/utils";

export function Hero() {
  const { language } = useLanguage();
  const t = (key: string) => getTranslation(language, key);
  const headline = t("hero.headline");
  const words: string[] = Array.isArray(headline)
    ? (headline as string[])
    : String(headline).split(" ");
  const enableSpline = process.env.NEXT_PUBLIC_ENABLE_SPLINE === "true";

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 scroll-mt-28"
    >
      {/* Background gradient mesh */}
      <div className="absolute inset-0 bg-gradient-to-br from-obsidian via-steel to-midnight opacity-50" />

      {/* Animated gradient orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-tech rounded-full blur-3xl opacity-20 animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-success rounded-full blur-3xl opacity-20 animate-pulse delay-1000" />

      {/* 3D Spline Element (disabled by default; enable via NEXT_PUBLIC_ENABLE_SPLINE=true) */}
      {enableSpline && (
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full hidden lg:block">
          <iframe
            src="https://my.spline.design/untitled-71c32cd3f82d887f73e280ac64430e1e/"
            frameBorder="0"
            width="100%"
            height="100%"
            className="pointer-events-none"
          />
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Animated headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              {words.map((word: string, index: number) => (
                <motion.span
                  key={index}
                  className="inline-block"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <span
                    className={
                      index === 0 ? "bg-gradient-tech text-gradient" : "text-white"
                    }
                  >
                    {word}
                  </span>
                  {index < words.length - 1 && " "}
                </motion.span>
              ))}
            </h1>
          </motion.div>

          {/* Subheadline */}
          <motion.p
            className="text-xl md:text-2xl text-titanium/80 mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            {t("hero.subheadline")}{" "}
            <span className="text-white font-semibold">
              {t("hero.subheadlineHighlight")}
            </span>
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 items-start sm:items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <AnimatedButton
              href="https://hire.cridia.ai/register"
              variant="primary"
              onClick={() => trackStartTrialClick("hero")}
            >
              {t("hero.startTrial")}
              <ArrowRight className="inline ml-2" size={20} />
            </AnimatedButton>

            <AnimatedButton variant="secondary">
              <Play className="inline mr-2" size={20} />
              {t("hero.watchDemo")}
            </AnimatedButton>
          </motion.div>

          {/* No credit card needed */}
          <motion.p
            className="text-sm text-titanium/60 mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.1 }}
          >
            ✓ {t("hero.noCreditCard")}
          </motion.p>

          {/* Social proof */}
          <motion.div
            className="mt-12 flex items-center gap-6 text-sm text-titanium/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gradient-tech border-2 border-obsidian flex items-center justify-center text-white text-xs font-semibold"
                  >
                    {i}
                  </div>
                ))}
              </div>
              <span>{t("hero.joinCompanies")}</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-titanium/30 rounded-full flex justify-center pt-2">
          <motion.div
            className="w-1.5 h-1.5 bg-titanium rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}

