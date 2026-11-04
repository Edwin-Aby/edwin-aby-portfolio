export function Mark({ className = "" }: { className?: string }) {
  return <span className={`mark ${className}`} aria-label="Edwin Aby monogram"><span>E</span><i /> <span>A</span></span>;
}
