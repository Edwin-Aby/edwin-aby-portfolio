import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { MediaSlot } from "@/components/media-slot";
import { work } from "@/data/work";

export const metadata: Metadata = { title: "Films" };
export default function FilmsPage() {
  const films = work.filter(item => item.kind === "Motion");
  return <section className="subpage page-wrap films-page">
    <Reveal><span className="eyebrow">MOVING IMAGE · EDITING · ATMOSPHERE</span><h1 className="page-title">The <em>film room.</em></h1><p className="page-deck">Stories that find their rhythm in movement.</p></Reveal>
    {films.length ? <div className="film-list">{films.map((film,i)=><Reveal key={film.slug}><Link className="film-listing" href={`/work/${film.slug}`}><MediaSlot label={`${film.title} / film poster`} poster={film.poster} image={film.image} className="film-list-image"/><div><span className="eyebrow">FILM {String(i+1).padStart(2,"0")} / {film.year ?? "YEAR TO CONFIRM"}</span><h2>{film.title}</h2><p>{film.description}</p><span className="film-open">OPEN FILM NOTES <ArrowUpRight size={14}/></span></div></Link></Reveal>)}</div> : <Reveal className="films-empty"><MediaSlot label="ADD A REAL FILM POSTER OR STILL" className="film-slot"/><span className="eyebrow">AN OPENING FOR YOUR NEXT FILM</span><p>Add a motion project to <code>src/data/work.ts</code>. Use a poster image first; video will remain click-to-play.</p></Reveal>}
  </section>;
}
