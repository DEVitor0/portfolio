import React, { useState, useRef } from "react";
import { h } from "../lib/html.js";
import { cl } from "../lib/utils.js";
import { S, iEl } from "../lib/motion.js";
import { useTick } from "../hooks/useTick.js";
import { LAY } from "../data/layers.js";
import { INTRO, EMI, wd, PARTS } from "../data/journey-copy.js";
import { Halftone } from "../components/Halftone.js";
import { Scr } from "../components/Scr.js";
import { Viz } from "../components/Viz.js";

export function Journey() {
  const [a, setA] = useState(-1),
    [ix, setIx] = useState(-1),
    pr = useRef(),
    orf = useRef(-1);
  useTick(() => {
    const u = S.u,
      v = u > 0.55 && u < 4.5 ? cl(Math.round(u) - 1, 0, 3) : -1;
    if (v !== a) setA(v);
    const b = iEl && iEl.getBoundingClientRect(),
      raw = cl(S.ip) * 5;
    let n = ix;
    if (!b || b.top >= S.vh * 0.45) n = -1;
    else {
      if (n < 0) n = Math.min(4, Math.floor(raw));
      while (n < 4 && raw >= n + 1.1) n++;
      while (n > 0 && raw < n - 0.1) n--;
    }
    if (n !== ix) {
      orf.current = ix;
      setIx(n);
    }
    if (pr.current)
      [...pr.current.children].forEach((e, i) =>
        e.style.setProperty("--f", cl(S.ip * 5 - i)),
      );
  });
  const L = LAY[a];
  return h`<${React.Fragment}>
 <section id="conceito" className="sec" aria-label="Introdução"><div className="ip" style=${{ "--gx": [18, 72, 28, 78, 50][Math.max(0, ix)] + "%" }}><p className="sr-only">${INTRO}</p>
 ${PARTS.map((t, i) => h`<p key=${i} className=${"sl " + (i === ix ? "on" : i === orf.current && i < ix ? "out" : i < ix ? "gone" : "pre")} aria-hidden="true"><span className="sx">${t.split(" ").map((w, j) => h`<span key=${j} className=${"sw" + (EMI.has(wd(w)) ? " em" : "")}><span style=${{ "--i": j }}>${w}</span></span>`)}</span></p>`)}
 <div className="spg" ref=${pr} aria-hidden="true">${PARTS.map((t, i) => h`<i key=${i}></i>`)}</div></div></section>
 <section id="jornada" className="sec" aria-label="Como eu construo uma interface"><div className="pin"><div className="hbg" aria-hidden="true"><${Halftone} a=${0.5}/></div><${Viz}/>
 ${L ? h`<div className="cap" key=${"c" + a}><code><${Scr} t=${L.t}/></code><div className="nn">${L.n}</div>${L.h ? h`<h3>${L.h.split(" ").map((w, i) => h`<span key=${i} className="wm"><span style=${{ "--i": i }}>${w}</span></span>`)}</h3>` : null}<p className=${L.h ? "" : "lg"}>${L.p}</p></div>` : null}
 <div className="stp" aria-hidden="true">${LAY.map((l, i) => h`<i key=${i} className=${i === a ? "on" : ""}></i>`)}</div></div></section><//>`;
}
