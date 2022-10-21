import { Main } from "../../components/Main";
import { About } from "../../components/About";
import { Header } from "../../components/Header";
import { Expertise } from "../../components/Expertise";
import { MyProjects } from "../../components/MyProjects";

import { Container } from "./styles";

export const Home = () => {
  return (
    <Container>
      <Header />
      <Main />
      <Expertise />
      <About />
      <MyProjects />
    </Container>
  );
};
