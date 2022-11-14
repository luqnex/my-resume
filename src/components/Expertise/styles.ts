import styled from "styled-components";

import { motion } from "framer-motion";

export const ExpertiseCustom = styled.section`
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 700px) {
    height: 100%;
    margin: 5rem 0;
  }
`;

export const Container = styled(motion.div)`
  width: 100%;
  max-width: 1250px;
  margin: 1rem;
`;

export const ContainerCard = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 1rem;

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

export const Title = styled.h1`
  font-size: 2rem;
  margin: 1rem 0 3rem 0;
`;
