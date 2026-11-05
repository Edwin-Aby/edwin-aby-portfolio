import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { ExperienceGroups } from "@/components/experience-groups";
import { education } from "@/data/experience";

export const metadata: Metadata = { title: "Experience" };

export default function ExperiencePage() {
  return (
    <article className="subpage page-wrap experience-page">
      <Reveal><span className="eyebrow">ROLES · MEDIA · LEADERSHIP</span><h1 className="page-title">Time spent<br /><em>making.</em></h1><p className="page-deck">A record of creative work, internships, campus involvement and MUN leadership, organised by the kind of work rather than one long list.</p></Reveal>
      <Reveal className="timeline-key"><span>2026</span><i /><span>2025</span><i /><span>UNDATED</span><p>Only supplied years are shown. Months, duration and extra duties are left open where not provided.</p></Reveal>
      <ExperienceGroups />
      <section className="experience-education-note">
        <div><span className="eyebrow">IN PARALLEL</span><h2>Learning the systems<br />behind <em>the image.</em></h2></div>
        <div><strong>{education.qualification}</strong><span>{education.institution}</span><span>{education.status} · study dates to be confirmed</span><Link className="text-link" href="/cv">OPEN THE COMBINED CV <ArrowUpRight size={15} /></Link></div>
      </section>
    </article>
  );
}
