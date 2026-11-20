import { h } from "../lib/html.js";
import { Title } from "../components/Title.js";
import { Mag } from "../components/Mag.js";
import { Halftone } from "../components/Halftone.js";

export function Contato() {
  return h`<section id="contato" className="sec bl"><div className="hbg" aria-hidden="true"><${Halftone} a=${0.8}/><div className="ping"><i></i><i></i><i></i><b></b></div></div><span className="kk" style=${{ color: "rgba(255,255,255,.7)" }}>contato</span><${Title}>Vamos conversar.<//>
 <${Mag} className="ml" href="mailto:devitormoreira@gmail.com">devitormoreira@gmail.com<//>
 <div><${Mag} className="btn f" href="https://github.com/DEVitor0" target="_blank" rel="noopener">GitHub<//><${Mag} className="btn" href="https://www.linkedin.com/in/devitor0/" target="_blank" rel="noopener">LinkedIn<//></div><footer>© 2026 Vitor Moreira</footer></section>`;
}
