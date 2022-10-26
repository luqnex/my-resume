/* eslint-disable @next/next/no-img-element */
import { ListCustom } from "../ListCustom";

import Logo from "../../../public/assets/Logo.png";

import { useIsMobile } from "../../hooks/useIsMobile";

import { Container, HeaderContainer } from "./styles";

export const Header = () => {
  const [isMobile] = useIsMobile();

  return (
    <HeaderContainer id="home">
      <Container>
        <img src={Logo.src} alt="Lucas Costa" />
        {!isMobile && <ListCustom />}
      </Container>
    </HeaderContainer>
  );
};
