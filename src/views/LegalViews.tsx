import { Reveal } from "@/components/motion/Reveal";
import { PageHero } from "@/components/ui/PageHero";

const legalContent = {
  privacy: {
    title: "Privacy Policy",
    intro: "A production privacy policy requires the final company, platform and processor details.",
    sections: [
      { heading: "Controller information", body: "Legal entity name, registered address and privacy contact are pending company approval." },
      { heading: "Data collected", body: "The final policy must list data used for accounts, orders, payments, delivery, enquiries, analytics and marketing." },
      { heading: "Purpose and legal basis", body: "Each data purpose and legal basis must be documented after the final platform and market scope are confirmed." },
      { heading: "Processors", body: "Commerce, payment, email, analytics, hosting and carrier providers must be named after contracts are in place." },
      { heading: "Retention", body: "Retention periods must follow operational need, accounting requirements and applicable law." },
      { heading: "Your rights", body: "The final policy will explain access, correction, deletion, restriction, portability and objection rights where applicable." },
      { heading: "International transfers", body: "Transfer safeguards depend on the locations and terms of the selected providers." },
      { heading: "Contact and complaints", body: "The privacy contact and competent supervisory authority must be inserted after legal review." },
    ],
  },
  terms: {
    title: "Terms & Conditions",
    intro: "These headings define the required launch structure. They are not final terms of sale.",
    sections: [
      { heading: "Website use", body: "Final rules must cover acceptable use, availability, account security and content accuracy." },
      { heading: "Terms of sale", body: "The contracting entity, order acceptance process and customer eligibility require legal approval." },
      { heading: "Products and pricing", body: "Confirmed product descriptions, currency, taxes and error handling must be defined in the commerce setup." },
      { heading: "Payment", body: "Accepted methods, authorisation and payment timing depend on the selected payment provider." },
      { heading: "Delivery", body: "Destinations, risk transfer, estimates and delay handling require the final fulfilment model." },
      { heading: "Returns", body: "Return, cancellation and refund terms must comply with applicable consumer law." },
      { heading: "Liability", body: "Any limitation must be written and reviewed for every target market." },
      { heading: "Intellectual property", body: "LE QUANCE brand assets, content and product designs require an approved rights statement." },
      { heading: "Governing law", body: "Governing law, jurisdiction and company contact details remain pending legal advice." },
    ],
  },
  cookies: {
    title: "Cookie Policy",
    intro: "Consent categories are prepared for implementation. Actual cookies depend on the final platform and tools.",
    sections: [
      { heading: "Necessary cookies", body: "These may support security, navigation, bag state, checkout and consent preferences." },
      { heading: "Analytics", body: "Analytics cookies must remain disabled until valid consent where required and must match the selected analytics provider." },
      { heading: "Marketing", body: "Marketing cookies must remain disabled until valid consent and approved campaign tools are configured." },
      { heading: "Preference cookies", body: "Language, region and interface preferences may be stored where the final experience requires them." },
      { heading: "Consent settings", body: "A production consent manager must allow visitors to accept, reject and revisit non-essential categories." },
      { heading: "Cookie inventory", body: "Names, providers, purposes and durations must be generated from the deployed production environment." },
    ],
  },
};

export function LegalView({ type }: { type: keyof typeof legalContent }) {
  const page = legalContent[type];
  return (
    <>
      <PageHero title={page.title} intro={page.intro} />
      <section className="legal-content section-space site-shell">
        <div className="legal-review-note"><strong>Legal review required before launch</strong><p>Last content audit: 28 August 2026. This date is not a legal approval date.</p></div>
        {page.sections.map((section, index) => (
          <Reveal key={section.heading} delay={(index % 3) * 0.04}><section><h2>{section.heading}</h2><p>{section.body}</p></section></Reveal>
        ))}
      </section>
    </>
  );
}
