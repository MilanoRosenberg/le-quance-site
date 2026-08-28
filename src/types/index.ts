export type ProductStatus = "private-access" | "coming-soon";

export type Product = {
  id: string;
  slug: string;
  name: string;
  descriptor: string;
  statement: string;
  category: "Tracksuits" | "T-Shirts" | "Polos";
  colour: string;
  price: number | null;
  currency: "EUR";
  status: ProductStatus;
  image: string;
  imageAlt: string;
  mediaCrop: string;
  sizes: string[];
  developmentDetails: Array<{
    label: string;
    value: string;
    confirmed: boolean;
  }>;
};

export type Collection = {
  slug: string;
  name: string;
  statement: string;
  intro: string;
  image: string;
  imageAlt: string;
  productSlugs: string[];
};

export type JournalEntry = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  intro: string;
  image: string;
  imageAlt: string;
  paragraphs: string[];
  pullQuote: string;
};

export type BagLine = {
  key: string;
  productSlug: string;
  size: string;
  quantity: number;
};
