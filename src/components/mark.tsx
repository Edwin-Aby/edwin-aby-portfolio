export function Mark({ className = "" }: { className?: string }) {
  return <span className={`mark ${className}`} aria-label="EA">EA</span>;
}
