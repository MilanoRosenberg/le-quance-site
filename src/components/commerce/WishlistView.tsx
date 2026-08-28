"use client";

import Link from "next/link";
import { ProductCard } from "@/components/commerce/ProductCard";
import { useCommerce } from "@/components/commerce/CommerceProvider";
import { products } from "@/data/commerce";

export function WishlistView() {
  const { wishlist, hydrated } = useCommerce();
  const saved = products.filter((product) => wishlist.includes(product.slug));

  if (!hydrated) {
    return <div className="catalog-grid site-shell catalog-loading"><span /><span /><span /></div>;
  }

  if (!saved.length) {
    return (
      <div className="empty-state site-shell">
        <h2>No saved pieces yet.</h2>
        <p>Use the heart beside a piece to keep it here on this device.</p>
        <Link className="button button-primary" href="/shop">Explore the Collection</Link>
      </div>
    );
  }

  return (
    <div className="catalog-grid site-shell wishlist-grid">
      {saved.map((product) => <ProductCard key={product.slug} product={product} />)}
    </div>
  );
}
