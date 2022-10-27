import { useEffect, useState } from "react";

import { AiOutlineMenu, AiOutlineMenuUnfold } from "react-icons/ai";

import {
  BackDrop,
  ButtonMenu,
  ContainerListMobile,
  Link,
  List,
  ListItem,
  ListMobile,
} from "./styles";

export const ListCustom = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  useEffect(() => {
    if (open) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "auto";
    }
  }, [open]);

  return (
    <>
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

      <ButtonMenu onClick={handleOpen}>
        {open ? <AiOutlineMenuUnfold size={24} /> : <AiOutlineMenu size={24} />}
      </ButtonMenu>
      {open && (
        <ContainerListMobile>
          <ListMobile>
            <Link href="#home" onClick={handleOpen}>
              <ListItem>Home</ListItem>
            </Link>
            <Link href="#expertise" onClick={handleOpen}>
              <ListItem>Experiencia</ListItem>
            </Link>
            <Link href="#about" onClick={handleOpen}>
              <ListItem>Sobre</ListItem>
            </Link>
            <Link href="#projects" onClick={handleOpen}>
              <ListItem>Projetos</ListItem>
            </Link>
          </ListMobile>
          <BackDrop />
        </ContainerListMobile>
      )}
    </>
  );
};
