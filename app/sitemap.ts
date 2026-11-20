import type { MetadataRoute } from "next";
import { caseStudySlugs } from "@/data/caseStudies";

import { projectUrl, siteUrl } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${siteUrl}/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1
    },
    ...caseStudySlugs.map((slug) => ({
      url: projectUrl(slug),
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8
    }))
  ];
}
