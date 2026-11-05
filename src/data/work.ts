export const portfolioCategories = ["Architecture", "Interiors", "Hospitality", "Commercial", "Reels", "Videos"] as const;
export type PortfolioCategory = typeof portfolioCategories[number];
export type WorkAspectRatio = "portrait" | "landscape" | "square" | "wide" | "vertical";
export type WorkFormat = "Reel" | "Short-form Video" | "Personal Video";
export type WorkFilterId = "all" | "photography" | "architecture-interiors" | "hospitality" | "commercial" | "moving-image" | "reels" | "short-form-videos" | "nature-personal";
export type ProjectCredit = { role: string; name: string };
export type ProjectDetail = { label: string; value: string };
export type GalleryImage = { src: string; alt: string };
export type WorkItem = {
  slug: string;
  title: string;
  kind: "Still" | "Motion";
  category: PortfolioCategory;
  format?: WorkFormat;
  collections?: ("Nature & Personal Work")[];
  aspectRatio?: WorkAspectRatio;
  year?: string;
  image?: string;
  poster?: string;
  gallery?: GalleryImage[];
  video?: string;
  videoMimeType?: string;
  externalUrl?: string;
  featured?: boolean;
  description: string;
  alt?: string;
  role?: string;
  credits?: ProjectCredit[];
  details?: ProjectDetail[];
};

export const workFilters: { id: WorkFilterId; label: string; emptyTitle: string; emptyBody: string }[] = [
  { id: "all", label: "All Work", emptyTitle: "The index is open.", emptyBody: "The archive is ready for Edwin’s own photography, reels and personal videos. Nothing here is a sample project." },
  { id: "photography", label: "Photography", emptyTitle: "A study in light.", emptyBody: "Original still photography will be added when Edwin is ready to share it." },
  { id: "architecture-interiors", label: "Architecture & Interiors", emptyTitle: "Space, line, light.", emptyBody: "The built-environment collection is ready for original image and video work." },
  { id: "hospitality", label: "Hospitality", emptyTitle: "The feeling of a place.", emptyBody: "Original hospitality work will appear here when supplied." },
  { id: "commercial", label: "Commercial", emptyTitle: "Made for a point of view.", emptyBody: "Commercial photography and video will be added from approved original work." },
  { id: "moving-image", label: "Moving Image", emptyTitle: "Stories in motion.", emptyBody: "Reels, short videos and personal nature pieces share this space. Playback starts only when you choose it." },
  { id: "reels", label: "Reels", emptyTitle: "Short stories, in motion.", emptyBody: "Reels will use poster-first cards and click-to-play viewing." },
  { id: "short-form-videos", label: "Short-form Videos", emptyTitle: "A little time, well used.", emptyBody: "Short-form videos will appear here with their original aspect ratios and playback controls." },
  { id: "nature-personal", label: "Nature & Personal Work", emptyTitle: "Made for the looking.", emptyBody: "Personal and nature work will have room for its own pace and context." },
];

export function matchesWorkFilter(item: WorkItem, filter: WorkFilterId): boolean {
  switch (filter) {
    case "all": return true;
    case "photography": return item.kind === "Still";
    case "architecture-interiors": return item.category === "Architecture" || item.category === "Interiors";
    case "hospitality": return item.category === "Hospitality";
    case "commercial": return item.category === "Commercial";
    case "moving-image": return item.kind === "Motion";
    case "reels": return item.category === "Reels" || item.format === "Reel";
    case "short-form-videos": return item.category === "Videos" || item.format === "Short-form Video";
    case "nature-personal": return item.collections?.includes("Nature & Personal Work") ?? false;
  }
}

// Only add work Edwin has created and approved for publication.
// Place original media in public/images/work or public/videos; never use /references here.
export const work: WorkItem[] = [];
