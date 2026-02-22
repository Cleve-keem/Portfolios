import { ProjectType } from "@/types/project.type";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({ project }: { project: ProjectType }) {
  return (
    <div className="shadow-md p-3 rounded-2xl bg-background h-110 flex flex-col group transition-all duration-300 hover:shadow-xl">
      {/* image */}
      <div className="relative w-full h-60 rounded-2xl overflow-hidden mb-2">
        <Image
          src={project.coverImage || "/api/placeholder/400/320"}
          alt="project image"
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="500px"
        />
        <div className="absolute bottom-0 right-0 bg-background px-4 py-2 rounded-tl-2xl text-[12px] font-semibold tracking-tight text-content-muted">
          <div className="absolute -top-4 right-0 size-4 bg-background mask-[radial-gradient(circle_at_0_0,transparent_15px,black_16px)]" />
          <div className="absolute bottom-0 -left-4 size-4 bg-background mask-[radial-gradient(circle_at_0_0,transparent_15px,black_16px)]" />
          {project.type}
        </div>
        {project.liveUrl && (
          <div className="absolute text-foreground text-xs inline-block py-1 px-2 bg-red-700 top-1.5 right-2 rounded">
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
          <h4 className="font-semibold flex-1">{project.name}</h4>
          {project.liveUrl && (
            <a href={project.githubUrl} target="_blank" className="">
              <ExternalLink className="size-4" />
            </a>
          )}
        </div>
        <p className="text-[14px]">{project.description}</p>
      </div>
      <Link
        href={`projects/${project.slug}`}
        className="mt-auto inline-flex items-center justify-center text-sm border w-full h-10 rounded-lg bg-brand text-white"
      >
        View
      </Link>
    </div>
  );
}
