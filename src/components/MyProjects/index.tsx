import { CardProject } from "../CardProject";

import { Container, ContainerCard, MyProjectsCustom, Title } from "./styles";

export const MyProjects = () => {
  return (
    <MyProjectsCustom>
      <Container>
        <Title>Meus projetos</Title>

        <ContainerCard>
          <CardProject
            link="#"
            title="React Js"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia obcaecati"
          />

          <CardProject
            link="#"
            title="React Js"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia obcaecati"
          />

          <CardProject
            link="#"
            title="React Js"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia obcaecati"
          />
        </ContainerCard>
      </Container>
    </MyProjectsCustom>
  );
};
