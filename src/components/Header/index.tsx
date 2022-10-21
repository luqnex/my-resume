import Image from "next/image";

// import logo from "../../../public/assets/logo.png";

import { Container, HeaderContainer, List, ListItem } from "./styles";

export const Header = () => {
  return (
    <HeaderContainer>
      <Container>
        {/* <Image src={logo} alt="Logo" />
         */}
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Portifolio</ListItem>
          <ListItem>Sobre</ListItem>
        </List>
      </Container>
    </HeaderContainer>
  );
};
