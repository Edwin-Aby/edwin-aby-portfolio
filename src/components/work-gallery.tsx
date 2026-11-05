"use client";
import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Reveal } from "@/components/reveal";
import { MediaSlot } from "@/components/media-slot";
import { WorkCard } from "@/components/work-card";
import { matchesWorkFilter, workFilters, type WorkFilterId, type WorkItem } from "@/data/work";

const pageSize = 9;
export function WorkGallery({ items, initialFilter = "all" }: { items: WorkItem[]; initialFilter?: WorkFilterId }) {
  const [filter, setFilter] = useState<WorkFilterId>(initialFilter);
  const [limit, setLimit] = useState(pageSize);
  const reduce = useReducedMotion();
  const selectedFilter = workFilters.find((option) => option.id === filter) ?? workFilters[0];
  const filteredItems = items.filter((item) => matchesWorkFilter(item, filter));
  const visibleItems = filteredItems.slice(0, limit);
  const transition = { duration: reduce ? 0 : 0.32, ease: [0.22, 1, 0.36, 1] as const };

  function selectFilter(next: WorkFilterId) {
    setFilter(next);
    setLimit(pageSize);
  }

  return <>
    <div className="gallery-toolbar" role="group" aria-label="Filter work by category">
      {workFilters.map((option) => <button type="button" key={option.id} onClick={() => selectFilter(option.id)} aria-pressed={filter === option.id}><span>{option.label}</span><span className="filter-count">{items.filter((item) => matchesWorkFilter(item, option.id)).length}</span></button>)}
    </div>
    <div className="gallery-results" aria-live="polite" aria-atomic="true">
      <AnimatePresence mode="wait" initial={false}>
        {visibleItems.length ? <motion.div key={`grid-${filter}`} className="work-grid listing-grid" initial={reduce ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={reduce ? undefined : { opacity: 0, y: -8 }} transition={transition}>
          {visibleItems.map((item, index) => <motion.div key={item.slug} className={`work-grid-item work-grid-item--${item.kind.toLowerCase()}`} layout transition={transition}><Reveal><WorkCard item={item} index={index} /></Reveal></motion.div>)}
        </motion.div> : <motion.div key={`empty-${filter}`} className={`gallery-empty gallery-empty--${filter}`} initial={reduce ? false : { opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={reduce ? undefined : { opacity: 0, y: -6 }} transition={transition}>
          <MediaSlot label={selectedFilter.label.toUpperCase()} className="gallery-empty-image" />
          <div className="gallery-empty-copy"><span className="eyebrow">{selectedFilter.label.toUpperCase()} / OPEN SPACE</span><h2>{selectedFilter.emptyTitle}</h2><p>{selectedFilter.emptyBody}</p><span className="gallery-empty-note">ORIGINAL WORK ONLY · NO STOCK PROJECTS</span></div>
        </motion.div>}
      </AnimatePresence>
      {visibleItems.length > 0 && visibleItems.length < filteredItems.length && <div className="load-more-wrap"><button className="load-more" type="button" onClick={() => setLimit((current) => current + pageSize)}>LOAD MORE <span>{visibleItems.length} / {filteredItems.length}</span></button></div>}
    </div>
  </>;
}
