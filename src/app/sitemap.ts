import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://cridia.ai";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: {
          ar: `${baseUrl}/ar`,
        },
      },
    },
    {
      url: `${baseUrl}/ar`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: {
          en: baseUrl,
        },
      },
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
      alternates: {
        languages: {
          ar: `${baseUrl}/ar/privacy`,
        },
      },
    },
    {
      url: `${baseUrl}/ar/privacy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
      alternates: {
        languages: {
          en: `${baseUrl}/privacy`,
        },
      },
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
      alternates: {
        languages: {
          ar: `${baseUrl}/ar/terms`,
        },
      },
    },
    {
      url: `${baseUrl}/ar/terms`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
      alternates: {
        languages: {
          en: `${baseUrl}/terms`,
        },
      },
    },
    {
      url: `${baseUrl}/cookies`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
      alternates: {
        languages: {
          ar: `${baseUrl}/ar/cookies`,
        },
      },
    },
    {
      url: `${baseUrl}/ar/cookies`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
      alternates: {
        languages: {
          en: `${baseUrl}/cookies`,
        },
      },
    },
  ];
}
