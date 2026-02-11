"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { GithubIcon, Twitter, Facebook, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative px-6 py-12 md:py-20 border-t border-border-muted bg-canvas overflow-hidden">
      {/* Subtle Background Glow for Depth */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-linear-to-r from-transparent via-brand to-transparent opacity-50" />

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* LEFT: Branding & Message */}
          <div className="space-y-6">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold tracking-tighter text-content-strong"
              >
                Thank You<span className="text-brand">.</span>
              </motion.h2>
              <p className="text-content-muted mt-4 max-w-sm text-sm md:text-base leading-relaxed">
                For sparing some time to review my work. I'm always open to new
                opportunities and collaborative challenges.
              </p>
            </div>

            <div className="flex items-center gap-4">
              {/* Social Icons with Guru Hover */}
              {[
                { icon: <GithubIcon size={18} />, href: "#", label: "Github" },
                { icon: <Twitter size={18} />, href: "#", label: "Twitter" },
                { icon: <Facebook size={18} />, href: "#", label: "Facebook" },
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
            </div>
          </div>

          {/* RIGHT: Call to Action Card */}
          <div className="flex items-center md:justify-end">
            <motion.div
              whileHover={{ y: -5 }}
              className="p-8 rounded-3xl bg-surface-muted/30 border border-border-muted backdrop-blur-sm w-full md:max-w-sm group"
            >
              <h3 className="text-xl font-bold text-content-strong mb-2">
                Have a great idea?
              </h3>
              <p className="text-sm text-content-muted mb-6">
                Let&apos;s build something amazing together.
              </p>

              <Link
                href="mailto:hello@example.com"
                className="inline-flex items-center justify-center w-full gap-2 px-6 py-4 bg-brand text-white rounded-2xl font-bold text-sm group-hover:shadow-lg group-hover:shadow-brand/20 transition-all duration-300"
              >
                Get in touch
                <ArrowUpRight
                  size={18}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </Link>
            </motion.div>
          </div>
        </div>

        {/* BOTTOM: Legal & Copyright */}
        <div className="pt-8 border-t border-border-muted flex flex-col md:flex-row justify-between gap-4">
          <p className="text-[11px] uppercase tracking-widest text-content-muted font-bold">
            © {currentYear} Hackhim — Crafted with pro touch 😂
          </p>

          <div className="flex gap-6 text-[11px] uppercase tracking-widest font-bold text-content-muted">
            <Link href="" className="hover:text-brand transition-colors">
              Privacy Policy
            </Link>
            <Link href="" className="hover:text-brand transition-colors">
              Cookies Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
