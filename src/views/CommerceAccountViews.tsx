import { CartView } from "@/components/commerce/CartView";
import { WishlistView } from "@/components/commerce/WishlistView";
import { BrandLogo } from "@/components/brand/BrandLogo";
import { AuthForm, PrivateAccessForm, StandaloneSearch } from "@/components/forms/PendingForms";
import { Reveal } from "@/components/motion/Reveal";
import { LinkButton } from "@/components/ui/LinkButton";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { PageHero } from "@/components/ui/PageHero";

export function SearchView() {
  return <><PageHero title="Search" intro="Products, collections and stories from LE QUANCE." compact /><StandaloneSearch /></>;
}

export function AccountView() {
  return (
    <>
      <PageHero title="Your Account" intro="Secure customer access will become active with the approved authentication provider." />
      <section className="account-landing section-space site-shell">
        <Reveal className="account-entry">
          <h2>Returning client.</h2>
          <p>Access order history, addresses and saved details after authentication is connected.</p>
          <LinkButton href="/account/login">Log In</LinkButton>
        </Reveal>
        <Reveal className="account-entry" delay={0.06}>
          <h2>New to LE QUANCE.</h2>
          <p>Create an account for faster checkout, saved favourites and private release access.</p>
          <LinkButton href="/account/register" variant="secondary">Create Account</LinkButton>
        </Reveal>
      </section>
      <section className="account-preview section-space">
        <div className="site-shell account-preview-grid">
          {["Recent orders", "Saved addresses", "Profile details", "Wishlist"].map((item, index) => (
            <Reveal key={item} delay={index * 0.04}><span>{item}</span><strong>Available after secure sign-in</strong></Reveal>
          ))}
        </div>
      </section>
    </>
  );
}

export function LoginView() {
  return <AuthPage mode="login" />;
}

export function RegisterView() {
  return <AuthPage mode="register" />;
}

function AuthPage({ mode }: { mode: "login" | "register" }) {
  return (
    <section className="auth-page section-space">
      <div className="site-shell auth-layout">
        <Reveal className="auth-copy">
          <BrandLogo variant="monogram" linked={false} />
          <h1>{mode === "login" ? "Welcome back." : "Enter the house."}</h1>
          <p>{mode === "login" ? "Secure sign-in will be completed through the final authentication provider." : "Create an account for order history, saved favourites and future private access."}</p>
        </Reveal>
        <Reveal className="auth-form-wrap" delay={0.08}><AuthForm mode={mode} /></Reveal>
      </div>
    </section>
  );
}

export function AccountSectionView({ section }: { section: "orders" | "addresses" | "profile" }) {
  const content = {
    orders: { title: "Orders", text: "No order history can be shown before secure authentication and commerce data are connected." },
    addresses: { title: "Addresses", text: "Saved delivery and billing addresses require an encrypted customer account backend." },
    profile: { title: "Profile", text: "Profile details will be editable after the authentication provider is connected." },
  }[section];
  return (
    <>
      <PageHero title={content.title} intro="Account service preview" compact />
      <div className="empty-state site-shell"><h2>Secure sign-in required.</h2><p>{content.text}</p><LinkButton href="/account/login">Log In</LinkButton></div>
    </>
  );
}

export function WishlistPageView() {
  return <><PageHero title="Wishlist" intro="Pieces saved on this device." compact /><WishlistView /></>;
}

export function CartPageView() {
  return <><PageHero title="Your Bag" intro="Review selected pieces before checkout becomes available." compact /><CartView /></>;
}

export function CheckoutView() {
  const stages = ["Contact", "Delivery", "Shipping", "Payment", "Review"];
  return (
    <>
      <PageHero title="Checkout Handoff" intro="A production checkout requires approved commerce, tax, inventory and payment configuration." compact />
      <section className="checkout-layout section-space site-shell">
        <Reveal className="checkout-stage-list">
          {stages.map((stage) => <div key={stage}><span>{stage}</span><strong>Provider integration required</strong></div>)}
        </Reveal>
        <Reveal className="checkout-summary" delay={0.08}>
          <BrandLogo variant="wordmark" linked={false} />
          <h2>Secure checkout, without simulation.</h2>
          <p>This build does not collect contact, delivery or payment data. Connect Shopify, another commerce backend or a custom provider before enabling checkout.</p>
          <ul>
            <li>Inventory and variants</li>
            <li>Taxes and market pricing</li>
            <li>Shipping rates</li>
            <li>Payment methods</li>
            <li>Legal consent and order creation</li>
          </ul>
          <LinkButton href="/cart" variant="secondary">Return to Bag</LinkButton>
        </Reveal>
      </section>
    </>
  );
}

export function OrderConfirmationView() {
  return (
    <>
      <PageHero title="No confirmed order." intro="Order confirmation appears only after a verified commerce transaction." compact />
      <section className="confirmation-state section-space">
        <Reveal className="site-shell confirmation-inner">
          <BrandLogo variant="monogram" linked={false} />
          <h2>The confirmation experience is ready for real data.</h2>
          <p>Once checkout is connected, this page will receive the order number, product summary, delivery destination, next step and tracking expectation from the commerce provider.</p>
          <div className="hero-actions"><LinkButton href="/shop">Continue into LE QUANCE</LinkButton><LinkButton href="/contact" variant="secondary">Client Services</LinkButton></div>
        </Reveal>
      </section>
    </>
  );
}

export function ComingSoonView() {
  return (
    <section className="coming-soon-page">
      <MediaFrame src="/assets/brand-cover.png" alt="LE QUANCE black garment and monogram concept" className="coming-soon-media" imageClassName="crop-brand-campaign" priority sizes="100vw" />
      <Reveal className="coming-soon-copy">
        <BrandLogo variant="lockup" linked={false} />
        <h1>The first chapter is taking form.</h1>
        <p>Release timing will be shared only when the product and operations are ready.</p>
        <PrivateAccessForm />
      </Reveal>
    </section>
  );
}

export function PrivateAccessView() {
  return (
    <>
      <PageHero eyebrow="Private Access" title="Enter before the release." intro="Request access to confirmed collection previews and future release notes." />
      <section className="private-access-layout section-space site-shell">
        <Reveal className="private-access-copy"><h2>Access is earned through relevance, not artificial scarcity.</h2><p>No invite count, launch date or limited quantity is shown without approved operational data.</p></Reveal>
        <Reveal delay={0.08}><PrivateAccessForm /></Reveal>
      </section>
    </>
  );
}
