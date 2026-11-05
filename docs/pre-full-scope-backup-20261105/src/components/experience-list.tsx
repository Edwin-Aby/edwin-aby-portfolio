import { experience } from "@/data/experience";

export function ExperienceList() {
  return <div className="experience-list">{experience.map((item, index) => <div className="experience-row" key={item.organization}>
    <span className="experience-number">{String(index + 1).padStart(2, "0")}</span>
    <div><span className="experience-role">{item.role}</span><span className="experience-org">{item.organization}</span></div>
    <span className="experience-year">{item.year ?? "DATE TO CONFIRM"}</span>
  </div>)}</div>;
}
