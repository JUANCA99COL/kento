"use client";

import { motion } from "framer-motion";
import { MessageCircle, Briefcase, Send } from "lucide-react";
import Container from "./ui/Container";

const columns = [
  {
    title: "Product",
    links: ["Market", "Portfolio", "Wallet", "Pricing"],
  },
  {
    title: "Company",
    links: ["About Us", "Careers", "Press", "Contact Us"],
  },
  {
    title: "Legal",
    links: ["Terms of Service", "Privacy Policy", "Risk Disclosure", "SPV Docs"],
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-border py-16">
      <Container>
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-5">
          <div className="col-span-2">
            <span className="font-gilroy text-2xl font-semibold tracking-tight text-foreground">
              KENTO
            </span>
            <p className="mt-3 max-w-xs text-sm text-muted">
              Fractional real estate investing, powered by crypto. Built for
              investors who want their money working as hard as they do.
            </p>
            <div className="mt-5 flex gap-3">
              {[MessageCircle, Briefcase, Send].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{
                    scale: 1.1,
                    borderColor: "#cba135",
                    color: "#cba135",
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted"
                >
                  <Icon size={15} />
                </motion.a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <div className="text-xs font-semibold uppercase tracking-widest text-muted">
                {col.title}
              </div>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted transition-colors hover:text-foreground"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-xs text-muted sm:flex-row">
          <span>© 2026 Kento Technologies, Inc. All rights reserved.</span>
          <span className="max-w-lg text-center sm:text-right">
            Investing involves risk, including loss of principal. Tokenized
            real estate offerings are made only to accredited investors.
          </span>
        </div>
      </Container>
    </footer>
  );
}
