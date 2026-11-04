import type { Metadata } from "next";
import "./globals.css";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { PageTransition } from "@/components/page-transition";
import { ScrollProgress } from "@/components/scroll-progress";

export const metadata: Metadata = {
  title: { default: "Edwin Aby — Frames. Feelings. Stories.", template: "%s — Edwin Aby" },
  description: "Edwin Aby is a photographer, videographer, and visual storyteller. Frames. Feelings. Stories.",
  openGraph: { title: "Edwin Aby — Frames. Feelings. Stories.", description: "Photography, film, and the feeling between frames.", type: "website" },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body id="top"><a className="skip-link" href="#main">Skip to content</a><ScrollProgress /><Nav /><main id="main"><PageTransition>{children}</PageTransition></main><Footer /></body></html>; }
