import { cl } from "./utils.js";

export function reveal(W, q, from, span) {
  const n = W.length,
    pos = ((q - from) / span) * n;
  W.forEach((w, i) => {
    const k = cl((pos - i) / 2.2),
      bell = k > 0 && k < 1 ? Math.sin(k * Math.PI) : 0;
    w.style.opacity = 0.14 + 0.86 * k;
    w.style.filter = k < 1 ? `blur(${(1 - k) * 5}px)` : "none";
    w.style.transform = `translateY(${(1 - k) * 14}px) scale(${1 + bell * 0.06})`;
    w.classList.toggle("on", k > 0.95);
  });
}
