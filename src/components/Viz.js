import { useRef } from "react";
import { h } from "../lib/html.js";
import { rm, cl, lerp } from "../lib/utils.js";
import { useTick } from "../hooks/useTick.js";

const ND = [
    [300, 130],
    [140, 290],
    [300, 290],
    [460, 290],
    [80, 450],
    [200, 450],
    [400, 450],
    [520, 450],
  ],
  PAR = [
    [0, 1],
    [0, 2],
    [0, 3],
    [1, 4],
    [1, 5],
    [3, 6],
    [3, 7],
  ],
  OFF = [
    [0, -60, -8],
    [-90, -40, 14],
    [60, -90, -10],
    [120, -30, 9],
    [-70, 60, -12],
    [40, 90, 16],
    [-30, 70, -9],
    [90, 40, 11],
  ],
  W0 = [260, 180, 300, 220, 140, 280, 200, 250, 170, 230];
export function Viz() {
  const r = useRef(),
    C = useRef({});
  const q = (k) => C.current[k] || (C.current[k] = r.current.querySelector(k)),
    A = (k, n, v) => q(k).setAttribute(n, v);
  useTick((t, sv) => {
    const el = r.current;
    if (!el) return;
    const u = sv.u,
      st = cl(Math.round(u) - 1, 0, 3),
      lp = cl(u - (st + 0.5)),
      ts = rm ? 0 : t * 0.001,
      E = (x) => x * x * (3 - 2 * x);
    if (C.current.st !== st) {
      C.current.st = st;
      el.querySelectorAll(".sc").forEach(
        (g, i) => (g.style.opacity = i === st ? 1 : 0),
      );
    }
    if (st === 0) {
      const P = [
          [190, 150],
          [410, 200],
          [220, 380],
          [320, 305],
        ],
        p = cl(lp / 0.7) * 3,
        i = Math.min(2, Math.floor(p)),
        f = E(p - i),
        x = lerp(P[i][0], P[i + 1][0], f),
        y = lerp(P[i][1], P[i + 1][1], f),
        k = E(cl((lp - 0.65) / 0.25));
      A("#lens", "transform", `translate(${x} ${y})`);
      for (let j = 0; j < 10; j++)
        q("#ln" + j).style.fillOpacity =
          j === 5
            ? 0
            : Math.abs(140 + j * 32 + 5 - y) < 26 && lp < 0.7
              ? 0.3
              : 0;
      q("#flag").style.opacity = k * 0.95;
      A(
        "#brk",
        "transform",
        `translate(310 305) scale(${1 + (1 - k) * 1.2}) translate(-310 -305)`,
      );
      q("#brk").style.opacity = cl((lp - 0.55) / 0.2);
    }
    if (st === 1) {
      const fl = q("#flow"),
        L = fl.getTotalLength(),
        pg = cl(lp / 0.85),
        pt = fl.getPointAtLength(L * pg);
      A("#flow", "stroke-dashoffset", 1 - pg);
      A("#pk", "cx", pt.x);
      A("#pk", "cy", pt.y);
      A("#spin", "transform", `translate(180 205) rotate(${ts * 240})`);
      [0, 1, 2, 3].forEach(
        (i) =>
          (q("#sr" + i).style.fill =
            `rgba(255,255,255,${pg * 3 >= i - 0.05 ? (i === 3 ? 0.2 : 0.12) : 0})`),
      );
      A(
        "#err",
        "transform",
        `translate(${420 + (pg > 0.62 && pg < 0.72 ? Math.sin(ts * 60) * 5 : 0)} 405)`,
      );
    }
    if (st === 2) {
      const e = E(cl(lp / 0.5)),
        pr = cl((lp - 0.65) / 0.3),
        lit = { 5: 0, 1: 0.33, 0: 0.66 };
      ND.forEach(([x, y], i) => {
        const o = OFF[i];
        A(
          "#nd" + i,
          "transform",
          `translate(${x + (1 - e) * o[0]} ${y + (1 - e) * o[1]}) rotate(${(1 - e) * o[2]})`,
        );
        q("#nr" + i).style.fill =
          `rgba(255,255,255,${lit[i] !== undefined && pr > lit[i] ? 0.38 : 0.1})`;
      });
      PAR.forEach((_, i) =>
        A("#ed" + i, "stroke-dashoffset", 1 - cl((lp - 0.4) / 0.25)),
      );
      const k = (ts * 0.8) % 1;
      A("#rp", "r", 22 + k * 70);
      q("#rp").style.opacity = pr > 0 ? 1 - k : 0;
    }
    if (st === 3) {
      const e = E(cl(lp / 0.85)),
        H0 = [30, 45, 35, 55, 40, 60],
        H1 = [90, 130, 165, 195, 225, 260],
        tp = [];
      A("#gv", "stroke-dashoffset", 691.15 * (1 - 0.94 * e));
      A("#orb", "cx", 190 + 140 * Math.cos(ts * 1.2));
      A("#orb", "cy", 300 + 140 * Math.sin(ts * 1.2));
      for (let i = 0; i < 6; i++) {
        const h2 = lerp(H0[i], H1[i], E(cl(lp / 0.8 - i * 0.06)));
        A("#bb" + i, "y", 440 - h2);
        A("#bb" + i, "height", h2);
        tp.push(
          `${353 + i * 38},${440 - h2 + (1 - e) * Math.sin(ts * 3 + i * 2) * 12}`,
        );
      }
      A("#tr", "points", tp.join(" "));
    }
  });
  return h`<svg className="viz" ref=${r} viewBox="0 0 600 600" aria-hidden="true">
 <g className="vr1"><circle className="o o3" cx="300" cy="300" r="286" strokeDasharray="2 10"/><circle className="o o3" cx="300" cy="14" r="5"/></g>
 <g className="vr2"><circle className="o o3" cx="300" cy="300" r="238" strokeDasharray="6 14"/><circle className="f" cx="538" cy="300" r="4" opacity=".6"/></g>
 <g className="sc"><rect className="o o3" x="100" y="110" width="400" height="380" rx="18"/>
 ${W0.map((w, j) => h`<rect key=${j} id=${"ln" + j} className="ln" x="130" y=${140 + j * 32} width=${w} height="10" rx="5"/>`)}
 <rect id="flag" className="f" x="130" y="300" width="280" height="10" rx="5" opacity="0"/>
 <path id="brk" className="o" d="M118 298V288H128M412 288H422V298M422 312V322H412M128 322H118V312"/>
 <g id="lens"><circle className="o" r="48" style=${{ fill: "rgba(255,255,255,.08)", strokeWidth: 3 }}/><path className="o" d="M34 34L68 68" style=${{ strokeWidth: 6 }}/></g></g>
 <g className="sc">
 ${[
   [80, 110],
   [320, 110],
   [320, 330],
   [80, 330],
 ].map(
   ([x, y], i) =>
     h`<g key=${i}><rect id=${"sr" + i} className="o" x=${x} y=${y} width="200" height="150" rx="12"/><path className="o o3" d=${`M${x} ${y + 28}H${x + 200}`}/></g>`,
 )}
 <g id="spin" transform="translate(180 205)"><path className="o" d="M0 -26A26 26 0 1 1 -26 0"/></g>
 <rect className="o o5" x="350" y="160" width="140" height="70" rx="8" strokeDasharray="6 6"/><path className="o o5" d="M385 195H455"/>
 <g id="err" transform="translate(420 405)"><circle className="o" r="28"/><path className="o" d="M-12 -12L12 12M12 -12L-12 12"/></g>
 <rect className="o" x="100" y="366" width="84" height="60" rx="6"/><path className="o o5" d="M200 374H262M200 394H250M200 414H258M100 446H260"/>
 <path id="flow" className="o" d="M180 205H420V405H180" pathLength="1" strokeDasharray="1" strokeDashoffset="1" style=${{ strokeWidth: 3 }}/><circle id="pk" className="f" r="9" cx="180" cy="205"/></g>
 <g className="sc">
 ${PAR.map(([p, c], i) => h`<path key=${i} id=${"ed" + i} className="o o5" pathLength="1" strokeDasharray="1" strokeDashoffset="1" d=${`M${ND[p][0]} ${ND[p][1] + 26}C${ND[p][0]} ${ND[p][1] + 80} ${ND[c][0]} ${ND[c][1] - 80} ${ND[c][0]} ${ND[c][1] - 26}`}/>`)}
 ${ND.map((n, i) => h`<g key=${i} id=${"nd" + i}><rect id=${"nr" + i} className="o" x="-52" y="-26" width="104" height="52" rx="10"/><path className="o o5" d="M-52 -8H52M-36 8H10"/></g>`)}
 <circle id="rp" className="o" cx="200" cy="450" r="22" style=${{ opacity: 0 }}/></g>
 <g className="sc"><circle className="o o3" cx="190" cy="300" r="110" style=${{ strokeWidth: 14 }}/>
 <circle id="gv" className="o" cx="190" cy="300" r="110" transform="rotate(-90 190 300)" strokeDasharray="691.15" strokeDashoffset="691.15" style=${{ strokeWidth: 14, strokeLinecap: "butt" }}/>
 <circle id="orb" className="f" r="6" cx="330" cy="300"/><path className="o o3" d="M330 440H580"/>
 ${[0, 1, 2, 3, 4, 5].map((i) => h`<rect key=${i} id=${"bb" + i} className="o" x=${340 + i * 38} y="410" width="26" height="30" rx="4" style=${{ fill: i === 5 ? "#fff" : "rgba(255,255,255,.18)" }}/>`)}
 <polyline id="tr" className="o" points="" style=${{ strokeWidth: 3 }}/></g></svg>`;
}
