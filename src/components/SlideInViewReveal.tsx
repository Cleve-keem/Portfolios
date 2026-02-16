"use client";

import { ReactNode, useRef } from "react";
import { HTMLMotionProps, motion, useInView, Variants } from "framer-motion";

interface SlideInViewRevealProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
}

const SlideInViewReveal = ({ children, ...props }: SlideInViewRevealProps) => {
  const ref = useRef(null);
  const element = useInView(ref, { once: true });

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
      {...props}
      initial="hidden"
      animate={element ? "visible" : ""}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};

export default SlideInViewReveal;
