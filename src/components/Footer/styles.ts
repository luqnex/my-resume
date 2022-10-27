import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  height: 12rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.bgShade};
  margin-top: 3rem;
`;

export const ContentFooter = styled.div`
  width: 100%;
  max-width: 1250px;
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 1rem;
`;

export const ContainerIcons = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 10rem;
  }
`;

export const Icons = styled.div`
  display: flex;
  gap: 1rem;
`;

export const Text = styled.p`
  font-size: 1rem;

  a {
    color: ${(props) => props.theme.primary};
    text-decoration: none;
  }
`;
