import styled from "styled-components";

export const CardCustom = styled.div`
  min-width: 250px;

  background-color: ${(props) => props.theme.bgShade};
  border-bottom: 3px solid transparent;
  border-radius: 8px;

  padding: 1.5rem;

  &:hover {
    cursor: pointer;
    border-bottom: 3px solid ${(props) => props.theme.primary};
  }
`;

export const Title = styled.h2`
  font-size: 1.2rem;
  margin-top: 1rem;
`;

export const Description = styled.p`
  font-size: 1rem;
  margin-top: 1rem;

  line-height: 1.5;
`;
