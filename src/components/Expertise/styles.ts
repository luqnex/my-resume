import styled from "styled-components";

export const ExpertiseCustom = styled.section`
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1250px;
  margin-left: 1rem;
  overflow-y: auto;
`;

export const ContainerCard = styled.section`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }

  &:last-child {
    padding-right: 1rem;
  }
`;

export const Title = styled.h1`
  font-size: 2rem;
  margin: 1rem 0 3rem 0;
`;
