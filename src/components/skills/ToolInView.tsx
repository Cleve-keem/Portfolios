"use client";

type ToolInViewProps = {
  title: string;
  level: number;
};

import { useActiveToolTitle } from "@/context/ActiveToolContext";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export default function ToolInView({ title, level }: ToolInViewProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: "-50% 0px -50% 0px" });
  const { activeToolTitle, setActiveToolTitle } = useActiveToolTitle();

  useEffect(() => {
    if (inView) setActiveToolTitle(title);
    if (!inView && activeToolTitle === title) setActiveToolTitle("");
  }, [inView, title, setActiveToolTitle, activeToolTitle]);

  return (
    <li
      ref={ref}
      className={`py-3 md:py-10 text-2xl font-regular md:font-bold md:text-center ${inView ? "text-primary hover:text-brand font-semibold md:font-bold" : "text-gray-300 dark:text-gray-700"} text-nowrap md:text-5xl transition-colors duration-500 md:text-left last:pb-8`}
    >
      <h3
        className={`text-2xl md:text-5xl transition-all duration-500 mb-4 ${
          inView
            ? "text-primary font-bold scale-105 origin-left"
            : "text-gray-300 dark:text-gray-700 font-regular"
        }`}
      >
        {title}
      </h3>
      <div
        className={`relative  h-1.5 bg-gray-100 dark:bg-gray-800 ${inView ? "w-full" : "w-0"} rounded-full overflow-visible transition-all duration-300`}
      >
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: inView ? `${level}%` : 0 }}
          transition={{ duration: 1, ease: "circOut", delay: 0.2 }}
          className="relative h-full rounded-full bg-linear-to-r from-blue-500 to-brand"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 8 }}
            transition={{ delay: 0.8 }}
            className="absolute -right-4 -top-10"
          >
            <div className="relative bg-brand text-white text-[10px] font-bold px-2 py-1 rounded shadow-lg">
              {level}%
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-brand rotate-45" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </li>
  );
}
