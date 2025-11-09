"use client";

import { motion } from "framer-motion";

const heroHighlights = [
  "Wood-fired sourdough crust with 48-hour fermentation",
  "San Marzano tomatoes & hand-pulled fior di latte",
  "Seasonal toppings sourced from local farms"
];

export function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-brand text-white"
    >
      <div className="absolute inset-0 opacity-50 mix-blend-soft-light">
        <div className="hero-pattern h-full w-full" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-brand-dark/80 via-brand/40 to-transparent" />

      <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-6 py-24 md:flex-row md:items-center md:justify-between md:py-32 lg:py-40">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-xl space-y-6"
        >
          <p className="inline-block rounded-full border border-white/30 px-4 py-1 text-xs uppercase tracking-[0.4em] text-white/70">
            Taste the flame
          </p>
          <h1 className="font-display text-4xl leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Napoli traditions, perfected in our wood-fired oven.
          </h1>
          <p className="text-lg text-white/80 lg:text-xl">
            Experience La Fiamma&apos;s celebrated pies, crafted with heritage ingredients,
            blistered to perfection at 900°F, and served with the warmth of Italian hospitality.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="#reservation"
              className="rounded-full bg-white px-6 py-3 text-center text-base font-semibold text-brand transition hover:-translate-y-0.5 hover:bg-parchment hover:text-brand-dark hover:shadow-lg"
            >
              Reserve Your Table
            </a>
            <a
              href="#menu"
              className="rounded-full border border-white/40 px-6 py-3 text-center text-base font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10 hover:shadow-lg"
            >
              Explore Menu
            </a>
          </div>

          <ul className="grid gap-3 pt-4 text-sm text-white/80">
            {heroHighlights.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-2.5 w-2.5 flex-none rounded-full bg-parchment" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative mx-auto w-full max-w-sm md:max-w-md"
        >
          <div className="absolute -left-6 -top-6 h-28 w-28 rounded-full bg-brand-light/40 blur-2xl" />
          <div className="absolute -bottom-8 -right-10 h-32 w-32 rounded-full bg-white/20 blur-3xl" />
          <div className="card overflow-hidden border border-white/20 bg-white/10 text-white shadow-2xl backdrop-blur-lg">
            <div className="relative h-72 overflow-hidden rounded-2xl">
              <picture>
                <source srcSet="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=80" />
                <img
                  alt="Wood fired pizza with basil"
                  src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=80"
                  className="h-full w-full object-cover"
                />
              </picture>
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-transparent to-transparent" />
            </div>
            <div className="space-y-2 pt-6">
              <p className="text-xs uppercase tracking-[0.4em] text-white/60">
                Chef&apos;s Pick
              </p>
              <h3 className="font-display text-2xl">La Fiamma Inferno</h3>
              <p className="text-sm text-white/70">
                Calabrian chili honey, smoked mozzarella, fennel sausage, charred peppers.
              </p>
              <p className="pt-2 text-sm font-semibold text-parchment">Pair with Barbera d&apos;Asti</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
