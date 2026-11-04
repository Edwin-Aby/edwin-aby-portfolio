"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import type { GalleryImage } from "@/data/work";

export function PhotoGallery({ images, title }: { images: GalleryImage[]; title: string }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const reduce = useReducedMotion();
  const isOpen = activeIndex !== null;

  const close = useCallback(() => setActiveIndex(null), []);
  const move = useCallback((direction: -1 | 1) => {
    setActiveIndex(current => current === null ? null : (current + direction + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = previousOverflow;
      requestAnimationFrame(() => triggerRef.current?.focus());
    };
  }, [isOpen]);

  useEffect(() => {
    if (activeIndex === null) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") { event.preventDefault(); close(); }
      if (event.key === "ArrowRight") { event.preventDefault(); move(1); }
      if (event.key === "ArrowLeft") { event.preventDefault(); move(-1); }
      if (event.key === "Tab") {
        const controls = Array.from(dialogRef.current?.querySelectorAll<HTMLButtonElement>("button:not([disabled])") ?? []);
        const first = controls[0];
        const last = controls.at(-1);
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeIndex, close, move]);

  return <>
    <div className="project-gallery" aria-label={`${title} photographs`}>
      {images.map((image, index) => <button className="project-gallery-trigger" type="button" key={image.src} onClick={event => { triggerRef.current = event.currentTarget; setActiveIndex(index); }} aria-label={`Open photograph ${index + 1}: ${image.alt}`}>
        <div className="project-gallery-frame"><Image src={image.src} alt={image.alt} fill sizes="(max-width: 760px) 100vw, 50vw"/></div><span className="gallery-trigger-label">VIEW FRAME {String(index + 1).padStart(2, "0")} <ArrowRight size={13}/></span>
      </button>)}
    </div>
    <AnimatePresence>
      {activeIndex !== null && <motion.div className="lightbox-backdrop" role="presentation" onMouseDown={event => { if (event.target === event.currentTarget) close(); }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: reduce ? 0 : 0.2 }}>
        <motion.div ref={dialogRef} className="lightbox-dialog" role="dialog" aria-modal="true" aria-label={`${title} photographs`} initial={reduce ? false : { opacity: 0, y: 12, scale: 0.985 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={reduce ? undefined : { opacity: 0, y: 8, scale: 0.99 }} transition={{ duration: reduce ? 0 : 0.26 }}>
          <div className="lightbox-toolbar"><span className="eyebrow">{title.toUpperCase()}</span><span className="lightbox-counter">{String(activeIndex + 1).padStart(2,"0")} / {String(images.length).padStart(2,"0")}</span><button ref={closeRef} type="button" className="lightbox-close" onClick={close} aria-label="Close image viewer"><X size={20}/></button></div>
          <div className="lightbox-stage"><button type="button" className="lightbox-arrow" onClick={() => move(-1)} aria-label="Previous photograph"><ArrowLeft/></button><figure><div className="lightbox-image"><Image src={images[activeIndex].src} alt={images[activeIndex].alt} fill sizes="100vw" priority/></div><figcaption>{images[activeIndex].alt}</figcaption></figure><button type="button" className="lightbox-arrow" onClick={() => move(1)} aria-label="Next photograph"><ArrowRight/></button></div>
          <span className="lightbox-hint">USE ← → KEYS TO MOVE · ESC TO CLOSE</span>
        </motion.div>
      </motion.div>}
    </AnimatePresence>
  </>;
}
