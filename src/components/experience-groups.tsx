import { experienceGroups } from "@/data/experience";

export function ExperienceGroups() {
  return (
    <div className="experience-groups">
      {experienceGroups.map((group, index) => (
        <details className="experience-group" key={group.name} open={index === 0}>
          <summary>
            <span className="experience-group-index">{String(index + 1).padStart(2, "0")}</span>
            <span className="experience-group-title">{group.name}</span>
            <span className="experience-group-count">{String(group.items.length).padStart(2, "0")} ENTRIES</span>
          </summary>
          <ol className="experience-group-entries">
            {group.items.map((item) => (
              <li key={item.id}>
                <div className="experience-group-entry-meta"><span>{item.engagement ?? item.field}</span><span>{item.year ?? "DATE TO CONFIRM"}</span></div>
                <h3>{item.role}</h3>
                <span className="experience-group-org">{item.organization}</span>
                {item.skills && <div className="experience-group-skills">{item.skills.map((skill) => <span key={skill}>{skill}</span>)}</div>}
              </li>
            ))}
          </ol>
        </details>
      ))}
    </div>
  );
}
