import { workingToolsData } from "@/constants/skills";
import { SkillGroup, SkillLabel } from "./SkillGroup";
import Image from "next/image";

export default function WorkingTools() {
  const doubledTools = [...workingToolsData, ...workingToolsData];

  return (
    <SkillGroup className="py-10">
      <SkillLabel className="text-content-strong mb-8 text-center md:text-center font-bold tracking-tight text-2xl md:text-3xl">
        Working Tools
      </SkillLabel>
      {/* MASKED CONTAINER: This creates the "fade" effect at the edges */}
      <div
        className="relative w-full overflow-hidden 
        before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-20 before:bg-linear-to-r before:from-canvas before:to-transparent
        after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-20 after:bg-linear-to-l after:from-canvas after:to-transparent"
      >
        {/* ANIMATED TRACK */}
        <div className="flex w-fit gap-10 animate-marquee hover:[animation-play-state:paused] py-4">
          {doubledTools.map((tool, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center min-w-25 group"
            >
              <div
                className="relative size-20 mb-4 flex items-center justify-center 
                rounded-2xl border border-surface-muted bg-surface-tint/20 
                transition-all duration-500 group-hover:scale-110 group-hover:border-brand/40 group-hover:bg-surface-tint"
              >
                <Image
                  src={tool.image}
                  alt={`${tool.name} icon`}
                  fill
                  className="object-contain p-4 grayscale group-hover:grayscale-0 transition-all duration-500"
                  sizes="80px"
                />
              </div>

              <span className="text-xs font-bold tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-brand">
                {tool.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </SkillGroup>
  );
}
