/* eslint-disable @next/next/no-img-element */
import { ListCustom } from "../ListCustom";

import Logo from "../../../public/assets/Logo_lucas.dev.png";

import { Container, HeaderContainer } from "./styles";

export const Header = () => {
  return (
    <HeaderContainer>
      <Container>
        <img src={Logo.src} alt="Lucas Costa" />
        <ListCustom />
      </Container>
    </HeaderContainer>
  );
};
