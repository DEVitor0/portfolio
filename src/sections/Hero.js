import { useRef } from "react";
import { h } from "../lib/html.js";
import { rm, cl } from "../lib/utils.js";
import { useTick } from "../hooks/useTick.js";
import { Mag } from "../components/Mag.js";
import { Halftone } from "../components/Halftone.js";

export function Hero({ ready }) {
  const r = useRef();
  useTick((t, s) => {
    const el = r.current;
    if (!el) return;
    [...el.querySelectorAll(".ch")].forEach((c, i) => {
      if (!ready) return;
      const b = c.getBoundingClientRect();
      let k = 0;
      if (!rm) {
        if (s.vw > 900) {
          k = cl(
            1 -
              Math.hypot(
                s.px - (b.left + b.width / 2),
                s.py - (b.top + b.height / 2),
              ) /
                340,
          );
        } else k = 0.5 + 0.5 * Math.sin(t * 0.002 + i * 0.7);
      }
      c.style.fontVariationSettings = `"wdth" ${62 + k * 50},"wght" ${520 + k * 380}`;
    });
  });
  const W = (w, o) =>
    h`<span className="ln" aria-hidden="true">${[...w].map((c, i) => h`<span key=${i} className="ch" style=${{ "--i": i + o }}>${c}</span>`)}</span>`;
  return h`<section id="topo" className=${"sec" + (ready ? " rdy" : "")} ref=${r}>
 <div className="hbg" aria-hidden="true"><${Halftone}/><svg className="hring" viewBox="0 0 400 400"><g fill="none" stroke="#fff"><circle cx="200" cy="200" r="196" stroke-width="7" stroke-dasharray="1 11" opacity=".6"/><g className="r1"><circle cx="200" cy="200" r="150" stroke-width="1.2" stroke-dasharray="3 9"/><circle cx="200" cy="52" r="5" fill="#fff"/></g><g className="r2"><circle cx="200" cy="200" r="108" stroke-width="1.2"/><circle cx="308" cy="200" r="4" fill="#fff"/></g><circle cx="200" cy="200" r="66" stroke-width="1.2" stroke-dasharray="2 6"/></g></svg></div>
 <h1 className="nm" aria-label="Vitor Moreira">${W("VITOR", 0)}${W("MOREIRA", 5)}</h1>
 <div className="hb"><div className="kick"><strong>Desenvolvedor front-end</strong>Interfaces em React, Next.js e TypeScript, construídas com atenção a design, desempenho e manutenibilidade.</div><div className="hr"><div><${Mag} className="btn f" href="#projetos">Ver projetos<//><${Mag} className="btn" href="mailto:devitormoreira@gmail.com">devitormoreira@gmail.com<//></div><div className="sc" aria-hidden="true"><i></i>role para atravessar a operação</div></div></div></section>`;
}
