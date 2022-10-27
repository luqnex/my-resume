import { useEffect, useRef } from "react";

import { useInView } from "framer-motion";

import LogoReact from "../../../public/assets/react.png";

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
        <Title>Experiencia</Title>

        <ContainerCard>
          <CardExpertise
            image={LogoReact}
            title="React Js"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, ex impedit! Mollitia et quod necessitatibus aliquam quidem."
          />

          <CardExpertise
            image={LogoReact}
            title="React Js"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, ex impedit! Mollitia et quod necessitatibus aliquam quidem."
          />

          <CardExpertise
            image={LogoReact}
            title="React Js"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, ex impedit! Mollitia et quod necessitatibus aliquam quidem."
          />

          <CardExpertise
            image={LogoReact}
            title="React Js"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, ex impedit! Mollitia et quod necessitatibus aliquam quidem."
          />
        </ContainerCard>
      </Container>
    </ExpertiseCustom>
  );
};
