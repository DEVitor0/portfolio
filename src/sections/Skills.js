import { h } from "../lib/html.js";
import { Title } from "../components/Title.js";
import { Marquee } from "../components/Marquee.js";

export function Skills() {
  const G = [
    ["Linguagens", ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3"]],
    [
      "Frameworks e bibliotecas",
      ["React", "Next.js", "Redux Toolkit", "Tailwind CSS", "Material UI"],
    ],
    ["Animação e visualização", ["Framer Motion", "Three.js", "Chart.js"]],
    [
      "Testes e qualidade",
      ["Jest", "React Testing Library", "Vitest", "Playwright"],
    ],
    ["Integração e dados", ["REST APIs", "GraphQL", "Postman"]],
    [
      "Ferramentas e infraestrutura",
      ["Git e GitHub", "GitLab CI", "Docker", "Vite", "Storybook"],
    ],
  ];
  return h`<section id="skills" className="sec sheet bl" style=${{ marginTop: 0, borderRadius: 0, padding: "clamp(5rem,12vh,8rem) 0", overflow: "hidden" }}><div style=${{ padding: "0 var(--px)", marginBottom: "6vh" }}><span className="kk">competências</span><${Title}>Ferramentas do ofício<//></div>
 <${Marquee} items=${["JavaScript", "TypeScript", "React", "Next.js", "Redux Toolkit", "Jest"]} dir=${1}/><${Marquee} items=${["HTML5", "CSS3", "Tailwind CSS", "Framer Motion", "Three.js", "Playwright"]} dir=${-1}/>
 <div className="sk">${G.map(([t, l]) => h`<div key=${t}><h3>${t}</h3><ul>${l.map((x) => h`<li key=${x}>${x}</li>`)}</ul></div>`)}</div></section>`;
}
