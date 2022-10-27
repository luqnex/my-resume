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
          <Title>Sobre mim</Title>
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            varius faucibus massa sollicitudin amet augue. Nibh metus a semper
            purus mauris duis. Lorem eu neque, tristique quis duis. Nibh
            scelerisque ac adipiscing velit non nulla in amet pellentesque. Sit
            turpis pretium eget maecenas. Vestibulum dolor mattis consectetur
            eget commodo vitae. Amet pellentesque sit pulvinar lorem mi a,
            euismod risus r.
          </Description>
        </ContainerAbout>
        <ContainerImage>
          <img src={MyPhoto.src} alt="Lucas Costa" className="image" />
        </ContainerImage>
      </Container>
    </AboutCustom>
  );
};
