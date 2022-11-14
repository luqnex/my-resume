import { useEffect, useRef } from "react";

import { useInView } from "framer-motion";

import LogoReact from "../../../public/assets/React.png";
import LogoJs from "../../../public/assets/Js.png";
import LogoNuvemShop from "../../../public/assets/NuvemShop.png";

import { CardExpertise } from "../CardExpertise";

import { Container, ContainerCard, ExpertiseCustom, Title } from "./styles";

export const Expertise = () => {
  const containerRef = useRef<null | HTMLDivElement>(null);
  const isInView = useInView(containerRef);

  return (
    <ExpertiseCustom id="expertise">
      <Container
        ref={containerRef}
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s",
        }}
      >
        <Title>Experiência</Title>

        <ContainerCard>
          <CardExpertise
            image={LogoReact}
            title="React Js"
            url="https://pt-br.reactjs.org/"
            description="Uma biblioteca JavaScript para criar interfaces de usuário. Crie views simples para cada estado na sua aplicação, e o React irá atualizar e renderizar de forma eficiente apenas os componentes necessários na medida em que os dados mudam"
          />

          <CardExpertise
            image={LogoJs}
            title="JavaScript"
            url="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript"
            description="JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web."
          />

          <CardExpertise
            image={LogoNuvemShop}
            title="Nuvemshop"
            url="https://www.nuvemshop.com.br/"
            description="A Nuvemshop é a plataforma de e-commerce líder na América Latina. Com mais de 100 mil lojas ativas, ela integra produtos, pagamentos e envios com diferentes canais de vendas, como Facebook, Instagram, marketplaces e lojas físicas."
          />
        </ContainerCard>
      </Container>
    </ExpertiseCustom>
  );
};
