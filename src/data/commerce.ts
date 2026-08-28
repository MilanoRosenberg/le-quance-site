import type { Collection, Product } from "@/types";

export const products: Product[] = [
  {
    id: "lq-signature-tracksuit",
    slug: "signature-tracksuit",
    name: "Signature Tracksuit",
    descriptor: "A refined two-piece study in structure and movement.",
    statement:
      "The first LE QUANCE silhouette is built around restraint. A clean line, controlled volume and branding kept close.",
    category: "Tracksuits",
    colour: "Deep Black",
    price: null,
    currency: "EUR",
    status: "private-access",
    image: "/assets/signature-tracksuit.png",
    imageAlt: "LE QUANCE Signature Tracksuit concept showing front, back and construction details",
    mediaCrop: "crop-tracksuit",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    developmentDetails: [
      {
        label: "Fabric direction",
        value: "Premium double-knit interlock",
        confirmed: false,
      },
      {
        label: "Weight direction",
        value: "Approximately 360 GSM",
        confirmed: false,
      },
      {
        label: "Composition direction",
        value: "72% nylon and 28% spandex",
        confirmed: false,
      },
      {
        label: "Hardware direction",
        value: "YKK Excella level zipper construction",
        confirmed: false,
      },
      {
        label: "Branding direction",
        value: "Subtle LQ embroidery",
        confirmed: false,
      },
      {
        label: "Fit direction",
        value: "Refined athletic silhouette with controlled stretch",
        confirmed: false,
      },
    ],
  },
  {
    id: "lq-signature-tshirt",
    slug: "signature-tshirt",
    name: "Signature T-Shirt",
    descriptor: "A heavyweight essential with a precise neckline.",
    statement:
      "A future LE QUANCE base layer, developed to hold its own through proportion, fabric and discreet identity.",
    category: "T-Shirts",
    colour: "Deep Black",
    price: null,
    currency: "EUR",
    status: "coming-soon",
    image: "/assets/signature-tshirt.png",
    imageAlt: "LE QUANCE premium black T-shirt concept shown from front and back",
    mediaCrop: "crop-garment",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    developmentDetails: [
      {
        label: "Fabric direction",
        value: "Heavyweight premium jersey",
        confirmed: false,
      },
      {
        label: "Construction direction",
        value: "Structured neckline and clean shoulder line",
        confirmed: false,
      },
      {
        label: "Branding direction",
        value: "Small tonal LQ application",
        confirmed: false,
      },
    ],
  },
  {
    id: "lq-signature-polo",
    slug: "signature-polo",
    name: "Signature Polo",
    descriptor: "A future smart leisure piece for warmer chapters.",
    statement:
      "The polo extends the LE QUANCE language toward resort and smart-casual dressing without losing restraint.",
    category: "Polos",
    colour: "Deep Black",
    price: null,
    currency: "EUR",
    status: "coming-soon",
    image: "/assets/signature-polo.png",
    imageAlt: "LE QUANCE deep black polo concept shown from front and back",
    mediaCrop: "crop-garment",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    developmentDetails: [
      {
        label: "Fabric direction",
        value: "Refined textured knit or premium pique",
        confirmed: false,
      },
      {
        label: "Construction direction",
        value: "Structured collar and considered button detail",
        confirmed: false,
      },
      {
        label: "Branding direction",
        value: "Small tonal LQ application",
        confirmed: false,
      },
    ],
  },
];

export const collections: Collection[] = [
  {
    slug: "signature-black",
    name: "Signature Black",
    statement: "The first chapter, reduced to its strongest form.",
    intro:
      "Deep Black establishes the LE QUANCE foundation. Shape, material and movement take priority over decoration.",
    image: "/assets/signature-tracksuit.png",
    imageAlt: "Signature Black collection concept centred on the LE QUANCE tracksuit",
    productSlugs: ["signature-tracksuit", "signature-tshirt", "signature-polo"],
  },
];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getCollection(slug: string) {
  return collections.find((collection) => collection.slug === slug);
}

export function formatPrice(price: number | null, currency: string = "EUR") {
  if (price === null) return "Price pending approval";
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(price);
}
