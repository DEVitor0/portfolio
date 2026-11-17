import React, { useState } from "react";
import { h } from "../lib/html.js";
import { NAV } from "../data/navigation.js";

export function Nav() {
  const [o, setO] = useState(false);
  return h`<${React.Fragment}><nav aria-label="Principal"><a className="br" href="#topo">Vitor Moreira</a>${NAV.map(([t, i]) => h`<a key=${i} className="l" href=${"#" + i}>${t}</a>`)}<a className="cta" href="#contato">Contato</a><button id="mt" aria-label=${o ? "Fechar menu" : "Abrir menu"} aria-expanded=${o} onClick=${() => setO(!o)}>${o ? "✕" : "☰"}</button></nav>
 <div className=${"mo" + (o ? " open" : "")} onClick=${() => setO(false)} aria-hidden=${!o}>${[...NAV, ["Certificados", "certificados"], ["Contato", "contato"]].map(([t, i]) => h`<a key=${i} href=${"#" + i} tabIndex=${o ? 0 : -1}>${t}</a>`)}</div><//>`;
}
