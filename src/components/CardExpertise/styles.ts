import styled from "styled-components";

export const CardCustom = styled.a`
  width: 33.33%;

  background-color: ${(props) => props.theme.bgShade};
  border-bottom: 3px solid transparent;
  border-radius: 8px;

  padding: 1.5rem;

  color: ${(props) => props.theme.body};
  text-decoration: none;

  &:hover {
    cursor: pointer;
    border-bottom: 3px solid ${(props) => props.theme.primary};
  }

  img {
    @media (max-width: 700px) {
      width: 50px;
    }
  }

  @media (max-width: 700px) {
    width: 100%;
  }
`;

export const Title = styled.h2`
  font-size: 1.2rem;
  margin-top: 1rem;

  color: black;
`;

export const Description = styled.p`
  font-size: 1rem;
  margin-top: 1rem;

  line-height: 1.5;
`;
