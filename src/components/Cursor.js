import { useRef } from "react";
import { h } from "../lib/html.js";
import { lerp } from "../lib/utils.js";
import { S } from "../lib/motion.js";
import { useTick } from "../hooks/useTick.js";

export function Cursor() {
  const r = useRef(),
    c = useRef([0, 0]);
  useTick(() => {
    const e = r.current;
    if (!e) return;
    c.current[0] = lerp(c.current[0], S.px, 0.2);
    c.current[1] = lerp(c.current[1], S.py, 0.2);
    e.style.transform = `translate(${c.current[0]}px,${c.current[1]}px) scale(${S.hov ? 2.4 : 1})`;
  });
  return h`<div ref=${r} className="cur" aria-hidden="true"></div>`;
}
