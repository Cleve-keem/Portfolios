"use client";

import { useMemo, useState } from "react";
import ProjectCard from "./ProjectCard";
import { AnimatePresence, motion } from "framer-motion";
import { projectData } from "@/constants/projects";

export default function Projects() {
  const [sortBy, setSortBy] = useState<string>("all");
  const categories = ["All", "Frontend", "Backend", "Fullstack"];

  const filteredProjects = useMemo(() => {
    if (sortBy === "all") return projectData;
    return projectData.filter((p) => p.category.toLowerCase() === sortBy);
  }, [sortBy]);

  return (
    <section className="p-6 md:py-20">
      <div className="w-full max-w-6xl mx-auto">
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h3 className="text-3xl font-normal text-content-strong tracking-tight">
              Hands on Projects
            </h3>
            <p className="text-content-muted mt-2 max-w-md">
              A curated selection of my digital architecture and software
              engineering work.
            </p>
          </div>

          {/* TAB SYSTEM */}
          <nav className="inline-flex p-1.5 bg-surface-muted/10 border border-surface-muted/20 backdrop-blur-xl rounded-2xl shadow-inner">
            {categories.map((f) => {
              const label = f.toLowerCase();
              const isActive = sortBy === label;
              return (
                <button
                  key={f}
                  onClick={() => setSortBy(label)}
                  className={`
          relative px-5 py-2.5 text-xs md:text-sm font-semibold tracking-tight 
          transition-all duration-300 rounded-xl outline-none
          ${isActive ? "text-canvas" : "text-content-muted hover:text-content-strong hover:bg-surface-muted/20"}
        `}
                >
                  {/* The Text Label */}
                  <span className="relative z-10">{f}</span>

                  {/* The Animated "Pill" - Uses a high-quality spring and subtle shadow */}
                  {isActive && (
                    <motion.div
                      layoutId="activeTabBadge"
                      className="absolute inset-0 bg-content-strong rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.1)]"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                        mass: 0.8, // Adds a tiny bit of weight to the slide
                      }}
                    />
                  )}
                </button>
              );
            })}
          </nav>
        </header>

        {/* PROJECTS GRID */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((p) => (
              <motion.div
                key={p.slug}
                layout
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.2 } }}
                transition={{
                  layout: { type: "spring", stiffness: 200, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
              >
                <ProjectCard data={p} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* EMPTY STATE */}
        <AnimatePresence>
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="py-20 text-center border-2 border-dashed border-surface-muted rounded-3xl"
            >
              <p className="text-content-muted font-medium">
                No {sortBy} projects found in the vault yet!
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

// "use client";

// import { useMemo, useState } from "react";
// import ProjectCard from "./ProjectCard";
// import { AnimatePresence, motion } from "framer-motion";
// import { projectData } from "@/constants/projects";

// export default function Projects() {
//   const [sortBy, setSortBy] = useState<string>("all");
//   const categories = ["All", "Frontend", "Backend", "Fullstack"];

//   const filteredProjects = useMemo(() => {
//     if (sortBy === "all") return projectData;
//     return projectData.filter((p) => p.category.toLowerCase() === sortBy);
//   }, [sortBy]);

//   return (
//     <section className="p-6">
//       <div className="w-full max-w-360 mx-auto">
//         <h3 className="text-xl mb-4">Projects</h3>
//         <ul className="flex space-x-5 text-[14px] mb-5 transition-all duration-300">
//           {categories.map((f) => {
//             const label = f.toLowerCase();
//             const isActive = sortBy === label;
//             return (
//               <li
//                 key={f}
//                 className={`relative cursor-pointer py-2 text-sm font-medium transition-colors duration-300 ${isActive ? "text-brand" : "text-content-muted hover:text-content-default"}`}
//                 onClick={() => setSortBy(label)}
//               >
//                 {f}
//                 {isActive && (
//                   <motion.div
//                     layoutId="activeTab"
//                     transition={{ type: "spring", stiffness: 380, damping: 30 }}
//                     className="absolute bottom-0 left-0 w-full h-0.5 bg-brand rounded-full"
//                   />
//                 )}
//               </li>
//             );
//           })}
//         </ul>
//         {filteredProjects.length > 0 ? (
//           <AnimatePresence mode="popLayout">
//             {filteredProjects.map((p) => (
//               <motion.div
//                 key={p.slug}
//                 layout
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 exit={{ opacity: 0, scale: 0.9 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <ProjectCard data={p} />
//               </motion.div>
//             ))}
//           </AnimatePresence>
//         ) : (
//           <p>
//             No {sortBy.at(0)?.toUpperCase() + sortBy.slice(1)} project
//             available!
//           </p>
//         )}
//       </div>
//     </section>
//   );
// }
