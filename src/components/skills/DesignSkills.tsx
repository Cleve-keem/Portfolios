import { designSkills } from "@/constants/skills";
import { SkillLabel, SkillGroup, SkillContent } from "./SkillGroup";

export default function DevelopementSkill() {
  return (
    <SkillGroup className="">
      <SkillLabel>Design Skills</SkillLabel>
      <SkillContent className="space-y-3">
        {designSkills.map((skill, i) => (
          <div key={i} className="text-[14px] flex items-center gap-2">
            <span className="inline-block size-2 rounded-full border border-content-strong"></span>
            <span>{skill}</span>
          </div>
        ))}
      </SkillContent>
    </SkillGroup>
  );
}
