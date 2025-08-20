const baseUrl = "https://pedro-magalhaes-portfolio.vercel.app/";

const staticPages = [
  "",
  "about",
  "projects",
  "contact"
  // adicione outras rotas estáticas do site aqui
];

export function generateSitemap() {
  const urls = staticPages
    .map(
      (page) => `
  <url>
    <loc>${baseUrl}/${page}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`
    )
    .join("");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
>
  ${urls}
</urlset>`;
}