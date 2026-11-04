import Image from "next/image";
export function MediaSlot({ label, image, poster, alt, className = "" }: { label: string; image?: string; poster?: string; alt?: string; className?: string }) {
  const src = image || poster;
  return <div className={`media-slot ${className}`}>{src ? <Image src={src} alt={alt || label} fill sizes="(max-width: 760px) 100vw, 70vw" className="media-image" /> : <><div className="slot-art" aria-hidden="true"><span className="slot-line" /></div><div className="slot-label"><span className="slot-dot" />{label}</div></>}</div>;
}
