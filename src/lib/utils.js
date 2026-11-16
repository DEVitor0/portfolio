export const rm = matchMedia("(prefers-reduced-motion:reduce)").matches,
  cl = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v)),
  lerp = (a, b, t) => a + (b - a) * t;
