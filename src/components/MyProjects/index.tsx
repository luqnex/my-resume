import { useRef } from "react";

import { useInView } from "framer-motion";

import { CardProject } from "../CardProject";

import {
  Button,
  Container,
  ContainerCard,
  ContainerTitle,
  MyProjectsCustom,
  Title,
} from "./styles";

export const MyProjects = () => {
  const containerRef = useRef<null | HTMLDivElement>(null);
  const isInView = useInView(containerRef);

  return (
    <MyProjectsCustom id="projects">
      <Container
        ref={containerRef}
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s",
        }}
      >
        <ContainerTitle>
          <Title>Meus projetos</Title>
          <a href="https://github.com/luqnex" target="_blank" rel="noreferrer">
            <Button>Github</Button>
          </a>
        </ContainerTitle>

        <ContainerCard>
          <CardProject
            link="#"
            title="React Js"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia obcaecati"
          />

          <CardProject
            link="#"
            title="React Js"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia obcaecati"
          />

          <CardProject
            link="#"
            title="React Js"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia obcaecati"
          />
        </ContainerCard>
      </Container>
    </MyProjectsCustom>
  );
};
