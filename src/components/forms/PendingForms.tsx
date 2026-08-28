"use client";

import { MagnifyingGlass } from "@phosphor-icons/react";
import Link from "next/link";
import { useMemo, useState, type FormEvent } from "react";
import { products } from "@/data/commerce";
import { journalEntries } from "@/data/site";

type FormState = "idle" | "error" | "ready";

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if (!data.get("name") || !String(data.get("email")).includes("@") || !data.get("message")) {
      setState("error");
      return;
    }
    setState("ready");
    event.currentTarget.reset();
  }

  return (
    <form className="standard-form" onSubmit={submit} noValidate>
      <div className="form-grid-two">
        <label>Name<input name="name" autoComplete="name" required /></label>
        <label>Email<input name="email" type="email" autoComplete="email" required /></label>
      </div>
      <label>Order number <span>Optional</span><input name="orderNumber" autoComplete="off" /></label>
      <label>
        Subject
        <select name="subject" defaultValue="Product advice">
          <option>Product advice</option>
          <option>Size advice</option>
          <option>Existing order</option>
          <option>Return</option>
          <option>Press</option>
          <option>Business enquiry</option>
          <option>Other</option>
        </select>
      </label>
      <label>Message<textarea name="message" rows={7} required /></label>
      {state === "error" ? <p className="form-message form-message-error" role="alert">Complete your name, email and message.</p> : null}
      {state === "ready" ? <p className="form-message" role="status">The form is valid. Connect the Client Services inbox to send enquiries.</p> : null}
      <button className="button button-primary" type="submit">Prepare Enquiry</button>
    </form>
  );
}

export function TrackOrderForm() {
  const [state, setState] = useState<FormState>("idle");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if (!data.get("orderNumber") || !String(data.get("email")).includes("@")) {
      setState("error");
      return;
    }
    setState("ready");
  }

  return (
    <form className="standard-form narrow-form" onSubmit={submit} noValidate>
      <label>Order number<input name="orderNumber" autoComplete="off" required /></label>
      <label>Email address<input name="email" type="email" autoComplete="email" required /></label>
      {state === "error" ? <p className="form-message form-message-error" role="alert">Enter your order number and email address.</p> : null}
      {state === "ready" ? <p className="form-message" role="status">Carrier tracking is not connected yet. Your submitted details were not sent or stored.</p> : null}
      <button className="button button-primary" type="submit">Track Order</button>
      <Link className="text-link" href="/contact">Contact Client Services</Link>
    </form>
  );
}

export function AuthForm({ mode }: { mode: "login" | "register" }) {
  const [state, setState] = useState<FormState>("idle");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = String(data.get("email"));
    const password = String(data.get("password"));
    if (!email.includes("@") || password.length < 8) {
      setState("error");
      return;
    }
    setState("ready");
  }

  return (
    <form className="standard-form account-form" onSubmit={submit} noValidate>
      {mode === "register" ? (
        <div className="form-grid-two">
          <label>First name<input name="firstName" autoComplete="given-name" required /></label>
          <label>Last name<input name="lastName" autoComplete="family-name" required /></label>
        </div>
      ) : null}
      <label>Email<input name="email" type="email" autoComplete="email" required /></label>
      <label>Password<input name="password" type="password" autoComplete={mode === "login" ? "current-password" : "new-password"} minLength={8} required /></label>
      {mode === "register" ? (
        <label className="checkbox-label"><input name="newsletter" type="checkbox" /> Receive release notes and private access updates</label>
      ) : null}
      {state === "error" ? <p className="form-message form-message-error" role="alert">Enter a valid email and a password of at least eight characters.</p> : null}
      {state === "ready" ? <p className="form-message" role="status">The form is valid. Connect the authentication provider to continue securely.</p> : null}
      <button className="button button-primary" type="submit">{mode === "login" ? "Log In" : "Create Account"}</button>
      <div className="account-form-links">
        {mode === "login" ? <><Link href="/account">Forgot password</Link><Link href="/account/register">Create account</Link></> : <Link href="/account/login">Already have an account</Link>}
      </div>
    </form>
  );
}

export function PrivateAccessForm() {
  const [state, setState] = useState<FormState>("idle");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if (!String(data.get("email")).includes("@")) {
      setState("error");
      return;
    }
    setState("ready");
    event.currentTarget.reset();
  }

  return (
    <form className="private-access-form" onSubmit={submit} noValidate>
      <label>Email address<input name="email" type="email" autoComplete="email" placeholder="name@example.com" required /></label>
      <button className="button button-primary" type="submit">Request Private Access</button>
      {state === "error" ? <p className="form-message form-message-error" role="alert">Enter a valid email address.</p> : null}
      {state === "ready" ? <p className="form-message" role="status">Your request is ready. Connect the access-list provider to deliver it.</p> : null}
    </form>
  );
}

export function StandaloneSearch() {
  const [query, setQuery] = useState("");
  const matches = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return [];
    return [
      ...products.map((product) => ({
        type: "Product",
        title: product.name,
        detail: `${product.category}, ${product.colour}`,
        href: `/products/${product.slug}`,
      })),
      ...journalEntries.map((entry) => ({
        type: entry.category,
        title: entry.title,
        detail: entry.excerpt,
        href: `/journal/${entry.slug}`,
      })),
    ].filter((item) => `${item.type} ${item.title} ${item.detail}`.toLowerCase().includes(normalized));
  }, [query]);

  return (
    <section className="standalone-search site-shell">
      <label htmlFor="search-page-input">Search products and stories</label>
      <div className="search-input-row">
        <MagnifyingGlass size={28} weight="thin" aria-hidden="true" />
        <input id="search-page-input" type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search LE QUANCE" />
      </div>
      {!query ? (
        <div className="search-empty"><p>Begin with a product, collection or story.</p></div>
      ) : matches.length ? (
        <div className="search-page-results" aria-live="polite">
          <p>{matches.length} results</p>
          {matches.map((item) => (
            <Link key={item.href} href={item.href}>
              <span>{item.type}</span>
              <strong>{item.title}</strong>
              <p>{item.detail}</p>
            </Link>
          ))}
        </div>
      ) : (
        <div className="search-empty" role="status">
          <p>No results found. Discover the current collection.</p>
          <Link href="/shop">Shop LE QUANCE</Link>
        </div>
      )}
    </section>
  );
}
