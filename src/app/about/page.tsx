import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { MediaSlot } from "@/components/media-slot";
import { education, languages, skills } from "@/data/experience";
import { site } from "@/data/site";

export const metadata: Metadata = { title: "About" };

const observations = [
  "The geometry of a built space",
  "The feeling carried by natural light",
  "Small human details within a larger scene",
  "The rhythm that makes a film feel lived-in",
];

const skillGroups = [
  { title: "Image-making", items: skills.creative },
  { title: "Technical practice", items: skills.technical },
  { title: "Tools", items: skills.tools },
  { title: "Working with people & ideas", items: skills.professional },
  { title: "Outside the frame", items: skills.interests },
];

export default function AboutPage() {
  return (
    <article className="about-page">
      <section className="about-hero page-wrap">
        <Reveal>
          <span className="eyebrow">A PRACTICE IN TWO LANGUAGES</span>
          <h1 className="page-title">A way of<br /><em>seeing.</em></h1>
          <p className="page-deck">I’m Edwin Aby — a photographer, videographer and editor, studying Computer Science and Business Systems at RSET.</p>
        </Reveal>
        <Reveal className="about-portrait" kind="image">
          <MediaSlot label="ADD A PERSONAL PORTRAIT" image={site.profilePortrait} alt="Portrait of Edwin Aby" className="portrait-slot" />
          <span className="portrait-caption">PERSONAL PORTRAIT · EDWIN ABY</span>
        </Reveal>
      </section>

      <section className="about-point-of-view page-wrap">
        <Reveal>
          <span className="eyebrow">HOW I SEE</span>
          <h2>A frame should<br />hold more than <em>what’s there.</em></h2>
        </Reveal>
        <Reveal className="about-point-copy">
          <p>My creative practice grew alongside a technical education. Photography taught me to slow down and notice; video gave those observations movement, sound and sequence. I’m drawn to visual storytelling because the way something is framed can change how it is felt.</p>
          <p>I’m especially interested in architecture and interiors — the relationship between structure, material, light and the people who use a space. Editing is where those details find their order.</p>
          <p>At RSET, I study how systems work and how problems can be untangled. Through media teams, creative roles and Model United Nations, I’ve also found a shared interest in collaboration, communication and making ideas clear. These are different practices, but they feed the same curiosity.</p>
          <Link href="/work" className="text-link">STEP INTO THE WORK <ArrowUpRight size={15} /></Link>
        </Reveal>
      </section>

      <section className="about-observations">
        <div className="page-wrap">
          <Reveal><span className="eyebrow">WHAT I RETURN TO</span><h2>Details that make<br />a place <em>feel specific.</em></h2></Reveal>
          <div className="observation-list">{observations.map((item, index) => (
            <Reveal key={item} delay={index * 0.05}><div className="observation-row"><span>{String(index + 1).padStart(2, "0")}</span><p>{item}</p><span className="observation-mark" aria-hidden="true">↗</span></div></Reveal>
          ))}</div>
        </div>
      </section>

      <section className="about-bridge page-wrap">
        <Reveal>
          <span className="eyebrow">THE CREATIVE / TECHNICAL BRIDGE</span>
          <h2>Feeling has<br />a <em>structure.</em></h2>
          <p>Computer Science and Business Systems gives my creative work another lens: curiosity about tools and systems, and a habit of asking how an idea becomes real. The image and its story still lead.</p>
        </Reveal>
        <Reveal className="about-study">
          <span className="study-index">THE OTHER SIDE OF THE VIEWFINDER</span>
          <strong>{education.qualification}</strong>
          <span>{education.institution}</span>
          <span>{education.status} · study dates to be confirmed</span>
          <div className="study-skills">{skills.technical.slice(1).map((skill) => <span key={skill}>{skill}</span>)}</div>
        </Reveal>
      </section>

      <section className="about-skills page-wrap">
        <Reveal className="about-skills-heading"><span className="eyebrow">A GROWING PRACTICE</span><h2>Things I work<br /><em>with.</em></h2><p>Skills and interests gathered across image-making, study and collaborative work.</p></Reveal>
        <div className="about-skill-groups">{skillGroups.map((group, index) => (
          <Reveal className="about-skill-group" key={group.title} delay={index * 0.04}>
            <span className="skill-label">{String(index + 1).padStart(2, "0")} / {group.title}</span>
            <div className="skill-tags">{group.items.map((skill) => <span key={skill}>{skill}</span>)}</div>
          </Reveal>
        ))}
          <Reveal className="about-skill-group about-languages">
            <span className="skill-label">06 / LANGUAGES</span>
            <ul>{languages.map((language) => <li key={language.name}><strong>{language.name}</strong><span>{language.proficiency}</span></li>)}</ul>
          </Reveal>
        </div>
      </section>

      <section className="about-practice-links page-wrap"><span className="eyebrow">FOLLOW A THREAD</span><Link href="/work?filter=moving-image">MOVING IMAGE <ArrowUpRight size={15} /></Link><Link href="/services">WAYS TO WORK TOGETHER <ArrowUpRight size={15} /></Link><Link href="/experience">THE TIMELINE <ArrowUpRight size={15} /></Link></section>
    </article>
  );
}

