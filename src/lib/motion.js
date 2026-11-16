import { cl } from "./utils.js";

export const S = {
  y: 0,
  vh: innerHeight,
  vw: innerWidth,
  px: -999,
  py: -999,
  mx: 0.5,
  my: 0.5,
  vel: 0,
  sp: 0,
  ip: 0,
  u: 0,
  jt: 99999,
  st: 99999,
  hov: false,
};
export const ticks = new Set();
export let jEl = null,
  iEl = null,
  sEl = null;
function frame(t) {
  const y = scrollY;
  S.vel = y - S.y;
  S.y = y;
  S.vh = innerHeight;
  S.vw = innerWidth;
  jEl = jEl || document.getElementById("jornada");
  iEl = iEl || document.getElementById("conceito");
  sEl = sEl || document.getElementById("sobre");
  if (sEl) S.st = sEl.getBoundingClientRect().top;
  if (jEl) {
    const b = jEl.getBoundingClientRect();
    S.sp = cl(-b.top / Math.max(1, b.height - S.vh));
    S.jt = b.top;
    jEl.style.setProperty("--cv", cl(1 - S.st / S.vh));
  }
  if (iEl) {
    const b = iEl.getBoundingClientRect();
    S.ip = cl(-b.top / Math.max(1, b.height - S.vh));
  }
  S.u = S.ip * 0.5 + S.sp * 4.5;
  ticks.forEach((f) => f(t, S));
  requestAnimationFrame(frame);
}
/** Inicia o loop de animação global e os listeners de ponteiro. */
export function startMotionLoop() {
  requestAnimationFrame(frame);
  addEventListener("pointermove", (e) => {
    S.px = e.clientX;
    S.py = e.clientY;
    S.mx = e.clientX / innerWidth;
    S.my = e.clientY / innerHeight;
  });
  addEventListener("pointerover", (e) => {
    S.hov = !!(e.target.closest && e.target.closest("a,button,figure"));
  });
}
