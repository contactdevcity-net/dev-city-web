export interface TeamMember {
  name: string;
  role: string;
  initials: string;
}

export const leadershipTeam: TeamMember[] = [
  { name: "Alicia Ferreira", role: "Founder & CEO", initials: "AF" },
  { name: "Maya Chen", role: "Head of Engineering", initials: "MC" },
  { name: "James Okafor", role: "Head of Product", initials: "JO" },
  { name: "Sofia Delgado", role: "Head of Design", initials: "SD" },
];

export const companyStats = [
  { value: "2016", label: "Founded" },
  { value: "60+", label: "Engineers, designers & strategists" },
  { value: "120+", label: "Products shipped" },
  { value: "94%", label: "Client retention rate" },
];
