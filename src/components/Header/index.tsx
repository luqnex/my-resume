/* eslint-disable @next/next/no-img-element */
import { ListCustom } from "../ListCustom";

import Logo from "../../../public/assets/Logo.png";

import { Container, HeaderContainer } from "./styles";

export const Header = () => {
  return (
    <HeaderContainer id="home">
      <Container>
        <img src={Logo.src} alt="Lucas Costa" />
        <ListCustom />
      </Container>
    </HeaderContainer>
  );
};
