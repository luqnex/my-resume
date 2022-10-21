import styled from "styled-components";

export const AboutCustom = styled.div`
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.section`
  width: 100%;
  height: 100%;
  max-width: 1250px;

  display: flex;
  justify-content: space-between;
  margin: 2rem;

  gap: 3rem;
`;

export const ContainerAbout = styled.section`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;

  gap: 1.5rem;
`;

export const Title = styled.h1`
  font-size: 2rem;
`;

export const Description = styled.p`
  line-height: 1.5;
`;

export const ContainerImage = styled.section`
  width: 40%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
