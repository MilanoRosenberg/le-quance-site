"use client";

import { FunnelSimple, X } from "@phosphor-icons/react";
import { useMemo, useState } from "react";
import { ProductCard } from "@/components/commerce/ProductCard";
import type { Product } from "@/types";

const categories = ["All", "Tracksuits", "T-Shirts", "Polos"];

export function ProductCatalog({ items }: { items: Product[] }) {
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("Featured");
  const [filtersOpen, setFiltersOpen] = useState(false);

  const filtered = useMemo(() => {
    const subset = category === "All" ? items : items.filter((item) => item.category === category);
    if (sort === "Name") return [...subset].sort((a, b) => a.name.localeCompare(b.name));
    if (sort === "Release status") {
      return [...subset].sort((a, b) => a.status.localeCompare(b.status));
    }
    return subset;
  }, [category, items, sort]);

  return (
    <section className="catalog-section site-shell" aria-labelledby="catalog-heading">
      <div className="catalog-toolbar">
        <div>
          <h2 id="catalog-heading">The Signature Pieces</h2>
          <span>{filtered.length} pieces</span>
        </div>
        <button className="filter-trigger" type="button" onClick={() => setFiltersOpen(true)}>
          <FunnelSimple size={17} weight="thin" /> Filter and sort
        </button>
        <div className="desktop-filters">
          <label>
            Category
            <select value={category} onChange={(event) => setCategory(event.target.value)}>
              {categories.map((item) => <option key={item}>{item}</option>)}
            </select>
          </label>
          <label>
            Sort
            <select value={sort} onChange={(event) => setSort(event.target.value)}>
              <option>Featured</option>
              <option>Name</option>
              <option>Release status</option>
            </select>
          </label>
        </div>
      </div>

      {filtered.length ? (
        <div className="catalog-grid">
          {filtered.map((product, index) => (
            <ProductCard key={product.slug} product={product} priority={index < 2} />
          ))}
        </div>
      ) : (
        <div className="catalog-empty">
          <p>No pieces match this selection.</p>
          <button className="text-button" type="button" onClick={() => setCategory("All")}>View all pieces</button>
        </div>
      )}

      <div className={`filter-drawer ${filtersOpen ? "is-open" : ""}`} aria-hidden={!filtersOpen}>
        <button className="overlay-backdrop" type="button" aria-label="Close filters" onClick={() => setFiltersOpen(false)} />
        <aside className="filter-panel" role="dialog" aria-modal="true" aria-label="Filter and sort products">
          <div className="overlay-panel-header">
            <h2>Filter and sort</h2>
            <button className="icon-button" type="button" aria-label="Close filters" onClick={() => setFiltersOpen(false)}>
              <X size={22} weight="thin" />
            </button>
          </div>
          <fieldset>
            <legend>Category</legend>
            {categories.map((item) => (
              <label key={item}>
                <input type="radio" name="category" value={item} checked={category === item} onChange={() => setCategory(item)} />
                {item}
              </label>
            ))}
          </fieldset>
          <label className="filter-sort-label">
            Sort
            <select value={sort} onChange={(event) => setSort(event.target.value)}>
              <option>Featured</option>
              <option>Name</option>
              <option>Release status</option>
            </select>
          </label>
          <button className="button button-primary" type="button" onClick={() => setFiltersOpen(false)}>View {filtered.length} pieces</button>
        </aside>
      </div>
    </section>
  );
}
