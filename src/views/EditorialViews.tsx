import Link from "next/link";
import { BrandLogo } from "@/components/brand/BrandLogo";
import { NewsletterForm } from "@/components/forms/NewsletterForm";
import { Reveal } from "@/components/motion/Reveal";
import { LinkButton } from "@/components/ui/LinkButton";
import { MediaFrame, MediaPlaceholder } from "@/components/ui/MediaFrame";
import { PageHero } from "@/components/ui/PageHero";
import { getJournalEntry, journalEntries } from "@/data/site";

export function TheHouseView() {
  return (
    <>
      <PageHero
        eyebrow="The House"
        title="Ambition, held with composure."
        intro="A modern luxury label shaped by restraint and the pursuit of something greater."
      />

      <section className="house-origin section-space">
        <div className="site-shell house-origin-grid">
          <Reveal className="house-origin-copy">
            <h2>Why LE QUANCE exists.</h2>
            <p>LE QUANCE is built for people still moving toward something bigger, already carrying themselves with calm intent.</p>
            <p>The wardrobe follows that position. Fewer pieces. Stronger proportion. Identity expressed through detail instead of volume.</p>
          </Reveal>
          <Reveal delay={0.08}>
            <MediaFrame src="/assets/brand-cover.png" alt="LE QUANCE monogram and black garment concept" imageClassName="crop-brand-garment" sizes="(max-width: 800px) 100vw, 48vw" />
          </Reveal>
        </div>
      </section>

      <section className="pursuit-section section-space">
        <Reveal className="narrow-copy">
          <h2>Keep Chasing Your Dreams</h2>
          <p>Success is not a finish line. The phrase holds the deeper belief behind LE QUANCE: progress continues, even when the outside appears composed.</p>
        </Reveal>
      </section>

      <section className="reserved-identity section-space">
        <div className="site-shell reserved-identity-grid">
          <Reveal>
            <span>The name</span>
            <h2>Meaning should be approved, not invented.</h2>
          </Reveal>
          <Reveal delay={0.06}>
            <p>The final origin and meaning of the name LE QUANCE has not been supplied as an approved fact. This chapter is reserved until the house defines it.</p>
          </Reveal>
        </div>
      </section>

      <section className="monogram-editorial section-space">
        <div className="site-shell monogram-editorial-grid">
          <Reveal className="monogram-stage"><BrandLogo variant="monogram" linked={false} /></Reveal>
          <Reveal className="monogram-editorial-copy" delay={0.08}>
            <h2>The monogram.</h2>
            <p>The official mark interlocks L and Q in one controlled gesture. A subtle dolphin-like motion is held in the negative space, never separated into decoration.</p>
            <p>Symbolic readings beyond the approved construction remain subject to brand-owner confirmation.</p>
          </Reveal>
        </div>
      </section>

      <section className="principles-section section-space">
        <div className="site-shell">
          <Reveal className="section-heading-stack"><h2>Six principles. One language.</h2></Reveal>
          <div className="principles-grid">
            {["Restraint", "Proportion", "Fabric", "Fit", "Small details", "Timeless colour"].map((principle, index) => (
              <Reveal key={principle} delay={index * 0.04}><span>{principle}</span></Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="future-vision section-space">
        <MediaFrame src="/assets/summer-uniform.png" alt="Future LE QUANCE summer wardrobe concept" className="future-vision-media" imageClassName="crop-summer-wide" sizes="100vw" />
        <Reveal className="future-vision-copy">
          <h2>Beyond one silhouette.</h2>
          <p>From premium leisurewear toward a broader modern wardrobe, every release should remain recognisably LE QUANCE through refinement rather than repetition.</p>
        </Reveal>
      </section>

      <section className="next-chapter section-space">
        <Reveal className="site-shell next-chapter-inner">
          <h2>Enter the first chapter.</h2>
          <LinkButton href="/collections/signature-black">Discover the Collection</LinkButton>
        </Reveal>
      </section>
    </>
  );
}

export function CraftsmanshipView() {
  const topics = [
    {
      title: "Fabric",
      text: "Weight, stretch, recovery and hand-feel are development priorities. Final values remain unpublished until production approval.",
    },
    {
      title: "Construction",
      text: "Seams, panels, collar, cuffs and internal finish must support a clean silhouette from every angle.",
    },
    {
      title: "Hardware",
      text: "The development direction favours precise, quiet hardware with a controlled finish and smooth operation.",
    },
    {
      title: "Embroidery",
      text: "The monogram is kept subtle so recognition grows from placement, execution and consistency.",
    },
  ];

  return (
    <>
      <PageHero
        eyebrow="Craftsmanship"
        title="Built in the details."
        intro="Luxury is not created by adding more. It is created by refining what remains."
      />
      <section className="craft-hero-media section-space site-shell">
        <Reveal><MediaFrame src="/assets/signature-tracksuit.png" alt="Signature Tracksuit technical concept and material details" imageClassName="crop-tracksuit-craft" sizes="100vw" /></Reveal>
      </section>
      <section className="craft-topics section-space">
        <div className="site-shell craft-topic-grid">
          {topics.map((topic, index) => (
            <Reveal className="craft-topic" key={topic.title} delay={index * 0.05}>
              <h2>{topic.title}</h2>
              <p>{topic.text}</p>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="fit-feature section-space">
        <div className="site-shell fit-feature-grid">
          <Reveal>
            <h2>Athletic. Tailored. Unrestricted.</h2>
            <p>The intended fit balances a clean upper line with room to move. Final grading, model references and garment measurements will be published after approved samples.</p>
          </Reveal>
          <Reveal delay={0.08}>
            <MediaFrame src="/assets/brand-cover.png" alt="LE QUANCE garment fit and logo placement concept" imageClassName="crop-brand-garment" sizes="(max-width: 800px) 100vw, 48vw" />
          </Reveal>
        </div>
      </section>
      <section className="testing-section section-space">
        <div className="site-shell testing-grid">
          <Reveal className="testing-intro"><h2>Quality requires proof.</h2><p>Processes are not claimed before they exist. These are the verification stages the final product must document.</p></Reveal>
          <div className="testing-list">
            {["Fabric testing", "Wear testing", "Wash testing", "Sample refinement"].map((item, index) => (
              <Reveal key={item} delay={index * 0.04}><span>{item}</span><strong>Verification pending</strong></Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="next-chapter section-space">
        <Reveal className="site-shell next-chapter-inner">
          <h2>Explore the signature pieces.</h2>
          <LinkButton href="/shop">Shop the Collection</LinkButton>
        </Reveal>
      </section>
    </>
  );
}

export function LookbookView() {
  return (
    <>
      <PageHero
        title="Signature Black"
        intro="A first visual study in form, texture and controlled movement."
        compact
      />
      <section className="lookbook-page-grid site-shell section-space">
        <Reveal className="lookbook-page-wide"><MediaFrame src="/assets/brand-cover.png" alt="LE QUANCE black garment campaign concept" imageClassName="crop-brand-campaign" sizes="100vw" /></Reveal>
        <Reveal><MediaFrame src="/assets/signature-tracksuit.png" alt="LE QUANCE Signature Tracksuit front concept" imageClassName="crop-focus-front" sizes="(max-width: 800px) 100vw, 50vw" /></Reveal>
        <Reveal delay={0.05}><MediaFrame src="/assets/signature-tracksuit.png" alt="LE QUANCE Signature Tracksuit back concept" imageClassName="crop-focus-back" sizes="(max-width: 800px) 100vw, 50vw" /></Reveal>
        <Reveal className="lookbook-page-full"><MediaFrame src="/assets/packaging-hero.png" alt="LE QUANCE packaging composition concept" imageClassName="crop-packaging-wide" sizes="100vw" /></Reveal>
        <Reveal><MediaFrame src="/assets/summer-uniform.png" alt="LE QUANCE future black polo campaign concept" imageClassName="crop-summer-model" sizes="(max-width: 800px) 100vw, 38vw" /></Reveal>
        <Reveal className="lookbook-placeholder" delay={0.05}><MediaPlaceholder name="lookbook_signature_black_motion" ratio="4:5" /></Reveal>
      </section>
      <section className="shop-the-look section-space">
        <Reveal className="site-shell shop-the-look-inner">
          <div><h2>Shop the look.</h2><p>Signature Tracksuit, Deep Black.</p></div>
          <LinkButton href="/products/signature-tracksuit">Discover the Piece</LinkButton>
        </Reveal>
      </section>
      <section className="next-editorial section-space">
        <Reveal className="site-shell next-editorial-inner">
          <span>Next editorial</span>
          <Link href="/journal/pursuit-in-form">Pursuit, Given Form</Link>
        </Reveal>
      </section>
    </>
  );
}

export function JournalView() {
  const [featured, ...latest] = journalEntries;
  return (
    <>
      <PageHero title="Journal" intro="Collections, materials, design and the pursuit behind LE QUANCE." />
      <section className="journal-feature section-space">
        <div className="site-shell journal-feature-grid">
          <Reveal>
            <Link href={`/journal/${featured.slug}`}>
              <MediaFrame src={featured.image} alt={featured.imageAlt} imageClassName="crop-brand-campaign" sizes="(max-width: 800px) 100vw, 62vw" />
            </Link>
          </Reveal>
          <Reveal className="journal-feature-copy" delay={0.08}>
            <span>{featured.category}</span>
            <h2><Link href={`/journal/${featured.slug}`}>{featured.title}</Link></h2>
            <p>{featured.excerpt}</p>
            <Link className="text-link" href={`/journal/${featured.slug}`}>Read the story</Link>
          </Reveal>
        </div>
      </section>
      <section className="journal-latest section-space site-shell">
        <Reveal className="section-heading-stack"><h2>Latest stories</h2></Reveal>
        <div className="journal-grid">
          {latest.map((entry, index) => (
            <Reveal key={entry.slug} delay={index * 0.06}>
              <article className="journal-card">
                <Link href={`/journal/${entry.slug}`}><MediaFrame src={entry.image} alt={entry.imageAlt} imageClassName={entry.slug.includes("black") ? "crop-tracksuit-product" : "crop-packaging-wide"} sizes="(max-width: 800px) 100vw, 46vw" /></Link>
                <span>{entry.category}</span>
                <h3><Link href={`/journal/${entry.slug}`}>{entry.title}</Link></h3>
                <p>{entry.excerpt}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="journal-note section-space">
        <Reveal className="narrow-copy"><h2>A house note.</h2><p>LE QUANCE will publish only when there is a meaningful product, process or place to examine. The journal is not a volume exercise.</p></Reveal>
      </section>
      <section className="newsletter-section section-space"><Reveal className="site-shell newsletter-inner"><h2>Receive the next chapter.</h2><NewsletterForm /></Reveal></section>
    </>
  );
}

export function JournalArticleView({ slug }: { slug: string }) {
  const entry = getJournalEntry(slug);
  if (!entry) return null;
  const next = journalEntries[(journalEntries.indexOf(entry) + 1) % journalEntries.length];
  return (
    <article className="journal-article">
      <header className="article-header site-shell">
        <Reveal>
          <p>{entry.category}</p>
          <h1>{entry.title}</h1>
          <span>{entry.intro}</span>
        </Reveal>
      </header>
      <Reveal className="article-hero site-shell"><MediaFrame src={entry.image} alt={entry.imageAlt} imageClassName={entry.slug.includes("black") ? "crop-tracksuit-article" : entry.slug.includes("object") ? "crop-packaging-wide" : "crop-brand-campaign"} priority sizes="100vw" /></Reveal>
      <div className="article-body">
        {entry.paragraphs.map((paragraph, index) => (
          <Reveal key={paragraph}>
            {index === 1 ? <blockquote>{entry.pullQuote}</blockquote> : null}
            <p>{paragraph}</p>
          </Reveal>
        ))}
      </div>
      <section className="article-supporting site-shell section-space">
        <Reveal><MediaFrame src="/assets/rigid-box.png" alt="LE QUANCE black rigid box concept" imageClassName="crop-packaging" sizes="(max-width: 800px) 100vw, 48vw" /></Reveal>
        <Reveal delay={0.06}><MediaPlaceholder name={`journal_${entry.slug}_supporting`} ratio="4:5" /></Reveal>
      </section>
      <section className="article-related section-space"><Reveal className="site-shell shop-the-look-inner"><div><h2>Related piece</h2><p>The Signature Tracksuit, current development chapter.</p></div><LinkButton href="/products/signature-tracksuit">Discover the Piece</LinkButton></Reveal></section>
      <section className="next-editorial section-space"><Reveal className="site-shell next-editorial-inner"><span>Next story</span><Link href={`/journal/${next.slug}`}>{next.title}</Link></Reveal></section>
    </article>
  );
}
