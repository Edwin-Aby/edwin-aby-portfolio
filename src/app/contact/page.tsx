import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { ContactForm } from "@/components/contact-form";
import { site } from "@/data/site";
export const metadata: Metadata = { title: "Contact" };
export default function ContactPage(){const whatsapp=site.whatsappNumber.replace(/\D/g,"");return <article className="subpage page-wrap contact-page"><Reveal><span className="eyebrow">COLLABORATIONS · PROJECT INQUIRIES</span><h1 className="page-title">What are you<br/><em>imagining?</em></h1><p className="page-deck">A place, a brand or a story in motion — tell me what you’re working on.</p></Reveal><div className="contact-layout"><Reveal><ContactForm/></Reveal><Reveal className="contact-direct"><span className="eyebrow">OR REACH OUT DIRECTLY</span><a href={`mailto:${site.email}`}>EMAIL <ArrowUpRight size={15}/><small>{site.email}</small></a>{whatsapp&&<a href={`https://wa.me/${whatsapp}`} target="_blank" rel="noreferrer">WHATSAPP <ArrowUpRight size={15}/><small>Start a WhatsApp conversation</small></a>}<div className="contact-socials">{site.socials.map(social=><a key={social.label} href={social.href} target="_blank" rel="noreferrer">{social.label}<ArrowUpRight size={14}/></a>)}</div><p>For architects, interior designers, hospitality, brands, businesses and creators.</p></Reveal></div></article>;}
