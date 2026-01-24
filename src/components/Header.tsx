"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { AnimatedButton } from "./ui/AnimatedButton";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/lib/translations";

export function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const t = (key: string) => getTranslation(language, key);
  const isLegalPage = pathname !== "/";

  const handleLanguageChange = (newLang: "en" | "ar") => {
    setLanguage(newLang);

    const currentPath = pathname?.replace(/^\/(en|ar)/, "") || "";
    router.push(`/${newLang}${currentPath}`);
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const updateHeaderHeight = () => {
      const h = headerRef.current?.offsetHeight;
      if (h) document.documentElement.style.setProperty("--header-height", `${h}px`);
    };

    updateHeaderHeight();
    window.addEventListener("resize", updateHeaderHeight);
    return () => window.removeEventListener("resize", updateHeaderHeight);
  }, []);

  const navLinks = [
    { id: "features", label: t("nav.features") },
    { id: "how-it-works", label: t("nav.howItWorks") },
    { id: "pricing", label: t("nav.pricing") },
    { id: "contact", label: t("nav.contact") },
  ] as const;

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const onNavClick = (id: string) => (e: React.MouseEvent) => {
    if (pathname === "/") {
      e.preventDefault();
      window.history.pushState(null, "", `#${id}`);
      scrollToSection(id);
      return;
    }

    router.push(`/#${id}`);
  };

  return (
    <motion.header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass py-3" : "bg-transparent py-4"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Image
              src="/cridia-logo-white.png"
              alt="Cridia Hire"
              width={72}
              height={72}
              className="transition-transform group-hover:scale-110"
              priority
            />
            <span className="text-2xl font-bold text-white leading-none">
              Cridia
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                href={pathname === "/" ? `#${link.id}` : `/#${link.id}`}
                className="text-titanium hover:text-white transition-colors duration-200"
                onClick={onNavClick(link.id)}
              >
                {link.label}
              </Link>
            ))}

            {/* Language Toggle */}
            <div className="flex items-center gap-2 border-l border-white/10 pl-4">
              <button
                type="button"
                onClick={() => handleLanguageChange("en")}
                className={`px-3 py-1 rounded text-sm font-medium transition-all ${
                  language === "en"
                    ? "bg-gradient-tech text-white"
                    : "text-titanium hover:bg-white/5"
                }`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => handleLanguageChange("ar")}
                className={`px-3 py-1 rounded text-sm font-medium transition-all ${
                  language === "ar"
                    ? "bg-gradient-tech text-white"
                    : "text-titanium hover:bg-white/5"
                }`}
              >
                AR
              </button>
            </div>

            {/* CTA Button */}
            <AnimatedButton href="https://hire.cridia.ai/register" variant="primary">
              {t("nav.startTrial")}
            </AnimatedButton>
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden mt-4 glass rounded-2xl p-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.id}
                  href={pathname === "/" ? `#${link.id}` : `/#${link.id}`}
                  className="text-titanium hover:text-white transition-colors py-2"
                  onClick={(e) => {
                    onNavClick(link.id)(e);
                    setIsMobileMenuOpen(false);
                  }}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex gap-2 pt-2 border-t border-white/10">
                <button
                  type="button"
                  onClick={() => handleLanguageChange("en")}
                  className={`flex-1 px-3 py-2 rounded text-sm font-medium transition-all ${
                    language === "en"
                      ? "bg-gradient-tech text-white"
                      : "text-titanium bg-white/5"
                  }`}
                >
                  EN
                </button>
                <button
                  type="button"
                  onClick={() => handleLanguageChange("ar")}
                  className={`flex-1 px-3 py-2 rounded text-sm font-medium transition-all ${
                    language === "ar"
                      ? "bg-gradient-tech text-white"
                      : "text-titanium bg-white/5"
                  }`}
                >
                  AR
                </button>
              </div>
              <AnimatedButton
                href="https://hire.cridia.ai/register"
                variant="primary"
                className="w-full text-center"
              >
                {t("nav.startTrial")}
              </AnimatedButton>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}

