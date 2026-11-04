"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Reveal } from "@/components/reveal";
import { MediaSlot } from "@/components/media-slot";
import { WorkCard } from "@/components/work-card";
import type { WorkItem } from "@/data/work";

type Filter = "All" | "Still" | "Motion";
const filters = ["All", "Still", "Motion"] as const;

export function WorkGallery({ items }: { items: WorkItem[] }) {
  const [filter, setFilter] = useState<Filter>("All");
  const reduce = useReducedMotion();
  const visibleItems = filter === "All" ? items : items.filter(item => item.kind === filter);
  const transition = { duration: reduce ? 0 : 0.28, ease: [0.22, 1, 0.36, 1] as const };

  return <>
    <div className="gallery-toolbar" role="group" aria-label="Filter work by format">
      {filters.map(option => <button type="button" key={option} onClick={() => setFilter(option)} aria-pressed={filter === option}><span>{option}</span><span>{option === "All" ? items.length : items.filter(item => item.kind === option).length}</span></button>)}
    </div>
    <div className="gallery-results" aria-live="polite">
      <AnimatePresence mode="wait" initial={false}>
        {visibleItems.length ? <motion.div key={`grid-${filter}`} className="work-grid listing-grid" initial={reduce ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={reduce ? undefined : { opacity: 0, y: -8 }} transition={transition}>
          {visibleItems.map((item, index) => <motion.div key={item.slug} layout transition={transition}><Reveal><WorkCard item={item} index={index}/></Reveal></motion.div>)}
        </motion.div> : <motion.div key={`empty-${filter}`} className="gallery-empty" initial={reduce ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={reduce ? undefined : { opacity: 0, y: -8 }} transition={transition}>
          <MediaSlot label={filter === "All" ? "YOUR FIRST PHOTOGRAPH OR FILM" : filter === "Still" ? "ADD A PHOTOGRAPH" : "ADD A FILM POSTER"} className="gallery-empty-image"/>
          <div className="gallery-empty-copy"><span className="eyebrow">{filter === "All" ? "THE FIRST CHAPTER IS YOURS" : `${filter.toUpperCase()} / A SPACE TO BEGIN`}</span><h2>Good work<br/>takes <em>its own time.</em></h2><p>Add your real projects to <code>src/data/work.ts</code>. Until then, the frames stay open.</p></div>
        </motion.div>}
      </AnimatePresence>
    </div>
  </>;
}
