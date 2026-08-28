import Image from "next/image";
import Link from "next/link";

type BrandLogoProps = {
  variant?: "wordmark" | "monogram" | "lockup";
  className?: string;
  priority?: boolean;
  linked?: boolean;
};

const variants = {
  wordmark: {
    src: "/assets/logo-wordmark-ivory.png",
    width: 2172,
    height: 724,
    alt: "LE QUANCE",
  },
  monogram: {
    src: "/assets/logo-monogram-ivory.png",
    width: 1254,
    height: 1254,
    alt: "LE QUANCE LQ monogram",
  },
  lockup: {
    src: "/assets/logo-lockup-ivory.png",
    width: 1254,
    height: 1254,
    alt: "LE QUANCE monogram and wordmark",
  },
};

export function BrandLogo({
  variant = "wordmark",
  className = "",
  priority = false,
  linked = true,
}: BrandLogoProps) {
  const asset = variants[variant];
  const image = (
    <Image
      src={asset.src}
      width={asset.width}
      height={asset.height}
      alt={asset.alt}
      loading={priority ? "eager" : "lazy"}
      className={`brand-logo brand-logo-${variant} ${className}`}
      sizes={variant === "wordmark" ? "(max-width: 700px) 150px, 190px" : "160px"}
    />
  );

  if (!linked) return image;

  return (
    <Link href="/" className="brand-logo-link" aria-label="LE QUANCE home">
      {image}
    </Link>
  );
}
