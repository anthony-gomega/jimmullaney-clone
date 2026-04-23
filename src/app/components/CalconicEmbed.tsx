"use client";

import { useEffect } from "react";

/**
 * Embeds a Calconic calculator by ID. The Calconic loader script scans the
 * page for any element with class "calconic-calculator" and a data-calculatorid
 * attribute and mounts the calculator inside it. Loaded once; reused across
 * any page on the site.
 *
 * The calculator's actual logic and config live in the firm's Calconic
 * account. The widget's visual styling comes from Calconic, not from this
 * site's design system.
 */
export default function CalconicEmbed({
  calculatorId,
}: {
  calculatorId: string;
}) {
  useEffect(() => {
    // Avoid double-injection on client-side navigations.
    if (document.getElementById("calconic_")) return;

    const s = document.createElement("script");
    s.id = "calconic_";
    s.type = "text/javascript";
    s.async = true;
    s.dataset.calconic = "true";
    s.src = "https://app.calconic.com/static/js/calconic.min.js";
    const first = document.getElementsByTagName("script")[0];
    if (first && first.parentNode) {
      first.parentNode.insertBefore(s, first);
    } else {
      document.head.appendChild(s);
    }
  }, []);

  return (
    <div className="calconic-calculator" data-calculatorid={calculatorId} />
  );
}
