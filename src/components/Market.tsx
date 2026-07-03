"use client";

import { motion } from "framer-motion";
import { MapPin, TrendingUp, ArrowUpRight } from "lucide-react";
import Container from "./ui/Container";
import { properties } from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: "easeOut" as const },
  }),
};

export default function Market() {
  return (
    <section id="market" className="relative py-28">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-14 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end"
        >
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-gold">
              The Market
            </span>
            <h2 className="mt-3 font-display text-4xl font-medium tracking-tight sm:text-5xl">
              Curated properties.
              <br className="hidden sm:block" /> Fractional entry.
            </h2>
          </div>
          <p className="max-w-sm text-sm text-muted">
            Every listing is vetted, appraised, and structured as an
            SPV-backed token — so you own real equity, not a promise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {properties.map((property, i) => (
            <motion.div
              key={property.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              custom={i}
              whileHover={{ y: -6 }}
              className="group overflow-hidden rounded-2xl border border-border bg-surface transition-colors hover:border-gold/40"
            >
              <div
                className="relative h-48 w-full bg-cover bg-center"
                style={{ backgroundImage: property.image }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
                <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-background/70 px-3 py-1 text-xs font-semibold text-emerald backdrop-blur">
                  <TrendingUp size={12} />
                  {property.apr}% APR
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-display text-lg font-medium text-foreground">
                      {property.name}
                    </h3>
                    <p className="mt-1 flex items-center gap-1 text-xs text-muted">
                      <MapPin size={12} />
                      {property.location}
                    </p>
                  </div>
                  <ArrowUpRight
                    size={18}
                    className="text-muted transition-colors group-hover:text-gold"
                  />
                </div>

                <div className="mt-5 flex items-center justify-between text-xs text-muted">
                  <span>Funded</span>
                  <span className="font-medium text-foreground">
                    {property.funded}%
                  </span>
                </div>
                <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-surface-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${property.funded}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                    className="h-full rounded-full bg-gradient-to-r from-gold-dark to-gold"
                  />
                </div>

                <div className="mt-5 flex items-center justify-between border-t border-border pt-5">
                  <div>
                    <div className="text-xs text-muted">Token price</div>
                    <div className="font-display text-base font-medium text-foreground">
                      ${property.tokenPrice}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-muted">Min. investment</div>
                    <div className="font-display text-base font-medium text-foreground">
                      ${property.minInvestment.toLocaleString()}
                    </div>
                  </div>
                </div>

                <button className="mt-5 w-full rounded-full border border-border py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-gold hover:bg-gold hover:text-background">
                  Invest Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
