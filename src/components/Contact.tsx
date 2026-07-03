"use client";

import { FormEvent, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MessageCircle, MapPin, Send, CheckCircle2 } from "lucide-react";
import Container from "./ui/Container";

const info = [
  {
    icon: Mail,
    label: "Email",
    value: "invest@kento.io",
  },
  {
    icon: MessageCircle,
    label: "Live chat",
    value: "Mon–Fri, 9am–6pm EST",
  },
  {
    icon: MapPin,
    label: "Headquarters",
    value: "Miami, FL",
  },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="relative py-28">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-gold">
              Contact Us
            </span>
            <h2 className="mt-3 font-display text-4xl font-medium tracking-tight sm:text-5xl">
              Let&apos;s talk
              <br /> about your portfolio.
            </h2>
            <p className="mt-6 max-w-sm text-muted">
              Whether you&apos;re exploring your first tokenized property or
              structuring a seven-figure allocation, our team responds within
              one business day.
            </p>

            <div className="mt-10 space-y-5">
              {info.map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-surface text-gold">
                    <item.icon size={17} />
                  </span>
                  <div>
                    <div className="text-xs text-muted">{item.label}</div>
                    <div className="text-sm font-medium text-foreground">
                      {item.value}
                    </div>
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
            className="rounded-2xl border border-border bg-surface p-8 lg:col-span-3"
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex h-full min-h-[360px] flex-col items-center justify-center text-center"
                >
                  <CheckCircle2 size={40} className="text-emerald" />
                  <h3 className="mt-4 font-display text-xl font-medium text-foreground">
                    Message sent
                  </h3>
                  <p className="mt-2 max-w-xs text-sm text-muted">
                    Thanks for reaching out — someone from our investor
                    relations team will follow up shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-sm font-medium text-gold hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="grid grid-cols-1 gap-5 sm:grid-cols-2"
                >
                  <label className="flex flex-col gap-2 text-xs text-muted">
                    Full name
                    <input
                      required
                      type="text"
                      placeholder="Jordan Alvarez"
                      className="rounded-xl border border-border bg-surface-2 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted/50 focus:border-gold"
                    />
                  </label>
                  <label className="flex flex-col gap-2 text-xs text-muted">
                    Email
                    <input
                      required
                      type="email"
                      placeholder="you@email.com"
                      className="rounded-xl border border-border bg-surface-2 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted/50 focus:border-gold"
                    />
                  </label>
                  <label className="flex flex-col gap-2 text-xs text-muted sm:col-span-2">
                    Investment budget
                    <select className="rounded-xl border border-border bg-surface-2 px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-gold">
                      <option>$2,500 – $25,000</option>
                      <option>$25,000 – $100,000</option>
                      <option>$100,000 – $500,000</option>
                      <option>$500,000+</option>
                    </select>
                  </label>
                  <label className="flex flex-col gap-2 text-xs text-muted sm:col-span-2">
                    Message
                    <textarea
                      required
                      rows={4}
                      placeholder="Tell us about your investment goals..."
                      className="resize-none rounded-xl border border-border bg-surface-2 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted/50 focus:border-gold"
                    />
                  </label>
                  <button
                    type="submit"
                    className="group flex items-center justify-center gap-2 rounded-full bg-gold py-3.5 text-sm font-semibold text-background transition-transform hover:scale-[1.01] active:scale-95 sm:col-span-2"
                  >
                    Send Message
                    <Send
                      size={15}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
