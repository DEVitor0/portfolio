import { h } from "../lib/html.js";
import { CERT } from "../data/certificates.js";
import { Title } from "../components/Title.js";
import { Tilt } from "../components/Tilt.js";

export function Certs() {
  return h`<section id="certificados" className="sec sheet" style=${{ marginTop: 0, borderRadius: 0 }}><span className="kk">certificados</span><${Title}>Aprendizado contínuo<//>
 <div className="cg">${CERT.map(([i, a, t, s, c]) => h`<${Tilt} key=${t} c=${c || ""}><img src=${i} alt=${a} loading="lazy"/><figcaption><b>${t}</b>${s}</figcaption><//>`)}</div></section>`;
}
