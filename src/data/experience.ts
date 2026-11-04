export type ExperienceItem = {
  organization: string;
  role: string;
  year?: string;
  field: "Creative" | "Leadership";
};

// These entries come from the two CVs shared in the earlier conversation.
// Dates are intentionally omitted until confirmed.
export const experience: ExperienceItem[] = [
  { organization: "Nathan Photos", role: "Architectural Photography Intern", field: "Creative" },
  { organization: "MUNIC MUN", role: "Media Head", field: "Leadership" },
  { organization: "VoiceHunt 2026", role: "Design & Media Coordinator", field: "Leadership" },
  { organization: "Assisi & Viswajyothi MUN", role: "Chair of Photography", field: "Leadership" },
  { organization: "Kerala Innovation Festival", role: "Media / Event Photography", field: "Creative" },
];

export const education = {
  qualification: "B.Tech — Computer Science and Business Systems",
  institution: "Rajagiri School of Engineering & Technology",
};

export const skills = {
  creative: ["Photography", "Videography", "Video editing", "Visual storytelling", "Architectural photography"],
  technical: ["Python", "C programming", "Problem solving"],
};

// Award names and dates are omitted until the source CV is reviewed directly.
export const awards: string[] = [];
