import Link from "next/link";
import { ArrowUpRight, MoveUpRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { MediaSlot } from "@/components/media-slot";
import { HeroTitle } from "@/components/hero-title";
import { SectionHeading } from "@/components/section-heading";
import { WorkCard } from "@/components/work-card";
import { work } from "@/data/work";
import { site } from "@/data/site";

export default function Home() {
  const featured = work.filter(item => item.featured).slice(0, 2);
  return <>
    <section className="hero">
      <div className="hero-kicker"><span className="signal-dot" /> INDEPENDENT VISUAL PRACTICE <span> / CREATIVE × TECHNICAL</span></div>
      <HeroTitle />
      <Reveal className="hero-media" delay={0.16} kind="image"><MediaSlot label="OPENING FRAME / ADD YOUR PHOTOGRAPH" image={site.heroImage} alt="Edwin Aby portfolio opening photograph" className="hero-slot" /><span className="hero-media-caption">THE IMAGE THAT SETS THE TONE</span><span className="frame-number">EA—01</span></Reveal>
      <div className="hero-bottom"><span className="hero-tagline">{site.tagline}</span><span className="hero-index">VISUAL STORYTELLING · 001—∞</span></div>
    </section>

    <section className="manifesto-band"><Reveal><span className="eyebrow">A WAY OF SEEING</span><p>Part instinct. Part intention.<br /><em>Always about the feeling.</em></p></Reveal><div className="manifesto-mark">EA<span>26</span></div></section>

    <section className="work-section page-wrap" id="work"><Reveal><SectionHeading index="01" title="A world in frames" note="Photography / Film / Life in-between" /></Reveal>
      {featured.length ? <div className="work-grid">{featured.map((item,i)=><Reveal key={item.slug} delay={i*.12}><WorkCard item={item} index={i}/></Reveal>)}</div> : <Reveal><div className="home-work-slots"><Link href="/work" className="home-slot still-slot"><MediaSlot label="STILL / ADD A PHOTOGRAPH" className="home-slot-image"/><span className="home-slot-caption"><span>01 / STILL</span><ArrowUpRight size={15}/></span></Link><Link href="/films" className="home-slot motion-slot"><MediaSlot label="MOTION / ADD A FILM FRAME" className="home-slot-image"/><span className="home-slot-caption"><span>02 / MOTION</span><ArrowUpRight size={15}/></span></Link></div></Reveal>}
      <div className="section-link"><span className="eyebrow">THE WORK WILL SPEAK HERE</span><Link href="/work">EXPLORE WORK <ArrowUpRight size={15}/></Link></div>
    </section>

    <section className="split-story page-wrap"><div className="split-copy"><Reveal><span className="eyebrow">02 / STILL</span><h2>Hold on<br />to <em>the light.</em></h2><p>Portraits, places, architecture, and the small details that turn a scene into a memory.</p><Link className="text-link" href="/work">EXPLORE PHOTOGRAPHY <MoveUpRight size={15}/></Link></Reveal></div><Reveal className="split-media" kind="image"><MediaSlot label="STILL PHOTOGRAPHY / IMAGE SLOT" className="story-image"/><span className="image-index">PLACE YOUR OWN FRAME HERE · 02—01</span></Reveal></section>

    <section className="film-feature"><div className="film-top page-wrap"><span className="eyebrow">03 / MOTION</span><span className="eyebrow">IMAGE, SOUND, TIME</span></div><Reveal className="film-frame" kind="image"><MediaSlot label="FILM POSTER / ADD YOUR OWN STILL" className="film-slot"/><div className="film-label"><span className="eyebrow">A PLACE FOR YOUR NEXT FILM</span><span>POSTER FRAME · NO AUTOPLAY</span></div></Reveal><div className="film-foot page-wrap"><h2>Some stories<br />need <em>to move.</em></h2><Link className="text-link" href="/films">ENTER THE FILM ROOM <ArrowUpRight size={15}/></Link></div></section>

    <section className="duality-band"><Reveal><span className="eyebrow">04 / TWO WAYS OF THINKING</span><div className="duality-grid"><div><span className="duality-numeral">01</span><h2>Creative<br /><em>by instinct.</em></h2><p>Photography · Film · Editing · Visual stories</p></div><div><span className="duality-numeral">02</span><h2>Technical<br /><em>by nature.</em></h2><p>Computer Science & Business Systems · Python · C</p></div></div><div className="duality-footer"><span>{site.introduction}</span><Link href="/about">MEET THE PERSON BEHIND THE FRAME <ArrowUpRight size={15}/></Link></div></Reveal></section>

    <section className="about-preview page-wrap"><Reveal className="about-meta"><span className="eyebrow">05 / THE PERSON BEHIND THE FRAME</span><span className="about-coordinate">EDWIN ABY<br/>PHOTOGRAPHER · FILMMAKER</span></Reveal><Reveal className="about-copy"><p>Curious eye.<br /><em>Restless mind.</em></p><p className="about-small">I move between the viewfinder and the systems behind it. The picture comes first; the technical curiosity adds another way to see.</p><Link className="text-link" href="/about">A LITTLE MORE ABOUT ME <ArrowUpRight size={15}/></Link><Link className="cv-inline-link" href="/cv">EXPLORE THE COMBINED CV →</Link></Reveal><span className="about-big-mark">EA<span>26</span></span></section>
  </>;
}
