/* eslint-disable @next/next/no-img-element */

import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

import Logo from "../../../public/assets/Logo.png";

import { useIsMobile } from "../../hooks/useIsMobile";

import { ListCustom } from "../ListCustom";

import {
  Container,
  ContainerIcons,
  ContentFooter,
  Icons,
  Text,
} from "./styles";

export const Footer = () => {
  const [isMobile] = useIsMobile();

  console.log(isMobile);

  return (
    <Container>
      <ContentFooter>
        <ContainerIcons>
          <img src={Logo.src} alt="Lucas Costa" />
          {!isMobile && <ListCustom />}
          <Icons>
            <AiFillGithub size={24} />
            <AiFillLinkedin size={24} />
            <AiFillInstagram size={24} />
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
