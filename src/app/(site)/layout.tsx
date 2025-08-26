// app/layout.tsx
import "@/app/globals.css";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
import { Metadata } from "next";

import Header from "../../components/layout/header";
import Footer from "../../components/layout/footer";


export const metadata: Metadata = {
  title: "Pedro's Portfolio",
  description: "Pedro Laranjeira's Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-3ED7BXVBN1`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-3ED7BXVBN1', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
