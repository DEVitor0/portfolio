import { useRef } from "react";
import { h } from "../lib/html.js";
import { cl } from "../lib/utils.js";
import { S } from "../lib/motion.js";
import { useTick } from "../hooks/useTick.js";
import { Title } from "../components/Title.js";

export function Experiencia() {
  const r = useRef();
  useTick(() => {
    if (!r.current) return;
    const b = r.current.getBoundingClientRect();
    r.current.style.setProperty("--p", cl((S.vh * 0.7 - b.top) / b.height));
  });
  return h`<section id="experiencia" className="sec sheet"><span className="kk">experiência profissional</span><${Title}>Onde trabalhei<//>
 <div className="tl" ref=${r}><div className="it"><div className="d">jul. de 2024 – jul. de 2025<br/>1 ano 1 mês</div><div className="r"><h3>Técnico em redes e infraestrutura (N1)</h3><p>Lips Tecnologia, estágio<br/>Jacareí, híbrido</p></div><ul><li>Administração de usuários, grupos e permissões no Active Directory, com GPOs para padronizar configurações e acessos.</li><li>Configuração de e-mail em nuvem, domínios, regras de encaminhamento e filtros.</li><li>Configuração de equipamentos MikroTik, redes segmentadas por perfil e Wi-Fi corporativo.</li><li>Suporte técnico N1 em conectividade, sistemas operacionais e estações de trabalho.</li></ul></div>
 <div className="it"><div className="d">mar. de 2023 – jun. de 2024<br/>1 ano 4 meses</div><div className="r"><h3>Técnico em infraestrutura e suporte de TI</h3><p>Prefeitura Municipal de Jacareí, estágio<br/>Jacareí, presencial</p></div><ul><li>Suporte técnico a usuários, instalação e atualização de software e configuração de dispositivos.</li><li>Manutenção preventiva e corretiva de computadores, impressoras e equipamentos de rede, com cabeamento e backup de dados.</li></ul></div></div></section>`;
}
