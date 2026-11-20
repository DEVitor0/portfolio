import React from "react";
import { h } from "./lib/html.js";
import { useReady } from "./hooks/useReady.js";
import { Cursor } from "./components/Cursor.js";
import { Nav } from "./components/Nav.js";
import { Hero } from "./sections/Hero.js";
import { Journey } from "./sections/Journey.js";
import { Sobre } from "./sections/Sobre.js";
import { Projetos } from "./sections/Projetos.js";
import { OpenSource } from "./sections/OpenSource.js";
import { Skills } from "./sections/Skills.js";
import { Experiencia } from "./sections/Experiencia.js";
import { Formacao } from "./sections/Formacao.js";
import { Certs } from "./sections/Certs.js";
import { Contato } from "./sections/Contato.js";

export function App() {
  const ready = useReady();
  return h`<${React.Fragment}><${Cursor}/><${Nav}/><main><${Hero} ready=${ready}/><${Journey}/><${Sobre}/><${Projetos}/><${OpenSource}/><${Skills}/><${Experiencia}/><${Formacao}/><${Certs}/><${Contato}/></main><//>`;
}
