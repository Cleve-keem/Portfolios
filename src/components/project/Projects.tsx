"use client";

import { useState } from "react";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

export default function Projects() {
  const [sortBy, setSortBy] = useState<string>("all");
  const categories = ["All", "Frontend", "Backend"];

  return (
    <section className="p-6">
      <div className="w-full max-w-360 mx-auto">
        <h3 className="text-xl mb-4">Projects</h3>
        <ul className="flex space-x-5 text-[14px] mb-5 transition-all duration-300">
          {categories.map((f) => {
            const isActive = sortBy === f.toLowerCase();
            return (
              <li
                key={f}
                className={`relative cursor-pointer py-2 text-sm font-medium transition-colors duration-300 ${isActive ? "text-brand" : "text-content-muted hover:text-content-default"}`}
                onClick={() => setSortBy(f.toLowerCase())}
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

        <ProjectCard />
      </div>
    </section>
  );
}
