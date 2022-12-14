import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 4rem;

  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  background: ${(props) => props.theme.white};

  padding: 0 1rem;

  z-index: 999;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1250px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 200px;
    height: auto;
  }
`;
