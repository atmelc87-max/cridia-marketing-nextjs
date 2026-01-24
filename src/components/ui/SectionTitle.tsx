"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionTitleProps {
  children: ReactNode;
  subtitle?: string;
  centered?: boolean;
}

export function SectionTitle({
  children,
  subtitle,
  centered = true,
}: SectionTitleProps) {
  return (
    <motion.div
      className={centered ? "text-center" : ""}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-tech text-gradient">
        {children}
      </h2>
      {subtitle && (
        <p className="text-xl text-titanium/80 max-w-3xl mx-auto">{subtitle}</p>
      )}
    </motion.div>
  );
}

