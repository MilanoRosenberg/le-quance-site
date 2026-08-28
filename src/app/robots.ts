import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/checkout", "/order-confirmation", "/account/orders", "/account/addresses", "/account/profile"],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
