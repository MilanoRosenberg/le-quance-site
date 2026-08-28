"use client";

import {
  Handbag,
  List,
  MagnifyingGlass,
  Minus,
  Plus,
  User,
  X,
} from "@phosphor-icons/react";
import { useMotionValueEvent, useScroll } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { BrandLogo } from "@/components/brand/BrandLogo";
import { useCommerce } from "@/components/commerce/CommerceProvider";
import { products } from "@/data/commerce";
import { journalEntries, primaryNavigation } from "@/data/site";

type Panel = "menu" | "search" | null;

export function Header() {
  const [panel, setPanel] = useState<Panel>(null);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const { bagCount, bagOpen, setBagOpen } = useCommerce();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 24);
  });

  useEffect(() => {
    const overlayOpen = panel !== null;
    if (!overlayOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setPanel(null);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [panel]);

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <div className="announcement-bar">
        <span>Private access to the first chapter</span>
        <Link href="/private-access">Request access</Link>
      </div>
      <header className={`site-header ${scrolled ? "site-header-scrolled" : ""}`}>
        <nav className="site-shell site-navigation" aria-label="Primary navigation">
          <button
            className="icon-button mobile-menu-trigger"
            type="button"
            aria-label="Open menu"
            aria-expanded={panel === "menu"}
            onClick={() => setPanel("menu")}
          >
            <List size={21} weight="thin" />
          </button>

          <div className="desktop-nav desktop-nav-left">
            {primaryNavigation.slice(0, 3).map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>

          <BrandLogo variant="wordmark" priority />

          <div className="desktop-nav desktop-nav-right">
            <Link href="/craftsmanship">Craftsmanship</Link>
            <button type="button" onClick={() => setPanel("search")}>
              Search
            </button>
            <Link href="/account">Account</Link>
            <button type="button" onClick={() => setBagOpen(true)}>
              Bag ({bagCount})
            </button>
          </div>

          <div className="mobile-actions">
            <button className="icon-button" type="button" aria-label="Search" onClick={() => setPanel("search")}>
              <MagnifyingGlass size={20} weight="thin" />
            </button>
            <button className="icon-button bag-icon" type="button" aria-label={`Open bag with ${bagCount} items`} onClick={() => setBagOpen(true)}>
              <Handbag size={20} weight="thin" />
              {bagCount > 0 ? <span>{bagCount}</span> : null}
            </button>
          </div>
        </nav>
      </header>

      <MobileMenu open={panel === "menu"} close={() => setPanel(null)} />
      <SearchOverlay open={panel === "search"} close={() => setPanel(null)} />
      <BagDrawer open={bagOpen} close={() => setBagOpen(false)} />
    </>
  );
}

function MobileMenu({ open, close }: { open: boolean; close: () => void }) {
  return (
    <div className={`site-overlay ${open ? "is-open" : ""}`} aria-hidden={!open}>
      <button className="overlay-backdrop" type="button" aria-label="Close menu" onClick={close} />
      <aside className="overlay-panel mobile-menu-panel" role="dialog" aria-modal="true" aria-label="Navigation menu">
        <div className="overlay-panel-header">
          <BrandLogo variant="wordmark" linked={false} />
          <button className="icon-button" type="button" aria-label="Close menu" onClick={close}>
            <X size={22} weight="thin" />
          </button>
        </div>
        <nav className="mobile-menu-links" aria-label="Mobile navigation">
          {primaryNavigation.map((item) => (
            <Link key={item.href} href={item.href} onClick={close}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="mobile-service-links">
          <Link href="/account" onClick={close}>
            <User size={18} weight="thin" /> Account
          </Link>
          <Link href="/wishlist" onClick={close}>Wishlist</Link>
          <Link href="/size-guide" onClick={close}>Size Guide</Link>
          <Link href="/contact" onClick={close}>Client Services</Link>
        </div>
      </aside>
    </div>
  );
}

function SearchOverlay({ open, close }: { open: boolean; close: () => void }) {
  const [query, setQuery] = useState("");
  const results = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return { products: [], articles: [] };
    return {
      products: products.filter((product) =>
        [product.name, product.category, product.colour].join(" ").toLowerCase().includes(normalized),
      ),
      articles: journalEntries.filter((entry) =>
        [entry.title, entry.category, entry.excerpt].join(" ").toLowerCase().includes(normalized),
      ),
    };
  }, [query]);

  const hasResults = results.products.length > 0 || results.articles.length > 0;

  return (
    <div className={`search-overlay ${open ? "is-open" : ""}`} aria-hidden={!open}>
      <div className="search-overlay-header site-shell">
        <BrandLogo variant="wordmark" linked={false} />
        <button className="icon-button" type="button" aria-label="Close search" onClick={close}>
          <X size={23} weight="thin" />
        </button>
      </div>
      <div className="search-overlay-body site-shell" role="dialog" aria-modal="true" aria-label="Search LE QUANCE">
        <label htmlFor="global-search">Search LE QUANCE</label>
        <div className="search-input-row">
          <MagnifyingGlass size={28} weight="thin" aria-hidden="true" />
          <input
            id="global-search"
            type="search"
            autoComplete="off"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Product, collection or story"
            tabIndex={open ? 0 : -1}
          />
        </div>

        {!query ? (
          <div className="search-suggestions">
            <span>Suggested</span>
            <Link href="/collections/signature-black" onClick={close}>Signature Black</Link>
            <Link href="/products/signature-tracksuit" onClick={close}>Signature Tracksuit</Link>
            <Link href="/craftsmanship" onClick={close}>The Craft</Link>
          </div>
        ) : null}

        {query && !hasResults ? (
          <div className="search-empty" role="status">
            <p>No results found.</p>
            <Link href="/shop" onClick={close}>Discover the current collection</Link>
          </div>
        ) : null}

        {hasResults ? (
          <div className="search-results" aria-live="polite">
            {results.products.map((product) => (
              <Link key={product.slug} href={`/products/${product.slug}`} onClick={close}>
                <span>Product</span>
                <strong>{product.name}</strong>
              </Link>
            ))}
            {results.articles.map((entry) => (
              <Link key={entry.slug} href={`/journal/${entry.slug}`} onClick={close}>
                <span>{entry.category}</span>
                <strong>{entry.title}</strong>
              </Link>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}

function BagDrawer({ open, close }: { open: boolean; close: () => void }) {
  const { bag, removeFromBag, updateQuantity } = useCommerce();
  const lines = bag.map((line) => ({
    ...line,
    product: products.find((product) => product.slug === line.productSlug),
  }));

  return (
    <div className={`site-overlay ${open ? "is-open" : ""}`} aria-hidden={!open}>
      <button className="overlay-backdrop" type="button" aria-label="Close bag" onClick={close} />
      <aside className="overlay-panel bag-panel" role="dialog" aria-modal="true" aria-label="Your bag">
        <div className="overlay-panel-header">
          <h2>Your Bag</h2>
          <button className="icon-button" type="button" aria-label="Close bag" onClick={close}>
            <X size={22} weight="thin" />
          </button>
        </div>

        <div className="bag-panel-body">
          {lines.length === 0 ? (
            <div className="bag-empty">
              <p>Your bag is currently empty.</p>
              <Link href="/collections/signature-black" onClick={close}>Discover Signature Black</Link>
            </div>
          ) : (
            lines.map(({ product, ...line }) =>
              product ? (
                <article className="bag-line" key={line.key}>
                  <div className="bag-line-image">
                    <Image src={product.image} alt="" fill sizes="118px" />
                  </div>
                  <div className="bag-line-copy">
                    <Link href={`/products/${product.slug}`} onClick={close}>{product.name}</Link>
                    <p>{product.colour}<br />Size {line.size}</p>
                    <span>Price pending approval</span>
                    <div className="quantity-control" aria-label={`Quantity for ${product.name}`}>
                      <button type="button" aria-label="Decrease quantity" onClick={() => updateQuantity(line.key, line.quantity - 1)}>
                        <Minus size={13} />
                      </button>
                      <span aria-live="polite">{line.quantity}</span>
                      <button type="button" aria-label="Increase quantity" onClick={() => updateQuantity(line.key, line.quantity + 1)}>
                        <Plus size={13} />
                      </button>
                    </div>
                    <button className="text-button" type="button" onClick={() => removeFromBag(line.key)}>Remove</button>
                  </div>
                </article>
              ) : null,
            )
          )}
        </div>

        <div className="bag-panel-footer">
          <div><span>Subtotal</span><strong>Pending</strong></div>
          <p>Confirmed pricing, taxes and delivery will appear after commerce integration.</p>
          <Link className="button button-primary" href={lines.length ? "/cart" : "/shop"} onClick={close}>
            {lines.length ? "Review Bag" : "Explore the Collection"}
          </Link>
        </div>
      </aside>
    </div>
  );
}
