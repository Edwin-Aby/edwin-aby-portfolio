import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { WorkGallery } from "@/components/work-gallery";
import { work } from "@/data/work";

export const metadata: Metadata = { title: "Work" };
export default function WorkPage() { return <section className="subpage page-wrap"><Reveal><span className="eyebrow">PHOTOGRAPHY · FILM · VISUAL STORIES</span><h1 className="page-title">The <em>work.</em></h1><p className="page-deck">A collection of frames, moments, and moving pictures.</p></Reveal><WorkGallery items={work}/></section>; }
