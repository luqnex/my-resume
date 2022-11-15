/* eslint-disable @next/next/no-img-element */

import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

import Logo from "../../../public/assets/Logo_lucas.dev.png";

import { ListCustom } from "../ListCustom";

import {
  Container,
  ContainerIcons,
  ContainerMobileNone,
  ContentFooter,
  Icons,
  Text,
} from "./styles";

export const Footer = () => {
  return (
    <Container>
      <ContentFooter>
        <ContainerIcons>
          <img src={Logo.src} alt="Lucas Costa" />
          <ContainerMobileNone>
            <ListCustom />
          </ContainerMobileNone>
          <Icons>
            <a
              href="https://github.com/luqnex"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/lucascostaljc/"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillLinkedin size={24} />
            </a>
            <a
              href="https://www.instagram.com/lucass.ljc/"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillInstagram size={24} />
            </a>
          </Icons>
        </ContainerIcons>
        <Text>
          Criado por{" "}
          <a href="https://github.com/luqnex" target="_blank" rel="noreferrer">
            Lucas Costa
          </a>
        </Text>
      </ContentFooter>
    </Container>
  );
};
