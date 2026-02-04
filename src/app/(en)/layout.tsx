import type { Metadata } from "next";
import { Cairo, Inter } from "next/font/google";
import "../globals.css";
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
  title: "Cridia Hire - AI Recruitment Platform for MENA SMEs",
  description: "Affordable AI-powered recruitment with native Arabic dialect support. Conduct automated interviews in English & Arabic at 90% lower cost than enterprise solutions.",
  keywords: ["AI recruitment", "Arabic hiring platform", "MENA recruitment software", "affordable ATS", "Iraqi accent AI", "automated interviews", "SME recruitment"],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Cridia Hire - AI Recruitment for MENA",
    description: "Automated hiring with bilingual Arabic/English support",
    url: "https://cridia.ai",
    siteName: "Cridia Hire",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cridia Hire - AI Recruitment Platform",
    description: "Affordable recruitment with Arabic dialect support",
  },
  alternates: {
    canonical: "https://cridia.ai",
    languages: {
      ar: "https://cridia.ai/ar",
    },
  },
};

export default function EnLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-BDC51YE7Y3"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-BDC51YE7Y3');
            `,
          }}
        />
      </head>
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Cridia Hire",
              applicationCategory: "BusinessApplication",
              operatingSystem: "Web Browser",
              description: "AI recruitment platform with Arabic dialect support for MENA SMEs",
              offers: {
                "@type": "Offer",
                priceCurrency: "USD",
                description: "Affordable recruitment automation",
              },
              audience: {
                "@type": "Audience",
                audienceType: "Small and Medium Businesses",
                geographicArea: {
                  "@type": "Place",
                  name: "Middle East and North Africa",
                },
              },
            }),
          }}
        />
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
