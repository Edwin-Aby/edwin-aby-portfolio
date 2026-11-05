"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { site } from "@/data/site";

export function Footer() {
  const pathname = usePathname();
  const showInvitation = !["/", "/contact", "/services"].includes(pathname);
  const showContactLinks = pathname !== "/contact";

  return (
    <footer className="site-footer">
      <div className={`footer-main${showInvitation ? "" : " footer-main-quiet"}`}>
        <div>
          {showInvitation ? (
            <>
              <span className="section-kicker">THE NEXT FRAME IS OPEN</span>
              <Link className="footer-cta" href="/contact">
                Have a story<br /><i>in mind?</i><ArrowUpRight aria-hidden="true" />
              </Link>
            </>
          ) : (
            <>
              <span className="section-kicker">EDWIN ABY / VISUAL PRACTICE</span>
              <p className="footer-imprint">Frames.<br /><i>Feelings. Stories.</i></p>
            </>
          )}
        </div>
        {showContactLinks && (
          <div className="footer-aside">
            <span className="section-kicker">SAY HELLO</span>
            <a href={`mailto:${site.email}`}>{site.email} <ArrowUpRight size={14} /></a>
            {site.whatsappNumber && (
              <a href={`https://wa.me/${site.whatsappNumber.replace(/\D/g, "")}`} target="_blank" rel="noreferrer">
                WhatsApp <ArrowUpRight size={14} />
              </a>
            )}
            <div className="social-row">
              {site.socials.map((social) => (
                <a key={social.label} href={social.href} target="_blank" rel="noreferrer">
                  {social.label} ↗
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="credit-line">
        Temporary reference photograph: “Arrival of Kerala Monsoon India” by Vinoth Chandar, CC BY 2.0, via Wikimedia Commons. {" "}
        <a href="https://commons.wikimedia.org/wiki/File:Arrival_of_Kerala_Monsoon_India.jpg" target="_blank" rel="noreferrer">Source &amp; licence</a>.
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} EDWIN ABY</span>
        <span>{site.tagline.toUpperCase()}</span>
        <Link href="#top">BACK TO TOP ↑</Link>
      </div>
    </footer>
  );
}
