/* eslint-disable @next/next/no-img-element */
import { useRef } from "react";

import { useInView } from "framer-motion";

import MyPhoto from "../../../public/assets/myPhoto.png";

import {
  AboutCustom,
  Container,
  ContainerAbout,
  ContainerImage,
  Description,
  Title,
} from "./styles";

export const About = () => {
  const containerRef = useRef<null | HTMLDivElement>(null);
  const isInView = useInView(containerRef);

  return (
    <AboutCustom id="about">
      <Container
        ref={containerRef}
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s",
        }}
      >
        <ContainerAbout>
          <Title>Sobre</Title>
          <Description>
            Meu nome é Lucas Costa, sou graduado em engenharia de software pela
            faculdade EAD unicesumar e atuo como desenvolvedor front-end. Estou
            sempre em busca de aprimorar meus conhecimentos e agregar um maior
            valor as pessoas por meio da tecnologia!
            <br />
            <br />
            Por isso decidi iniciar meu empreendimento e poder ajudar a todos
            que necessitam entrar no mundo digital através de sites ou
            e-commerce, utilizando das melhores tecnologias para a criação de
            sites: HTML, CSS, JavaScript, ReactJs, Typescript e e-commerce com a
            plataforma Nuvemshop.
          </Description>
        </ContainerAbout>
        <ContainerImage>
          <img src={MyPhoto.src} alt="Lucas Costa" className="image" />
        </ContainerImage>
      </Container>
    </AboutCustom>
  );
};
