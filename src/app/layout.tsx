import type { Metadata } from "next";
import { Cairo, Inter } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const cairo = Cairo({
  subsets: ["arabic"],
  variable: "--font-cairo",
});

export const metadata: Metadata = {
  title: "Cridia Hire - AI-Powered Recruitment Platform",
  description: "Hire faster, better, smarter with AI that screens 100 CVs in 5 minutes",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = await headers();
  const lang = headersList.get('x-language') || 'en';

  return (
    <html lang={lang} dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <body className={`${inter.variable} ${cairo.variable} font-sans`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Cridia Hire",
              url: "https://cridia.ai",
              logo: "https://cridia.ai/cridia-icon.png",
              description: "AI-powered recruitment platform for smarter hiring decisions",
              address: {
                "@type": "PostalAddress",
                addressCountry: "IQ",
                addressLocality: "Baghdad",
              },
              sameAs: [
                "https://www.linkedin.com/company/cridia-hire",
                "https://twitter.com/cridiahire",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                email: "info@cridi.ai",
                contactType: "Customer Service",
                availableLanguage: ["English", "Arabic"],
              },
            }),
          }}
        />
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
