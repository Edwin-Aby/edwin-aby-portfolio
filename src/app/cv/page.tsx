import { existsSync } from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDownToLine, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { ExperienceList } from "@/components/experience-list";
import { CvPrintButton } from "@/components/cv-print-button";
import { education, languages, skills } from "@/data/experience";
import { site } from "@/data/site";

export const metadata: Metadata = { title: "Combined CV" };

const cvSkillGroups = [
  { label: "02 / CREATIVE PRACTICE", items: skills.creative },
  { label: "03 / TECHNICAL PRACTICE", items: skills.technical },
  { label: "04 / TOOLS & COLLABORATION", items: [...skills.tools, ...skills.professional] },
];

export default function CvPage() {
  const cvFile = path.join(process.cwd(), "public", site.cvPath.replace(/^\//, ""));
  const hasDownload = existsSync(cvFile);

  return (
    <article className="cv-page page-wrap">
      <Reveal className="cv-heading">
        <span className="eyebrow">CREATIVE PRACTICE · TECHNICAL FOUNDATION</span>
        <h1 className="page-title">Curriculum<br /><em>vitae.</em></h1>
        <p className="page-deck">A concise professional record of visual practice, technical study and leadership.</p>
        <div className="cv-actions">
          {hasDownload ? <a className="cv-download" href={site.cvPath} download><ArrowDownToLine size={15} /> DOWNLOAD THE PDF</a> : <span className="cv-pdf-status">APPROVED COMBINED PDF NOT YET SUPPLIED</span>}
          <CvPrintButton />
        </div>
      </Reveal>

      <div className="cv-sheet">
        <header className="cv-contact">
          <div><h2>EDWIN ABY</h2><span>Photographer · Videographer · Video Editor</span><span>TEDxRSET Media &amp; Design Lead</span></div>
          <div><a href={`mailto:${site.email}`}>{site.email}</a>{site.socials.map((social) => <a key={social.label} href={social.href} target="_blank" rel="noreferrer">{social.label} <ArrowUpRight size={12} /></a>)}</div>
        </header>

        <section className="cv-section"><span className="eyebrow">01 / EDUCATION</span><div><h3>{education.qualification}</h3><p>{education.institution} · {education.status}</p><p>Study dates to be confirmed.</p></div></section>
        {cvSkillGroups.map((group) => <section className="cv-section" key={group.label}><span className="eyebrow">{group.label}</span><div className="cv-skill-list">{group.items.map((skill) => <span key={skill}>{skill}</span>)}</div></section>)}
        <section className="cv-section cv-experience-section"><span className="eyebrow">05 / EXPERIENCE &amp; LEADERSHIP</span><ExperienceList compact /></section>
        <section className="cv-section"><span className="eyebrow">06 / LANGUAGES</span><ul className="cv-languages">{languages.map((language) => <li key={language.name}><strong>{language.name}</strong><span>{language.proficiency}</span></li>)}</ul></section>
      </div>

      <div className="cv-footnote"><span>WEB RÉSUMÉ · NO OFFICIAL DOWNLOAD UNTIL APPROVED PDF IS ADDED</span><Link href="/experience">VIEW THE FULL TIMELINE <ArrowUpRight size={14} /></Link></div>
    </article>
  );
}
