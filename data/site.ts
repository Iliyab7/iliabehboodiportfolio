export const siteUrl = (process.env.SITE_URL || "https://iliabehboodi.com").replace(/\/$/, "");

export function projectUrl(slug: string) {
  return `${siteUrl}/projects/${slug}/`;
}
