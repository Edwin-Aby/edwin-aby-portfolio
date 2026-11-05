import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDownToLine, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { ExperienceList } from "@/components/experience-list";
import { awards, education, skills } from "@/data/experience";
import { site } from "@/data/site";

export const metadata: Metadata = { title: "Combined CV" };
export default function CvPage() { return <article className="cv-page page-wrap">
  <Reveal className="cv-heading"><span className="eyebrow">A CREATIVE + TECHNICAL PROFILE</span><h1 className="page-title">The <em>whole</em><br/>picture.</h1><p className="page-deck">Photography, film, leadership, and the systems underneath.</p><span className="cv-pdf-status"><ArrowDownToLine size={15}/> APPROVED COMBINED PDF WILL BE ADDED HERE</span></Reveal>
  <div className="cv-sheet">
    <div className="cv-contact"><div><h2>EDWIN ABY</h2><span>Photographer · Videographer · Editor</span></div><div><a href={`mailto:${site.email}`}>{site.email}</a>{site.socials.map(social=><a key={social.label} href={social.href} target="_blank" rel="noreferrer">{social.label} <ArrowUpRight size={12}/></a>)}</div></div>
    <section className="cv-section"><span className="eyebrow">01 / EDUCATION</span><div><h3>{education.qualification}</h3><p>{education.institution}</p></div></section>
    <section className="cv-section"><span className="eyebrow">02 / EXPERIENCE & LEADERSHIP</span><ExperienceList/></section>
    <section className="cv-section"><span className="eyebrow">03 / CREATIVE PRACTICE</span><p>{skills.creative.join(" · ")}</p></section>
    <section className="cv-section"><span className="eyebrow">04 / TECHNICAL PRACTICE</span><p>{skills.technical.join(" · ")}</p></section>
    {awards.length > 0 && <section className="cv-section"><span className="eyebrow">05 / RECOGNITION</span>{awards.map(award=><p key={award}>{award}</p>)}</section>}
  </div>
  <div className="cv-note"><span className="eyebrow">PDF STATUS</span><p>The original CVs mention photography awards, but their exact titles and dates need a direct review before they can be included. The approved combined PDF will be placed at <code>public/documents/edwin-aby-combined-cv.pdf</code>.</p></div>
  <Link className="text-link cv-back-link" href="/about">BACK TO ABOUT <ArrowUpRight size={15}/></Link>
</article>; }
