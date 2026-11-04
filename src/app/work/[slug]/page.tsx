import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { MediaSlot } from "@/components/media-slot";
import { PhotoGallery } from "@/components/photo-gallery";
import { work } from "@/data/work";

type Props = { params: Promise<{ slug: string }> };
export async function generateStaticParams() { return work.map(item => ({ slug: item.slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> { const {slug}=await params; const item=work.find(entry=>entry.slug===slug); return { title: item?.title ?? "Project" }; }
export default async function ProjectPage({ params }: Props) {
  const {slug}=await params;
  const item=work.find(entry=>entry.slug===slug);
  if(!item) notFound();
  const itemIndex = work.findIndex(entry => entry.slug === slug);
  const previous = itemIndex > 0 ? work[itemIndex - 1] : undefined;
  const next = itemIndex < work.length - 1 ? work[itemIndex + 1] : undefined;
  return <article className="project-page page-wrap">
    <Link className="back-link" href="/work"><ArrowLeft size={14}/> ALL WORK</Link>
    <span className="eyebrow">{item.kind} / {item.category} / {item.year ?? "YEAR TO CONFIRM"}</span>
    <h1 className="page-title">{item.title}</h1>
    {item.video ? <video className="project-video" controls preload="metadata" poster={item.poster}><source src={item.video} type="video/mp4"/>Your browser does not support embedded video.</video> : <MediaSlot label={`${item.title} / project cover`} image={item.image} poster={item.poster} alt={item.alt ?? item.title} className="project-cover"/>}
    <div className="project-intro"><span className="eyebrow">PROJECT NOTE</span><p>{item.description}</p>{item.externalUrl && <a className="text-link" href={item.externalUrl} target="_blank" rel="noreferrer">VIEW THE FILM <ArrowUpRight size={14}/></a>}</div>
    {item.gallery?.length ? <Reveal className="project-gallery-section" kind="quiet"><PhotoGallery images={item.gallery} title={item.title}/></Reveal> : null}
    {work.length > 1 && <nav className="project-navigation" aria-label="Project navigation">{previous ? <Link href={`/work/${previous.slug}`} rel="prev"><span className="eyebrow">PREVIOUS</span><span>{previous.title}</span></Link> : <span/>}{next ? <Link href={`/work/${next.slug}`} rel="next"><span className="eyebrow">NEXT</span><span>{next.title}</span></Link> : <span/>}</nav>}
    <div className="project-end"><span className="eyebrow">END OF FRAME</span><Link className="text-link" href="/work">RETURN TO THE WORK <ArrowUpRight size={14}/></Link></div>
  </article>;
}
