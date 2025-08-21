import { NextResponse } from "next/server";
import { generateRobotsTxt } from "../../robots";

export async function GET() {
  const robotsTxt = generateRobotsTxt();

  return new NextResponse(robotsTxt, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}