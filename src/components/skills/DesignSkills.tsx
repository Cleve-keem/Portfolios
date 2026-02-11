"use client";

import { motion, Variants } from "framer-motion";
import { designSkills } from "@/constants/skills";
import { SkillLabel, SkillGroup, SkillContent } from "./SkillGroup";

export default function DevelopmentSkill() {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08, // Faster stagger for better mobile feel
        delayChildren: 0.2,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    show: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: "spring", stiffness: 260, damping: 20 },
    },
  };

  return (
    <SkillGroup className="py-12 md:py-20">
      <SkillLabel className="text-content-strong mb-8 text-center md:text-left font-bold tracking-tight text-2xl md:text-3xl">
        Design Expertise
      </SkillLabel>

      <SkillContent>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2, margin: "-50px" }}
          className="flex flex-wrap justify-center md:justify-start gap-3 md:gap-4"
        >
          {designSkills.map((skill, i) => (
            <motion.div
              key={i}
              variants={item}
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.95 }} // Critical for mobile responsiveness
              className="relative group"
            >
              {/* Animated Gradient Glow */}
              <div className="absolute -inset-0.5 rounded-full bg-linear-to-r from-brand via-highlight to-brand opacity-0 blur-md group-hover:opacity-60 transition-all duration-700 bg-size-[200%_auto] animate-[gradient_3s_linear_infinite]" />

              {/* Responsive Badge Container */}
              <div className="relative flex items-center gap-2 px-4 py-2.5 md:px-6 md:py-3 rounded-full border border-surface-muted bg-canvas shadow-sm transition-all duration-300 group-hover:border-brand group-hover:shadow-brand/20">
                <span className="size-2 rounded-full bg-brand shadow-[0_0_8px_rgba(35,73,255,0.6)] group-hover:animate-ping" />
                <span className="text-sm md:text-base font-semibold text-content-default group-hover:text-brand transition-colors whitespace-nowrap">
                  {skill}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </SkillContent>
    </SkillGroup>
  );
}
