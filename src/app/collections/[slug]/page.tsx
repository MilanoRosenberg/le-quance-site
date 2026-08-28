import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductCard } from "@/components/commerce/ProductCard";
import { Reveal } from "@/components/motion/Reveal";
import { LinkButton } from "@/components/ui/LinkButton";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { StructuredData } from "@/components/seo/StructuredData";
import { collections, getCollection, products } from "@/data/commerce";

export function generateStaticParams() {
  return collections.map((collection) => ({ slug: collection.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const collection = getCollection(slug);
  if (!collection) return {};
  return {
    title: collection.name,
    description: collection.intro,
    alternates: { canonical: `/collections/${collection.slug}` },
    openGraph: { images: [collection.image] },
  };
}

export default async function CollectionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const collection = getCollection(slug);
  if (!collection) notFound();
  const collectionProducts = products.filter((product) => collection.productSlugs.includes(product.slug));
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  return (
    <>
      <section className="collection-detail-hero">
        <MediaFrame src={collection.image} alt={collection.imageAlt} className="collection-detail-media" imageClassName="crop-tracksuit-collection-hero" priority sizes="100vw" />
        <Reveal className="collection-detail-copy">
          <p>LE QUANCE</p>
          <h1>{collection.name}</h1>
          <span>{collection.statement}</span>
        </Reveal>
      </section>

      <section className="collection-story section-space">
        <Reveal className="narrow-copy">
          <h2>Black, without distraction.</h2>
          <p>{collection.intro}</p>
          <p>The first chapter focuses on one central piece and two future extensions. No artificial category abundance, no unapproved availability.</p>
        </Reveal>
      </section>

      <section className="collection-products section-space site-shell">
        <Reveal className="section-heading-stack">
          <h2>The Pieces</h2>
          <p>The Signature Tracksuit leads the chapter. Additional pieces remain in development.</p>
        </Reveal>
        <div className="catalog-grid">
          {collectionProducts.map((product) => <ProductCard key={product.slug} product={product} />)}
        </div>
      </section>

      <section className="collection-editorial section-space">
        <div className="site-shell collection-editorial-grid">
          <Reveal><MediaFrame src="/assets/brand-cover.png" alt="LE QUANCE black garment and monogram concept" imageClassName="crop-brand-detail" sizes="(max-width: 800px) 100vw, 42vw" /></Reveal>
          <Reveal delay={0.06}><MediaFrame src="/assets/rigid-box.png" alt="LE QUANCE black rigid box packaging concept" imageClassName="crop-packaging" sizes="(max-width: 800px) 100vw, 42vw" /></Reveal>
          <Reveal className="collection-quote" delay={0.12}><blockquote>“What remains should feel inevitable.”</blockquote></Reveal>
        </div>
      </section>

      <section className="next-chapter section-space">
        <Reveal className="site-shell next-chapter-inner">
          <h2>Discover the house behind the collection.</h2>
          <LinkButton href="/the-house">The House</LinkButton>
        </Reveal>
      </section>

      <StructuredData data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "LE QUANCE", item: siteUrl },
          { "@type": "ListItem", position: 2, name: "Collections", item: `${siteUrl}/collections` },
          { "@type": "ListItem", position: 3, name: collection.name, item: `${siteUrl}/collections/${collection.slug}` },
        ],
      }} />
    </>
  );
}
