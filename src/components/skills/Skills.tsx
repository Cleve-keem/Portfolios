import DesignSkills from "@/components/skills/DesignSkills";
import WorkingTools from "./WorkingTools";
import Experience from "../Experience";

export default function Skills() {
  return (
    <section className="p-6">
      <div className="w-full max-w-360 mx-auto grid grid-cols-1">
        <DesignSkills />
        <WorkingTools />
        <Experience />
      </div>
    </section>
  );
}
