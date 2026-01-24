"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/lib/translations";

export function Footer() {
  const pathname = usePathname();
  const router = useRouter();
  const { language } = useLanguage();
  const t = (key: string) => getTranslation(language, key);
  const currentYear = new Date().getFullYear();

  const links = {
    product: [
      { label: "Features", href: "#features" },
      { label: "Pricing", href: "#pricing" },
      { label: "How It Works", href: "#how-it-works" },
    ],
    company: [
      { label: "About", href: "#about" },
      { label: "Contact", href: "#contact" },
      { label: "Careers", href: "#" },
    ],
    legal: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Cookie Policy", href: "/cookies" },
    ],
  } as const;

  const onHashLinkClick = (hashHref: `#${string}`) => (e: React.MouseEvent) => {
    // If we are on home, smooth scroll
    if (pathname === "/") {
      e.preventDefault();
      const id = hashHref.slice(1);
      window.history.pushState(null, "", hashHref);
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    // Otherwise, navigate to home + hash
    router.push(`/${hashHref}`);
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
                width={32}
                height={32}
              />
              <span className="text-xl font-bold text-white">Cridia</span>
            </div>
            <p className="text-sm text-titanium/70">
              {t("footer.tagline")}
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t("footer.product")}</h3>
            <ul className="space-y-2">
              {links.product.map((link) => (
                <li key={link.label}>
                  <Link
                    href={pathname === "/" ? link.href : `/${link.href}`}
                    className="text-sm text-titanium/70 hover:text-white transition-colors"
                    onClick={onHashLinkClick(link.href)}
                  >
                    {link.label === "Features"
                      ? t("nav.features")
                      : link.label === "Pricing"
                        ? t("nav.pricing")
                        : t("nav.howItWorks")}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t("footer.company")}</h3>
            <ul className="space-y-2">
              {links.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href.startsWith("#") ? (pathname === "/" ? link.href : `/${link.href}`) : link.href}
                    className="text-sm text-titanium/70 hover:text-white transition-colors"
                    onClick={
                      link.href.startsWith("#")
                        ? onHashLinkClick(link.href as `#${string}`)
                        : undefined
                    }
                  >
                    {link.label === "About"
                      ? (language === "ar" ? "حول" : "About")
                      : link.label === "Contact"
                        ? t("nav.contact")
                        : (language === "ar" ? "الوظائف" : "Careers")}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t("footer.legal")}</h3>
            <ul className="space-y-2">
              {links.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-titanium/70 hover:text-white transition-colors"
                  >
                    {link.label === "Privacy Policy"
                      ? (language === "ar" ? "سياسة الخصوصية" : "Privacy Policy")
                      : link.label === "Terms of Service"
                        ? (language === "ar" ? "شروط الخدمة" : "Terms of Service")
                        : (language === "ar" ? "سياسة ملفات تعريف الارتباط" : "Cookie Policy")}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 text-center">
          <p className="text-sm text-titanium/60">
            © {currentYear} {t("footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
}

