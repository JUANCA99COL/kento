"use client";

import { motion } from "framer-motion";

type Slice = {
  label: string;
  value: number;
  color: string;
};

export default function DonutChart({ slices }: { slices: Slice[] }) {
  const total = slices.reduce((sum, s) => sum + s.value, 0);
  const radius = 60;
  const circumference = 2 * Math.PI * radius;
  let offset = 0;

  return (
    <svg viewBox="0 0 160 160" className="h-40 w-40 -rotate-90">
      <circle
        cx="80"
        cy="80"
        r={radius}
        fill="none"
        stroke="#17171a"
        strokeWidth={18}
      />
      {slices.map((slice, i) => {
        const fraction = slice.value / total;
        const dash = fraction * circumference;
        const dashOffset = offset;
        offset += dash;
        return (
          <motion.circle
            key={slice.label}
            cx="80"
            cy="80"
            r={radius}
            fill="none"
            stroke={slice.color}
            strokeWidth={18}
            strokeDasharray={`${dash} ${circumference - dash}`}
            initial={{ strokeDashoffset: circumference, opacity: 0 }}
            whileInView={{ strokeDashoffset: -dashOffset, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.15 * i, ease: "easeOut" }}
            strokeLinecap="butt"
            style={{ strokeDashoffset: -dashOffset }}
          />
        );
      })}
    </svg>
  );
}
