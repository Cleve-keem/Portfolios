"use client";

import { ReactNode } from "react";
import { motion, HTMLMotionProps } from "framer-motion";

// Use HTMLMotionProps to include motion-specific types (like 'animate', 'variants', etc.)
interface SkillGroupProps extends HTMLMotionProps<"section"> {
  children: ReactNode;
}

export function SkillGroup({ children, className, ...props }: SkillGroupProps) {
  return (
    // FIX: Change 'section' to 'motion.section' so it can accept the motion props
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`mb-12 last:mb-0 ${className}`}
      {...props}
    >
      {children}
    </motion.section>
  );
}

// Ensure SkillContent also uses motion.div if it receives motion props
export function SkillContent({
  children,
  className,
  ...props
}: HTMLMotionProps<"div">) {
  return (
    <motion.div
      className={`p-6 border border-surface-muted rounded-3xl bg-canvas/50 backdrop-blur-sm shadow-sm ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function SkillLabel({
  children,
  className,
}: {
  children?: string;
  className?: string;
}) {
  return (
    <h3
      className={`font-normal tracking-[0.2em] text-content-muted mb-6 ${className}`}
    >
      {children}
    </h3>
  );
}
// import { ReactNode, ComponentPropsWithoutRef } from "react";

// interface SkillGroupProps extends ComponentPropsWithoutRef<"div"> {
//   children: ReactNode;
// }

// export function SkillGroup({ children, className, ...props }: SkillGroupProps) {
//   return (
//     <div className={`mb-6 ${className}`} {...props}>
//       {children}
//     </div>
//   );
// }

// export function SkillLabel({
//   children,
//   className,
// }: {
//   children?: string;
//   className?: string;
// }) {
//   return <h3 className={`font-medium mb-4 ${className}`}>{children}</h3>;
// }

// export function SkillContent({
//   children,
//   className,
//   ...props
// }: SkillGroupProps) {
//   return (
//     <div
//       className={`p-4 border border-border-muted rounded-2xl ${className}`}
//       {...props}
//     >
//       {children}
//     </div>
//   );
// }
