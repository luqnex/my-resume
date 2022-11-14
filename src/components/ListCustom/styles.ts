import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  gap: 2rem;
  padding: 2rem;

  @media (max-width: 700px) {
    display: none;
  }
`;

export const Link = styled.a`
  color: #000;
  text-decoration: none;
`;

export const ListItem = styled.li`
  list-style: none;
  font-weight: 500;

  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.primary};
    transition: all 0.3s;
  }

  @media (max-width: 699px) {
    color: ${(props) => props.theme.white};
  }
`;

export const ButtonMenu = styled.button`
  border: none;
  background-color: transparent;

  &:hover {
    cursor: pointer;
  }

  @media (min-width: 699px) {
    display: none;
  }
`;

export const ContainerListMobile = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 4rem;
  left: 0;

  background-color: rgba(30, 30, 30, 70%);

  z-index: 999;
`;

export const ListMobile = styled.ul`
  width: 15rem;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  font-size: 1.5rem;
  background-color: ${(props) => props.theme.body};

  position: absolute;
  right: 0;

  opacity: 1 !important;

  @media (min-width: 699px) {
    display: none;
  }
`;

export const BackDrop = styled.div`
  width: 100%;
  height: 50%;
`;
