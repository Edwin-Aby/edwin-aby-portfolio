"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const reduce = useReducedMotion();
  return <AnimatePresence initial={false} mode="wait">
    <motion.div key={pathname} className="page-transition" initial={reduce ? false : { opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={reduce ? undefined : { opacity: 0, y: -5 }} transition={{ duration: reduce ? 0 : 0.28, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>
  </AnimatePresence>;
}
