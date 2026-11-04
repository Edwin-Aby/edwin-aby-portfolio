"use client";

import Link from "next/link";
import { ArrowDown } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { site } from "@/data/site";

export function HeroTitle() {
  const reduce = useReducedMotion();
  const lineVariants = {
    hidden: reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: "108%" },
    visible: { opacity: 1, y: 0, transition: { duration: 0.82, ease: [0.22, 1, 0.36, 1] } },
  } as const;
  return <motion.div className="hero-title-wrap" initial={reduce ? false : "hidden"} animate="visible" variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.14, delayChildren: 0.1 } } }}>
    <motion.p className="hero-overline" variants={lineVariants}>{site.role.toUpperCase()}</motion.p>
    <h1 className="hero-headline"><span className="hero-title-line"><motion.span variants={lineVariants}>Life happens.</motion.span></span><span className="hero-title-line"><motion.span variants={lineVariants}><em>I frame it.</em></motion.span></span></h1>
    <motion.p className="hero-intro" variants={lineVariants}>{site.introduction}</motion.p>
    <motion.div variants={lineVariants}><Link href="#work" className="hero-link">STEP INTO MY WORLD <ArrowDown size={14} /></Link></motion.div>
  </motion.div>;
}
