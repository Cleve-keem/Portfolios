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
    <section className="p-6">
      <div className="w-full max-w-360 mx-auto">
        <h3 className="text-xl mb-4">Projects</h3>
        <ul className="flex space-x-5 text-[14px] mb-5 transition-all duration-300">
          {categories.map((f) => {
            const label = f.toLowerCase();
            const isActive = sortBy === label;
            return (
              <li
                key={f}
                className={`relative cursor-pointer py-2 text-sm font-medium transition-colors duration-300 ${isActive ? "text-brand" : "text-content-muted hover:text-content-default"}`}
                onClick={() => setSortBy(label)}
              >
                {f}
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-brand rounded-full"
                  />
                )}
              </li>
            );
          })}
        </ul>
        {filteredProjects.length > 0 ? (
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((p) => (
              <motion.div
                key={p.slug}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectCard data={p} />
              </motion.div>
            ))}
          </AnimatePresence>
        ) : (
          <p>No {sortBy} project available!</p>
        )}
      </div>
    </section>
  );
}
