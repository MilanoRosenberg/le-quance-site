"use client";

import { Heart } from "@phosphor-icons/react";
import Link from "next/link";
import { useState } from "react";
import { useCommerce } from "@/components/commerce/CommerceProvider";
import { formatPrice } from "@/data/commerce";
import type { Product } from "@/types";

export function ProductConfigurator({ product }: { product: Product }) {
  const [size, setSize] = useState("");
  const [message, setMessage] = useState("");
  const { addToBag, toggleWishlist, wishlist } = useCommerce();
  const wished = wishlist.includes(product.slug);

  function add() {
    if (!size) {
      setMessage("Select a size before adding this piece.");
      return;
    }
    setMessage("");
    addToBag(product, size);
  }

  return (
    <div className="product-configurator">
      <p className="product-status">{product.status === "private-access" ? "Private access preview" : "Future piece"}</p>
      <h1>{product.name}</h1>
      <p className="product-descriptor">{product.descriptor}</p>
      <p className="product-price">{formatPrice(product.price)}</p>

      <div className="product-colour">
        <span>Colour</span>
        <strong><i aria-hidden="true" /> {product.colour}</strong>
      </div>

      <fieldset className="size-selector" aria-describedby={message ? "size-message" : undefined}>
        <legend className="sr-only">Select size</legend>
        <div className="size-selector-heading">
          <span aria-hidden="true">Select size</span>
          <Link href="/size-guide">Size Guide</Link>
        </div>
        <div className="size-options">
          {product.sizes.map((item) => (
            <button
              key={item}
              type="button"
              className={size === item ? "is-selected" : ""}
              aria-pressed={size === item}
              onClick={() => {
                setSize(item);
                setMessage("");
              }}
            >
              {item}
            </button>
          ))}
        </div>
      </fieldset>
      {message ? <p id="size-message" className="form-message form-message-error" role="alert">{message}</p> : null}

      <div className="product-actions">
        <button className="button button-primary" type="button" onClick={add}>Add to Bag</button>
        <button
          className="button button-secondary wishlist-action"
          type="button"
          aria-pressed={wished}
          onClick={() => toggleWishlist(product.slug)}
        >
          <Heart size={18} weight={wished ? "fill" : "thin"} /> {wished ? "Saved" : "Save Piece"}
        </button>
      </div>

      <p className="commerce-note">
        This preview preserves your size selection and bag state. Purchase remains disabled until confirmed pricing, inventory and checkout are connected.
      </p>

      <div className="product-accordions">
        <details>
          <summary>Development details</summary>
          <dl>
            {product.developmentDetails.map((detail) => (
              <div key={detail.label}>
                <dt>{detail.label}</dt>
                <dd>{detail.value}<small>{detail.confirmed ? "Confirmed" : "Pending final production approval"}</small></dd>
              </div>
            ))}
          </dl>
        </details>
        <details>
          <summary>Fit</summary>
          <p>The fit direction is refined and athletic without feeling restrictive. Final garment measurements and model references are pending production grading.</p>
        </details>
        <details>
          <summary>Care and origin</summary>
          <p>Care instructions, final composition and country of origin will be published only after the production garment is approved.</p>
        </details>
        <details>
          <summary>Delivery and returns</summary>
          <p>Launch destinations, delivery estimates and the legally reviewed returns policy will be visible before checkout opens.</p>
        </details>
      </div>
    </div>
  );
}
