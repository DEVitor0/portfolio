import { useState, useEffect, useRef } from "react";
import { h } from "../lib/html.js";

export function Title({ children, cls = "" }) {
  const r = useRef(),
    [on, set] = useState(false);
  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          set(true);
          io.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    io.observe(r.current);
    return () => io.disconnect();
  }, []);
  return h`<h2 ref=${r} className=${"ti " + cls + (on ? " in" : "")} aria-label=${children}>${children.split(" ").map((w, i) => h`<span key=${i} className="mk" aria-hidden="true"><span style=${{ "--i": i }}>${w}</span></span>`)}</h2>`;
}
