"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

type RevealKind = "rise" | "image" | "quiet";

export function Reveal({ children, className = "", delay = 0, kind = "rise" }: { children: ReactNode; className?: string; delay?: number; kind?: RevealKind }) {
  const reduce = useReducedMotion();
  const initial = reduce ? false : kind === "image" ? { opacity: 0.72, clipPath: "inset(12% 0 0 0)", scale: 1.025 } : kind === "quiet" ? { opacity: 0 } : { opacity: 0, y: 22 };
  const visible = kind === "image" ? { opacity: 1, clipPath: "inset(0% 0 0 0)", scale: 1 } : { opacity: 1, y: 0 };
  return <motion.div className={className} initial={initial} whileInView={visible} viewport={{ once: true, margin: "0px 0px -55px 0px" }} transition={{ duration: kind === "image" ? 0.95 : 0.65, delay, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>;
}
