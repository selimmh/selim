import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/react";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "bg-background text-foreground font-sans antialiased dark",
          GeistSans.variable
        )}
      >
        <div className="flex flex-col gap-24 justify-between max-w-3xl mx-auto my-12 md:my-16 px-4 text-lg">
          <header className="">
            <a href="/" className="font-medium leading-4">
              Selim M
            </a>
            <p className="font-medium leading-4 opacity-50">
              Software Engineer
            </p>
          </header>
          <main>{children}</main>
        </div>
        <Analytics />
      </body>
    </html>
  );
}
