import { useEffect, useRef } from "react";
import { ticks } from "../lib/motion.js";

export function useTick(fn) {
  const r = useRef(fn);
  r.current = fn;
  useEffect(() => {
    const f = (t, s) => r.current(t, s);
    ticks.add(f);
    return () => ticks.delete(f);
  }, []);
}
