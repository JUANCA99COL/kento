"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, TrendingUp, Coins } from "lucide-react";
import Container from "./ui/Container";
import CountUp from "./ui/CountUp";
import { stats } from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: "easeOut" as const },
  }),
};

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden pt-32 pb-20"
    >
      <div className="absolute inset-0 bg-radial-fade" />
      <div className="absolute inset-0 bg-grid-pattern bg-grid [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />

      <Container className="relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
            className="mx-auto mb-8 flex w-fit items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-1.5 text-xs font-medium text-muted backdrop-blur"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald" />
            Now open — Series C tokenized properties
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
            className="font-gilroy text-5xl font-medium leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
          >
            Own real estate.
            <br />
            <span className="text-gradient-gold">Powered by crypto.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
            className="mx-auto mt-6 max-w-2xl text-lg text-muted"
          >
            Kento lets you buy fractional ownership in premium properties
            using crypto — and earn passive rental income without the
            paperwork, property managers, or six-figure minimums.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <motion.a
              href="#market"
              initial="rest"
              whileHover="hover"
              whileTap={{ scale: 0.95 }}
              animate="rest"
              className="flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-background"
              variants={{ rest: { scale: 1 }, hover: { scale: 1.03 } }}
              transition={{ duration: 0.2 }}
            >
              Explore Properties
              <motion.span
                className="flex"
                variants={{ rest: { x: 0 }, hover: { x: 4 } }}
                transition={{ duration: 0.2 }}
              >
                <ArrowRight size={16} strokeWidth={2.5} />
              </motion.span>
            </motion.a>
            <motion.a
              href="#wallet"
              whileHover={{ backgroundColor: "#0e0e10" }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
              className="rounded-full border border-border px-7 py-3.5 text-sm font-semibold text-foreground"
            >
              Connect Wallet
            </motion.a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={4}
            className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-muted"
          >
            <span className="flex items-center gap-1.5">
              <ShieldCheck size={14} className="text-emerald" /> SEC-compliant
              SPVs
            </span>
            <span className="flex items-center gap-1.5">
              <Coins size={14} className="text-gold" /> USDC · ETH · USDT
            </span>
            <span className="flex items-center gap-1.5">
              <TrendingUp size={14} className="text-emerald" /> Avg 10.8% APR
            </span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mx-auto mt-20 grid max-w-4xl grid-cols-2 gap-6 border-t border-border pt-10 sm:grid-cols-4"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-gilroy text-3xl font-medium text-foreground sm:text-4xl">
                <CountUp
                  value={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  decimals={stat.value % 1 !== 0 ? 1 : 0}
                />
              </div>
              <div className="mt-2 text-xs text-muted">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
