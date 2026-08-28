"use client";

import { Heart } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import { useCommerce } from "@/components/commerce/CommerceProvider";
import { formatPrice } from "@/data/commerce";
import type { Product } from "@/types";

export function ProductCard({ product, priority = false }: { product: Product; priority?: boolean }) {
  const { wishlist, toggleWishlist } = useCommerce();
  const wished = wishlist.includes(product.slug);

  return (
    <article className="product-card">
      <div className="product-card-media">
        <Link href={`/products/${product.slug}`} aria-label={`View ${product.name}`}>
          <Image
            src={product.image}
            alt={product.imageAlt}
            fill
            loading={priority ? "eager" : "lazy"}
            sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
            className={product.mediaCrop}
          />
        </Link>
        <button
          className={`wishlist-button ${wished ? "is-active" : ""}`}
          type="button"
          aria-label={wished ? `Remove ${product.name} from wishlist` : `Add ${product.name} to wishlist`}
          aria-pressed={wished}
          onClick={() => toggleWishlist(product.slug)}
        >
          <Heart size={19} weight={wished ? "fill" : "thin"} />
        </button>
      </div>
      <div className="product-card-copy">
        <div>
          <Link href={`/products/${product.slug}`}>{product.name}</Link>
          <span>{product.colour}</span>
        </div>
        <div className="product-card-meta">
          <span>{product.status === "private-access" ? "Private access" : "Coming soon"}</span>
          <strong>{formatPrice(product.price)}</strong>
        </div>
      </div>
    </article>
  );
}
