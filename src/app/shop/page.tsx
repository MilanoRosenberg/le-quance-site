import type { Metadata } from "next";
import { ProductCatalog } from "@/components/commerce/ProductCatalog";
import { NewsletterForm } from "@/components/forms/NewsletterForm";
import { Reveal } from "@/components/motion/Reveal";
import { PageHero } from "@/components/ui/PageHero";
import { products } from "@/data/commerce";

export const metadata: Metadata = {
  title: "Shop",
  description: "Discover the current and future LE QUANCE signature pieces.",
  alternates: { canonical: "/shop" },
};

export default function ShopPage() {
  return (
    <>
      <PageHero
        title="The Collection"
        intro="A controlled wardrobe in development. Signature Black begins with one central silhouette."
      />
      <ProductCatalog items={products} />
      <section className="editorial-interruption section-space">
        <div className="site-shell editorial-interruption-inner">
          <Reveal>
            <h2>Private access to what comes next.</h2>
            <p>Release details are shared only when products, pricing and availability are approved.</p>
          </Reveal>
          <Reveal delay={0.08}><NewsletterForm /></Reveal>
        </div>
      </section>
    </>
  );
}
