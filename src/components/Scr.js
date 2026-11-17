import { useState, useEffect } from "react";
import { rm } from "../lib/utils.js";

export function Scr({ t }) {
  const [s, set] = useState(rm ? t : "");
  useEffect(() => {
    if (rm) return;
    let i = 0;
    const id = setInterval(() => {
      i++;
      set(
        t
          .split("")
          .map((c, k) =>
            k < i / 1.4 || c === " " || c === "/"
              ? c
              : "ABCDEFGHJKLMNPQRSTUVWXYZ#%"[(Math.random() * 26) | 0],
          )
          .join(""),
      );
      if (i > t.length * 1.4) clearInterval(id);
    }, 28);
    return () => clearInterval(id);
  }, [t]);
  return s || t;
}
