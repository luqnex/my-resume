import styled from "styled-components";

export const MyProjectsCustom = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1250px;
  display: flex;
  flex-direction: column;
  margin: 0rem;
  overflow-y: auto;
`;

export const ContainerTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  margin-bottom: 3rem;
  margin-left: 1rem;
`;

export const Title = styled.h1`
  font-size: 2rem;
`;

export const Button = styled.button`
  color: #ffff;
  background-color: ${(props) => props.theme.dribble};
  border: 1px solid ${(props) => props.theme.dribble};
  border-radius: 0.4rem;
  padding: 0.5rem 2rem;
  font-size: 1rem;

  margin-right: 1rem;

  &:hover {
    color: ${(props) => props.theme.dribble};
    background-color: #ffff;
    transition: ease-in-out 0.3s;
    cursor: pointer;
  }
`;

export const ContainerCard = styled.div`
  width: 100%;
  display: flex;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;
