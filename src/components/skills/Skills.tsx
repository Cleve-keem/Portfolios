import DesignSkills from "@/components/skills/DesignSkills";
import WorkingTools from "./WorkingTools";
import Experience from "../Experience";
import Technologies from "./Technologies";
import ActiveToolProvider from "@/context/ActiveToolContext";

export default function Skills() {
  return (
    <section className="p-6" id="skils">
      <div className="w-full max-w-360 mx-auto grid grid-cols-1">
        <DesignSkills />
        <ActiveToolProvider>
          <Technologies />
        </ActiveToolProvider>
        <WorkingTools />
        <Experience />
      </div>
    </section>
  );
}
