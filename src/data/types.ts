export type Kind = 'software' | 'hardware' | 'library' | 'language' | 'reference';
export type Area = 'Embedded & IoT' | 'Hardware & Components' | 'Libraries & Dependencies' | 'Circuit Design' | 'Simulation' | 'Diagrams' | 'Programming' | 'Languages' | 'Digital Logic' | 'Web & Databases' | 'Mobile & Connectivity' | 'CAD & Prototyping' | 'Networking' | 'AI & Vision' | 'Robotics' | 'Signals & Computing' | 'Developer Utilities' | 'Documentation' | 'Learning & Community' | 'Research';
export type Resource = {
  id: string; name: string; kind: Kind; area: Area; description: string; bestFor: string;
  url: string; tags: string[]; related: string[]; priority: number;
  notes?: string; specifications?: string[]; license?: string; licenseUrl?: string; lastVerified?: string;
};
export type ProjectKit = {
  id: string;
  title: string;
  summary: string;
  tags: string[];
  resources: string[];
  task: string;
  level: string;
  time: string;
  beforeStart: string[];
  materials: string[];
  learningGoals: string[];
  sourceUrl: string;
  sourceLabel: string;
  simulatorUrl?: string;
};
