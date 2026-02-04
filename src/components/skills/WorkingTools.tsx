import { SkillContent, SkillGroup, SkillLabel } from "./SkillGroup";
import { workingToolsData } from "@/constants/skills";
import Image from "next/image";

export default function WorkingTools() {
  return (
    <SkillGroup>
      <SkillLabel>Working Skills</SkillLabel>
      <SkillContent className="flex flex-wrap gap-5 justify-center">
        {workingToolsData.map((tool, i) => (
          <div
            key={i}
            className="size-25 text-center flex justify-center items-center flex-col"
          >
            <div className="p-1 size-15 border border-border-muted rounded-full flex items-center justify-center mb-3">
              <Image
                src="/trello.png"
                alt="trello icon"
                width={20}
                height={20}
              />
            </div>
            <small className="text-[14px]">{tool}</small>
          </div>
        ))}
      </SkillContent>
    </SkillGroup>
  );
}
