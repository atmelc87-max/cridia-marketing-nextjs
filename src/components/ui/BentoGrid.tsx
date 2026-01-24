"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BentoGridProps {
  children: ReactNode;
  className?: string;
}

export function BentoGrid({ children, className }: BentoGridProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto",
        className
      )}
    >
      {children}
    </div>
  );
}

interface BentoItemProps {
  children: ReactNode;
  className?: string;
  span?: "1" | "2" | "3";
}

export function BentoItem({ children, className, span = "1" }: BentoItemProps) {
  const spanClasses = {
    "1": "",
    "2": "md:col-span-2",
    "3": "lg:col-span-3",
  };

  return <div className={cn(spanClasses[span], className)}>{children}</div>;
}

