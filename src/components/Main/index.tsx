import { useRef } from "react";

import { useInView } from "framer-motion";

import { Button, Container, MainCustom } from "./styles";

export const Main = () => {
  const containerRef = useRef<null | HTMLDivElement>(null);
  const isInView = useInView(containerRef);

  return (
    <MainCustom id="home">
      <Container
        ref={containerRef}
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s",
        }}
      >
        <h4>Olá, eu sou Lucas Costa</h4>
        <h1>
          Crio aplicações <span>web</span> para acelerar o crescimento da sua
          marca no meio digital
        </h1>
        <p>
          <span>Websites</span> | <span>e-commerce</span>
        </p>
        <div>
          <a href="https://api.whatsapp.com/send?phone=5535984245628&text=Olá vim através do site, e gostaria de solicitar um orçamento!">
            <Button>Entrar em contato</Button>
          </a>
        </div>
      </Container>
    </MainCustom>
  );
};
