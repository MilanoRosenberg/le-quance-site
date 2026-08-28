"use client";

import { Minus, Plus } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import { useCommerce } from "@/components/commerce/CommerceProvider";
import { products } from "@/data/commerce";

export function CartView() {
  const { bag, removeFromBag, updateQuantity, hydrated } = useCommerce();
  const lines = bag.flatMap((line) => {
    const product = products.find((item) => item.slug === line.productSlug);
    return product ? [{ ...line, product }] : [];
  });

  if (!hydrated) {
    return <div className="cart-loading" aria-label="Loading bag"><span /><span /></div>;
  }

  if (lines.length === 0) {
    return (
      <div className="empty-state site-shell">
        <h2>Your bag is empty.</h2>
        <p>Begin with the first LE QUANCE chapter.</p>
        <Link className="button button-primary" href="/collections/signature-black">Discover Signature Black</Link>
      </div>
    );
  }

  return (
    <div className="cart-layout site-shell">
      <section className="cart-lines" aria-label="Bag items">
        {lines.map((line) => (
          <article className="cart-page-line" key={line.key}>
            <div className="cart-page-image">
              <Image src={line.product.image} alt="" fill sizes="180px" className={line.product.mediaCrop} />
            </div>
            <div className="cart-page-copy">
              <Link href={`/products/${line.product.slug}`}>{line.product.name}</Link>
              <p>{line.product.colour}<br />Size {line.size}</p>
              <span>Price pending approval</span>
              <div className="quantity-control">
                <button type="button" aria-label="Decrease quantity" onClick={() => updateQuantity(line.key, line.quantity - 1)}><Minus size={13} /></button>
                <span>{line.quantity}</span>
                <button type="button" aria-label="Increase quantity" onClick={() => updateQuantity(line.key, line.quantity + 1)}><Plus size={13} /></button>
              </div>
              <button className="text-button" type="button" onClick={() => removeFromBag(line.key)}>Remove</button>
            </div>
          </article>
        ))}
      </section>
      <aside className="cart-summary">
        <h2>Summary</h2>
        <dl>
          <div><dt>Subtotal</dt><dd>Pending</dd></div>
          <div><dt>Delivery</dt><dd>Calculated at launch</dd></div>
          <div><dt>Taxes</dt><dd>Market dependent</dd></div>
        </dl>
        <p>Checkout will become available when approved prices, inventory, delivery and payment configuration are connected.</p>
        <Link className="button button-primary" href="/checkout">View Checkout Handoff</Link>
        <Link className="text-link" href="/shop">Continue shopping</Link>
      </aside>
    </div>
  );
}
