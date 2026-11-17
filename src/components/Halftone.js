import { useRef } from "react";
import { h } from "../lib/html.js";
import { rm } from "../lib/utils.js";
import { useTick } from "../hooks/useTick.js";

export function Halftone({ a = 1 }) {
  const r = useRef();
  useTick((t, s) => {
    const c = r.current;
    if (!c) return;
    const bb = c.getBoundingClientRect();
    if (bb.bottom < -50 || bb.top > s.vh + 50) return;
    const W = c.clientWidth,
      H = c.clientHeight,
      d = Math.min(devicePixelRatio, 2);
    if (c.width !== Math.round(W * d) || c.height !== Math.round(H * d)) {
      c.width = Math.round(W * d);
      c.height = Math.round(H * d);
    }
    const x = c.getContext("2d"),
      ts = rm ? 0 : t,
      sp = W < 700 ? 22 : 30,
      auto = s.px < 0;
    const px = auto ? W * (0.5 + 0.35 * Math.sin(ts * 0.0004)) : s.px - bb.left,
      py = auto ? H * (0.5 + 0.3 * Math.cos(ts * 0.0006)) : s.py - bb.top;
    x.setTransform(d, 0, 0, d, 0, 0);
    x.clearRect(0, 0, W, H);
    x.fillStyle = "#fff";
    for (let yy = sp / 2; yy < H; yy += sp)
      for (let xx = sp / 2; xx < W; xx += sp) {
        const w = 0.5 + 0.5 * Math.sin(xx * 0.0065 + yy * 0.0042 - ts * 0.0009),
          k = rm ? 0 : Math.max(0, 1 - Math.hypot(xx - px, yy - py) / 260);
        x.globalAlpha = a * (0.14 + w * 0.2 + k * 0.5);
        x.beginPath();
        x.arc(xx, yy, 1 + w * 1.7 + k * 6, 0, 6.283);
        x.fill();
      }
    x.globalAlpha = 1;
  });
  return h`<canvas ref=${r}></canvas>`;
}
