import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticDate = "2025-10-10";
  return [
    {
      url: "https://caferiverio.com",
      lastModified: staticDate,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: "https://caferiverio.com/#menu",
      lastModified: staticDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://caferiverio.com/#story",
      lastModified: staticDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://caferiverio.com/#gallery",
      lastModified: staticDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://caferiverio.com/#location",
      lastModified: staticDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
