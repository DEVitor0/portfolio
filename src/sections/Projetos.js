import { useRef } from "react";
import { h } from "../lib/html.js";
import { cl } from "../lib/utils.js";
import { S } from "../lib/motion.js";
import { useTick } from "../hooks/useTick.js";
import { PRJ } from "../data/projects.js";
import { Title } from "../components/Title.js";

export function Projetos() {
  const o = useRef(),
    t = useRef();
  useTick(() => {
    const O = o.current,
      T = t.current;
    if (!O) return;
    if (S.vw <= 1100) {
      O.style.height = "auto";
      T.style.transform = "";
      return;
    }
    const dist = T.scrollWidth - S.vw;
    O.style.height = dist + S.vh + "px";
    const b = O.getBoundingClientRect(),
      q = cl(-b.top / Math.max(1, b.height - S.vh));
    T.style.transform = `translateX(${-q * dist}px)`;
    [...T.children].forEach((c) => {
      const r = c.getBoundingClientRect();
      c.style.setProperty(
        "--o",
        cl((r.left + r.width / 2 - S.vw / 2) / (S.vw * 0.6), -1, 1),
      );
    });
  });
  return h`<section id="projetos" ref=${o} className="sec sheet pp" style=${{ padding: 0 }}><div className="pw">
 <div className="trk" ref=${t}><div className="hdp"><span className="kk">projetos</span><${Title}>Trabalhos selecionados<//></div>${PRJ.map(
   (
     p,
     i,
   ) => h`<article className="card" key=${i}><div><span className="ix" aria-hidden="true">0${i + 1}</span><h3>${p.t}</h3><div className="dt">${p.d}</div><p>${p.p}</p><div className="tg">${p.tg.map((x) => h`<span key=${x}>${x}</span>`)}</div><a className="btn" href=${p.l} target="_blank" rel="noopener">${p.lt}</a></div>
 <div className="fr" style=${{ "--o": 0 }}><div className="bar" aria-hidden="true"><i></i><i></i><i></i></div><img src=${p.i} alt=${p.a} loading="lazy"/></div></article>`,
 )}</div></div></section>`;
}
