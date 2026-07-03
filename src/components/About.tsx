"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Landmark, Sparkles, Globe2 } from "lucide-react";
import Container from "./ui/Container";

const values = [
  {
    icon: ShieldCheck,
    title: "Regulated by design",
    body: "Every property is held in a compliant SPV. Your tokens represent real, auditable equity — not synthetic exposure.",
  },
  {
    icon: Landmark,
    title: "Institutional-grade assets",
    body: "We source and underwrite properties the way a REIT would — appraisals, inspections, and title work included.",
  },
  {
    icon: Sparkles,
    title: "Built for passive income",
    body: "Rental yield is distributed to your wallet automatically. No leases to manage, no tenants to call.",
  },
  {
    icon: Globe2,
    title: "Borderless investing",
    body: "Invest from anywhere with USDC, ETH, or USDT. No bank wires, no 20-page subscription agreements.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative bg-surface/40 py-28">
      <Container>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-gold">
              About Kento
            </span>
            <h2 className="mt-3 font-display text-4xl font-medium leading-tight tracking-tight sm:text-5xl">
              Real estate wealth,
              <br /> without the gatekeepers.
            </h2>
            <p className="mt-6 max-w-md text-muted">
              Kento was founded on a simple idea: the people with the capital
              to build generational wealth through real estate shouldn&apos;t
              need a six-figure check or a property management team to do it.
              We tokenize institutional-quality properties so accredited
              investors can build a diversified real estate portfolio in
              minutes, not months.
            </p>
            <p className="mt-4 max-w-md text-muted">
              Every listing on Kento is legally structured, professionally
              managed, and backed by rental income paid directly to your
              wallet — quarter after quarter.
            </p>

            <div className="mt-10 flex gap-10">
              <div>
                <div className="font-display text-3xl font-medium text-foreground">
                  2022
                </div>
                <div className="mt-1 text-xs text-muted">Founded</div>
              </div>
              <div>
                <div className="font-display text-3xl font-medium text-foreground">
                  14
                </div>
                <div className="mt-1 text-xs text-muted">Team members</div>
              </div>
              <div>
                <div className="font-display text-3xl font-medium text-foreground">
                  9
                </div>
                <div className="mt-1 text-xs text-muted">Markets covered</div>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-gold/40"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/10 text-gold">
                  <v.icon size={18} />
                </span>
                <h3 className="mt-4 font-display text-base font-medium text-foreground">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm text-muted">{v.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
