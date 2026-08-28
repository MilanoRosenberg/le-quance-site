"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { BagLine, Product } from "@/types";

type CommerceContextValue = {
  bag: BagLine[];
  wishlist: string[];
  bagOpen: boolean;
  setBagOpen: (open: boolean) => void;
  addToBag: (product: Product, size: string) => void;
  removeFromBag: (key: string) => void;
  updateQuantity: (key: string, quantity: number) => void;
  toggleWishlist: (slug: string) => void;
  bagCount: number;
  hydrated: boolean;
};

const CommerceContext = createContext<CommerceContextValue | null>(null);
const BAG_KEY = "le-quance-bag-v1";
const WISHLIST_KEY = "le-quance-wishlist-v1";

function parseStoredValue<T>(key: string, fallback: T): T {
  try {
    const stored = window.localStorage.getItem(key);
    return stored ? (JSON.parse(stored) as T) : fallback;
  } catch {
    return fallback;
  }
}

export function CommerceProvider({ children }: { children: ReactNode }) {
  const [bag, setBag] = useState<BagLine[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [bagOpen, setBagOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    let active = true;
    queueMicrotask(() => {
      if (!active) return;
      setBag(parseStoredValue<BagLine[]>(BAG_KEY, []));
      setWishlist(parseStoredValue<string[]>(WISHLIST_KEY, []));
      setHydrated(true);
    });
    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    window.localStorage.setItem(BAG_KEY, JSON.stringify(bag));
  }, [bag, hydrated]);

  useEffect(() => {
    if (!hydrated) return;
    window.localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlist));
  }, [wishlist, hydrated]);

  useEffect(() => {
    if (!bagOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [bagOpen]);

  const addToBag = useCallback((product: Product, size: string) => {
    const key = `${product.slug}:${size}`;
    setBag((current) => {
      const existing = current.find((line) => line.key === key);
      if (existing) {
        return current.map((line) =>
          line.key === key ? { ...line, quantity: line.quantity + 1 } : line,
        );
      }
      return [
        ...current,
        { key, productSlug: product.slug, size, quantity: 1 },
      ];
    });
    setBagOpen(true);
  }, []);

  const removeFromBag = useCallback((key: string) => {
    setBag((current) => current.filter((line) => line.key !== key));
  }, []);

  const updateQuantity = useCallback((key: string, quantity: number) => {
    if (quantity < 1) {
      setBag((current) => current.filter((line) => line.key !== key));
      return;
    }
    setBag((current) =>
      current.map((line) => (line.key === key ? { ...line, quantity } : line)),
    );
  }, []);

  const toggleWishlist = useCallback((slug: string) => {
    setWishlist((current) =>
      current.includes(slug)
        ? current.filter((item) => item !== slug)
        : [...current, slug],
    );
  }, []);

  const bagCount = useMemo(
    () => bag.reduce((total, line) => total + line.quantity, 0),
    [bag],
  );

  const value = useMemo(
    () => ({
      bag,
      wishlist,
      bagOpen,
      setBagOpen,
      addToBag,
      removeFromBag,
      updateQuantity,
      toggleWishlist,
      bagCount,
      hydrated,
    }),
    [
      addToBag,
      bag,
      bagCount,
      bagOpen,
      hydrated,
      removeFromBag,
      toggleWishlist,
      updateQuantity,
      wishlist,
    ],
  );

  return (
    <CommerceContext.Provider value={value}>
      {children}
    </CommerceContext.Provider>
  );
}

export function useCommerce() {
  const context = useContext(CommerceContext);
  if (!context) {
    throw new Error("useCommerce must be used within CommerceProvider");
  }
  return context;
}
