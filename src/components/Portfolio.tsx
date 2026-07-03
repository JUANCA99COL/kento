"use client";

import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, ArrowUpRight } from "lucide-react";
import Container from "./ui/Container";
import CountUp from "./ui/CountUp";
import LineChart from "./ui/LineChart";
import DonutChart from "./ui/DonutChart";
import { holdings, portfolioHistory } from "@/lib/data";

const totalValue = holdings.reduce((sum, h) => sum + h.value, 0);
const totalIncome = holdings.reduce((sum, h) => sum + h.income, 0);
const periodChange =
  ((portfolioHistory[portfolioHistory.length - 1] -
    portfolioHistory[portfolioHistory.length - 2]) /
    portfolioHistory[portfolioHistory.length - 2]) *
  100;

const donutColors = ["#cba135", "#34d399", "#8c8c93", "#e4c368"];

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative bg-surface/40 py-28">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-gold">
            Your Portfolio
          </span>
          <h2 className="mt-3 font-display text-4xl font-medium tracking-tight sm:text-5xl">
            Passive income,
            <br className="hidden sm:block" /> tracked in real time.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-border bg-surface p-8 lg:col-span-2"
          >
            <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-start">
              <div>
                <div className="text-xs text-muted">Total Portfolio Value</div>
                <div className="mt-2 font-display text-4xl font-medium text-foreground sm:text-5xl">
                  <CountUp value={totalValue} prefix="$" />
                </div>
                <div
                  className={`mt-2 flex items-center gap-1 text-sm font-medium ${
                    periodChange >= 0 ? "text-emerald" : "text-red-400"
                  }`}
                >
                  {periodChange >= 0 ? (
                    <TrendingUp size={14} />
                  ) : (
                    <TrendingDown size={14} />
                  )}
                  {periodChange.toFixed(1)}% this month
                </div>
              </div>
              <div className="flex gap-8 text-right">
                <div>
                  <div className="text-xs text-muted">Monthly Income</div>
                  <div className="mt-1 font-display text-xl font-medium text-emerald">
                    +${totalIncome}
                  </div>
                </div>
                <div>
                  <div className="text-xs text-muted">Properties</div>
                  <div className="mt-1 font-display text-xl font-medium text-foreground">
                    {holdings.length}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 h-56 w-full">
              <LineChart data={portfolioHistory} />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col items-center justify-center rounded-2xl border border-border bg-surface p-8"
          >
            <div className="mb-4 self-start text-xs text-muted">
              Allocation
            </div>
            <DonutChart
              slices={holdings.map((h, i) => ({
                label: h.name,
                value: h.value,
                color: donutColors[i % donutColors.length],
              }))}
            />
            <div className="mt-6 w-full space-y-3">
              {holdings.map((h, i) => (
                <div
                  key={h.propertyId}
                  className="flex items-center justify-between text-xs"
                >
                  <span className="flex items-center gap-2 text-muted">
                    <span
                      className="h-2 w-2 rounded-full"
                      style={{
                        backgroundColor: donutColors[i % donutColors.length],
                      }}
                    />
                    {h.name}
                  </span>
                  <span className="font-medium text-foreground">
                    {((h.value / totalValue) * 100).toFixed(0)}%
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-6 overflow-hidden rounded-2xl border border-border bg-surface"
        >
          <div className="grid grid-cols-4 gap-4 border-b border-border px-6 py-4 text-xs font-medium text-muted sm:grid-cols-5">
            <span className="col-span-2 sm:col-span-2">Property</span>
            <span className="hidden text-right sm:block">Tokens</span>
            <span className="text-right">Value</span>
            <span className="text-right">Change</span>
          </div>
          {holdings.map((h) => (
            <div
              key={h.propertyId}
              className="grid grid-cols-4 items-center gap-4 px-6 py-4 text-sm transition-colors hover:bg-surface-2 sm:grid-cols-5"
            >
              <div className="col-span-2 flex items-center gap-2 sm:col-span-2">
                <span className="font-medium text-foreground">{h.name}</span>
                <ArrowUpRight size={13} className="text-muted" />
              </div>
              <span className="hidden text-right text-muted sm:block">
                {h.tokens}
              </span>
              <span className="text-right font-medium text-foreground">
                ${h.value.toLocaleString()}
              </span>
              <span
                className={`text-right font-medium ${
                  h.change >= 0 ? "text-emerald" : "text-red-400"
                }`}
              >
                {h.change >= 0 ? "+" : ""}
                {h.change}%
              </span>
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
