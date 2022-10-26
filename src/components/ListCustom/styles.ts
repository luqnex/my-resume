import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  gap: 2rem;
  padding: 2rem;
`;

export const Link = styled.a`
  color: #000;
  text-decoration: none;
`;

export const ListItem = styled.li`
  list-style: none;

  &:hover {
    cursor: pointer;
  }
`;
