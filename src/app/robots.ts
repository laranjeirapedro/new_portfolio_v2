const baseUrl = "https://yourdomain.com";

export function generateRobotsTxt() {
  return `
User-agent: *
Allow: /

Sitemap: ${baseUrl}/sitemap.xml
`.trim();
}