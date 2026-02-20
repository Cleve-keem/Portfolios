"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function ToolInView({ tool }: { tool: string }) {
  const ref = useRef(null);

  const inView = useInView(ref, { margin: "-50% 0px -50% 0px" });

  return (
    <motion.li
      ref={ref}
      className={`py-10 text-4xl font-bold text-center ${inView ? "text-primary hover:text-brand" : "text-gray-300 dark:text-gray-700"} text-nowrap md:text-5xl transition-colors duration-500 md:text-left`}
    >
      {tool}
    </motion.li>
  );
}
