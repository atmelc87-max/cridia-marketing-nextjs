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

  const handleLanguageChange = (newLang: "en" | "ar") => {
    // Save language to localStorage first
    localStorage.setItem("language", newLang);
    setLanguage(newLang);
    
    // Get current path without language prefix
    let currentPath = '';
    
    if (pathname?.startsWith('/ar')) {
      currentPath = pathname.replace(/^\/ar/, '');
    } else {
      currentPath = pathname || '';
    }
    
    // Navigate to new language path
    if (newLang === 'ar') {
      router.push(`/ar${currentPath}`);
    } else {
      router.push(`${currentPath || '/'}`);
    }
  };

  // Sync language with pathname on mount and pathname changes
  useEffect(() => {
    const currentLang = pathname?.startsWith('/ar') ? 'ar' : 'en';
    if (language !== currentLang) {
      setLanguage(currentLang);
      localStorage.setItem("language", currentLang);
    }
  }, [pathname, language, setLanguage]);

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
    { href: "#features", label: t("nav.features") },
    { href: "#how-it-works", label: t("nav.howItWorks") },
    { href: "#pricing", label: t("nav.pricing") },
    { href: "#contact", label: t("nav.contact") },
  ] as const;

  // Helper function to handle navigation
  const handleNavClick = (href: string, e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    const isArabic = pathname?.startsWith('/ar');
    
    if (href.startsWith('#')) {
      const isHomePage = isArabic 
        ? (pathname === '/ar' || pathname === '/ar/') 
        : (pathname === '/' || !pathname?.includes('/'));
      
      if (isHomePage) {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        router.push(isArabic ? `/ar${href}` : `/${href}`);
      }
    } else {
      router.push(href);
    }
    
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass py-2" : "bg-transparent py-3"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group flex-shrink-0">
            <Image
              src="/cridia-logo-white.png"
              alt="Cridia Hire"
              width={48}
              height={48}
              className="transition-transform group-hover:scale-110"
              priority
            />
            <span className="text-xl font-bold text-white whitespace-nowrap">Cridia</span>
          </Link>

          {/* Desktop Navigation */}
          {/* Desktop Navigation - show from lg breakpoint (1024px+) instead of md */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(link.href, e)}
                className="text-titanium hover:text-white transition-colors duration-200 cursor-pointer whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}

            {/* Language Toggle - single flag showing the language to switch TO */}
            <div className="flex items-center gap-2 border-l border-white/10 pl-4">
              <button
                type="button"
                onClick={() => handleLanguageChange(language === "en" ? "ar" : "en")}
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 p-1.5 hover:bg-white/10 transition-all"
                aria-label={language === "en" ? "Switch to Arabic" : "Switch to English"}
              >
                <Image
                  src={language === "en" ? "/flag-sa.svg" : "/flag-us.svg"}
                  alt={language === "en" ? "Arabic" : "English"}
                  width={24}
                  height={24}
                  className="rounded-full shadow-sm"
                />
              </button>
            </div>

            {/* Sign In Button */}
            <a
              href="https://hire.cridia.ai/login"
              className="text-titanium hover:text-white transition-colors duration-200 whitespace-nowrap px-4 py-2 rounded-lg hover:bg-white/5"
            >
              {t("nav.signIn")}
            </a>

            {/* CTA Button */}
            <AnimatedButton
              href="https://hire.cridia.ai/register"
              variant="primary"
              className="whitespace-nowrap"
            >
              {t("nav.startTrial")}
            </AnimatedButton>
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            className="lg:hidden mt-4 glass rounded-2xl p-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(link.href, e)}
                  className="text-titanium hover:text-white transition-colors py-2 cursor-pointer"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex items-center justify-center pt-2 border-t border-white/10">
                <button
                  type="button"
                  onClick={() => {
                    handleLanguageChange(language === "en" ? "ar" : "en");
                    setIsMobileMenuOpen(false);
                  }}
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-3 py-2 hover:bg-white/10 transition-all"
                  aria-label={language === "en" ? "Switch to Arabic" : "Switch to English"}
                >
                  <Image
                    src={language === "en" ? "/flag-sa.svg" : "/flag-us.svg"}
                    alt={language === "en" ? "Arabic" : "English"}
                    width={24}
                    height={24}
                    className="rounded-full shadow-sm"
                  />
                </button>
              </div>
              <a
                href="https://hire.cridia.ai/login"
                className="text-titanium hover:text-white transition-colors py-2 text-center rounded-lg hover:bg-white/5"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t("nav.signIn")}
              </a>
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

