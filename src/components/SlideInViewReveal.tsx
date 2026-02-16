"use client";

import React, { useEffect, useRef } from "react";
import { animate, motion, useInView, Variants } from "framer-motion";

const SlideInViewReveal = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef(null);

  const element = useInView(ref, { once: true });

  // useEffect(() => {}, []);

  const variants: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };
  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={element ? "visible" : ""}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};

export default SlideInViewReveal;
