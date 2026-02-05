"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="px-6 py-8 border-t border-border-muted">
      <div>
        <div>
          <div className="mb-4">
            <motion.h1
              initial={{ y: 0 }}
              animate={{ y: [-5, 2] }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
              className="text-3xl font-light"
            >
              Thank You<span className="text-brand">!</span>
            </motion.h1>
            <small className="text-[10px] font-normal">
              For sparing some time and reviewing my work
            </small>
          </div>
          <p className="text-[13px] mb-2">
            Do you have great idea and want to share. Let’s make something
            amazing together
          </p>
          <button className="bg-brand px-3 py-2 text-xs text-white my-4 rounded-2xl">
            Get in touch with me
          </button>
        </div>
        <div>
          <span className="w-full h-0.5 inline-block bg-footer-muted" />
          <div className="flex flex-col gap-2 text-[12px] mt-2">
            <div className="space-x-2.5">
              <Link href="">Privacy Policy</Link>
              <Link href="">Cookies Policy</Link>
            </div>
            <div className="space-x-2.5">
              <Link href="">LinkedIn</Link>
              <Link href="">Twitter</Link>
              <Link href="">Facebook</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
