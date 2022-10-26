import { CardProject } from "../CardProject";

import {
  Button,
  Container,
  ContainerCard,
  ContainerTitle,
  MyProjectsCustom,
  Title,
} from "./styles";

export const MyProjects = () => {
  return (
    <MyProjectsCustom id="projects">
      <Container>
        <ContainerTitle>
          <Title>Meus projetos</Title>
          <a href="https://github.com/luqnex" target="_blank" rel="noreferrer">
            <Button>Github</Button>
          </a>
        </ContainerTitle>

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
