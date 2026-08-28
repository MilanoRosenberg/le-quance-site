import { Reveal } from "@/components/motion/Reveal";
import { LinkButton } from "@/components/ui/LinkButton";

export default function NotFound() {
  return (
    <section className="not-found-page">
      <Reveal className="site-shell not-found-inner">
        <span>404</span>
        <h1>This page has moved on.</h1>
        <p>Return to the current collection or continue exploring LE QUANCE.</p>
        <div className="hero-actions">
          <LinkButton href="/">Return Home</LinkButton>
          <LinkButton href="/shop" variant="secondary">Shop the Collection</LinkButton>
        </div>
      </Reveal>
    </section>
  );
}
