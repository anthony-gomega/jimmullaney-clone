"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Fades in child content when it scrolls into view. Respects the user's
 * prefers-reduced-motion setting. Use as a wrapper around any block.
 */
type Props = {
  children: React.ReactNode;
  /** Additional Tailwind/CSS classes applied to the wrapper. */
  className?: string;
  /** Delay in ms before the transition starts once the element enters view. */
  delay?: number;
  /** Distance in px to translate up from. Defaults to 24. */
  distance?: number;
  /** How much of the element must be visible (0–1) before revealing. */
  threshold?: number;
};

export default function Reveal({
  children,
  className = "",
  delay = 0,
  distance = 24,
  threshold = 0.15,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Respect reduced-motion
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setVisible(true);
      return;
    }

    const node = ref.current;
    if (!node) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin: "0px 0px -60px 0px" },
    );

    io.observe(node);
    return () => io.disconnect();
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translate3d(0,0,0)" : `translate3d(0,${distance}px,0)`,
        transition: `opacity 700ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms, transform 800ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}
