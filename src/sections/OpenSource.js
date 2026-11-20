import { useEffect, useRef } from "react";
import { h } from "../lib/html.js";
import { rm, cl } from "../lib/utils.js";
import { Title } from "../components/Title.js";
import { Mag } from "../components/Mag.js";

export function OpenSource() {
  const r = useRef(),
    n = useRef();
  useEffect(() => {
    const out = n.current,
      el = out.parentElement;
    if (rm) {
      out.textContent = 40;
      return;
    }
    let id,
      go = false;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !go) {
          go = true;
          io.disconnect();
          const t0 = performance.now(),
            st = (t) => {
              const k = cl((t - t0) / 2200);
              out.textContent = Math.round(40 * (1 - Math.pow(1 - k, 4)));
              if (k < 1) id = requestAnimationFrame(st);
            };
          id = requestAnimationFrame(st);
        }
      },
      { threshold: 0.5 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(id);
    };
  }, []);
  return h`<section id="opensource" ref=${r} className="sec sheet" style=${{ marginTop: 0, borderRadius: 0 }}><span className="kk">open source</span><div className="os"><div className="big" aria-hidden="true"><span ref=${n}>0</span>M+</div>
 <div><${Title}>Nodemailer<//><p>Contribuo com o Nodemailer, biblioteca com mais de 40 milhões de downloads semanais no npm.</p><br/><${Mag} className="btn f" href="https://github.com/nodemailer/nodemailer/commits?author=DEVitor0" target="_blank" rel="noopener">Ver meus commits<//></div></div></section>`;
}
