export type WorkItem = {
  slug: string;
  title: string;
  kind: "Still" | "Motion";
  category: string;
  year?: string;
  image?: string;
  poster?: string;
  gallery?: GalleryImage[];
  video?: string;
  externalUrl?: string;
  featured?: boolean;
  description: string;
  alt?: string;
};

export type GalleryImage = { src: string; alt: string };

// Add only real projects. A project appears in the gallery after it is added here.
export const work: WorkItem[] = [];
