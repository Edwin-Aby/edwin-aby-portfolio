import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { ExperienceList } from "@/components/experience-list";
import { education, skills } from "@/data/experience";

export const metadata: Metadata = { title: "Experience" };
export default function ExperiencePage() { return <section className="subpage experience-page"><div className="page-wrap"><Reveal><span className="eyebrow">CREATIVE WORK · CAMPUS · COMMUNITY</span><h1 className="page-title">In good<br/><em>company.</em></h1><p className="page-deck">A few places where making, learning, and collaboration came together.</p></Reveal><Reveal className="experience-page-list"><ExperienceList/></Reveal><div className="experience-education"><Reveal><span className="eyebrow">EDUCATION</span><h2>{education.qualification}</h2><p>{education.institution}</p></Reveal></div><div className="experience-page-skills"><Reveal><span className="eyebrow">A CREATIVE PRACTICE, WITH TECHNICAL ROOTS</span><p>{skills.creative.join(" · ")}</p><p>{skills.technical.join(" · ")}</p><Link className="text-link" href="/cv">VIEW THE COMBINED CV <ArrowUpRight size={15}/></Link></Reveal></div></div></section>; }
