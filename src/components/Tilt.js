import { useRef } from "react";
import { h } from "../lib/html.js";

export function Tilt({ c, children }) {
  const r = useRef();
  return h`<figure ref=${r} className=${c} onPointerMove=${(e) => {
    const b = r.current.getBoundingClientRect();
    r.current.style.transform = `perspective(800px) rotateY(${((e.clientX - b.left) / b.width - 0.5) * 14}deg) rotateX(${-((e.clientY - b.top) / b.height - 0.5) * 14}deg)`;
  }} onPointerLeave=${() => (r.current.style.transform = "")}>${children}</figure>`;
}
