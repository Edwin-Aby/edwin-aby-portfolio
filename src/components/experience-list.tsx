import { chronologicalExperience } from "@/data/experience";

export function ExperienceList({ compact = false }: { compact?: boolean }) {
  return (
    <ol className={`experience-list${compact ? " experience-list-compact" : ""}`} aria-label="Experience timeline">
      {chronologicalExperience.map((item, index) => (
        <li className="experience-row" key={item.id}>
          <span className="experience-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
          <div className="experience-marker" aria-hidden="true" />
          <div className="experience-entry">
            <div className="experience-meta">
              <span className="experience-field">{item.engagement ?? item.field}</span>
              <span className="experience-year">{item.year ?? "DATE TO CONFIRM"}</span>
            </div>
            <h2 className="experience-role">{item.role}</h2>
            <span className="experience-org">{item.organization}</span>
            {!compact && item.description && <p className="experience-description">{item.description}</p>}
            {!compact && item.skills && <div className="experience-skills" aria-label="Associated skills">{item.skills.map((skill) => <span key={skill}>{skill}</span>)}</div>}
          </div>
        </li>
      ))}
    </ol>
  );
}
