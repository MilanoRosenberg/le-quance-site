import Image from "next/image";

export function MediaFrame({
  src,
  alt,
  className = "",
  imageClassName = "",
  priority = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
}: {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <div className={`media-frame ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        loading={priority ? "eager" : "lazy"}
        sizes={sizes}
        className={`media-frame-image ${imageClassName}`}
      />
    </div>
  );
}

export function MediaPlaceholder({
  name,
  ratio = "4:5",
}: {
  name: string;
  ratio?: string;
}) {
  return (
    <div className="media-placeholder" style={{ aspectRatio: ratio }}>
      <span>Approved media pending</span>
      <strong>[MEDIA: {name}]</strong>
    </div>
  );
}
