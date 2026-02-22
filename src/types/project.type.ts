export type ProjectCategory = "frontend" | "backend" | "fullstack";

export type ProjectType = {
  slug: string;
  name: string;
  category: ProjectCategory;
  type?: string;
  featured?: boolean;
  order: number;
  coverImage: string;
  gallery?: string[];
  architectureDiagram?: string | null;
  description: string;
  longDescription: string;
  createdAt: string;
  role?: string;
  stack: string[];
  features: string[];
  architecture?: string;
  challenges: string;
  solutions: string;
  lessons: string;
  status?: string;
  liveUrl: string | null;
  githubUrl: string;
};
