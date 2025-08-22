const baseUrl = "https://pedro-magalhaes-portfolio.vercel.app/";

export const GET = () => {
  const robotsTxt = `
User-agent: *
Allow: /

Sitemap: ${baseUrl}sitemap.xml
`.trim();

  return new Response(robotsTxt, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
};