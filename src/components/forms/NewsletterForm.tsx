"use client";

import { useState, type FormEvent } from "react";

export function NewsletterForm({ compact = false }: { compact?: boolean }) {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "success" | "error">("idle");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email.includes("@")) {
      setState("error");
      return;
    }
    setState("success");
    setEmail("");
  }

  return (
    <form className={`newsletter-form ${compact ? "newsletter-form-compact" : ""}`} onSubmit={submit} noValidate>
      <label htmlFor={compact ? "footer-email" : "newsletter-email"}>
        Email address
      </label>
      <div className="newsletter-row">
        <input
          id={compact ? "footer-email" : "newsletter-email"}
          name="email"
          type="email"
          autoComplete="email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
            if (state !== "idle") setState("idle");
          }}
          placeholder="name@example.com"
          aria-describedby={state === "idle" ? undefined : compact ? "footer-newsletter-status" : "newsletter-status"}
        />
        <button className="button button-primary" type="submit">
          Join LE QUANCE
        </button>
      </div>
      {state === "error" ? (
        <p className="form-message form-message-error" id={compact ? "footer-newsletter-status" : "newsletter-status"} role="alert">
          Enter a valid email address.
        </p>
      ) : null}
      {state === "success" ? (
        <p className="form-message" id={compact ? "footer-newsletter-status" : "newsletter-status"} role="status">
          Your request is ready. Connect the newsletter provider to deliver it.
        </p>
      ) : null}
    </form>
  );
}
