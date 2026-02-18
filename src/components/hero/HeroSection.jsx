"use client";

import { motion } from "framer-motion";
import { ArrowRight, GithubIcon, LinkedinIcon, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section className="p-5 md:py-20 xl:px-15 overflow-hidden">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="max-w-5xl mx-auto w-full"
      >
        <div className="flex flex-col md:flex-row-reverse items-center gap-12 xl:gap-20">
          <motion.div
            variants={fadeInUp}
            className="relative h-100 w-full max-w-87.5 md:w-[45%] group"
          >
            <div className="absolute -inset-4 bg-brand/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative h-full w-full rounded-3xl overflow-hidden border border-surface-muted shadow-2xl"
            >
              <Image
                src="/avatar.jpeg"
                alt="Hackhim"
                fill
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 400px"
              />
            </motion.div>
          </motion.div>

          <div className="md:w-[55%]">
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-black leading-normal mb-6 text-content-strong"
            >
              Hi there! 👋🏻 <br />
              <span className="text-brand">I’m Bello Hakeem</span>
            </motion.h1>

            <motion.div variants={fadeInUp}>
              <p className="text-[16px] md:text-xl text-content-default leading-relaxed mb-8">
                I'm a Frontend Developer turned Software Developer. My passion
                is in creating human centered applications that improve daily
                lives.
              </p>
            </motion.div>
            <div>
              <motion.div
                variants={fadeInUp}
                whileHover="hover"
                className="mb-4 flex items-center gap-2 w-fit cursor-pointer"
              >
                <Link
                  href="/"
                  className="text-brand text-[14px] font-semibold tracking-tight"
                >
                  Let's connect
                </Link>
                <motion.span
                  variants={{
                    hover: { rotate: 0, x: 5 },
                  }}
                  initial={{ rotate: -20, x: 0 }}
                  transition={{
                    duration: 3,
                    type: "spring",
                    stiffness: 400,
                    damping: 10,
                  }}
                  className="inline-flex justify-center text-brand size-5 transition-transform duration-300"
                >
                  <ArrowRight className="size-4" />
                </motion.span>
              </motion.div>
              <motion.div
                variants={fadeInUp}
                className="flex items-center gap-4"
              >
                {/* Social Icons with Guru Hover */}
                {[
                  {
                    icon: <GithubIcon size={18} />,
                    href: "https:github.com/Cleve-keem",
                    label: "Github",
                  },
                  { icon: <Twitter size={18} />, href: "#", label: "Twitter" },
                  {
                    icon: <LinkedinIcon size={18} />,
                    href: "#",
                    label: "Facebook",
                  },
                ].map((social, i) => (
                  <Link
                    key={i}
                    href={social.href}
                    className="size-10 flex items-center justify-center rounded-xl border border-border-muted text-content-muted hover:border-brand hover:text-brand transition-all duration-300"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </Link>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
