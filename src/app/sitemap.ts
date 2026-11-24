import type { MetadataRoute } from "next";

const siteUrl = "https://tajudeen-nextjs-portfolio.vercel.app";

const projectSlugs = [
  "portfolio",
  "weather-dashboard",
  "ecommerce-store",
  "task-manager",
  "airbnb-clone",
  "airbnb-clone-v2",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const mainPages: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      priority: 1,
    },
    {
      url: `${siteUrl}/about`,
      priority: 0.8,
    },
    {
      url: `${siteUrl}/projects`,
      priority: 0.9,
    },
  ];

  const projectPages: MetadataRoute.Sitemap =
    projectSlugs.map((slug) => ({
      url: `${siteUrl}/projects/${slug}`,
      priority: 0.7,
    }));

  return [...mainPages, ...projectPages];
}
