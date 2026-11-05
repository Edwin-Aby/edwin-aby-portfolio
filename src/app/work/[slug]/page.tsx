import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { MediaSlot } from "@/components/media-slot";
import { PhotoGallery } from "@/components/photo-gallery";
import { work } from "@/data/work";

type Props = { params: Promise<{ slug: string }> };
export async function generateStaticParams(){return work.map(item=>({slug:item.slug}))}
export async function generateMetadata({params}:Props):Promise<Metadata>{const{slug}=await params;const item=work.find(entry=>entry.slug===slug);return{title:item?.title??"Project",description:item?.description}}
export default async function ProjectPage({params}:Props){const{slug}=await params;const item=work.find(entry=>entry.slug===slug);if(!item)notFound();const index=work.findIndex(entry=>entry.slug===slug);const previous=index>0?work[index-1]:undefined;const next=index<work.length-1?work[index+1]:undefined;return <article className="project-page page-wrap"><Link className="back-link" href="/work"><ArrowLeft size={14}/> ALL WORK</Link><Reveal><span className="eyebrow">{item.kind} / {item.category}{item.year?` / ${item.year}`:""}</span><h1 className="page-title">{item.title}</h1></Reveal>{item.video?<video className="project-video" controls playsInline preload="none" poster={item.poster} aria-label={`${item.title} video`}><source src={item.video} type={item.videoMimeType??"video/mp4"}/>Your browser does not support embedded video.</video>:<MediaSlot label={`${item.category} / ADD PROJECT COVER`} image={item.image} poster={item.poster} alt={item.alt??`${item.title} project cover`} className="project-cover"/>}
  <div className="project-intro"><span className="eyebrow">PROJECT NOTE</span><div><p>{item.description}</p>{item.role&&<p className="project-role"><strong>Edwin’s role</strong> · {item.role}</p>}{item.externalUrl&&<a className="text-link" href={item.externalUrl} target="_blank" rel="noreferrer">VIEW THE VIDEO <ArrowUpRight size={14}/></a>}</div></div>
  {item.details?.length?<dl className="project-details">{item.details.map(detail=><div key={detail.label}><dt>{detail.label}</dt><dd>{detail.value}</dd></div>)}</dl>:null}
  {item.credits?.length?<section className="project-credits"><h2 className="eyebrow">CREDITS</h2><ul>{item.credits.map(credit=><li key={`${credit.role}-${credit.name}`}><span>{credit.role}</span><span>{credit.name}</span></li>)}</ul></section>:null}
  {item.gallery?.length?<Reveal className="project-gallery-section" kind="quiet"><PhotoGallery images={item.gallery} title={item.title}/></Reveal>:null}
  {work.length>1&&<nav className="project-navigation" aria-label="Project navigation">{previous?<Link href={`/work/${previous.slug}`} rel="prev"><span className="eyebrow">PREVIOUS</span><span>{previous.title}</span></Link>:<span/>}{next?<Link href={`/work/${next.slug}`} rel="next"><span className="eyebrow">NEXT</span><span>{next.title}</span></Link>:<span/>}</nav>}
  <div className="project-end"><span className="eyebrow">END OF FRAME</span><Link className="text-link" href="/work">RETURN TO THE WORK <ArrowUpRight size={14}/></Link></div></article>}
