"use client";

type ToolInViewProps = {
  title: string;
};

import { useActiveToolTitle } from "@/context/ActiveToolContext";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export default function ToolInView({ title }: ToolInViewProps) {
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
      className={`py-10 text-2xl font-regular md:font-bold md:text-center ${inView ? "text-primary hover:text-brand font-semibold md:font-bold" : "text-gray-300 dark:text-gray-700"} text-nowrap md:text-5xl transition-colors duration-500 md:text-left last:pb-8`}
    >
      {title}
      <div
        className={`bg-blue-100 dark:bg-gray-800 transition-all duration-300 ${inView ? "w-full" : "w-0"}`}
      >
        <motion.span
          className={`block h-2 rounded mt-2 bg-linear-to-r from-blue-500 to-blue-900 transition-all duration-500 delay-100 ${inView ? "w-1/2" : "w-0"}`}
        ></motion.span>
      </div>
    </li>
  );
}
