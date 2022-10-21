import styled from "styled-components";

type ImageCustomProps = {
  src: string;
};

export const CardCustom = styled.div`
  width: 100%;
  box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
`;

export const ImageCustom = styled.div<ImageCustomProps>`
  width: 100%;
  height: 18rem;
  background-image: url(${(props) => props.src});
  background-size: cover;
  border-radius: 8px;
`;

export const ContainerDescription = styled.div`
  min-height: 12rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem 1.5rem;
  gap: 1rem;
`;

export const Title = styled.h2`
  font-size: 1.2rem;
`;

export const Description = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  color: ${(props) => props.theme.body};
`;
