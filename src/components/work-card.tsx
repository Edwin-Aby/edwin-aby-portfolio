import Link from "next/link";
import { ArrowUpRight, Play } from "lucide-react";
import type { WorkAspectRatio, WorkItem } from "@/data/work";
import { MediaSlot } from "@/components/media-slot";

function defaultAspect(item: WorkItem, index: number): WorkAspectRatio {
  return item.aspectRatio ?? (item.kind === "Motion" ? "wide" : index % 3 === 0 ? "portrait" : "landscape");
}

export function WorkCard({ item, index = 0 }: { item: WorkItem; index?: number }) {
  const moving = item.kind === "Motion";
  const format = item.format ?? (item.category === "Reels" ? "Reel" : moving ? "Short-form Video" : "Photography");
  return (
    <Link className={`work-card work-card--${moving ? "motion" : "still"}`} href={`/work/${item.slug}`} aria-label={`View ${item.title}, ${item.category} ${format.toLowerCase()} project`}>
      <MediaSlot label={`${item.category} / ${moving ? "VIDEO THUMBNAIL" : "PHOTOGRAPH"}`} image={item.image} poster={item.poster} alt={item.alt ?? item.title} className={`work-card-media work-card-media--${defaultAspect(item, index)}`} />
      {moving && <span className="work-card-play" aria-hidden="true"><Play size={14} fill="currentColor" /></span>}
      <div className="work-card-info"><div><span className="eyebrow">{item.category.toUpperCase()} / {format.toUpperCase()}{item.year ? ` / ${item.year}` : ""}</span><h3>{item.title}</h3>{item.role && <span className="work-card-role">{item.role}</span>}</div><ArrowUpRight aria-hidden="true" size={17} /></div>
    </Link>
  );
}
