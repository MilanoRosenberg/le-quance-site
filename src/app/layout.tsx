import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import type { ReactNode } from "react";
import { CommerceProvider } from "@/components/commerce/CommerceProvider";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { StructuredData } from "@/components/seo/StructuredData";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-display",
  display: "swap",
});

const sans = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "LE QUANCE | Modern Luxury in Motion",
    template: "%s | LE QUANCE",
  },
  description:
    "LE QUANCE is a modern luxury house shaped by ambition, restraint and movement.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "LE QUANCE",
    title: "LE QUANCE | Modern Luxury in Motion",
    description:
      "A modern luxury house shaped by ambition, restraint and movement.",
    images: [{ url: "/assets/packaging-hero.png", width: 1535, height: 1024 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "LE QUANCE | Modern Luxury in Motion",
    description:
      "A modern luxury house shaped by ambition, restraint and movement.",
    images: ["/assets/packaging-hero.png"],
  },
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#090a0a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body>
        <CommerceProvider>
          <Header />
          <main id="main-content">{children}</main>
          <Footer />
        </CommerceProvider>
        <StructuredData
          data={{
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "LE QUANCE",
            url: siteUrl,
            logo: `${siteUrl}/assets/logo-monogram-ivory.png`,
            description:
              "A modern luxury house shaped by ambition, restraint and movement.",
          }}
        />
      </body>
    </html>
  );
}
