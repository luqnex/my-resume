import styled from "styled-components";

export const MainCustom = styled.main`
  width: 100%;
  height: calc(100vh - 4rem);

  display: flex;
  justify-content: center;
  align-items: center;

  background: ${(props) => props.theme.bgShade};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 2rem;

  h4 {
    font-size: 1rem;
    font-weight: 600;

    margin-bottom: 2rem;
  }

  h1 {
    font-size: 3.5rem;

    span {
      color: ${(props) => props.theme.primary};
    }
  }

  p {
    font-size: 1.125rem;
    font-weight: 400;

    color: ${(props) => props.theme.body};

    margin-top: 0.5rem;
  }
`;

export const Button = styled.button`
  margin: 0 auto;
  background: none;
  background-color: ${(props) => props.theme.primary};

  color: #ffff;

  font-size: 1rem;
  border: 1px solid transparent;
  padding: 1rem;
  border-radius: 0.3rem;

  margin-top: 4rem;

  &:hover {
    transition: ease-in-out 0.3s;

    cursor: pointer;

    background-color: #fff;
    color: ${(props) => props.theme.primary};
    border: 1px solid ${(props) => props.theme.primary};
  }
`;
