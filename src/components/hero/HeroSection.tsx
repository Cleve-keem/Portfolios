"use client";

import { AnimatePresence, motion, Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import SocialLink from "../SocialLink";
import { socials } from "@/constants/socials";
import { useState } from "react";

export default function HeroSection() {
  const [showSocialLinks, setShowSocialLinks] = useState<boolean>(false);

  const fadeInUp: Variants = {
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
    <section className="p-5 md:py-20 xl:px-15 overflow-hidden" id="home">
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
                src="/BlackBoy.jfif"
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
            <motion.div variants={fadeInUp} layout className="space-y-6">
              <motion.div
                whileHover="hover"
                whileTap={{ scale: 0.98 }}
                onClick={() => setShowSocialLinks(!showSocialLinks)}
                className="flex items-center gap-3 w-fit cursor-pointer group select-none"
              >
                <span className="text-brand text-sm font-semibold tracking-wider">
                  {showSocialLinks ? "Close" : "Let's connect"}
                </span>

                <motion.div
                  animate={{
                    rotate: showSocialLinks ? 90 : 0,
                    x: showSocialLinks ? 0 : [0, 2, 0],
                  }}
                  transition={{
                    rotate: { type: "spring", stiffness: 200 },
                    x: { repeat: Infinity, duration: 2, ease: "easeInOut" },
                  }}
                  className="flex items-center justify-center size-6 rounded-full border border-brand/20 text-brand bg-brand/5 group-hover:bg-brand group-hover:text-white transition-colors"
                >
                  <ArrowRight size={16} />
                </motion.div>
              </motion.div>

              <AnimatePresence mode="sync">
                {showSocialLinks && (
                  <motion.div
                    variants={{
                      visible: { transition: { staggerChildren: 0.1 } },
                      hidden: {
                        transition: {
                          staggerChildren: 0.05,
                          staggerDirection: -1,
                        },
                      },
                    }}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    className="flex items-center gap-4"
                  >
                    {socials.map((social, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ y: -3 }}
                        variants={{
                          hidden: { opacity: 0, x: -20, scale: 0.8 },
                          visible: { opacity: 1, x: 0, scale: 1 },
                        }}
                      >
                        <SocialLink social={social} />
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
            {/* <motion.div variants={fadeInUp}>
              <motion.div
                whileHover="hover"
                className="mb-4 flex items-center gap-2 w-fit cursor-pointer"
                onClick={() => setShowSocailLinks(!showSocialLinks)}
              >
                <span
                  // href="/"
                  className="text-brand text-[14px] font-semibold tracking-tight"
                >
                  {showSocialLinks ? "Close Links" : "Let's connect"}
                </span>
                <motion.span
                  variants={{
                    hover: { rotate: 0 },
                  }}
                  initial={{ rotate: -20 }}
                  transition={{
                    duration: 0.2,
                  }}
                  className="block text-brand size-5"
                >
                  <ArrowRight className="size-4" />
                </motion.span>
              </motion.div>
              <AnimatePresence>
                {showSocialLinks && (
                  <motion.div
                    variants={fadeInUp}
                    initial={{ x: 10 }}
                    animate={{ x: 0 }}
                    exit={{ x: 10 }}
                    className="flex items-center gap-4"
                  >
                    {socials.map((social, i) => (
                      <SocialLink social={social} key={i} />
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div> */}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
