"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { clsx } from "clsx";

const navItems = [
  { href: "#menu", label: "Menu" },
  { href: "#experience", label: "Experience" },
  { href: "#story", label: "Our Story" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#reservation", label: "Reservations" },
  { href: "#contact", label: "Visit" }
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/20 bg-brand/95 text-white shadow-lg backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#hero" className="font-display text-2xl tracking-wide">
          La Fiamma
        </a>
        <nav className="hidden items-center gap-8 text-sm uppercase tracking-[0.2em] md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-parchment/80"
            >
              {item.label}
            </a>
          ))}
          <a
            href="tel:+1234567890"
            className="rounded-full border border-white bg-white px-4 py-2 text-brand shadow-sm transition hover:bg-brand hover:text-white"
          >
            (123) 456-7890
          </a>
        </nav>
        <button
          aria-label="Toggle menu"
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1 rounded-full border border-white/40 transition md:hidden"
        >
          <motion.span
            className="block h-0.5 w-6 bg-white"
            animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.25 }}
          />
          <motion.span
            className="block h-0.5 w-6 bg-white"
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.25 }}
          />
          <motion.span
            className="block h-0.5 w-6 bg-white"
            animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.25 }}
          />
        </button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden"
          >
            <nav className="flex flex-col gap-2 px-6 pb-6 text-sm uppercase tracking-[0.2em] text-white/90">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={clsx(
                    "rounded-full border border-white/10 px-4 py-3 text-center transition",
                    "hover:bg-white/10"
                  )}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="tel:+1234567890"
                className="rounded-full border border-white bg-white px-4 py-3 text-center text-brand shadow-sm transition hover:bg-brand hover:text-white"
              >
                Call to Order
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
