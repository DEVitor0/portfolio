import { useState, useEffect, useRef } from "react";
import { h } from "../lib/html.js";

import { Title } from "../components/Title.js";

export function Formacao() {
  const r = useRef(),
    [on, set] = useState(false);
  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          set(true);
          io.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    io.observe(r.current);
    return () => io.disconnect();
  }, []);
  const cap = h`<svg viewBox="0 0 120 90" aria-hidden="true"><path d="M26 44v22c0 9 68 9 68 0V44L60 58z" fill="#0A0C14"/><path d="M60 8 116 30 60 52 4 30z" fill="#1331F0"/><path d="M110 32v34" stroke="#0A0C14" stroke-width="3"/><circle cx="110" cy="70" r="5" fill="#0A0C14"/></svg>`;
  return h`<section id="formacao" ref=${r} className=${"sec sheet pp fm" + (on ? " in" : "")} style=${{ marginTop: 0, borderRadius: 0 }}>
 ${[8, 27, 55, 76, 92].map((l, i) => h`<span key=${i} className="fc" aria-hidden="true" style=${{ left: l + "%", "--t": 9 + i * 1.7 + "s", "--dl": -i * 2.1 + "s", "--r0": i * 40 - 60 + "deg", "--s": 46 + (i % 3) * 16 + "px" }}>${cap}</span>`)}
 <span className="kk">formação acadêmica</span><${Title}>Onde estudei<//>
 <div className="dipw" aria-hidden="true"><svg viewBox="0 0 180 120"><rect x="22" y="14" width="136" height="92" rx="6" fill="#fff" stroke="#0A0C14" stroke-width="3"/><rect x="10" y="8" width="20" height="104" rx="10" fill="#F2F4F8" stroke="#0A0C14" stroke-width="3"/><rect x="150" y="8" width="20" height="104" rx="10" fill="#F2F4F8" stroke="#0A0C14" stroke-width="3"/><path d="M48 44H132M48 60H120M48 76H100" stroke="#0A0C14" stroke-width="3" stroke-linecap="round"/><path d="M122 96l-6 18 14-8 14 8-6-18" fill="#1331F0"/><circle cx="130" cy="84" r="14" fill="#1331F0"/></svg></div>
 <div className="ed"><div><i className="seal" aria-hidden="true"></i><span className="d">jul. de 2024 – dez. de 2025</span><h3>Técnico em Redes de computadores</h3><p>ETEC – Escola Técnica Estadual de São Paulo</p></div><div><i className="seal" aria-hidden="true"></i><span className="d">fev. de 2023 – dez. de 2025</span><h3>Técnico em Informática</h3><p>ITJ – Instituto de Tecnologia de Jacareí</p></div></div></section>`;
}
