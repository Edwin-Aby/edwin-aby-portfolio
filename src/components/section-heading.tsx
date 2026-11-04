export function SectionHeading({ index, title, note }: { index: string; title: string; note: string }) {
  return <div className="section-heading"><span className="eyebrow">{index} / SELECTED CHAPTER</span><h2>{title}</h2><span className="section-note">{note}</span></div>;
}
