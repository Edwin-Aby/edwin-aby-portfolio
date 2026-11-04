import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { WorkItem } from "@/data/work";
import { MediaSlot } from "@/components/media-slot";
export function WorkCard({ item, index = 0 }: { item: WorkItem; index?: number }) {
  return <Link className={`work-card card-${index + 1}`} href={`/work/${item.slug}`}><MediaSlot label={`${item.kind} · ${item.category}`} image={item.image} poster={item.poster} alt={item.alt ?? item.title} className={index % 2 ? "slot-wide" : "slot-tall"} /><div className="work-card-info"><div><span className="eyebrow">{item.kind} / {item.year ?? "YEAR TO CONFIRM"}</span><h3>{item.title}</h3></div><ArrowUpRight aria-hidden="true" size={17} /></div></Link>;
}
