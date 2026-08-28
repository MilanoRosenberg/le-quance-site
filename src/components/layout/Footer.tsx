import Link from "next/link";
import { BrandLogo } from "@/components/brand/BrandLogo";
import { NewsletterForm } from "@/components/forms/NewsletterForm";
import { footerGroups } from "@/data/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-shell footer-grid">
        <div className="footer-lead">
          <BrandLogo variant="lockup" linked={false} />
          <p>Modern luxury for people who keep moving forward.</p>
          <NewsletterForm compact />
        </div>
        {footerGroups.map((group) => (
          <nav className="footer-column" key={group.title} aria-label={group.title}>
            <h2>{group.title}</h2>
            {group.links.map((link) => (
              <Link key={link.href} href={link.href}>{link.label}</Link>
            ))}
          </nav>
        ))}
      </div>
      <div className="site-shell footer-bottom">
        <span>© {new Date().getFullYear()} LE QUANCE</span>
        <span>English</span>
        <span>Region selection pending launch markets</span>
      </div>
    </footer>
  );
}
