import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { site } from "@/data/site";

export const metadata: Metadata = { title: "Contact" };
export default function ContactPage() { return <section className="subpage page-wrap contact-page"><Reveal><span className="eyebrow">A GOOD PLACE TO BEGIN</span><h1 className="page-title">Have a story<br /><em>in mind?</em></h1><p className="page-deck">Tell me what you’re seeing, thinking, or hoping to make.</p></Reveal><Reveal className="contact-card"><span className="eyebrow">FOR COLLABORATIONS & INQUIRIES</span><a className="contact-email" href={`mailto:${site.email}`}>{site.email}<ArrowUpRight /></a><p>Start with an email. We can take it from there.</p><div className="contact-socials">{site.socials.map(social=><a key={social.label} href={social.href} target="_blank" rel="noreferrer">{social.label}<ArrowUpRight size={14}/></a>)}</div></Reveal></section>; }
