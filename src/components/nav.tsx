"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Mark } from "@/components/mark";
import { contactNavigation, navigation } from "@/data/navigation";

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return <header className="site-nav"><Link href="/" className="brand" aria-label="Edwin Aby home"><Mark /><span>EDWIN ABY<span className="brand-period">.</span></span></Link>
    <button className="menu-toggle" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
    <nav className={open ? "nav-links is-open" : "nav-links"} aria-label="Main navigation">{navigation.map(link => <Link key={link.href} href={link.href} aria-current={pathname === link.href ? "page" : undefined} onClick={() => setOpen(false)}>{link.label}</Link>)}<Link className="nav-contact" href={contactNavigation.href} onClick={() => setOpen(false)}>{contactNavigation.label} <ArrowUpRight size={14} /></Link></nav>
  </header>;
}
