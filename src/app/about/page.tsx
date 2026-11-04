import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { ExperienceList } from "@/components/experience-list";
import { MediaSlot } from "@/components/media-slot";
import { education, skills } from "@/data/experience";
import { site } from "@/data/site";

export const metadata: Metadata = { title: "About" };
export default function AboutPage() { return <section className="about-page">
  <div className="about-hero page-wrap"><Reveal><span className="eyebrow">A PERSON, IN TWO DIRECTIONS</span><h1 className="page-title">Picture<br />& <em>possibility.</em></h1><p className="page-deck">A visual storyteller with a technical point of view.</p></Reveal><Reveal className="about-portrait"><MediaSlot label="ADD A PERSONAL PORTRAIT" image={site.profilePortrait} alt="Portrait of Edwin Aby" className="portrait-slot"/><span className="portrait-caption">A PORTRAIT OF EDWIN · TO COME</span></Reveal></div>
  <div className="bio-section page-wrap"><Reveal><span className="eyebrow">THE CREATIVE SIDE</span><h2>I notice what<br />others <em>feel.</em></h2></Reveal><Reveal className="bio-copy"><p>I’m Edwin — a photographer, videographer, and editor. I’m drawn to people, architecture, and the atmosphere that lives between a subject and its surroundings.</p><p>Making images is a practice of looking closely. My technical curiosity keeps me interested in how the tools work, how stories move, and how an idea becomes something people can experience.</p><Link className="text-link" href="/work">SEE THE WORK <ArrowUpRight size={15}/></Link></Reveal></div>
  <div className="about-technical"><div className="page-wrap technical-inner"><Reveal><span className="eyebrow">THE TECHNICAL FOUNDATION</span><h2>Curiosity<br /><em>with a system.</em></h2><p>Computer Science and Business Systems adds another lens: structured thinking, programming, and problem solving alongside a creative practice.</p></Reveal><Reveal className="education-card"><span className="eyebrow">EDUCATION</span><strong>{education.qualification}</strong><span>{education.institution}</span><span className="education-note">Dates intentionally left out until confirmed.</span></Reveal></div></div>
  <div className="skills-section page-wrap"><Reveal><span className="eyebrow">TOOLS OF THE TRADE</span><h2>Skill, not <em>scorecards.</em></h2></Reveal><div className="skills-grid"><Reveal><span className="skill-label">01 / CREATIVE PRACTICE</span><div className="skill-tags">{skills.creative.map(skill=><span key={skill}>{skill}</span>)}</div></Reveal><Reveal><span className="skill-label">02 / TECHNICAL PRACTICE</span><div className="skill-tags">{skills.technical.map(skill=><span key={skill}>{skill}</span>)}</div></Reveal></div></div>
  <div className="experience-section"><div className="page-wrap"><Reveal><span className="eyebrow">EXPERIENCE · COMMUNITY · COLLABORATION</span><h2>In good <em>company.</em></h2><p className="experience-intro">Creative work, campus media, and leadership — each a different way of learning through making.</p></Reveal><Reveal><ExperienceList/></Reveal><p className="experience-disclaimer page-wrap">Dates and durations are left open until reviewed against the original CVs.</p></div></div>
  <div className="about-end page-wrap"><Reveal><span className="eyebrow">THE NEXT FRAME IS OPEN</span><h2>Let’s make<br /><em>it matter.</em></h2><Link className="text-link" href="/contact">START A CONVERSATION <ArrowUpRight size={15}/></Link></Reveal></div>
</section>; }
