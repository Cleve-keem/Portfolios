import DesignSkills from "@/components/skills/DesignSkills";
import WorkingTools from "./WorkingTools";

export default function Skills() {
  return (
    <section className="p-6">
      <div className="w-full max-w-360 mx-auto">
        <DesignSkills />
        <WorkingTools />
      </div>
    </section>
  );
}
