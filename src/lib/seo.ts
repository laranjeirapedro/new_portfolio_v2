type SEOProps = {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
};

export function generateSEO({
  title = "Pedro Magalhães - Full-Stack Developer",
  description = "Personal portfolio of Pedro Magalhães, Full-Stack Developer based in Toronto. Skilled in React, Next.js, Node.js, .NET, and Cloud technologies.",
  url = "https://pedro-magalhaes-portfolio.vercel.app/",
  image = "https://pedro-magalhaes-portfolio.vercel.app/home-og-image.png",
}: SEOProps) {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      images: [{ url: image }],
      site_name: "Pedro Magalhães Portfolio",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}