import type { JournalEntry } from "@/types";

export const primaryNavigation = [
  { label: "Shop", href: "/shop" },
  { label: "Collections", href: "/collections" },
  { label: "The House", href: "/the-house" },
  { label: "Craftsmanship", href: "/craftsmanship" },
  { label: "Journal", href: "/journal" },
];

export const footerGroups = [
  {
    title: "Client Services",
    links: [
      { label: "Contact", href: "/contact" },
      { label: "FAQ", href: "/faq" },
      { label: "Shipping & Delivery", href: "/shipping-delivery" },
      { label: "Returns & Exchanges", href: "/returns-exchanges" },
      { label: "Size Guide", href: "/size-guide" },
      { label: "Track Order", href: "/track-order" },
    ],
  },
  {
    title: "The House",
    links: [
      { label: "About LE QUANCE", href: "/the-house" },
      { label: "Craftsmanship", href: "/craftsmanship" },
      { label: "Lookbook", href: "/lookbook" },
      { label: "Journal", href: "/journal" },
      { label: "Collections", href: "/collections" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms & Conditions", href: "/terms" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Cookie Policy", href: "/cookies" },
    ],
  },
];

export const faqs = [
  {
    category: "Orders",
    items: [
      {
        question: "Can I change my order?",
        answer:
          "Order changes depend on fulfilment status. The final process will be published when the commerce and fulfilment systems are connected.",
      },
      {
        question: "Can I cancel my order?",
        answer:
          "Cancellation terms are pending the approved sales policy. Client Services will handle eligible requests once ordering is live.",
      },
      {
        question: "Where is my confirmation?",
        answer:
          "Order confirmation email will be sent by the connected commerce provider. Check spam first, then contact Client Services with your order reference.",
      },
    ],
  },
  {
    category: "Shipping",
    items: [
      {
        question: "Where do you ship?",
        answer:
          "Final shipping destinations are not yet approved. The launch policy will list every supported destination before checkout opens.",
      },
      {
        question: "How long does delivery take?",
        answer:
          "Delivery estimates will be calculated from the final fulfilment location, carrier and destination. No delivery window is claimed before those details are confirmed.",
      },
      {
        question: "Will I receive tracking?",
        answer:
          "Tracking will be provided when the carrier integration is active and the order has been dispatched.",
      },
      {
        question: "Are duties and taxes included?",
        answer:
          "The checkout and market configuration will state whether duties and taxes are included for each destination.",
      },
    ],
  },
  {
    category: "Returns",
    items: [
      {
        question: "What is the return window?",
        answer:
          "The final return window will be published after legal review. Applicable consumer rights remain unaffected.",
      },
      {
        question: "Can I exchange a size?",
        answer:
          "Exchange availability will depend on inventory and the approved returns workflow.",
      },
      {
        question: "What condition must an item be in?",
        answer:
          "Final condition requirements will be stated in the approved returns policy before sales begin.",
      },
    ],
  },
  {
    category: "Product",
    items: [
      {
        question: "How does LE QUANCE fit?",
        answer:
          "The development direction is refined and athletic without restriction. Final garment measurements and fit notes will be added after production grading.",
      },
      {
        question: "What is the final composition?",
        answer:
          "Current materials are development directions only. Confirmed composition and care information will appear on each product page before purchase is enabled.",
      },
      {
        question: "Will pieces be restocked?",
        answer:
          "Restock decisions will follow real demand and production capacity. Join private access for confirmed release updates.",
      },
    ],
  },
  {
    category: "Account and Brand",
    items: [
      {
        question: "How will my account work?",
        answer:
          "Accounts will support order history, saved addresses and favourites once the authentication provider is connected.",
      },
      {
        question: "Where is LE QUANCE produced?",
        answer:
          "No production location is published until the final manufacturing partner and product origin are approved.",
      },
      {
        question: "How do I hear about future releases?",
        answer:
          "Join the LE QUANCE list for release notices, collection previews and future private access.",
      },
    ],
  },
];

export const journalEntries: JournalEntry[] = [
  {
    slug: "pursuit-in-form",
    category: "The Pursuit",
    title: "Pursuit, Given Form",
    excerpt: "A note on composure, movement and building an identity that lasts.",
    intro:
      "Progress is rarely loud. It is repeated, refined and carried forward in the details that remain.",
    image: "/assets/brand-cover.png",
    imageAlt: "LE QUANCE black garment and monogram concept",
    paragraphs: [
      "LE QUANCE begins with a simple belief: ambition does not need to announce itself. It appears through discipline, posture and the decisions made when nobody is watching.",
      "That belief shapes the wardrobe. Proportion is considered before decoration. Materials are judged by how they move, recover and hold their form. Identity is present, but never forced.",
      "Keep Chasing Your Dreams is not a campaign line repeated without context. It is the private motion behind the house, a reminder that success is not a fixed destination.",
    ],
    pullQuote: "Refinement is not stillness. It is movement with control.",
  },
  {
    slug: "signature-black-notes",
    category: "Collections",
    title: "Notes on Signature Black",
    excerpt: "Why the first chapter is built around one colour and a controlled silhouette.",
    intro:
      "Black removes distraction. What remains is proportion, texture and the quality of every line.",
    image: "/assets/signature-tracksuit.png",
    imageAlt: "Signature Black tracksuit concept and detail board",
    paragraphs: [
      "Signature Black is intended as a foundation rather than a seasonal effect. It allows the first pieces to be read through form and material.",
      "The collection is deliberately controlled. LE QUANCE would rather develop a small number of convincing pieces than manufacture the appearance of abundance.",
      "Future colours can enter the house with the same discipline. Burgundy, forest green, midnight navy and ivory will only matter when the product itself is ready.",
    ],
    pullQuote: "Start with less. Make every remaining decision visible.",
  },
  {
    slug: "the-object-before-the-opening",
    category: "Design",
    title: "The Object Before the Opening",
    excerpt: "Packaging as the first physical chapter of the LE QUANCE experience.",
    intro:
      "The first contact with a garment often happens before the fabric is touched.",
    image: "/assets/packaging-hero.png",
    imageAlt: "LE QUANCE rigid box, tissue paper and hangtag packaging concept",
    paragraphs: [
      "Packaging should protect, prepare and then disappear. It should feel considered without competing with the piece inside.",
      "The current direction uses deep black, subtle embossing, restrained metallic detail and a reusable structure where operations allow it.",
      "Every material and production claim remains subject to final supplier approval. The intent is already clear: confidence through restraint.",
    ],
    pullQuote: "The experience begins before the garment is revealed.",
  },
];

export function getJournalEntry(slug: string) {
  return journalEntries.find((entry) => entry.slug === slug);
}

export const utilityRoutes = [
  "the-house",
  "craftsmanship",
  "lookbook",
  "journal",
  ...journalEntries.map((entry) => `journal/${entry.slug}`),
  "size-guide",
  "faq",
  "contact",
  "shipping-delivery",
  "returns-exchanges",
  "track-order",
  "search",
  "account",
  "account/login",
  "account/register",
  "account/orders",
  "account/addresses",
  "account/profile",
  "wishlist",
  "cart",
  "checkout",
  "order-confirmation",
  "privacy",
  "terms",
  "cookies",
  "coming-soon",
  "private-access",
];

export const routeTitles: Record<string, { title: string; description: string }> = {
  "the-house": {
    title: "The House",
    description: "The vision, philosophy and future direction of LE QUANCE.",
  },
  craftsmanship: {
    title: "Craftsmanship",
    description: "LE QUANCE material, fit and construction development.",
  },
  lookbook: {
    title: "Lookbook",
    description: "The Signature Black visual world.",
  },
  journal: {
    title: "Journal",
    description: "Collections, materials, design and the pursuit behind LE QUANCE.",
  },
  "size-guide": {
    title: "Size Guide",
    description: "LE QUANCE fit direction and measurement guidance.",
  },
  faq: {
    title: "FAQ",
    description: "Answers about LE QUANCE products, orders and client services.",
  },
  contact: {
    title: "Client Services",
    description: "Contact LE QUANCE Client Services.",
  },
  "shipping-delivery": {
    title: "Shipping & Delivery",
    description: "LE QUANCE delivery policy status and launch guidance.",
  },
  "returns-exchanges": {
    title: "Returns & Exchanges",
    description: "LE QUANCE returns policy status and customer guidance.",
  },
  "track-order": {
    title: "Track Order",
    description: "Track a LE QUANCE order when carrier integration is active.",
  },
  search: {
    title: "Search",
    description: "Search LE QUANCE products, collections and journal stories.",
  },
  account: {
    title: "Account",
    description: "LE QUANCE customer account access.",
  },
  wishlist: {
    title: "Wishlist",
    description: "Saved LE QUANCE pieces.",
  },
  cart: {
    title: "Bag",
    description: "Review pieces in your LE QUANCE bag.",
  },
  checkout: {
    title: "Checkout",
    description: "Secure checkout handoff for LE QUANCE.",
  },
  "order-confirmation": {
    title: "Order Confirmation",
    description: "LE QUANCE order confirmation state.",
  },
  privacy: {
    title: "Privacy Policy",
    description: "LE QUANCE privacy policy status.",
  },
  terms: {
    title: "Terms & Conditions",
    description: "LE QUANCE website and sales terms status.",
  },
  cookies: {
    title: "Cookie Policy",
    description: "LE QUANCE cookie policy and consent categories.",
  },
  "coming-soon": {
    title: "Coming Soon",
    description: "Enter the first LE QUANCE chapter.",
  },
  "private-access": {
    title: "Private Access",
    description: "Request access to future LE QUANCE releases.",
  },
};
