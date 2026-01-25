import type { Metadata } from "next";

interface PageMetadata {
  title: string;
  description: string;
  canonical: string;
  alternates: {
    en: string;
    ar: string;
  };
}

export function generateMetadata(data: PageMetadata, lang: "en" | "ar", ogImage?: string): Metadata {
  const baseUrl = "https://cridia.ai";
  const defaultOgImage = lang === "en" ? `${baseUrl}/og-image.png` : `${baseUrl}/og-image-ar.png`;
  const ogImageUrl = ogImage || defaultOgImage;

  return {
    title: data.title,
    description: data.description,
    alternates: {
      canonical: `${baseUrl}${data.canonical}`,
      languages: {
        en: `${baseUrl}${data.alternates.en}`,
        ar: `${baseUrl}${data.alternates.ar}`,
      },
    },
    openGraph: {
      title: data.title,
      description: data.description,
      url: `${baseUrl}${lang === "en" ? data.alternates.en : data.alternates.ar}`,
      siteName: "Cridia Hire",
      locale: lang === "en" ? "en_US" : "ar_IQ",
      type: "website",
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: data.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: data.title,
      description: data.description,
      images: [ogImageUrl],
    },
  };
}

