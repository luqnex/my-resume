import { Main } from "../../components/Main";
import { Header } from "../../components/Header";
import { Container } from "./styles";
import { Expertise } from "../../components/Expertise";

export const Home = () => {
  return (
    <Container>
      <Header />
      <Main />
      <Expertise />
    </Container>
  );
};
