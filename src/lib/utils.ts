import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Track Google Analytics 4 event for Start Free Trial button clicks
 * @param buttonLocation - Location identifier for the button (e.g., 'hero', 'navbar', 'pricing')
 */
export function trackStartTrialClick(buttonLocation: string) {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", "clicked_start_trial", {
      event_category: "engagement",
      event_label: "cta_button",
      button_location: buttonLocation,
    });
  }
}