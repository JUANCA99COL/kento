"use client";

import { motion } from "framer-motion";
import {
  ArrowDownToLine,
  ArrowUpFromLine,
  Wallet as WalletIcon,
  ArrowDownLeft,
  ArrowUpRight,
  Coins,
} from "lucide-react";
import Container from "./ui/Container";
import { transactions } from "@/lib/data";

const balances = [
  { asset: "USDC", amount: 24680.5, usd: 24680.5, color: "#2775ca" },
  { asset: "ETH", amount: 3.42, usd: 11890.2, color: "#cba135" },
  { asset: "USDT", amount: 5200, usd: 5198.6, color: "#34d399" },
];

const txIcon: Record<string, typeof ArrowDownLeft> = {
  deposit: ArrowDownLeft,
  withdrawal: ArrowUpRight,
  income: Coins,
  purchase: ArrowUpRight,
};

export default function Wallet() {
  return (
    <section id="wallet" className="relative py-28">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-gold">
            Wallet
          </span>
          <h2 className="mt-3 font-gilroy text-4xl font-medium tracking-tight sm:text-5xl">
            Your crypto,
            <br className="hidden sm:block" /> ready to deploy.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-border bg-gradient-to-br from-surface to-surface-2 p-8 lg:col-span-1"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm text-muted">
                <WalletIcon size={16} />
                Connected Wallet
              </div>
              <span className="h-2 w-2 rounded-full bg-emerald" />
            </div>
            <div className="mt-4 font-mono text-sm text-foreground">
              0x71C...9e4A
            </div>

            <div className="mt-8 text-xs text-muted">Total Balance</div>
            <div className="mt-1 font-gilroy text-3xl font-medium text-foreground">
              $
              {balances
                .reduce((s, b) => s + b.usd, 0)
                .toLocaleString("en-US", { maximumFractionDigits: 0 })}
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="flex items-center justify-center gap-2 rounded-full bg-gold py-2.5 text-xs font-semibold text-background"
              >
                <ArrowDownToLine size={14} />
                Deposit
              </motion.button>
              <motion.button
                whileHover={{ backgroundColor: "#17171a" }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2 }}
                className="flex items-center justify-center gap-2 rounded-full border border-border py-2.5 text-xs font-semibold text-foreground"
              >
                <ArrowUpFromLine size={14} />
                Withdraw
              </motion.button>
            </div>

            <div className="mt-8 space-y-4 border-t border-border pt-6">
              {balances.map((b) => (
                <div key={b.asset} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span
                      className="flex h-7 w-7 items-center justify-center rounded-full text-[10px] font-bold text-background"
                      style={{ backgroundColor: b.color }}
                    >
                      {b.asset.slice(0, 1)}
                    </span>
                    <div>
                      <div className="text-sm font-medium text-foreground">
                        {b.asset}
                      </div>
                      <div className="text-xs text-muted">
                        {b.amount.toLocaleString()}
                      </div>
                    </div>
                  </div>
                  <div className="text-sm text-muted">
                    ${b.usd.toLocaleString()}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="overflow-hidden rounded-2xl border border-border bg-surface lg:col-span-2"
          >
            <div className="flex items-center justify-between border-b border-border px-6 py-5">
              <span className="text-sm font-medium text-foreground">
                Recent Activity
              </span>
              <a href="#" className="text-xs text-gold hover:underline">
                View all
              </a>
            </div>
            <div className="divide-y divide-border">
              {transactions.map((tx, i) => {
                const Icon = txIcon[tx.type];
                return (
                  <motion.div
                    key={tx.id}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                    className="flex items-center justify-between px-6 py-4 transition-colors hover:bg-surface-2"
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`flex h-9 w-9 items-center justify-center rounded-full ${
                          tx.amount >= 0
                            ? "bg-emerald/10 text-emerald"
                            : "bg-surface-2 text-muted"
                        }`}
                      >
                        <Icon size={15} />
                      </span>
                      <div>
                        <div className="text-sm font-medium text-foreground">
                          {tx.label}
                        </div>
                        <div className="text-xs text-muted">{tx.date}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div
                        className={`text-sm font-medium ${
                          tx.amount >= 0 ? "text-emerald" : "text-foreground"
                        }`}
                      >
                        {tx.amount >= 0 ? "+" : ""}
                        {tx.amount.toLocaleString()} {tx.asset}
                      </div>
                      <div
                        className={`text-xs ${
                          tx.status === "pending"
                            ? "text-gold"
                            : "text-muted"
                        }`}
                      >
                        {tx.status}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
