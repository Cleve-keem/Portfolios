export type ProjectCategory = "frontend" | "backend" | "fullstack";

export interface Project {
  slug: string;
  title: string;
  category: ProjectCategory;
  stack: string[];
  role: string;
  description: string;
  challenges: Record<string, string>[];
  lessons: string;
  github: string;
  live: string | null;
}
