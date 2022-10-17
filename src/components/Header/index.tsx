import { Button, Container, HeaderContainer, List, ListItem } from "./styles";

import logo from "../../../public/assets/logo.png";
import Image from "next/image";

export const Header = () => {
  return (
    <HeaderContainer>
      <Container>
        <Image src={logo} alt="Logo" />

        <List>
          <ListItem>Home</ListItem>
          <ListItem>Portifolio</ListItem>
          <ListItem>Sobre</ListItem>
        </List>
        {/* <Button>Contato</Button> */}
      </Container>
    </HeaderContainer>
  );
};
