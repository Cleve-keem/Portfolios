import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({ project }: any) {
  return (
    <div className="shadow-md p-3 rounded-2xl bg-background h-110 flex flex-col">
      {/* image */}
      <div className="relative w-full h-60 rounded-2xl overflow-hidden mb-2">
        <Image
          src={project.coverImage}
          alt="project image"
          fill
          className="object-cover"
          sizes="500px"
        />
        {project.liveUrl && (
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
          <h4 className="font-semibold flex-1">{project.name}</h4>
          {project.liveUrl && (
            <a href={project.githubUrl} target="_blank">
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
