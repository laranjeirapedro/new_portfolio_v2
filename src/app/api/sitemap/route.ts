import { NextResponse } from "next/server";
import { generateSitemap } from "../../sitemap";

export async function GET() {
  const sitemap = generateSitemap();

  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
