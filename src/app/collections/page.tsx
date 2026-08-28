import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { LinkButton } from "@/components/ui/LinkButton";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { PageHero } from "@/components/ui/PageHero";
import { collections } from "@/data/commerce";

export const metadata: Metadata = {
  title: "Collections",
  description: "LE QUANCE collections presented as chapters in a modern luxury wardrobe.",
  alternates: { canonical: "/collections" },
};

export default function CollectionsPage() {
  const current = collections[0];
  return (
    <>
      <PageHero
        title="Collections"
        intro="Each collection is a chapter, defined by refinement rather than repetition."
      />
      <section className="collection-landing-feature section-space">
        <div className="site-shell collection-landing-grid">
          <Reveal className="collection-landing-media">
            <Link href={`/collections/${current.slug}`}>
              <MediaFrame src={current.image} alt={current.imageAlt} imageClassName="crop-tracksuit-collection" sizes="(max-width: 800px) 100vw, 62vw" />
            </Link>
          </Reveal>
          <Reveal className="collection-landing-copy" delay={0.08}>
            <p className="eyebrow">Current collection</p>
            <h2>{current.name}</h2>
            <p>{current.statement}</p>
            <LinkButton href={`/collections/${current.slug}`}>Explore Collection</LinkButton>
          </Reveal>
        </div>
      </section>
      <section className="collection-archive section-space">
        <Reveal className="site-shell archive-inner">
          <h2>The archive begins here.</h2>
          <p>No additional collection is presented before it has an approved product, image direction and release context.</p>
        </Reveal>
      </section>
    </>
  );
}
