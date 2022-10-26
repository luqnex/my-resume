import { Link, List, ListItem } from "./styles";

export const ListCustom = () => {
  return (
    <List>
      <Link href="#home">
        <ListItem>Home</ListItem>
      </Link>
      <Link href="#expertise">
        <ListItem>Experiencia</ListItem>
      </Link>
      <Link href="#about">
        <ListItem>Sobre</ListItem>
      </Link>
      <Link href="#projects">
        <ListItem>Projetos</ListItem>
      </Link>
    </List>
  );
};
