"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";

const SlideInViewReveal = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef(null);
  return <motion.div ref={ref}>{children}</motion.div>;
};

export default SlideInViewReveal;
