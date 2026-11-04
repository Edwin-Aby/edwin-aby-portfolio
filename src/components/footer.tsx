import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { site } from "@/data/site";

export function Footer() {
  return <footer className="site-footer">
    <div className="footer-main">
      <div>
        <span className="eyebrow">A GOOD PLACE TO BEGIN</span>
        <Link className="footer-cta" href="/contact">Have a story<br /><em>in mind?</em><ArrowUpRight /></Link>
      </div>
      <div className="footer-aside">
        <span className="eyebrow">SAY HELLO</span>
        <a href={`mailto:${site.email}`}>{site.email} <ArrowUpRight size={14} /></a>
        <div className="social-row">{site.socials.map(social => <a key={social.label} href={social.href} target="_blank" rel="noreferrer">{social.label} ↗</a>)}</div>
      </div>
    </div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} EDWIN ABY</span><span>{site.tagline.toUpperCase()}</span><Link href="#top">BACK TO TOP ↑</Link></div>
  </footer>;
}
