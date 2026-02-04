import { designSkills } from "@/constants/skills";

export default function DevelopementSkill() {
  return (
    <div>
      <h3 className="font-medium mb-4">Design Skills</h3>
      <ul className="p-4 border border-border-muted rounded-2xl space-y-3">
        {designSkills.map((skill, i) => (
          <li key={i} className="text-[14px] flex items-center gap-2">
            <span className="inline-block size-2 rounded-full border border-content-strong"></span>
            <span>{skill}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
