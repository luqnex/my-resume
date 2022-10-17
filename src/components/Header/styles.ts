import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 4rem;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0 2rem;
`;

export const List = styled.ul`
  display: flex;
  gap: 2rem;
  padding: 2rem;
`;

export const ListItem = styled.li`
  list-style: none;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1250px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Button = styled.button`
  background: none;
  border: 1px solid ${(props) => props.theme.primary};

  color: ${(props) => props.theme.primary};

  padding: 0.8rem 1rem;
  border-radius: 0.3rem;
`;
