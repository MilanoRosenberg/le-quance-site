import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  AccountSectionView,
  AccountView,
  CartPageView,
  CheckoutView,
  ComingSoonView,
  LoginView,
  OrderConfirmationView,
  PrivateAccessView,
  RegisterView,
  SearchView,
  WishlistPageView,
} from "@/views/CommerceAccountViews";
import {
  CraftsmanshipView,
  JournalArticleView,
  JournalView,
  LookbookView,
  TheHouseView,
} from "@/views/EditorialViews";
import { LegalView } from "@/views/LegalViews";
import {
  ContactView,
  FAQView,
  ReturnsView,
  ShippingView,
  SizeGuideView,
  TrackOrderView,
} from "@/views/ServiceViews";
import { getJournalEntry, routeTitles, utilityRoutes } from "@/data/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return utilityRoutes.map((route) => ({ slug: route.split("/") }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string[] }> }): Promise<Metadata> {
  const { slug } = await params;
  const path = slug.join("/");
  if (path.startsWith("journal/") && slug[1]) {
    const entry = getJournalEntry(slug[1]);
    if (!entry) return {};
    return {
      title: entry.title,
      description: entry.excerpt,
      alternates: { canonical: `/${path}` },
      openGraph: { images: [entry.image] },
    };
  }
  const meta = routeTitles[path];
  return {
    title: meta?.title || slug.at(-1)?.replaceAll("-", " ") || "LE QUANCE",
    description: meta?.description,
    alternates: { canonical: `/${path}` },
  };
}

export default async function UtilityPage({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  const path = slug.join("/");

  if (path.startsWith("journal/") && slug[1]) {
    if (!getJournalEntry(slug[1])) notFound();
    return <JournalArticleView slug={slug[1]} />;
  }

  switch (path) {
    case "the-house": return <TheHouseView />;
    case "craftsmanship": return <CraftsmanshipView />;
    case "lookbook": return <LookbookView />;
    case "journal": return <JournalView />;
    case "size-guide": return <SizeGuideView />;
    case "faq": return <FAQView />;
    case "contact": return <ContactView />;
    case "shipping-delivery": return <ShippingView />;
    case "returns-exchanges": return <ReturnsView />;
    case "track-order": return <TrackOrderView />;
    case "search": return <SearchView />;
    case "account": return <AccountView />;
    case "account/login": return <LoginView />;
    case "account/register": return <RegisterView />;
    case "account/orders": return <AccountSectionView section="orders" />;
    case "account/addresses": return <AccountSectionView section="addresses" />;
    case "account/profile": return <AccountSectionView section="profile" />;
    case "wishlist": return <WishlistPageView />;
    case "cart": return <CartPageView />;
    case "checkout": return <CheckoutView />;
    case "order-confirmation": return <OrderConfirmationView />;
    case "privacy": return <LegalView type="privacy" />;
    case "terms": return <LegalView type="terms" />;
    case "cookies": return <LegalView type="cookies" />;
    case "coming-soon": return <ComingSoonView />;
    case "private-access": return <PrivateAccessView />;
    default: notFound();
  }
}
