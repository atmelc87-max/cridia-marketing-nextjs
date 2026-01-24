"use client";

import { motion } from "framer-motion";
import { Mail, MessageSquare, Send } from "lucide-react";
import { GlassCard } from "./ui/GlassCard";
import { SectionTitle } from "./ui/SectionTitle";
import { AnimatedButton } from "./ui/AnimatedButton";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/lib/translations";

export function ContactSection() {
  const { language } = useLanguage();
  const t = (key: string) => getTranslation(language, key);
  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative scroll-mt-28">
      <div className="absolute inset-0 bg-gradient-to-b from-steel to-obsidian" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <SectionTitle subtitle={t("contact.subtitle")}>{t("contact.title")}</SectionTitle>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16"
        >
          <GlassCard>
            <form className="space-y-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-titanium mb-2"
                >
                  {t("contact.name")}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 bg-steel/50 border border-white/10 rounded-lg text-white placeholder-titanium/50 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all"
                  placeholder={t("contact.namePlaceholder")}
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-titanium mb-2"
                >
                  {t("contact.email")}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 bg-steel/50 border border-white/10 rounded-lg text-white placeholder-titanium/50 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all"
                  placeholder={t("contact.emailPlaceholder")}
                  required
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-titanium mb-2"
                >
                  {t("contact.message")}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full px-4 py-3 bg-steel/50 border border-white/10 rounded-lg text-white placeholder-titanium/50 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all resize-none"
                  placeholder={t("contact.messagePlaceholder")}
                  required
                />
              </div>

              {/* Submit */}
              <div className="flex justify-center">
                <AnimatedButton variant="primary" className="px-12">
                  <Send className="inline mr-2" size={18} />
                  {t("contact.send")}
                </AnimatedButton>
              </div>
            </form>

            {/* Contact info */}
            <div className="mt-12 pt-8 border-t border-white/10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-tech flex items-center justify-center flex-shrink-0">
                    <Mail size={20} className="text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-titanium/60 mb-1">
                      {t("contact.emailLabel")}
                    </div>
                    <a
                      href="mailto:info@cridi.ai"
                      className="text-white hover:text-purple-400 transition-colors"
                    >
                      info@cridi.ai
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-success flex items-center justify-center flex-shrink-0">
                    <MessageSquare size={20} className="text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-titanium/60 mb-1">
                      {t("contact.liveChat")}
                    </div>
                    <div className="text-white">{t("contact.availability")}</div>
                  </div>
                </div>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}

