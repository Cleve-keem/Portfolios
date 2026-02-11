"use client";

import { motion, Variants } from "framer-motion";
import { experiences } from "@/constants/experiences";

export default function Experience() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 },
    },
  };

  return (
    <section className="px-6 py-20 max-w-6xl mx-auto overflow-hidden">
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl font-normal mb-20 text-center text-content-strong tracking-tight"
      >
        Work Experience
      </motion.h3>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="relative"
      >
        {/* THE CENTER SPINE (Desktop Only) */}
        <div className="absolute left-4 md:left-1/2 top-3 bottom-0 w-0.5 bg-linear-to-b from-brand via-surface-muted to-transparent -translate-x-1/2 hidden md:block" />

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative flex items-center justify-between md:even:flex-row-reverse group"
            >
              {/* 1. CONTENT BOX */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, type: "spring" }}
                viewport={{ once: true }}
                className="w-full md:w-[45%] pl-10 md:pl-0"
              >
                <div className="p-6 rounded-3xl border border-surface-muted bg-canvas shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="flex flex-col mb-4">
                    <time className="text-brand font-bold text-xs uppercase tracking-widest mb-1">
                      {exp.period}
                    </time>
                    <h4 className="text-xl font-bold text-content-strong">
                      {exp.company}
                    </h4>
                    <p className="text-sm font-medium text-content-muted">
                      {exp.role}
                    </p>
                  </div>

                  <ul className="space-y-2">
                    {exp.points.map((point, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-sm text-content-default opacity-80"
                      >
                        <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand/40" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              {/* 2. THE CENTER DOT */}
              <div className="absolute left-4 md:left-1/2 top-8 md:top-1/2 -translate-y-1/2 -translate-x-1/2 z-20">
                <div className="relative flex items-center justify-center">
                  <div className="absolute size-8 bg-brand/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500" />
                  <div className="size-4 rounded-full border-4 border-canvas bg-brand shadow-lg transition-transform duration-300 group-hover:scale-125" />
                </div>
              </div>

              {/* 3. SPACER (Desktop Only) */}
              <div className="hidden md:block w-[45%]" />
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
