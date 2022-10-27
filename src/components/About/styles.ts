import styled from "styled-components";

export const AboutCustom = styled.div`
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 700px) {
    height: 100%;
  }
`;

export const Container = styled.section`
  width: 100%;
  height: 100%;
  max-width: 1250px;

  display: flex;
  justify-content: space-between;
  margin: 1rem;

  gap: 3rem;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const ContainerAbout = styled.section`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;

  gap: 1.5rem;

  @media (max-width: 600px) {
    width: 100%;
  }
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

  @media (max-width: 600px) {
    width: 100%;
    margin-bottom: 4rem;
  }

  .image {
    width: 100%;

    @media (max-width: 600px) {
      width: 80%;
    }
  }
`;
