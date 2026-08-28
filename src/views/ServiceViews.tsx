import Link from "next/link";
import { ContactForm, TrackOrderForm } from "@/components/forms/PendingForms";
import { Reveal } from "@/components/motion/Reveal";
import { LinkButton } from "@/components/ui/LinkButton";
import { PageHero } from "@/components/ui/PageHero";
import { faqs } from "@/data/site";

export function SizeGuideView() {
  const measurements = [
    { name: "Chest", detail: "Measure around the fullest part, keeping the tape level." },
    { name: "Waist", detail: "Measure around the natural waist without pulling the tape tight." },
    { name: "Hip", detail: "Measure around the fullest point of the seat." },
    { name: "Inseam", detail: "Measure from the top of the inner leg to the ankle." },
    { name: "Sleeve", detail: "Measure from shoulder point to wrist with a relaxed arm." },
  ];
  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

  return (
    <>
      <PageHero title="Find Your Fit" intro="A refined silhouette starts with clear measurements. Final garment grading is pending production approval." />
      <section className="fit-philosophy section-space"><Reveal className="narrow-copy"><h2>Close in line. Free in movement.</h2><p>LE QUANCE is developed toward an athletic, tailored fit that does not feel restrictive. Product-specific measurements will replace directional guidance once grading is approved.</p></Reveal></section>
      <section className="measurement-guide section-space site-shell">
        <Reveal className="section-heading-stack"><h2>How to measure.</h2></Reveal>
        <div className="measurement-grid">
          {measurements.map((measurement, index) => (
            <Reveal key={measurement.name} delay={index * 0.04}><h3>{measurement.name}</h3><p>{measurement.detail}</p></Reveal>
          ))}
        </div>
      </section>
      <section className="size-table-section section-space site-shell">
        <Reveal className="section-heading-stack"><h2>Signature Tracksuit</h2><p>Size availability follows the current development range. Measurements are intentionally withheld until verified.</p></Reveal>
        <div className="size-table-wrap">
          <table>
            <caption>Signature Tracksuit development size range</caption>
            <thead><tr><th scope="col">Measurement</th>{sizes.map((size) => <th scope="col" key={size}>{size}</th>)}</tr></thead>
            <tbody>
              {["Jacket chest", "Jacket length", "Trouser waist", "Trouser inseam"].map((row) => (
                <tr key={row}><th scope="row">{row}</th>{sizes.map((size) => <td key={size}><span className="sr-only">{size}: </span>Pending</td>)}</tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <section className="fit-notes section-space"><div className="site-shell fit-note-grid">
        <Reveal><h2>Jacket direction.</h2><p>Clean across the shoulder, controlled through the body and comfortable through movement.</p></Reveal>
        <Reveal delay={0.05}><h2>Trouser direction.</h2><p>Refined through the leg with a tapered finish and enough room for natural movement.</p></Reveal>
        <Reveal delay={0.1}><h2>Between sizes.</h2><p>A final recommendation requires verified garment measurements and wearer testing. Contact Client Services once product grading is live.</p></Reveal>
      </div></section>
      <section className="model-reference section-space"><Reveal className="narrow-copy"><h2>Model references.</h2><p>Model height, weight and worn size are not available in the approved asset set. This section is reserved for the final campaign and e-commerce photography.</p></Reveal></section>
      <section className="next-chapter section-space"><Reveal className="site-shell next-chapter-inner"><h2>Need personal fit advice?</h2><LinkButton href="/contact">Contact Client Services</LinkButton></Reveal></section>
    </>
  );
}

export function FAQView() {
  return (
    <>
      <PageHero title="Frequently Asked Questions" intro="Clear answers where operations are confirmed. Honest pending states where they are not." />
      <section className="faq-section section-space site-shell">
        {faqs.map((group) => (
          <div className="faq-group" key={group.category}>
            <h2>{group.category}</h2>
            <div className="faq-accordions">
              {group.items.map((item) => (
                <details key={item.question}>
                  <summary>{item.question}</summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        ))}
      </section>
      <section className="next-chapter section-space"><Reveal className="site-shell next-chapter-inner"><h2>Still need clarity?</h2><LinkButton href="/contact">Client Services</LinkButton></Reveal></section>
    </>
  );
}

export function ContactView() {
  const shortcuts = [
    { label: "FAQ", href: "/faq" },
    { label: "Shipping", href: "/shipping-delivery" },
    { label: "Returns", href: "/returns-exchanges" },
    { label: "Size Guide", href: "/size-guide" },
    { label: "Track Order", href: "/track-order" },
  ];
  return (
    <>
      <PageHero title="Client Services" intro="For product, sizing, delivery and order enquiries." />
      <section className="contact-layout section-space site-shell">
        <Reveal className="contact-form-wrap"><h2>Send an enquiry.</h2><ContactForm /></Reveal>
        <Reveal className="contact-aside" delay={0.08}>
          <div><h2>Direct contact.</h2><p>The final Client Services email address and response-time commitment are pending launch operations. No contact address is invented in this build.</p></div>
          <div><h2>Business and press.</h2><p>Select the relevant subject in the form so the future inbox routing can direct your message.</p></div>
          <div><h2>Social channels.</h2><p>Official handles will be published only after they are confirmed by the brand owner.</p></div>
        </Reveal>
      </section>
      <nav className="help-shortcuts section-space site-shell" aria-label="Help shortcuts">
        {shortcuts.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
      </nav>
    </>
  );
}

const shippingSections = [
  { title: "Shipping destinations", body: "Launch destinations are pending fulfilment and market approval. Supported countries will be shown before ordering opens." },
  { title: "Processing times", body: "No processing time is claimed until warehouse operations and cut-off rules are confirmed." },
  { title: "Delivery estimates", body: "Estimates will be calculated from the carrier, service level and destination at checkout." },
  { title: "Shipping fees", body: "Fees and any free-shipping threshold require approved commercial settings." },
  { title: "Tracking", body: "A tracking link will be issued after carrier acceptance when the integration is active." },
  { title: "Duties and taxes", body: "The checkout will state whether duties and taxes are included for each supported market." },
  { title: "Lost or delayed deliveries", body: "The final escalation route will follow the approved carrier and Client Services process." },
];

export function ShippingView() {
  return <PolicyStatusView title="Shipping & Delivery" intro="A clear launch policy will appear before purchases are enabled." sections={shippingSections} />;
}

const returnsSections = [
  { title: "Return eligibility", body: "Eligibility rules require final product categories, hygiene considerations and legal review." },
  { title: "Return window", body: "The return period will be published after legal review. Applicable consumer rights remain unaffected." },
  { title: "Item condition", body: "Approved condition requirements, packaging expectations and tag rules will be stated before launch." },
  { title: "How to return", body: "The return portal, address and carrier workflow depend on the final fulfilment setup." },
  { title: "Exchanges", body: "Exchange availability will depend on live size inventory and the approved operations process." },
  { title: "Refund timing", body: "Processing timing will reflect the payment provider, inspection workflow and applicable law." },
  { title: "Damaged or incorrect items", body: "Client Services will provide a dedicated resolution route when fulfilment is active." },
  { title: "Non-returnable items", body: "No exclusions are listed until product scope and legal review are complete." },
];

export function ReturnsView() {
  return <PolicyStatusView title="Returns & Exchanges" intro="The final policy must be legally reviewed before launch." sections={returnsSections} />;
}

function PolicyStatusView({ title, intro, sections }: { title: string; intro: string; sections: Array<{ title: string; body: string }> }) {
  return (
    <>
      <PageHero title={title} intro={intro} />
      <section className="policy-status section-space site-shell">
        <div className="policy-status-note"><strong>Pre-launch status</strong><p>This page contains implementation-safe guidance, not a final commercial or legal promise.</p></div>
        <div className="policy-status-grid">
          {sections.map((section, index) => (
            <Reveal key={section.title} delay={(index % 4) * 0.04}><h2>{section.title}</h2><p>{section.body}</p></Reveal>
          ))}
        </div>
      </section>
      <section className="next-chapter section-space"><Reveal className="site-shell next-chapter-inner"><h2>Need help with an existing order?</h2><LinkButton href="/contact">Client Services</LinkButton></Reveal></section>
    </>
  );
}

export function TrackOrderView() {
  return (
    <>
      <PageHero title="Track Order" intro="Enter the same email used at checkout with your order reference." />
      <section className="track-order-section section-space site-shell">
        <Reveal><TrackOrderForm /></Reveal>
        <Reveal className="track-order-note" delay={0.08}><h2>Tracking status.</h2><p>Live order lookup requires a commerce platform and carrier integration. This interface validates locally and stores nothing.</p></Reveal>
      </section>
    </>
  );
}
