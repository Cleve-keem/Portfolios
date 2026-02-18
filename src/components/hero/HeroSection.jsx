"use client";

import { motion } from "framer-motion";
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
              className="text-4xl md:text-5xl font-black leading-[1.1] mb-6 text-content-strong"
            >
              Hi there! 👋🏻 <br />
              <span className="text-brand">I’m Bello Hakeem</span>
            </motion.h1>

            <motion.div variants={fadeInUp}>
              <p className="text-[16px] md:text-xl text-content-default leading-relaxed mb-8">
                I'm a Frontend Developer turned Software Developer. My
                passion is in creating human-centered applications that improve
                daily lives.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} whileHover={{ x: 10 }}>
              <Link
                href="/"
                className="group flex items-center gap-3 text-brand text-[14px] font-semibold tracking-tight"
              >
                Let's connect
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

// import Image from "next/image";
// import Link from "next/link";

// export default function HeroSection() {
//   return (
//     <section className="p-5 md:py-10 xl:px-15">
//       <div className="max-w-360 mx-auto w-full">
//         <div className="flex flex-col md:flex-row-reverse w-full gap-8 xl:gap-15">
//           {/* Hero Image */}
//           <div className="relative h-90 w-full mx-auto rounded-2xl overflow-hidden mb-6 md:w-[40%]">
//             <Image
//               src="/avatar.jpeg"
//               alt="My profile Image"
//               fill
//               priority
//               // loading="eager"
//               className="object-cover"
//               // sizes="150px"
//               sizes="(max-width: 768px) 100vw, 300px"
//             />
//           </div>
//           {/* Hero description */}
//           <div className="md:w-[60%]">
//             <h1 className="text-4xl font-bold leading-13 mb-6">
//               Hi there! 👋🏻 <br /> I’m Hackhim,
//             </h1>
//             <p className="mb-4">
//               I'm a Frontend Developer turned Software Developer 😂 by
//               <span className="text-brand"> Mistake</span>. My passion is in
//               creating human-centered applications that can improve our daily
//               lives while creating a cross-cultural impact. <br /> <br /> My
//               past experience lends me the ability to communicate effectively
//               across multiple divisions and collaborate efficiently in an agile
//               working environment. That's why I would love to work with the next
//               product team to build solutions that we are all proud of.
//             </p>
//             <Link href="/" className="text-brand text-[12px] font-semibold">
//               Let's connect!
//             </Link>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
