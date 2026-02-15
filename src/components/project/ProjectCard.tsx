import { ExternalLink } from "lucide-react";
import Image from "next/image";

type ProjectCardType = {
  data: {
    slug: string;
    name: string;
    category: string;
    order?: number;
    featured: boolean;
    coverImage: string;
    gallery: string[];
    architectureDiagram: string;
    description: string;
    longDescription: string;
    createdAt: string;
    role: string;
    stack: string[];
    features: string[];
    architecture: string;
    challenges: string[];
    solutions: string;
    lessons: string;
    status: string;
    liveUrl: string;
    githubUrl: string;
  };
};

export default function ProjectCard({ data }: any) {
  return (
    <div className="shadow-md p-3 rounded-2xl bg-canvas">
      {/* image */}
      <div className="relative w-full h-60 rounded-2xl overflow-hidden mb-2">
        <Image
          src={data.coverImage}
          alt="project image"
          fill
          className="object-cover"
          sizes="100px"
        />
        {data.liveUrl && (
          <div className="absolute text-white text-xs inline-block py-1 px-2 bg-brand top-1.5 right-2 rounded">
            <span className="relative">
              <span className="absolute bottom-1 right-0 inline-flex size-2 animate-ping rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex size-2 rounded-full bg-green-500"></span>
            </span>
            <span className="ml-1 inline-flex">Live</span>
          </div>
        )}
      </div>
      {/* description */}
      <div className="py-3 px-1 space-y-3">
        <div className="flex items-center">
          <h4 className="font-semibold flex-1">{data.name}</h4>
          <a href={data.githubUrl} target="_blank">
            <ExternalLink className="size-4" />
          </a>
        </div>
        <p className="text-[14px]">{data.description}</p>
      </div>
      <button className="text-sm border my-3 w-full h-10 rounded-lg bg-brand text-white">
        View
      </button>
    </div>
  );
}
