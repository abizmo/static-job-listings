type roles = 'Frontend' | 'Fullstack' | 'Backend';
type levels = 'Junior' | 'Senior' | 'Midweight';
type contracts = 'Full Time' | 'Part Time';

export interface Job {
  id: number;
  company: string;
  logo: string;
  new: boolean;
  featured: boolean;
  position: string;
  role: roles;
  level: levels;
  postedAt: string;
  contract: contracts;
  location: string;
  languages: string[];
  tools: string[];
  onFilter: (x: string) => void;
}
