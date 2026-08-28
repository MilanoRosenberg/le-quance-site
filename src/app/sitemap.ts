import type { MetadataRoute } from "next";
import { collections, products } from "@/data/commerce";
import { utilityRoutes } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const routes = [
    "",
    "shop",
    "collections",
    ...collections.map((collection) => `collections/${collection.slug}`),
    ...products.map((product) => `products/${product.slug}`),
    ...utilityRoutes.filter((route) => !route.startsWith("account/") && !["checkout", "order-confirmation"].includes(route)),
  ];
  return routes.map((route) => ({
    url: `${siteUrl}/${route}`,
    lastModified: new Date("2026-08-28"),
    changeFrequency: route === "" || route === "shop" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.startsWith("products/") || route === "shop" ? 0.8 : 0.6,
  }));
}
