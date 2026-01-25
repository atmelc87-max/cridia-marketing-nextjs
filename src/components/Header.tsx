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
        isScrolled ? "glass py-3" : "bg-transparent py-4"
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
              width={32}
              height={32}
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

            {/* Language Toggle */}
            <div className="flex items-center gap-2 border-l border-white/10 pl-4">
              <button
                type="button"
                onClick={() => handleLanguageChange("en")}
                className={`px-3 py-1 rounded text-sm font-medium transition-all whitespace-nowrap ${
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
                className={`px-3 py-1 rounded text-sm font-medium transition-all whitespace-nowrap ${
                  language === "ar"
                    ? "bg-gradient-tech text-white"
                    : "text-titanium hover:bg-white/5"
                }`}
              >
                AR
              </button>
            </div>

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

