import styled from "styled-components";

export const MyProjectsCustom = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1250px;
  display: flex;
  flex-direction: column;
  margin: 1rem;
  overflow-y: auto;
`;

export const ContainerCard = styled.div`
  width: 100%;
  display: flex;
  gap: 0.5rem;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 3rem;
  margin-left: 1rem;
`;
