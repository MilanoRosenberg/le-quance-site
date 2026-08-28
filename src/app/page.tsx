import type { Metadata } from "next";
import Link from "next/link";
import { BrandLogo } from "@/components/brand/BrandLogo";
import { NewsletterForm } from "@/components/forms/NewsletterForm";
import { Reveal } from "@/components/motion/Reveal";
import { LinkButton } from "@/components/ui/LinkButton";
import { MediaFrame } from "@/components/ui/MediaFrame";

export const metadata: Metadata = {
  title: "Modern Luxury in Motion",
  description:
    "Enter LE QUANCE. Discover Signature Black, the first chapter in a modern luxury wardrobe.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <section className="home-hero">
        <div className="home-hero-copy">
          <Reveal>
            <p className="eyebrow">Signature Black</p>
            <h1>Refinement<br />in motion.</h1>
            <p>One controlled silhouette. A house built for what comes next.</p>
            <div className="hero-actions">
              <LinkButton href="/collections/signature-black">Discover the Collection</LinkButton>
              <LinkButton href="/the-house" variant="secondary">The House</LinkButton>
            </div>
          </Reveal>
        </div>
        <MediaFrame
          src="/assets/signature-tracksuit.png"
          alt="LE QUANCE Signature Tracksuit concept"
          className="home-hero-media"
          imageClassName="crop-tracksuit-hero"
          priority
          sizes="(max-width: 900px) 100vw, 54vw"
        />
      </section>

      <section className="collection-statement section-space">
        <Reveal className="site-shell collection-statement-inner">
          <BrandLogo variant="monogram" linked={false} />
          <h2>Signature Black</h2>
          <p>Black removes distraction. Form, movement and detail remain.</p>
          <Link href="/collections/signature-black" className="text-link">Explore the Collection</Link>
        </Reveal>
      </section>

      <section className="signature-feature section-space">
        <div className="site-shell signature-feature-grid">
          <Reveal className="signature-object">
            <MediaFrame
              src="/assets/signature-tracksuit.png"
              alt="Signature Tracksuit front and back concept"
              imageClassName="crop-tracksuit-product"
              sizes="(max-width: 800px) 100vw, 58vw"
            />
          </Reveal>
          <Reveal className="signature-feature-copy" delay={0.08}>
            <h2>The Signature Tracksuit</h2>
            <p>Cut around a refined athletic line. Structured enough to hold its shape, quiet enough to wear without announcement.</p>
            <dl className="feature-facts">
              <div><dt>Colour</dt><dd>Deep Black</dd></div>
              <div><dt>Material</dt><dd>Interlock development direction</dd></div>
              <div><dt>Release</dt><dd>Private access pending</dd></div>
              <div><dt>Price</dt><dd>Pending approval</dd></div>
            </dl>
            <LinkButton href="/products/signature-tracksuit">Discover the Piece</LinkButton>
          </Reveal>
        </div>
      </section>

      <section className="craft-story section-space">
        <div className="site-shell">
          <Reveal className="section-heading-stack">
            <p className="eyebrow">The Craft</p>
            <h2>Details earn their place.</h2>
            <p>Every visible decision must support the silhouette, the hand-feel or the way the garment moves.</p>
          </Reveal>
          <div className="detail-mosaic">
            <Reveal className="detail-mosaic-large">
              <MediaFrame src="/assets/signature-tracksuit.png" alt="LE QUANCE tracksuit collar and zipper concept" imageClassName="crop-detail-zipper" sizes="(max-width: 800px) 100vw, 60vw" />
              <div className="media-copy"><h3>Controlled hardware</h3><p>A clean centre line with hardware selected to support, not decorate.</p></div>
            </Reveal>
            <Reveal delay={0.06}>
              <MediaFrame src="/assets/signature-tracksuit.png" alt="LE QUANCE tonal monogram detail concept" imageClassName="crop-detail-logo" sizes="(max-width: 800px) 100vw, 30vw" />
              <div className="media-copy"><h3>Identity, kept close</h3><p>The LQ monogram is present in proportion, not repeated for volume.</p></div>
            </Reveal>
            <Reveal delay={0.12}>
              <MediaFrame src="/assets/rigid-box.png" alt="LE QUANCE rigid packaging concept" imageClassName="crop-packaging" sizes="(max-width: 800px) 100vw, 30vw" />
              <div className="media-copy"><h3>Before the first wear</h3><p>The experience begins with an object made to feel deliberate.</p></div>
            </Reveal>
          </div>
          <LinkButton href="/craftsmanship" variant="text">Discover the Craft</LinkButton>
        </div>
      </section>

      <section className="movement-story section-space">
        <MediaFrame
          src="/assets/brand-cover.png"
          alt="Black LE QUANCE garment with monogram concept"
          className="movement-media"
          imageClassName="crop-brand-garment"
          sizes="100vw"
        />
        <Reveal className="movement-copy">
          <h2>Composure is movement with control.</h2>
          <p>The LE QUANCE silhouette is intended to move between travel, leisure and the moments that follow.</p>
          <LinkButton href="/lookbook" variant="secondary">View the Editorial</LinkButton>
        </Reveal>
      </section>

      <section className="monogram-story section-space">
        <div className="site-shell monogram-grid">
          <Reveal className="monogram-copy">
            <h2>A signature built to endure.</h2>
            <p>The interlocking L and Q hold a subtle motion in their meeting point. The mark remains small, considered and recognisable.</p>
            <LinkButton href="/the-house" variant="text">The House</LinkButton>
          </Reveal>
          <Reveal className="monogram-stage" delay={0.08}>
            <BrandLogo variant="monogram" linked={false} />
          </Reveal>
        </div>
      </section>

      <section className="manifesto-section section-space">
        <Reveal className="site-shell manifesto-inner">
          <p>LE QUANCE is created for those who move with purpose.</p>
          <h2>Restraint in appearance.<br />Uncompromising in ambition.</h2>
          <LinkButton href="/the-house">Enter the House</LinkButton>
        </Reveal>
      </section>

      <section className="lookbook-feature section-space">
        <div className="site-shell">
          <Reveal className="lookbook-title">
            <h2>The visual world of Signature Black</h2>
            <Link href="/lookbook" className="text-link">View the Editorial</Link>
          </Reveal>
          <div className="lookbook-grid">
            <Reveal><MediaFrame src="/assets/summer-uniform.png" alt="LE QUANCE future summer collection concept" imageClassName="crop-summer-model" sizes="(max-width: 800px) 100vw, 46vw" /></Reveal>
            <Reveal delay={0.06}><MediaFrame src="/assets/packaging-hero.png" alt="LE QUANCE packaging concept" imageClassName="crop-packaging-wide" sizes="(max-width: 800px) 100vw, 46vw" /></Reveal>
            <Reveal delay={0.12}><MediaFrame src="/assets/brand-cover.png" alt="LE QUANCE brand and garment concept" imageClassName="crop-brand-detail" sizes="(max-width: 800px) 100vw, 46vw" /></Reveal>
          </div>
        </div>
      </section>

      <section className="newsletter-section home-newsletter-section section-space">
        <Reveal className="site-shell newsletter-inner">
          <h2>Private access begins here.</h2>
          <p>Receive future release notes, collection previews and stories from LE QUANCE.</p>
          <NewsletterForm />
        </Reveal>
      </section>
    </>
  );
}
