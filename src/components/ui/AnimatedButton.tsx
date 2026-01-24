"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface AnimatedButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  className?: string;
}

export function AnimatedButton({
  children,
  href,
  onClick,
  variant = "primary",
  className,
}: AnimatedButtonProps) {
  const baseStyles =
    "px-8 py-4 rounded-lg font-semibold transition-all duration-300 inline-block";
  const variants = {
    primary:
      "bg-gradient-tech text-white hover:shadow-2xl hover:shadow-purple-500/50 hover:scale-105",
    secondary: "glass text-titanium hover:bg-white/10",
  };

  const Component = href ? "a" : "button";

  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Component
        href={href}
        onClick={onClick}
        className={cn(baseStyles, variants[variant], className)}
      >
        {children}
      </Component>
    </motion.div>
  );
}

