"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Wallet } from "lucide-react";
import Container from "./ui/Container";

const links = [
  { label: "Market", href: "#market" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Wallet", href: "#wallet" },
  { label: "About Us", href: "#about" },
  { label: "Contact Us", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <Container className="flex h-20 items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <span className="font-gilroy text-2xl font-semibold tracking-tight text-foreground">
            KENTO
          </span>
        </a>

        <nav className="hidden items-center gap-10 lg:flex">
          {links.map((link) => (
            <motion.a
              key={link.href}
              href={link.href}
              initial="rest"
              whileHover="hover"
              animate="rest"
              className="relative text-sm font-medium"
            >
              <motion.span
                variants={{ rest: { color: "#8c8c93" }, hover: { color: "#f2f1ec" } }}
                transition={{ duration: 0.2 }}
              >
                {link.label}
              </motion.span>
              <motion.span
                variants={{ rest: { width: "0%" }, hover: { width: "100%" } }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="absolute -bottom-1 left-0 h-px bg-gold"
              />
            </motion.a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-background"
          >
            <Wallet size={16} strokeWidth={2.5} />
            Connect Wallet
          </motion.button>
        </div>

        <motion.button
          whileTap={{ scale: 0.9 }}
          className="text-foreground lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </motion.button>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden border-b border-border bg-background lg:hidden"
          >
            <Container className="flex flex-col gap-5 py-6">
              {links.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ color: "#8c8c93" }}
                  whileHover={{ color: "#f2f1ec" }}
                  transition={{ duration: 0.2 }}
                  className="text-base font-medium"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="mt-2 flex items-center justify-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-semibold text-background"
              >
                <Wallet size={16} strokeWidth={2.5} />
                Connect Wallet
              </motion.button>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
