import Header from "@/components/header/Header";
import HeroSection from "@/components/hero/HeroSection";
// import Projects from "@/components/project/Projects";
import Skills from "@/components/skills/Skills";

export default function page() {
  return (
    <div>
      <Header />
      <HeroSection />
      <Skills />
      {/* <Projects /> */}
    </div>
  );
}

// import { useState } from "react";
// import ProjectCard from "./ProjectCard";

// export default function Projects() {
//   const [filter, setFilter] = useState<string>("all");
//   return (
//     <section className="p-6">
//       <div className="w-full max-w-360 mx-auto">
//         <h3 className="text-xl mb-4">Projects</h3>
//         <ul className="flex space-x-5 text-[14px] mb-5">
//           <li>All</li>
//           <li>Frontend</li>
//           <li>Backend</li>
//         </ul>

//         <ProjectCard />
//       </div>
//     </section>
//   );
// }
