import { useRef } from "react";

import { useInView } from "framer-motion";

import { Button, Container, MainCustom } from "./styles";

export const Main = () => {
  const containerRef = useRef<null | HTMLDivElement>(null);
  const isInView = useInView(containerRef);

  return (
    <MainCustom>
      <Container
        ref={containerRef}
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s",
        }}
      >
        <h4>Olá, eu sou Lucas</h4>
        <h1>
          Eu crio aplicações web <span>front-end</span>
        </h1>
        <p>Utilizando das melhores tecnologias do mercado</p>
        <Button>Entrar em contato</Button>
      </Container>
    </MainCustom>
  );
};
