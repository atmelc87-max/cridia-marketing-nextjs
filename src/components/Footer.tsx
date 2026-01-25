"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useLanguage } from "@/contexts/LanguageContext";

export function Footer() {
  const pathname = usePathname();
  const router = useRouter();
  const { language } = useLanguage();
  const currentYear = new Date().getFullYear();

  // Detect current language from pathname if context is not available
  const currentLang = pathname?.startsWith("/ar") ? "ar" : "en";

  const links = {
    product: [
      { label: currentLang === "en" ? "Features" : "المميزات", href: currentLang === 'ar' ? '/ar#features' : '/#features' },
      { label: currentLang === "en" ? "Pricing" : "الأسعار", href: currentLang === 'ar' ? '/ar#pricing' : '/#pricing' },
      { label: currentLang === "en" ? "How It Works" : "كيف يعمل", href: currentLang === 'ar' ? '/ar#how-it-works' : '/#how-it-works' },
    ],
    company: [
      { label: currentLang === "en" ? "About" : "من نحن", href: "#" },
      { label: currentLang === "en" ? "Contact" : "اتصل بنا", href: currentLang === 'ar' ? '/ar#contact' : '/#contact' },
      { label: currentLang === "en" ? "Careers" : "الوظائف", href: "#" },
    ],
    legal: [
      { label: currentLang === "en" ? "Privacy Policy" : "سياسة الخصوصية", href: currentLang === 'ar' ? '/ar/privacy' : '/privacy' },
      { label: currentLang === "en" ? "Terms of Service" : "شروط الخدمة", href: currentLang === 'ar' ? '/ar/terms' : '/terms' },
      { label: currentLang === "en" ? "Cookie Policy" : "سياسة ملفات تعريف الارتباط", href: currentLang === 'ar' ? '/ar/cookies' : '/cookies' },
    ],
  } as const;

  const onMaybeAnchorClick = (href: string) => (e: React.MouseEvent) => {
    if (!href.includes("#")) return;

    const normalizedPath = pathname?.endsWith("/") ? pathname.slice(0, -1) : pathname;
    const isHomePage = currentLang === 'ar' 
      ? (normalizedPath === '/ar' || normalizedPath === '/ar/')
      : (normalizedPath === '/' || !normalizedPath?.includes('/'));

    // If we're on homepage, smooth scroll instead of navigating
    if (isHomePage) {
      e.preventDefault();
      const hash = `#${href.split("#")[1] || ""}`;
      if (hash.length > 1) {
        window.history.pushState(null, "", hash);
        document.querySelector(hash)?.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      return;
    }

    // Otherwise, ensure we navigate to the correct language homepage + hash
    e.preventDefault();
    const hash = `#${href.split("#")[1] || ""}`;
    router.push(currentLang === 'ar' ? `/ar${hash}` : `/${hash}`);
  };

  return (
    <footer className="bg-steel/50 border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/cridia-logo-white.png"
                alt="Cridia Hire"
                width={48}
                height={48}
              />
              <span className="text-xl font-bold text-white">Cridia</span>
            </div>
            <p className="text-sm text-titanium/70">
              {currentLang === "en"
                ? "AI-powered recruitment platform for smarter hiring decisions."
                : "منصة توظيف مدعومة بالذكاء الاصطناعي لقرارات توظيف أذكى."}
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              {currentLang === "en" ? "Product" : "المنتج"}
            </h3>
            <ul className="space-y-2">
              {links.product.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-titanium/70 hover:text-white transition-colors"
                    onClick={onMaybeAnchorClick(link.href)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              {currentLang === "en" ? "Company" : "الشركة"}
            </h3>
            <ul className="space-y-2">
              {links.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-titanium/70 hover:text-white transition-colors"
                    onClick={onMaybeAnchorClick(link.href)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              {currentLang === "en" ? "Legal" : "القانونية"}
            </h3>
            <ul className="space-y-2">
              {links.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-titanium/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 text-center">
          <p className="text-sm text-titanium/60">
            © {currentYear}{" "}
            {currentLang === "en"
              ? "Cridia Hire. All rights reserved."
              : "كريديا هاير. جميع الحقوق محفوظة."}
          </p>
        </div>
      </div>
    </footer>
  );
}

