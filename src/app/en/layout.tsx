import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cridia Hire - AI-Powered Recruitment Platform | Hire Smarter",
  description:
    "AI that screens 100 CVs in 5 minutes. Decimal precision scoring, bilingual interviews, and automated assessments. Join 127+ companies hiring smarter.",
  keywords:
    "AI recruitment, CV screening, interview automation, hiring platform, candidate assessment, recruitment software",
  authors: [{ name: "Cridia Hire" }],
  creator: "Cridia Hire",
  publisher: "Cridia Hire",
  alternates: {
    canonical: "https://cridia.ai/en",
    languages: {
      en: "https://cridia.ai/en",
      ar: "https://cridia.ai/ar",
    },
  },
  openGraph: {
    title: "Cridia Hire - AI-Powered Recruitment Platform",
    description: "AI that screens 100 CVs in 5 minutes. Hire faster, better, smarter.",
    url: "https://cridia.ai/en",
    siteName: "Cridia Hire",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://cridia.ai/og-image.png",
        width: 1200,
        height: 630,
        alt: "Cridia Hire - AI Recruitment Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cridia Hire - AI-Powered Recruitment Platform",
    description: "AI that screens 100 CVs in 5 minutes. Hire smarter.",
    images: ["https://cridia.ai/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Add when available
  },
};

export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

