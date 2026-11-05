export type ExperienceGroupName = "Creative & Media Experience" | "Internships & Professional Experience" | "Leadership & Organisations" | "MUN & Extracurricular Experience" | "Technical & Campus Involvement";
export type ExperienceField = "Professional" | "Media" | "Leadership";
export type ExperienceItem = {
  id: string;
  organization: string;
  role: string;
  field: ExperienceField;
  group: ExperienceGroupName;
  engagement?: "Internship" | "Student role" | "Student leadership" | "Media assignment";
  year?: string;
  sortYear?: number;
  description?: string;
  skills?: string[];
};

// Years are shown only when stated in Edwin's supplied profile/CV notes.
export const experience: ExperienceItem[] = [
  { id: "tedxrset", organization: "TEDxRSET", role: "Media & Design Lead", field: "Leadership", group: "Leadership & Organisations", engagement: "Student leadership", skills: ["Media", "Graphic design", "Leadership"] },
  { id: "sket-intern", organization: "Students of Kerala Educational Trust", role: "Social Media & Content Creation Intern", field: "Professional", group: "Internships & Professional Experience", engagement: "Internship", skills: ["Social media", "Content creation"] },
  { id: "overdrive", organization: "FKDC – Team Overdrive Racing, RSET", role: "Documentation & Marketing", field: "Media", group: "Technical & Campus Involvement", engagement: "Student role", skills: ["Documentation", "Marketing"] },
  { id: "gensys", organization: "Gensys Club", role: "Media Co-Lead", field: "Leadership", group: "Leadership & Organisations", engagement: "Student leadership", skills: ["Media", "Leadership"] },
  { id: "voicehunt", organization: "VoiceHunt 2026", role: "Media & Design Coordinator", field: "Media", group: "Creative & Media Experience", engagement: "Student role", year: "2026", sortYear: 2026, skills: ["Media", "Graphic design"] },
  { id: "rset-media", organization: "RSET Media Team", role: "2nd Year Lead; Photographer", field: "Leadership", group: "Creative & Media Experience", engagement: "Student leadership", skills: ["Photography", "Leadership"] },
  { id: "uplivo", organization: "Uplivo.org", role: "Visual Content Creator", field: "Media", group: "Creative & Media Experience", skills: ["Visual storytelling", "Content creation"] },
  { id: "munsters", organization: "MUNsters Club", role: "Associate Director General and Social Media & Content Creation Head", field: "Leadership", group: "MUN & Extracurricular Experience", engagement: "Student leadership", skills: ["Model United Nations", "Social media", "Content creation", "Leadership"] },
  { id: "assisi-2025", organization: "Assisi MUN 2025", role: "Vice Chairperson – International Press", field: "Leadership", group: "MUN & Extracurricular Experience", engagement: "Student leadership", year: "2025", sortYear: 2025, skills: ["Photojournalism", "Leadership", "Communication"] },
  { id: "nathan-photos", organization: "Nathan Photos", role: "Photography Intern", field: "Professional", group: "Internships & Professional Experience", engagement: "Internship", year: "2025", sortYear: 2025, skills: ["Photography", "Architectural photography"] },
  { id: "munic-2025", organization: "MUNIC 2025", role: "Head of Content Creation & Media", field: "Leadership", group: "MUN & Extracurricular Experience", engagement: "Student leadership", year: "2025", sortYear: 2025, skills: ["Content creation", "Media", "Leadership"] },
  { id: "kerala-startup-mission", organization: "Kerala Startup Mission", role: "Photographer – Kerala Innovation Festival 2025", field: "Media", group: "Creative & Media Experience", engagement: "Media assignment", year: "2025", sortYear: 2025, skills: ["Photography"] },
  { id: "munic-2026", organization: "MUNIC MUN", role: "Media Head", field: "Leadership", group: "MUN & Extracurricular Experience", engagement: "Student leadership", year: "2026", sortYear: 2026, skills: ["Media", "Leadership"] },
  { id: "assisi-viswajyothi-2026", organization: "Assisi & Viswajyothi MUN", role: "Chair of Photography", field: "Leadership", group: "MUN & Extracurricular Experience", engagement: "Student leadership", year: "2026", sortYear: 2026, skills: ["Photography", "Leadership"] },
];

export const chronologicalExperience = [...experience].sort((a, b) => (b.sortYear ?? -Infinity) - (a.sortYear ?? -Infinity));
const experienceGroupOrder: ExperienceGroupName[] = ["Creative & Media Experience", "Internships & Professional Experience", "Leadership & Organisations", "MUN & Extracurricular Experience", "Technical & Campus Involvement"];
export const experienceGroups = experienceGroupOrder.map((name) => ({ name, items: chronologicalExperience.filter((item) => item.group === name) })).filter((group) => group.items.length > 0);

export const education = {
  qualification: "B.Tech — Computer Science and Business Systems",
  institution: "Rajagiri School of Engineering & Technology",
  status: "Student",
};

export const skills = {
  creative: ["Photography", "Videography", "Video editing", "Visual storytelling", "Architectural photography", "Portrait photography", "Commercial photography", "Photojournalism", "Graphic design", "Social media & content creation", "Event photography (historical experience)"],
  technical: ["Computer Science", "Python", "C programming", "R", "MySQL", "Problem-solving", "Data presentation"],
  tools: ["Adobe Lightroom", "Adobe Photoshop"],
  professional: ["Leadership", "Communication", "Documentation", "Marketing", "Social media", "Content creation", "Decision-making", "Collaboration"],
  interests: ["Model United Nations", "Music", "Drumming", "Keyboard"],
};

export const languages = [
  { name: "English", proficiency: "Full professional proficiency" },
  { name: "Hindi", proficiency: "Limited working proficiency" },
  { name: "Malayalam", proficiency: "Native or bilingual proficiency" },
];


