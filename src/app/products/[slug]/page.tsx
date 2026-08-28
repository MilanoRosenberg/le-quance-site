import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductCard } from "@/components/commerce/ProductCard";
import { ProductConfigurator } from "@/components/commerce/ProductConfigurator";
import { Reveal } from "@/components/motion/Reveal";
import { LinkButton } from "@/components/ui/LinkButton";
import { MediaFrame, MediaPlaceholder } from "@/components/ui/MediaFrame";
import { StructuredData } from "@/components/seo/StructuredData";
import { getProduct, products } from "@/data/commerce";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return {
    title: product.name,
    description: product.descriptor,
    alternates: { canonical: `/products/${product.slug}` },
    openGraph: { images: [product.image] },
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();
  const related = products.filter((item) => item.slug !== product.slug);
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  return (
    <>
      <section className="product-detail-layout">
        <div className="product-gallery">
          <MediaFrame src={product.image} alt={product.imageAlt} className="product-gallery-primary" imageClassName={product.mediaCrop} priority sizes="(max-width: 900px) 100vw, 58vw" />
          <div className="product-gallery-pair">
            <MediaFrame src={product.image} alt={`${product.name} front concept crop`} imageClassName={`${product.mediaCrop} crop-focus-front`} sizes="(max-width: 900px) 100vw, 29vw" />
            <MediaFrame src={product.image} alt={`${product.name} back concept crop`} imageClassName={`${product.mediaCrop} crop-focus-back`} sizes="(max-width: 900px) 100vw, 29vw" />
          </div>
          {product.slug === "signature-tracksuit" ? (
            <>
              <MediaFrame src={product.image} alt="Signature Tracksuit hardware development detail" className="product-gallery-wide" imageClassName="crop-detail-zipper" sizes="(max-width: 900px) 100vw, 58vw" />
              <div className="product-gallery-pair">
                <MediaFrame src={product.image} alt="Signature Tracksuit monogram placement detail" imageClassName="crop-detail-logo" sizes="(max-width: 900px) 100vw, 29vw" />
                <MediaFrame src={product.image} alt="Signature Tracksuit cuff construction detail" imageClassName="crop-detail-cuff" sizes="(max-width: 900px) 100vw, 29vw" />
              </div>
            </>
          ) : (
            <MediaPlaceholder name={`${product.slug}_model_front`} ratio="4:5" />
          )}
        </div>
        <aside className="product-purchase-panel">
          <ProductConfigurator product={product} />
        </aside>
      </section>

      <section className="product-statement section-space">
        <Reveal className="narrow-copy">
          <h2>Purpose before excess.</h2>
          <p>{product.statement}</p>
        </Reveal>
      </section>

      <section className="product-craft section-space">
        <div className="site-shell product-craft-grid">
          <Reveal>
            <MediaFrame src="/assets/rigid-box.png" alt="LE QUANCE black packaging concept" imageClassName="crop-packaging" sizes="(max-width: 800px) 100vw, 58vw" />
          </Reveal>
          <Reveal className="product-craft-copy" delay={0.08}>
            <p className="eyebrow">The Craft</p>
            <h2>Luxury is refined, not added.</h2>
            <p>Final materials and manufacturing details will be published as verified production facts. The design direction remains clear: weight, recovery, fit and finish first.</p>
            <LinkButton href="/craftsmanship" variant="text">Discover the Craft</LinkButton>
          </Reveal>
        </div>
      </section>

      <section className="related-section section-space site-shell">
        <Reveal className="section-heading-stack"><h2>Discover the Collection</h2></Reveal>
        <div className="catalog-grid related-grid">
          {related.map((item) => <ProductCard key={item.slug} product={item} />)}
        </div>
      </section>

      <StructuredData data={[
        {
          "@context": "https://schema.org",
          "@type": "Product",
          name: product.name,
          description: product.descriptor,
          image: [`${siteUrl}${product.image}`],
          brand: { "@type": "Brand", name: "LE QUANCE" },
          category: product.category,
          color: product.colour,
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "LE QUANCE", item: siteUrl },
            { "@type": "ListItem", position: 2, name: "Shop", item: `${siteUrl}/shop` },
            { "@type": "ListItem", position: 3, name: product.name, item: `${siteUrl}/products/${product.slug}` },
          ],
        },
      ]} />
    </>
  );
}
