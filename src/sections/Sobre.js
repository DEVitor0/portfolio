import { useState, useEffect, useRef } from "react";
import { h } from "../lib/html.js";
import { rm, cl } from "../lib/utils.js";
import { S } from "../lib/motion.js";
import { useTick } from "../hooks/useTick.js";
import { Title } from "../components/Title.js";

export function Sobre() {
  const I = [
      [
        "Arquitetura de componentes",
        "Composição, reutilização e organização de interfaces.",
      ],
      [
        "Integração de APIs",
        "Consumo de serviços REST, tratamento de respostas e dados assíncronos.",
      ],
      [
        "Gerenciamento de estado",
        "Context API, sincronização e atualização de dados.",
      ],
      [
        "Interfaces responsivas",
        "Adaptação a diferentes dispositivos e padrões de acessibilidade.",
      ],
      [
        "Testes automatizados",
        "Testes de componentes, funcionalidades e prevenção de regressões.",
      ],
      [
        "Performance e otimização",
        "Eficiência de renderização, carregamento e experiência de uso.",
      ],
      [
        "Git e colaboração",
        "Versionamento, Pull Requests, revisão de código e projetos open source.",
      ],
    ],
    sr = useRef(),
    hr = useRef(),
    [on, setOn] = useState(rm);
  useEffect(() => {
    if (rm) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setOn(true);
          io.disconnect();
        }
      },
      { threshold: 0.35 },
    );
    io.observe(hr.current);
    return () => io.disconnect();
  }, []);
  useTick(() => {
    if (sr.current && !rm) {
      const k = cl(S.st / (S.vh * 0.9)),
        rx = 4 + 46 * k,
        ry = 36 + 84 * k;
      sr.current.style.borderRadius = `${rx}% ${rx}% 0 0 / ${ry}px ${ry}px 0 0`;
    }
  });
  const wd2 = (t, c, o) =>
    t
      .split(" ")
      .map(
        (w, i) =>
          h`<span key=${c + i} className=${"mk " + c}><span style=${{ "--i": o + i }}>${w}</span></span>`,
      );
  return h`<section id="sobre" ref=${sr} className="sec sheet"><span className="kk">sobre</span>
 <div className="sg"><div className="l"><h2 ref=${hr} className=${"ti sh2" + (on ? " in" : "")} aria-label="Quero construir produtos, não apenas implementar interfaces.">${wd2("Quero construir", "", 0)}${wd2("produtos,", "pr", 2)}${wd2("não apenas implementar interfaces.", "mu", 3)}</h2>
 <p className="sp">Busco participar das decisões técnicas e da qualidade do que é entregue, conectando visão de produto e engenharia para transformar necessidades reais em aplicações estruturadas, confiáveis e preparadas para evoluir.</p></div>
 <svg className=${"vn" + (on ? " in" : "")} viewBox="0 0 400 300" aria-hidden="true"><g className="va"><circle cx="150" cy="150" r="100" fill="none" stroke="#0A0C14" strokeWidth="2"/><circle cx="150" cy="150" r="118" fill="none" stroke="#0A0C14" strokeWidth="1" strokeDasharray="2 8" opacity=".5"/></g><g className="vb"><circle cx="250" cy="150" r="100" fill="none" stroke="#0A0C14" strokeWidth="2"/><circle cx="250" cy="150" r="118" fill="none" stroke="#0A0C14" strokeWidth="1" strokeDasharray="2 8" opacity=".5"/></g><path className="lens" d="M200 63.4A100 100 0 0 1 200 236.6A100 100 0 0 1 200 63.4Z" fill="#1331F0"/></svg></div>
 <div className="g2"><div className="a"><${Title}>Engenharia de software na prática.<//><p>Trabalho com React, Next.js e TypeScript, atuando na implementação, integração e manutenção de aplicações. Tenho facilidade para compreender bases de código existentes, investigar problemas e desenvolver soluções de forma independente.</p></div>
 <ul>${I.map(([b, t]) => h`<li key=${b}><b>${b}</b><span>${t}</span></li>`)}</ul></div></section>`;
}
