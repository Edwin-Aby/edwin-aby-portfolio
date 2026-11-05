import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { WorkGallery } from "@/components/work-gallery";
import { work, workFilters } from "@/data/work";

export const metadata: Metadata = { title: "Work" };
type Props = { searchParams: Promise<{ filter?: string }> };

export default async function WorkPage({ searchParams }: Props) {
  const params = await searchParams;
  const initialFilter = workFilters.find((option) => option.id === params.filter)?.id ?? "all";
  return (
    <article className="subpage page-wrap work-page">
      <Reveal><span className="eyebrow">THE IMAGE INDEX / PHOTOGRAPHY &amp; MOVING IMAGE</span><h1 className="page-title">The <em>archive.</em></h1><div className="work-intro-row"><p className="page-deck">A growing collection of still photographs, reels, short videos and personal moving image.</p><span className="work-count"><strong>{String(work.length).padStart(2, "0")}</strong><small>APPROVED WORKS</small></span></div></Reveal>
      <WorkGallery items={work} initialFilter={initialFilter} />
      <div className="work-invite"><span>PHOTOGRAPHY · REELS · SHORT-FORM · PERSONAL VIDEO</span><Link href="/services">SEE THE SERVICES <ArrowUpRight size={15} /></Link></div>
    </article>
  );
}
