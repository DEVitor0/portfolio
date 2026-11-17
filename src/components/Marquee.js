import { useRef } from "react";
import { h } from "../lib/html.js";
import { rm } from "../lib/utils.js";
import { useTick } from "../hooks/useTick.js";

export function Marquee({ items, dir }) {
  const r = useRef(),
    x = useRef(0);
  useTick((t, s) => {
    const e = r.current;
    if (!e) return;
    const w = e.scrollWidth / 2;
    x.current =
      (((x.current + dir * (rm ? 0 : 0.8 + Math.abs(s.vel) * 0.7)) % w) + w) %
      w;
    e.style.transform = `translateX(${-x.current}px)`;
  });
  return h`<div className="mq" ref=${r} aria-hidden="true">${items.concat(items, items, items).map((t, i) => h`<span key=${i}>${t}</span>`)}</div>`;
}
