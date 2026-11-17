import { useRef } from "react";
import { h } from "../lib/html.js";
import { rm, lerp } from "../lib/utils.js";
import { S } from "../lib/motion.js";
import { useTick } from "../hooks/useTick.js";

export function Mag({ as = "a", className, children, ...p }) {
  const r = useRef(),
    m = useRef([0, 0]);
  useTick(() => {
    const e = r.current;
    if (!e || rm || S.vw < 900) return;
    const b = e.getBoundingClientRect(),
      c = m.current,
      cx = b.left + b.width / 2 - c[0],
      cy = b.top + b.height / 2 - c[1],
      dx = S.px - cx,
      dy = S.py - cy,
      k = Math.hypot(dx, dy) < 150 ? 0.32 : 0;
    c[0] = lerp(c[0], dx * k, 0.14);
    c[1] = lerp(c[1], dy * k, 0.14);
    e.style.transform = `translate(${c[0]}px,${c[1]}px)`;
  });
  return h`<${as} ref=${r} className=${className} ...${p}>${children}<//>`;
}
